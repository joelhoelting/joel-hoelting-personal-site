import React, { useState } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { Waypoint } from 'react-waypoint';

const AnimatedSectionWrapper = styled.div`
  margin: 2em 0;
  display: flex;
  flex-direction: column;
  .date {
    margin: 1em 0;
    &.date__start-date {
      opacity: ${props => (props.visible ? 1 : 0)};
      transition: ${props => `opacity 500ms ease`};
    }
    &.date__end-date {
      opacity: ${props => (props.visible ? 1 : 0)};
      transition: ${props => `opacity 500ms ease ${props.lineDuration}ms`};
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
    max-width: 700px;
    position: relative;
    .left-line {
      border-left: 1px solid ${props => props.theme.color};
      position: absolute;
      left: 0;
      top: 0;
      opacity: ${props => (props.visible ? 1 : 0)};
      height: ${props => (props.visible ? '100%' : '0')};
      transition: ${props =>
        `opacity ${props.lineDuration}ms ease, height ${props.lineDuration}ms ease`};
    }
    .list-description {
      margin-bottom: 1em;
      opacity: ${props => (props.visible ? 1 : 0)};
      transition: ${props => `opacity 500ms ease ${props.lineDuration + 500}ms`};
    }
  }
`;

const AnimatedSection = ({
  children,
  bottomOffset,
  endDate,
  heading,
  lineDuration,
  listDescription,
  startDate,
  subHeading
}) => {
  const [visible, setVisibility] = useState(false);

  const childrenWithProps = React.Children.map(children, child =>
    React.cloneElement(child, { visible })
  );

  return (
    <Waypoint
      bottomOffset={bottomOffset || 0}
      onEnter={() => setVisibility(true)}
      // onLeave={() => {
      //   setVisibility(false);
      // }}
    >
      <AnimatedSectionWrapper lineDuration={lineDuration} visible={visible}>
        {startDate && <p className="center uppercase date date__start-date">{startDate}</p>}
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

AnimatedSection.propTypes = {
  heading: PropTypes.string.isRequired,
  lineDuration: PropTypes.number.isRequired,
  listDescription: PropTypes.string,
  subHeading: PropTypes.string,
  endDate: PropTypes.string,
  startDate: PropTypes.string
};

export default AnimatedSection;
