import React, { useState } from 'react';
import styled from 'styled-components';
import { Waypoint } from 'react-waypoint';

const TechSectionWrapper = styled.div`
  margin: 4em 0;
  display: flex;
  .left {
    padding-right: 2em;
    width: 50%;
    display: flex;
    justify-content: flex-end;
  }
  .right {
    padding-left: 2em;
    width: 50%;
    position: relative;
    .left-line {
      border: 1px solid ${props => props.theme.color};
      position: absolute;
      left: 0;
      top: 0;
      opacity: ${props => (props.visible ? 1 : 0)};
      height: ${props => (props.visible ? '100%' : '0')};
      transition: ${props =>
        props.visible
          ? 'opacity 3000ms ease 500ms, height 3000ms ease 500ms'
          : 'opacity 500ms ease, height 500ms ease'};
    }
    li {
      list-style-type: none;
      display: flex;
      align-items: center;
      margin-bottom: 1em;
      opacity: ${props => (props.visible ? 1 : 0)};
      transform: ${props => (props.visible ? 'translateX(0)' : 'translateX(20px)')};
      svg {
        fill: ${props => props.theme.color};
        width: 2em;
        height: 2em;
      }
      span {
        margin-left: 1em;
      }
    }
  }
`;

const TechSection = ({ sectionData }) => {
  const [mounted, setMounted] = useState(true);
  const { heading, stackItems } = sectionData;

  const stagger = 100;

  return (
    <Waypoint
    // onEnter={() => setMounted(true)}
    // onLeave={() => {
    //   setMounted(false);
    // }}
    >
      <TechSectionWrapper visible={mounted}>
        <div className="left">
          <h3>{heading}</h3>
        </div>
        <div className="right">
          <div className="left-line active" />
          {stackItems.map((stackItem, idx) => {
            return (
              <li
                style={{
                  transition: `transform 300ms ${stagger *
                    (idx + 1)}ms ease, opacity 300ms ${stagger * (idx + 1)}ms ease`
                }}
              >
                {stackItem.icon}
                <span>{stackItem.name}</span>
              </li>
            );
          })}
        </div>
      </TechSectionWrapper>
    </Waypoint>
  );
};

export default TechSection;
