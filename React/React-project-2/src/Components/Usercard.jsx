import love from "../assets/love.jpg"
import "./Usercard.css"
const Usercard = (props) => {
    return (

        <div className="card">
            <h1>{props.name}</h1>
            <img id="love-img" src={love} alt="love" />
            <p>Lorem ipsum dolor sit amet</p>
        </div>

    );
};

export default Usercard;
