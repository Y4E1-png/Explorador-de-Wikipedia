
import styled from 'styled-components'
import { Link } from 'react-router-dom'

export const Card = styled.article`
  display: flex;
  flex-direction: column;
  min-width: 0;
  height: 100%;
`

export const CardMedia = styled.div`
  aspect-ratio: 4 / 3;
  overflow: hidden;
  background-color: #DCE5E0;
  border-radius: 9px;
`

export const CardImage = styled.img`
  display: block;
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: center;
`

export const NoImageMessage = styled.p`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
  margin: 0;
  color: #275747;
  font-size: 14px;
  font-weight: 600;
  letter-spacing: 1.5px;
  text-transform: uppercase;

  &::before {
    content: '';
    position: absolute;
    inset: 20px;
    border: 1px dashed rgba(39, 87, 71, 0.35);
    border-radius: 12px;
  }
`

export const CardContent = styled.div`
  position: relative;
  z-index: 1;
  display: flex;
  flex: 1;
  flex-direction: column;
  margin: -52px 18px 0;
  padding: 24px;
  background-color: #F1EDE3;
  border-radius: 6px;
  box-shadow: 0 14px 32px rgba(23, 28, 26, 0.1);
  border: 5px solid #171C1A;
`

export const CardTitle = styled.h2`
  margin: 0 0 12px;
  color: #275747;
  font-size: 22px;
  line-height: 1.3;
  font-family: 'Lora', serif;
`

export const CardDescription = styled.p`
  margin: 0;
  color: #66706B;
  font-size: 15px;
  line-height: 1.6;
  display: -webkit-box;
  overflow: hidden;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 5;

  &::first-letter {
    text-transform: uppercase;
  }
`

export const CardActions = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-wrap: wrap;
  gap: 12px;
  margin-top: auto;
  padding-top: 24px;
`

export const SaveButton = styled.button`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 42px;
  height: 42px;
  padding: 0;
  transition:
    color 0.2s ease,
    transform 0.2s ease;
  color: ${({ $isSaved }) =>
    $isSaved ? '#F7F5F0' : '#275747'
  };

  background-color: ${({ $isSaved }) =>
    $isSaved ? '#275747' : 'transparent'
  };

  border: 1px solid ${({ $isSaved }) =>
    $isSaved ? '#275747' : '#CBD6D1'
  };

  border-radius: 50%;
  cursor: pointer;

  svg {
      width: 20px;
      height: 20px;
      transition: filter 0.2s ease;
  }

  &:hover {
    color: #F7F5F0;
    background-color: #275747;
    border-color: #275747;
    transform: translateY(-3px);
  }

  &:focus-visible {
    outline: 2px solid #275747;
    outline-offset: 3px;
  }
`

export const ArticleLink = styled(Link)`
  padding: 10px 16px;
  color: #F7F5F0;
  font-weight: 600;
  text-decoration: none;
  background-color: #064831;
  border-radius: 999px;
  transition:
    color 0.2s ease,
    transform 0.2s ease;

  &:hover {
    background-color: #3dab86;
    transform: translateY(-3px);
    
  }

  &:focus-visible {
    outline: 2px solid #275747;
    outline-offset: 3px;
  }
`