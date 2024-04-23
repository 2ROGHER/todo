import ControllButton from "../../modules/controlsbutton/ControlButton";
import './control.css';

export default function Control() {
  return (
    <div className="control-container">
      <ControllButton text="to do" quantity={2} color="#0AFAF2" />
      <ControllButton text="in proccess" quantity={4} />
      <ControllButton text="pending" quantity={2} />
      <ControllButton text="completed" quantity={8} />
    </div>
  );
};
