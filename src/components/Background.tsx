import React, { useEffect, useRef } from 'react';
import * as THREE from 'three';
import NET from 'vanta/dist/vanta.net.min';

function Background() {
  const vantaRef = useRef(null);

  useEffect(() => {
    const vantaEffect = NET({
      el: vantaRef.current,
      THREE: THREE,
      mouseControls: true,
      touchControls: true,
      gyroControls: false,
      minHeight: 200.00,
      minWidth: 200.00,
      scale: 1.00,
      scaleMobile: 1.00,
      color: 0x3b82f6,
      backgroundColor: 0x0a192f,
      points: 15.00,
      maxDistance: 25.00,
      spacing: 18.00,
      showDots: false
    });

    return () => {
      if (vantaEffect) vantaEffect.destroy();
    };
  }, []);

  return (
    <>
      <div ref={vantaRef} className="fixed inset-0 -z-10" />
      <div className="fixed inset-0 bg-gradient-to-b from-transparent via-[#0A192F]/50 to-[#0A192F] pointer-events-none" />
      <div className="fixed inset-0 bg-[#0A192F]/20 backdrop-blur-[1px] pointer-events-none" />
    </>
  );
}

export default Background;