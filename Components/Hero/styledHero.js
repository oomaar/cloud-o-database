import styled from 'styled-components';

export const HeroBox = styled.div`
  background: linear-gradient(to bottom, rgba(0, 0, 0, 0.43), rgba(0, 0, 0, 0.75), rgba(0, 0, 0, 0.43)),
  url('/home.jpeg') center center / cover no-repeat;
  height: 100vh;
  display: flex;
  flex-direction: column;
  color: hsla(0, 100%, 100%, 1);
`;

export const HeroNav = styled.nav`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  padding: 0 5rem;
  background: linear-gradient(to bottom, rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0.1));

  @media screen and (max-width: 768px) {
    padding: 0 2.5rem;
  }

  @media screen and (max-width: 425px) {
    padding: 0 1rem;
  }

  @media screen and (max-width: 320px) {
    padding: 0 0.2rem;
  }
`;

export const NavBox = styled.div`
 display: flex;
 align-items: center;
 cursor: pointer;
 gap: 1rem;

  @media screen and (max-width: 425px) {
    gap: 0.5rem;
  }
`;

export const HeroLogo = styled.div`
  width: clamp(3rem, 4.6vw, 5.5rem);
`;

export const HeroLogoTitle = styled.p`
  font-size: clamp(1.3rem, 1.6vw, 1.6rem);
`;

export const HeroFeature = styled.div`
  align-self: center;
  margin: auto;
  text-align: center;
  padding: 0.3rem;

`;

export const HeroTitle = styled.div`
  font-size: clamp(3rem, 3.5vw, 4rem);
  font-weight: 700;
`;

export const HeroSubtitle = styled.p`
  font-size: clamp(2.5rem, 2.5vw, 3rem);
  font-weight: 500;
`;

export const HeroButtons = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 1rem;
`;