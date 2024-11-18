import { VideoWidget } from "apps/admin/widgets.ts";
import Video from "apps/website/components/Video.tsx";

export interface Props {
  /**
   * @title Vídeo
   */
  video: VideoWidget;
  /**
   * @title Vídeo Mobile
   */
  videoMobile?: VideoWidget;
  /**
   * @title Título
   * @default Lorem Ipsum
   */
  title: string;
  /**
   * @title Descrição
   * @format textarea
   * @default Lorem Ipsum
   */
  description: string;
  /**
   * @title Posição do Texto
   * @default Esquerda
   */
  position: "Esquerda" | "Centro";
}

export default function Section({
  video,
  videoMobile,
  title = "",
  description = "",
  position = "Esquerda",
}: Props) {
  return (
    <section className="relative w-full h-[90vh]">
      <div id="magic-cursor" class="absolute hidden w-[10px] h-[10px] pointer-events-none z-99999 opacity-0"></div>
      <div
        className={`relative w-full h-full ${
          position === "Centro" ? "flex justify-end items-center text-center" : "text-left"
        }`}
      >

        <div className="absolute inset-0 w-full h-full">
          {/* Vídeo para Desktop */}
          {video && (
            <Video
              src={video}
              title={title}
              width={100}
              height={100}
              autoPlay
              muted
              loop
              className="hidden md:block w-full h-full object-cover"
            />
          )}

          {/* Vídeo para Mobile */}
          {videoMobile && (
            <Video
              src={videoMobile}
              title={title}
              width={100}
              height={100}
              autoPlay
              muted
              loop
              className="block md:hidden w-full h-full object-cover"
            />
          )}
        </div>

        <div
          className={`absolute inset-0 flex flex-col justify-end bottom-[22%] left-[3.5%] ${
            position === "Centro" ? "items-center text-center" : "items-start"
          }`}
        >
          {title && (
            <h2 className="text-[6vw] font-helvetica font-bold leading-tight-0.95 tracking-tight-2 text-white text-clip w-[80%] md:w-full">
              {title}
            </h2>
          )}
          {description && (
            <div className="mt-4">
                <p className="text-[16px] font-archivo font-light text-gray max-w-md">
                    {description}
                </p> 
            </div>
          )}
        </div>
      </div>
      <div class="w-full flex justify-center py-8">
        <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
          <g opacity="0.5">
          <path opacity="0.5" d="M8 12L16 20L24 12" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
          </g>
        </svg>							
      </div>
    </section>
  );
}