import React from 'react';
import styled from 'styled-components';

const KozakuraWrapper = styled.div`
  .input {
    position: relative;
    z-index: 1;
    display: inline-block;
    margin: 1em;
    max-width: 400px;
    width: calc(100% - 2em);
    vertical-align: top;
    overflow: hidden;
    padding-bottom: 1em;
    &.input--filled .input__field--kozakura {
      -webkit-transition: opacity 0s 0.35s;
      transition: opacity 0s 0.35s;
      opacity: 1;
    }

    &.input--filled .input__label--kozakura {
      transition-delay: 0.15s;
      transform: translate3d(0, 0, 0);
    }

    &.input--filled .input__label-content--kozakura {
      -webkit-transition-delay: 0.15s;
      transition-delay: 0.15s;
      -webkit-transform: translate3d(0, -100%, 0);
      transform: translate3d(0, -100%, 0);
    }

    &.input--filled .graphic--kozakura {
      fill: #fff;
      -webkit-transform: translate3d(-66.6%, 0, 0);
      transform: translate3d(-66.6%, 0, 0);
    }

    input {
      position: relative;
      display: block;
      float: right;
      padding: 0.25em 0.5em;
      width: 100%;
      border: none;
      border-radius: 0;
      background: transparent;
      color: #1586c7;
      font-weight: 400;
      font-family: 'Avenir Next', 'Helvetica Neue', Helvetica, Arial, sans-serif;
      -webkit-appearance: none; /* for box shadows to show on iOS */
      margin-top: 1.25em;
      font-size: 1.55em;
      opacity: 0;
      &:focus {
        outline: none;
        opacity: 1;
      }

      &:focus + .input__label--kozakura {
        transition-delay: 0.15s;
        transform: translate3d(0, 0, 0);
      }

      &:focus + .input__label--kozakura .input__label-content--kozakura {
        -webkit-transition-delay: 0.15s;
        transition-delay: 0.15s;
        -webkit-transform: translate3d(0, -100%, 0);
        transform: translate3d(0, -100%, 0);
      }

      &:focus ~ svg {
        fill: #fff;
        -webkit-transform: translate3d(-66.6%, 0, 0);
        transform: translate3d(-66.6%, 0, 0);
      }
    }

    label {
      display: inline-block;
      float: right;
      padding: 0 0.25em;
      width: 100%;
      color: #6a7989;
      font-weight: bold;
      font-size: 70.25%;
      -webkit-font-smoothing: antialiased;
      -moz-osx-font-smoothing: grayscale;
      -webkit-touch-callout: none;
      -webkit-user-select: none;
      -khtml-user-select: none;
      -moz-user-select: none;
      -ms-user-select: none;
      user-select: none;
      text-align: left;
      position: absolute;
      top: 1em;
      pointer-events: none;
      overflow: hidden;
      transform: translate3d(1em, 2.75em, 0);
      transition: transform 0.3s;
      span {
        position: relative;
        display: block;
        padding: 0.25em 0;
        width: 100%;
        color: #055f92;
        transition: transform 0.3s;
        &:after {
          content: attr(data-content);
          position: absolute;
          font-weight: 800;
          top: 100%;
          left: 0;
          height: 100%;
          width: 100%;
          color: #fff;
          padding: 0.25em 0;
          text-transform: uppercase;
          letter-spacing: 1px;
          font-size: 0.85em;
        }
      }
    }

    svg {
      position: absolute;
      top: 0;
      left: 0;
      fill: #1586c7;
      pointer-events: none;
      top: 1em;
      bottom: 0px;
      height: 4.5em;
      z-index: -1;
      transition: transform 0.7s, fill 0.7s;
      transition-timing-function: cubic-bezier(0, 0.25, 0.5, 1);
    }
  }
`;

const KozakuraInput = () => {
  return (
    <KozakuraWrapper>
      <div class="input input--kozakura">
        <input class="input__field input__field--kozakura" type="text" id="email" />
        <label class="input__label input__label--kozakura" for="email">
          <span class="input__label-content input__label-content--kozakura" data-content="email">
            Email
          </span>
        </label>
        <svg
          class="graphic graphic--kozakura"
          width="300%"
          height="100%"
          viewBox="0 0 1200 60"
          preserveAspectRatio="none"
        >
          <path d="M1200,9c0,0-305.005,0-401.001,0C733,9,675.327,4.969,598,4.969C514.994,4.969,449.336,9,400.333,9C299.666,9,0,9,0,9v43c0,0,299.666,0,400.333,0c49.002,0,114.66,3.484,197.667,3.484c77.327,0,135-3.484,200.999-3.484C894.995,52,1200,52,1200,52V9z" />
        </svg>
      </div>
    </KozakuraWrapper>
  );
};

export default KozakuraInput;
