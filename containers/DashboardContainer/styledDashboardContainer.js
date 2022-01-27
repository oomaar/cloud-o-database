import styled from 'styled-components';
import { transition } from '../../global/GlobalStyle';

export const Container = styled.div`
  background: linear-gradient(to bottom, rgba(0, 0, 0, 0.65), rgba(0, 0, 0, 0.85), rgba(0, 0, 0 ,0.65)),
  url("/dashboard/dash-bg.jpg") center center / cover no-repeat;
  height: 100%;
`;

export const SubContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 1rem;
  padding: 0 1rem;

  @media screen and (max-width: 768px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media screen and (max-width: 425px) {
    grid-template-columns: repeat(1, 1fr);
  }
`;

export const CardTitle = styled.p`
  font-size: ${({ theme }) => theme.fontSize.biggestFontSize};
  text-transform: uppercase;
  transition: ${transition};
`;

export const Card = styled.div`
  background: linear-gradient(to bottom, rgba(0, 0, 0, 0.85), rgba(0, 0, 0, 0.95)),
  url(${({ img }) => img}) center center / cover no-repeat;
  height: 300px;
  border-radius: 1rem;
  display: flex;
  justify-content: center;
  align-items: center;
  transition: ${transition};
  cursor: pointer;

  :hover ${CardTitle} {
    transform: scale(1.2);
    color: ${({ theme }) => theme.colors.primaryColor};
  }
`;