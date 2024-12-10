import { ComponentChildren } from "preact";
import { asset as asset, Head as Head } from "@deco/deco/htmx";
export const Layout = ({ children, revision, hmrUniqueId }: {
  children: ComponentChildren;
  revision: string;
  hmrUniqueId: string;
}) => {

  return (
    <>
      {/* Include Icons and manifest */}
      {/** @ts-ignore: ignore error */}
      <Head>
        {/* Enable View Transitions API */}
        <style
          dangerouslySetInnerHTML={{
            __html: `@view-transition { navigation: auto; }`,
          }}
        />

        {/* Tailwind v3 CSS file */}
        <link
          href={`/styles.css?revision=${revision}${hmrUniqueId}`}
          rel="stylesheet"
        />

        {/* Web Manifest */}
        <link rel="manifest" href={asset("/site.webmanifest")} />

        {/* Google fonts (https://www.google.com/fonts) */}
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link href="https://fonts.googleapis.com/css2?family=Archivo:ital,wdth,wght@0,62..125,100..900;1,62..125,100..900&display=swap" rel="stylesheet" />

      </Head>

      {/* Rest of Preact tree */}
      {children}
    </>
  );
};
