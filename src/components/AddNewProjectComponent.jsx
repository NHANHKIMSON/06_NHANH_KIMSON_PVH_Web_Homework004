import { Plus } from "lucide-react";
import { useState } from "react";
export default function AddNewProjectComponent({ handlerSubmitProject }){
  const [projects, setProjects] = useState({
    projectName: '',
    dueDate: '',
    progress: '',
    description: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et cupiditate illo quam tenetur! Sapiente dicta, laudantium itaque accusantium perferendis a ad in! Est incidunt, quis dolore neque iste velit consequuntur?',
  });
  const [dateError, setErrorDate] = useState({});
  const validateForm = () =>{
    const newError = {};
    if(!projects.projectName.trim()){
      newError.projectName = "Project name is required.";
    }
    if(!projects.dueDate){
      newError.dueDate = "Please choose the deadline of your project.";
    }else if(projects.dueDate < new Date().toISOString().split("T")[0]){
      newError.dueDate = "Selected date can't be lower than current date.";
    } 
    if(!projects.progress){
      newError.progress = "Please select your project progress.";
    }
    setErrorDate(newError);
    return Object.keys(newError).length === 0;
  }
  const handleSubmit = (e) =>{
    e.preventDefault();
    if(validateForm()){
      handlerSubmitProject(projects);
      
    }
    console.log(dateError);
  }
  console.log(dateError);
  const handleValue = (e) =>{
    console.log("Input: " , e.target.value);
    const newProject = ({...projects, [e.target.name]: e.target.value }); // ចាប់យកតម្លៃចេញ ពី input លក្ខណជា obj តាមរយោះការ Distrucuring using ... State_name
    setProjects(newProject);
  }

  // console.log("All Project: " , projects);

  return (
    <>
    <div>
    </div>
    <div>
      <button
        data-modal-target="crud-modal"
        data-modal-toggle="crud-modal"
        className=" text-white bg-custom-sky-blue hover:bg-custom-sky-blue-500 focus:ring-3 focus:outline-none focus:ring-custom-sky-blue-500  font-medium rounded-lg text-sm px-3 py-2.5 text-center dark:bg-custom-sky-blue-500 dark:hover:bg-custom-sky-blue-500  dark:focus:ring-custom-sky-blue-500  flex items-center gap-2"
        type="button"
      >
        <Plus size={22} /> <span className="text-base">New Project</span>
      </button>
      

      <div
        id="crud-modal"
        tabIndex="-1"
        aria-hidden="true"
        className="hidden overflow-y-auto overflow-x-hidden fixed top-0 right-0 left-0 z-50 justify-center items-center w-full md:inset-0 h-[calc(100%-1rem)] max-h-full"
      >
        <div className="relative p-4 w-full max-w-md max-h-full">
          <div className="relative bg-white rounded-2xl shadow-sm dark:bg-gray-700">
            <div className="flex items-center justify-between p-4 md:p-5 border-b rounded-t dark:border-gray-600 border-gray-200">
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                Create New Project
              </h3>
              <button
                type="button"
                className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ms-auto inline-flex justify-center items-center dark:hover:bg-gray-600 dark:hover:text-white"
                data-modal-toggle="crud-modal"
              >
                <svg
                  className="w-3 h-3"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 14 14"
                >
                  <path
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"
                  />
                </svg>
                <span className="sr-only">Close modal</span>
              </button>
            </div>
            <form className="p-4 md:p-5" onSubmit={handleSubmit}> 

              <div className="grid gap-4 mb-4 grid-cols-2">
                <div className="col-span-2">
                  <label
                    htmlFor="projectName"
                    className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                  >
                    Project Name <small className="text-red-500">*</small>
                  </label>
                  <input
                    onChange={handleValue}
                    type="text"
                    name="projectName"
                    id="projectName"
                    className={`bg-gray-50 border
                      ${dateError.projectName ? "border-red-500" : "border-gray-300"} text-gray-900
                      text-sm rounded-lg focus:ring-primary-600
                      focus:border-primary-600 block w-full
                      p-2.5 dark:bg-gray-600 dark:border-gray-500
                    dark:placeholder-gray-400 dark:text-white
                      dark:focus:ring-primary-500 dark:focus:border-primary-500`}
                    placeholder="Type Project Name"
                  />
                </div>
                {dateError.projectName && (
                  <small className="text-red-500">{dateError.projectName}</small>
                )}

                <div className="col-span-2">
                  <label
                    htmlFor="dueDate"
                    className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                  >
                    Due Date <small className="text-red-500">*</small>
                  </label>
                  <input
                    onChange={handleValue}
                    type="date"
                    name="dueDate"
                    id="dueDate"
                    className={`bg-gray-50 border
                      ${dateError.dueDate ? "border-red-500" : "border-gray-300"}
                      text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500`}
                  />
                </div>
                {dateError.dueDate && (
                  <small className="text-red-500">{dateError.dueDate}</small>
                )}

                <div className="col-span-2">
                  <label
                    htmlFor="progress"
                    className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                  >
                    Progress <small className="text-red-500">*</small>
                  </label>
                  <select
                    onChange={handleValue}
                    id="progress"
                    name="progress"
                    className={`bg-gray-50 border 
                    ${dateError.progress ? "border-red-500" : "border-gray-300"} border-gray-300
                    text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500`}
                  >
                    <option value="">Select Progress</option>
                    <option value="100">100</option>
                    <option value="75">75</option>
                    <option value="50">50</option>
                    <option value="25">25</option>
                  </select>
                  {dateError.progress && (
                    <small className="text-red-500">{dateError.progress}</small>
                  )}
                </div>
                <div className="col-span-2">
                  <label
                    htmlFor="description"
                    className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                  >
                    Project Description
                  </label>
                  <textarea
                    onChange={handleValue}
                    name="description"
                    id="description"
                    rows="4"
                    className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    placeholder="Write product description here"
                  ></textarea>
                </div>
              </div>
              <div className="text-right">
                <button
                id="close"
                  type="submit"
                  className="text-white inline-flex items-center bg-custom-sky-blue hover:bg-custom-sky-blue-500 focus:ring-4 focus:outline-none focus:ring-custom-sky-blue-500 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-custom-sky-blue-500 dark:hover:bg-custom-sky-blue-500 dark:focus:ring-custom-sky-blue-500"
                >
                  Create
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
    </>
  );
}
