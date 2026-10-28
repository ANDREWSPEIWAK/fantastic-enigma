import { Eyebrow, H1, CardAccent, Pill } from '../components/ui-new';

export default function Tests(): JSX.Element {
  return (
    <div className="pt-4 pb-4">
      <Eyebrow>Рецепты · карточки · первый шаг</Eyebrow>
      <H1>Тесты и экзамен</H1>

      <div className="mt-4 flex flex-col gap-3">
        <CardAccent color="lime" style={{ height: 100 }}>
          <div className="flex items-center justify-between h-full">
            <div>
              <div style={{ fontFamily: 'var(--font-display)', fontWeight: 800, fontSize: 16, textTransform: 'uppercase', marginBottom: 4 }}>Квиз</div>
              <div style={{ fontFamily: 'var(--font-body)', fontSize: 13 }}>10 вопросов</div>
            </div>
            <Pill dark>0%</Pill>
          </div>
        </CardAccent>

        <CardAccent color="coral" style={{ height: 100 }}>
          <div className="flex items-center justify-between h-full">
            <div>
              <div style={{ fontFamily: 'var(--font-display)', fontWeight: 800, fontSize: 16, textTransform: 'uppercase', marginBottom: 4 }}>Блиц</div>
              <div style={{ fontFamily: 'var(--font-body)', fontSize: 13 }}>60 секунд</div>
            </div>
            <Pill dark>0 верных</Pill>
          </div>
        </CardAccent>

        <CardAccent color="violet" style={{ height: 100 }}>
          <div className="flex items-center justify-between h-full">
            <div>
              <div style={{ fontFamily: 'var(--font-display)', fontWeight: 800, fontSize: 16, textTransform: 'uppercase', marginBottom: 4 }}>Экзамен</div>
              <div style={{ fontFamily: 'var(--font-body)', fontSize: 13 }}>40 вопросов · 4 блока</div>
            </div>
            <Pill>0 / 40</Pill>
          </div>
        </CardAccent>

        <CardAccent color="yellow" style={{ height: 100 }}>
          <div className="flex items-center justify-between h-full">
            <div>
              <div style={{ fontFamily: 'var(--font-display)', fontWeight: 800, fontSize: 16, textTransform: 'uppercase', marginBottom: 4 }}>Кейсы</div>
              <div style={{ fontFamily: 'var(--font-body)', fontSize: 13 }}>12 ситуаций</div>
            </div>
            <Pill dark>0 / 12</Pill>
          </div>
        </CardAccent>
      </div>
    </div>
  );
}
