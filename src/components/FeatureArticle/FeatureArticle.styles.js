
import styled from "styled-components";
import { Link } from "react-router-dom";

export const FeatureContainer = styled.section`
  position: relative;
  isolation: isolate;
  display: grid;
  grid-template-columns: 1fr;
  min-height: 100vh;
  color: #F7F5F0;
  background-color: #171C1A;
  overflow: hidden;

  &::after {
  content: '';
  position: absolute;
  inset: 0;
  z-index: 1;

    background: linear-gradient(
      180deg,
      rgba(23, 28, 26, 0.05) 30%,
      rgba(23, 28, 26, 0.72) 70%,
      rgba(23, 28, 26, 0.98) 100%
    );
  }
`

export const FeatureImage = styled.img`
  position: absolute;
  inset: 0;
  z-index: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
`

export const FeatureContent = styled.div`
  position: relative;
  z-index: 2;
  grid-column: 1;
  align-self: end;
  display: grid;
  grid-template-columns: minmax(0, 1fr) auto;
  grid-template-areas:
    "heading heading"
    "description link";
  align-items: end;
  column-gap: clamp(24px, 4vw, 64px);
  row-gap: 24px;
  width: 100%;
  padding: clamp(28px, 4vw, 56px);

  @media (max-width: 600px) {
    grid-template-columns: minmax(0, 1fr);
    grid-template-areas:
      "heading"
      "description"
      "link";
    align-items: start;
    row-gap: 20px;
  }
`

export const FeatureHeading = styled.div`
  grid-area: heading;
  max-width: 720px;
  min-width: 0;
  display: flex;
  flex-direction: column;
  gap: 12px;
  
`

export const FeatureLabel = styled.p`
  margin: 0;
  color: #A8D5C3;
  font-size: 13px;
  font-weight: 600;
  letter-spacing: 2px;
  text-transform: uppercase;
`

export const FeatureTitle = styled.h1`
  margin: 0;
  color: #FFFFFF;
  font-size: clamp(40px, 5vw, 64px);
  line-height: 1.05;
`

export const FeatureDescription = styled.p`
  grid-area: description;
  margin: 0;
  max-width: 95ch;
  color: #C9CFCC;
  font-size: 16px;
  line-height: 1.7;
  display: -webkit-box;
  overflow: hidden;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 6;

  @media (max-width: 600px) {
    -webkit-line-clamp: 3;
  }
`

export const FeatureLink = styled(Link)`
  grid-area: link;
  align-self: center;
  display: inline-flex;
  color: #202522;
  font-weight: 600;
  text-decoration: none;
  white-space: nowrap;

  span {
    will-change: transform;
    display: inline-flex;
    padding: 10px 18px;
    background-color: #F7F5F0;
    border-radius: 999px;
    transition: background-color 0.3s ease, transform 0.3s ease;
  }

  &:hover span {
    background-color: #A8D5C3;
    transform: translateY(-4px);
  }

  &:focus-visible {
    outline: 2px solid #F7F5F0;
    outline-offset: 4px;
  }

  @media (max-width: 600px) {
    justify-self: start;
  }
`

