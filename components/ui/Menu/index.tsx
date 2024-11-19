import type { JSX } from "preact";
import Script, { type Props } from "./script.tsx";

function Menu({ items }: JSX.IntrinsicElements["div"] & Props) {
  return (
    <>
        <button id="btnMenu" class="flex items-center justify-center text-white font-bold rounded-lg overflow-hidden group z-10">
            <div className="relative w-24 h-6">
                <span class="absolute transition-transform duration-500 group-hover:-translate-y-full">
                    Menu
                </span>
                <span id="btnMenuCaption" class="absolute transition-transform duration-500 translate-y-full group-hover:translate-y-0">
                    Abrir
                </span>
            </div>
            <span id="menuIcon" className="grid gap-1 w-6 ml-3">
                <span className="w-full border border-white"></span>
                <span className="w-2/3 border border-white"></span>
            </span>
        </button>
        <div id="MenuContent" className="fixed inset-0 flex flex-col items-center justify-center w-full h-screen bg-black opacity-0 hidden transition-opacity duration-500">
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