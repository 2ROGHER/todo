import PropTypes from "prop-types";
// Let's import styles from the '../../styles/css/task.css' file.
import "./task.css";

import { IoIosNotifications } from "react-icons/io";
import { MdFavorite } from "react-icons/md";
import { MdFavoriteBorder } from "react-icons/md"; // unliked
import { IoMdArchive } from "react-icons/io";
import { RiDeleteBin6Line } from "react-icons/ri";
import { IoCloudDownloadOutline } from "react-icons/io5";
import { MdContentCopy } from "react-icons/md";
import { PiPaintBucketFill } from "react-icons/pi";
import { IoShareSocialOutline } from "react-icons/io5";
import { GrMoreVertical } from "react-icons/gr";
import { TbDragDrop } from "react-icons/tb";
import { MdOutlineDoneOutline } from "react-icons/md";

const handleChangeCompleted = () => {};

const Task = ({
  data,
  onDeleteTask,
  onHandleUpdateTask,
  onCompleted,
  handleEditTask,
  onOpenSideMenubar,
}) => {
  return (
    <>
      {data?.map((t, i) => {
        console.log(t);
        return (
          <div className="t-list-container" key={i}>
            <span>
              <TbDragDrop />
            </span>
            <div className="t-list-i-completed">
              {t.completed ? (
                <input
                  type="radio"
                  value={true}
                  onClick={() => onCompleted(t.id)}
                />
              ) : (
                <MdOutlineDoneOutline id="t-done-icon" />
              )}
            </div>
            <h1
              className={
                t.completed ? "t-list-title" : "t-list-title task-completed"
              }
            >
              {t.title}
            </h1>
            <div
              className={
                t.completed ? "t-list-desc" : "t-list-desc task-completed"
              }
            >
              {t.description}
            </div>
            <div className={t.completed ? "t-list-created" : "t-list-created task-completed"}>
              <span>{t.date}</span>
            </div>
            <section className="t-list-footer-menu">
              <div id="t-i-1">
                <IoIosNotifications />
              </div>
              <div id="t-i-2">
                <IoMdArchive onClick={() => console.log("hola")} />
              </div>
              <div id="t-i-3">
                <MdFavoriteBorder />
              </div>
              <div id="t-i-4">
                <PiPaintBucketFill />
              </div>
              <div id="t-i-5">
                <MdContentCopy />
              </div>
              <div id="t-i-6">
                <GrMoreVertical
                  id="t-f-menu"
                  onClick={() => onOpenSideMenubar(i)}
                />
                <section id={`t-sidemenu-${i}`} className="t-list-sidemenu">
                  <div className="t-list-shared">
                    <IoShareSocialOutline />
                    <span>Share task</span>
                  </div>
                  <div className="t-list-downloand">
                    <IoCloudDownloadOutline />
                    <span>Save task</span>
                  </div>
                </section>
              </div>
              {/* // This is so important to show the side menu */}
            </section>
          </div>
        );
      })}
    </>
  );
};

Task.propTypes = {
  data: PropTypes.array,
  onDeleteTask: PropTypes.func.isRequired,
  onHandleUpdateTask: PropTypes.func.isRequired,
  onCompleted: PropTypes.func.isRequired,
  handleEditTask: PropTypes.func.isRequired,
  onOpenSideMenubar: PropTypes.func.isRequired,
};

export default Task;
