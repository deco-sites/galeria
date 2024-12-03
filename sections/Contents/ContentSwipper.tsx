import { ImageWidget } from "apps/admin/widgets.ts";
import Carousel from "../../components/ui/Carousel/index.tsx";

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

export default function Section({ items = [] }: Props) {
    return (
        <div className="bg-black py-20">
            <Carousel items={ items } />
        </div>
    );
}