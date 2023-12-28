import React from 'react';
import { Typography, Stack, Button } from '@mui/material';
import BodyPartImage from "../assets/icons/body-part.png";
import TargetImage from "../assets/icons/target.png";
import EquipmentImage from "../assets/icons/equipment.png";

const Detail = ({excerciseDetail}) => {

    const {bodyPart, gifUrl, name, target, equipment} = excerciseDetail;

    const extraDetails = [
        {
            icon: BodyPartImage,
            name: bodyPart,
            detail: "body part",
        },
        {
            icon: TargetImage,
            name: target,
            detail: "targets",
        },
        {
            icon: EquipmentImage,
            name: equipment,
            detail: "equipment needed",
        },
    ]

    return (
        <Stack gap="60px" sx={{flexDirection: {lg: "row"}, p:"20px", alignItems: "center"}}>
            <img src={gifUrl} alt={name} loading="lazy" className='detail-image' />
            <Stack sx={{gap: {lg:"35px", xs: "20px"}}}>
                <Typography variant="h4">
                    {name}
                </Typography>
                <Typography variant="h6">
                    Excercises keep you strong. {name} { }

                    is one of the best excercises to target your {target}, it will help you improve your
                    mood and gain energy
                </Typography>
                <Stack gap="15px">
                {extraDetails.map((extraDetail) =>{
                    return(
                    <Stack key={extraDetail.name} direction="row" alignItems="center" gap="15px">
                        <Button sx={{background: "#fff2db", borderRadius: "50%", padding: "15px"}}>
                            <img src={extraDetail.icon} alt="icon" />
                        </Button>
                        <Typography textTransform="capitalize" variant="h6">
                            {`${extraDetail.detail}: ${extraDetail.name}`}
                        </Typography>
                    </Stack>)
                })}
                </Stack>
            </Stack>
        </Stack>
    )
}

export default Detail