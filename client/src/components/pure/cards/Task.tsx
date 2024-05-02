import ColorPicker from "../../modules/colorpicker/ColorPicker";
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
    <div className="border m-16 p-16" style={{ background: color }}>
      <header>
        <div className=" flex flex-align-center text-size-28 text-upper text-weight-6 letter-spacing-2 text-underline">
          <span className="flex-center m-r-16">
            <svg
              width="8.57"
              height="24"
              viewBox="0 0 5 14"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g id="drag-solid">
                <path
                  id="drago-solid"
                  d="M2 1C2 1.26522 1.89464 1.51957 1.70711 1.70711C1.51957 1.89464 1.26522 2 1 2C0.734784 2 0.48043 1.89464 0.292893 1.70711C0.105357 1.51957 0 1.26522 0 1C0 0.734784 0.105357 0.48043 0.292893 0.292893C0.48043 0.105357 0.734784 0 1 0C1.26522 0 1.51957 0.105357 1.70711 0.292893C1.89464 0.48043 2 0.734784 2 1ZM5 1C5 1.26522 4.89464 1.51957 4.70711 1.70711C4.51957 1.89464 4.26522 2 4 2C3.73478 2 3.48043 1.89464 3.29289 1.70711C3.10536 1.51957 3 1.26522 3 1C3 0.734784 3.10536 0.48043 3.29289 0.292893C3.48043 0.105357 3.73478 0 4 0C4.26522 0 4.51957 0.105357 4.70711 0.292893C4.89464 0.48043 5 0.734784 5 1ZM2 4C2 4.26522 1.89464 4.51957 1.70711 4.70711C1.51957 4.89464 1.26522 5 1 5C0.734784 5 0.48043 4.89464 0.292893 4.70711C0.105357 4.51957 0 4.26522 0 4C0 3.73478 0.105357 3.48043 0.292893 3.29289C0.48043 3.10536 0.734784 3 1 3C1.26522 3 1.51957 3.10536 1.70711 3.29289C1.89464 3.48043 2 3.73478 2 4ZM5 4C5 4.26522 4.89464 4.51957 4.70711 4.70711C4.51957 4.89464 4.26522 5 4 5C3.73478 5 3.48043 4.89464 3.29289 4.70711C3.10536 4.51957 3 4.26522 3 4C3 3.73478 3.10536 3.48043 3.29289 3.29289C3.48043 3.10536 3.73478 3 4 3C4.26522 3 4.51957 3.10536 4.70711 3.29289C4.89464 3.48043 5 3.73478 5 4ZM2 7C2 7.26522 1.89464 7.51957 1.70711 7.70711C1.51957 7.89464 1.26522 8 1 8C0.734784 8 0.48043 7.89464 0.292893 7.70711C0.105357 7.51957 0 7.26522 0 7C0 6.73478 0.105357 6.48043 0.292893 6.29289C0.48043 6.10536 0.734784 6 1 6C1.26522 6 1.51957 6.10536 1.70711 6.29289C1.89464 6.48043 2 6.73478 2 7ZM5 7C5 7.26522 4.89464 7.51957 4.70711 7.70711C4.51957 7.89464 4.26522 8 4 8C3.73478 8 3.48043 7.89464 3.29289 7.70711C3.10536 7.51957 3 7.26522 3 7C3 6.73478 3.10536 6.48043 3.29289 6.29289C3.48043 6.10536 3.73478 6 4 6C4.26522 6 4.51957 6.10536 4.70711 6.29289C4.89464 6.48043 5 6.73478 5 7ZM2 10C2 10.2652 1.89464 10.5196 1.70711 10.7071C1.51957 10.8946 1.26522 11 1 11C0.734784 11 0.48043 10.8946 0.292893 10.7071C0.105357 10.5196 0 10.2652 0 10C0 9.73478 0.105357 9.48043 0.292893 9.29289C0.48043 9.10536 0.734784 9 1 9C1.26522 9 1.51957 9.10536 1.70711 9.29289C1.89464 9.48043 2 9.73478 2 10ZM5 10C5 10.2652 4.89464 10.5196 4.70711 10.7071C4.51957 10.8946 4.26522 11 4 11C3.73478 11 3.48043 10.8946 3.29289 10.7071C3.10536 10.5196 3 10.2652 3 10C3 9.73478 3.10536 9.48043 3.29289 9.29289C3.48043 9.10536 3.73478 9 4 9C4.26522 9 4.51957 9.10536 4.70711 9.29289C4.89464 9.48043 5 9.73478 5 10ZM2 13C2 13.2652 1.89464 13.5196 1.70711 13.7071C1.51957 13.8946 1.26522 14 1 14C0.734784 14 0.48043 13.8946 0.292893 13.7071C0.105357 13.5196 0 13.2652 0 13C0 12.7348 0.105357 12.4804 0.292893 12.2929C0.48043 12.1054 0.734784 12 1 12C1.26522 12 1.51957 12.1054 1.70711 12.2929C1.89464 12.4804 2 12.7348 2 13ZM5 13C5 13.2652 4.89464 13.5196 4.70711 13.7071C4.51957 13.8946 4.26522 14 4 14C3.73478 14 3.48043 13.8946 3.29289 13.7071C3.10536 13.5196 3 13.2652 3 13C3 12.7348 3.10536 12.4804 3.29289 12.2929C3.48043 12.1054 3.73478 12 4 12C4.26522 12 4.51957 12.1054 4.70711 12.2929C4.89464 12.4804 5 12.7348 5 13Z"
                  fill="#222"
                />
              </g>
            </svg>
          </span>
          <span>#</span> {tag}
        </div>
        <h2 className="text-color-black text-upper text-size-49 letter-spacing-1">
          {title}
        </h2>
      </header>
      <p className="text-size-16">{description}</p>
      <footer className="task-footer m-t-32 flex-space-around">
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
          {date.getFullYear()}, {date.getHours()}:{date.getMinutes()}{" "}
          {date.getHours() > 12 ? "P.M." : "A.M."}
        </div>
      </footer>
    </div>
  );
};

export default Task;
