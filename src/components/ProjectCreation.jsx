import Button from "./Button";
function ProjectCreation({ handleActiveWindow }) {
  return (
    <div className="w-3/4 h-screen ml-8 flex flex-col items-center justify-center">
      <img src="logo.png" alt="Logo" className="w-16 h-16 rounded-full" />

      <h1 className="text-2xl text-gray-800 font-bold mt-4">
        No Project Selected
      </h1>
      <p className="text-gray-600 mt-2">
        Select a project or get started with a new one
      </p>

      <Button
        onClick={() => handleActiveWindow(null)}
        className="mt-4 p-2 rounded bg-gray-800 text-gray-200 hover:bg-gray-700 focus:outline-none focus:ring focus:border-blue-300"
      >
        Create New Project
      </Button>
    </div>
  );
}
export default ProjectCreation;
