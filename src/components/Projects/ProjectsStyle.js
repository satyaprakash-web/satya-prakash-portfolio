import styled from 'styled-components';
import _default from '../../themes/default';

export const Container = styled.div`
    background: radial-gradient(80% 50% at 50% 0%, rgba(139, 124, 248, 0.08) 0%, transparent 55%);
    display: flex;
    flex-direction: column;
    justify-content: center;
    position: relative;
    z-index: 1;
    align-items: center;
    clip-path: polygon(0 0, 100% 0, 100% 100%, 100% 99.2%, 0 100%);
`;

export const Wrapper = styled.div`
    position: relative;
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-direction: column;
    width: 100%;
    max-width: 1350px;
    padding: 8px 0 72px;
    gap: 8px;
    @media (max-width: 960px) {
        flex-direction: column;
    }
`;

export const Title = styled.div`
font-size: 42px;
text-align: center;
font-weight: 600;
margin-top: 20px;
  color: ${({ theme }) => theme.text_primary};
  @media (max-width: 768px) {
      margin-top: 12px;
      font-size: 32px;
  }
`;

export const Desc = styled.div`
    font-size: 18px;
    text-align: center;
    max-width: 600px;
    color: ${({ theme }) => theme.text_secondary};
    @media (max-width: 768px) {
        margin-top: 12px;
        font-size: 16px;
    }
`;

export const ToggleButtonGroup = styled.div`
    display: flex;
    border: 1px solid ${({ theme }) => theme.border};
    background: ${({ theme }) => theme.card};
    color: ${({ theme }) => theme.text_secondary};
    font-size: 14px;
    border-radius: 10px;
    font-weight: 600;
    margin: 12px 0 8px;
    overflow: hidden;
    @media (max-width: 768px) {
        font-size: 12px;
    }
`

export const ToggleButton = styled.div`
    padding: 10px 20px;
    cursor: pointer;
    transition: background 0.2s ease, color 0.2s ease;
    color: ${({ active, theme }) => (active ? theme.white : theme.text_secondary)};
    background: ${({ active, theme }) => (active ? theme.primary : "transparent")};
    &:hover {
        background: ${({ active, theme }) =>
          active ? theme.primary : theme.primary + "18"};
        color: ${({ active, theme }) => (active ? theme.white : theme.text_primary)};
    }
    @media (max-width: 768px) {
        padding: 8px 12px;
    }
`
export const Divider = styled.div`
    width: 1px;
    background: ${({ theme }) => theme.border};
`


export const CardContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: flex-start;
    gap: 24px;
    flex-wrap: wrap;
    margin-top: 8px;
    // display: grid;
    // grid-template-columns: repeat(3, 1fr);
    // grid-gap: 32px;
    // grid-auto-rows: minmax(100px, auto);
    // @media (max-width: 960px) {
    //     grid-template-columns: repeat(2, 1fr);
    // }
    // @media (max-width: 640px) {
    //     grid-template-columns: repeat(1, 1fr);
    // }
`;
