import LinkPrimary from '../LinkPrimary/LinkPrimary';
import css from './Hero.module.css';

export default function Hero() {
  return (
    <section className={css.hero}>
      <h1 className={css.mainTitle}>Find your perfect rental car</h1>
      <p className={css.text}>
        Reliable and budget-friendly rentals for any journey
      </p>
      <LinkPrimary text="View Catalog" width={276} page="/catalog" />
    </section>
  );
}
