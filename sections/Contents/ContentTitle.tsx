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
      <section className="bg-black">
        <div className="py-[58px] grid justify-center gap-y-5"> 
            <p className="text-lg md:text-[20px] font-helvetica font-medium md:leading-tight-28 text-gray-light text-center">{title}</p>
            <div className="px-[44px] md:px-0 md:w-full flex justify-center">
              <h2 className="text-[6vw] font-helvetica font-bold leading-tight-0.95 tracking-tight-2 text-center text-white">{content}</h2>
            </div>
        </div>
      </section>
    );
  }