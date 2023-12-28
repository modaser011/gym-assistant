import React from 'react'
import { Box, Stack, Typography } from '@mui/material'

const ExcerciseVideos = ({ excerciseVideos, name }) => {

    if(excerciseVideos){
        console.log(excerciseVideos);
    }

    return (
        <Box sx={{marginTop: {lg: "200px", xs:"20px"}}} p="20px">
            <Typography variant="h4" mb="33px">
                Watch <span style={{color: "#ff2625", fontWeight: "600", textTransform: "capitalize"}}>{name}</span> excercise Videos
            </Typography>
            <Stack justifyContent="flex-start" flexWrap="wrap" alignItems="center" 
            sx={{
                flexDirection:{lg: "row"}, 
                gap:{lg: "110px", xs:"0px"}
            }}
            >
                {excerciseVideos?.slice(0, 3).map((item, index) => (
                    <a key={index} 
                    className="exercise-video" 
                    href={`https://www.youtube.com/watch?v=${item.video.videoId}`} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    >
                        <img style={{width: "350px" , height: "350px"}} src={item.video.thumbnails[0].url} alt="Video Thumbnail" />
                        <Box>
                            <Typography sx={{color: "black"}} variant="h6" textAlign="center">
                                {item.video.title}
                            </Typography>
                        </Box>
                    </a>
                ))}
            </Stack>
        </Box>
    )
}

export default ExcerciseVideos