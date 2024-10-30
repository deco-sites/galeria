import { ImageWidget } from "apps/admin/widgets.ts";
import Image from "apps/website/components/Image.tsx";

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

export default function Section({
    text = '',
    hoverText = '',
    image = '',
    url = ''
}: Props) {
    return (
        <section>

        </section>
    )
}