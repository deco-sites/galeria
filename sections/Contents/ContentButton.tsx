export interface Props {
    /**
     * @title Texto
     * @default Lorem Ipsun
     */
    text: string,
    /**
     * @title URL de Destino
     * @default #
     */
    url: string,
    /**
     * @title Tipo
     */
    type: "Texto Grande" | "Texto Pequeno"
}

export default function Section({
    text,
    url,
    type
}: Props) {
    return (
        <a href>
            {text}
        </a>
    )
}