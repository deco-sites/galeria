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
    <section className="relative w-full h-screen">
      <div
        className={`relative w-full h-full ${
          position === "Centro" ? "flex justify-center items-center text-center" : "text-left"
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
          className={`absolute inset-0 flex flex-col justify-center ${
            position === "Centro" ? "items-center text-center" : "items-start pl-4 md:pl-10"
          }`}
        >
          {title && (
            <h2 className="text-[6vw] font-helvetica font-bold leading-tight-0.95 tracking-tight-2 text-white">
              {title}
            </h2>
          )}
          {description && (
            <div className="mt-4">
                <p className="text-base font-archivo font-medium text-gray max-w-md">
                    {description}
                </p> 
            </div>
          )}
        </div>
      </div>
    </section>
  );
}