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
                    <h2 className="text-lg font-helvetica font-medium leading-tight-28 text-gray-light font-bold text-center">{title}</h2>
                    <div className="w-[270px] md:w-fit">
                        <p className="text-[6vw] font-helvetica font-bold leading-tight-0.95 tracking-tight-2 text-white text-center">{description}</p>
                    </div>
                </div>
            </div>
        </section>
    )
}