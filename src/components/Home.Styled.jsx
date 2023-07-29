import styled from 'styled-components';

const Container = styled.div`
    display: flex;
    flex-direction: column;
    height: 100vh;
`

const Header = styled.div`
    display: flex;
    justify-content: space-between;
    padding: 8px;
`

const HearderLeft = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    flex: 0.1;
    gap: 15px;
    a {
        display: inline-block;
        text-decoration: none;
        color: #5f6368;
        font-size: 0.875rem;
        font-weight: 500;
        line-height: 1.25rem;
        padding: 0.25rem 0.5rem;
        font-family: Roboto, arial, sans-serif;
        cursor: pointer;
        &:hover {
            text-decoration: underline;
        }
    }
`
const HearderRight = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    flex: 0.1;
    gap: 15px;
    a {
        display: inline-block;
        text-decoration: none;
        color: #5f6368;
        font-size: 0.875rem;
        font-weight: 500;
        line-height: 1.25rem;
        padding: 0.25rem 0.5rem;
        font-family: Roboto, arial, sans-serif;
        cursor: pointer;
        &:hover {
            text-decoration: underline;
        }
    }
`
const LogoContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    flex: 1;
    img {
        width: 272px;
        height: 92px;
        margin-bottom: 20px;
        object-fit: contain;
    }
`
  
export { Container, Header, 
    HearderLeft, HearderRight, LogoContainer };