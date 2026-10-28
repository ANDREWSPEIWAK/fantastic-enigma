import { useState } from 'react';
import { Eyebrow, H1, SearchInput, Chip, CardLight, Pill } from '../components/ui-new';

const CHIPS = ['Работа в баре', 'Системы'];

const CARDS = [
  { title: 'Эспрессо: кадр и цифры', desc: 'Доза, выход, время, вкус' },
  { title: 'Станция, пик, чистка', desc: 'Организация и гигиена' },
  { title: 'PDCA, метрики, SBI', desc: 'Улучшения и обратная связь' },
];

export default function Ttk(): JSX.Element {
  const [activeChip, setActiveChip] = useState('Работа в баре');

  return (
    <div className="pt-4 pb-4">
      <Eyebrow>Рецепты · цифры</Eyebrow>
      <H1>Техкарты</H1>

      <div className="mt-4">
        <SearchInput placeholder="Поиск техкарты" />
      </div>

      <div className="mt-3 flex gap-2">
        {CHIPS.map((chip) => (
          <Chip key={chip} active={activeChip === chip} onClick={() => setActiveChip(chip)}>
            {chip}
          </Chip>
        ))}
      </div>

      <div className="mt-4 flex flex-col gap-3">
        {CARDS.map((card, idx) => (
          <CardLight key={idx}>
            <Pill dark>Техкарта</Pill>
            <div style={{ fontFamily: 'var(--font-display)', fontWeight: 800, fontSize: 17, textTransform: 'uppercase', marginTop: 8, marginBottom: 6, lineHeight: 1.1 }}>
              {card.title}
            </div>
            <div style={{ fontSize: 13, color: '#555555' }}>{card.desc}</div>
          </CardLight>
        ))}
      </div>
    </div>
  );
}
