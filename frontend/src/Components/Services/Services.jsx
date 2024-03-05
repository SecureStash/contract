import { Grid, Typography } from "@mui/material";
import { GoStack } from "react-icons/go";
import { FaUnlockKeyhole } from "react-icons/fa6";
import { MdOutlineGeneratingTokens } from "react-icons/md";


export default function Services() {
    const services = [{ name: 'Create Token', icon: < GoStack /> },
    { name: 'Vest Token', icon: < GoStack /> },
    { name: 'Lock Tokens', icon: < FaUnlockKeyhole /> }, { name: 'Stake Tokens', icon: < GoStack /> },
    { name: 'Token Governance', icon: < MdOutlineGeneratingTokens /> }]
    return (
        <Grid container spacing={1} marginTop={7}>
            <Grid xs={8} >
                <Grid container rowGap={2} columnGap={0.2} padding={'20px'}>
                    {services.map(serv => (
                        <Grid xs={5} border={'2px solid black'} display={"flex"}>
                            {serv.icon}<Typography variant="body1">{serv.name}</Typography>
                        </Grid>))}
                </Grid>
            </Grid>
            <Grid xs={4}>
                <Typography sx={{ fontSize: { xs: '2.5rem', sm: '2.5rem', md: '4rem', textAlign: 'right' } }} color='white'>Services</Typography>
            </Grid>
        </Grid>)
}