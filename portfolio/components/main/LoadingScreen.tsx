"use client";

import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const generateRandomHex = (length: number) => {
  return Array.from({ length }, () => 
    Math.floor(Math.random() * 16).toString(16)
  ).join('');
};

const generateRandomNumber = (min: number, max: number) => {
  return Math.floor(Math.random() * (max - min + 1)) + min;
};

const scrambleText = (text: string) => {
  return text.split('').map(() => 
    String.fromCharCode(Math.floor(Math.random() * 94) + 33)
  ).join('');
};

const generateWaveform = (length: number) => {
  return Array.from({ length }, (_, i) => 
    Math.sin(i * 0.2) * Math.random() * 0.5 + 0.5
  );
};

const generateMatrix = () => {
  return Array.from({ length: 8 }, () => 
    Array.from({ length: 16 }, () => 
      Math.random() > 0.5 ? 1 : 0
    ).join('')
  );
};

// Add new helper function for circular coordinates
const getCircleCoordinates = (percent: number, radius: number) => {
  const x = Math.cos(2 * Math.PI * percent) * radius;
  const y = Math.sin(2 * Math.PI * percent) * radius;
  return { x, y };
};

const CircularProgress = ({ value, max, radius, color }: { 
  value: number; 
  max: number; 
  radius: number;
  color: string;
}) => {
  const percent = value / max;
  const { x, y } = getCircleCoordinates(percent, radius);
  const largeArcFlag = percent > 0.5 ? 1 : 0;

  return (
    <div className="relative w-20 h-20">
      <svg className="w-full h-full -rotate-90">
        {/* Background circle */}
        <circle
          cx="40"
          cy="40"
          r={radius}
          className="stroke-cyber-neon/20 fill-none"
          strokeWidth="4"
        />
        {/* Progress arc */}
        <path
          d={`M 40,${40 - radius} A ${radius},${radius} 0 ${largeArcFlag} 1 ${40 + x},${40 - y}`}
          className={`fill-none stroke-current transition-all duration-300 ${color}`}
          strokeWidth="4"
          strokeLinecap="round"
        />
      </svg>
      <div className="absolute inset-0 flex items-center justify-center font-mono text-sm">
        {Math.round(value)}%
      </div>
    </div>
  );
};

const LoadingScreen = ({ onLoadingComplete }: { onLoadingComplete: () => void }) => {
  const [lines, setLines] = useState<Array<{ text: string, decrypted: boolean }>>([]);
  const [progress, setProgress] = useState(0);
  const [decryptedText, setDecryptedText] = useState('0'.repeat(32));
  const [sessionId, setSessionId] = useState('00000000');
  const [panelsVisible, setPanelsVisible] = useState(false);
  const [isExiting, setIsExiting] = useState(false);
  const [showFinalMessage, setShowFinalMessage] = useState(false);
  const [systemStats, setSystemStats] = useState({
    neuralSync: 60,
    biolink: 40,
    quantum: 70
  });
  const [waveform, setWaveform] = useState<number[]>(generateWaveform(20));
  const [matrix, setMatrix] = useState<string[]>(generateMatrix());
  const [sectors, setSectors] = useState<Array<{ id: number; status: string; }>>(
    Array.from({ length: 6 }, (_, i) => ({
      id: i,
      status: Math.random() > 0.3 ? 'SECURE' : 'SCANNING'
    }))
  );

  const startTimeRef = useRef<number | null>(null);
  const frameRef = useRef<number>();
  const isLoadingRef = useRef(true);

  const terminalLines = [
    '> INITIALIZING NEURAL INTERFACE v3.45.89...',
    '> ESTABLISHING SECURE CONNECTION [RSA-4096]...',
    '> SCANNING PATHWAYS FOR OPTIMAL ROUTING...',
    '> BYPASSING MAINFRAME SECURITY PROTOCOLS...',
    '> DECRYPTING NETWORK CONFIGURATIONS...',
    '> SYNCHRONIZING STATES...',
    '> ACCESS GRANTED - NEURAL LINK ESTABLISHED',
    '> LAUNCHING CYBERNETIC INTERFACE...'
  ];

  const decryptLine = async (text: string, duration: number = 1000) => {
    const steps = 8;
    const stepDuration = duration / steps;
    let currentText = text;

    for (let i = 0; i < steps; i++) {
      await new Promise(resolve => setTimeout(resolve, stepDuration));
      const percentDecrypted = (i + 1) / steps;
      const decryptedChars = Math.floor(text.length * percentDecrypted);
      currentText = text.slice(0, decryptedChars) + 
                   scrambleText(text.slice(decryptedChars));
      setLines(prev => prev.map((line, idx) => 
        idx === prev.length - 1 ? { ...line, text: currentText } : line
      ));
    }

    return text;
  };

  useEffect(() => {
    if (!startTimeRef.current) {
      setSessionId(generateRandomHex(8).toUpperCase());
      startTimeRef.current = Date.now();
      isLoadingRef.current = true;
      setTimeout(() => setPanelsVisible(true), 500);
    }

    let lastLineIndex = -1;
    const totalDuration = 7000;
    const lineDelay = totalDuration / terminalLines.length;

    const animate = async () => {
      if (!isLoadingRef.current) return;

      const elapsed = Date.now() - (startTimeRef.current || Date.now());
      const currentLineIndex = Math.min(Math.floor(elapsed / lineDelay), terminalLines.length);
      const progressPercent = Math.min((elapsed / totalDuration) * 100, 100);

      setProgress(progressPercent);

      if (currentLineIndex !== lastLineIndex && currentLineIndex < terminalLines.length) {
        lastLineIndex = currentLineIndex;
        const newLine = terminalLines[currentLineIndex];
        setLines(prev => [...prev, { text: scrambleText(newLine), decrypted: false }]);
        await decryptLine(newLine, 700);
        setLines(prev => prev.map((line, idx) => 
          idx === currentLineIndex ? { text: newLine, decrypted: true } : line
        ));
      }

      if (elapsed >= totalDuration) {
        isLoadingRef.current = false;
        setIsExiting(true);
        setPanelsVisible(false);
        
        // Clear terminal and show final message with longer delays
        setTimeout(() => {
          setLines([]);
          setShowFinalMessage(true);
          setTimeout(() => {
            onLoadingComplete();
          }, 2500);
        }, 800);
        
        return;
      }

      frameRef.current = requestAnimationFrame(animate);
    };

    frameRef.current = requestAnimationFrame(animate);

    return () => {
      if (frameRef.current) {
        cancelAnimationFrame(frameRef.current);
      }
    };
  }, []);

  useEffect(() => {
    if (!isLoadingRef.current) return;

    const updateStats = () => {
      setSystemStats({
        neuralSync: generateRandomNumber(60, 98),
        biolink: generateRandomNumber(40, 85),
        quantum: generateRandomNumber(70, 99)
      });
    };

    const interval = setInterval(updateStats, 300);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    if (!isLoadingRef.current) return;

    const interval = setInterval(() => {
      setDecryptedText(generateRandomHex(32));
    }, 50);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    if (!isLoadingRef.current) return;

    const interval = setInterval(() => {
      setWaveform(generateWaveform(20));
    }, 100);

    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    if (!isLoadingRef.current) return;

    const interval = setInterval(() => {
      setMatrix(generateMatrix());
    }, 200);

    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    if (!isLoadingRef.current) return;

    const interval = setInterval(() => {
      setSectors(prev => prev.map(sector => ({
        ...sector,
        status: Math.random() > 0.3 ? 'SECURE' : 'SCANNING'
      })));
    }, 800);

    return () => clearInterval(interval);
  }, []);

  return (
    <motion.div
      initial={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
      className="fixed inset-0 bg-cyber-black z-[100] flex items-center justify-center p-4 overflow-hidden"
    >
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Radial gradients */}
        <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-cyber-neon/10 blur-[100px] rounded-full animate-pulse" />
        <div className="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] bg-cyber-accent/10 blur-[80px] rounded-full animate-pulse delay-1000" />
        
        {/* Circuit patterns */}
        <div className="absolute inset-0 cyber-grid opacity-10" />
        <div className="absolute inset-0 bg-[url('/circuit-pattern.svg')] opacity-5 bg-repeat" />
      </div>

      <div className="w-full max-w-4xl relative">
        {/* Top HUD bar */}
        <AnimatePresence>
          {!isExiting && (
            <motion.div 
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.5 }}
              className="mb-4 flex justify-between items-center text-cyber-neon text-sm"
            >
              <div>SYSTEM STATUS: ACTIVE</div>
              <div className="flex gap-4">
                <div>CPU: {systemStats.neuralSync}%</div>
                <div>MEM: {systemStats.biolink}%</div>
                <div>NET: {systemStats.quantum}%</div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        <div className={`grid grid-cols-1 md:grid-cols-5 gap-4 transition-all duration-700 ease-in-out ${
          showFinalMessage ? 'hidden' : ''
        }`}>
          {/* Left side panels */}
          <div className="space-y-4">
            <AnimatePresence>
              {panelsVisible && (
                <>
                  {/* System Metrics */}
                  <motion.div
                    initial={{ scale: 0.95, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    exit={{ scale: 0.95, opacity: 0 }}
                    transition={{ duration: 0.5 }}
                    className="cyber-panel p-4"
                  >
                    <div className="text-cyber-neon text-sm mb-4">NEURAL METRICS</div>
                    <div className="flex justify-between items-center gap-2">
                      <CircularProgress value={systemStats.neuralSync} max={100} radius={24} color="text-cyber-neon" />
                      <CircularProgress value={systemStats.biolink} max={100} radius={24} color="text-cyber-accent" />
                      <CircularProgress value={systemStats.quantum} max={100} radius={24} color="text-cyber-neon" />
                    </div>
                    <div className="flex justify-between text-xs mt-2 text-cyber-neon/70">
                      <span>SYNC</span>
                      <span>BIO</span>
                      <span>QTM</span>
                    </div>
                  </motion.div>

                  {/* Neural Activity Waveform */}
                  <motion.div
                    initial={{ scale: 0.95, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    exit={{ scale: 0.95, opacity: 0 }}
                    transition={{ duration: 0.5, delay: 0.1 }}
                    className="cyber-panel p-4"
                  >
                    <div className="text-cyber-neon text-sm mb-2">NEURAL ACTIVITY</div>
                    <div className="h-12 flex items-center gap-0.5">
                      {waveform.map((value, index) => (
                        <div
                          key={index}
                          className="w-1 bg-cyber-accent transition-all duration-150"
                          style={{ height: `${value * 100}%` }}
                        />
                      ))}
                    </div>
                  </motion.div>

                  {/* Security Matrix */}
                  <motion.div
                    initial={{ scale: 0.95, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    exit={{ scale: 0.95, opacity: 0 }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                    className="cyber-panel p-4"
                  >
                    <div className="text-cyber-neon text-sm mb-2">SECURITY MATRIX</div>
                    <div className="font-mono text-[8px] leading-[8px] text-cyber-neon/70">
                      {matrix.slice(0, 6).map((row, i) => (
                        <div key={i} className="flex gap-px">
                          {row.split('').map((cell, j) => (
                            <span
                              key={j}
                              className={cell === '1' ? 'text-cyber-accent' : 'text-cyber-neon/30'}
                            >
                              {cell}
                            </span>
                          ))}
                        </div>
                      ))}
                    </div>
                  </motion.div>
                </>
              )}
            </AnimatePresence>
          </div>

          {/* Main terminal */}
          <motion.div 
            className="col-span-3"
            layout="position"
            layoutId="terminal"
            transition={{ 
              type: "spring",
              stiffness: 100,
              damping: 30,
              duration: 0.8
            }}
          >
            <motion.div 
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              className="cyber-panel h-[60vh] relative overflow-hidden"
              layout="preserve-aspect"
              transition={{ duration: 0.8, ease: "easeInOut" }}
            >
              {/* Enhanced CRT and scanline effects */}
              <div className="absolute inset-0 pointer-events-none">
                <div className="absolute inset-0 bg-gradient-to-b from-transparent to-cyber-neon/5" />
                <div className="absolute inset-0 animate-[flicker_0.15s_infinite]" />
                <div className="absolute top-0 left-0 right-0 h-[2px] bg-cyber-neon/20 animate-[scanline_3s_linear_infinite]" />
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-transparent via-cyber-neon/5 to-transparent opacity-50" />
              </div>

              {/* Terminal content */}
              <div className="relative z-10 p-6 font-mono text-cyber-neon h-full overflow-y-auto">
                {showFinalMessage ? (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 1.1 }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                    className="absolute inset-0 flex items-center justify-center"
                  >
                    <div className="text-center relative">
                      <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -20 }}
                        transition={{ 
                          delay: 0.3,
                          duration: 0.8,
                          ease: "easeOut"
                        }}
                        className="relative"
                      >
                        <div className="text-7xl font-cyber tracking-wider text-cyber-neon mb-8 relative cyberpunk-text">
                          <span className="relative inline-block">
                            <span className="relative z-10 drop-shadow-[0_0_10px_rgba(204,255,0,0.5)]">WELCOME</span>
                            <span className="absolute inset-0 text-cyber-accent/80 blur-[2px] mix-blend-screen animate-glitch-1 z-20 translate-x-[2px] translate-y-[-2px]">WELCOME</span>
                            <span className="absolute inset-0 text-cyber-neon/80 blur-[1px] mix-blend-multiply animate-glitch-2 z-30 translate-x-[-2px] translate-y-[2px]">WELCOME</span>
                            <span className="absolute inset-0 bg-gradient-to-r from-cyber-neon/0 via-cyber-neon/30 to-cyber-neon/0 blur-xl animate-glitch-3 z-0"></span>
                            <span className="absolute inset-0 bg-gradient-to-r from-cyber-accent/0 via-cyber-accent/20 to-cyber-accent/0 blur-lg animate-pulse mix-blend-overlay"></span>
                            <span className="absolute inset-0 bg-cyber-neon/10 mix-blend-overlay filter contrast-150 animate-glitch-opacity"></span>
                          </span>
                          <span className="absolute -inset-1 bg-gradient-to-r from-cyber-neon/0 via-cyber-neon/20 to-cyber-neon/0 blur-xl animate-pulse"></span>
                        </div>
                      </motion.div>
                      <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ 
                          delay: 0.8,
                          duration: 0.7,
                          ease: "easeOut"
                        }}
                        className="relative"
                      >
                        <div className="text-2xl font-cyber tracking-[0.2em] text-cyber-accent relative cyberpunk-text">
                          <span className="relative inline-block">
                            <span className="relative z-10 drop-shadow-[0_0_8px_rgba(0,255,159,0.5)]">NEURAL LINK ESTABLISHED</span>
                            <span className="absolute inset-0 text-cyber-neon/60 blur-[1px] mix-blend-screen animate-glitch-3 z-20">NEURAL LINK ESTABLISHED</span>
                            <span className="absolute -inset-1 bg-gradient-to-r from-cyber-accent/0 via-cyber-accent/20 to-cyber-accent/0 blur-lg animate-pulse"></span>
                          </span>
                        </div>
                      </motion.div>
                    </div>
                  </motion.div>
                ) : (
                  <div className="flex flex-col">
                    {lines.map((line, index) => (
                      <div 
                        key={index} 
                        className={`mb-1 transition-colors duration-500 ${
                          line.decrypted ? 'text-cyber-neon' : 'text-cyber-neon/50'
                        }`}
                      >
                        {line.text}
                        {line.decrypted && index === lines.length - 1 && (
                          <span className="ml-2 text-cyber-accent">[COMPLETE]</span>
                        )}
                      </div>
                    ))}
                    <span className="animate-[blink_0.7s_infinite]">_</span>
                  </div>
                )}
              </div>
            </motion.div>
          </motion.div>

          {/* Right side panels */}
          <div className="space-y-4">
            <AnimatePresence>
              {panelsVisible && (
                <>
                  {/* Progress indicator */}
                  <motion.div
                    initial={{ scale: 0.95, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    exit={{ scale: 0.95, opacity: 0 }}
                    transition={{ duration: 0.5 }}
                    className="cyber-panel p-4"
                  >
                    <div className="text-cyber-neon text-sm mb-2">SYSTEM LOAD</div>
                    <div className="w-full bg-cyber-dark/50 h-2 rounded-sm overflow-hidden">
                      <div 
                        className="h-full bg-cyber-neon transition-all duration-150 shadow-neon"
                        style={{ width: `${progress}%` }}
                      />
                    </div>
                    <div className="text-right text-cyber-neon text-sm mt-1">
                      {Math.round(progress)}%
                    </div>
                  </motion.div>

                  {/* Sector Status */}
                  <motion.div
                    initial={{ scale: 0.95, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    exit={{ scale: 0.95, opacity: 0 }}
                    transition={{ duration: 0.5, delay: 0.3 }}
                    className="cyber-panel p-4"
                  >
                    <div className="text-cyber-neon text-sm mb-2">SECTOR STATUS</div>
                    <div className="grid grid-cols-1 gap-2 text-xs">
                      {sectors.slice(0, 4).map(sector => (
                        <div
                          key={sector.id}
                          className={`flex items-center justify-between p-1 border border-cyber-neon/20 ${
                            sector.status === 'SECURE' ? 'bg-cyber-neon/10' : 'bg-cyber-accent/10'
                          }`}
                        >
                          <span className="text-cyber-neon/70">SEC-{sector.id}</span>
                          <span className={sector.status === 'SECURE' ? 'text-cyber-neon' : 'text-cyber-accent animate-pulse'}>
                            {sector.status}
                          </span>
                        </div>
                      ))}
                    </div>
                  </motion.div>

                  {/* Data stream visualization */}
                  <motion.div
                    initial={{ scale: 0.95, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    exit={{ scale: 0.95, opacity: 0 }}
                    transition={{ duration: 0.5, delay: 0.1 }}
                    className="cyber-panel p-4"
                  >
                    <div className="text-cyber-neon text-sm mb-2">DATA STREAM</div>
                    <div className="font-mono text-[10px] leading-tight text-cyber-neon/70 break-all">
                      {decryptedText}
                    </div>
                  </motion.div>
                </>
              )}
            </AnimatePresence>
          </div>
        </div>

        {/* Add centered welcome container */}
        <AnimatePresence>
          {showFinalMessage && (
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="absolute inset-0 flex items-center justify-center"
            >
              <motion.div
                initial={{ width: '66.666667%', height: '60vh' }}
                animate={{ 
                  width: '100%',
                  height: '100%',
                }}
                transition={{
                  delay: 2.5,
                  duration: 0.8,
                  ease: "easeInOut"
                }}
                className="relative"
              >
                <motion.div 
                  className="cyber-panel w-full h-full relative overflow-hidden"
                  initial={{ borderRadius: '0.5rem' }}
                  animate={{ borderRadius: 0 }}
                  transition={{
                    delay: 2.5,
                    duration: 0.8,
                    ease: "easeInOut"
                  }}
                >
                  {/* Keep CRT effects and welcome content ... */}
                  <div className="absolute inset-0 pointer-events-none">
                    <div className="absolute inset-0 bg-gradient-to-b from-transparent to-cyber-neon/5" />
                    <div className="absolute inset-0 animate-[flicker_0.15s_infinite]" />
                    <div className="absolute top-0 left-0 right-0 h-[2px] bg-cyber-neon/20 animate-[scanline_3s_linear_infinite]" />
                    <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-transparent via-cyber-neon/5 to-transparent opacity-50" />
                  </div>

                  <div className="relative z-10 p-6 font-mono text-cyber-neon h-full overflow-y-auto flex items-center justify-center">
                    <div className="text-center relative">
                      <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -20 }}
                        transition={{ 
                          delay: 0.3,
                          duration: 0.8,
                          ease: "easeOut"
                        }}
                        className="relative"
                      >
                        <div className="text-7xl font-cyber tracking-wider text-cyber-neon mb-8 relative cyberpunk-text">
                          <span className="relative inline-block">
                            <span className="relative z-10 drop-shadow-[0_0_10px_rgba(204,255,0,0.5)]">WELCOME</span>
                            <span className="absolute inset-0 text-cyber-accent/80 blur-[2px] mix-blend-screen animate-glitch-1 z-20 translate-x-[2px] translate-y-[-2px]">WELCOME</span>
                            <span className="absolute inset-0 text-cyber-neon/80 blur-[1px] mix-blend-multiply animate-glitch-2 z-30 translate-x-[-2px] translate-y-[2px]">WELCOME</span>
                            <span className="absolute inset-0 bg-gradient-to-r from-cyber-neon/0 via-cyber-neon/30 to-cyber-neon/0 blur-xl animate-glitch-3 z-0"></span>
                            <span className="absolute inset-0 bg-gradient-to-r from-cyber-accent/0 via-cyber-accent/20 to-cyber-accent/0 blur-lg animate-pulse mix-blend-overlay"></span>
                            <span className="absolute inset-0 bg-cyber-neon/10 mix-blend-overlay filter contrast-150 animate-glitch-opacity"></span>
                          </span>
                          <span className="absolute -inset-1 bg-gradient-to-r from-cyber-neon/0 via-cyber-neon/20 to-cyber-neon/0 blur-xl animate-pulse"></span>
                        </div>
                      </motion.div>
                      <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ 
                          delay: 0.8,
                          duration: 0.7,
                          ease: "easeOut"
                        }}
                        className="relative"
                      >
                        <div className="text-2xl font-cyber tracking-[0.2em] text-cyber-accent relative cyberpunk-text">
                          <span className="relative inline-block">
                            <span className="relative z-10 drop-shadow-[0_0_8px_rgba(0,255,159,0.5)]">NEURAL LINK ESTABLISHED</span>
                            <span className="absolute inset-0 text-cyber-neon/60 blur-[1px] mix-blend-screen animate-glitch-3 z-20">NEURAL LINK ESTABLISHED</span>
                            <span className="absolute -inset-1 bg-gradient-to-r from-cyber-accent/0 via-cyber-accent/20 to-cyber-accent/0 blur-lg animate-pulse"></span>
                          </span>
                        </div>
                      </motion.div>
                    </div>
                  </div>
                </motion.div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Bottom HUD bar */}
        <AnimatePresence>
          {!isExiting && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 20 }}
              transition={{ duration: 0.5 }}
              className="mt-4 flex justify-between items-center text-cyber-neon text-sm"
            >
              <div>SESSION ID: {sessionId}</div>
              <div>ENCRYPTION: ACTIVE</div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.div>
  );
};

export default LoadingScreen; 