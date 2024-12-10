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
    clients,
}: Props) {
    return (
        <section className="bg-black">
            <div className="container">
                <div className="px-[8%] md:pt-[150px] w-full grid grid-cols-2 md:grid-cols-5 gap-0 bg-black">
                    {clients.map((client) => (
                        <div key={client.name} className="w-fit border border-solid border-dark-charcoal opacity-70 hover:opacity-100 duration-150">
                            <Image
                            src={client.logo || ""}
                            alt={client.name}
                            width={100}
                            className="w-full h-full"
                            loading="lazy"
                            decoding="async"
                            />
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}