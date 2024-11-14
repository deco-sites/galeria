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
    video,
}: Props) {
    return (
        <section className="w-full bg-black">
            <div className="pt-[80px] w-full">
                <Video 
                    src={video} 
                    width={100}
                    height={100}
                    controls
                    className="w-full h-auto object-cover" 
                />
            </div>
        </section>
    )
}