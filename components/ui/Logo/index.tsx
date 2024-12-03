import type { JSX } from "preact";
import Script, { type Props } from "./script.tsx";
import Image from "apps/website/components/Image.tsx";

function Logo({ logo }: JSX.IntrinsicElements["div"] & Props) {
  return (
    <>
      <div id="logoContainer" className="pr-10">
        {logo && (
          <a id="logoHeader" href="/" className="flex items-center z-10">
            <Image
              src={logo}
              width={48}
              height={48}
              className="w-12 h-12 object-contain"
              title="Logo"
            />
          </a>
        )}
      </div>
      <Script />
    </>
  );
}

export default Logo;