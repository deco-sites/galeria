

import { ImageWidget } from "apps/admin/widgets.ts";
import Image from "apps/website/components/Image.tsx";

export interface Props {

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
    description: string,

}

export default function Section({
    image = '',
    title = '',
    description = '',
}: Props) {
    return (
        <section></section>
    )
}