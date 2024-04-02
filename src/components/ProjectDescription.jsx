import Button from "./Button";
import Tasks from "./Tasks";
export default function ProjectDescription({
  project,
  handleDelete,
  handleAddTasks,
  tasksData,
  handleclearTasks,
}) {
  const newFormattedDate = new Date(project.dueDate).toLocaleDateString(
    "en-US",
    {
      year: "numeric",
      month: "short",
      day: "2-digit",
    }
  );
  return (
    <div className="w-3/4 ml-8 mt-16 text-white p-4">
      <div className="flex justify-between items-center">
        <h1 className="text-gray-800 text-2xl font-bold">{project.title}</h1>
        <Button
          onClick={handleDelete}
          className="text-gray-800 border border-none p-2 rounded hover:bg-gray-200 hover:text-gray-800 focus:outline-none focus:ring focus:border-blue-300"
        >
          Delete
        </Button>
      </div>
      <div className="mt-2">
        <p className="text-gray-400">{newFormattedDate}</p>
        <p className="text-gray-400 whitespace-pre-wrap">
          {project.description}
        </p>
      </div>
      <hr className="my-4 border-gray-600" />
      <Tasks
        handleclearTasks={handleclearTasks}
        tasksData={tasksData}
        onAdd={handleAddTasks}
      />
    </div>
  );
}
