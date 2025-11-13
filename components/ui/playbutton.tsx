import React from 'react';
import styled from 'styled-components';

const PlayButton = () => {
  return (
    <StyledWrapper>
      <button className="cssbuttons-io">
        <span>
          <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path d="M8 5v14l11-7z" fill="currentColor" />
          </svg>
          Play Sample</span>
      </button>
    </StyledWrapper>
  );
}

const StyledWrapper = styled.div`
  .cssbuttons-io {
    position: relative;
    font-family: inherit;
    font-weight: 500;
    font-size: 14px;
    letter-spacing: 0.05em;
    border-radius: 0.6em;
    cursor: pointer;
    border: none;
    background: linear-gradient(to right, #0d0d0d, #404040);
    color: ghostwhite;
    overflow: hidden;
    transition: transform 0.2s ease, box-shadow 0.2s ease;
  }

  .cssbuttons-io:hover {
    transform: translateY(-1px);
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.2);
  }

  .cssbuttons-io svg {
    width: 1em;
    height: 1em;
    margin-right: 0.4em;
    transition: transform 0.3s ease;
  }

  .cssbuttons-io:hover svg {
    transform: scale(1.1);
  }

  .cssbuttons-io span {
    position: relative;
    z-index: 10;
    transition: all 0.3s ease;
    display: inline-flex;
    align-items: center;
    padding: 0.5em 1em;
  }

  .cssbuttons-io::before,
  .cssbuttons-io::after {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    z-index: 0;
  }

  .cssbuttons-io::before {
    content: "";
    background: rgba(255, 255, 255, 0.1);
    width: 120%;
    left: -10%;
    transform: skew(30deg);
    transition: transform 0.3s ease;
  }

  .cssbuttons-io:hover::before {
    transform: translate3d(100%, 0, 0);
  }

  .cssbuttons-io:active {
    transform: scale(0.95) translateY(0);
  }`;

export default PlayButton;
