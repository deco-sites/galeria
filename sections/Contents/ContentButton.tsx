
import ContentButton from "../../components/ui/ContentButton/index.tsx";
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

export default function Section({ text, url, type }: Props) {
    const textClass =
      type === "Texto Grande"
        ? "text-[4.5vw] font-helvetica font-bold leading-none text-white uppercase texto-grande"
        : "text-[1.5vw] font-helvetica font-medium leading-none text-gray-light";
  
    return (
        <ContentButton
            url={url}
            type={textClass}
            text={text}
        ></ContentButton>
    );
  }