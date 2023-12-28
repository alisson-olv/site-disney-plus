declare module "react-hover-video-player" {
  interface HoverVideoPlayerProps {
    videoSrc: string;
    pausedOverlay: React.ImgHTMLAttributes;
    loadingOverlay: ReactNode;
  }

  // Exporte o componente principal se aplicável
  export default function HoverVideoPlayer(
    props: HoverVideoPlayerProps
  ): JSX.Element;
}
