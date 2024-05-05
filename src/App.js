import React, { useState } from 'react';
import './index.css'; // Import your CSS file
import video1 from './video/video1.mp4';
import image3 from './image/image3.webp';
import image2 from './image/image2.webp';
import image1 from './image/image1.webp';
import { faMagnifyingGlass, faCartShopping, faStar, faTrash, faTimes } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";


import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import star from './image/star.png';


function Header({ totalItems, openCartModal }) {
  return (
    <header>
      <div id="menu-bar" className="fas fa-bars"></div>
      <a href="#" className="logo"><span>T</span>ravel</a>
      <nav className="navbar">
        <a href="#home">Home</a>
        <a href="#book">Book</a>
        <a href="#package">Packages</a>
        <a href="#services">Services</a>
        <a href="#gallery">Gallery</a>
        <a href="#review">Review</a>
        <a href="#contact">Contact</a>
      </nav>
      <div className="icon" onClick={openCartModal}>
        <FontAwesomeIcon icon={faCartShopping} id="cart-btn" />
        {totalItems > 0 && <span className="cart-badge">{totalItems}</span>}
      </div>
      <form action="" className="search-bar-container">
        <input type="search" id="search-bar" placeholder="Search here..." />
        <label htmlFor="search-bar">
          <FontAwesomeIcon icon={faMagnifyingGlass} />
        </label>
      </form>
    </header>
  );
}

function CartModal({ cartItems, closeModal, removeFromCart }) {
  // Calculate total price
  const totalPrice = cartItems.reduce((total, item) => total + item.price * item.quantity, 0);

  return (
    <div className="cart-modal">
      <div className="cart-content">
        <button className="close-btn" onClick={closeModal}>
          <FontAwesomeIcon icon={faTimes} />
        </button>
        <h2>Cart</h2>
        <div className="cart-items">
          {cartItems.map((item, index) => (
            <div className="cart-item" key={index}>
              <img src={item.image} alt={item.name} />
              <div className="item-details">
                <h3>{item.name}</h3>
                <p>Price: ₹{item.price}</p>
                <p>Quantity: {item.quantity}</p>
                <button className="delete-btn" onClick={() => removeFromCart(item)}>
                  <FontAwesomeIcon icon={faTrash} />
                </button>
              </div>
            </div>
          ))}
        </div>
        <div className="total-section">
          <p>Total Price: ₹{totalPrice}</p>
          <button className="checkout-btn">Checkout</button>
        </div>
      </div>
    </div>
  );
}

function HomeSection() {
  return (
    <section class="home" id="home">
      <div class="content">
          <h3>Adventure is Worthwhile</h3>
          <p>Discover New Places With Us, Adventure Awaits</p>
          <a href="#" class="btn">Discover more</a>
      </div>

      <div class="controls">
          <span class="vid-btn active" source src={video1}></span>
      </div>

      <div class="video-container">
          <video src={video1} id="video-slider" loop autoplay muted></video>
      </div>
    </section>
  );
}

function PackagesSection({ addToCart }) {
  // Sample package data
  const packages = [
    { id: 1, name: 'Mumbai Package', city: 'Mumbai', price: 9000, image: image3 },
    { id: 2, name: 'Delhi Package', city: 'Delhi', price: 7500, image: image2 },
    { id: 3, name: 'Bangalore Package', city: 'Bangalore', price: 10000, image: image1 }
  ];

  const handleAddToCart = (pkg) => {
    addToCart(pkg);
  };

  return (
    <section className="packages" id="packages">
      <h1 className="heading">
        <span>P</span>
        <span>A</span>
        <span>C</span>
        <span>K</span>
        <span>A</span>
        <span>G</span>
        <span>E</span>
        <span>S</span>
      </h1>
      <div className="box-container">
        {packages.map((pkg) => (
          <div className="box" key={pkg.id}>
            <img src={pkg.image} alt="" />
            <div className="content">
              <h3><i className="fas fa-map-marker-alt"></i>{pkg.city}</h3>
              <p>{pkg.name}</p>
              <div className="stars">
                <FontAwesomeIcon icon={faStar} />
                <FontAwesomeIcon icon={faStar} />
                <FontAwesomeIcon icon={faStar} />
                <FontAwesomeIcon icon={faStar} />
                <FontAwesomeIcon icon={faStar} />
              </div>
              <div className="price">Rs {pkg.price} <span>Rs 15000</span></div>
              <button className="btn" onClick={() => handleAddToCart(pkg)}>Add To Cart</button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

const RatingComponent = ({ message }) => {
  return (
      <div>
          <p>{message}</p>
      </div>
  );
};

function ReviewSection() {
  const [rating, setRating] = useState(0);
  const [message, setMessage] = useState('');
  const [text, setText] = useState('');
  const [review, setReview] = useState('');

  const handleRatingChange = (newRating) => {
      setRating(newRating);
      switch (newRating) {
          case 1:
              setMessage('I just hated.');
              break;
          case 2:
              setMessage('I dont like it.');
              break;
          case 3:
              setMessage('Average.');
              break;
          case 4:
              setMessage('Very Good.');
              break;
          case 5:
              setMessage('I just love It.');
              break;
          default:
              setMessage('');
      }
  };

  const handleCancel = () => {
      setRating(0);
      setMessage('');
      setText('');
      setReview('');
  };

  const handleTextChange = (event) => {
      setText(event.target.value);
  };

  const handleSubmit = () => {
      setReview(`Rating: ${rating}, Review: ${text}`);
  };

  return (
      <section className="review" id="review">
          <h1 className="heading">
              <span>R</span>
              <span>E</span>
              <span>V</span>
              <span>I</span>
              <span>E</span>
              <span>W</span>
          </h1>
          <Container fluid>
              <Row className='justify-content-center'>
                  <Col></Col>
                  <Col className='title justify-content-center'>
                      {[1, 2, 3, 4, 5].map((star) => (
                          <span
                              key={star}
                              style={{
                                  cursor: 'pointer',
                                  color: star <= rating ? 'gold' : 'white',
                                  fontSize: '40px',
                                  marginRight: '5px',
                                  animation: 'starAnimation 0.5s'
                              }}
                              onClick={() => handleRatingChange(star)}
                          >
                              &#9733;
                          </span>
                      ))}
                      <p className='msg'>{message}</p>
                      <textarea placeholder='Describe your experience' value={text} onChange={handleTextChange}></textarea>
                      <RatingComponent />
                      <Button onClick={handleSubmit}>Submit</Button>
                      <Button variant="secondary" onClick={handleCancel}>Cancel</Button>
                  </Col>

                  <Col>

                  </Col>

              </Row>
              <Row>
                  <Col className='titlee'>
                      <span className='rate'><img className='rate' src={star} /></span>
                      <span className='rate'><img className='rate' src={star} /></span>
                      <span className='rate'><img className='rate' src={star} /></span>
                      <span className='rate'><img className='rate' src={star} /></span>
                      <br></br>
                      <p className='xt'>Always use travel online to book our holidays so easy to use and they have some great value packages </p>
                  </Col>
                  <Col className='titlee'>
                      <span className='rate'><img className='rate' src={star} /></span>
                      <span className='rate'><img className='rate' src={star} /></span>
                      <span className='rate'><img className='rate' src={star} /></span>
                      <span className='rate'><img className='rate' src={star} /></span>
                      <br></br>
                      <p className='xt'>Great services..</p>
                  </Col>
                  <Col className='titlee'>
                      <span className='rate'><img className='rate' src={star} /></span>
                      <span className='rate'><img className='rate' src={star} /></span>
                      <span className='rate'><img className='rate' src={star} /></span>
                      <br></br>
                      <p className='xt'>Very fast responses and easy to deal with.</p>
                  </Col>
              </Row>
              <Row>
                  <Col className='titlee'>
                      <span className='rate'><img className='rate' src={star} /></span>
                      <span className='rate'><img className='rate' src={star} /></span>
                      <span className='rate'><img className='rate' src={star} /></span>
                      <span className='rate'><img className='rate' src={star} /></span>
                      <br></br>
                      <p className='xt'>Booking got Cancelled but was rescheduled no complaints and everything was good.</p>
                  </Col>
                  <Col className='titlee'>
                      <span className='rate'><img className='rate' src={star} /></span>
                      <span className='rate'><img className='rate' src={star} /></span>
                      <span className='rate'><img className='rate' src={star} /></span>
                      <span className='rate'><img className='rate' src={star} /></span>
                      <span className='rate'><img className='rate' src={star} /></span>
                      <br></br>
                      <p className='xt'>Very responsive are holiday run so smoothly without any hassels and we had a fantastic time.</p>
                  </Col>
                  <Col className='titlee'>
                      <span className='rate'><img className='rate' src={star} /></span>
                      <br></br>
                      <p className='xt'>Not Satisfied.</p>
                  </Col>
              </Row>
          </Container>
      </section>
  );
}

function Footer() {
  return (
    <section class="footer">

        <div class="box-container">
            
            <div class="box">
                <h3>about us</h3>
                <p>Welcome to our travel booking website, your one-stop destination for planning and booking your next adventure. Whether you're dreaming of a tropical escape, a city break, or a cultural journey, we're here to make your travel aspirations a reality.
                </p>
            </div>
            <div class="box">
                <h3>branch locations</h3>
                <a href="#">india</a>
                <a href="#">USA</a>
                <a href="#">japan</a>
                <a href="#">france</a>
            </div>
            <div class="box">
                <h3>quick links</h3>
                <a href="#">home</a>
                <a href="#">book</a>
                <a href="#">packages</a>
                <a href="#">services</a>
                <a href="#">gallery</a>
                <a href="#">review</a>
                <a href="#">contact</a>
            </div>
            <div class="box">
                <h3>follow us</h3>
                <a href="#">home</a>
                <a href="#">book</a>
                <a href="#">facebook</a>
                <a href="#">instagram</a>
                <a href="#">twitter</a>
                <a href="#">linkedin</a>
            </div>
        </div>
        <h1 class="credit"> created by <span> Neeshu/Nandini/Muskan </span> | all rights reserved! </h1>
    </section>
  );
}

function App() {
  const [cartItems, setCartItems] = useState([]);
  const [cartModalOpen, setCartModalOpen] = useState(false);

  // Function to add item to cart
  const addToCart = (item) => {
    // Check if the item is already in the cart
    const existingItem = cartItems.find((cartItem) => cartItem.id === item.id);
    if (existingItem) {
      // If the item exists, increase its quantity
      const updatedCartItems = cartItems.map((cartItem) =>
        cartItem.id === item.id ? { ...cartItem, quantity: cartItem.quantity + 1 } : cartItem
      );
      setCartItems(updatedCartItems);
    } else {
      // If the item is not in the cart, add it with quantity 1
      setCartItems([...cartItems, { ...item, quantity: 1 }]);
    }
  };

  // Function to remove item from cart
  const removeFromCart = (itemToRemove) => {
    const updatedCartItems = cartItems.filter((item) => item.id !== itemToRemove.id);
    setCartItems(updatedCartItems);
  };

  // Function to open cart modal
  const openCartModal = () => {
    setCartModalOpen(true);
  };

  // Function to close cart modal
  const closeCartModal = () => {
    setCartModalOpen(false);
  };

  return (
    <div>
      <Header totalItems={cartItems.length} openCartModal={openCartModal} />
      <HomeSection />
      <PackagesSection addToCart={addToCart} />
      <ReviewSection />
      <Footer />
      {/* Render CartModal only when cartModalOpen is true */}
      {cartModalOpen && (
        <CartModal cartItems={cartItems} closeModal={closeCartModal} removeFromCart={removeFromCart} />
      )}
    </div>
  );
}

export default App;
