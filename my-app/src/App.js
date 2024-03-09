import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './App.css'

// Карточка компонента
const Card = ({ item }) => {
  const [liked, setLiked] = useState(false);

  const handleLikeToggle = () => {
    setLiked(!liked);
  };

  return (
    <div className={`card ${liked ? 'like' : ''}`}>
      <img src={item.image} alt="item" />
      <button onClick={handleLikeToggle}>{liked ? 'Unlike' : 'Like'}</button>
    </div>
  );
};

// Список карточек компонента
const CardList = ({ items }) => {
  return (
    <div className="card-list">
      {items.map((item, index) => (
        <Card key={index} item={item} />
      ))}
    </div>
  );
};

// Модальное окно компонента
const Modal = ({ isOpen, onClose }) => {
  return (
    isOpen && (
      <div className="modal">
        <button onClick={onClose}>Close</button>
        <p>Modal content goes here</p>
      </div>
    )
  );
};

// Главный компонент
const App = () => {
  const [items, setItems] = useState([]);
  const [modalOpen, setModalOpen] = useState(false);

  useEffect(() => {
    // Получение данных из API при загрузке компонента
    axios.get('https://dog.ceo/api/breeds/image/random/10')
      .then(response => {
        setItems(response.data.message.map((image, index) => ({
          id: index,
          image: image
        })));
      })
      .catch(error => {
        console.error('Error fetching data:', error);
      });
  }, []);

  const handleModalToggle = () => {
    setModalOpen(!modalOpen);
  };

  return (
    <div className="app">
      <h1>My App</h1>
      <button onClick={handleModalToggle}>Toggle Modal</button>
      <CardList items={items} />
      <Modal isOpen={modalOpen} onClose={handleModalToggle} />
    </div>
  );
};

export default App;
