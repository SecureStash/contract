import YouTubeIcon from '@mui/icons-material/YouTube';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import { Box, Grid, Typography } from '@mui/material';

export default function Home() {
    return (<div>
        <Grid container xs={12} spacing={1} sx={{ xs: '100%', sm: '45%', md: '30%' }} >
            <Grid key='image' item xs={8} md={8} style={{ textAlign: 'center' }}><img width='50%' height='80%' src={require('../asserts/Home_image.png')} /></Grid>
            <Grid key='home' item xs={4} md={4}  >
                <Typography sx={{ fontSize: { xs: '1rem', sm: '3rem', md: '4rem' } }} style={{ fontWeight: 'bold', color: 'white', textAlign: 'right' }}>SECURE</Typography>
                <Typography sx={{ fontSize: { xs: '1rem', sm: '3rem', md: '4rem' } }} style={{ paddingTop: 0, marginTop: 0, fontWeight: 'bold', letterSpacing: '1%', color: 'white', textAlign: 'right' }}>STASH</Typography>
                <Typography sx={{ fontSize: { xs: '0.8rem', sm: '1rem', md: '2rem' } }} style={{ color: 'white', letterSpacing: '1%', textAlign: 'right' }}>REVOLUTIONARY<br />TOKENS FOR<br />DECENTRALIZED<br />MONEY</Typography>
                <div style={{ textAlign: 'right', marginTop: '2%' }}>
                    <InstagramIcon fontSize='large' style={{ marginRight: '1%', color: 'white', fontSize: { xs: '0.8rem', sm: '2rem', md: '5rem', lg: '5rem' } }} />
                    <FacebookIcon fontSize='large' style={{ marginRight: '1%', color: 'white', fontSize: { xs: '0.8rem', sm: '2rem', md: '5rem', lg: '5rem' } }} />
                    <YouTubeIcon fontSize='large' style={{ color: 'white', fontSize: { xs: '0.8rem', sm: '2rem', md: '5rem', lg: '5rem' } }} />
                </div>
            </Grid>
        </Grid>
    </div >)
}