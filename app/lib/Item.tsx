import type { ItemResponse } from './types';
import { NavLink as Link } from '@remix-run/react';

export const Item = ({ item }: { item: ItemResponse }) => {
  return (
    <Link unstable_viewTransition to={`/items/${item.id}/`} className="flex min-w-56 flex-col gap-4 px-4 py-2">
      {({ isTransitioning }) => (
        <>
          <div>
            <img className={isTransitioning ? 'item-image' : ''} src={item.image_urls[0]} width="200" />
          </div>
          <p className={isTransitioning ? 'item-name' : ''}>{item.name}</p>
          <p className={isTransitioning ? 'item-price' : ''}>¥{item.variations[0].regular_price}</p>
        </>
      )}
    </Link>
  );
};
