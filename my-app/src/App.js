import React, { useState, useEffect } from 'react';
import axios from 'axios';
import CardList from './Components/CardList/CardList';
import Modal from './Components/Modal/Modal';
import './App.css';

const App = () => {
  const [items, setItems] = useState([]);
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedItemIndex, setSelectedItemIndex] = useState(null);

  useEffect(() => {
    axios.get('https://api.thecatapi.com/v1/images/search?limit=10')
      .then(response => {
        setItems(response.data);
      })
      .catch(error => {
        console.error('Error fetching data:', error);
      });
  }, []);

  const handleModalToggle = () => {
    setModalOpen(!modalOpen);
  };

  const handleContextMenu = (index) => {
    setSelectedItemIndex(index);
    setModalOpen(true);
  };

  const handleDelete = (index) => {
    const updatedItems = [...items];
    updatedItems.splice(index, 1);
    setItems(updatedItems);
    setModalOpen(true);
  };

  const handleEdit = (index) => {
    console.log('Edit item:', index);
    setModalOpen(false);
  };

  const handleAdd = () => {
    axios.get('https://api.thecatapi.com/v1/images/search?limit=1')
      .then(response => {
        const newItems = [...items, response.data[0]];
        setItems(newItems);
      })
      .catch(error => {
        console.error('Error fetching data:', error);
      });
  };

  return (
    <div className="app">
      <h1>Тут котики</h1>
      <button onClick={handleModalToggle}>Менюшка</button>
      <CardList items={items} onContextMenu={handleContextMenu} />
      <Modal isOpen={modalOpen} onClose={handleModalToggle} selectedItemIndex={selectedItemIndex} onDelete={handleDelete} onEdit={handleEdit} onAdd={handleAdd} />
    </div>
  );
};

export default App;
