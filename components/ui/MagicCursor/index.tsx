import type { JSX } from "preact";
import Script, { type Props } from "./script.tsx";

function MagicCursor({ }: JSX.IntrinsicElements["div"] & Props) {
  return (
    <>
        <div id="magicCursor" className="border border-white rounded-full h-8 w-8 fixed top-0 left-0 pointer-events-none opacity-90 text-[12px]"></div>
        <Script />
    </>
  );
}

export default MagicCursor;