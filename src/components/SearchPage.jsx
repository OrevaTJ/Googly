import React from 'react'
import { Link } from 'react-router-dom'
import { Tooltip, Avatar, IconButton } from '@mui/material'
import AppsIcon from '@mui/icons-material/Apps';
import SettingsIcon from '@mui/icons-material/Settings';
import { 
  Container, 
  Header, 
  HearderLeft,
  HearderRight,
  StyledOptions,
  Logo,
} from './SearchPage.Styled'
import { SearchOptions } from './SearchOptions'
import { SearchResult } from './SearchResult';

export const SearchPage = () => {
  return (
    <Container>
      <Header>
        <HearderLeft>
          <Link to='/'>
            <Logo 
              src='https://www.google.com/images/branding/googlelogo/1x/googlelogo_color_272x92dp.png' alt='GoogleLogo'
            />
          </Link>
          <SearchOptions />
        </HearderLeft>
        <HearderRight>
          <StyledOptions>
            <Tooltip title='Settings'>
              <IconButton>
                <SettingsIcon />
              </IconButton>
            </Tooltip>
          </StyledOptions>
          <StyledOptions>
            <Tooltip title='Google Apps'>
              <IconButton>
                <AppsIcon />
              </IconButton>
            </Tooltip>
          </StyledOptions>
          <StyledOptions>
            <Tooltip>
              <Avatar sx={{
                width: '30px',
                height: '30px',
                borderRadius: '50%',
                backgroundColor: '#8ab4f8',
                color: '#fff',
                cursor: 'pointer',
                marginRight: '8px',
              }}
              >
                JP
              </Avatar>
            </Tooltip>
          </StyledOptions>
        </HearderRight>
      </Header>
      {
        true && <SearchResult />
      }
    </Container>
  )
}