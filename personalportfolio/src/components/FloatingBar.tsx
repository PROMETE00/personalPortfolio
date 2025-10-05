'use client';

import React, {useEffect, useRef} from 'react';
import dynamic from 'next/dynamic';
import {Button, Icon} from '@gravity-ui/uikit';
// Recomendado: usa el paquete oficial de iconos
// npm i @gravity-ui/icons
import styles from './FloatingBar.module.scss';
import {gsap} from 'gsap';

import GitHub from '../assets/icons/github.svg';
import Figma from '../assets/icons/figma.svg';

// Ruta correcta de tu Shuffle (ajústala a tu estructura real)
// Si está en src/components/Shuffle/Shuffle.tsx:
const Shuffle = dynamic(() => import('../components/Shufle'), { ssr: false });


interface FloatingBarProps {
  light?: boolean;
}

export default function FloatingBar({light = false}: FloatingBarProps) {
  const rootRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!rootRef.current) return;
    gsap.fromTo(
      rootRef.current,
      {y: -12, opacity: 0},
      {y: 0, opacity: 1, duration: 0.6, ease: 'power2.out'}
    );
  }, []);

  return (
    <div
      ref={rootRef}
      className={`${styles.floatingBar} ${light ? styles.floatingBarLight : ''}`}
    >
      <div className={styles.inner}>
        <div className={styles.left}>
          {/* TÍTULO: centrado, grande */}
          <Shuffle
            text="PROMETEO MENDOZA LUIS"
            tag="h1"
            className={styles.titleCenter}
            colorFrom="#c9c9c9"
            colorTo="#ffffff"
          />
          {/* SUBTÍTULOS */}
          <Shuffle
            text="STUDENT AT INSTITUTE TECNOLOGICAL OF OAXACA"
            tag="p"
            className={styles.sub}
            colorFrom="#c9c9c9"
            colorTo="#ffffff"
          />
          <Shuffle
            text="SYSTEMS ENGINEERING 9° SEMESTER"
            tag="p"
            className={styles.sub}
            colorFrom="#c9c9c9"
            colorTo="#ffffff"
          />
        </div>

        <div className={styles.actions}>
          <Button
            size="l"
            view="outlined"
            href="https://github.com/Prometeo-Mendoza" // cambia a tu perfil real
            target="_blank"
            rel="noreferrer"
          >
            <Icon data={GitHub} size={16} />
            &nbsp;GitHub
          </Button>

          <Button
            size="l"
            view="outlined"
            href="https://www.figma.com/community/file/1271150067798118027/Gravity-UI-Design-System-(Beta)"
            target="_blank"
            rel="noreferrer"
          >
            <Icon data={Figma} size={18} />
            &nbsp;Download CV
          </Button>
        </div>
      </div>
    </div>
  );
}