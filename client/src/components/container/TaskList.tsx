import Task from "../pure/cards/Task";

const mockTask = [
  {
    id: "1",
    tag: "tag 1",
    title: "task 1",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Molestie a iaculis at erat pellentesque adipiscing commodo",
    backgroundColor: "#F8DFC8",
    date: new Date(),
  },
  {
    id: "2",
    tag: "tag 2",
    title: "task 2",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Molestie a iaculis at erat pellentesque adipiscing commodo",
    backgroundColor: "#F8DFC8",
    date: new Date(),
  },
  {
    id: "3",
    tag: "tag 3",
    title: "task 3",
    description: "Descrtiption 3",
    backgroundColor: "#F8DFC8",
    date: new Date(),
  },
  {
    id: "4",
    tag: "tag 4",
    title: "task 1",
    description: "Descrtiption 4",
    backgroundColor: "#F8DFC8",
    date: new Date(),
  },
  {
    id: "5",
    tag: "tag 5",
    title: "task 5",
    description: "Descrtiption 5",
    backgroundColor: "#F8DFC8",
    date: new Date(),
  },
];

export default function TaskList() {
  return (
    <>
      {mockTask?.map((task, i) => {
        return (
          <Task
            key={i}
            title={task.title}
            description={task.description}
            tag={task.tag}
            color={task.backgroundColor}
            date={task.date}
          />
        );
      })}
    </>
  );
}
