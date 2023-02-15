import "./Notification.css";

function Notification(props) {
  // Render the content of the notification depending on its type
  let action;
  switch (props.action) {
    case "reacted":
      action = (
        <span>
          <span className="ml-2">reacted to your recent post</span>
          <a
            href="/"
            className="font-bold text-gray-500 hover:text-blue-900 ml-2"
          >
            {props.post}
          </a>
        </span>
      );
      break;
    case "followed":
      action = <span className="ml-2">followed you</span>;
      break;
    case "joined":
      action = (
        <span>
          <span className="ml-2">has joined your group</span>&nbsp;
          <a
            href="/"
            className="font-bold text-gray-500 hover:text-blue-900 ml-2"
          >
            {props.post}
          </a>
        </span>
      );
      break;
    case "message":
      action = <span className="ml-2">sent you a private message</span>;
      break;
    case "commented":
      action = <span className="ml-2">commented on your picture</span>;
      break;
    case "left":
      action = (
        <span>
          <span className="ml-2">left the group</span>&nbsp;
          <a
            href="/"
            className="font-bold text-gray-500 hover:text-blue-900 ml-2"
          >
            {props.post}
          </a>
        </span>
      );
      break;
  }

  // Render private message if applicable
  let message;
  if (props.message) {
    message = (
      <a href="/">
        <div className="border-2 md:border-0 p-3 mt-2 hover:bg-custom-blue rounded">
          <span>{props.message}</span>
        </div>
      </a>
    );
  }

  // Render posted picture if applicable
  let picture;
  if (props.action === "commented") {
    picture = (
      <div className="ml-auto">
        <a href="/">
          <img
            className="w-10 max-w-sm"
            src={props.picture}
            alt={"thumbnail for " + props.name + "'s picture"}
          />
        </a>
      </div>
    );
  }

  return (
    <div className={"rounded py-3 my-2 " + (props.unread ? "bg-unread" : "")}>
      <div className="flex flex-row text-gray-500">
        <div className="px-5">
          <img
            className="w-10 max-w-sm"
            src={props.avatar}
            alt={"profile picture for " + props.name}
          />
        </div>
        <div className="">
          <span>
            <a href="/" className="font-bold text-black hover:text-blue-900">
              {props.name}
            </a>
            {action}
            {props.unread && (
              <div className="w-3 h-3 bg-red-400 rounded-full ml-2 inline-block"></div>
            )}
          </span>

          <p className="text-gray-400">{props.time}</p>

          {message}
        </div>
        {picture}
      </div>
    </div>
  );
}

export default Notification;
