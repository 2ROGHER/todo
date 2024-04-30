import React from "react";
import "./controlbutton.css";

interface ControlButtonProps {
  text: string;
  quantity: number;
  color?:string;
  quantityColor: string;
}

const ControlButton: React.FC<ControlButtonProps> = ({ text, quantity, color, quantityColor }) => {
  return (
    <div className="control">
      <div>
        <div className="column-color" style={{background: color}}></div>
        <div>{text}</div>
        <div className="quantity" style={{background: quantityColor}}>{quantity}</div>
      </div>
      <div className="menu-icon">
        <svg
          width="4"
          height="16"
          viewBox="0 0 4 16"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g id="Frame 18">
            <g id="menu-solid">
              <path
                id="Vector"
                d="M3.84615 14.1538C3.84615 14.6435 3.65164 15.1131 3.30542 15.4593C2.9592 15.8055 2.48962 16 1.99999 16C1.51036 16 1.04079 15.8055 0.694565 15.4593C0.348344 15.1131 0.153839 14.6435 0.153839 14.1538C0.153839 13.6642 0.348344 13.1946 0.694565 12.8484C1.04079 12.5022 1.51036 12.3077 1.99999 12.3077C2.48962 12.3077 2.9592 12.5022 3.30542 12.8484C3.65164 13.1946 3.84615 13.6642 3.84615 14.1538ZM3.84615 8C3.84615 8.48963 3.65164 8.95921 3.30542 9.30543C2.9592 9.65165 2.48962 9.84615 1.99999 9.84615C1.51036 9.84615 1.04079 9.65165 0.694565 9.30543C0.348344 8.95921 0.153839 8.48963 0.153839 8C0.153839 7.51037 0.348344 7.04079 0.694565 6.69457C1.04079 6.34835 1.51036 6.15385 1.99999 6.15385C2.48962 6.15385 2.9592 6.34835 3.30542 6.69457C3.65164 7.04079 3.84615 7.51037 3.84615 8ZM3.84615 1.84615C3.84615 2.33578 3.65164 2.80536 3.30542 3.15158C2.9592 3.4978 2.48962 3.69231 1.99999 3.69231C1.51036 3.69231 1.04079 3.4978 0.694565 3.15158C0.348344 2.80536 0.153839 2.33578 0.153839 1.84615C0.153839 1.35652 0.348344 0.886947 0.694565 0.540726C1.04079 0.194505 1.51036 0 1.99999 0C2.48962 0 2.9592 0.194505 3.30542 0.540726C3.65164 0.886947 3.84615 1.35652 3.84615 1.84615Z"
                fill="#384250"
              />
            </g>
          </g>
        </svg>
      </div>
    </div>
  );
};

export default ControlButton;
