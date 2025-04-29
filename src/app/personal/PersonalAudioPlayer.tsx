"use client";
import React, { useRef, useState, useEffect } from "react";
import { AnimatePresence, motion } from "framer-motion";
import styles from "./progressbar.module.css";

const TRACKS = [
  { title: "Sunset Drive", src: "/music/sunset-drive.mp3" },
  { title: "Midnight Memories", src: "/music/midnight-memories.mp3" },
  { title: "Borrowed Time", src: "/music/borrowed-time.mp3" },
  { title: "Polaroid Summer", src: "/music/polaroid-summer.mp3" }
];

function formatTime(s: number) {
  if (isNaN(s)) return "0:00";
  const m = Math.floor(s / 60);
  const sec = Math.floor(s % 60).toString().padStart(2, "0");
  return `${m}:${sec}`;
}

function TrackProgressBar({ audioRef }: { audioRef: React.RefObject<HTMLAudioElement> }) {
  const [progress, setProgress] = React.useState(0);
  const [duration, setDuration] = React.useState(0);
  React.useEffect(() => {
    const audio = audioRef.current;
    if (!audio) return;
    const update = () => setProgress(audio.currentTime);
    const setDur = () => setDuration(audio.duration || 0);
    audio.addEventListener("timeupdate", update);
    audio.addEventListener("durationchange", setDur);
    setDur();
    return () => {
      audio.removeEventListener("timeupdate", update);
      audio.removeEventListener("durationchange", setDur);
    };
  }, [audioRef]);
  const handleSeek = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (!audioRef.current) return;
    audioRef.current.currentTime = Number(e.target.value);
    setProgress(Number(e.target.value));
  };
  return (
    <div className="w-full max-w-md flex flex-col items-center mb-2">
      <input
        type="range"
        min={0}
        max={duration || 1}
        step={0.01}
        value={progress}
        onChange={handleSeek}
        style={{
          // Set CSS variable for played percent
          ["--played" as any]: `${duration ? (progress / duration) * 100 : 0}%`,
        }}
        className={styles.progressBar}
      />
      <div className="flex justify-between w-full text-xs text-amber-100/80 mt-1">
        <span>{formatTime(progress)}</span>
        <span>{formatTime(duration)}</span>
      </div>
    </div>
  );
}

export default function PersonalAudioPlayer() {
  const [playHover, setPlayHover] = useState(false);
  const [stopHover, setStopHover] = useState(false);
  const [hoverIdx, setHoverIdx] = useState<number | null>(null);
  const [trackIdx, setTrackIdx] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);
  const [showStop, setShowStop] = useState(false);
  const audioRef = useRef<HTMLAudioElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [audioCtx, setAudioCtx] = useState<AudioContext | null>(null);
  const [analyser, setAnalyser] = useState<AnalyserNode | null>(null);
  const [animationId, setAnimationId] = useState<number | null>(null);

  useEffect(() => {
    if (audioRef.current && isPlaying) {
      const ctx = new (window.AudioContext || (window as any).webkitAudioContext)();
      const src = ctx.createMediaElementSource(audioRef.current);
      const analyserNode = ctx.createAnalyser();
      analyserNode.fftSize = 64;
      src.connect(analyserNode);
      analyserNode.connect(ctx.destination);
      setAudioCtx(ctx);
      setAnalyser(analyserNode);
      return () => {
        ctx.close();
      };
    }
  }, [isPlaying]);

  useEffect(() => {
    if (!analyser || !canvasRef.current) return;
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;
    // Defensive: don't continue if ctx is null
    if (!canvas) return;
    const bufferLength = analyser.frequencyBinCount;
    const dataArray = new Uint8Array(bufferLength);
    function draw() {
      analyser?.getByteFrequencyData(dataArray);
      ctx?.clearRect(0, 0, canvas.width, canvas.height);
      // New visualizer: thinner, taller, more spacing, color amber-100
      const barCount = bufferLength;
      const barWidth = 6;
      const gap = 4;
      let x = 0;
      // Draw mirrored bars from center outward
      const mid = Math.floor(barCount / 2);
      const center = canvas.width / 2;
      for (let i = 0; i < mid; i++) {
        const barHeight = (dataArray[i] / 255) * (canvas.height * 0.7); // shorter bars
        ctx.fillStyle = '#AAB8A7'; // match button hover color
        // Right side
        const xRight = center + i * (barWidth + gap);
        ctx.fillRect(xRight, canvas.height - barHeight, barWidth, barHeight);
        // Left side
        const xLeft = center - (i + 1) * (barWidth + gap);
        ctx.fillRect(xLeft, canvas.height - barHeight, barWidth, barHeight);
      }
      setAnimationId(requestAnimationFrame(draw));
    }
    draw();
    return () => {
      if (animationId) cancelAnimationFrame(animationId);
    };
  }, [analyser]);

  useEffect(() => {
    if (!isPlaying && animationId) {
      cancelAnimationFrame(animationId);
    }
  }, [isPlaying, animationId]);

  const handlePlayPause = () => {
    if (!audioRef.current) return;
    if (isPlaying) {
      audioRef.current.pause();
      setIsPlaying(false);
    } else {
      audioRef.current.play();
      setIsPlaying(true);
    }
  };

  return (
    <div className="card flex flex-col items-center p-8 w-full">
      <div className="w-full flex flex-col mb-2">
        <span className="text-3xl font-bold text-amber-200 text-left">Music</span>
        <div className="mb-4 text-amber-100/80 italic text-base">A selection of instrumentals that I've made</div>
      </div>
      <h2 className="text-xl font-semibold mb-4 text-amber-100">{TRACKS[trackIdx].title}</h2>
      <audio
        ref={audioRef}
        src={TRACKS[trackIdx].src}
        preload="auto"
        onEnded={() => setIsPlaying(false)}
      />
      <div className="flex flex-col gap-2 mb-4 w-full max-w-xs">
        {TRACKS.map((track, idx) => {
          // Button color logic
          let bg = '#6e7c6d'; // default unselected (dark)
          if (idx === trackIdx || hoverIdx === idx) bg = '#AAB8A7'; // selected or hover (light)
          return (
            <button
              key={track.title}
              className={`px-3 py-1 rounded-xl text-sm font-medium transition-colors`}
              style={{ background: bg, color: '#fff' }}
              onMouseEnter={() => setHoverIdx(idx)}
              onMouseLeave={() => setHoverIdx(null)}
              onClick={() => { setTrackIdx(idx); setIsPlaying(false); setShowStop(false); }}
            >
              {track.title}
            </button>
          );
        })}
      </div>
      <div className="my-4 flex gap-4 min-h-[48px]">
        <AnimatePresence mode="wait">
          {!isPlaying && !showStop ? (
            <motion.button
              key="play"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.8 }}
              transition={{ duration: 0.2 }}
              className="px-6 py-2 rounded-xl font-bold transition-colors shadow"
              style={{ background: playHover ? '#AAB8A7' : '#849483', color: '#fff' }}
              onMouseEnter={() => setPlayHover(true)}
              onMouseLeave={() => setPlayHover(false)}
              onClick={() => { if (audioRef.current) { audioRef.current.play(); setIsPlaying(true); setShowStop(true); } }}
            >
              Play
            </motion.button>
          ) : (
            <>
              {isPlaying ? (
                <motion.button
                  key="pause"
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.8 }}
                  transition={{ duration: 0.2 }}
                  className="px-6 py-2 rounded-xl font-bold transition-colors shadow"
                  style={{ background: playHover ? '#AAB8A7' : '#849483', color: '#fff' }}
                  onMouseEnter={() => setPlayHover(true)}
                  onMouseLeave={() => setPlayHover(false)}
                  onClick={() => { if (audioRef.current) { audioRef.current.pause(); setIsPlaying(false); } }}
                >
                  Pause
                </motion.button>
              ) : (
                <motion.button
                  key="play-again"
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.8 }}
                  transition={{ duration: 0.2 }}
                  className="px-6 py-2 rounded-xl font-bold transition-colors shadow"
                  style={{ background: playHover ? '#AAB8A7' : '#849483', color: '#fff' }}
                  onMouseEnter={() => setPlayHover(true)}
                  onMouseLeave={() => setPlayHover(false)}
                  onClick={() => { if (audioRef.current) { audioRef.current.play(); setIsPlaying(true); } }}
                >
                  Play
                </motion.button>
              )}
              <motion.button
                key="stop"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.8 }}
                transition={{ duration: 0.2 }}
                className="px-6 py-2 rounded-xl font-bold transition-colors shadow"
                style={{ background: stopHover ? '#AAB8A7' : '#849483', color: '#fff' }}
                onMouseEnter={() => setStopHover(true)}
                onMouseLeave={() => setStopHover(false)}
                onClick={() => { if (audioRef.current) { audioRef.current.pause(); audioRef.current.currentTime = 0; setIsPlaying(false); setShowStop(false); } }}
              >
                Stop
              </motion.button>
            </>
          )}
        </AnimatePresence>
      </div>
      {/* Progress Bar */}
      <TrackProgressBar audioRef={audioRef} />
      <canvas
        ref={canvasRef}
        width={320}
        height={36}
        className="w-full max-w-md h-9 rounded mb-2"
      />
    </div>
  );
}
