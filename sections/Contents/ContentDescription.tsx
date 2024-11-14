import { JSX } from "preact";

export type ContentText = JSX.Element;

export interface Props {
    /**
      * @title Descrição
      * @default Descrição
      */
    description: string[]
  }


export default function Section({
  description,

}: Props): ContentText {

  return (
      <section className="w-full bg-black">
          <div className="container">
              <div className="px-[3%] pt-[180px] pb-[80px] w-full grid space-y-[30px]">
                  {description.map((text, index) => (
                  <p key={index} className="text-[26px] font-helvetica font-normal leading-tight-36 text-gray-light">
                      {text}
                  </p>
                  ))}
              </div>
          </div>
      </section>
  );
}