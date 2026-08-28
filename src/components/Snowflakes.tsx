import React from 'react';
import { Snowflake as SnowflakeIcon } from 'lucide-react';
import styles from './Snowflakes.module.css';

// Função determinística para geração de randomicos baseados em índice
const seededRandom = (seed: number) => {
  const x = Math.sin(seed) * 10000;
  return x - Math.floor(x);
};

interface SnowflakeData {
  id: number;
  depth: 'front' | 'middle' | 'back';
  type: 'complex' | 'simple' | 'blur';
  leftDesktop: number; // 0-100
  leftMobile: number; // 0-100
  topDesktop: number; // 0-100
  topMobile: number; // 0-100
  sizeDesktop: number;
  sizeMobile: number;
  opacity: number;
  delay: number;
  duration: number;
  drift: number;
  driftY: number;
  driftR: number;
  visibility: 'mobile' | 'tablet' | 'desktop';
}

const generateSnowflakes = (): SnowflakeData[] => {
  const flakes: SnowflakeData[] = [];
  const TOTAL = 100; // Dobrado para garantir abundância no celular

  for (let i = 0; i < TOTAL; i++) {
    const s1 = seededRandom(i * 13.1);
    const s2 = seededRandom(i * 27.5);
    const s3 = seededRandom(i * 41.3);
    const s4 = seededRandom(i * 59.9);
    const s5 = seededRandom(i * 77.7);

    // Depth allocation
    let depth: 'front' | 'middle' | 'back' = 'back';
    let type: 'complex' | 'simple' | 'blur' = 'blur';
    let sizeDesktop = 0;
    let sizeMobile = 0;

    // Distribuindo 100 flocos
    if (i < 40) {
      depth = 'back';
      type = s1 > 0.5 ? 'blur' : 'simple';
      sizeDesktop = 20 + (s2 * 35); // 20px a 55px
      sizeMobile = 15 + (s2 * 20);
    } else if (i < 80) {
      depth = 'middle';
      type = s1 > 0.4 ? 'simple' : 'complex';
      sizeDesktop = 45 + (s2 * 60); // 45px a 105px
      sizeMobile = 25 + (s2 * 30);
    } else {
      depth = 'front';
      type = 'complex';
      sizeDesktop = 90 + (s2 * 90); // 90px a 180px
      sizeMobile = 40 + (s2 * 40);
    }

    // Visibility based on index thresholds:
    let visibility: 'mobile' | 'tablet' | 'desktop' = 'mobile';
    if (i >= 80 && i < 90) visibility = 'tablet';
    if (i >= 90) visibility = 'desktop';

    // Left position logic
    let leftDesktop = 0;
    if (s3 < 0.65) {
      leftDesktop = -5 + (s4 * 50); // -5% to 45% (esquerda preenchida)
    } else {
      leftDesktop = 55 + (s4 * 50); // 55% to 105% (direita preenchida levemente)
    }
    
    let leftMobile = -5 + (s3 * 110); // Espalhados por trás dos cards de -5% a 105%

    // Top position logic (Espalhados ao longo de toda a altura da seção)
    const topDesktop = 2 + (s5 * 92); // 2% a 94% 
    const topMobile = 2 + (s5 * 92); 

    const opacityBase = depth === 'back' ? 0.2 : depth === 'middle' ? 0.4 : 0.7;
    const opacity = opacityBase + (s1 * 0.2); 
    
    const delay = s2 * -15; // delay negativo para que a animação já comece em andamento 
    const durationBase = depth === 'back' ? 14 : depth === 'middle' ? 10 : 8; 
    const duration = durationBase + (s3 * 6); 
    
    const drift = -15 + (s4 * 30); // px X
    const driftY = -12 + (s1 * 24); // px Y
    const driftR = -15 + (s3 * 30); // degrees rotation

    flakes.push({
      id: i,
      depth,
      type,
      leftDesktop,
      leftMobile,
      topDesktop,
      topMobile,
      sizeDesktop,
      sizeMobile,
      opacity,
      delay,
      duration,
      drift,
      driftY,
      driftR,
      visibility
    });
  }

  return flakes;
};

const FLAKES = generateSnowflakes();

export function Snowflakes() {
  return (
    <div className={styles.snowContainer} aria-hidden="true">
      {FLAKES.map((flake) => (
        <div
          key={flake.id}
          className={`${styles.flake} ${styles[flake.depth]} ${styles[`vis${flake.visibility.charAt(0).toUpperCase() + flake.visibility.slice(1)}`]}`}
          style={{
            '--left-desktop': `${flake.leftDesktop}%`,
            '--left-mobile': `${flake.leftMobile}%`,
            '--top-desktop': `${flake.topDesktop}%`,
            '--top-mobile': `${flake.topMobile}%`,
            '--size-desktop': `${flake.sizeDesktop}px`,
            '--size-mobile': `${flake.sizeMobile}px`,
            '--opacity': flake.opacity,
            '--delay': `${flake.delay}s`,
            '--duration': `${flake.duration}s`,
            '--drift': `${flake.drift}px`,
            '--drift-y': `${flake.driftY}px`,
            '--drift-r': `${flake.driftR}`,
          } as React.CSSProperties}
        >
          {flake.type === 'complex' && <SnowflakeIcon width="100%" height="100%" strokeWidth={1} />}
          {flake.type === 'simple' && <SnowflakeIcon width="100%" height="100%" strokeWidth={0.5} />}
          {flake.type === 'blur' && (
            <div 
              style={{ 
                width: '100%', 
                height: '100%', 
                borderRadius: '50%', 
                backgroundColor: 'currentColor',
                filter: 'blur(3px)'
              }} 
            />
          )}
        </div>
      ))}
    </div>
  );
}
