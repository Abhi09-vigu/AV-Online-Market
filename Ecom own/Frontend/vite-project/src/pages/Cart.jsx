import {
  Container,
  Typography,
  Grid,
  Card,
  CardContent,
  CardMedia,
  Button,
  IconButton,
  Box,
  Divider,
} from '@mui/material';
import {
  Add as AddIcon,
  Remove as RemoveIcon,
  Delete as DeleteIcon,
} from '@mui/icons-material';
import { Link } from 'react-router-dom';
import { useCart } from '../context/CartContext';

const Cart = () => {
  const { cart, updateQuantity, removeFromCart, clearCart } = useCart();

  const calculateTotal = () => {
    return cart.reduce((total, item) => total + (item.price || 0) * (item.quantity || 0), 0);
  };

  const placeOrder = () => {
    if (!cart || cart.length === 0) return;
    try {
      const raw = localStorage.getItem('osm_orders');
      const orders = raw ? JSON.parse(raw) : [];
      const order = {
        id: `ORD${Date.now()}`,
        date: new Date().toISOString(),
        items: cart,
        total: calculateTotal(),
      };
      orders.unshift(order);
      localStorage.setItem('osm_orders', JSON.stringify(orders));
      // clear cart
      clearCart();
      // simple confirmation
      alert('Order placed successfully! Order ID: ' + order.id);
    } catch (e) {
      console.error(e);
      alert('Failed to place order.');
    }
  };

  return (
    <Container sx={{ py: 4 }}>
      <Typography variant="h4" component="h1" gutterBottom>
        Shopping Cart
      </Typography>

      {cart.length === 0 ? (
        <Box textAlign="center" py={4}>
          <Typography variant="h6" gutterBottom>
            Your cart is empty
          </Typography>
          <Button
            component={Link}
            to="/products"
            variant="contained"
            color="primary"
            sx={{ mt: 2 }}
          >
            Continue Shopping
          </Button>
        </Box>
      ) : (
        <Grid container spacing={4}>
          <Grid item xs={12} md={8}>
            {cart.map((item) => (
              <Card key={item.id} sx={{ mb: 2 }}>
                <CardContent>
                  <Grid container spacing={2} alignItems="center">
                    <Grid item xs={3}>
                      <CardMedia
                        component="img"
                        height="100"
                        image={item.image}
                        alt={item.name}
                        sx={{ objectFit: 'contain' }}
                      />
                    </Grid>
                    <Grid item xs={4}>
                      <Typography variant="h6" component="h2">
                        {item.name}
                      </Typography>
                      <Typography variant="body2" color="text.secondary">
                        {new Intl.NumberFormat('en-IN', { style: 'currency', currency: 'INR' }).format(item.price)}
                      </Typography>
                    </Grid>
                    <Grid item xs={3}>
                      <Box display="flex" alignItems="center">
                        <IconButton
                          size="small"
                          onClick={() => updateQuantity(item.id, (item.quantity || 1) - 1)}
                        >
                          <RemoveIcon />
                        </IconButton>
                        <Typography sx={{ mx: 2 }}>{item.quantity}</Typography>
                        <IconButton
                          size="small"
                          onClick={() => updateQuantity(item.id, (item.quantity || 0) + 1)}
                        >
                          <AddIcon />
                        </IconButton>
                      </Box>
                    </Grid>
                    <Grid item xs={2}>
                      <Typography variant="subtitle1">
                        {new Intl.NumberFormat('en-IN', { style: 'currency', currency: 'INR' }).format((item.price || 0) * (item.quantity || 0))}
                      </Typography>
                    </Grid>
                    <Grid item xs={12} sm="auto">
                      <IconButton
                        color="error"
                        onClick={() => removeFromCart(item.id)}
                      >
                        <DeleteIcon />
                      </IconButton>
                    </Grid>
                  </Grid>
                </CardContent>
              </Card>
            ))}
          </Grid>

          <Grid item xs={12} md={4}>
            <Card>
              <CardContent>
                <Typography variant="h6" gutterBottom>
                  Order Summary
                </Typography>
                <Box display="flex" justifyContent="space-between" mb={2}>
                  <Typography>Subtotal</Typography>
                  <Typography>{new Intl.NumberFormat('en-IN', { style: 'currency', currency: 'INR' }).format(calculateTotal())}</Typography>
                </Box>
                <Box display="flex" justifyContent="space-between" mb={2}>
                  <Typography>Shipping</Typography>
                  <Typography>Free</Typography>
                </Box>
                <Divider sx={{ my: 2 }} />
                <Box display="flex" justifyContent="space-between" mb={2}>
                  <Typography variant="h6">Total</Typography>
                  <Typography variant="h6">
                    {new Intl.NumberFormat('en-IN', { style: 'currency', currency: 'INR' }).format(calculateTotal())}
                  </Typography>
                </Box>
                <Button
                  variant="contained"
                  color="primary"
                  fullWidth
                  size="large"
                  onClick={placeOrder}
                >
                  Place Order
                </Button>
                <Button className="mt-3" variant="outlined" color="secondary" fullWidth onClick={clearCart} sx={{ mt: 2 }}>
                  Clear Cart
                </Button>
              </CardContent>
            </Card>
          </Grid>
        </Grid>
      )}
    </Container>
  );
};

export default Cart;