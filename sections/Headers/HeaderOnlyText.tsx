import HeaderOnlyText from "../../components/ui/HeaderOnlyText/index.tsx";
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
        <HeaderOnlyText
            title={title}
            description={description}
        ></HeaderOnlyText>
    )
}