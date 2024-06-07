import type { LoaderFunctionArgs, MetaFunction } from '@remix-run/cloudflare';
import { getItems } from '~/lib/client';
import { useLoaderData } from '@remix-run/react';
import { Item } from '~/lib/Item';

export const meta: MetaFunction = () => {
  return [
    { title: 'E-Commerce with Remix' },
    {
      name: 'description',
      content: 'E-Commerce with Remix',
    },
  ];
};

export const loader = async ({ context }: LoaderFunctionArgs) => {
  const { env } = context.cloudflare;
  const data = await getItems(env, { limit: 3, status: 'shown' });

  return data;
};

export default function Index() {
  const { items } = useLoaderData<typeof loader>();

  return (
    <main className="flex min-h-[calc(100vh-56px)] flex-col items-center pt-8">
      <h1 className="text-4xl font-bold">ふしぎないらすとや</h1>

      <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
        {items.map((item) => (
          <Item item={item} key={item.id} />
        ))}
      </div>
    </main>
  );
}
