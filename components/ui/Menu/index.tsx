import type { JSX } from "preact";
import Script, { type Props } from "./script.tsx";

function Menu({ }: JSX.IntrinsicElements["div"] & Props) {
  return (
    <>
        <div id="menu" className="border border-white rounded-full h-9 w-9 fixed top-0 left-0"></div>
        <Script />
    </>
  );
}

export default Menu;