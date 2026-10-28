import { useEffect } from 'react';
import { useProgressStore } from '../store';
import { rankFor } from '../data/gamification';
import { Eyebrow, H1, CardLight, CardAccent, ButtonPrimary, ProgressBar, Pill } from '../components/ui-new';

export default function Path(): JSX.Element {
  const state = useProgressStore();
  const { xp, dayOpened } = state;

  useEffect(() => {
    dayOpened();
  }, [dayOpened]);

  const rank = rankFor(xp);

  const stages = [
    'Сервис',
    'Оборудование',
    'Эспрессо и молоко',
    'Фильтр и спешелти',
    'Аттестация',
  ];

  return (
    <div className="pt-4 pb-4">
      <Eyebrow>Твой путь</Eyebrow>
      <H1>Путь</H1>

      <div className="mt-4 flex items-center justify-between">
        <div style={{ color: '#FFFFFF', fontFamily: 'var(--font-body)', fontWeight: 700, fontSize: 14 }}>Прогресс</div>
        <div style={{ color: '#FFFFFF', fontFamily: 'var(--font-body)', fontWeight: 700, fontSize: 14 }}>{xp} XP</div>
      </div>
      <div className="mt-2">
        <ProgressBar value={rank.next ? (rank.into / rank.span) * 100 : 100} />
      </div>

      <CardLight className="mt-4">
        {stages.map((stage, idx) => (
          <div
            key={idx}
            className="flex items-center justify-between py-3"
            style={{ borderTop: idx === 0 ? 'none' : '1px solid #CFCCC4' }}
          >
            <div className="flex items-center gap-3">
              <div
                style={{
                  width: 28,
                  height: 28,
                  borderRadius: 9999,
                  background: idx === 0 ? '#C9D98A' : '#111111',
                  color: idx === 0 ? '#111111' : '#FFFFFF',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  fontFamily: 'var(--font-body)',
                  fontWeight: 700,
                  fontSize: 13,
                }}
              >
                {idx + 1}
              </div>
              <span style={{ fontFamily: 'var(--font-body)', fontWeight: 700, fontSize: 14 }}>{stage}</span>
            </div>
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#111111" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
              <path d="m9 18 6-6-6-6" />
            </svg>
          </div>
        ))}
      </CardLight>

      <CardAccent color="yellow" className="mt-4">
        <div className="flex items-center justify-between mb-3">
          <div style={{ fontFamily: 'var(--font-display)', fontWeight: 800, fontSize: 16, textTransform: 'uppercase' }}>Продолжить</div>
          <Pill dark>Этап</Pill>
        </div>
        <div style={{ fontFamily: 'var(--font-body)', fontWeight: 700, fontSize: 14, marginBottom: 12 }}>Сервис</div>
        <ButtonPrimary>Открыть этап</ButtonPrimary>
      </CardAccent>
    </div>
  );
}
