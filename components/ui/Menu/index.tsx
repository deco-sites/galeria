import type { JSX } from "preact";
import Script, { type Props } from "./script.tsx";

function Menu({ items }: JSX.IntrinsicElements["div"] & Props) {
  return (
    <>
        <button id="btnMenu" className="relative text-white flex items-center z-10">
            <span id="btnMenuCaption">Menu</span>
            <span id="menuIcon" className="grid gap-1 w-6 ml-3">
                <span className="w-full border border-white"></span>
                <span className="w-2/3 border border-white"></span>
            </span>
        </button>
        <div id="MenuContent" className="fixed inset-0 flex flex-col items-center justify-center w-full h-screen bg-black hidden">
            <ul className="space-y-5 text-white text-xl group hover:text-gray-light">
                {items.map((item, index) => (
                    <li>
                        <a href={item.url || "#"} className="py-5 flex w-full justify-center itemMenu hover:text-white">
                            <span className="text-gray-light mr-4 text-sm">0{(index + 1)}</span>
                            <span className="text-clamp uppercase">{item.text}</span>
                        </a>
                    </li>
                ))}
            </ul>
        </div>
        <Script />
    </>
  );
}

export default Menu;