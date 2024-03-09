import React from 'react';

const Modal = ({ isOpen, onClose, selectedItemIndex, onDelete, onEdit, onAdd }) => {
    const handleAdd = () => {
        onAdd();
    };

    const handleDelete = () => {
        onDelete(selectedItemIndex);
    };

    const handleEdit = () => {
        onEdit(selectedItemIndex);
    };

    return (
        isOpen && (
            <figure className="modal">
                <ul>
                    <li><button onClick={handleAdd}>Добавить</button></li>
                    <li><button onClick={handleDelete}>Удалить</button></li>
                    <li><button onClick={handleEdit}>Изменить</button></li>
                    <li><button onClick={onClose}>Закрыть</button></li>
                </ul>
            </figure>
        )
    );
};

export default Modal;
