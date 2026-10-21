import React from 'react';
import { cn } from '../lib/utils';
import BrandLogo from './BrandLogo';
import { ProgressRing } from './app-ui';

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

export type TabId = 'path' | 'ttk' | 'tests' | 'shift' | 'discipline' | 'library' | 'wheel' | 'profile';

const TAB_MAP: Record<TabId, NavSection[]> = {
  path: ['path', 'home', 'academy'],
  ttk: ['ttk'],
  tests: ['tests'],
  shift: ['shift'],
  discipline: ['discipline'],
  library: ['library'],
  wheel: ['wheel'],
  profile: ['profile', 'skills', 'journal', 'certification', 'admin', 'training', 'more'],
};

const TABS: { id: TabId; label: string; sections: NavSection[] }[] = [
  { id: 'path', label: 'Путь', sections: TAB_MAP.path },
  { id: 'ttk', label: 'ТТК', sections: TAB_MAP.ttk },
  { id: 'tests', label: 'Тесты', sections: TAB_MAP.tests },
  { id: 'shift', label: 'Смена', sections: TAB_MAP.shift },
  { id: 'discipline', label: 'Дисциплина', sections: TAB_MAP.discipline },
  { id: 'library', label: 'Методики', sections: TAB_MAP.library },
  { id: 'wheel', label: 'Вкусы', sections: TAB_MAP.wheel },
  { id: 'profile', label: 'Профиль', sections: TAB_MAP.profile },
];


const BOTTOM_TABS: { id: TabId; label: string; section: NavSection }[] = [
  { id: 'path', label: 'Путь', section: 'path' },
  { id: 'ttk', label: 'ТТК', section: 'ttk' },
  { id: 'tests', label: 'Тесты', section: 'tests' },
  { id: 'library', label: 'Методики', section: 'library' },
  { id: 'wheel', label: 'Вкусы', section: 'wheel' },
];

function sectionToTab(section: NavSection): TabId {
  for (const tab of TABS) {
    if (tab.sections.includes(section)) return tab.id;
  }
  return 'path';
}

const ICONS: Record<TabId, React.ReactNode> = {
  path: (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M4 20h5v-5h5v-5h5V5" />
    </svg>
  ),
  ttk: (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <circle cx="12" cy="12" r="9" />
      <path d="m8 12.5 2.5 2.5L16 9.5" />
    </svg>
  ),
  tests: (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26" />
    </svg>
  ),
  shift: (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <circle cx="12" cy="12" r="9" />
      <path d="M12 7v5l3 3" />
    </svg>
  ),
  discipline: (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <rect x="3" y="11" width="18" height="11" rx="2" ry="2" />
      <path d="M7 11V7a5 5 0 0 1 10 0v4" />
    </svg>
  ),
  library: (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z" />
      <path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z" />
    </svg>
  ),
  wheel: (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <circle cx="12" cy="12" r="10" />
      <path d="M12 2v20" />
      <path d="M2 12h20" />
    </svg>
  ),
  profile: (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2" />
      <circle cx="12" cy="7" r="4" />
    </svg>
  ),
};

interface LayoutProps {
  activeSection: NavSection;
  onNavigate: (section: NavSection) => void;
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ activeSection, onNavigate, children }) => {
  const activeTab = sectionToTab(activeSection);

  const sidebarButton = (active: boolean) =>
    cn(
      'w-full flex items-center gap-3 px-4 py-3 rounded-2xl text-sm font-medium transition-all border',
      active
        ? 'bg-[#FBC85F] text-[#000000] shadow-[0_0_20px_rgba(251,200,95,0.35)]'
        : 'text-[#C9C0A6] hover:bg-[#222222] hover:border-[#3a3a3a] border-transparent'
    );

  return (
    <div className="bg-[#121212] text-[#E8E6E1] h-screen flex flex-col lg:flex-row overflow-auto">
      {/* Desktop sidebar */}
      <aside className="hidden flex-col border-r border-[#3a3a3a] bg-[#121212]/95 backdrop-blur h-screen overflow-y-auto">
        <div className="p-6 flex flex-col gap-6">
          <div className="flex items-center gap-3">
            <BrandLogo size={44} />
            <span className="font-display text-xl font-bold tracking-tighter">
              <span className="text-[#EE5A55]">202</span><span className="text-[#FBC85F]">f Academy</span>
            </span>
          </div>
          <nav className="flex-1 flex-col gap-1">
            {TABS.map((tab) => {
              const active = activeTab === tab.id;
              return (
                <button
                  key={tab.id}
                  type="button"
                  onClick={() => onNavigate(tab.sections[0])}
                  className={sidebarButton(active)}
                >
                  {ICONS[tab.id]}
                  <span>{tab.label}</span>
                </button>
              );
            })}
          </nav>
          <div className="mt-auto p-4 rounded-3xl border border-[#3a3a3a] bg-[#1a1a1a]">
            <p className="text-xs text-[#555] mb-2">Синхронизация</p>
            <div className="flex items-center justify-between gap-3">
              <ProgressRing value={66} size={44} stroke={5} color="#FBC85F">
                66%
              </ProgressRing>
              <span className="text-xs font-mono2 text-[#FBC85F]">synced</span>
            </div>
          </div>
        </div>
      </aside>

      {/* Mobile header */}
      <header className="sticky top-0 z-40 bg-[#121212]/90 backdrop-blur-md border-b border-[#3a3a3a]">
        <div className="flex items-center justify-between px-4 py-3.5">
          <button type="button" aria-label="Меню" onClick={() => onNavigate('more')} style={{ width: 44, height: 44, borderRadius: 22, border: '1px solid #3a3a3a', background: '#1e1e1e', color: '#E8E6E1', display: 'flex', alignItems: 'center', justifyContent: 'center', cursor: 'pointer' }}>
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" aria-hidden="true"><path d="M4 7h16M4 12h16M4 17h10" /></svg>
          </button>
          <div className="font-display font-extrabold text-[17px] tracking-normal">
            <span className="text-[#FBC85F]">202F</span> ACADEMY
          </div>
          <button type="button" aria-label="Профиль" onClick={() => onNavigate('profile')} style={{ width: 44, height: 44, borderRadius: 22, border: 0, background: '#5B45F0', color: '#fff', display: 'flex', alignItems: 'center', justifyContent: 'center', cursor: 'pointer' }}>
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" aria-hidden="true"><circle cx="12" cy="8" r="4" /><path d="M4 21c0-4 4-6 8-6s8 2 8 6" /></svg>
          </button>
        </div>
      </header>

      <main className="flex-1 pb-20 overflow-y-auto">
        {children}
      </main>

      {/* Bottom nav (floating pill) */}
      <nav aria-label="Основная навигация" className="fixed bottom-0 left-0 right-0 z-50 px-5 pb-5 pointer-events-none">
        <div className="mx-auto max-w-md pointer-events-auto" style={{ height: 68, borderRadius: 34, background: '#E8E6E1', display: 'flex', alignItems: 'center', justifyContent: 'space-around', padding: '0 8px', boxShadow: '0 8px 24px rgba(0,0,0,.5)' }}>
          {BOTTOM_TABS.map((tab) => {
            const active = activeTab === tab.id;
            return (
              <button
                key={tab.id}
                type="button"
                aria-label={tab.label}
                aria-current={active ? 'page' : undefined}
                onClick={() => onNavigate(tab.section)}
                style={{
                  width: 52,
                  height: 52,
                  borderRadius: 26,
                  border: 0,
                  background: active ? '#121212' : 'transparent',
                  color: active ? '#C9DB8A' : '#121212',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  cursor: 'pointer',
                }}
              >
                {ICONS[tab.id]}
              </button>
            );
          })}
        </div>
      </nav>
    </div>
  );
};

export default Layout;