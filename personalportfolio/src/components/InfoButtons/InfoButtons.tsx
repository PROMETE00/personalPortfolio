'use client';

import React from 'react';
import block from 'bem-cn-lite';
import {Button, Icon} from '@gravity-ui/uikit';
import {BookOpen, CopyTransparent, ListCheck, ListUl, LogoTelegram} from '@gravity-ui/icons';
import Storybook from '../../assets/icons/storybook.svg';
import Figma from '../../assets/icons/figma.svg';
import GitHub from '../../assets/icons/github.svg';



export function InfoButtons() {
  return (
    <div className="min-h-dvh flex items-center justify-center">
      <div className="text-center">
        <div className="text-2xl font-semibold">PROMETEO MENDOZA LUIS</div>
        <div className="mt-4 flex gap-3 justify-center">
          <Button size="l" view="outlined" href="https://github.com/gravity-ui" target="_blank">
            <Icon data={GitHub} size={16} /> GitHub
          </Button>
          <Button size="l" view="outlined" href="https://www.figma.com/community/file/1271150067798118027/Gravity-UI-Design-System-(Beta)" target="_blank">
            <Icon data={Figma} size={18} /> Figma
          </Button>
        </div>
      </div>
    </div>
  );
}