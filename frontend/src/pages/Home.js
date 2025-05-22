import React from 'react';
import { 
  Container, 
  Grid, 
  Card, 
  CardContent, 
  CardMedia, 
  Typography, 
  Button,
  Box
} from '@mui/material';
import { useNavigate } from 'react-router-dom';

// Sample data - In a real app, this would come from an API
const products = [
  {
    id: 1,
    name: 'Organic Tomatoes',
    price: 2.99,
    image: 'https://images.unsplash.com/photo-1546094097-246e4ca9b952?w=500',
    description: 'Fresh organic tomatoes from local farms'
  },
  {
    id: 2,
    name: 'Fresh Lettuce',
    price: 1.99,
    image: 'https://images.unsplash.com/photo-1622206151226-18ca2c9ab4a1?w=500',
    description: 'Crisp and fresh lettuce, perfect for salads'
  },
  {
    id: 3,
    name: 'Sweet Corn',
    price: 3.49,
    image: 'https://images.unsplash.com/photo-1601593768799-76c78c9f3661?w=500',
    description: 'Sweet and juicy corn on the cob'
  },
  {
    id: 4,
    name: 'Red Potatoes',
    price: 2.49,
    image: 'https://images.unsplash.com/photo-1518977676601-b53f82aba655?w=500',
    description: 'Fresh red potatoes, perfect for roasting'
  }
];

function Home() {
  const navigate = useNavigate();

  return (
    <Container maxWidth="lg" sx={{ py: 4 }}>
      <Box sx={{ mb: 4, textAlign: 'center' }}>
        <Typography variant="h1" component="h1" gutterBottom>
          Fresh Agricultural Products
        </Typography>
        <Typography variant="h5" color="text.secondary" paragraph>
          Discover the finest selection of fresh, locally grown produce
        </Typography>
      </Box>

      <Grid container spacing={4}>
        {products.map((product) => (
          <Grid item key={product.id} xs={12} sm={6} md={3}>
            <Card 
              sx={{ 
                height: '100%', 
                display: 'flex', 
                flexDirection: 'column',
                transition: 'transform 0.2s',
                '&:hover': {
                  transform: 'scale(1.02)',
                  boxShadow: 3
                }
              }}
            >
              <CardMedia
                component="img"
                height="200"
                image={product.image}
                alt={product.name}
                sx={{ objectFit: 'cover' }}
              />
              <CardContent sx={{ flexGrow: 1 }}>
                <Typography gutterBottom variant="h5" component="h2">
                  {product.name}
                </Typography>
                <Typography variant="body2" color="text.secondary" paragraph>
                  {product.description}
                </Typography>
                <Typography variant="h6" color="primary" gutterBottom>
                  ${product.price.toFixed(2)}
                </Typography>
                <Button 
                  variant="contained" 
                  color="primary"
                  fullWidth
                  onClick={() => navigate(`/product/${product.id}`)}
                >
                  View Details
                </Button>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
}

export default Home; 