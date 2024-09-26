import './ButtonBuy.css';
import arrow from "../../images/arrow.png"
import { buyButtonText } from './buyButtonText';

export const ButtonBuy = ({ language }) => {
    return (
        <button className="button button-buy">
            {buyButtonText[language]}
            <img className="button-arrow" src={arrow} alt="arrow"></img>
        </button>
    )
}