import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import {
  Container,
  Grid,
  Card,
  CardContent,
  CardMedia,
  Typography,
  Button,
  Rating,
  Box,
  Skeleton,
} from '@mui/material';
import { Link } from 'react-router-dom';
import { useCart } from '../context/CartContext';
import { products } from '../data/products';

const Products = () => {
  const [loading, setLoading] = useState(true);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const { addToCart } = useCart();
  const { category } = useParams();

  useEffect(() => {
    // Simulate loading time
    setTimeout(() => {
      let productsToShow;
      if (category) {
        // If category is provided in URL, filter products
        productsToShow = products[category] || [];
      } else {
        // If no category, show products from all categories
        productsToShow = Object.values(products).flat();
      }
      setFilteredProducts(productsToShow);
      setLoading(false);
    }, 800);
  }, [category]);

  const formatPrice = (price) => {
    return new Intl.NumberFormat('en-IN', {
      style: 'currency',
      currency: 'INR'
    }).format(price);
  };

  return (
    <Container sx={{ py: 4 }}>
      <Typography variant="h4" component="h1" gutterBottom>
        {category ? category.charAt(0).toUpperCase() + category.slice(1) : 'All Products'}
      </Typography>

      <Grid container spacing={4}>
        {loading
          ? Array.from(new Array(8)).map((_, index) => (
              <Grid item key={index} xs={12} sm={6} md={3}>
                <Card>
                  <Skeleton variant="rectangular" height={200} />
                  <CardContent>
                    <Skeleton />
                    <Skeleton width="60%" />
                  </CardContent>
                </Card>
              </Grid>
            ))
          : filteredProducts.map((product) => (
              <Grid item key={product.id} xs={12} sm={6} md={3}>
                <Card
                  sx={{
                    height: '100%',
                    display: 'flex',
                    flexDirection: 'column',
                    transition: '0.3s',
                    '&:hover': {
                      transform: 'translateY(-5px)',
                      boxShadow: 3,
                    },
                  }}
                >
                  <CardMedia
                    component="img"
                    height="200"
                    image={product.image}
                    alt={product.name}
                  />
                  <CardContent sx={{ flexGrow: 1 }}>
                    <Typography gutterBottom variant="h6" component="h2">
                      {product.name}
                    </Typography>
                    <Typography gutterBottom component="div" className="text-lg text-gray-800 font-semibold">
                      {new Intl.NumberFormat('en-IN', { style: 'currency', currency: 'INR' }).format(product.price)}
                    </Typography>
                    <Box display="flex" alignItems="center" mb={2}>
                      <Rating
                        value={product.rating}
                        precision={0.1}
                        readOnly
                      />
                      <Typography variant="body2" color="text.secondary" ml={1}>
                        ({product.rating})
                      </Typography>
                    </Box>
                    <Typography variant="body2" color="text.secondary" paragraph>
                      {product.description}
                    </Typography>
                    <div className="space-y-2">
                      <button onClick={() => addToCart(product)} className="w-full bg-accent text-white py-2 rounded-md">Add to Cart</button>
                      <Button component={Link} to={`/product/${product.id}`} variant="contained" color="primary" fullWidth>
                        View Details
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              </Grid>
            ))}
      </Grid>
    </Container>
  );
};

export default Products;