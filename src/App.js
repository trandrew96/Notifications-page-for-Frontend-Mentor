import Notification from "./Notification";
import Notifications from "./api-response.json";
import { useState } from "react";
import "./App.css";

function App() {
  const [count, setCount] = useState(3);

  const notifications = Notifications["notifications"].map((data) => (
    <Notification
      avatar={process.env.PUBLIC_URL + data.avatar}
      name={data.name}
      action={data.action}
      post={data.reference_name}
      time={data.time}
      message={data.message}
      picture={data.picture}
      unread={count === 0 ? "" : data.unread}
    ></Notification>
  ));

  return (
    <div className="container mx-auto px-3 md:px-7 pt-3 md:pt-5 md:my-12 max-w-3xl bg-white rounded">
      {/* navbar */}
      <div className="flex items-center my-6">
        <div className="font-extrabold text-lg">Notifications</div>
        <div className="font-extrabold text-white bg-blue-900 px-3 rounded ml-2 text-lg">
          {count}
        </div>
        <div className="ml-auto font-medium text-gray-500">
          <button onClick={() => setCount(0)}>Mark all as read</button>
        </div>
      </div>
      <div>{notifications}</div>
    </div>
  );
}

export default App;
