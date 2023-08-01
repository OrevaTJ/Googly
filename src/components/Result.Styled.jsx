import styled from 'styled-components';

const Container = styled.div`
    margin-left: 28px;
    margin-bottom: 100px;
    position: fixed;
    top: 140px;
    height: 100vh;
    width: 100vw;
    max-width: 680px;
    overflow-y: scroll;
    overflow-x: hidden;
    ::-webkit-scrollbar {
        display: none;
    }
`;

const ResultContainer = styled.div`
    margin: 20px 0;
    display: flex;
    flex-direction: column;
`;

const ResultLink = styled.a`
    text-decoration: none;
    cursor: pointer;
    img {
        object-fit: contain;
        height: 24px;
        width: 24px;
    }
    &:hover {
        text-decoration: underline;
    }
`;

const ResultItems = styled.div`
    display: flex;
    align-items: center;
    margin-bottom: 5px;
    .MuiSvgIcon-root {
        color: #5f6368;
        font-size: 18px;
    }
`;


export { Container,
         ResultContainer,
         ResultItems,
         ResultLink, 
    }