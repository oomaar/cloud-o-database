import styled from 'styled-components';

export const HeroContainer = styled.div`
    background: linear-gradient(
    to bottom,
    rgba(0, 0, 0, 0.8),
    rgba(0, 0, 0, 0.9),
    rgba(0, 0, 0, 0.8)),
    url("/home.jpeg") center center / cover no-repeat;
    height: 100vh;
    overflow: hidden;
    width: 100%;
    z-index: 1;
    display: flex;
    flex-direction: column;
`;

export const HeroNavbar = styled.nav`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0.8rem 2rem;
  z-index: 2;
  margin: 1rem 0;

  @media screen and (max-width: 425px) {
    padding: 0 1rem;
  }
`;

export const HeroNavbarLogo = styled.div`
  width: 5rem;
  cursor: pointer;

  @media screen and (max-width: 425px) {
    width: 2rem;
  }
`;

export const HeroButton = styled.a`
  background: ${({ theme }) => theme.colors.primaryColor};
  color: ${({ theme }) => theme.colors.titleColor};
  border-radius: 0.7rem;
  font-size: ${({ theme }) => theme.fontSize.buttonFontSize};
  font-weight: ${({ theme }) => theme.bold};
  padding: 0.5rem 1.5rem;
  transition: all 0.5s ease-in-out;
  text-decoration: none;
  border: 2px solid transparent;

  :hover {
    border: 2px solid ${({ theme }) => theme.colors.primaryColor};
    background: transparent;
  }

  @media screen and (max-width: 425px) {
    padding: 0.3rem 1rem;
  }
`;

export const HeroFeature = styled.div`
  align-self: center;
  margin: auto 0;
  text-align: center;
`;

export const HeroTitle = styled.h3`
  font-size: ${({ theme }) => theme.fontSize.mediumFontSize};
  color: ${({ theme }) => theme.colors.textColorLight};
`;

export const HeroSubtitle = styled.h1`
  font-size: ${({ theme }) => theme.fontSize.biggestFontSize};
  color: ${({ theme }) => theme.colors.primaryColor};
  margin: 2rem 0;
`;