import React from 'react'
import { Typography  } from '@mui/material'
const Typologies = () => {
  return (
    <>
    <Typography variant  = "h1">h1 ia heading</Typography>
    <Typography variant = "h2">h2 ia heading</Typography>
    <Typography variant = "h3">h3 ia heading</Typography>
    <Typography variant = "h4" component="h1" gutterBottom>h4 ia heading</Typography>
    <Typography variant = "h5">h5 ia heading</Typography>
    <Typography variant = "h6">h6 ia heading</Typography>

    <Typography variant = "subtitle1">subtitle is 1</Typography>
    <Typography variant = "subtitle2">subtitle is 2</Typography>

    <Typography variant = "body1">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Alias ad molestias omnis laborum reprehenderit quisquam minima voluptas! Aliquam officia reiciendis veniam placeat?</Typography>
    <Typography variant = "body2">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Fugit voluptatibus saepe voluptatem.</Typography>
    </>
  )
}

export default Typologies