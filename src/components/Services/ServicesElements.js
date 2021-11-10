import styled from "styled-components";

export const ServicesContainer = styled.div`
  height: 100rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background: #010606;

  @media screen and (max-width: 768px) {
    height: 160rem;
  }

  @media screen and (max-width: 30em) {
    height: 160rem;
  }
`;

export const ServicesWrapper = styled.div`
  max-width: 150rem;
  margin: 0 auto;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  align-items: center;
  grid-gap: 1.6rem;
  padding: 0 5rem;

  @media screen and (max-width: 62.5em) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media screen and (max-width: 48em) {
    grid-template-columns: 1fr;
    padding: 0 2rem;
  }
`;

export const ServicesCard = styled.div`
  background: #fff;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  border-radius: 1rem;
  min-height: 40rem;
  padding: 3rem;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.2);
  transition: all 0.2s ease-in-out;

  &:hover {
    transform: scale(1.02);
    // transition: all 0.2s ease-in-out;
    cursor: pointer;
  }
`;

export const ServicesIcon = styled.img`
  height: 24rem;
  width: 24rem;
  margin-bottom: 1rem;
`;

export const ServicesH1 = styled.h1`
  font-size: 3.75rem;
  color: #fff;
  margin: 6.4rem 0;

  @media screen and (max-width: 30em) {
    font-size: 3.2rem;
  }
`;

export const ServicesH2 = styled.h2`
  font-size: 1.6rem;
  margin-bottom: 1rem;
`;

export const ServicesP = styled.p`
  font-size: 1.6rem;
  text-align: center;
`;
