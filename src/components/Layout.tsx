import React, { useState } from 'react';

export type NavSection =
  | 'home'
  | 'path'
  | 'tests'
  | 'shift'
  | 'more'
  | 'library'
  | 'trainer'
  | 'practice'
  | 'profile'
  | 'discipline'
  | 'wheel'
  | 'admin'
  | 'skills'
  | 'training'
  | 'journal'
  | 'certification'
  | 'academy'
  | 'ttk';

interface LayoutProps {
  activeSection: NavSection;
  onNavigate: (section: NavSection) => void;
  children: React.ReactNode;
}

const bottomNavItems = [
  { id: 'path', section: 'path' as NavSection, label: 'Путь', icon: PathIcon },
  { id: 'library', section: 'library' as NavSection, label: 'Методики', icon: BookIcon },
  { id: 'tests', section: 'tests' as NavSection, label: 'Тесты', icon: CheckIcon },
  { id: 'shift', section: 'shift' as NavSection, label: 'Смена', icon: ClockIcon },
  { id: 'profile', section: 'profile' as NavSection, label: 'Профиль', icon: UserIcon },
];

function PathIcon() {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M4 20h5v-5h5v-5h5V5" />
    </svg>
  );
}

function BookIcon() {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z" />
      <path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z" />
    </svg>
  );
}

function CheckIcon() {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <circle cx="12" cy="12" r="9" />
      <path d="m9 12 2 2 4-4" />
    </svg>
  );
}

function ClockIcon() {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <circle cx="12" cy="12" r="9" />
      <path d="M12 7v5l3 3" />
    </svg>
  );
}

function UserIcon() {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2" />
      <circle cx="12" cy="7" r="4" />
    </svg>
  );
}

function MenuIcon() {
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" aria-hidden="true">
      <path d="M4 7h16M4 12h16M4 17h16" />
    </svg>
  );
}

function CloseIcon() {
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" aria-hidden="true">
      <path d="M18 6L6 18M6 6l12 12" />
    </svg>
  );
}

function ChevronRightIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="m9 18 6-6-6-6" />
    </svg>
  );
}

function DisciplineIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M9 11.5 11 14l4-5" />
      <rect x="4" y="4" width="16" height="16" rx="3" />
    </svg>
  );
}

function WheelIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <circle cx="12" cy="12" r="9" />
      <path d="M12 3v18M3 12h18" />
    </svg>
  );
}

function RouteIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M4 20h5v-5h5v-5h5V5" />
    </svg>
  );
}

function LanguageIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <circle cx="12" cy="12" r="9" />
      <path d="M3 12h18M12 3a15 15 0 0 1 4 9 15 15 0 0 1-4 9 15 15 0 0 1-4-9 15 15 0 0 1 4-9" />
    </svg>
  );
}

function SettingsIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <circle cx="12" cy="12" r="3" />
      <path d="M12 1v6m0 6v6m11-7h-6m-6 0H1" />
    </svg>
  );
}

const DRAWER_ITEMS = [
  { id: 'discipline', section: 'discipline' as NavSection, label: 'Дисциплина', icon: DisciplineIcon },
  { id: 'wheel', section: 'wheel' as NavSection, label: 'Вкусы', icon: WheelIcon },
  { id: 'ttk', section: 'ttk' as NavSection, label: 'Техкарты', icon: RouteIcon },
  { id: 'language', section: null, label: 'Язык', icon: LanguageIcon },
  { id: 'settings', section: null, label: 'Настройки', icon: SettingsIcon },
];

function isDrawerScreen(section: NavSection) {
  return section === 'discipline' || section === 'wheel' || section === 'ttk';
}

const Layout: React.FC<LayoutProps> = ({ activeSection, onNavigate, children }) => {
  const [drawerOpen, setDrawerOpen] = useState(false);
  const showActiveTab = !isDrawerScreen(activeSection) && activeSection !== 'more' && activeSection !== 'skills' && activeSection !== 'training' && activeSection !== 'journal' && activeSection !== 'certification' && activeSection !== 'admin';

  const getActiveBottomId = () => {
    if (activeSection === 'path' || activeSection === 'home' || activeSection === 'academy') return 'path';
    if (activeSection === 'library' || activeSection === 'trainer' || activeSection === 'practice') return 'library';
    if (activeSection === 'tests') return 'tests';
    if (activeSection === 'shift') return 'shift';
    if (activeSection === 'profile' || activeSection === 'more') return 'profile';
    return null;
  };

  const activeBottomId = getActiveBottomId();

  return (
    <div className="bg-bg text-white min-h-screen">
      {/* Header */}
      <header
        className="sticky top-0 z-40 bg-bg"
        style={{ paddingTop: 'calc(env(safe-area-inset-top, 0px) + 12px)' }}
      >
        <div className="flex items-center justify-between px-5 h-[48px]">
          <button
            type="button"
            aria-label="Меню"
            onClick={() => setDrawerOpen(true)}
            className="w-10 h-10 rounded-full bg-surface-dark border border-border-dark-1 flex items-center justify-center text-white"
          >
            <MenuIcon />
          </button>
          <button
            type="button"
            onClick={() => onNavigate('path')}
            className="flex items-center gap-2"
            aria-label="На главную"
          >
            <img src="/logo-202.png" alt="202" style={{ width: 34, height: 34, borderRadius: 10 }} />
            <span style={{ fontFamily: 'var(--font-display)', fontWeight: 800, fontSize: 14, textTransform: 'uppercase', letterSpacing: '0.02em' }}>
              <span style={{ color: '#FDC55E' }}>202F</span> <span style={{ color: '#FFFFFF' }}>ACADEMY</span>
            </span>
          </button>
          <button
            type="button"
            aria-label="Профиль"
            onClick={() => onNavigate('profile')}
            className="w-10 h-10 rounded-full bg-violet flex items-center justify-center text-white"
          >
            <UserIcon />
          </button>
        </div>
      </header>

      {/* Main content */}
      <main
        className="px-5"
        style={{ paddingBottom: 'calc(env(safe-area-inset-bottom, 0px) + 120px)', minHeight: 'calc(100vh - 60px)' }}
      >
        <div className="mx-auto w-full max-w-[480px]">
          {children}
        </div>
      </main>

      {/* Bottom Nav */}
      <nav
        aria-label="Основная навигация"
        className="fixed left-5 right-5 z-50 pointer-events-none"
        style={{ bottom: 'calc(env(safe-area-inset-bottom, 0px) + 24px)' }}
      >
        <div
          className="mx-auto max-w-[440px] pointer-events-auto h-16 bg-[#E8E6DF] flex items-center justify-around"
          style={{ borderRadius: 32, padding: '0 8px' }}
        >
          {bottomNavItems.map((item) => {
            const active = showActiveTab && activeBottomId === item.id;
            const Icon = item.icon;
            return (
              <button
                key={item.id}
                type="button"
                aria-label={item.label}
                aria-current={active ? 'page' : undefined}
                onClick={() => onNavigate(item.section)}
                className="flex items-center justify-center transition-transform"
                style={{
                  width: 48,
                  height: 48,
                  borderRadius: 9999,
                  background: active ? '#111111' : 'transparent',
                  color: active ? '#C9D98A' : '#111111',
                  transform: active ? 'scale(1)' : 'scale(1)',
                }}
                onMouseDown={(e) => { (e.currentTarget as HTMLElement).style.transform = 'scale(0.96)'; }}
                onMouseUp={(e) => { (e.currentTarget as HTMLElement).style.transform = 'scale(1.03)'; setTimeout(() => { (e.currentTarget as HTMLElement).style.transform = 'scale(1)'; }, 120); }}
                onTouchStart={(e) => { (e.currentTarget as HTMLElement).style.transform = 'scale(0.96)'; }}
                onTouchEnd={(e) => { (e.currentTarget as HTMLElement).style.transform = 'scale(1.03)'; setTimeout(() => { (e.currentTarget as HTMLElement).style.transform = 'scale(1)'; }, 120); }}
              >
                <Icon />
              </button>
            );
          })}
        </div>
      </nav>

      {/* Drawer */}
      {drawerOpen && (
        <div className="fixed inset-0 z-[60]">
          <div
            className="absolute inset-0 bg-black/60"
            onClick={() => setDrawerOpen(false)}
            aria-hidden="true"
          />
          <aside
            className="absolute left-0 top-0 h-full w-[300px] bg-[#E8E6DF] flex flex-col"
            style={{ borderRadius: '0 32px 32px 0' }}
          >
            <div className="flex items-center justify-between px-5 pt-6 pb-4">
              <div className="flex items-center gap-2">
                <img src="/logo-202.png" alt="202" style={{ width: 44, height: 44, borderRadius: 10 }} />
                <span style={{ fontFamily: 'var(--font-display)', fontWeight: 800, fontSize: 16, textTransform: 'uppercase' }}>
                  <span style={{ color: '#5B3FF0' }}>202F</span> <span style={{ color: '#111111' }}>ACADEMY</span>
                </span>
              </div>
              <button
                type="button"
                aria-label="Закрыть меню"
                onClick={() => setDrawerOpen(false)}
                className="w-10 h-10 rounded-full bg-[#111111]/5 border border-[#CFCCC4] flex items-center justify-center text-[#111111]"
              >
                <CloseIcon />
              </button>
            </div>
            <nav className="flex-1">
              {DRAWER_ITEMS.map((item, idx) => {
                const Icon = item.icon;
                return (
                  <button
                    key={item.id}
                    type="button"
                    onClick={() => {
                      if (item.section) {
                        onNavigate(item.section);
                      }
                      setDrawerOpen(false);
                    }}
                    className="w-full flex items-center gap-3 px-5 h-14"
                    style={{ borderTop: idx === 0 ? 'none' : '1px solid #CFCCC4', color: '#111111' }}
                  >
                    <div className="w-9 h-9 rounded-full bg-[#C9D98A] flex items-center justify-center text-[#111111]">
                      <Icon />
                    </div>
                    <span style={{ fontFamily: 'var(--font-display)', fontWeight: 800, fontSize: 14, textTransform: 'uppercase' }}>{item.label}</span>
                    <div className="ml-auto">
                      <ChevronRightIcon />
                    </div>
                  </button>
                );
              })}
            </nav>
          </aside>
        </div>
      )}
    </div>
  );
};

export default Layout;
