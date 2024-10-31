import { JSX } from "preact";
import { ImageWidget } from "apps/admin/widgets.ts";
import Image from "apps/website/components/Image.tsx";

export type ContentImage = JSX.Element;
export interface Props {

    /**
     * @title Imagem
     */
    image: ImageWidget,
    /**
     * @title Posição
     */ 
    position: "Esquerda" | "Direita" | "Centro"

}

export default function ContentImageSection({
    image = '',
    position = "Esquerda"
}: Props) {
    return (
        <section></section>
    )
}