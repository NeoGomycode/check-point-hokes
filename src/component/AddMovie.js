import React, { useState } from 'react'
import Modal from 'react-modal';
import StartRating from './StartRating';

const AddMovie = ({ handleadd }) => {
  const [form, setForm] = useState(
    {
      name: "",
      date: "",
      image: "",
      rating: 1,

    }
  )
  const customStyles = {
    content: {
      top: '50%',
      left: '50%',
      right: 'auto',
      bottom: 'auto',
      marginRight: '-50%',
      transform: 'translate(-50%, -50%)',
    },
  };
  Modal.setAppElement('#root');
  const handlsubmit = (e) => {
    e.preventDefault();
    let newmovie = {
      ...form, id: Math.random()
    }
    handleadd(newmovie)
    setForm({
      name: "",
      date: "",
      image: "",
      rating: 1,

    }

    )
    closeModal();
  }
  const handlechage = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value })
  }

  const handlerate = (newrate) => {
    setForm({ ...form, rating: newrate })
  }
  const [modalIsOpen, setIsOpen] = useState(false);



  function openModal() {
    setIsOpen(true);
  }



  function closeModal() {
    setIsOpen(false);
  }
  return (
    <div>
      <button className="btn add-movie-btn" onClick={openModal}>add movie</button>
      <Modal
        isOpen={modalIsOpen}

        onRequestClose={closeModal}
        style={customStyles}

      >
        <div> <h1>add movie</h1> </div>
        <form onSubmit={handlsubmit} >
          <label for="" >name movies </label>
          <input type="text" name="name" onChange={handlechage} required />
          <label for="" >image </label>
          <input type="url" name="image" onChange={handlechage} required />
          <label for="" >Date </label>
          <input type="date" name="date" onChange={handlechage} required />
          <label for="" >rate </label>
          <StartRating  rate={form.rating} handlerate={handlerate}/>
          <button className="btn btn-primary" >add</button>
          <button className="btn btn-danger" onClick={closeModal}>cancel</button>
        </form>
      </Modal>
    </div>
  )
}

export default AddMovie