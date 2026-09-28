
import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const SavedCard = styled.article`
  display: inline-block;
  vertical-align: top;
  flex-direction: column;
  min-width: 0;
  padding: 14px;
  background-color: #F1EDE3;
  border: 5px solid #171C1A;
  border-radius: 4px;
  box-shadow: 8px 8px 0 rgba(23, 28, 26, 0.16);
  width: 100%;
  margin-bottom: clamp(20px, 2.5vw, 36px);
  break-inside: avoid;
  transition: transform 0.2s ease, box-shadow 0.2s ease;
  position: relative;
  

  &:hover {
    z-index: 1;
    transform: translateY(-6px);
    box-shadow: 12px 14px 0 rgba(23, 28, 26, 0.22);
  }

  @media (max-width: 620px) {
    padding: 12px;
    border-width: 4px;
    box-shadow: 6px 7px 0 rgba(23, 28, 26, 0.16);
  }
`;

export const CardHeader = styled.header`
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  gap: 16px;
  min-height: 70px;

  @media (max-width: 620px) {
    min-height: 60px;
    gap: 12px;
  }
`;

export const CardTitle = styled.h2`
  display: -webkit-box;
  margin: 0;
  overflow: hidden;
  color: #003920;
  font-family: 'Lora', serif;
  font-size: clamp(22px, 2.2vw, 30px);
  line-height: 1.05;
  letter-spacing: -0.02em;
  text-transform: uppercase;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 2;
`;

export const CardStatus = styled.span`
  display: inline-flex;
  align-items: center;
  flex-shrink: 0;
  padding: 6px 10px;
  color: #123227;
  background-color: #A8D5C3;
  border: 1px solid #275747;
  border-radius: 3px;
  white-space: nowrap;
  font-size: 10px;
  font-weight: 700;
  letter-spacing: 1.2px;
  text-transform: uppercase;
`;

export const ImageFrame = styled.div`
  aspect-ratio: 8 / 7;
  margin: 8px 0 18px;
  overflow: hidden;
  background-color: #DCE5E0;
  border: 0.5px solid #171C1A;
  border-radius: 5px;
`;

export const CardImage = styled.img`
  display: block;
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: 5px;
`;

export const NoImage = styled.p`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;
  margin: 0;
  color: #275747;
  font-size: 12px;
  font-weight: 700;
  letter-spacing: 1.4px;
  text-transform: uppercase;
`;

export const CardInformation = styled.div`
  display: flex;
  flex: 1;
  flex-direction: column;
  padding-top: 16px;
  border-top: 1px solid rgba(23, 28, 26, 0.28);
`;

export const CardDescription = styled.p`
  display: -webkit-box;
  margin: 0 0 24px;
  overflow: hidden;
  color: #4F5854;
  font-size: 16px;
  line-height: 1.6;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 5;
`;

export const CardActions = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 16px;
  margin-top: auto;
`;

export const ReadLink = styled(Link)`
  color: #03754d;
  font-size: 13px;
  font-weight: 700;
  letter-spacing: 0.6px;
  text-decoration: none;
  text-transform: uppercase;

  &:hover {
    color: #152e26;
  }

  &:focus-visible {
    outline: 2px solid #275747;
    outline-offset: 4px;
  }
`;

export const RemoveButton = styled.button`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 38px;
  height: 38px;
  padding: 0;
  color: #275747;
  background-color: transparent;
  border: 1px solid rgba(39, 87, 71, 0.4);
  border-radius: 50%;
  cursor: pointer;

  transition:
    color 0.2s ease,
    background-color 0.2s ease,
    transform 0.2s ease;

  svg {
    width: 18px;
    height: 18px;
  }

  &:hover {
    color: #F7F5F0;
    background-color: #275747;
    transform: translateY(-2px);
  }

  &:focus-visible {
    outline: 2px solid #275747;
    outline-offset: 3px;
  }
`;