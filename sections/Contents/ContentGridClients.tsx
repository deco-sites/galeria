import { ImageWidget } from "apps/admin/widgets.ts";
import Image from "apps/website/components/Image.tsx";

/**
 * @title {{{name}}}
 */
export interface Client {
    /**
     * @title Nome
     */
    name: string,
    /**
     * @title Logo
     */
    logo: ImageWidget
}

export interface Props {
    /**
     * @title Clientes
     */
    clients: Client[]
}

export default function Section({
    clients: []
}: Props) {
    return (
        <section></section>
    )
}