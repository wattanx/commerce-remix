import { LoaderFunctionArgs } from '@remix-run/cloudflare';
import { useLoaderData } from '@remix-run/react';
import { getItems } from '~/lib/client';
import { NavLink as Link } from '@remix-run/react';

export async function loader({ params, context }: LoaderFunctionArgs) {
  const id = params.id;

  if (!id) {
    throw new Response(null, { status: 404, statusText: 'Not Found' });
  }

  const { items } = await getItems(context.cloudflare.env, { ids: [id] });

  const item = items[0];

  return {
    item,
  };
}

export default function ItemDetailPage() {
  const { item } = useLoaderData<typeof loader>();

  return (
    <main className="flex min-h-[calc(100vh-56px)] flex-col items-center pt-8">
      <div>
        <Link to={`/`} unstable_viewTransition>
          back
        </Link>
      </div>
      <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
        <div key={item.id} className="flex min-w-56 flex-col gap-4 px-4 py-2">
          <div>
            <img className="item-image" src={item.image_urls[0]} width="400" />
          </div>
          <p className="item-name">{item.name}</p>
          <p className="item-price">¥{item.variations[0].regular_price}</p>
          <p>{item.description}</p>
        </div>
      </div>
    </main>
  );
}
