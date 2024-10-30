export interface Props {
    /**
     * @title Tipo de Texto
     * @description Selecione o tipo de conteúdo
     */
    type: "Título" | "Parágrafo";
  /**
   * @title Texto
   * @description Escreva aqui o seu conteúdo
   * @format textarea
   */
  content: string;
}

export default function Section({ 
  content = "", 
  type = "Parágrafo",
}: Props) {

  return (
    <div>
        <p>{content}</p>
    </div>
  );
}