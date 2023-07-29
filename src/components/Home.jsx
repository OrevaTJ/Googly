import React from 'react'
import { Link } from 'react-router-dom'
import { Tooltip } from '@mui/material'
import { Avatar } from '@mui/material'
import { IconButton } from '@mui/material';
import AppsIcon from '@mui/icons-material/Apps';
import { SearchInput } from '../components/SearchInput'
import { 
    Container, 
    Header, 
    HearderLeft, 
    HearderRight,
    LogoContainer,
} from './Home.Styled'

export const Home = () => {
  return (
    <Container>
        <Header>
            <HearderLeft>
                <Link to='about'>About</Link>
                <Link to='store'>Store</Link>
            </HearderLeft>
            <HearderRight>
                <Link to='gmail'>Gmail</Link>
                <Link to='images'>Images</Link>
                <Tooltip title='Google Apps'>
                <IconButton>
                    <AppsIcon 
                    sx={{ fontSize: '1.5rem', 
                    color: '#5f6368', }}
                />
                </IconButton>
                </Tooltip>
                <Tooltip>
                    <Avatar
                    sx={{
                        width: '30px',
                        height: '30px',
                        borderRadius: '50%',
                        backgroundColor: '#8ab4f8',
                        color: 'white',
                        cursor: 'pointer',
                        marginRight: '8px',
                      }}
                    >
                        JP
                    </Avatar>
                </Tooltip>
            </HearderRight>
        </Header>
        <LogoContainer>
            <img src='https://www.google.com/images/branding/googlelogo/1x/googlelogo_color_272x92dp.png' alt='GoogleLogo'/>
            <div>
                <SearchInput showinput={true}/>
            </div>
        </LogoContainer>
    </Container>
  )
}
