export interface Props {
    /**
     * @title Título
     * @description Escreva aqui o título do seu conteúdo
     */
    title: string;
    /**
     * @title Texto
     * @description Escreva aqui o seu conteúdo
     */
    content: string;
  }
  
  export default function Section({ 
    title = "", 
    content = "", 
  }: Props) {
  
    return (
      <div>
          <p>{title}</p>
          <h2>{content}</h2>
      </div>
    );
  }