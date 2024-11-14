import { JSX } from "preact";
import { ImageWidget } from "apps/admin/widgets.ts";
import Image from "apps/website/components/Image.tsx";

export type ContentNextPage = JSX.Element;
export interface Props {
    /**
     * @title Texto
     */
    text: string,
    /**
     * @title Texto ao passar o mouse
     */
    hoverText: string,
    /**
     * @title Imagem
     */
    image: ImageWidget,
    /**
     * @title Link Destino
     */
    url: string
}

export default function ContentNextPageSection({
    text = '',
    hoverText = '',
    image = '',
    url = ''
}: Props) {
    return (
        <section className="w-full h-full bg-black">
            <a href={url} class="container !py-[150px] relative block bg-black">
                <div className="hidden">
                    <Image
                        src={image || ""}
                        alt={text}
                        width={100}
                        className="w-full h-full"
                        loading="lazy"
                        decoding="async"
                    />
                </div>
                <div className="hidden absolute inset-0 flex items-center justify-center">
                    <p className="text-[4.5vw] font-helvetica font-bold leading-tight-1 tracking-tight-1.36 text-center uppercase !text-white">{hoverText}</p>
                </div>
                <p className="text-[4.5vw] font-helvetica font-bold leading-tight-1 tracking-tight-1.36 text-center uppercase">{text}</p>
            </a>
        </section>
    )
}