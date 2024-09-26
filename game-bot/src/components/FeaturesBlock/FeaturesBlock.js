import "./FeaturesBlock.css";
import featureImg from "../../images/mob.png";
import rightArrow from "../../images/black right arrow.png";
import leftArrow from "../../images/black left arrow.png";
import playVideo from "../../images/play video.png";
import { ButtonBuy } from "../ButtonBuy/ButtonBuy";
import { featuresText } from "./featuresText";

export const FeaturesBlock = ({ language }) => {
    return (
        <div className="features-block">
            <div className="features-img">
                <img className="phone-image" src={featureImg} alt="phone-image"/>
                <div className="arrow_area">
                    <button className="arrow_area-button">
                        <img className="arrow-img" src={leftArrow} alt="leftArrow"></img>
                    </button>
                    <button className="arrow_area-button">
                        <img className="arrow-img" src={rightArrow} alt="rightArrow"></img>
                    </button>
                </div>
            </div>
            <div className="features-content">
                <h2 className="features-title">{featuresText[language].title}</h2>
                <ul className="features-list">
                    <li className="features-list-item">{featuresText[language].feat1}</li>
                    <li className="features-list-item">{featuresText[language].feat2}</li>
                    <li className="features-list-item">{featuresText[language].feat3}</li>
                    <li className="features-list-item">{featuresText[language].feat4}</li>
                </ul>
                <div className="buttons_area">
                    <ButtonBuy language={language}/>
                    <button className="button features_watch-button">
                        {featuresText[language].watchButton}
                        <img className="watch-button-img" src={playVideo} alt="play video"/>
                    </button>
                </div>
            </div>
        </div>
    )
}