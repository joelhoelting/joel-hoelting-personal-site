import React, { useState } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { Waypoint } from 'react-waypoint';

import { mediaMax, mediaMin } from '~/styles/mediaQueries';

const AnimatedSectionWrapper = styled.div`
  margin: 4em 0;
  display: flex;
  flex-direction: column;
  ${mediaMin.tabletLandscape`
    margin: 2em 0;
  `}
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
    flex-direction: column;
    width: 100%;
    ${mediaMin.tabletLandscape`
      padding-right: 2em;
      width: 50%;
      align-items: flex-end;
    `}

    h3.heading {
      opacity: ${props => (props.visible ? 1 : 0)};
      transition: opacity 500ms ease;
      ${mediaMax.tabletLandscape`
        margin-bottom: .2em;
      `}
    }
    p.subheading {
      margin: 0.4em 0;
      opacity: ${props => (props.visible ? 0.5 : 0)};
      text-transform: uppercase;
      transition: opacity 500ms ease;
      ${mediaMax.tabletLandscape`
        margin: 0.2em 0;
      `}
    }
    p.mobile-subheading {
      opacity: ${props => (props.visible ? 0.5 : 0)};
      text-transform: uppercase;
      transition: opacity 500ms ease;
    }
  }
  .right {
    max-width: 700px;
    position: relative;
    width: 100%;
    padding-left: 2em;
    margin-top: 2em;
    ${mediaMin.tabletLandscape`
      margin-top: 0;
      width: 50%;
    `}
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
      font-size: 0.8em;
      margin-bottom: ${props => (!props.noListItems ? '1em' : 0)};
      transform: ${props => (props.visible ? 'translateX(0)' : 'translateX(20px)')};
      opacity: ${props => (props.visible ? 1 : 0)};
      transition: ${props => `all 500ms ease ${props.lineDuration - 500}ms`};
      ${mediaMin.tabletLandscape`
        font-size: 1em;
      `}
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
  noListItems,
  startDate,
  subHeading
}) => {
  const [visible, setVisibility] = useState(false);

  const childrenWithProps = React.Children.map(children, child =>
    React.cloneElement(child, { visible })
  );

  return (
    <Waypoint bottomOffset={bottomOffset || 0} onEnter={() => setVisibility(true)}>
      <AnimatedSectionWrapper
        lineDuration={lineDuration}
        noListItems={noListItems}
        visible={visible}
      >
        {startDate && <p className="desktop center uppercase date date__start-date">{startDate}</p>}
        <div className="row row--column-mobile">
          <div className="left">
            <h3 className="heading">{heading}</h3>
            {subHeading && <p className="subheading">{subHeading}</p>}
            {startDate && endDate && (
              <p className="mobile mobile-subheading">{`${startDate} - ${endDate}`}</p>
            )}
          </div>
          <div className="right">
            <div className="left-line" />
            {listDescription && <p className="list-description">{listDescription}</p>}
            <ul>{childrenWithProps}</ul>
          </div>
        </div>
        {endDate && <p className="desktop center uppercase date date__end-date">{endDate}</p>}
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
