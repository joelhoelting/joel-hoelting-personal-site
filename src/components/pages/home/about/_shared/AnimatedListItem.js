import React from 'react';
import styled from 'styled-components';

const StyledAnimatedListItem = styled.li`
  ${'' /* list-style-type: none; */}
  display: flex;
  align-items: center;
  list-style-position: inside;
  opacity: ${props => (props.visible ? 1 : 0)};
  margin-bottom: 1em;
  transform: ${props => (props.visible ? 'translateX(0)' : 'translateX(20px)')};
  transition: ${props =>
    props.visible ? `all ${props.transitionDuration || 300}ms ease` : 'none'};
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
  staggerInterval,
  transitionDuration,
  visible
}) => {
  return (
    <StyledAnimatedListItem
      className={className}
      visible={visible}
      style={{
        transitionDelay: `${(staggerInterval || 100) * (idx + 1)}ms`
      }}
      transitionDuration={transitionDuration}
    >
      {children}
    </StyledAnimatedListItem>
  );
};

export default AnimatedListItem;
