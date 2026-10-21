import React, { useCallback, useEffect, useMemo, useState } from 'react';
import { useProgressStore } from '../store';
import { libraryTopics, libraryItems } from '../data/library';
import { Pill, SectionHead, EmptyNote } from '../components/app-ui';
import { cn } from '../lib/utils';

interface ChipProps {
  label: string;
  active: boolean;
  onClick: () => void;
}

function Chip({ label, active, onClick }: ChipProps) {
  return (
    <button
      type="button"
      onClick={onClick}
      className={cn(
        'px-3 py-1.5 rounded-full text-xs font-semibold border transition-colors',
        active ? 'bg-[#FBC85F] border-[#FBC85F] text-[#121212]' : 'border-[#3a3a3a] bg-[#1a1a1a] text-[#E8E6E1] hover:border-[#FBC85F]',
      )}
    >
      {label}
    </button>
  );
}

interface ItemModalProps {
  item: { id: string; topicId: string; title: string; duration: string; summary?: string; youtube?: { id: string; title: string }; recipe?: { rows: string[][] }; sections: { title: string; steps?: string[]; body?: string }[] };
  onClose: () => void;
  onRead: (id: string) => void;
}

function ItemModal({ item, onClose, onRead }: ItemModalProps) {
  const store = useProgressStore();
  const done = !!store.lessonsRead[item.id];
  const topic = libraryTopics.find((t) => t.id === item.topicId);
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm anim-pop p-4" onClick={onClose}>
      <div className="bg-[#1a1a1a] border border-[#3a3a3a] rounded-2xl p-6 max-w-lg w-full text-[#E8E6E1] shadow-xl" onClick={(e) => e.stopPropagation()}>
        <div className="flex justify-between items-start mb-4">
          <div>
            <p className="text-xs text-[#555] uppercase tracking-wider">{topic?.title ?? item.topicId}</p>
            <h2 className="text-xl font-bold">{item.title}</h2>
            <p className="mt-1 text-sm text-[#C9C0A6]/80">{item.duration}</p>
          </div>
          <button type="button" onClick={onClose} className="p-1 text-[#555] hover:text-white">✕</button>
        </div>
        {item.youtube && (
          <div className="mb-4">
            <a href={`https://youtu.be/${item.youtube.id}`} target="_blank" rel="noopener noreferrer" className="text-[#FBC85F] text-sm font-semibold hover:underline">
              ▶ Смотреть на YouTube: {item.youtube.title}
            </a>
          </div>
        )}
        {item.recipe && (
          <div className="mb-4">
            <p className="mb-2 text-xs text-[#555] uppercase tracking-wider">Рецепт</p>
            <table className="w-full text-sm border-collapse">
              <tbody>
                {item.recipe.rows.map((row, r) => (
                  <tr key={r}>
                    <td className="py-1 border-b border-[#3a3a3a] text-[#555] w-1/3">{row[0]}</td>
                    <td className="py-1 border-b border-[#3a3a3a] text-[#E8E6E1]">{row[1]}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
        <div className="mb-6">
          {item.sections.map((sec, s) => (
            <div key={s} className="mb-4">
              <p className="mb-1 text-xs text-[#555] uppercase tracking-wider">{sec.title}</p>
              {sec.steps && sec.steps.map((step, st) => (
                <p key={st} className="mb-1 text-sm text-[#E8E6E1]">• {step}</p>
              ))}
              {sec.body && <p className="mt-1 text-sm text-[#C9C0A6]/90">{sec.body}</p>}
            </div>
          ))}
        </div>
        <div className="flex gap-2">
          <button type="button" onClick={onClose} className="flex-1 py-2.5 rounded-xl border border-[#3a3a3a] bg-[#1a1a1a] text-[#E8E6E1] text-sm font-semibold">
            Закрыть
          </button>
          <button
            type="button"
            onClick={() => onRead(item.id)}
            disabled={done}
            className={cn('flex-1 py-2.5 rounded-xl text-sm font-semibold transition-colors', done ? 'border-[#3a3a3a] bg-[#1a1a1a] text-[#555]' : 'bg-[#FBC85F] border-[#FBC85F] text-[#121212]')}
          >
            {done ? 'Уже прочитано ✓' : 'Отметить прочитанным · +10 XP'}
          </button>
        </div>
      </div>
    </div>
  );
}

const Library: React.FC = () => {
  const store = useProgressStore();
  const { lessonsRead, readLesson, dayOpened } = store;

  const [topicId, setTopicId] = useState<string>('all');
  const [modalItem, setModalItem] = useState<typeof libraryItems[number] | null>(null);

  useEffect(() => {
    dayOpened();
  }, [dayOpened]);

  const filtered = useMemo(() => (topicId === 'all' ? libraryItems : libraryItems.filter((i) => i.topicId === topicId)), [topicId]);

  const openModal = useCallback((item: typeof libraryItems[number]) => setModalItem(item), []);
  const closeModal = useCallback(() => setModalItem(null), []);
  const handleRead = useCallback((id: string) => {
    readLesson(id);
    closeModal();
  }, [readLesson, closeModal]);

  return (
    <div className="bg-[#121212] min-h-screen text-[#E8E6E1] font-body anim-rise">
      <SectionHead kicker="Методики и видео" title="Библиотека" />
      <div className="mx-auto max-w-5xl px-4 py-10">
        <div className="flex flex-wrap gap-2 mb-8">
          <Chip label="Все" active={topicId === 'all'} onClick={() => setTopicId('all')} />
          {libraryTopics.map((t) => (
            <Chip key={t.id} label={t.title} active={topicId === t.id} onClick={() => setTopicId(t.id)} />
          ))}
        </div>
        {filtered.length === 0 ? (
          <EmptyNote>Нет материалов по выбранной теме</EmptyNote>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {filtered.map((item, i) => {
              const topic = libraryTopics.find((t) => t.id === item.topicId);
              const done = !!lessonsRead[item.id];
              return (
                <div
                  key={item.id}
                  className={cn('anim-rise rounded-xl border p-4 flex flex-col transition-all', done ? 'border-[#FBC85F] bg-[#1a1a1a]/60' : 'border-[#3a3a3a] bg-[#1a1a1a]/60')}
                  style={{ animationDelay: `${i * 60}ms` }}
                >
                  <div className="mb-2">
                    <p className="text-xs text-[#555] uppercase tracking-wider">{topic?.title ?? item.topicId}</p>
                    <h3 className="text-base font-bold text-[#E8E6E1]">{item.title}</h3>
                  </div>
                  <p className="mb-3 text-sm text-[#C9C0A6]/80">{item.summary}</p>
                  <div className="mt-auto flex flex-wrap gap-2">
                    {item.youtube && <Pill color="#FBC85F" className="shrink-0">▶ youtube</Pill>}
                    <Pill color={done ? '#FBC85F' : '#3a3a3a'} className="shrink-0">{done ? '✓ прочитано' : 'прочесть'}</Pill>
                    <span className="ml-auto text-xs text-[#555]">{item.duration}</span>
                  </div>
                  <button
                    type="button"
                    onClick={() => openModal(item)}
                    className="mt-3 w-full py-2 rounded-xl border border-[#3a3a3a] bg-[#1a1a1a] text-[#E8E6E1] text-sm font-semibold hover:border-[#FBC85F]"
                  >
                    Открыть методику
                  </button>
                </div>
              );
            })}
          </div>
        )}
      </div>
      {modalItem && (
        <ItemModal item={modalItem} onClose={closeModal} onRead={handleRead} />
      )}
    </div>
  );
};

export default Library;
