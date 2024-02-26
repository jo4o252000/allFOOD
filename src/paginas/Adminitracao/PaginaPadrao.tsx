import { AppBar, Box, Container, Toolbar, Typography, Link, Button, Paper } from "@mui/material"
import {Outlet, Link as RouterLink} from 'react-router-dom'

const PaginaPadrao = () => {
    return(
        <>
            <AppBar position="static">
                <Container maxWidth="xl">
                    <Toolbar>
                        <Typography variant="h6">
                            Adiministação
                        </Typography>
                        <Box sx={{display:'flex', flexGrow:1}}>
                            <Link component={RouterLink} to="/admin/restaurante">
                                <Button sx={{my:2, color:'white'}}>
                                    Restaurantes        
                                </Button>
                            </Link>
                            <Link component={RouterLink} to="/admin/restaurante/novo">
                                <Button sx={{my:2, color:'white'}}>
                                    Novo Restaurantes        
                                </Button>
                            </Link>
                            <Link component={RouterLink} to="/admin/pratos">
                                <Button sx={{my:2, color:'white'}}>
                                    Pratos    
                                </Button>
                            </Link>
                            <Link component={RouterLink} to="/admin/pratos/novo">
                                <Button sx={{my:2, color:'white'}}>
                                    Novo Prato
                                </Button>
                            </Link>
                        </Box>
                    </Toolbar>
                </Container>
            </AppBar>
            <Box>
                <Container maxWidth='lg' sx={{mt:1}}>
                    <Paper sx={{p: 2}}>
                        <Outlet />
                    </Paper>
                </Container>
            </Box>
        </>
    )
}

export default PaginaPadrao