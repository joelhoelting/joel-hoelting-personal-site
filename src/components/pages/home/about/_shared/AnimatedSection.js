import React, { useState } from 'react';
import styled from 'styled-components';
import { Waypoint } from 'react-waypoint';

const AnimatedSectionWrapper = styled.div`
  margin: 2em 0;
  display: flex;
  flex-direction: column;
  .date {
    margin: 1em 0;
    &.date__end-date {
      opacity: ${props => (props.visible ? 1 : 0)};
      transition: opacity 500ms ease 3500ms;
      transition: ${props => (props.visible ? 'opacity 500ms ease 3500ms' : 'opacity 200ms ease')};
    }
  }
  .left {
    display: flex;
    padding-right: 2em;
    flex-direction: column;
    align-items: flex-end;
    width: 50%;
    h3.heading {
      opacity: ${props => (props.visible ? 1 : 0)};
      transition: opacity 500ms ease;
    }
    p.subheading {
      margin: 0.4em;
      opacity: ${props => (props.visible ? 0.5 : 0)};
      text-transform: uppercase;
      transition: opacity 500ms ease;
    }
  }
  .right {
    padding-left: 2em;
    width: 50%;
    position: relative;
    .left-line {
      border-left: 1px solid ${props => props.theme.color};
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
    .list-description {
      margin-bottom: 1em;
    }
  }
`;

const AboutSection = ({ children, endDate, heading, listDescription, startDate, subHeading }) => {
  const [visible, setVisibility] = useState(false);

  const childrenWithProps = React.Children.map(children, child =>
    React.cloneElement(child, { visible })
  );

  return (
    <Waypoint
      onEnter={() => setVisibility(true)}
      onLeave={() => {
        setVisibility(false);
      }}
    >
      <AnimatedSectionWrapper visible={visible}>
        {endDate && <p className="center uppercase date">{startDate}</p>}

        <div className="row">
          <div className="left">
            <h3 className="heading">{heading}</h3>
            {subHeading && <p className="subheading">{subHeading}</p>}
          </div>
          <div className="right">
            <div className="left-line" />
            {listDescription && <p className="list-description">{listDescription}</p>}
            <ul>{childrenWithProps}</ul>
          </div>
        </div>
        {endDate && <p className="center uppercase date date__end-date">{endDate}</p>}
      </AnimatedSectionWrapper>
    </Waypoint>
  );
};

export default AboutSection;
