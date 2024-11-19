import type { JSX } from "preact";
import Script, { type Props } from "./script.tsx";

function MagicCursor({ }: JSX.IntrinsicElements["div"] & Props) {
  return (
    <>
        <div id="magicCursor" className="border border-white rounded-full h-9 w-9 fixed top-0 left-0 pointer-events-none"></div>
        <Script />
    </>
  );
}

export default MagicCursor;