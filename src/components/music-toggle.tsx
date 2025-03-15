import { useRef, useState } from "react";
import { Toggle } from "./ui/toggle";

export default function MusicToggle(props: React.ComponentPropsWithoutRef<typeof Toggle>) {
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const [isPlaying, setIsPlaying] = useState<boolean>(false);

  const togglePlayPause = () => {
    if (audioRef && audioRef.current) {
      if (isPlaying) {
        audioRef.current.pause();
      } else {
        audioRef.current.play();
      }
      setIsPlaying(!isPlaying);
    }
  };

  return (
    <Toggle {...props} onClick={togglePlayPause}>
      <audio ref={audioRef} src="/song.mp3" loop />
      {props.children}
    </Toggle>
  );
}
