import Link from 'next/link';
import css from './LinkPrimary.module.css';

interface Props {
  width: number;
  text: string;
  page: string;
}

export default function LinkPrimary({ width, text, page }: Props) {
  return (
    <Link
      prefetch={false}
      className={css.link}
      href={page}
      style={{ width: width }}
    >
      {text}
    </Link>
  );
}
