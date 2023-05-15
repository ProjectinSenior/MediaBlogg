import React, { useState } from 'react';
import axios from 'axios';

function Edit({showEdit}) {
  const [title, setTitle] = useState('');
  const [image, setImage] = useState('');
  const [description, setDescription] = useState('');
  const [date, setDate] = useState('');

  const blog = {
    title: title,
    image: image,
    description: description,
    date: date,
    user_iduser:  1
  };

  const handleUpdate = (idpost) => {
  
      axios.put(`http://localhost:3001/api/blog/${idpost}`,blog)
      .then((res)=>{
        console.log(res.data)
      })
      .catch((err)=>{console.log(err)})
    
    
  };

  return (
    <div className='edit'>
      {showEdit ? (
        <div>
          <>
            <input
              placeholder='Title'
              value={title}
              onChange={(e) => setTitle(e.target.value)}
            />
            <input
              placeholder='image'
              value={image}
              onChange={(e) => setImage(e.target.value)}
            />
            <input
              placeholder='description'
              value={description}
              onChange={(e) => setDescription(e.target.value)}
            />
            <input
              placeholder='date'
              type='date'
              value={date}
              onChange={(e) => setDate(e.target.value)}
            />

            <button onClick={() => { handleUpdate(); }}>Submit</button>
          </>
        </div>
      ) : null}
    </div>
  );
}

export default Edit;
