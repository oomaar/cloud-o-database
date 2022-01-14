import styled from 'styled-components';

export const HeroContainer = styled.div`
    background: linear-gradient(
    to bottom,
    rgba(0, 0, 0, 0.6),
    rgba(0, 0, 0, 0.35),
    rgba(0, 0, 0, 0.8)),
    url("/home.jpeg") center center / cover no-repeat;
    height: 100vh;
    overflow: hidden;
    width: 100%;
    z-index: 1;
`;

export const HeroNavbar = styled.nav`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0.8rem 2rem;
  z-index: 2;

  @media screen and (max-width: 425px) {
    padding: 0 1rem;
  }
`;

export const HeroNavbarLogo = styled.div`
  width: 5rem;
  cursor: pointer;

  @media screen and (max-width: 425px) {
    width: 4rem;
  }
`;

export const HeroNavbarButton = styled.button`
  background-color: ${({ theme }) => theme.colors.primaryColor};
  color: ${({ theme }) => theme.colors.titleColor};
  border-radius: 0.7rem;
  font-size: ${({ theme }) => theme.fontSize.buttonFontSize};
  font-weight: ${({ theme }) => theme.bold};
  padding: 0.5rem 1.5rem;
  transition: all 0.5s ease-in-out;

  :hover {
    background-color: ${({ theme }) => theme.colors.primaryColorAlt};
  }
`;