import React, { useState } from "react";
import inputImage from "../../Picture/activity/AddPicture.svg";
import "./Css/Walking.css";

const Walking = () => {
  const [title, setTitle] = useState("");
  const [distance, setDistance] = useState("");
  const [duration, setDuration] = useState("");
  const [location, setLocation] = useState("");
  const [date, setDate] = useState("");
  const [description, setDescription] = useState("");
  const [feeling, setFeeling] = useState("");

  return (
    <div className="addActivity-form">
      <h2>Add Your Activity</h2>
      <form className="addActivty">
        <label className="title">
          <h3>Title</h3>
          <input
            type="text"
            value={title}
            onChange={(title) => inputEmail(title)}
            placeholder="Add Your Title"
          />
        </label>

        <label className="distance">
          <h3>Distance</h3>
          <input
            type="number"
            value={distance}
            onChange={(distance) => inputEmail(distance)}
            placeholder="Add Your distance(kilometer)"
          />
        </label>

        <label className="duration">
          <h3>Duration</h3>
          <input
            type="number"
            value={duration}
            onChange={(duration) => inputEmail(duration)}
            placeholder="Add Your duration(minutes)"
          />
        </label>

        <label className="location">
          <h3>Location</h3>
          <input
            type="text"
            value={location}
            onChange={(location) => inputEmail(location)}
            placeholder="Add Your location"
          />
        </label>

        <label className="date">
          <h3>Date</h3>
          <input
            type="date"
            value={date}
            onChange={(date) => inputEmail(date)}
            placeholder="Add Your date"
          />
        </label>

        <label className="description">
          <h3>Description</h3>
          <input
            type="text"
            value={description}
            onChange={(description) => inputEmail(description)}
            placeholder="Add Your description"
          />
        </label>

        <label className="feeling">
          <h3>Feeling</h3>
          <input
            type="text"
            value={feeling}
            onChange={(feeling) => inputEmail(feeling)}
            placeholder="Add Your feeling"
          />
        </label>

        <label className="image">
          <h3>Picture</h3>
          <div>
            <img src={inputImage} alt="icon input for image" />
          </div>
          <input type="file" />
        </label>

        <button type="submit" className="register-btn">
          Add Activity
        </button>
        <button onClick={() => handleClick()} className="btn-back">
          Cancel
        </button>
      </form>
    </div>
  );
};

export default Walking;
