import ColorPicker from "../../modules/colorpicker/ColorPicker";
import SideBar from "../../modules/sidebar/SideBar";
import "./task.css";

interface TaskProps {
  color: string;
  tag: string;
  title: string;
  description?: string;
  listItem?: string;
  date: Date;
}

const Task: React.FC<TaskProps> = ({
  tag,
  title,
  description,
  listItem,
  color,
  date,
}): JSX.Element => {
  return (
    <div className="border m-16 p-16 relative" style={{ background: color }}>
      {/* Here goes the sidebar module */}
      <SideBar />
      <header>
        <div className="flex flex-space-between flex-align-center cursor-pointer">
          <div className=" flex flex-align-center text-size-28 text-upper text-weight-6 letter-spacing-2 text-underline">
            <span>#</span> {tag}
          </div>
          <div>menu</div>
        </div>
        <h2 className="text-color-black text-upper text-size-49 letter-spacing-1 font-weight-6">
          {title}
        </h2>
      </header>
      <p className="text-size-16">{description}</p>
      <footer className="task-footer m-t-32 flex-space-between">
        <div className="flex flex-gap-4 ">
          {/* here we put the color bases for the task post */}
          <div>
            <ColorPicker color="#C8EAF8" />
          </div>
          <div>
            <ColorPicker color="#C8F8CD" />
          </div>
          <div>
            <ColorPicker color="#F8DFC8" />
          </div>
        </div>
        <div className=" flex  font-family-qs text-weight-6 text-size-16">
          {date.getDay()}{" "}
          {date.toLocaleDateString("default", { month: "long" })}{" "}
          {date.getFullYear()}, {date.getHours()}:
          {date.getMinutes().toString().length <= 2
            ? "0" + date.getMinutes()
            : date.getMinutes()}{" "}
          {date.getHours() > 12 ? "P.M." : "A.M."}
        </div>
      </footer>
    </div>
  );
};

export default Task;
