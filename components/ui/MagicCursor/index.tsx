import type { JSX } from "preact";
import Script, { type Props } from "./script.tsx";

function MagicCursor({ }: JSX.IntrinsicElements["div"] & Props) {
  return (
    <>
        <div id="magicCursor" className="border border-white rounded-full h-[36px] w-[36px] fixed top-0 left-0"></div>
        <Script />
    </>
  );
}

export default MagicCursor;