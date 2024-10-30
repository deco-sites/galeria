import { ImageWidget } from "apps/admin/widgets.ts";
import Image from "apps/website/components/Image.tsx";

/**
 * @title {{{title}}}
 */
export interface Item {
    /**
     * @title Imagem
     */
    image: ImageWidget,
    /**
     * @title Título
     */
    title: string,
    /**
     * @title Descrição
     */
    description: string
}

export interface Props {
    items: Item[];
}

export default function Section({
    items: []
}: Props) {
    return (
        <section>
            
        </section>
    )
}