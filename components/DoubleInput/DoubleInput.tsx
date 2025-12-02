'use client';

import formatThousands from '@/utils/formatThousands';
import css from './DoubleInput.module.css';
import type { DoubleInputValuesType } from '@/types/DoubleInput/DoubleInput';

interface Props {
  handleChange: (value: DoubleInputValuesType) => void;
  valuesTo?: string;
  valuesFrom?: string;
}

export default function DoubleInput({
  handleChange,
  valuesTo = '',
  valuesFrom = '',
}: Props) {
  function handleChangeFrom(event: React.ChangeEvent<HTMLInputElement>) {
    const formatted = event.target.value.replace(/\D/g, '');
    handleChange({ from: formatted, to: valuesTo });
  }

  function handleChangeTo(event: React.ChangeEvent<HTMLInputElement>) {
    const formatted = event.target.value.replace(/\D/g, '');
    handleChange({ to: formatted, from: valuesFrom });
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
          value={formatThousands(valuesFrom)}
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
          value={formatThousands(valuesTo)}
        />
      </div>
    </div>
  );
}
