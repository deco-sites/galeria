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

export default function Section({ items = [] }: Props) {
    return (
        <section className="bg-black">
            <div className=" mx-auto w-full grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 px-4 bg-black">
                {items.map((item: Item, index: number) => (
                    <div key={index} className="py-[160px] flex flex-col justify-center items-center text-center">
                        <div className="">
                            <Image
                                src={item.image}
                                alt={item.title}
                                width={72}
                                height={72}
                            />
                        </div>
                        <div className="my-[30px]">
                            <h3 className="my-[30px] text-xl font-helvetica font-bold text-white">{item.title}</h3>
                        </div>
                        <p className="text-[19px] font-helvetica text-gray-lighter">{item.description}</p>
                    </div>
                ))}
            </div>
        </section>
    );
}