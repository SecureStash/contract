import { Box, Button, Grid } from "@mui/material"
import { useNavigate } from "react-router-dom"

export default function NavBar() {
    let navigate = useNavigate()
    const navs = [
        { label: 'HOME', url: '/home' },
        { label: 'ABOUT US', url: '/about' },
        { label: 'SERVICES', url: '/services' },
        { label: 'TOKEN LAUNCH', url: '/token' },
        { label: 'ROADMAP', url: '/roadmap' },
        { label: 'CONTACTS', url: '/contacts' },
    ]
    return (
        <Grid container item xs={12} >
            <Grid item xs={9} sx={{ xs: '100%', sm: '45%', md: '30%' }} style={{ justifyContent: 'center', display: 'flex', paddingTop: '1%', gap: '1.5%' }}>
                {
                    navs.map(nav => (
                        <Button key={nav.label} sx={{ color: 'white', fontSize: { xs: '0.4rem', sm: '0.7rem', md: '1rem', lg: '1.5rem' } }} onClick={() => navigate(nav.url)}>{nav.label}</Button>
                    ))
                }</Grid>
            <Grid item xs={3} style={{ float: 'right' }}>
                <img width='30%' height="70%" style={{ top: '1%', float: 'right', padding: '25px' }} src={require("../asserts/favicon.png")} /></Grid>
        </Grid >
    )
}