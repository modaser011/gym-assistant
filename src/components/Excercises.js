import React, {useEffect, useState} from 'react';
import { Pagination } from '@mui/material';
import { Stack, Typography, Box } from "@mui/material";
import { excerciseOptions, fetchData } from '../utils/fetchData';
import ExcerciseCard from './ExcerciseCard';

const Excercises = ({setExcercises, bodyPart, excercises}) => {

    const [currentPage, setCurrentPage] = useState(1);
    const excercisePerPage = 9;

    const paginate = (e, value) => {
        setCurrentPage(value);
        window.scrollTo({top: 1800, behavior:"smooth"})
    }

    useEffect(() => {
        const fetchExcercisesData = async () => {
            let excerciseData = [];

            if(bodyPart === 'all'){
                excerciseData = await fetchData("https://exercisedb.p.rapidapi.com/exercises", excerciseOptions);
            }else{
                excerciseData = await fetchData(`https://exercisedb.p.rapidapi.com/exercises/bodyPart/${bodyPart}`, excerciseOptions);
            }

            setExcercises(excerciseData)

        }

        fetchExcercisesData();

    },[bodyPart])

    const indexOfLastExcercise = currentPage * excercisePerPage;
    const indexOfFirstExcercise = indexOfLastExcercise - excercisePerPage;
    const currentExcercises = excercises.slice(indexOfFirstExcercise , indexOfLastExcercise);

    return (
        <Box id="excercises" 
        sx={{mt:{lg:"110px"}}} 
        mt="50px" 
        p="20px"
        >
            <Typography variant='h3' mb="46px">
                Showing Results
            </Typography>
            <Stack direction="row" sx={{gap: {lg: "110px" , xs: "50px"}}} flexWrap="wrap" justifyContent="center" >
                {currentExcercises.map((excercise, index) => (<ExcerciseCard key={index} exercise={excercise} />))}
            </Stack>
            <Stack mt="100px" alignItems="center">
                {excercises.length > 9 && (<Pagination  
                color="standard" 
                shape="rounded" 
                count={Math.ceil(excercises.length / 9)} 
                page={currentPage} 
                onChange={paginate} 
                size="large"
                />)}
            </Stack>
        </Box>
    )
}

export default Excercises