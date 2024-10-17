import React, { useState } from 'react';
import './styles/components/list.css';
import AddModal from './addmodal';
import ListData from './listdata';

function Todo() {
  const [showaddmodal, setshowaddmodal] = useState(false);
  const [searchtext, setsearchtext] = useState("");
  const [selectedData, setSelectedData] = useState({});

  const handleopenaddmodal = (data = {}) => {
    setSelectedData(data);  
    setshowaddmodal(true);   
  };

  const handlecloseaddmodal = () => setshowaddmodal(false);

  const handlesearchtext = (e) => {
    setsearchtext(e.target.value);
  };

  return (
    <div className="container">
      <h1 className="text-center">Welcome to My React App</h1>
      <div className='d-flex justify-content-between p-5'>
        <button type='button' className="btn btn-primary" onClick={() => handleopenaddmodal()}>Add</button>
        <div className='d-flex gap-2'>
          <input
            type='text'
            className='search p-1'
            id='search'
            placeholder='Search'
            onChange={handlesearchtext}
          />
          <button type='button' className='btn btn-primary'>Search</button>
        </div>
      </div>

      <ListData
        searchtext={searchtext}
        setSelectedData={setSelectedData}
        handleopenaddmodal={handleopenaddmodal}
      />

      <AddModal
        showaddmodal={showaddmodal}
        handlecloseaddmodal={handlecloseaddmodal}
        selectedData={selectedData}
      />
    </div>
  );
}

export default Todo;
