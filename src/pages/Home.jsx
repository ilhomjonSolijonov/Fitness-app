import React, {useState} from 'react'
import {Box} from '@mui/material'

import HeroBanner from '../components/HeroBanner'
import SearchEExerxises from '../components/SearchEExercises'
import Exercises from '../components/Exercises'

const Home = () => {
  return (
    <Box>
      <HeroBanner />
      <SearchEExerxises/>
      <Exercises />
    </Box>
  )
}

export default Home