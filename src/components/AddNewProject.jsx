import { useRef } from "react";
import Input from "./Input";
import Button from "./Button";
import Modal from "./Modal";
export default function AddNewProject({ onAdd, handleActiveWindow }) {
  const modal = useRef();
  const title = useRef();
  const description = useRef();
  const dueDate = useRef();
  const handleSave = function () {
    const enteredTitle = title.current.value;
    const enteredDescription = description.current.value;
    const enteredDueDate = dueDate.current.value;
    // Validation
    if (
      enteredTitle.trim() === "" ||
      enteredDescription.trim() === "" ||
      enteredDueDate.trim() === ""
    ) {
      modal.current.Open();
      return;
    }
    onAdd({
      title: enteredTitle,
      description: enteredDescription,
      dueDate: enteredDueDate,
    });
  };
  return (
    <>
      <Modal ref={modal} buttonCaption="Close">
        <h2 className="">Invalid inputs</h2>
        <p>Please try again with valid info</p>
      </Modal>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          handleSave();
        }}
        className="w-2/4 ml-8 mt-16"
      >
        <div className="mt-4 flex justify-end">
          <Button
            onClick={() => handleActiveWindow(undefined)}
            type="button"
            className="mt-4 p-2 text-gray-900 hover:bg-gray-100 rounded focus:outline-none focus:ring focus:border-blue-300 w-32 h-10"
          >
            Cancel
          </Button>
          <Button type="submit">Save</Button>
        </div>
        <Input
          ref={title}
          label={"TITLE"}
          type="text"
          id="title"
          name="title"
        />

        <Input
          ref={description}
          label={"DESCRIPTION"}
          textArea
          id="description"
          name="description"
        ></Input>

        <Input
          ref={dueDate}
          label={"DUE DATE"}
          type="date"
          id="dueDate"
          name="dueDate"
        />
      </form>
    </>
  );
}
