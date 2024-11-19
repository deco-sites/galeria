
import HeaderOnlyTextToWork from "../../components/ui/HeaderOnlyTextToWork/index.tsx";

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
        <HeaderOnlyTextToWork
            title={title}
            description={description}
        ></HeaderOnlyTextToWork>
    )
}

