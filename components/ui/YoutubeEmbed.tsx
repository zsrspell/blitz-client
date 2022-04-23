import React from "react";

interface YoutubeEmbedProps {
    videoId: string;
    width?: number;
    height?: number;
}

export default function YoutubeEmbed(props: YoutubeEmbedProps) {
    const width = props.width || 640;
    const height = props.height || 360;

    return (
        <iframe width={width} height={height}
                className="rounded-lg shadow-lg shadow-black"
                src={`https://www.youtube.com/embed/${props.videoId}`}
                title="YouTube video player"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen />
    )
}