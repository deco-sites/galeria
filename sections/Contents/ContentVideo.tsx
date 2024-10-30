import { VideoWidget } from "apps/admin/widgets.ts";
import Video from "apps/website/components/Video.tsx";

export interface Props {

    /**
     * @title Vídeo
     */
    video: VideoWidget,

}

export default function Section({
    video = '',
}: Props) {
    return (
        <section></section>
    )
}