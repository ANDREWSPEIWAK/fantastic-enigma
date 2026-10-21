import React, { useCallback, useEffect, useMemo, useState } from 'react';
import { useProgressStore } from '../store';
import { libraryTopics, libraryItems } from '../data/library';
import { EmptyNote } from '../components/app-ui';
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
      style={{
        height: 44,
        boxSizing: 'border-box',
        padding: '0 20px',
        borderRadius: 22,
        background: active ? '#C9DB8A' : 'transparent',
        color: active ? '#121212' : '#E8E6E1',
        fontWeight: 700,
        fontSize: 14,
        display: 'inline-flex',
        alignItems: 'center',
        border: active ? '0' : '1px solid #444',
        cursor: 'pointer',
        whiteSpace: 'nowrap',
      }}
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

const CARD_COLORS = ['#FBC85F', '#5B45F0'];

const Library: React.FC = () => {
  const store = useProgressStore();
  const { lessonsRead, readLesson, dayOpened } = store;

  const [topicId, setTopicId] = useState<string>('all');
  const [query, setQuery] = useState<string>('');
  const [modalItem, setModalItem] = useState<typeof libraryItems[number] | null>(null);

  useEffect(() => {
    dayOpened();
  }, [dayOpened]);

  const filtered = useMemo(() => {
    let items = topicId === 'all' ? libraryItems : libraryItems.filter((i) => i.topicId === topicId);
    const q = query.trim().toLowerCase();
    if (q) items = items.filter((i) => (i.title + ' ' + i.summary).toLowerCase().includes(q));
    return items;
  }, [topicId, query]);

  const openModal = useCallback((item: typeof libraryItems[number]) => setModalItem(item), []);
  const closeModal = useCallback(() => setModalItem(null), []);
  const handleRead = useCallback((id: string) => {
    readLesson(id);
    closeModal();
  }, [readLesson, closeModal]);

  return (
    <div className="bg-[#121212] min-h-screen text-[#E8E6E1] font-body anim-rise" style={{ padding: 0 }}>
      <div style={{ padding: 20 }}>
        <div style={{ fontSize: 12, fontWeight: 700, letterSpacing: 2, color: '#C9DB8A' }}>МЕТОДИКИ И ВИДЕО</div>
        <h1 style={{ margin: '2px 0 0', fontFamily: "'Unbounded', Manrope, sans-serif", fontWeight: 800, fontSize: 28, lineHeight: 1.15, color: '#E8E6E1' }}>
          БИБЛИОТЕКА
        </h1>
      </div>

      <div style={{ padding: '0 20px' }}>
        <div style={{ display: 'flex', gap: 10, marginTop: 16 }}>
          <div style={{ flex: 1, height: 48, borderRadius: 24, background: '#E8E6E1', color: '#555', display: 'flex', alignItems: 'center', gap: 10, padding: '0 18px', fontSize: 14 }}>
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#121212" strokeWidth="2" strokeLinecap="round" aria-hidden="true"><circle cx="11" cy="11" r="7" /><path d="M20 20l-4-4" /></svg>
            <input
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Найти методику"
              style={{ border: 0, background: 'transparent', outline: 'none', flex: 1, color: '#555', fontSize: 14, fontFamily: 'inherit' }}
            />
          </div>
          <button aria-label="Фильтры" style={{ width: 48, height: 48, borderRadius: 24, border: 0, background: '#5B45F0', color: '#fff', display: 'flex', alignItems: 'center', justifyContent: 'center', cursor: 'pointer' }}>
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" aria-hidden="true"><path d="M4 8h10M18 8h2M4 16h2M10 16h10" /><circle cx="16" cy="8" r="2" /><circle cx="8" cy="16" r="2" /></svg>
          </button>
        </div>

        <div style={{ display: 'flex', gap: 8, margin: '14px -20px 0', padding: '0 20px', overflowX: 'auto', whiteSpace: 'nowrap' }}>
          <Chip label="Все" active={topicId === 'all'} onClick={() => setTopicId('all')} />
          {libraryTopics.map((t) => (
            <Chip key={t.id} label={t.title} active={topicId === t.id} onClick={() => setTopicId(t.id)} />
          ))}
        </div>

        {filtered.length === 0 ? (
          <EmptyNote>Нет материалов по выбранной теме</EmptyNote>
        ) : (
          <div style={{ marginTop: 14 }}>
            {filtered.map((item, i) => {
              const topic = libraryTopics.find((t) => t.id === item.topicId);
              const done = !!lessonsRead[item.id];
              const color = CARD_COLORS[i % CARD_COLORS.length];
              const textColor = color === '#FBC85F' ? '#121212' : '#fff';
              const badgeBg = color === '#FBC85F' ? '#121212' : '#fff';
              const badgeText = color === '#FBC85F' ? '#FBC85F' : '#5B45F0';
              const youtubeBg = color === '#FBC85F' ? '#121212' : '#fff';
              const youtubeText = color === '#FBC85F' ? '#fff' : '#5B45F0';
              return (
                <div key={item.id} className="press" style={{ marginTop: i === 0 ? 0 : 12, borderRadius: 32, background: color, color: textColor, padding: 20 }}>
                  <span style={{ display: 'inline-block', padding: '4px 12px', borderRadius: 12, background: badgeBg, color: badgeText, fontSize: 12, fontWeight: 700, letterSpacing: 1 }}>
                    {(topic?.title ?? item.topicId).toUpperCase()}
                  </span>
                  <div style={{ fontFamily: "'Unbounded', Manrope, sans-serif", fontWeight: 800, fontSize: 25, lineHeight: 1.15, marginTop: 12 }}>
                    {item.title.toUpperCase()}
                  </div>
                  <p style={{ margin: '8px 0 0', fontSize: 14, lineHeight: 1.4, fontWeight: 500 }}>{item.summary}</p>
                  <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginTop: 12, fontSize: 13, fontWeight: 700 }}>
                    {item.youtube && <span style={{ padding: '5px 12px', borderRadius: 14, background: youtubeBg, color: youtubeText }}>youtube</span>}
                    <span style={{ padding: '5px 12px', borderRadius: 14, border: `1.5px solid ${textColor}` }}>{done ? 'прочитано' : 'прочесть'}</span>
                    <span style={{ marginLeft: 'auto', fontFamily: "'Unbounded', Manrope, sans-serif", fontSize: 15, fontWeight: 800 }}>{item.duration.toUpperCase()}</span>
                  </div>
                  <button
                    type="button"
                    onClick={() => openModal(item)}
                    style={{ marginTop: 14, width: '100%', height: 52, border: 0, borderRadius: 26, background: '#121212', color: '#fff', fontFamily: 'Manrope, sans-serif', fontWeight: 700, fontSize: 15, letterSpacing: 0.5, cursor: 'pointer' }}
                  >
                    ОТКРЫТЬ МЕТОДИКУ
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
