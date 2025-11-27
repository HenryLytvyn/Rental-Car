'use client';

import { useEffect, useState } from 'react';
import css from './DoubleInput.module.css';
import type { DoubleInputValuesType } from '@/types/DoubleInput/DoubleInput';

interface Props {
  handleChange: (value: DoubleInputValuesType) => void;
}

export default function DoubleInput({ handleChange }: Props) {
  const [values, setValues] = useState<DoubleInputValuesType>({
    from: '',
    to: '',
  });

  useEffect(() => {
    handleChange(values);
  }, [values]);

  function format(value: string) {
    const digits = value.replace(/\D/g, '');
    return digits.replace(/\B(?=(\d{3})+(?!\d))/g, ' ');
  }

  function handleChangeFrom(event: React.ChangeEvent<HTMLInputElement>) {
    const formatted = format(event.target.value);
    setValues(prev => ({ ...prev, from: formatted }));
  }

  function handleChangeTo(event: React.ChangeEvent<HTMLInputElement>) {
    const formatted = format(event.target.value);
    setValues(prev => ({ ...prev, to: formatted }));
  }

  return (
    <div className={css.inputsBlock}>
      <div className={css.inputContainer}>
        <p>From</p>
        <input
          onChange={handleChangeFrom}
          className={css.input}
          type="text"
          inputMode="numeric"
          value={values.from}
        />
      </div>

      <div className={css.divider}></div>

      <div className={css.inputContainer}>
        <p>To</p>
        <input
          onChange={handleChangeTo}
          className={css.input}
          type="text"
          inputMode="numeric"
          value={values.to}
        />
      </div>
    </div>
  );
}
