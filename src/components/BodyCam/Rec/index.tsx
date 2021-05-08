import React from 'react';
import styled from 'styled-components';

type BlinkType = {
  isActive: boolean;
};

const BlinkCircle = styled.div<BlinkType>`
  background-color: rgb(196, 13, 13);
  border-radius: 50%;
  width: 17px;
  height: 17px;
  margin: 0 3px;

  ${({ isActive }) =>
    isActive
      ? 'animation: blinker 1.5s cubic-bezier(.5, 0, 1, 1) infinite alternate;'
      : 'background-color: rgb(99, 13, 13);opacity: 0.3;'}
`;

interface Props {
  isActive: boolean;
}

export function Rec({ isActive }: Props) {
  return (
    <div>
      <BlinkCircle isActive={isActive} />
    </div>
  );
}