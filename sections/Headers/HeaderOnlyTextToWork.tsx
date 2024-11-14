export interface Props {
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
    title = '',
    description = '',
}: Props) {
    return (
        <section className="bg-black">
            <div class="container flex flex-col justify-center items-center">
                <div className="!pt-[180px] !pb-[160px] md:!pb-[180px] !px-[15px] mb-[30px] grid gap-y-2">
                    <h2 className="text-dynamic-base font-helvetica font-medium leading-tight-28 text-gray-light font-bold text-center">{title}</h2>
                    <div className="w-[270px] md:w-[950px]">
                        <p className="text-4.5vw font-helvetica !leading-tight-60 !tracking-tight-0.1 font-bold text-white text-center">{description}</p>
                    </div>
                </div>
            </div>
        </section>
    )
}

