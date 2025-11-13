"use client";
import styled from "styled-components";
import VoiceCard from "./voice-card";

const VoiceAgentsSection = () => {
	const voiceAgents = [
		{
			title: "Professional Sarah",
			subtitle: "American Accent",
			description: "Formal Tone",
			accent: "american",
		},
		{
			title: "Friendly Alex",
			subtitle: "British Accent",
			description: "Casual Tone",
			accent: "british",
		},
		{
			title: "Expert Marcus",
			subtitle: "Australian Accent",
			description: "Confident Tone",
			accent: "australian",
		},
	];

	return (
		<StyledSection>
			<h2 className="section-title">Choose Your Voice</h2>
			<p className="section-description">
				Select from our range of natural-sounding voices, each with unique
				personality and tone.
			</p>
			<div className="cards-container">
				{voiceAgents.map((agent, index) => (
					<VoiceCard
						key={index}
						title={agent.title}
						subtitle={agent.subtitle}
						description={agent.description}
						accent={agent.accent}
						onPlay={() => console.log(`Playing sample for ${agent.title}`)}
					/>
				))}
			</div>
		</StyledSection>
	);
};

const StyledSection = styled.section`
  padding: 64px 0;
  text-align: center;
  background: rgb(0, 0, 0);
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;

  .section-title {
    font-size: 48px;
    font-weight: 600;
    color: white;
    margin-bottom: 24px;
  }

  .section-description {
    font-size: 18px;
    color: rgba(255, 255, 255, 0.7);
    max-width: 800px;
    margin: 0 auto 48px;
  }

  .cards-container {
    display: flex;
    gap: 32px;
    flex-wrap: wrap;
    justify-content: center;
    max-width: 1200px;
    margin: 0 auto;
  }
`;

export default VoiceAgentsSection;
