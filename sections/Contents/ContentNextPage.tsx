import { JSX } from "preact";
import NextPage from "../../components/ui/NextPage/index.tsx";

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

            <NextPage
                className="h-full w-full bg-white"
                text={text}
                hoverText={hoverText}
                image={image}
                url={url}
            >
            </NextPage>

        </section>
    )
}