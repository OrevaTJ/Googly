import styled from 'styled-components';

export const Container = styled.div`
    display: flex;
    flex-direction: column;
`;

export const Header = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 20px;
    border-bottom: 1px solid lightgray;
    width: 100vw;
    height: 120px;
    margin-top: -20px;
    position: sticky;
    left: 0;
    z-index: 1;
`;

export const HearderLeft = styled.div`
    display: flex;
    align-items: center;
    
`;

export const OptionsContainer = styled.div`
    display: flex;
    flex-direction: column;
    margin: 20px 40px 0;
`;

export const Options = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 8px;
    svg {
        color: #7a7e83;
        font-size: 1rem;
        margin-right: 8px;
    }
    a {
        text-decoration: none;
        font-size: 0.875rem;
        font-family: Roboto, arial, sans-serif;
        margin-right: 12px;
        color: rgb(122, 126, 131);
        &:hover {
            text-decoration: underline;
        }
    }
`;

export const HearderRight = styled.div`
    display: flex;
    align-items: center;
    justify-content: flex-end;
    margin-right: 20px;
    @media (max-width: 768px) {
        display: none;
        margin-right: 10px;
    }
`;

export const StyledOptions = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
`;

export const Logo = styled.img`
    object-fit: contain;
    height: 30px;
    width: 92px;
    aspect-ratio: auto 92 / 30;
    margin-right: 20px;
`;

