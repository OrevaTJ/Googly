import styled from 'styled-components';
import SearchIcon from '@mui/icons-material/Search';
import MicIcon from '@mui/icons-material/Mic';


const FormContainer = styled.form`
    display: flex;
    flex-direction: column;
    align-items: center;
`
const InputField = styled.div`
    display: flex;
    align-items: center;
    padding: 10px 20px;
    border: 1px solid lightgray;
    border-radius: 999px;
    box-shadow: none;
    margin: 20px 0;
    max-width: 600px;
    width: 100%;
    height: 20px;
    background-color: #f1f3f4;
    > input {
        flex: 1;
        margin-left: 10px;
        font-size: 16px;
        background-color: transparent;
        border: none;
        outline: none;
    }
    > .MuiSvgIcon-root {
        color: #5f6368;
    }
    > .MuiSvgIcon-root:hover {
        color: #1a73e8;
    }
    > .MuiSvgIcon-root:active {
        color: #1a73e8;
    }
    > .MuiSvgIcon-root:focus {
        color: #1a73e8;
    }
`
const InputSearchIcon = styled(SearchIcon)`
    margin: 0 10px;
    cursor: pointer;
`
const InputMicIcon = styled(MicIcon)`
    margin: 0 10px;
    cursor: pointer;
`
const ButtonContainer = styled.div`
    display: ${(props) => props.showInput ? 'flex' : 'none'};
    justify-content: center;
    > .MuiButtonBase-root {
        background-color: #f8f9fa;
        border: 1px solid #f8f9fa;
        border-radius: 4px;
        color: #3c4043;
        font-family: arial,sans-serif;
        font-size: 14px;
        padding: 0 16px;
        line-height: 27px;
        height: 36px;
        min-width: 54px;
        text-align: center;
        border: none;
        text-transform: inherit;
        cursor: pointer;
        user-select: none;
        /* margin: 0 5px;
        padding: 10px 20px;
        font-size: 14px;
        border-radius: 3px;
        border: none;
        color: #5f6368;
        cursor: pointer;
        text-transform: inherit;
        font-weight: 500;
        background-color: transparent; */
        &:hover {
            border: none;
            box-shadow: 0 4px 4px rgba(0,0,0,0.1);
        }
    }
`

export { 
    FormContainer,
    InputField, 
    InputSearchIcon, 
    InputMicIcon,
    ButtonContainer,
}