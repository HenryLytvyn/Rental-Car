'use client';

import { useState } from 'react';
import css from './DoubleInput.module.css';

interface Values {
  from: string;
  to: string;
}

interface Props {
  handleChange: (value: Values) => void;
}

export default function DoubleInput({ handleChange }: Props) {
  const [values, setValues] = useState<Values>({
    from: '',
    to: '',
  });

  function handleChangeFrom(event: React.ChangeEvent<HTMLInputElement>) {
    const digits = event.target.value.replace(/\D/g, '');
    const formatted = digits.replace(/\B(?=(\d{3})+(?!\d))/g, ' ');

    const newValues = {
      ...values,
      from: formatted,
    };

    setValues(newValues);
    handleChange(newValues);
  }

  function handleChangeTo(event: React.ChangeEvent<HTMLInputElement>) {
    const digits = event.target.value.replace(/\D/g, '');
    const formatted = digits.replace(/\B(?=(\d{3})+(?!\d))/g, ' ');

    const newValues = {
      ...values,
      to: formatted,
    };

    setValues(newValues);
    handleChange(newValues);
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
