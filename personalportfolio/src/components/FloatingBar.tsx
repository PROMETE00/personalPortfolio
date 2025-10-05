'use client';

import React from 'react';

export default function FloatingBar({children}:{children: React.ReactNode}) {
  return (
    <div
      className="
        fixed top-4 left-1/2 -translate-x-1/2
        z-50
        flex items-center justify-center
        px-10 py-10
        rounded-full
        bg-white/20 dark:bg-black/20
        backdrop-blur-md
        border border-white/30 dark:border-black/30
        shadow-md
      "
    >
      {children}
    </div>
  );
}