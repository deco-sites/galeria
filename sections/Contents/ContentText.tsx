import { JSX } from "preact";

export type ContentText = JSX.Element;

export interface Contato {
  /**
    * @title Texto
    * @default Contato
    */
  title: string,
  /**
   * @title URL de Destino
   * @default #
   */
  url: string,
}

export interface Props {
  /**
   * @title Texto
   * @description Escreva aqui o seu conteúdo
   * @format textarea
   */
  content: string;
}

export default function Section({
  content = "",
}: Props): ContentText {

  return (
    <section className="w-full bg-black">
      <div className="container">
        <div className="!pb-[20px] !pr-[15px] text-center">
          <div className="mb-5 md:mb-[60px]">
            <p className="text-dynamic-base font-helvetica font-medium text-gray-light text-start px-[8%]">{content}</p>
          </div>
        </div>
      </div>
    </section>
  );
}