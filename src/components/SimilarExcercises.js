import React from 'react';
import { Stack, Box, Typography } from '@mui/material';
import HorizontalScrollbar from "../components/HorizontalScrollbar";

const SimilarExcercises = ({ targetMuscleExcercises, equipmentExcercises }) => {
    return (
        <Box sx={{mt: {lg: "100px", xs: "0"}}}>
            <Typography variant="h3" mb={5}>
                Excercises that target the same muscle group
            </Typography>
            <Stack direction="row" sx={{padding:"2px", position: "relative"}}>
                {targetMuscleExcercises.length && <HorizontalScrollbar data={targetMuscleExcercises} />}
            </Stack>
            <br/>
            <Typography variant="h3" mb={5}>
                Excercises that use the same equipment
            </Typography>
            <Stack direction="row" sx={{padding:"2px", position: "relative"}}>
                {equipmentExcercises.length && <HorizontalScrollbar data={equipmentExcercises} />}
            </Stack>
        </Box>
    )
}

export default SimilarExcercises