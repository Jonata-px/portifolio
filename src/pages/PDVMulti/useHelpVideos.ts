import { useEffect, useState } from "react";
import { FALLBACK_VIDEOS, fetchHelpVideos, type HelpVideo } from "./helpVideos";

// Uma única leitura por visita, compartilhada entre a página principal e a de vídeos.
let cache: Promise<HelpVideo[]> | null = null;

const load = () => {
  if (!cache) cache = fetchHelpVideos().catch(() => FALLBACK_VIDEOS);
  return cache;
};

export function useHelpVideos() {
  const [videos, setVideos] = useState<HelpVideo[] | null>(null);

  useEffect(() => {
    let alive = true;
    load().then((v) => {
      if (alive) setVideos(v.length ? v : FALLBACK_VIDEOS);
    });
    return () => {
      alive = false;
    };
  }, []);

  return { videos: videos ?? FALLBACK_VIDEOS, loading: videos === null };
}
