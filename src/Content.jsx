import html from "./assets/html.png";
import propTypes from "prop-types";
function Content(props) {
  if (props.show) {
    return (
      <div className="card">
        <img src={html} alt="" />
        <h4>This is a special content for the {props.name}</h4>
        <p>
          Lorem ipsum dolor sit amet {props.price} adipisicing elit. Quia,
          laudantium?
        </p>
        <p>Ratings: {props.ratinng}</p>
      </div>
    );
  } else {
    return (
      <div className="card">
        <img src={html} alt="" />
        <h4>This is a special content for the {props.name}</h4>
        <p>
          Lorem ipsum dolor sit amet {props.price} adipisicing elit. Quia,
          laudantium?
        </p>
        Content is Not Availabe Currently!!
      </div>
    );
  }
}

Content.defaultProps = {
  name: "HTML",
  price: "100",
  ratinng: "⭐⭐⭐",
};

Content.propTypes = {
  name: propTypes.string,
  price: propTypes.number,
  show: propTypes.bool
};

export default Content;
