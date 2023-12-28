import React, { useEffect, useState } from 'react';
import { Box, Button, Stack, TextField, Typography } from '@mui/material';
import { excerciseOptions, fetchData } from '../utils/fetchData';
import HorizontalScrollbar from './HorizontalScrollbar';


const SearchExcercises = ({setExcercises, bodyPart, setBodyPart}) => {

    const [search, setSearch] = useState("");
    const [bodyParts, setBodyParts] = useState([]);

    useEffect(() => {
        const fetchExcercisesData = async () => {
            const BodyPartsData = await fetchData("https://exercisedb.p.rapidapi.com/exercises/bodyPartList", excerciseOptions)
            setBodyParts(['all', ...BodyPartsData]);
        };

        fetchExcercisesData();

    }, [])
    

    const handleSearch = async () => {
        if(search){
            const excercisesData = await fetchData("https://exercisedb.p.rapidapi.com/exercises", excerciseOptions);
            
            const searchExcercise = excercisesData.filter((excercise) => excercise.name.toLowerCase().includes(search) 
            || excercise.target.toLowerCase().includes(search) 
            || excercise.equipment.toLowerCase().includes(search) 
            || excercise.bodyPart.toLowerCase().includes(search));

            setSearch("");

            setExcercises(searchExcercise);

            console.log(searchExcercise);
        }
    }

    return (
        
        <Stack alignItems="center" justifyContent="Center" mt="37px" p="20px">
            <Typography fontWeight="700" mb="50px" textAlign="center" sx={{fontSize:{lg: "44px", xs:"30px"}}}>
                Awesome Excercises You <br /> 
                Should Know
            </Typography>
            <Box position="relative" mb="72px" sx={{input: { fontWeight: '700', border: 'none', borderRadius: '4px' }}}>
                <TextField  variant="standard" InputProps={{
                disableUnderline: true, // <== added this
                }} height="76px" value={search} onChange={(e) => setSearch(e.target.value.toLowerCase())} placeholder="Search Excercises" type="text" sx={{ padding: "12px", border: "none", input:{fontWeight: "700", border:"none", borderRadius: "4px"}, width:{lg: "800px", xs: "350px"}, background: "#fff", borderRadius: "4px", outline: "none"}} />
                <Button className='search-btn' onClick={handleSearch} sx={{bgcolor: "#ff2625", color: "#fff", textTransform: "none", width:{lg: "175px" , xs: "85px"}, fontSize: {lg: "20px", xs: "14px"}, height: "56px", position: "absolute", right: "0"}}>
                    Search
                </Button>
            </Box>
            <Box sx={{position: "relative", width: "100%", p:"20px"}}>
                {/* {bodyParts.map((bodyPart) => <></>)} */}
                <HorizontalScrollbar data={bodyParts} bodyPart={bodyPart} setBodyPart={setBodyPart} isBodyParts />
            </Box>
        </Stack>

    )
}

export default SearchExcercises