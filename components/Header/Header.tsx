import Link from 'next/link';
import css from './Header.module.css';

export default function Header() {
  return (
    <header className={css.header}>
      <div className={`container ${css.headerContainer}`}>
        <Link className={css.logoLink} href="/">
          <img className={css.logoImg} src="/logo.svg" alt="company logo" />
        </Link>

        <nav className={css.nav}>
          <ul className={css.navList}>
            <li className={css.navItem}>
              <Link className={css.navItemLink} href="/">
                Home
              </Link>
            </li>
            <li className={css.navItem}>
              <Link className={css.navItemLink} href="#">
                Catalog
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}
