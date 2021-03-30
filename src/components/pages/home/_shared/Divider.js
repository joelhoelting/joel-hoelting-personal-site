import React, { useContext } from 'react';
import styled from 'styled-components';

import Context from '~/context';

const DividerWrapper = styled.div`
  top: 0;
  left: 0;
  width: 100%;
  height: 1px;
  border-top: 1px solid ${props => props.theme.color};
  ${props => props.darkModeActive && 'box-shadow: 0px 0px 5px 1px #fff'};
  opacity: ${props => (props.darkModeActive ? 0.1 : 1)};
`;

const Divider = () => {
  const context = useContext(Context);
  const { darkModeActive } = context;

  return <DividerWrapper darkModeActive={darkModeActive} />;
};

export default Divider;
