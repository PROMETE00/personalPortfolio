'use client';

import React from 'react';
import {Theme, ThemeProvider} from '@gravity-ui/uikit';
import {Ghost} from '@gravity-ui/icons';
import {AsideHeader} from '@gravity-ui/navigation';

import {DARK, DEFAULT_THEME, Wrapper} from './Wrapper';

type Props = {children: React.ReactNode};

export default function AppShell({children}: Props) {
  const [theme, setTheme] = React.useState<Theme>(DEFAULT_THEME);
  const isDark = theme === DARK;

  return (
    <ThemeProvider theme={theme}>
          <Wrapper setTheme={setTheme} isDark={isDark}>
            {children}
          </Wrapper>
    </ThemeProvider>
  );
}
