import type { JSX } from "preact";
import Script, { type Props } from "./script.tsx";

function ContentButton({
  type,
  url,
  text
 }: JSX.IntrinsicElements["div"] & Props) {
  return (
    <>
        <section className="bg-black">
            <div className="grid justify-center items-center mb-4">
                <a
                    href={url || "#"}
                    className={`${type}`}
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    {text}
                </a>
                <div className="border-link w-0 bg-white h-[1px] duration-500"></div>
            </div>
        </section>
        <Script />
    </>
  );
}

export default ContentButton;