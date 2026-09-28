
import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const ReadingPage = styled.section`
  width: 100%;
  min-height: 100vh;
  padding: 20px;
  background-color: #F7F5F0;

  @media (max-width: 620px) {
    padding: 40px 0 64px;
  }
`;

export const ReadingContent = styled.div`
  width: min(1400px, calc(100% - 40px));
  margin: 0 auto;

  @media (max-width: 620px) {
    width: min(100% - 28px, 1400px);
  }
`;

export const ReadingHeader = styled.header`
  margin-bottom: clamp(40px, 5vw, 64px);

  @media (max-width: 620px) {
    margin-bottom: 36px;
  }
`;

export const ReadingTitle = styled.h1`
  margin: 0 0 12px;
  color: #171C1A;
  font-family: 'Lora', serif;
  font-size: clamp(48px, 7vw, 88px);
  line-height: 1;
  letter-spacing: -0.03em;
  padding-top: 22px;
`;

export const ReadingSubtitle = styled.p`
  margin: 0;
  color: #66706B;
  font-size: 18px;
  line-height: 1.6;
`;

export const ReadingCount = styled.p`
  margin: 20px 0 0;
  color: #275747;
  font-size: 13px;
  font-weight: 700;
  letter-spacing: 1.4px;
  text-transform: uppercase;
`;

export const ArticlesGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  column-gap: clamp(20px, 2.5vw, 36px);

  @media (max-width: 950px) {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }

  @media (max-width: 620px) {
    grid-template-columns: 1fr;
  }
`;

export const EmptyState = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  min-height: 360px;
  padding: 48px 24px;

  text-align: center;
  background-color: #F1EDE3;
  border: 2px dashed rgba(39, 87, 71, 0.35);
  border-radius: 6px;
`;

export const EmptyIcon = styled.div`
  display: inline-flex;
  align-items: center;
  justify-content: center;

  width: 72px;
  height: 72px;
  margin-bottom: 24px;

  color: #A8D5C3;
  background-color: #123227;
  border-radius: 50%;

  svg {
    width: 32px;
    height: 32px;
  }
`;

export const EmptyTitle = styled.h2`
  margin: 0 0 12px;
  color: #171C1A;
  font-family: 'Lora', serif;
  font-size: clamp(28px, 4vw, 40px);
`;

export const EmptyText = styled.p`
  max-width: 460px;
  margin: 0 0 28px;
  color: #66706B;
  line-height: 1.6;
`;

export const ExploreLink = styled(Link)`
  padding: 11px 20px;

  color: #F7F5F0;
  font-weight: 700;
  text-decoration: none;
  background-color: #123227;
  border-radius: 999px;

  transition:
    background-color 0.2s ease,
    transform 0.2s ease;

  &:hover {
    background-color: #275747;
    transform: translateY(-2px);
  }

  &:focus-visible {
    outline: 2px solid #275747;
    outline-offset: 4px;
  }
`;

export const BackButton = styled.button`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
  width: 42px;
  height: 42px;
  color: #275747;
  background-color: #FFFFFF;
  border: 1px solid #CBD6D1;
  border-radius: 50%;
  text-decoration: none;
  transition:
    color 0.2s ease,
    transform 0.2s ease;

  svg {
    width: 20px;
    height: 20px;
    transition: filter 0.2s ease;
  }

  &:hover {
    color: #F7F5F0;
    background-color: #275747;
    border-color: #275747;
     transform: translateX(-3px);
  }

  &:focus-visible {
    outline: 2px solid #275747;
    outline-offset: 3px;
  }
`