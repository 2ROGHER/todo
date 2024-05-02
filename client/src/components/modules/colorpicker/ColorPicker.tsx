import React from "react"
import "./colorpicker.css";

interface ColorPickerProps {
    color: string
}

const ColorPicker: React.FC<ColorPickerProps> = ({ color }) =>  {
  return (
    <div className="color-picker-box cursor-pointer">
        <div className="core" style={{background: `${color}`}}></div>
    </div>
  );
};

export default ColorPicker;
