

import { ImageWidget } from "apps/admin/widgets.ts";
import Image from "apps/website/components/Image.tsx";
import HeaderImageWithText from "../../components/ui/HeaderImageWithText/index.tsx";

  
/**
 * @title {{{type}}}
 */
export interface Caption {
    /**
     * @title Tipo
     */
    type: "Título" | "Descrição",
    /**
     * @title Conteúdo
     */
    content: string,
  }
export interface Props {

    /**
     * @title Imagem
     */
    image: ImageWidget,
    /**
     * @title Textos
     * @maxItems 2
     */
    caption: Caption[],

}

export default function Section({
    image = '',
    caption
}: Props) {
    return (
        <HeaderImageWithText 
            image={image}
            caption={caption}
        ></HeaderImageWithText>
    )
}