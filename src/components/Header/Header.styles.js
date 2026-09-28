
import styled from 'styled-components'

export const HeaderContainer = styled.header`
  position: ${({ $isOverlay }) =>
    $isOverlay ? 'absolute' : 'relative'
  };

  top: 0;
  left: 0;
  z-index: 3;
  width: 100%;
  margin: 0;
  padding: 18px 24px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 24px;
  color: #F7F5F0;
  background-color: ${({ $isOverlay }) =>
    $isOverlay
      ? 'rgba(23, 28, 26, 0)'
      : '#12251d'
    };

  @media (max-width: 800px) {
    flex-wrap: wrap;
  }

  @media (max-width: 600px) {
    padding: 12px 16px;
    gap: 12px;
    justify-content: flex-start;
  }
`

export const Brand = styled.span`
  color: #F7F5F0;
  font-family: 'Lora', serif;
  font-size: clamp(18px, 2vw, 24px);
  font-weight: 700;
  line-height: 1.2;
  white-space: nowrap;
  display: flex;
  align-items: center;
  gap: 10px;

  @media (max-width: 600px) {
    gap: 0;

    img {
      width: 42px;
      height: 42px;
    }

    span {
      display: none;
    }
  }
`

export const NavigationBar = styled.nav`
  display: flex;
  align-items: center;
  gap: 24px;

  a {
    color: ${({ $isOverlay }) => $isOverlay ? '#d4f1e3' : '#F7F5F0'};
    font-size: 18px;
    padding: 6px 0;
    font-weight: 600;
    text-decoration: none;
    border-bottom: 2px solid transparent;
    transition: transform 0.3s ease;

    &:hover {
      color: ${({ $isOverlay }) => $isOverlay ? '#f4f4f4' : '#85ccb0'};
      transform: translateY(-2px);
    }

    &:focus-visible {
      color: #FFFFFF;
      outline: 2px solid #F7F5F0;
      outline-offset: 4px;
    }

    &.active {
      color: ${({ $isOverlay }) => $isOverlay ? '#00994d' : '#FFFFFF'};
      border-bottom-color: #F7F5F0;
    }
  }

  @media (max-width: 600px) {
    width: auto;
    gap: 16px;
  }
`

export const SearchForm = styled.form `
  display: flex;
  align-items: center;
  gap: 8px;
  flex: 0 1 360px;
  padding: 6px;
  background-color: rgb(52 58 55 / 41%);
  border: 1px solid rgb(203 212 207);
  border-radius: 999px;

  &:focus-within {
    border-color: #F7F5F0;
  }
  
  @media (max-width: 800px) {
    order: 3;
    flex-basis: 100%;
    width: 100%;
  }
`
export const SearchLabel = styled.label `
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  white-space: nowrap;
  border: 0;
  clip: rect(0, 0, 0, 0);
`

export const SearchInput = styled.input`
  min-width: 0;
  flex: 1;
  padding: 8px 12px;
  color: #F7F5F0;
  background-color: transparent;
  border: 0;
  outline: 0;

  &::placeholder {
    color: #B8BEBA;
  }
`

export const SearchButton = styled.button`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;

  width: 42px;
  height: 42px;
  padding: 0;

  color: #202522;
  background-color: #F7F5F0;
  border: 0;
  border-radius: 50%;
  cursor: pointer;

  svg {
    width: 20px;
    height: 20px;
  }

  &:hover {
    background-color: #B0D2BF;
  }

  &:focus-visible {
    outline: 2px solid #F7F5F0;
    outline-offset: 3px;
  }
`