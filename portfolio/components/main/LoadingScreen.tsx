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

const LoadingScreen = ({ onLoadingComplete }: { onLoadingComplete: () => void }) => {
  const [lines, setLines] = useState<Array<{ text: string, decrypted: boolean }>>([]);
  const [progress, setProgress] = useState(0);
  const [decryptedText, setDecryptedText] = useState('0'.repeat(32));
  const [sessionId, setSessionId] = useState('00000000');
  const [panelsVisible, setPanelsVisible] = useState(false);
  const [isExiting, setIsExiting] = useState(false);
  const [showFinalMessage, setShowFinalMessage] = useState(false);
  const [systemStats, setSystemStats] = useState({
    cpu: 60,
    memory: 40,
    network: 70
  });

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
        cpu: generateRandomNumber(60, 98),
        memory: generateRandomNumber(40, 85),
        network: generateRandomNumber(70, 99)
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

  return (
    <motion.div
      initial={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
      className="fixed inset-0 bg-cyber-black z-[100] flex items-center justify-center p-4"
    >
      <div className="w-full max-w-4xl relative">
        {/* Background grid */}
        <div className="absolute inset-0 cyber-grid opacity-10" />
        
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
                <div>CPU: {systemStats.cpu}%</div>
                <div>MEM: {systemStats.memory}%</div>
                <div>NET: {systemStats.network}%</div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        <div className={`grid grid-cols-1 md:grid-cols-3 gap-4 transition-all duration-700 ease-in-out ${showFinalMessage ? 'md:grid-cols-1 max-w-2xl mx-auto' : ''}`}>
          {/* Main terminal */}
          <motion.div 
            className={`md:col-span-2 transition-all duration-700 ease-in-out ${showFinalMessage ? 'md:col-span-1' : ''}`}
            layout="position"
            layoutId="terminal"
            transition={{ 
              type: "spring",
              stiffness: 100,
              damping: 20,
              duration: 0.7
            }}
          >
            <motion.div 
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              className="cyber-panel h-[60vh] relative overflow-hidden"
              layout="preserve-aspect"
              transition={{ 
                duration: 0.7,
                ease: "easeInOut"
              }}
            >
              {/* CRT and scanline effects */}
              <div className="absolute inset-0 pointer-events-none">
                <div className="absolute inset-0 bg-gradient-to-b from-transparent to-cyber-neon/5" />
                <div className="absolute inset-0 animate-[flicker_0.15s_infinite]" />
                <div className="absolute top-0 left-0 right-0 h-[2px] bg-cyber-neon/20 animate-[scanline_3s_linear_infinite]" />
              </div>

              {/* Terminal content */}
              <div className="relative z-10 p-6 font-mono text-cyber-neon h-full overflow-y-auto">
                {showFinalMessage ? (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.7, ease: "easeOut" }}
                    className="absolute inset-0 flex items-center justify-center"
                  >
                    <div className="text-center">
                      <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ 
                          delay: 0.3,
                          duration: 0.7,
                          ease: "easeOut"
                        }}
                        className="text-5xl font-bold text-cyber-neon mb-6"
                      >
                        Welcome
                      </motion.div>
                      <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ 
                          delay: 0.8,
                          duration: 0.7,
                          ease: "easeOut"
                        }}
                        className="text-cyber-accent text-lg"
                      >
                        NEURAL LINK ESTABLISHED
                      </motion.div>
                    </div>
                  </motion.div>
                ) : (
                  <>
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
                  </>
                )}
              </div>
            </motion.div>
          </motion.div>

          {/* Side panels */}
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