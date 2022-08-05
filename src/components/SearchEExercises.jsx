import React from 'react'
import { useEffect, useState } from 'react'
import { Box, Button, Stack, TextField, Typography} from '@mui/material'

import { exerciseOptions, fetchData } from '../utils/fetchData'

const SearchEExercises = () => {

  const [search, setSearch] = useState('')

  const handleSearch = async () =>{
    if(search){
      const exerciseData = await fetchData('https://exercisedb.p.rapidapi.com/exercises/bodyPartList', exerciseOptions);
      
      console.log(exerciseData)
    }
  }

  return (
    <Stack alignItems="center" mt='37px' justufyContent="center" p="20px">
      <Typography
        fontWeight='700'
        mb="50px"
        textAlign='center'
        sx={{
          fontSize: {lg: '44px', xs: '30px'}
        }}
      >
        Somthinf Exercises You <br/> Should Know
      </Typography>
      <Box position="relative" mb='72px'>
        <TextField       
          sx={{
            input: {
              fontWeight: '700', 
              border: 'none', 
              borderRadius:'4px'
            }, 
            width:{
              lg: '800px', xs: '350px'
            },
            backgroundColor: '#fff', 
            borderRadius: '40px', 
          }}
          height='76px'
          value={search}
          onChange={(e) => setSearch=e.target.value.toLowerCase()}
          placeholder='Search Exercises'
        />
        <Button 
          className="search-btn"
          sx={{
            bgcolor: '#ff2625', 
            color: '#fff',
            width: {
              lg: '175px', 
              xs: '80px'
            }, 
            fontSize: {
              lg: '20pxpx', 
              xs: '14px'
            }, 
            position: 'absolute',
            height: '57px', 
            right: '0'
          }}
          onClick={handleSearch}
        >
          Search
        </Button>
      </Box>
    </Stack>
  )
}

export default SearchEExercises