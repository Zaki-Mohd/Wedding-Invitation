"use client";

import { useState, useEffect, useCallback } from "react";

// Global audio instance so it persists properly and can be triggered anywhere
let globalAudio: HTMLAudioElement | null = null;
let isAudioInitialized = false;

/**
 * Custom hook to handle background music with toggle.
 * It will try to autoplay immediately. Because modern browsers block autoplay,
 * it will automatically start playing on the very first screen tap/click silently!
 */
export function useMusicPlayer() {
  const [isPlaying, setIsPlaying] = useState(false);

  useEffect(() => {
    if (!globalAudio && typeof window !== "undefined") {
      globalAudio = new Audio("/wedding-music.mp3");
      globalAudio.loop = true;
      globalAudio.volume = 0.3;
    }

    const tryPlay = () => {
      if (globalAudio && !isAudioInitialized) {
        globalAudio.play().then(() => {
          setIsPlaying(true);
          isAudioInitialized = true;
          // Clean up listeners once successfully playing
          document.removeEventListener("click", tryPlay);
          document.removeEventListener("touchstart", tryPlay);
        }).catch(() => {
          // Silent catch for browser autoplay block — will try again on next click
        });
      }
    };

    // 1. Try playing immediately via pure autoplay
    tryPlay();

    // 2. Fallback: Wait for the user's first tap, click, or interaction anywhere on the screen
    if (!isAudioInitialized) {
      document.addEventListener("click", tryPlay);
      document.addEventListener("touchstart", tryPlay);
    }

    return () => {
      document.removeEventListener("click", tryPlay);
      document.removeEventListener("touchstart", tryPlay);
    };
  }, []);

  const toggle = useCallback(() => {
    if (!globalAudio) return;

    if (isPlaying) {
      globalAudio.pause();
      setIsPlaying(false);
    } else {
      globalAudio.play().then(() => {
        setIsPlaying(true);
        isAudioInitialized = true;
      }).catch(() => {});
    }
  }, [isPlaying]);

  return { isPlaying, toggle };
}
