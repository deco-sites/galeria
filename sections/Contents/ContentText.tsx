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
  /**
   * @title Conteúdo de Contato
   * @default Lorem Ipsun
   */
  contact: Contato[]
  /**
   * @title Texto do Botão de Vagas
   * @default Veja nossas vagas
   */
  vacancy: string;
  /**
   * @title URL para Vagas
   * @default #
   */
  vacancyUrl: string;
}

export default function Section({
  content = "",
  contact = [],
  vacancy = "",
  vacancyUrl = "#",
}: Props): ContentText {

  return (
    <section className="w-full bg-black">
      <div className="container">
        <div className="!pb-[20px] !pr-[15px] text-center">
            <div className="mb-5 md:mb-[60px]">
              <p className="text-dynamic-base font-helvetica font-medium text-gray-light text-start">{content}</p>
            </div>

            <div className="grid justify-center">
                <ul className="space-y-[4px] md:space-y-[35px]">
                    {contact.map((item) => (
                        <li key={item.title}>
                            <a
                                href={item.url || "#"}
                                className="text-[4.5vw] font-helvetica leading-tight-1 tracking-tight-1.36 font-bold text-white uppercase"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                {item.title}
                            </a>
                        </li>
                    ))}
                </ul>
            </div>

            <div className="mt-[30px] md:mt-[60px]">
              <a
                href={vacancyUrl}
                className="text-dynamic-base font-helvetica leading-tight-1 tracking-tight-1.36 font-medium text-gray-light"
                target="_blank"
                rel="noopener noreferrer"
              >
                {vacancy}
              </a>
            </div>
          </div>
        </div>
    </section>
  );
}