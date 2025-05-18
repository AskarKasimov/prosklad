import React, { useEffect, useRef, useState } from 'react';
import styles from './CustomSelect.module.scss';

export type Option = {
  value: string;
  label?: string;
};

type CustomSelectProps = {
  options: Option[];
  value?: string;
  placeholder?: string;
  // eslint-disable-next-line no-unused-vars
  onChange: (_: string) => void;
  disabled?: boolean;
  className?: string;
};

export const CustomSelect: React.FC<CustomSelectProps> = ({
  options,
  value,
  placeholder = 'Выберите...',
  onChange,
  disabled = false,
  className = '',
}) => {
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (ref.current && !ref.current.contains(event.target as Node)) {
        setOpen(false);
      }
    };
    if (open) {
      document.addEventListener('mousedown', handleClickOutside);
    }
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [open]);

  const selected = options.find((opt) => opt.value === value);

  return (
    <div
      className={`${styles.selectWrapper} ${className} ${disabled ? styles.disabled : ''}`}
      ref={ref}
      tabIndex={0}
      onClick={() => !disabled && setOpen((o) => !o)}
      onKeyDown={(e) => {
        if ((e.key === 'Enter' || e.key === ' ') && !disabled)
          setOpen((o) => !o);
        if (e.key === 'Escape') setOpen(false);
      }}
    >
      <div className={styles.selectedValue}>
        {selected ? (
          (selected.label ?? selected.value)
        ) : (
          <span className={styles.placeholder}>{placeholder}</span>
        )}
        <span
          className={styles.arrow}
          style={
            open
              ? { transform: 'rotate(225deg)' }
              : { transform: 'rotate(45deg)' }
          }
        />
      </div>
      {open && (
        <ul className={styles.optionsList}>
          {options.map((opt) => (
            <li
              key={opt.value}
              className={`${styles.option} ${opt.value === value ? styles.active : ''}`}
              onClick={(e) => {
                e.stopPropagation();
                onChange(opt.value);
                setOpen(false);
              }}
              tabIndex={-1}
            >
              {opt.label ?? opt.value}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};
