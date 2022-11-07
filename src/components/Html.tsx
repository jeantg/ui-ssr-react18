import { PropsWithChildren } from 'react';

type HtmlProps = PropsWithChildren<{ title: string }>;

export const Html = ({ children, title }: HtmlProps) => {
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="stylesheet" href="/index.css" />
        <link rel="stylesheet" href="/global.css" />
        <title>{title}</title>
      </head>
      <body>
        <noscript
          dangerouslySetInnerHTML={{
            __html: `<b>Enable JavaScript to run this app.</b>`,
          }}
        />
        {children}
      </body>
    </html>
  );
};
