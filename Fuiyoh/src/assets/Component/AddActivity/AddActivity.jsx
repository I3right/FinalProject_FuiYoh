import React, { useState } from "react";
import ActivitySelector from "../Activity/ActivitySelector";
import LayoutNormal from "../LayoutNormal/LayoutNormal";
import "./AddActivity.css";
import Walking from "../Activity/Walking";

const AddActivity = () => {
  const [activityType, setActivityType] = useState("");

  console.log(activityType);
  const setActivity = (activity) => {
    setActivityType(activity);
  };

  return (
    <LayoutNormal>
      <div className="addActivity">
        <ActivitySelector setActivity={setActivity} />

        {activityType === "walking" && <Walking/>}
        {activityType === "running" && <Walking/>}
        {activityType === "cycling" && <Walking/>}
        {activityType === "hiking" && <Walking/>}
        {activityType === "swimming" && <Walking/>}
      </div>
    </LayoutNormal>
  );
};

export default AddActivity;
