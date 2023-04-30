import React, { useState } from "react";
import Walking from "../Activity/Walking";
import EditActivity from "../Activity/EditActivity"
import LayoutNormal from "../LayoutNormal/LayoutNormal";
import "./Dashboard.css";

const Dashboard = () => {
  const [toggleEdit,setToggleEdit] = useState(false);
  const [editCardId,seteditCardId] = useState('false');

  const addActivity = (activity) => {
    // หา id ของการ์ดใบสุดท้ายเพื่อมาสร้าง id ใหม่
    const lastId = Math.max(...activityCard.map((ele) => ele.id));
    const newId = lastId === -Infinity ? 0 : lastId + 1;
    //นำ object ของ activityCard แล้วนำไป set id แล้ว concat ค่าใน object ที่เหลือ
    const newActivity = { id: newId, ...activity };
    const newActivities = [...activityCard, newActivity];
    setActivityCard(newActivities);
  }; 

  const deleteActivity = (id) => {
    // filter การ์ดให้แสดงผลการ์ดที่เลข id ที่ไม่มีเลข id ที่กำหนดไว้
    setActivityCard((prevActivities) =>
      prevActivities.filter((activity) => activity.id !== id)
    );
  };

  const [editActivityList, setEditActivityList] = useState({
    id: "",
    title: "",
    distance: "",
    duration: "",
    location: "",
    date: "",
    description: "",
    feeling: "",
    img: "",
  });

  const editActivity = (id) => {
    setToggleEdit(true)
    seteditCardId(id)
    setEditActivityList(activityCard[--id])
  };

  const [activityCard, setActivityCard] = useState([
    {
      id: 1,
      title: "อยากเหนื่อย card1",
      distance: "10",
      duration: "10",
      location: "lumpini park",
      date: "2023-04-01",
      description: "เหนื่อยจังไม่ไหวแล้ววว",
      feeling: "",
      img: "",
    },
    {
      id: 2,
      title: "อยากเหนื่อย card2",
      distance: "20",
      duration: "20",
      location: "Suan dok park",
      date: "2023-04-02",
      description: "เหนื่อยจังไม่ไหวแล้ววว",
      feeling: "",
      img: "",
    },
    {
      id: 3,
      title: "อยากเหนื่อย card3",
      distance: "30",
      duration: "30",
      location: "lumpini park",
      date: "2023-04-03",
      description: "เหนื่อยจังไม่ไหวแล้ววว",
      feeling: "",
      img: "",
    },
  ]);

  const cards = activityCard.map((card) => (
    <div className="dasboard-card-container" key={card.id}>
      <div className="activity-card-top">
        <img />
        <h4>{card.title}</h4>
        <p>{card.location}</p>
        <img src={card.feeling} />
        <img src={card.img} />
      </div>

      <div>
        <div>
          <p>{card.description}</p>
        </div>
        <div className="activity-card-bottom">
          <div>
            <h6>Distance</h6>
            <h3>{card.distance}</h3>
            <span></span>
          </div>
          <div>
            <h6>Time</h6>
            <h3>{card.duration}</h3>
            <span></span>
          </div>
          <div>
            <h6>pace</h6>
            <h3>{card.distance / card.duration}</h3>
            <span>KM/Mins</span>
          </div>
        </div>
      </div>

      <div>
        <img></img>
      </div>

      <div className="card-button">
        <button onClick={() => deleteActivity(card.id)}>delete</button>
        <button onClick={() => editActivity(card.id)}>edit</button>
      </div>
    </div>
  ));

  return (
    <LayoutNormal>
      <div className="dasboard-card-section">
        <div>
          <h4>“The hardest thing about exercise is start doing it” </h4>
        </div>
      </div>
      .
      <div className="dasboard-card-section">
        {!toggleEdit && <Walking onAdd={addActivity}/>}
        {toggleEdit && <EditActivity editActivityList={editActivityList} setToggleEdit={setToggleEdit} setEditActivityList={setEditActivityList} activityCard={activityCard} setActivityCard={setActivityCard} editCardId={editCardId}/>}
        {cards.reverse()}
      </div>
    </LayoutNormal>
  );
};

export default Dashboard;
