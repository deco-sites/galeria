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
    images,
}: Props) {

    return (
        <section className="w-full bg-black">
            <div className="container !py-[80px]">
                <div className="px-2 md:px-0 grid grid-cols-1 md:grid-cols-3 gap-6">
                    {images?.map((item, index) => (
                        <div key={index} className="">
                            <Image
                                src={item.image || ""}
                                alt={item.description}
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