import React from 'react';
import { cn } from '../lib/utils';

export function Eyebrow({ children, color = 'lime', className }: { children: React.ReactNode; color?: 'lime' | 'violet' | 'coral' | 'yellow'; className?: string }) {
  const colorMap = {
    lime: '#C9D98A',
    violet: '#5B3FF0',
    coral: '#EB5A52',
    yellow: '#FDC55E',
  };
  return (
    <p
      className={cn(className)}
      style={{
        fontFamily: 'var(--font-body)',
        fontWeight: 700,
        fontSize: 12,
        textTransform: 'uppercase',
        letterSpacing: '0.14em',
        color: colorMap[color],
      }}
    >
      {children}
    </p>
  );
}

export function H1({ children, className }: { children: React.ReactNode; className?: string }) {
  return (
    <h1
      className={cn('mt-1', className)}
      style={{
        fontFamily: 'var(--font-display)',
        fontWeight: 800,
        fontSize: 28,
        textTransform: 'uppercase',
        lineHeight: 1.1,
      }}
    >
      {children}
    </h1>
  );
}

export function CardLight({ children, className, style }: { children: React.ReactNode; className?: string; style?: React.CSSProperties }) {
  return (
    <div
      className={cn(className)}
      style={{
        background: '#E8E6DF',
        color: '#111111',
        borderRadius: 32,
        padding: 16,
        ...style,
      }}
    >
      {children}
    </div>
  );
}

export function CardAccent({ children, className, style, color = 'yellow' }: { children: React.ReactNode; className?: string; style?: React.CSSProperties; color?: 'yellow' | 'violet' | 'lime' | 'coral' | 'plum' }) {
  const colorMap = {
    yellow: '#FDC55E',
    violet: '#5B3FF0',
    lime: '#C9D98A',
    coral: '#EB5A52',
    plum: '#523E80',
  };
  const textColor = color === 'violet' || color === 'plum' ? '#FFFFFF' : '#111111';
  return (
    <div
      className={cn(className)}
      style={{
        background: colorMap[color],
        color: textColor,
        borderRadius: 32,
        padding: 16,
        ...style,
      }}
    >
      {children}
    </div>
  );
}

export function ButtonPrimary({ children, className, onClick, fullWidth = true }: { children: React.ReactNode; className?: string; onClick?: () => void; fullWidth?: boolean }) {
  return (
    <button
      type="button"
      onClick={onClick}
      className={cn(className)}
      style={{
        background: '#111111',
        color: '#FFFFFF',
        height: 48,
        borderRadius: 24,
        fontFamily: 'var(--font-display)',
        fontWeight: 800,
        fontSize: 13,
        textTransform: 'uppercase',
        width: fullWidth ? '100%' : 'auto',
        padding: '0 20px',
      }}
    >
      {children}
    </button>
  );
}

export function Chip({ children, active = false, className, onClick }: { children: React.ReactNode; active?: boolean; className?: string; onClick?: () => void }) {
  return (
    <button
      type="button"
      onClick={onClick}
      className={cn('whitespace-nowrap', className)}
      style={{
        height: 36,
        padding: '0 14px',
        borderRadius: 20,
        fontFamily: 'var(--font-body)',
        fontWeight: 700,
        fontSize: 13,
        background: active ? '#C9D98A' : 'transparent',
        color: active ? '#111111' : '#FFFFFF',
        border: active ? 'none' : '1px solid #3A3A3D',
      }}
    >
      {children}
    </button>
  );
}

export function Pill({ children, className, dark }: { children: React.ReactNode; className?: string; dark?: boolean }) {
  return (
    <span
      className={cn('inline-flex items-center', className)}
      style={{
        height: 26,
        padding: '0 12px',
        borderRadius: 14,
        fontFamily: 'var(--font-body)',
        fontWeight: 700,
        fontSize: 12,
        textTransform: 'uppercase',
        background: dark ? '#111111' : '#1B1B1D',
        color: '#FFFFFF',
        border: dark ? 'none' : '1px solid #2A2A2D',
      }}
    >
      {children}
    </span>
  );
}

export function ProgressBar({ value, className }: { value: number; className?: string }) {
  const pct = Math.max(0, Math.min(100, value));
  return (
    <div className={cn('w-full', className)} style={{ height: 8, borderRadius: 4, background: '#2A2A2D', overflow: 'hidden' }}>
      <div style={{ height: '100%', width: `${pct}%`, background: '#C9D98A', transition: 'width 0.3s ease' }} />
    </div>
  );
}

export function Tile({ children, color = 'lime', className }: { children: React.ReactNode; color?: 'lime' | 'yellow' | 'violet' | 'coral' | 'plum'; className?: string }) {
  const colorMap = {
    lime: '#C9D98A',
    yellow: '#FDC55E',
    violet: '#5B3FF0',
    coral: '#EB5A52',
    plum: '#523E80',
  };
  const textColor = color === 'violet' || color === 'plum' ? '#FFFFFF' : '#111111';
  return (
    <div
      className={cn('flex items-center justify-center text-center', className)}
      style={{
        background: colorMap[color],
        color: textColor,
        borderRadius: 28,
        height: 96,
        padding: '0 12px',
        fontFamily: 'var(--font-display)',
        fontWeight: 800,
        fontSize: 14,
        textTransform: 'uppercase',
        lineHeight: 1.15,
      }}
    >
      {children}
    </div>
  );
}

export function SearchInput({ placeholder, onChange }: { placeholder?: string; onChange?: (v: string) => void }) {
  const [value, setValue] = React.useState('');
  return (
    <div className="flex items-center gap-2" style={{ background: '#E8E6DF', borderRadius: 24, height: 48, paddingLeft: 16, paddingRight: 4 }}>
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#555555" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <circle cx="11" cy="11" r="7" />
        <path d="m21 21-4.3-4.3" />
      </svg>
      <input
        type="text"
        value={value}
        onChange={(e) => { setValue(e.target.value); onChange?.(e.target.value); }}
        placeholder={placeholder}
        className="flex-1 bg-transparent outline-none"
        style={{ color: '#111111', fontSize: 14 }}
      />
      <button type="button" aria-label="Фильтр" className="w-10 h-10 rounded-full bg-violet flex items-center justify-center text-white">
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
          <path d="M3 6h18M7 12h10M10 18h4" />
        </svg>
      </button>
    </div>
  );
}

export function ChecklistRow({ label, note, checked, onToggle }: { label: string; note?: string; checked?: boolean; onToggle?: () => void }) {
  return (
    <button
      type="button"
      onClick={onToggle}
      className="w-full flex items-center justify-between py-3"
      style={{ borderTop: '1px solid #CFCCC4', color: '#111111' }}
    >
      <div className="flex items-center gap-3">
        <div
          style={{
            width: 20,
            height: 20,
            borderRadius: 6,
            border: checked ? 'none' : '2px solid #111111',
            background: checked ? '#111111' : 'transparent',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
          }}
        >
          {checked && (
            <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="#FFFFFF" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="m20 6-11 11-5-5" />
            </svg>
          )}
        </div>
        <span style={{ fontFamily: 'var(--font-body)', fontWeight: 700, fontSize: 14 }}>{label}</span>
      </div>
      {note && <span style={{ fontSize: 11, color: '#555555' }}>{note}</span>}
    </button>
  );
}

export function AccordionRow({ title, subtitle, children, open, onToggle }: { title: string; subtitle?: string; children?: React.ReactNode; open?: boolean; onToggle?: () => void }) {
  return (
    <CardLight className="mb-3">
      <button
        type="button"
        onClick={onToggle}
        className="w-full flex items-center justify-between"
        style={{ color: '#111111' }}
      >
        <div>
          <div style={{ fontFamily: 'var(--font-display)', fontWeight: 800, fontSize: 14, textTransform: 'uppercase' }}>{title}</div>
          {subtitle && <div style={{ fontSize: 12, color: '#555555', marginTop: 2 }}>{subtitle}</div>}
        </div>
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" style={{ transform: open ? 'rotate(90deg)' : 'rotate(0deg)', transition: 'transform 0.2s ease' }}>
          <path d="m9 18 6-6-6-6" />
        </svg>
      </button>
      {open && <div className="mt-3">{children}</div>}
    </CardLight>
  );
}
