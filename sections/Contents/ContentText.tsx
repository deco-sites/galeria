import { JSX } from "preact";

export type ContentText = JSX.Element;
export interface Props {
    /**
     * @title Tipo de Texto
     * @description Selecione o tipo de conteúdo
     * @default Parágrafo
     */
    type: "Parágrafo" | "Título";
  /**
   * @title Texto
   * @description Escreva aqui o seu conteúdo
   * @format textarea
   */
  content: string;
}

export default function ContentTextSection({ 
  content = "", 
  type = "Parágrafo",
}: Props): ContentText {

  return (
    <div>
        <p>{content}</p>
    </div>
  );
}