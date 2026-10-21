import React, { useState } from 'react';
import { wheelCategories, wheelColors } from '../data/wheel';

const colorFor = (index: number): string => wheelColors[index % wheelColors.length];

const textColorFor = (color: string): string => {
  return color === '#E8E6E1' || color === '#FBC85F' || color === '#C9DB8A' ? '#121212' : '#fff';
};

const NOTE_COLORS = ['#FBC85F', '#4F3F7F', '#EE5A55', '#121212'];

const noteTextColorFor = (color: string): string =>
  color === '#FBC85F' || color === '#C9DB8A' || color === '#E8E6E1' || color === '#EE5A55' ? '#121212' : '#fff';

const Wheel: React.FC = () => {
  const [activeId, setActiveId] = useState<string | null>(null);
  const activeIndex = wheelCategories.findIndex((c) => c.id === activeId);
  const cat = activeIndex >= 0 ? wheelCategories[activeIndex] : undefined;

  return (
    <div style={{ background: '#121212', color: '#E8E6E1', minHeight: '100vh', padding: 20, fontFamily: 'Manrope, sans-serif' }}>
      <h1 style={{ margin: '20px 0 0', fontFamily: "'Unbounded', Manrope, sans-serif", fontWeight: 800, fontSize: 28, lineHeight: 1.15, color: '#E8E6E1' }}>
        ВКУСЫ
      </h1>
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 12, marginTop: 16 }}>
        {wheelCategories.map((category, i) => {
          const color = colorFor(i);
          const active = activeId === category.id;
          const textColor = textColorFor(color);
          return (
            <button
              key={category.id}
              type="button"
              onClick={() => setActiveId(active ? null : category.id)}
              style={{
                height: 84,
                boxSizing: 'border-box',
                borderRadius: 28,
                background: color,
                color: textColor,
                padding: '12px 16px',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
                border: 0,
                cursor: 'pointer',
                boxShadow: active ? 'inset -5px -5px 10px rgba(0,0,0,.7)' : undefined,
              }}
            >
              <span style={{ fontSize: 13, fontWeight: 700 }}>{i + 1}</span>
              <span style={{ fontFamily: "'Unbounded', Manrope, sans-serif", fontWeight: 800, fontSize: 15, lineHeight: 1.15 }}>
                {category.short.toUpperCase()}
              </span>
            </button>
          );
        })}
      </div>

      {cat ? (
        <div style={{ marginTop: 18, borderRadius: 32, background: '#E8E6E1', color: '#121212', padding: 20 }}>
          <div style={{ fontSize: 12, fontWeight: 700, letterSpacing: 2, color: '#5B45F0' }}>НОТА ВКУСА</div>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: 6, marginTop: 8, fontSize: 13, fontWeight: 700 }}>
            {cat.notes.map((note, i) => {
              const c = NOTE_COLORS[i % NOTE_COLORS.length];
              return (
                <span key={note} style={{ padding: '6px 12px', borderRadius: 16, background: c, color: noteTextColorFor(c) }}>
                  {note}
                </span>
              );
            })}
          </div>
          <div style={{ marginTop: 14, fontSize: 12, fontWeight: 700, letterSpacing: 2, color: '#5B45F0' }}>РЕГИОНЫ</div>
          <div style={{ marginTop: 6, fontSize: 14, lineHeight: 1.5 }}>
            {cat.regions.map((region, i) => (
              <React.Fragment key={region.name}>
                {i > 0 && <br />}
                <b>{region.name}</b> — {region.why}
              </React.Fragment>
            ))}
          </div>
          <div style={{ marginTop: 14, fontSize: 12, fontWeight: 700, letterSpacing: 2, color: '#B8332E' }}>КАК ПРОДАВАТЬ</div>
          <p style={{ margin: '6px 0 0', fontSize: 14, lineHeight: 1.4 }}>
            Подчеркните ноту <b>{cat.notes[0]}</b> — яркая черта профиля, которая цепляет гостя.
          </p>
        </div>
      ) : (
        <div style={{ marginTop: 18, textAlign: 'center', color: '#C9C0A6', fontSize: 14 }}>
          Выберите категорию, чтобы увидеть ноты, регионы и совет по продажам
        </div>
      )}
    </div>
  );
};

export default Wheel;
