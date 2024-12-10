import type { JSX } from "preact";
import Script, { type Props } from "./script.tsx";

function BackOnTopButton({ }: JSX.IntrinsicElements["div"] & Props) {
  return (
    <>
        <div className="text-center inline-flex items-center gap-x-4 w-full">
          <button
            id="backOnTop"
            className="text-sm font-helvetica leading-tight-1.6 text-white"
          >
            Voltar ao Topo
          </button>
          <div className="w-10 border-b border-white"></div>
        </div>
        <Script />
    </>
  );
}

export default BackOnTopButton;