'use client';

import Link from 'next/link';
import css from './Header.module.css';
import { usePathname } from 'next/navigation';

export default function Header() {
  const isHomePage = usePathname() === '/';
  const isCatalogPage = usePathname() === '/catalog';

  return (
    <header className={css.header}>
      <div className={`container ${css.headerContainer}`}>
        <Link prefetch={false} className={css.logoLink} href="/">
          <img className={css.logoImg} src="/logo.svg" alt="company logo" />
        </Link>

        <nav className={css.nav}>
          <ul className={css.navList}>
            <li className={css.navItem}>
              <Link
                prefetch={false}
                className={`${css.navItemLink} ${isHomePage ? css.accentColor : ''}`}
                href="/"
              >
                Home
              </Link>
            </li>
            <li className={css.navItem}>
              <Link
                prefetch={false}
                className={`${css.navItemLink} ${isCatalogPage ? css.accentColor : ''}`}
                href="/catalog"
              >
                Catalog
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}
