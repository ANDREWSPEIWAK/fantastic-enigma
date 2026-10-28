import { useState } from 'react';
import { Eyebrow, H1, CardAccent, Chip, SearchInput, Pill, ButtonPrimary } from '../components/ui-new';

const CHIPS = ['Все', 'Латте-арт', 'V60', 'Kalita Wave 185', 'Аэропресс', 'Экстракция'];

export default function Library(): JSX.Element {
  const [activeChip, setActiveChip] = useState('Все');

  return (
    <div className="pt-4 pb-4">
      <Eyebrow>Методики и видео</Eyebrow>
      <H1>Библиотека</H1>

      <div className="mt-4">
        <SearchInput placeholder="Поиск методики" />
      </div>

      <div className="mt-3 flex gap-2 overflow-x-auto no-scrollbar" style={{ scrollbarWidth: 'none' }}>
        {CHIPS.map((chip) => (
          <Chip key={chip} active={activeChip === chip} onClick={() => setActiveChip(chip)}>
            {chip}
          </Chip>
        ))}
      </div>

      <CardAccent color="yellow" className="mt-4">
        <div className="flex items-center justify-between mb-2">
          <Pill dark>Латте-арт</Pill>
        </div>
        <div style={{ fontFamily: 'var(--font-display)', fontWeight: 800, fontSize: 26, textTransform: 'uppercase', lineHeight: 1.05, marginBottom: 8 }}>
          Основы латте-арта
        </div>
        <div style={{ fontFamily: 'var(--font-body)', fontSize: 13, marginBottom: 10 }}>
          Техника потока, правильный угол и скорость
        </div>
        <div className="flex items-center gap-2 mb-3">
          <Pill dark>Youtube</Pill>
          <Pill dark>Прочесть</Pill>
          <span style={{ fontSize: 11, color: '#111111' }}>8 мин</span>
        </div>
        <ButtonPrimary>Открыть методику</ButtonPrimary>
      </CardAccent>

      <CardAccent color="violet" className="mt-4">
        <div className="flex items-center justify-between mb-2">
          <Pill>V60</Pill>
        </div>
        <div style={{ fontFamily: 'var(--font-display)', fontWeight: 800, fontSize: 26, textTransform: 'uppercase', lineHeight: 1.05, marginBottom: 8 }}>
          V60: пошаговый пролив
        </div>
        <div style={{ fontFamily: 'var(--font-body)', fontSize: 13, marginBottom: 10 }}>
          Блум, спираль, контроль потока
        </div>
        <div className="flex items-center gap-2 mb-3">
          <Pill>Прочесть</Pill>
          <span style={{ fontSize: 11, color: '#FFFFFF' }}>6 мин</span>
        </div>
        <ButtonPrimary>Открыть методику</ButtonPrimary>
      </CardAccent>
    </div>
  );
}
