import html from './assets/html.png';

function Content(props) {
    return (
        <div className="card">
            <img src={html} alt="" />
            <h4>
                This is a special content for the {props.name}
            </h4>
            <p>
                Lorem ipsum dolor sit amet {props.price} adipisicing elit. Quia, laudantium?
            </p>
            <p>
                Ratings: {props.ratinng}
            </p>
        </div>
    );
}

Content.defaultProps = {
    name: "HTML",
    price: "100",
    ratinng: "⭐⭐⭐"
};
export default Content;