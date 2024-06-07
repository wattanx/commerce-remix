import { Links, Meta, Outlet, Scripts, ScrollRestoration } from '@remix-run/react';
import styles from './global.css?url';
import type { LinksFunction } from '@remix-run/cloudflare';
import { SiteHeader } from './components/SiteHeader';

export const links: LinksFunction = () => [
  { rel: 'stylesheet', href: styles },
  { rel: 'icon', href: '/favicon.ico', type: 'image/x-icon', sizes: '48x48' },
  { rel: 'icon', href: '/icon.svg', type: 'image/svg+xml', sizes: 'any' },
];

export function Layout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <Meta />
        <Links />
      </head>
      <body>
        <SiteHeader />
        {children}
        <ScrollRestoration />
        <Scripts />
      </body>
    </html>
  );
}

export default function App() {
  return <Outlet />;
}
