import React from 'react'
import {Link} from 'react-router-dom'
import {Button, Stack, Typography} from '@mui/material'
import { fontWeight } from '@mui/system'


const ExerciseCard = ({ exercise }) => {
  return (
    <Link className='exercise-card' to={`/exercise/${exercise.id}`}>
        <img src={exercise.gifUrl} alt={exercise.name} loading="lazy" />
        <Stack direction="row">
            <Button sx={{ml: '21px' , color:'#fff',background:'#fcc757',
            fontSize:'14px', borderRadius:'20px',textTransform:'capitalize'}}>
                {exercise.bodyPart}
            </Button>
            <Button sx={{ml: '21px' , color:'#fff',background:'#acd100',
            fontSize:'14px', borderRadius:'20px',textTransform:'capitalize'}}>
                {exercise.target}
            </Button>
        </Stack>
            <Typography fontSize="15px" ml='21px' color="#000" fontWeight='bold' mt="10px" pb="10px" textTransform='capitalize'>
                {exercise.name}
            </Typography>
    </Link>
  )
}

export default ExerciseCard