
import { VideoWidget } from "apps/admin/widgets.ts";
import Video from "apps/website/components/Video.tsx";

export interface Props {

    /**
     * @title Vídeo
     */
    video: VideoWidget,
    /**
     * @title Vídeo Mobile
     */
    videoMobile?: VideoWidget,
    /**
     * @title Título
     * @default Lorem Ipsum
     */
    title: string,
    /**
     * @title Descrição
     * @format textarea
     * @default Lorem Ipsum
     */
    description: string,
    /**
     * @title Posição do Texto
     * @default Esquerda
     */
    position: "Esquerda" | "Centro",

}

export default function Section({
    video = '',
    videoMobile = '',
    title = '',
    description = '',
}: Props) {
    return (
        <section></section>
    )
}