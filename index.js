const Notification = (props) => {
  const { text, className } = { props };
};

const element = (
  <div className="container">
    <h1>{text} = "Notifications"</h1>
    <div className="imageContainer1">
      <img
        className="image1"
        src="https://assets.ccbp.in/frontend/react-js/primary-icon-img.png"
      />
      <p>Information message</p>

    <div className="imageContainer2">
      <img
        className="image2"
        src="https://assets.ccbp.in/frontend/react-js/success-icon-img.png"
      />
      <p>Success message</p>

    <div className="imageContainer3">
      <img
        className="image3"
        src="https://assets.ccbp.in/frontend/react-js/warning-icon-img.png"
      />
      <p>Warning message</p>

    <div className="imageContainer4">
      <img
        className="image4"
        src="https://assets.ccbp.in/frontend/react-js/danger-icon-img.png"
      />
      <p>Error message</p>
    </div>

  </div>
);

ReactDOM.render(element, document.getElementById("root"));
