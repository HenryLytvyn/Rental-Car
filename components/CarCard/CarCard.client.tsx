'use client';

import useFavouriteList from '@/lib/store/favouriteStore';
import { Icon } from '../Icon/Icon';
import css from './CarCard.module.css';

interface Props {
  id: string;
}

export default function CarCardClient({ id }: Props) {
  const { favouriteList, setFavourite } = useFavouriteList();

  function isFavourite() {
    return favouriteList.includes(id);
  }

  return (
    <>
      {isFavourite() && (
        <button
          className={css.favouriteBtn}
          type="button"
          onClick={() => setFavourite(id)}
        >
          <Icon
            name="icon-favourite-active"
            className={`${css.favouriteIcon} ${css.favouriteIconActive}`}
          />
        </button>
      )}

      {!isFavourite() && (
        <button
          className={css.favouriteBtn}
          type="button"
          onClick={() => setFavourite(id)}
        >
          <Icon
            name="icon-favourite-default"
            className={`${css.favouriteIcon} ${css.favouriteIconNotActive}`}
          />
        </button>
      )}
    </>
  );
}
