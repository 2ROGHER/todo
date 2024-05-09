import TaskFooter from "../../modules/footer/TaskFooter";
import "./newtask.css";

export default function NewTask(): JSX.Element {
  return (
    <div className="bg-color-white border btn-border p-16">
      <div className="flex flex-align-center flex-gap-8 relative">
        <span>
          <svg
            width="28"
            height="28"
            viewBox="0 0 28 28"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g id="tag-solid">
              <path
                id="tag-solid_2"
                d="M2.06098 0C1.51437 0 0.990154 0.217138 0.603646 0.603646C0.217138 0.990154 0 1.51437 0 2.06098V11.5126C0.000116728 12.0592 0.217331 12.5833 0.603866 12.9697L15.0307 27.3966C15.4172 27.7829 15.9413 28 16.4878 28C17.0343 28 17.5584 27.7829 17.9449 27.3966L27.3966 17.9449C27.7829 17.5584 28 17.0343 28 16.4878C28 15.9413 27.7829 15.4172 27.3966 15.0307L12.9697 0.603866C12.5833 0.217331 12.0592 0.000116728 11.5126 0H2.06098ZM10.3049 7.21342C10.3049 8.03333 9.97918 8.81966 9.39942 9.39942C8.81966 9.97918 8.03333 10.3049 7.21342 10.3049C6.39351 10.3049 5.60719 9.97918 5.02742 9.39942C4.44766 8.81966 4.12195 8.03333 4.12195 7.21342C4.12195 6.39351 4.44766 5.60719 5.02742 5.02742C5.60719 4.44766 6.39351 4.12195 7.21342 4.12195C8.03333 4.12195 8.81966 4.44766 9.39942 5.02742C9.97918 5.60719 10.3049 6.39351 10.3049 7.21342Z"
                fill="#222222"
              />
            </g>
          </svg>
        </span>
        <input id="tag" type="text" value="" name="tag" placeholder="type new tag" />
      </div>
      <header>
        <input id="title" type="text" value="title" name="title" placeholder="TITLE" />
      </header>
      <main className="relative">
        <textarea id="description"  name="description"value="" placeholder="type new description" />
      </main>
      <TaskFooter />
    </div>
  );
}
