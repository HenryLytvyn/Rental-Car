import css from './ButtonPrimary.module.css';

interface Props {
  width: number;
  text: string;
}

export default function ButtonPrimary({ width, text }: Props) {
  return (
    <button className={css.button} style={{ width: width }}>
      {text}
    </button>
  );
}
