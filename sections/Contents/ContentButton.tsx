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
        ? "text-[4.5vw] font-helvetica leading-tight-1 tracking-tight-1.36 font-bold text-white uppercase"
        : "text-[1.5vw] font-helvetica leading-tight-1 tracking-tight-1.36 font-medium text-gray-light";
  
    return (
        <section className="pb-[80px] bg-black">
            <div className="grid justify-center items-center gap-y-2">
                <a
                    href={url || "#"}
                    className={`${textClass}`}
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    {text}
                </a>
            </div>
        </section>
    );
  }