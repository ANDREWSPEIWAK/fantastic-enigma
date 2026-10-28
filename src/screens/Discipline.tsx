import { useState } from 'react';
import { Eyebrow, H1, CardLight, Chip, ChecklistRow } from '../components/ui-new';

export default function Discipline(): JSX.Element {
  const [tab, setTab] = useState('checklists');
  const [items, setItems] = useState([
    { label: 'Прогреть оборудование', note: '05:00', checked: false },
    { label: 'Проверить воду/пар', note: '', checked: false },
    { label: 'Настроить рабочее место', note: '', checked: false },
    { label: 'Подготовить посуду', note: '', checked: false },
  ]);

  const toggle = (idx: number) => {
    setItems(items.map((item, i) => i === idx ? { ...item, checked: !item.checked } : item));
  };

  return (
    <div className="pt-4 pb-4">
      <Eyebrow>Стандарты станции</Eyebrow>
      <H1>Дисциплина</H1>

      <div className="mt-4 flex items-center justify-between">
        <div style={{ color: '#FFFFFF', fontFamily: 'var(--font-body)', fontWeight: 700, fontSize: 14 }}>Прогресс</div>
        <div style={{ color: '#FFFFFF', fontFamily: 'var(--font-body)', fontWeight: 700, fontSize: 14 }}>0 XP</div>
      </div>

      <div className="mt-3 flex gap-2">
        <Chip active={tab === 'checklists'} onClick={() => setTab('checklists')}>Чек-листы</Chip>
        <Chip active={tab === 'rules'} onClick={() => setTab('rules')}>Правила</Chip>
      </div>

      <CardLight className="mt-4">
        <div style={{ fontFamily: 'var(--font-body)', fontWeight: 700, fontSize: 12, textTransform: 'uppercase', letterSpacing: '0.14em', color: '#5B3FF0', marginBottom: 6 }}>
          Перед первым гостем
        </div>
        <div style={{ fontFamily: 'var(--font-display)', fontWeight: 800, fontSize: 16, textTransform: 'uppercase', marginBottom: 8 }}>Открытие смены</div>
        {items.map((item, idx) => (
          <ChecklistRow key={idx} label={item.label} note={item.note} checked={item.checked} onToggle={() => toggle(idx)} />
        ))}
      </CardLight>
    </div>
  );
}
