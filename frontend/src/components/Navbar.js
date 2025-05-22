import React from 'react';
import { 
  AppBar, 
  Toolbar, 
  Typography, 
  Button, 
  Container,
  Box
} from '@mui/material';
import { useNavigate } from 'react-router-dom';
import LocalFloristIcon from '@mui/icons-material/LocalFlorist';

function Navbar() {
  const navigate = useNavigate();

  return (
    <AppBar position="sticky" sx={{ mb: 4 }}>
      <Container maxWidth="lg">
        <Toolbar disableGutters>
          <LocalFloristIcon sx={{ mr: 2, fontSize: 32 }} />
          <Typography
            variant="h6"
            component="div"
            sx={{ 
              flexGrow: 1, 
              cursor: 'pointer',
              fontWeight: 600,
              letterSpacing: 1
            }}
            onClick={() => navigate('/')}
          >
            AGRO MARKET
          </Typography>
          <Box>
            <Button 
              color="inherit" 
              onClick={() => navigate('/')}
              sx={{ mx: 1 }}
            >
              Home
            </Button>
            <Button 
              color="inherit" 
              onClick={() => navigate('/products')}
              sx={{ mx: 1 }}
            >
              Products
            </Button>
            <Button 
              color="inherit" 
              onClick={() => navigate('/about')}
              sx={{ mx: 1 }}
            >
              About
            </Button>
            <Button 
              color="inherit" 
              onClick={() => navigate('/contact')}
              sx={{ mx: 1 }}
            >
              Contact
            </Button>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
}

export default Navbar; 