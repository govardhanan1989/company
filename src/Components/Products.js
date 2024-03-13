import React, { useState } from 'react';
import Image1 from '../Images/1.jpg';
import Image2 from '../Images/2.jpg';
import Image3 from '../Images/3.jpg';
import Image4 from '../Images/4.jpg';
import '../Css/Products.css';
import axios from 'axios';

const Products = () => {
  const [name, setName] = useState('');
  const [product, setProduct] = useState('');
  const [quantity, setQuantity] = useState('');
  const handlePost = () => {
    axios.post('http://localhost:3001/posts ', { name, product, quantity })
    .then(() => {
      alert("Enquiry Submitted Successfully")  
      setName('');
      setProduct('');
      setQuantity('');
    })
    .catch(() => {
      alert("reenter your data")        
    });
  }
    
  const [data, setData] = useState([]);
  const getPost = () => {
    axios.get('http://localhost:3001/posts')
        .then((res) => {
            setData(res.data);
        })
        .catch(() => {
            alert("cannot find the data")
        })
}
  return (
    <div>
      <div className='images'>
        <img src={Image1} alt="bag" />
        <img src={Image2} alt="bag" />
        <img src={Image3} alt="bag" />
        <img src={Image4} alt="bag" />
      </div>
      <br/>
      <br/>
        <div className='enquiry'>
        <h1>ENQUIRY</h1>
        <label htmlFor='name'><h4>Name/Company Name </h4></label>
        <input className='post' placeholder='Your name' value={name} onChange={(e) => setName(e.target.value)} />
        <label htmlFor='requirements'>Materialss</label>
        <input className='post' placeholder='Product' value={product} onChange={(e) => setProduct(e.target.value)} />
        <label htmlFor='quantity'>Quantity</label>
        <input className='post' placeholder='Quantity' value={quantity} onChange={(e) => setQuantity(e.target.value)} /><br /> <br />
        <button onClick={handlePost}>Post</button>
        <button onClick={getPost}>Get</button>
<ol>
    {
        data.map((items) => (
            <li key={items.id}>{items.name}</li>
        ))
    }
</ol>
</div>

      </div>

  );
}

export default Products;
