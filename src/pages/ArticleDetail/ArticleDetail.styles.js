
import styled from 'styled-components'
import { Link } from 'react-router-dom'

export const DetailPage = styled.section`
  width: 100%;
  min-height: 100vh;
  background-color: #F7F5F0;
`

export const DetailHero = styled.div`
  position: relative;
  isolation: isolate;
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  color: #F7F5F0;
  background-color: #171C1A;
  overflow: hidden;
`

export const HeroImage = styled.img`
  position: absolute;
  inset: 0;
  z-index: -1;
  width: 100%;
  max-width: none;
  height: 100%;
  object-fit: cover;
  object-position: center;
`

export const DetailTopbar = styled.header`
  position: absolute;
  top: 0;
  left: 0;
  z-index: 3;
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  gap: 24px;
  width: 100%;
  padding: 35px 40px 40px;

  @media (max-width: 600px) {
    align-items: center;
    gap: 12px;
    padding: 20px 16px;
  }
`

export const DetailBrand = styled(Link)`
  display: inline-flex;
  align-items: center;
  gap: 10px;
  color: #F7F5F0;
  font-family: 'Lora', serif;
  font-size: clamp(18px, 2vw, 24px);
  font-weight: 700;
  line-height: 1.2;
  text-decoration: none;
  padding: 4px 14px 4px 5px;
  background-color: rgba(23, 28, 26, 0.72);
  border: 1px solid rgba(247, 245, 240, 0.4);
  border-radius: 999px;
  box-shadow: 0 4px 14px rgba(23, 28, 26, 0.18);
  backdrop-filter: blur(5px);
  transition:
    background-color 0.2s ease,
    transform 0.2s ease;

  &:hover {
    background-color: rgba(23, 28, 26, 0.88);
    transform: translateY(-3px);
  }

  img {
    width: 38px;
    height: 38px;
    object-fit: contain;
  }

  @media (max-width: 600px) {
    padding: 4px;

    span {
      display: none;
    }
  }
`

export const DetailActions = styled.nav`
  display: flex;
  align-items: center;
  gap: 12px;

  @media (max-width: 600px) {
    gap: 8px;
  }
`

export const SaveButton = styled.button`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 44px;
  height: 44px;
  padding: 0;

  color: ${({ $isSaved }) =>
    $isSaved ? '#171C1A' : '#F7F5F0'
  };

  background-color: ${({ $isSaved }) =>
    $isSaved ? '#A8D5C3' : 'rgba(23, 28, 26, 0.45)'
  };

  border: 1px solid ${({ $isSaved }) =>
    $isSaved ? '#A8D5C3' : 'rgba(247, 245, 240, 0.65)'
  };

  border-radius: 50%;

  cursor: pointer;

  transition:
    color 0.2s ease,
    background-color 0.2s ease,
    border-color 0.2s ease,
    transform 0.2s ease;

  svg {
    width: 20px;
    height: 20px;
  }

  &:hover {
    color: #171C1A;
    background-color: #A8D5C3;
    border-color: #A8D5C3;
    transform: translateY(-3px);
  }

  &:focus-visible {
    outline: 2px solid #F7F5F0;
    outline-offset: 3px;
  }
`

export const SearchLink = styled(Link)`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 44px;
  height: 44px;
  color: #F7F5F0;
  background-color: rgba(23, 28, 26, 0.45);
  border: 1px solid rgba(247, 245, 240, 0.65);
  border-radius: 50%;
  text-decoration: none;
  transition:
    color 0.2s ease,
    background-color 0.2s ease,
    border-color 0.2s ease,
    transform 0.2s ease;

  svg {
    width: 20px;
    height: 20px;
  }

  &:hover {
    color: #171C1A;
    background-color: #A8D5C3;
    border-color: #A8D5C3;
    transform: translateY(-3px);
  }

  &:focus-visible {
    outline: 2px solid #F7F5F0;
    outline-offset: 3px;
  }
`

export const HeroHeading = styled.div`
  position: relative;
  z-index: 2;
  display: flex;
  flex-direction: column;
  flex: 1;
  justify-content: center;
  align-items: center;
  gap: 16px;
  width: 100%;
  padding: clamp(36px, 6vw, 80px) clamp(20px, 6vw, 90px);
  text-align: left;
`

export const HeroLabel = styled.p`
  margin: 0;
  padding: 6px 12px;
  color: #A8D5C3;
  background-color: rgba(23, 28, 26, 0.6);
  border: 1px solid rgba(168, 213, 195, 0.5);
  border-radius: 999px;
  font-size: 12px;
  font-weight: 600;
  letter-spacing: 1.8px;
  text-transform: uppercase; 
`

export const ArticleTitle = styled.h1`
  max-width: 100%;
  margin: 0;
  color: #FFFFFF;
  font-size: clamp(48px, 8vw, 108px);
  line-height: 0.96;
  letter-spacing: -0.03em;
  overflow-wrap: break-word;
  text-shadow: 0 2px 12px rgba(0, 0, 0, 0.45);

  @media (max-width: 600px) {
    font-size: clamp(36px, 12vw, 48px);
    line-height: 1.05;
  }
`

export const HeroTitleGroup = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 16px;
  width: fit-content;
  max-width: min(100%, 1200px);
  text-align: left;
  position: relative;
  z-index: 1;
  padding: clamp(18px, 2vw, 28px) clamp(20px, 3vw, 40px);
`

export const ArticleBody = styled.article`
  width: min(760px, calc(100% - 40px));
  margin: 64px auto 0;
  padding: 32px 0 clamp(64px, 8vw, 112px);
  color: #343A37;
  border-top: 1px solid #CBD6D1;
`

export const ArticleParagraph = styled.p`
  margin: 0 0 28px;
  color: #343A37;
  font-family: 'Lora', serif;
  font-size: clamp(18px, 2vw, 21px);
  line-height: 1.8;

  &:first-of-type::first-letter {
    float: left;
    margin: 10px 10px 0 0;
    color: #275747;
    font-size: 120px;
    font-weight: 700;
    line-height: 0.7;
  }

  &:last-of-type {
    margin-bottom: 0;
  }
`

export const ArticleFooter = styled.footer`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 24px;
  flex-wrap: wrap;
  margin-top: 64px;
  padding-top: 32px;
  border-top: 1px solid #CBD6D1;

  @media (max-width: 600px) {
    align-items: flex-start;
    flex-direction: column;
  }
`

export const FooterPrompt = styled.p`
  margin: 0;
  color: #171C1A;
  font-family: 'Lora', serif;
  font-size: 24px;
  font-weight: 700;
`

export const WikipediaLink = styled.a`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  padding: 12px 20px;
  color: #F7F5F0;
  background-color: #123227;
  border-radius: 999px;
  font-weight: 600;
  text-decoration: none;
  

  &:hover {
    background-color: #105840;
    
  }

  &:focus-visible {
    outline: 2px solid #275747;
    outline-offset: 3px;
  }
`

export const TopbarStart = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 30px;

  @media (max-width: 600px) {
    gap: 10px;
  }
`

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
export const SavedArticlesLink = styled(SearchLink)``

export const ReadArticleLink = styled.a`
  position: absolute;
  left: 50%;
  bottom: clamp(24px, 3vw, 40px);
  z-index: 2;
  display: inline-flex;
  flex-direction: column;
  align-items: center;
  gap: 8px;
  color: #f7f5f0;
  font-size: 12px;
  font-weight: 600;
  letter-spacing: 1.5px;
  text-decoration: none;
  text-transform: uppercase;
  white-space: nowrap;
  transform: translateX(-50%);
  transition:
    color 180ms ease,
    transform 180ms ease;

  span {
    will-change: transform;
    padding: 10px 18px;
    color: #1c201c;
    background-color: rgba(247, 245, 240, 0.36);
    border: 1px solid rgba(18, 50, 39, 0.2);
    border-radius: 8px;
    box-shadow: 0 4px 14px rgba(23, 28, 26, 0.22);
    backdrop-filter: blur(5px);
    font-size: 13px;
    letter-spacing: 0.4px;
    text-transform: none;
    transition: color 500ms ease, background-color 180ms ease, border-color 180ms ease, transform 0.5s ease;
  }

  svg {
    width: 44px;
    height: 20px;
    transition: transform 500ms ease;
  }

  &:hover {
    color: #29614b;
    transform: translateX(-50%) translateY(-3px);
  }

  &:hover span {
    color: #f7f5f0;
    background-color: rgba(39, 87, 71, 0.88);
    border-color: #275747;
  }

  &:hover svg {
    transform: translateY(5px);
  }

  &:focus-visible {
    outline: 2px solid #f7f5f0;
    outline-offset: 5px;
  }
`

