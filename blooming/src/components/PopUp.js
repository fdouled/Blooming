import React from "react";
import "../components/popup.css"; 

function PopupNotice({ onClose }) {
  return (
    <div className="popup-overlay">
      <div className="popup">
        <button className="close-button" onClick={onClose}>
          &times;
        </button>
        <p className="notice-heading">Notice: Transitioning to Open Source</p>
        <p className="community">Dear Blooming Community,</p>
        <p className="notice-content">We're excited to announce that Blooming is transitioning to an open-source project! Starting from <span class="date-highlight">5/10/24</span>, Blooming will be available as an open-source resource for anyone interested in promoting female reproductive health awareness. Thank you for being a part of the Blooming community. Together, we can make a difference in promoting female reproductive health awareness and breaking down harmful stereotypes.</p>
        <p className="team">Sincerely,</p>
        <p className="team">Team Blossom</p>
      </div>
    </div>
  );
}

export default PopupNotice;


