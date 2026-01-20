import React, { useState } from "react";
import { useNavigate } from "react-router-dom"; 

function TheBirthdayLetter() {
    const navigate = useNavigate();
    const [popupImage, setPopupImage] = useState(null);

    const openPopup = (imageSrc) => {
        setPopupImage(imageSrc);
    };

    const closePopup = () => {
        setPopupImage(null);
    };

    return (
        <div className="app">
            <div className="paper">
                <div className="letter">
                    <p>happy birthday ndudd!</p>
                    <p>
                        semoga hari ini penuh hal-hal kecil yang bikin kamu senyum. thank u for existing,
                        for being kind, for being strong even when life gets loud. may God favor be upon you,
                        be gracious to you, and give u peace. enjoy ur day, u deserve all the good things.
                    </p>
                    <p>
                        once more, happy birthday my beloved baby yang manis lucu menggemaskan 
                        kesayangan aku cintaku <33
                    </p>
                    <p style={{ textAlign: "right" }}>with love,</p>
                    <p style={{ textAlign: "right" }}>aiyy</p>
                </div>
            </div>

            <div className="title">
                <p>needs more?</p>
            </div>
            <div className="img-btn">
                <button className="img-button" onClick={() => openPopup("img/thanks-letter.png")}>
                    <img src="img/letter2.png" alt="letter" className="img-small"/>
                    <span className="btn-text">thanks</span>
                </button>
                <button className="img-button" onClick={() => openPopup("img/sorry-letter.png")}>
                    <img src="img/letter2.png" alt="letter" className="img-small"/>
                    <span className="btn-text">sorry</span>
                </button>
            </div>

            <div className="img-btn">
                <button className="img-button" onClick={() => openPopup("img/happy-letter.png")}>
                    <img src="img/letter2.png" alt="letter" className="img-small"/>
                    <span className="btn-text">happy</span>
                </button>
                <button className="img-button" onClick={() => openPopup("img/sad-letter.png")}>
                    <img src="img/letter2.png" alt="letter" className="img-small"/>
                    <span className="btn-text">sad</span>
                </button>
            </div>

            <button className="btn" onClick={() => navigate("/")}>
                That's It!
            </button>

            {popupImage && (
                <div className="popup-overlay" onClick={closePopup}>
                    <div className="popup-content" onClick={(e) => e.stopPropagation()}>
                        <img src={popupImage} alt="Popup" className="popup-image" />
                        <button className="close-btn" onClick={closePopup}>X</button>
                    </div>
                </div>
            )}
        </div>
    );
}

export default TheBirthdayLetter;
          
