import { ImageWidget } from "apps/admin/widgets.ts";
import Image from "apps/website/components/Image.tsx";

/**
 * @title {{{description}}}
 */
export interface ImageGallery {
    /**
     * @title Descrição
     */
    description: string,
    /**
     * @title Imagem
     */
    image: ImageWidget
}

export interface Props {
    /**
     * @title Imagens
     */
    images: ImageGallery[]
}

export default function Section({
    images: []
}: Props) {
    return (
        <section></section>
    )
}