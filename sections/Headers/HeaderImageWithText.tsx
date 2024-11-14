

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
        <section className="w-full">
            <div className="relative w-full flex justify-center">
                <div className="relative inset-0 w-full h-full">
                    {/* Imagem para Desktop */}
                    {image && (
                        <Image
                        src={image}
                        title={title}
                        width={100}
                        height={100}
                        className="hidden md:block w-full h-[747px] bg-center bg-no-repeat"
                        />
                    )}

                    {/* Imagem para Mobile */}
                    {image && (
                        <Image
                        src={image}
                        title={title}
                        width={100}
                        height={100}
                        className="block md:hidden w-full h-[747px] bg-center bg-no-repeat"
                        />
                    )}
                </div>

                <div className="absolute top-[5%] flex flex-col justify-center items-center">
                    <div className="!pt-[180px] !pb-[80px] !px-[4%] mb-[30px] grid gap-y-4 justify-center items-center">
                        <h2 className="text-lg font-helvetica font-medium leading-tight-28 text-gray-light font-bold text-center">{title}</h2>
                        <div className="w-[270px] md:w-[850px] flex justify-center items-center">
                            <p className="text-[6vw] font-helvetica font-bold leading-tight-0.95 tracking-tight-2 text-white text-center">{description}</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}