import React from 'react';
import { Typography, IconButton } from '@mui/material';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import { 
  Container,
  ResultContainer,
  ResultLink,
  ResultItems,
 } from './Result.Styled'

export const SearchResult = ({data}) => {
  return (
    <Container>
      <Typography variant='body2' component='p'
        sx={{
          color: '#5f6368',
          fontSize: '14px',
          fontWeight: '400',
          lineHeight: '20px',
          marginBottom: '10px',
          padding: '10px',
        }}
      >
        About {data?.searchInformation.formattedTotalResults} 
          results ({data?.searchInformation.formattedSearchTime} seconds)
      </Typography>
      {
        data?.items.map((item) => (
          <ResultContainer key={item.cacheId}>
            <ResultLink href={item?.link}>
              <ResultItems>
                {
                  item?.pagemap?.cse_image?.length > 0 &&
                  item?.pagemap?.cse_image[0]?.src && (
                    <img src={item?.pagemap?.cse_image[0]?.src} alt='ResultImage' />
                  )
                }
                <Typography variant='body2' component='p'
                  sx={{
                    color: '#5f6368',
                    fontSize: '14px',
                    fontWeight: '400',
                    lineHeight: '20px',
                    marginLeft: '10px',
                  }}
                >
                  {item?.displayLink}
                </Typography>
                <IconButton>
                  <MoreVertIcon />
                </IconButton>
              </ResultItems>
              <Typography variant='h6' component='h3'
                sx={{
                  color: '#1a0dab',
                  fontSize: '18px',
                  fontWeight: '700',
                  lineHeight: '24px',
                }}
              >
                {item?.title}
              </Typography>
            </ResultLink>
            <Typography variant='body2' component='p'
                sx={{
                  color: '#5f6368',
                  fontSize: '14px',
                  fontWeight: '400',
                  lineHeight: '20px',
                }}
              >
                {item?.snippet}
            </Typography>
          </ResultContainer>
        ))
      }
    </Container>
  )
}
