# Gadget Ghar - E-commerce Web App

Although its a cliché project. it is something to show my react skills. There are more projects to come Gadget Ghar is a full-featured e-commerce web application for electronics and gadgets, built
with React and Redux. It provides a seamless shopping experience for both guests and logged-in users, with robust state persistence, user feedback, and all essential e-commerce flows.

## Features

- **Product Display**: Browse products by category, best sellers, featured, sales, new arrivals, and limited editions.
- **Product Details**: View detailed information, add to cart or wishlist, and see related products.
- **Cart & Wishlist**: Add/remove/clear items, with counters in the header. State is persisted for both guests and logged-in users using Redux and localStorage.
- **Checkout & Payment**: Complete orders with a smooth checkout and payment flow, including loader animation and order confirmation.
- **Order Management**: View all orders, see order details, and cancel orders with confirmation modals and toasts.
- **User Feedback**: Toast notifications for all major actions (add/remove, order placed, errors, etc.), and confirmation modals for critical actions.
- **Newsletter Subscription**: Subscribe with email validation and instant feedback.
- **Authentication**: Login checks for cart/wishlist actions, with guest support.
- **Responsive UI**: Modern, clean, and responsive design.

## Tech Stack

- **Frontend**: React, Redux Toolkit, React Router, react-toastify
- **State Persistence**: Redux + localStorage (user-specific and guest flows)
- **Styling**: CSS Modules, custom CSS
- **Build Tool**: Vite

## Project Structure

- `src/Components/` - UI components (ProductCard, Header, Footer, Home sections, etc.)
- `src/Pages/` - Main pages (Products, ProductDetails, Cart, Wishlist, Checkout, Payment, Orders, etc.)
- `src/Redux/Slices/` - Redux slices for cart, wishlist, orders, and products
- `src/Data/` - Product and static data
- `src/assets/` - Images and static assets

## State Management & Persistence

- All cart, wishlist, and order data is managed via Redux slices.
- State is initialized from and synced to localStorage for both guests and logged-in users.
- User-specific data is handled by keying localStorage by user ID when logged in.

## User Feedback

- All major actions trigger toast notifications (using react-toastify).
- Confirmation modals are used for order cancellation and other critical actions.
- Loader animation is shown during payment processing.

## Key Flows

- **Add to Cart/Wishlist:**
  - Works for both guests and logged-in users.
  - State is persisted and counters update in real-time.
- **Checkout & Payment:**
  - Cart is cleared after successful order.
  - Order confirmation page displays order details.
- **Order Management:**
  - View all orders, see details, and cancel with confirmation.
- **Newsletter:**
  - Subscribe with email validation and instant feedback.

## File Highlights

- `src/Components/ProductCard.jsx` - Handles product display, cart/wishlist actions, and feedback.
- `src/Redux/Slices/CartSlice.js`, `WishlistSlice.js`, `OrderSlice.js` - Redux logic for state and persistence.
- `src/Pages/User/Checkout.jsx`, `Payment.jsx`, `Oder-confirmation.jsx`, `Orders.jsx` - Checkout, payment, and order management flows.
- `README.md` - This documentation.

## Credits

Developed by Alex Kandel

---

For any issues or feature requests, please open an issue or contact the maintainer.
