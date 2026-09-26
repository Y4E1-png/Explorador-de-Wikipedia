
import styled from 'styled-components'

export const LoadingPage = styled.section`
  display: grid;
  place-items: center;
  width: 100%;
  min-height: calc(100vh - 82px);
  background:
  radial-gradient(
    circle at center,
    rgba(168, 213, 195, 0.35),
    rgba(247, 245, 240, 0) 20%
  ),
  #F7F5F0;
`;

export const LoadingRing = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  width: 100px;
  height: 100px;
  border: 3px solid rgba(168, 213, 195, 0.16);
  border-radius: 50%;
  text-align: center;
  line-height: 1;
  font-family: 'Lora', serif;
  font-size: 10px;
  font-weight: 700;
  letter-spacing: 1.5px;
  text-transform: uppercase;
  text-shadow: 0 0 10px rgba(39, 87, 71, 0.25);
  color: #123227;

  &::before {
    content: '';
    position: absolute;
    inset: -3px;
    border: 3px solid transparent;
    border-color: #275747 #275747 transparent transparent;
    border-radius: 50%;
    animation: ringTail 2s linear infinite;
  }

  span {
    display: block;
    position: absolute;
    top: calc(50% - 2px);
    left: 50%;
    width: 50%;
    height: 4px;
    transform-origin: left;
    animation: ringHead 2s linear infinite;

    &::before {
      content: "";
      position: absolute;
      width: 16px;
      height: 16px;
      border-radius: 50%;
      background: #123227;
      top: -6px;
      right: -8px;
      box-shadow: 0 0 8px rgba(18, 50, 39, 0.75),
                  0 0 18px rgba(39, 87, 71, 0.45);
    }
  }

  @keyframes ringTail {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }

  @keyframes ringHead {
    0% {
      transform: rotate(45deg);
    }
    100% {
      transform: rotate(405deg);
    }
  }
`