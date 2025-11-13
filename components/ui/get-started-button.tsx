"use client";

import Link from "next/link";
import React from "react";
import styled from "styled-components";

type Props = {
	href?: string;
	children?: React.ReactNode;
	className?: string;
	text?: string;
};

const GetStartedButton: React.FC<Props> = ({ href, children, text }) => {
	const content = (
		<>
			<span className="fold" />
			<div className="points_wrapper">
				<i className="point" />
				<i className="point" />
				<i className="point" />
				<i className="point" />
				<i className="point" />
				<i className="point" />
				<i className="point" />
				<i className="point" />
				<i className="point" />
				<i className="point" />
			</div>
			<span className="inner">
				<svg
					className="icon"
					fill="none"
					stroke="currentColor"
					viewBox="0 0 24 24"
					xmlns="http://www.w3.org/2000/svg"
					strokeLinecap="round"
					strokeLinejoin="round"
					strokeWidth={2.5}
				>
					<polyline points="13.18 1.37 13.18 9.64 21.45 9.64 10.82 22.63 10.82 14.36 2.55 14.36 13.18 1.37" />
				</svg>
				{children ?? text ?? "Get Started"}
			</span>
		</>
	);

	return (
		<StyledWrapper>
			{href ? (
				<Link href={href} legacyBehavior>
					<a className="button">{content}</a>
				</Link>
			) : (
				<button type="button" className="button">
					{content}
				</button>
			)}
		</StyledWrapper>
	);
};

const StyledWrapper = styled.div`
  .button {
    --h-button: 45px; /* reduced height */
    --w-button: 240px; /* reduced width */
    --round: 0.75rem;
    cursor: pointer;
    position: relative;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    overflow: hidden;
    transition: all 0.25s ease;
    /* Premium dark base with subtle sheen */
    background: radial-gradient(
        65.28% 65.28% at 50% 100%,
        rgba(255, 255, 255, 0.03) 0%,
        rgba(255, 255, 255, 0) 100%
      ),
      linear-gradient(0deg, #060606, #111111);
    /* thin border and shadow so the button doesn't merge into a black bg */
    border: 1px solid rgba(255, 255, 255, 0.06);
    box-shadow: 0 10px 30px rgba(0, 0, 0, 0.7), inset 0 1px 0 rgba(255,255,255,0.03);
    z-index: 20;
    border-radius: var(--round);
    /* keep the thin border for contrast (do not override) */
    outline: none;
    padding: 18px 32px;
    min-width: var(--w-button);
    min-height: var(--h-button);
  }
  .button::before,
  .button::after {
    content: "";
    position: absolute;
    inset: var(--space);
    transition: all 0.5s ease-in-out;
    border-radius: calc(var(--round) - var(--space));
    z-index: 0;
  }
  .button::before {
    --space: 1px;
    background: linear-gradient(
      177.95deg,
      rgba(255, 255, 255, 0.19) 0%,
      rgba(255, 255, 255, 0) 100%
    );
  }
  .button::after {
    --space: 2px;
    /* Subtle darker rim with soft sheen */
    background: radial-gradient(
        65.28% 65.28% at 50% 100%,
        rgba(255, 255, 255, 0.02) 0%,
        rgba(255, 255, 255, 0) 100%
      ),
      linear-gradient(0deg, #111317, #0b0b0b);
  }
  .button:active {
    transform: scale(0.95);
  }

  .button:focus {
    outline: none;
    box-shadow: 0 0 0 4px rgba(255,255,255,0.02), 0 6px 18px rgba(0,0,0,0.65);
  }

  .button:hover {
    transform: translateY(-2px);
    background: radial-gradient(
        65.28% 65.28% at 50% 100%,
        rgba(255, 255, 255, 0.04) 0%,
        rgba(255, 255, 255, 0) 100%
      ),
      linear-gradient(0deg, #0b0b0b, #171717);
    border-color: rgba(255,255,255,0.06);
  }

  .fold {
    z-index: 1;
    position: absolute;
    top: 0;
    right: 0;
    height: 1rem;
    width: 1rem;
    display: inline-block;
    transition: all 0.5s ease-in-out;
    background: radial-gradient(
      100% 75% at 55%,
      rgba(255, 255, 255, 0.04) 0%,
      rgba(255, 255, 255, 0) 100%
    );
    box-shadow: 0 0 3px black;
    border-bottom-left-radius: 0.5rem;
    border-top-right-radius: var(--round);
  }
  .fold::after {
    content: "";
    position: absolute;
    top: 0;
    right: 0;
    width: 150%;
    height: 150%;
    transform: rotate(45deg) translateX(0%) translateY(-18px);
    /* folded corner wrapper: use gray-100 so the folded part reads as a light wrapper */
    background-color: #f3f4f6; /* gray-100 */
    pointer-events: none;
  }
  .button:hover .fold {
    margin-top: -1rem;
    margin-right: -1rem;
  }

  .points_wrapper {
    overflow: hidden;
    width: 100%;
    height: 100%;
    pointer-events: none;
    position: absolute;
    z-index: 1;
  }

  .points_wrapper .point {
    bottom: -10px;
    position: absolute;
    animation: floating-points infinite ease-in-out;
    pointer-events: none;
    width: 2px;
    height: 2px;
    background-color: #bdbdbd;
    border-radius: 9999px;
  }
  @keyframes floating-points {
    0% {
      transform: translateY(0);
    }
    85% {
      opacity: 0;
    }
    100% {
      transform: translateY(-55px);
      opacity: 0;
    }
  }
  .points_wrapper .point:nth-child(1) {
    left: 10%;
    opacity: 1;
    animation-duration: 2.35s;
    animation-delay: 0.2s;
  }
  .points_wrapper .point:nth-child(2) {
    left: 30%;
    opacity: 0.7;
    animation-duration: 2.5s;
    animation-delay: 0.5s;
  }
  .points_wrapper .point:nth-child(3) {
    left: 25%;
    opacity: 0.8;
    animation-duration: 2.2s;
    animation-delay: 0.1s;
  }
  .points_wrapper .point:nth-child(4) {
    left: 44%;
    opacity: 0.6;
    animation-duration: 2.05s;
  }
  .points_wrapper .point:nth-child(5) {
    left: 50%;
    opacity: 1;
    animation-duration: 1.9s;
  }
  .points_wrapper .point:nth-child(6) {
    left: 75%;
    opacity: 0.5;
    animation-duration: 1.5s;
    animation-delay: 1.5s;
  }
  .points_wrapper .point:nth-child(7) {
    left: 88%;
    opacity: 0.9;
    animation-duration: 2.2s;
    animation-delay: 0.2s;
  }
  .points_wrapper .point:nth-child(8) {
    left: 58%;
    opacity: 0.8;
    animation-duration: 2.25s;
    animation-delay: 0.2s;
  }
  .points_wrapper .point:nth-child(9) {
    left: 98%;
    opacity: 0.6;
    animation-duration: 2.6s;
    animation-delay: 0.1s;
  }
  .points_wrapper .point:nth-child(10) {
    left: 65%;
    opacity: 1;
    animation-duration: 2.5s;
    animation-delay: 0.2s;
  }

  .inner {
    z-index: 2;
    gap: 6px;
    position: relative;
    width: 100%;
    color: white;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    font-size: 22px;
    font-weight: 500;
    line-height: 1.5;
    transition: color 0.2s ease-in-out;
  }

  .inner svg.icon {
    width: 22px;
    height: 22px;
    transition: fill 0.1s linear;
  }

  .button:focus svg.icon {
    fill: white;
  }
  .button:hover svg.icon {
    fill: transparent;
    animation:
      dasharray 1s linear forwards,
      filled 0.1s linear forwards 0.95s;
  }
  @keyframes dasharray {
    from {
      stroke-dasharray: 0 0 0 0;
    }
    to {
      stroke-dasharray: 68 68 0 0;
    }
  }
  @keyframes filled {
    to {
      fill: white;
    }
  }`;

export default GetStartedButton;
