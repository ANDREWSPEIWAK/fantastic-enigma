import { useState } from 'react';
import { Eyebrow, H1, AccordionRow } from '../components/ui-new';

const STATIONS = [
  { title: 'Касса — Register', subtitle: 'Приём заказа' },
  { title: 'Бариста 1 (шоты) — Bar 1 — Espresso', subtitle: 'Экстракция' },
  { title: 'Бариста 2 (молоко/сборка) — Bar 2 — Milk & Build', subtitle: 'Текстура молока' },
  { title: 'Пасс (экспедитор) — Expo', subtitle: 'Контроль выдачи' },
  { title: 'Плавающий — Floater', subtitle: 'Поддержка' },
];

export default function Shift(): JSX.Element {
  const [openIdx, setOpenIdx] = useState(0);

  return (
    <div className="pt-4 pb-4">
      <Eyebrow>5 позиций с миссией, обязанностями и правилом</Eyebrow>
      <H1>Станции</H1>

      <div className="mt-4">
        {STATIONS.map((station, idx) => (
          <AccordionRow
            key={idx}
            title={station.title}
            subtitle={station.subtitle}
            open={openIdx === idx}
            onToggle={() => setOpenIdx(openIdx === idx ? -1 : idx)}
          >
            <div style={{ fontSize: 13, color: '#111111' }}>
              Миссия, обязанности и правило для данной позиции.
            </div>
          </AccordionRow>
        ))}
      </div>
    </div>
  );
}
