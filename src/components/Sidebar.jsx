import Button from "./Button";
export default function SideBar({
  handleActiveWindow,
  projects,
  selectedProjectId,
}) {
  return (
    <div
      id="sideBar"
      className="w-1/3 h-screen bg-zinc-900 flex flex-col ps-8 pt-40 md:w-72"
    >
      <div className="w-100 text-white p-4">
        <h2 className="text-3xl font-bold tracking-wide shadow-inner">
          Your Project
        </h2>
        <Button
          onClick={() => handleActiveWindow(null)}
          id="addProjectBtn"
          className="mt-4 p-2 rounded bg-zinc-800 text-gray-200 hover:bg-zinc-700 focus:outline-none focus:ring focus:border-x-stone-600"
        >
          + Add Project
        </Button>
      </div>
      <div className="flex-1 p-4">
        <ul id="projectList" className="list-none mt-2">
          {projects.projects.map((project) => {
            let cssClassName =
              "cursor-pointer mb-3 text-gray-200 hover:bg-zinc-700 focus:bg-zinc-700 focus:outline-none p-3 rounded";
            if (project.id === selectedProjectId) {
              cssClassName += " bg-zinc-700 text-stone-200";
            } else {
              cssClassName += " text-stone-400";
            }
            return (
              <li
                onClick={() => handleActiveWindow(project.id)}
                key={project.id}
                className={cssClassName}
              >
                <span className="h-full flex items-center">
                  {project.title}
                </span>
              </li>
            );
          })}
        </ul>
      </div>
      <p className="footer-text">Mohamed Diab</p>
    </div>
  );
}
