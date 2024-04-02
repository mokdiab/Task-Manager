import SideBar from "./components/Sidebar";
import AddNewProject from "./components/AddNewProject";
import ProjectDescription from "./components/ProjectDescription";
import ProjectCreation from "./components/ProjectCreation";
import { useState } from "react";
function App() {
  const [projectsData, setProjectsData] = useState({
    selectedWindow: undefined,
    projects: [],
    tasks: [],
  });

  const handleAddProject = function (formData) {
    setProjectsData((prevData) => {
      const newProject = {
        ...formData,
        id: Math.random(),
      };
      return {
        ...prevData,
        projects: [...prevData.projects, newProject],
        selectedWindow: undefined,
      };
    });
  };
  const handleActiveWindow = function (window) {
    setProjectsData((prevData) => {
      return {
        ...prevData,
        selectedWindow: window,
      };
    });
  };
  const handleDelete = function (projectId) {
    setProjectsData((prevData) => {
      return {
        ...prevData,
        projects: prevData.projects.filter(
          (project) => project.id !== prevData.selectedWindow
        ),
        selectedWindow: undefined,
      };
    });
  };
  const handleAddTasks = function (text) {
    setProjectsData((prevData) => {
      const newTask = {
        title: text,
        id: Math.random(),
        taskId: prevData.selectedWindow,
      };
      return {
        ...prevData,
        tasks: [newTask, ...prevData.tasks],
      };
    });
  };
  const handleclearTasks = function (taskId) {
    setProjectsData((prevData) => {
      return {
        ...prevData,
        tasks: prevData.tasks.filter((task) => task.id !== taskId),
      };
    });
  };
  const selectedProject = projectsData.projects.find(
    (project) => project.id === projectsData.selectedWindow
  );
  let content;
  if (projectsData.selectedWindow === undefined)
    content = <ProjectCreation handleActiveWindow={handleActiveWindow} />;
  else if (projectsData.selectedWindow === null)
    content = (
      <AddNewProject
        handleActiveWindow={handleActiveWindow}
        onAdd={handleAddProject}
      />
    );
  else
    content = (
      <ProjectDescription
        tasksData={projectsData.tasks}
        handleclearTasks={handleclearTasks}
        handleAddTasks={handleAddTasks}
        handleDelete={handleDelete}
        project={selectedProject}
      />
    );
  return (
    <main className="flex">
      <SideBar
        handleActiveWindow={handleActiveWindow}
        projects={projectsData}
        selectedProjectId={projectsData.selectedWindow}
      />
      {content}
    </main>
  );
}

export default App;
