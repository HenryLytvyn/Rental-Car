import css from './ButtonPrimary.module.css';

interface Props {
  width: number;
  text: string;
  handleClick: () => void;
}

export default function ButtonPrimary({ width, text, handleClick }: Props) {
  return (
    <button
      onClick={handleClick}
      className={css.button}
      style={{ width: width }}
    >
      {text}
    </button>
  );
}
