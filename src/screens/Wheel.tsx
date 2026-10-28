import { H1, CardLight, Tile, Pill, Eyebrow } from '../components/ui-new';

const TILES = [
  { label: 'Цитрус', color: 'lime' as const },
  { label: 'Косточка', color: 'yellow' as const },
  { label: 'Вино', color: 'violet' as const },
  { label: 'Трава', color: 'plum' as const },
  { label: 'Орех', color: 'coral' as const },
  { label: 'Сладость', color: 'yellow' as const },
];

export default function Wheel(): JSX.Element {
  return (
    <div className="pt-4 pb-4">
      <H1 className="text-center">Вкусы</H1>

      <div className="mt-4 grid grid-cols-2 gap-3">
        {TILES.map((tile, idx) => (
          <Tile key={idx} color={tile.color}>{tile.label}</Tile>
        ))}
      </div>

      <CardLight className="mt-4">
        <div className="mb-4">
          <Eyebrow color="coral">Нота вкуса</Eyebrow>
          <div className="mt-2 flex flex-wrap gap-2">
            <Pill dark>Карамель</Pill>
            <Pill dark>Шоколад</Pill>
            <Pill dark>Мёд</Pill>
            <Pill dark>Кленовый сироп</Pill>
          </div>
        </div>
        <div className="mb-4">
          <Eyebrow color="violet">Регионы</Eyebrow>
          <div className="mt-2 space-y-1">
            <div style={{ fontSize: 13 }}>Эфиопия</div>
            <div style={{ fontSize: 13 }}>Колумбия</div>
            <div style={{ fontSize: 13 }}>Бразилия</div>
          </div>
        </div>
        <div>
          <Eyebrow color="coral">Как продавать</Eyebrow>
          <div className="mt-2" style={{ fontSize: 13 }}>
            Подчеркни баланс и акцент конкретной ноты под предпочтения гостя.
          </div>
        </div>
      </CardLight>
    </div>
  );
}
