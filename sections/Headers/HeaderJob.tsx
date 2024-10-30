

import { ImageWidget } from "apps/admin/widgets.ts";
import Image from "apps/website/components/Image.tsx";

export interface Props {

    /**
     * @title Capa
     */
    image: ImageWidget,
    /**
     * @title Campanha
     */
    campaign: string,
    /**
     * @title Cliente
     */
    company: string,
    /**
     * @title Ano
     */
    year: string,

}

export default function Section({
    image = '',
    campaign = '',
    company = '',
    year = ''
}: Props) {
    return (
        <section></section>
    )
}