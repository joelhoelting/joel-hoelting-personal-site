import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import { mediaMin } from '~/styles/mediaQueries';

const StyledAnimatedListItem = styled.li`
  display: flex;
  align-items: center;
  list-style-position: inside;
  opacity: ${props => (props.visible ? 1 : 0)};
  transform: ${props => (props.visible ? 'translateX(0)' : 'translateX(20px)')};
  transition: ${props =>
    props.visible ? `all ${props.transitionDuration || 300}ms ease` : 'none'};
  &:not(:last-child) {
    margin-bottom: 1em;
  }
  font-size: 0.8em;
  ${mediaMin.tabletLandscape`
    font-size: 1em;
  `}
  &.tech-list-item {
    svg {
      fill: ${props => props.theme.color};
      width: 2.5em;
      height: 2.5em;
      margin-right: 1em;
    }
  }
`;

const AnimatedListItem = ({
  children,
  className,
  idx,
  lineDuration,
  staggerInterval,
  transitionDuration,
  visible
}) => {
  return (
    <StyledAnimatedListItem
      className={className}
      visible={visible}
      style={{
        transitionDelay: `${(staggerInterval || 100) * (idx + 1) + lineDuration - 500}ms`
      }}
      transitionDuration={transitionDuration}
    >
      {children}
    </StyledAnimatedListItem>
  );
};

AnimatedListItem.propTypes = {
  lineDuration: PropTypes.number.isRequired
};

export default AnimatedListItem;
