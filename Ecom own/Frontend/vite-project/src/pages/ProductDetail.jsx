import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useCart } from '../context/CartContext';
import {
  Container,
  Grid,
  Typography,
  Button,
  Rating,
  Box,
  Card,
  CardMedia,
  Skeleton,
  Tabs,
  Tab,
} from '@mui/material';
import { ShoppingCart, Favorite } from '@mui/icons-material';

const ProductDetail = () => {
  const { id } = useParams();
  const [loading, setLoading] = useState(true);
  const [product, setProduct] = useState(null);
  const [tabValue, setTabValue] = useState(0);

  useEffect(() => {
    // Simulating API call
    setTimeout(() => {
      setProduct({
        id: parseInt(id),
        name: 'Wireless Headphones',
        price: 4999,
        rating: 4.5,
        image: 'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?auto=format&fit=crop&w=500',
        description: 'High-quality wireless headphones with noise cancellation',
        features: [
          'Active Noise Cancellation',
          '30-hour battery life',
          'Bluetooth 5.0',
          'Touch controls',
          'Voice assistant support',
        ],
        specifications: {
          'Brand': 'TechBrand',
          'Model': 'WH-1000',
          'Color': 'Black',
          'Weight': '250g',
          'Warranty': '1 year',
        },
      });
      setLoading(false);
    }, 1000);
  }, [id]);

  const { addToCart } = useCart();

  const handleTabChange = (event, newValue) => {
    setTabValue(newValue);
  };

  if (loading) {
    return (
      <Container sx={{ py: 4 }}>
        <Grid container spacing={4}>
          <Grid item xs={12} md={6}>
            <Skeleton variant="rectangular" height={400} />
          </Grid>
          <Grid item xs={12} md={6}>
            <Skeleton height={60} />
            <Skeleton height={40} width="60%" />
            <Skeleton height={100} />
            <Skeleton height={50} width="40%" />
          </Grid>
        </Grid>
      </Container>
    );
  }

  return (
    <Container sx={{ py: 4 }}>
      <Grid container spacing={4}>
        <Grid item xs={12} md={6}>
          <Card>
            <CardMedia
              component="img"
              height="400"
              image={product.image}
              alt={product.name}
              sx={{ objectFit: 'contain' }}
            />
          </Card>
        </Grid>
        
        <Grid item xs={12} md={6}>
          <Typography variant="h4" component="h1" gutterBottom>
            {product.name}
          </Typography>
          
          <Box display="flex" alignItems="center" mb={2}>
            <Rating value={product.rating} precision={0.1} readOnly />
            <Typography variant="body2" color="text.secondary" ml={1}>
              ({product.rating})
            </Typography>
          </Box>

          <Typography variant="h4" color="primary" gutterBottom>
            {new Intl.NumberFormat('en-IN', { style: 'currency', currency: 'INR' }).format(product.price)}
          </Typography>

          <Typography variant="body1" paragraph>
            {product.description}
          </Typography>

          <Box sx={{ mb: 4 }}>
            <Button
              variant="contained"
              size="large"
              startIcon={<ShoppingCart />}
              sx={{ mr: 2 }}
              onClick={() => addToCart(product)}
            >
              Add to Cart
            </Button>
            <Button
              variant="outlined"
              size="large"
              startIcon={<Favorite />}
            >
              Add to Wishlist
            </Button>
          </Box>

          <Box sx={{ width: '100%' }}>
            <Tabs
              value={tabValue}
              onChange={handleTabChange}
              textColor="primary"
              indicatorColor="primary"
            >
              <Tab label="Features" />
              <Tab label="Specifications" />
            </Tabs>
            
            <Box sx={{ mt: 2 }}>
              {tabValue === 0 && (
                <ul>
                  {product.features.map((feature, index) => (
                    <Typography component="li" key={index} paragraph>
                      {feature}
                    </Typography>
                  ))}
                </ul>
              )}
              
              {tabValue === 1 && (
                <Box>
                  {Object.entries(product.specifications).map(([key, value]) => (
                    <Box
                      key={key}
                      sx={{
                        display: 'flex',
                        borderBottom: '1px solid #eee',
                        py: 1,
                      }}
                    >
                      <Typography sx={{ fontWeight: 'bold', width: 150 }}>
                        {key}:
                      </Typography>
                      <Typography>{value}</Typography>
                    </Box>
                  ))}
                </Box>
              )}
            </Box>
          </Box>
        </Grid>
      </Grid>
    </Container>
  );
};

export default ProductDetail;