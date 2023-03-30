const Notification = (props) => {
  const {message,class,image} = props;
  return (<div className = `box ${class}`>
      <img src = {image} className = "icon" />
      <p className = "msg-text">{message}</p>
  </div>)
};

const element = (
  <div className="main-container">
    <h1 className="first-head">Notifications</h1>
    <div className="msgs-container">
      <Notification message="Information message" class="info" image = "https://assets.ccbp.in/frontend/react-js/primary-icon-img.png"/>
      <Notification message="Success message" class="success" image = "https://assets.ccbp.in/frontend/react-js/success-icon-img.png"/>
      <Notification message="Warning message" class="warning" image = "https://assets.ccbp.in/frontend/react-js/warning-icon-img.png"/>
      <Notification message="Danger message" class="danger" image = "https://assets.ccbp.in/frontend/react-js/danger-icon-img.png"/>
    </div>
  </div>
);

ReactDOM.render(element, document.getElementById("root"));
