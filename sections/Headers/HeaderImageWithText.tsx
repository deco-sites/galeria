

import { ImageWidget } from "apps/admin/widgets.ts";
import Image from "apps/website/components/Image.tsx";
import HeaderImageWithText from "../../components/ui/HeaderImageWithText/index.tsx";

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
        <HeaderImageWithText 
            image={image}
            title={title}
            description={description}
        ></HeaderImageWithText>
    )
}