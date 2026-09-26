
import styled from 'styled-components'
import { Link } from 'react-router-dom'


export const ResultsHeading = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 16px;
  margin-bottom: 8px;
`

export const BackLink = styled(Link)`
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

export const ResultsSection = styled.section`
  width: min(1200px, calc(100% - 48px));
  margin: 0 auto;
  padding: 27px 0 72px;

  @media (max-width: 600px) {
    width: calc(100% - 32px);
    padding: 40px 0 56px;
  }
`
export const ResultsTitle = styled.h1`
  margin: 0;
  color: #171C1A;
  font-size: clamp(36px, 5vw, 56px);
`

export const ResultsSummary = styled.p`
  margin: 0 0 36px;
  color: #5F6863;
  font-size: 16px;

  strong {
    color: #171C1A;
  }
`

export const ResultsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  gap: 24px;

  @media (max-width: 900px) {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }

  @media (max-width: 600px) {
    grid-template-columns: 1fr;
  }
`

