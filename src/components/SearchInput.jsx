import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { Avatar, Tooltip, Button } from '@mui/material'
import {
    FormContainer,
    InputField, 
    InputSearchIcon, 
    InputMicIcon,
    ButtonContainer,
} from './SearchInput.Styled'

export const SearchInput = ({showInput=false}) => {
    const [input, setInput] = useState('')
    const navigate = useNavigate();

    const handleSearch = (e) => {
        e.preventDefault();
        navigate(`/search?${input}`)
    }


  return (
    <FormContainer onSubmit={handleSearch}>
        <InputField>
            <InputSearchIcon />
            <input type='text'
                value={input} 
                onChange={e => setInput(e.target.value)}
            />
            <Tooltip title='Voice Search'>
                <InputMicIcon />
            </Tooltip>
        </InputField>
        <ButtonContainer showInput={showInput}>
            <Button variant='outlined' type='submit'>
                Google Search
            </Button>
            <Button variant='outlined' type='submit'>
                I'm Feeling Lucky
            </Button>
        </ButtonContainer>
    </FormContainer>
  )
}


