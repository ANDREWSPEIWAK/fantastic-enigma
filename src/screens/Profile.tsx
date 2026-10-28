import { Eyebrow, H1, CardLight, Pill, Tile } from '../components/ui-new';

export default function Profile(): JSX.Element {
  return (
    <div className="pt-4 pb-4">
      <Eyebrow>Прогресс и синхронизация</Eyebrow>
      <H1>Профиль</H1>

      <CardLight className="mt-4">
        <div style={{ fontFamily: 'var(--font-display)', fontWeight: 800, fontSize: 16, textTransform: 'uppercase', marginBottom: 8 }}>Ранги</div>
        <div className="flex items-center justify-between mb-2">
          <div style={{ fontWeight: 700 }}>Бариста</div>
          <Pill dark>200 XP</Pill>
        </div>
        <div style={{ fontSize: 13, color: '#555555', marginBottom: 10 }}>Доступ к обучению</div>
        <div className="flex items-center justify-between mb-2">
          <div style={{ fontWeight: 700 }}>Шеф-бариста</div>
          <Pill dark>1400 XP</Pill>
        </div>
        <div style={{ fontSize: 13, color: '#555555' }}>Право проводить аттестацию</div>
      </CardLight>

      <div className="mt-4 grid grid-cols-3 gap-3">
        <Tile color="lime">Достижения</Tile>
        <Tile color="yellow">Стрик</Tile>
        <Tile color="violet">Рекорды</Tile>
      </div>

      <CardLight className="mt-4" style={{ background: '#1B1B1D', color: '#FFFFFF' }}>
        <div className="flex items-center justify-between mb-2">
          <div style={{ fontFamily: 'var(--font-display)', fontWeight: 800, fontSize: 16, textTransform: 'uppercase' }}>Синхронизация / Устройство</div>
          <Pill>Готово</Pill>
        </div>
        <div style={{ fontSize: 13, marginBottom: 8 }}>Device ID</div>
        <div className="flex gap-2 mb-3">
          <input
            className="flex-1"
            style={{ height: 44, borderRadius: 22, border: '1px solid #3A3A3D', background: '#0F0F10', color: '#FFFFFF', padding: '0 12px', fontSize: 13 }}
            placeholder="ID устройства"
            readOnly
          />
          <button type="button" style={{ height: 44, borderRadius: 22, padding: '0 14px', background: '#E8E6DF', color: '#111111', fontWeight: 700, fontSize: 13 }}>
            Копировать ID
          </button>
        </div>
        <input
          className="w-full mb-3"
          style={{ height: 44, borderRadius: 22, border: '1px solid #3A3A3D', background: '#0F0F10', color: '#FFFFFF', padding: '0 12px', fontSize: 13 }}
          placeholder="claimCode"
        />
        <button type="button" style={{ width: '100%', height: 48, borderRadius: 24, background: '#FDC55E', color: '#111111', fontFamily: 'var(--font-display)', fontWeight: 800, fontSize: 13, textTransform: 'uppercase' }}>
          Загрузить
        </button>
        <button type="button" className="mt-3 w-full" style={{ height: 48, borderRadius: 24, background: '#1B1B1D', color: '#FFFFFF', border: '1px solid #3A3A3D', fontFamily: 'var(--font-display)', fontWeight: 800, fontSize: 13, textTransform: 'uppercase' }}>
          Синхронизировать
        </button>
      </CardLight>

      <button type="button" className="mt-4 w-full text-left" style={{ color: '#EB5A52', fontWeight: 700, fontSize: 13 }}>
        Удалить прогресс
      </button>
    </div>
  );
}
