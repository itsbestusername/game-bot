import "./HeaderContent.css"
import heroes from "../../images/header-heroes.png"
import { ButtonBuy } from "../ButtonBuy/ButtonBuy"
import { headerText } from "./headerText";

export const HeaderContent = ({ language }) => {
    return (
        <div className="header_content">
            <div className="layout"></div>
            <div className="back-picture"></div>
            <div className="left-back-circle"></div>
            <div className="right-back-circle"></div>
            <div className="header-text-area">
                <h1 className="header-title">{headerText[language].title}</h1>
                <div className="title-line"></div>
                <p className="header-text">{headerText[language].text1}</p>
                <p className="header-text">{headerText[language].text2}</p>
                <div className="buttons_area">
                    <ButtonBuy language={language}/>
                    <button className="button button-video">{headerText[language].watchButton}</button>
                </div>
            </div>
            <div className="img-area">
                <img src={heroes} alt="heroes"></img>
            </div>
        </div>
    )
}