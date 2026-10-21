import React, { useState } from 'react';
import { wheelCategories, wheelColors } from '../data/wheel';
import { SectionHead, Pill } from '../components/app-ui';

const colorFor = (index: number): string => wheelColors[index % wheelColors.length];

const Wheel: React.FC = () => {
  const [activeId, setActiveId] = useState<string | null>(null);
  const activeIndex = wheelCategories.findIndex((c) => c.id === activeId);
  const cat = activeIndex >= 0 ? wheelCategories[activeIndex] : undefined;

  return (
    <div className="bg-[#121212] text-[#E8E6E1] min-h-screen p-6">
      <SectionHead kicker="Вкусовое колесо" title="Ароматика кофе" />

      <div className="mt-6 grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-8 gap-2">
        {wheelCategories.map((category, i) => {
          const color = colorFor(i);
          const active = activeId === category.id;
          const style: React.CSSProperties = {
            borderColor: color,
            backgroundColor: active ? `${color}20` : '#1a1a1a',
            color: active ? color : '#C9C0A6',
            ...(active ? { boxShadow: `0 0 14px ${color}50` } : {}),
          };
          return (
            <button
              key={category.id}
              onClick={() => setActiveId(active ? null : category.id)}
              style={style}
              className="flex flex-col items-center gap-2 px-3 py-4 rounded-xl border transition-all duration-200 anim-pop focus:outline-none"
            >
              <span className="text-[10px] font-bold opacity-60">{i + 1}</span>
              <div className="w-5 h-5 rounded-full" style={{ backgroundColor: color }} />
              <span className="text-xs font-bold leading-tight text-center">{category.short}</span>
            </button>
          );
        })}
      </div>

      {cat ? (
        <div className="mt-8 bg-[#1a1a1a] border border-[#3a3a3a] rounded-xl p-5 anim-rise">
          <div className="mb-4">
            <div className="text-xs font-bold text-[#FBC85F] uppercase tracking-wider mb-2">Нота вкуса</div>
            <div className="flex flex-wrap gap-2">
              {cat.notes.map((note, i) => (
                <Pill key={note} color={colorFor(i)}>
                  {note}
                </Pill>
              ))}
            </div>
          </div>

          <div className="mb-4">
            <div className="text-xs font-bold text-[#FBC85F] uppercase tracking-wider mb-2">Регионы</div>
            <div className="flex flex-wrap gap-2">
              {cat.regions.map((region, i) => (
                <div key={region.name} className="flex items-center gap-2">
                  <Pill color={colorFor(i + 4)}>{region.name}</Pill>
                  <span className="text-xs text-[#C9C0A6]">{region.why}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="pt-4 border-t border-[#3a3a3a]">
            <div className="text-xs font-bold text-[#EE5A55] uppercase tracking-wider mb-1">Как продавать</div>
            <p className="text-sm text-[#C9C0A6] leading-relaxed">
              Подчеркните ноту <span className="text-[#E8E6E1] font-bold">{cat.notes[0]}</span> — яркая черта профиля, которая цепляет гостя.
            </p>
          </div>
        </div>
      ) : (
        <div className="mt-8 text-center text-[#C9C0A6] text-sm anim-pop">
          Выберите категорию, чтобы увидеть ноты, регионы и совет по продажам
        </div>
      )}
    </div>
  );
};

export default Wheel;
