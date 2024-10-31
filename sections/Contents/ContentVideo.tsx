import { JSX } from "preact";
import { VideoWidget } from "apps/admin/widgets.ts";
import Video from "apps/website/components/Video.tsx";

export type ContentVideo = JSX.Element;

export interface Props {

    /**
     * @title Vídeo
     */
    video: VideoWidget,

}

export default function ContentVideoSection({
    video = '',
}: Props) {
    return (
        <section></section>
    )
}