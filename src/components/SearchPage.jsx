import React, { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { Tooltip, Avatar, IconButton } from '@mui/material'
import AppsIcon from '@mui/icons-material/Apps';
import SettingsIcon from '@mui/icons-material/Settings';
import axios from "axios";

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
import { useSearch } from './hooks/useSearch';
import mocks from '../Response';


export const SearchPage = ({input, setInput}) => {
  const [data, setData] = useState(null);

  const BaseUrl = 'https://customsearch.googleapis.com/customsearch/v1'

  const API_KEY = import.meta.env.VITE_SEARCH_KEY;
  const ENGINE_KEY = import.meta.env.VITE_SEARCH_ENGINE_KEY;

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await axios.get(
          `${BaseUrl}?key=${API_KEY}&cx=${ENGINE_KEY}&q=${input}`
        );
        console.log(response);
        setData(response?.data);
        console.log(`set data ${data}`);
      } catch (error) {
        console.error(error);
      }
    }
    // const fetchData = async () => {
    //     const response = await axios.get(
    //         `${BaseUrl}?key=${API_KEY}&cx=${ENGINE_KEY}&q=${term}`
    //     );
    //     setData(response?.data);
    // };
    fetchData();
  }, [input]);

  return (
    <Container>
      <Header>
        <HearderLeft>
          <Link to='/'>
            <Logo 
              src='https://www.google.com/images/branding/googlelogo/1x/googlelogo_color_272x92dp.png' alt='GoogleLogo'
            />
          </Link>
          <SearchOptions input={input} setInput={setInput} />
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
      { data && <SearchResult data={data}/> }
    </Container>
  )
}