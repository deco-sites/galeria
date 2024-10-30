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
        <section></section>
    )
}