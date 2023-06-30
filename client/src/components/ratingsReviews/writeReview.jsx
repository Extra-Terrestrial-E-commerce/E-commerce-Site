import React from "react";
const { useState, useEffect } = React;
import apiClient from '../config/config.js';
import ImageUpload from './uploadPhotos.jsx';

const WriteReview = ({currentProduct, closeModal}) => {
  const [product_id, setProduct_id] = useState(currentProduct.id);
  const [rating, setRating] = useState(0);
  const [body, setBody] = useState("");
  const [name, setName] = useState("");
  const [recommend, setRecommend] = useState(true);
  const [email, setEmail] = useState("");
  const [photos, setPhotos] = useState([]);
  const [characteristics, setCharacteristics] = useState({});

  const containerStyles = {
    'marginTop': '10px',
    'marginBottom': '10px',
    'padding': '2px',
    'width': '300px'
  };

  const reviewParams = {
    "product_id": product_id,
    "rating": rating,
    "summary": "",
    "body": body,
    "recommend": recommend,
    "name": name,
    "email": email,
    "photos": photos,
    "characteristics": characteristics
  };


  const addReview = (params) => {
    apiClient.post('/reviews/', params )
        .then((data) => {
          console.log(data);

        })
        .catch((error) => {
          console.error(error);
        });
  };

  const clickHandler = (e) => {
    e.preventDefault();
    //addReview(reviewParams);
    console.log(reviewParams);

  }

  return (
    <div>
        <button onClick={closeModal} style={{'position': 'relative', 'left': '350px'}}>X</button>

      <h3>Write your review for {currentProduct.name} here: </h3>

      <form>

        <br/>

        <label>Star Ranking:</label>
        <br/>
        <input
        type="radio"
        name="rating"
        value="1"
        id="1"
        onChange={(e)=>{setRating(Number(e.target.value))}}
      />
      <label htmlFor="regular">1</label>

      <input
        type="radio"
        name="rating"
        value="2"
        id="2"
        onChange={(e)=>{setRating(Number(e.target.value))}}
      />
      <label htmlFor="medium">2</label>

      <input
        type="radio"
        name="rating"
        value="3"
        id="3"
        onChange={(e)=>{setRating(Number(e.target.value))}}
      />
      <label htmlFor="large">3</label>
      <input
        type="radio"
        name="rating"
        value="4"
        id="4"
        onChange={(e)=>{setRating(Number(e.target.value))}}
      />
      <label htmlFor="regular">4</label>
      <input
        type="radio"
        name="rating"
        value="5"
        id="5"
        onChange={(e)=>{setRating(Number(e.target.value))}}
      />
      <label htmlFor="regular">5</label>

        <br/>

        <label>Name:</label>
        <br/>
        <input
        style={{'marginTop': '10px', 'marginBottom': '10px', 'padding': '2px', 'width': '300px'}}
        placeholder="name"
        onChange={(e)=>{setName(e.target.value)}}></input>
        <br/>

        <label>Email:</label>
        <br/>
        <input
        placeholder="email"
        style={{'marginTop': '10px', 'marginBottom': '10px', 'padding': '2px', 'width': '300px'}}
        onChange={(e)=>{setEmail(e.target.value)}}></input>
        <br/>

        <label>Review Text:</label>
        <br/>
        <textarea
        placeholder="description"
        required
        style={{'marginTop': '10px', 'marginBottom': '10px', 'padding': '2px', 'width': '300px', 'height': '100px'}}
        minLength="50"
        maxLength="1000"
        onChange={(e)=>{setBody(e.target.value)}}></textarea>

          <br/>
          <label>Sizing:</label>

            <select name="comfort" id="comfort" style={{'marginTop': '10px', 'marginBottom': '10px'}}>
              <option value="1">Too Small</option>
              <option value="3">Perfect</option>
              <option value="5">Too Large</option>
            </select>

          <br/>
          <label >Comfort:</label>

            <select name="comfort" id="comfort" style={{'marginTop': '10px', 'marginBottom': '10px'}}>
              <option value="1">Too Soft</option>
              <option value="3">Perfect</option>
              <option value="5">Too Stiff</option>
            </select>
            <br/>

            <label>Quality:</label>

              <select name="quality" id="quality" style={{'marginTop': '10px', 'marginBottom': '10px'}}>
                <option value="1">Poor</option>
                <option value="3">Perfect</option>
                <option value="5">Too good</option>
              </select>
<br/>

              <label >Length:</label>

              <select name="length" id="length" style={{'marginTop': '10px', 'marginBottom': '10px'}}>
                <option value="1">Too Short</option>
                <option value="3">Perfect</option>
                <option value="5">Too Long</option>
              </select>
<br/>
            <ImageUpload />
            <br/>
        <button onClick={(e)=> {clickHandler(e)}}>Submit</button>

      </form>
    </div>
  )
  }

  export default WriteReview;