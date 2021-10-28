import styled from 'styled-components';

export const HeroBox = styled.div`
  background: linear-gradient(to bottom, rgba(62, 6, 95, 0.5), rgba(0, 0, 0, 0.6), rgba(62, 6, 95, 0.5)),
  url('/home.jpeg') center center / cover no-repeat;
  height: 100vh;
  width: 100%;
  color: #fff;
  display: flex;
`;

export const HeroFeature = styled.div`
  align-self: center;
  margin: 0 auto;
  max-width: 650px;
  text-align: center;
`;

export const HeroTitle = styled.h3`
  font-size: clamp(2.092rem, 6vw, 4rem);
  margin: 0 0 1rem;
`;

export const HeroSubTitle = styled.h4`
  font-size: clamp(1.125rem, 3vw, 1.625rem);
  margin: 1rem 0;
`;

export const ButtonsBox = styled.div`
  display: flex;
  justify-content: space-evenly;
  align-items: center;
`;

export const Button = styled.button`
  border: 0;
  outline: 0;
  font-size: 1.5rem;
  background: rgba(149, 1, 1, 0.7);
  color: #fff;
  font-weight: 700;
  letter-spacing: 0.1rem;
  padding: 0.5rem 2rem;
  border-radius: 0.4rem;
  cursor: pointer;
  transition: all 0.5s ease-in-out;

  :hover {
    background-color: rgba(149, 1, 1, 1);
  }
`;