import React from 'react';
import Drawer from '@/drawer';
import SliderButton from '@/sliderButton';
import { PanelItem } from './style';

const ControlPanel = ({ onClick, open }) => {

  return (
    <Drawer onClick={onClick} open={open} position='right'>
      <ul>
        <li>
          <PanelItem>알림</PanelItem>
          <SliderButton id="toggle1" size="small" />
        </li>
        <li>
          <PanelItem>메시지 미리보기</PanelItem>
          <SliderButton id="toggle2" size="small" />
        </li>
        <li>
          <PanelItem>첨부파일 자동 다운로드</PanelItem>
          <SliderButton id="toggle3" size="small" />
        </li>
        <li>
          <PanelItem>비디오 자동 재생</PanelItem>
          <SliderButton id="toggle4" size="small" />
        </li>
      </ul>
    </Drawer>
  );
};

export default ControlPanel;