"use client";

import { Mic } from "lucide-react";
import React from "react";
import styled from "styled-components";

interface CardProps {
	title: string;
	accent: string;
	description: string;
	subtitle: string;
	onPlay?: () => void;
}

export const VoiceCard: React.FC<CardProps> = ({
	title,
	description,
	subtitle,
	onPlay,
}) => {
	return (
		<StyledWrapper>
			<div className="one-div">
				<div className="icon-container">
					<div className="mic-circle">
						<Mic className="icon" size={32} />
					</div>
				</div>
				<div className="text-content">
					<h3 className="title">{title}</h3>
					<p className="subtitle">{subtitle}</p>
					<p className="description">{description}</p>
				</div>
				<button onClick={onPlay} className="play-button">
					Play Sample
				</button>
			</div>
		</StyledWrapper>
	);
};

const StyledWrapper = styled.div`
  .one-div {
    position: relative;
    height: 300px;
    width: 280px;
    background-color: rgb(15, 15, 15);
    transform-style: preserve-3d;
    animation: float 2s infinite ease;
    border-radius: 24px;
    box-shadow: 0 0 30px rgba(0, 0, 0, 0.3);
    color: white;
    transition: all 0.3s ease;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 32px 24px;
  }

  .icon-container {
    margin-bottom: 24px;
  }

  .mic-circle {
    background: rgba(90, 90, 255, 0.9);
    border-radius: 50%;
    width: 64px;
    height: 64px;
    display: flex;
    align-items: center;
    justify-content: center;
    box-shadow: 0 0 20px rgba(90, 90, 255, 0.3);
    transition: all 0.3s ease;
  }

  .icon {
    color: white;
  }

  .text-content {
    text-align: center;
    transition: all 0.3s ease;
    flex: 1;
  }

  .title {
    margin: 0;
    font-size: 24px;
    font-weight: 600;
    color: white;
    margin-bottom: 8px;
  }

  .subtitle {
    margin: 0;
    font-size: 16px;
    color: rgba(255, 255, 255, 0.8);
    margin-bottom: 4px;
  }

  .description {
    margin: 0;
    font-size: 14px;
    color: rgba(255, 255, 255, 0.6);
  }

  .play-button {
    background: rgba(90, 90, 255, 0.9);
    color: white;
    border: none;
    padding: 12px 32px;
    border-radius: 12px;
    font-size: 16px;
    font-weight: 500;
    cursor: pointer;
    transition: all 0.3s ease;
    
    &:hover {
      background: rgba(100, 100, 255, 1);
      transform: translateY(-2px);
      box-shadow: 0 5px 15px rgba(90, 90, 255, 0.3);
    }

    &:active {
      transform: translateY(0);
    }
  }

  .one-div:hover {
    transform: translateY(-5px) rotateX(-15deg);
    box-shadow: 0 0 40px rgba(90, 90, 255, 0.2);
  }

  .one-div:hover .text-content {
    transform: translateY(-2px);
  }

  .one-div:hover .mic-circle {
    transform: scale(1.1);
    box-shadow: 0 0 25px rgba(90, 90, 255, 0.4);
  }

  @keyframes float {
    0% {
      transform: translateY(0px) rotateX(-15deg);
    }

    50% {
      transform: translateY(-10px) rotateX(-15deg);
    }

    100% {
      transform: translateY(0px) rotateX(-15deg);
    }
  }
`;

export default VoiceCard;
