import ColorPicker from "../colorpicker/ColorPicker";

const  TaskFooter = (): JSX.Element => {
  return (
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
        {new Date().getDay()} {new Date().toLocaleDateString("default", { month: "long" })}{" "}
        {new Date().getFullYear()}, {new Date().getHours()}:
        {new Date().getMinutes().toString().length <= 2
          ? "0" + new Date().getMinutes()
          : new Date().getMinutes()}{" "}
        {new Date().getHours() > 12 ? "P.M." : "A.M."}
      </div>
    </footer>
  );
};

export default TaskFooter;

