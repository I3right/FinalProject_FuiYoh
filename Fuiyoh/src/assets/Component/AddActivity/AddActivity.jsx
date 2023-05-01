import React, { useState } from "react";
import ActivitySelector from "../Activity/ActivitySelector";
import LayoutSignin from "../Layout/LayoutSignin";
import "./AddActivity.css";
import Walking from "../Activity/Walking";

const AddActivity = () => {
  const [activityType, setActivityType] = useState("");

  console.log(activityType);
  const setActivity = (activity) => {
    setActivityType(activity);
  };

  return (
    <LayoutSignin>
      <div className="addActivity">
        <ActivitySelector setActivity={setActivity} />

        {activityType === "walking" && <Walking />}
        {activityType === "running" && <Walking />}
        {activityType === "cycling" && <Walking />}
        {activityType === "hiking" && <Walking />}
        {activityType === "swimming" && <Walking />}
      </div>
    </LayoutSignin>
  );
};

export default AddActivity;
