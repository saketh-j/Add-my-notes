import React, { useState } from 'react';
import { useLocation} from 'react-router-dom';
import Navbar from '../components/navbar';


const Home = (props) => {
  const location = useLocation();
  const [inputValue, setInputValue] = useState('');
  const [notes, setNotes] = useState([]);

  const handleInputChange = (event) => {
    setInputValue(event.target.value);
  };

  const handleSaveNote = () => {
    if (inputValue.trim() !== '') {
      const newNote = inputValue;
      setNotes([...notes, newNote]);
      setInputValue('');
    }
  };

  const handleLogout = () => {
    window.location.href = '/login';
  };

  return (
    <>
      <div>
        <Navbar/>
      </div>
      <div className='main'>
        <div className='w-heading'>
          Welcome, {location.state.id}
        </div>
        <div>
          <button className='button' onClick={handleLogout}>Logout</button>
        </div>
      </div>
      <div className='main-home'>
        <div className='right-part'>
          <h1 className='heading'>Add My Notes</h1>
          <input
            type="text"
            className='todo-input'
            placeholder='Type Message Here'
            value={inputValue}
            onChange={handleInputChange}
          /><br />
          <button className='input-btn' onClick={handleSaveNote}>Save</button>
        </div>
        <div className='line'></div>
        <div className='left-part'>
          <h1 className='heading1'>All notes</h1>
         
          <div className='notes-list'>
            {notes.map((note, index) => (
              <div key={index} className='note-box'>{note}</div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}

export default Home;
