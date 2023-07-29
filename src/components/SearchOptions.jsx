import React from 'react'
import { Link } from 'react-router-dom';
import { SearchInput } from './SearchInput'
import FeedIcon from '@mui/icons-material/Feed';
import ImageIcon from '@mui/icons-material/Image';
import SearchIcon from '@mui/icons-material/Search';
import VideoLibraryIcon from '@mui/icons-material/VideoLibrary';
import LocalOfferIcon from '@mui/icons-material/LocalOffer';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import {
    OptionsContainer,
    Options,
    StyledOptions,
} from './SearchPage.Styled'


export const SearchOptions = () => {
  return (
    <OptionsContainer>
        <SearchInput />
        <Options>
            <StyledOptions>
                <SearchIcon />
                <Link to='all'>All</Link>
            </StyledOptions>
            <StyledOptions>
                <FeedIcon />
                <Link to='news'>News</Link>
            </StyledOptions>
            <StyledOptions>
                <ImageIcon />
                <Link to='images'>Images</Link>
            </StyledOptions>
            <StyledOptions>
                <VideoLibraryIcon />
                <Link to='videos'>Videos</Link>
            </StyledOptions>
            <StyledOptions>
                <LocalOfferIcon />
                <Link to='shopping'>Shopping</Link>
            </StyledOptions>
            <StyledOptions>
                <LocationOnIcon />
                <Link to='maps'>Maps</Link>
            </StyledOptions>
        </Options>
    </OptionsContainer>
  )
}
