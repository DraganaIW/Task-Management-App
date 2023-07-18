import { createSlice, configureStore } from "@reduxjs/toolkit";

const tasks = [
  {
    id: "task1",
    title: "Data Source Integration",
    description: "Integrate SnapLogic with various data sources, such as databases, APIs, or file systems, to retrieve the required data for document generation",
    status: "Done",
    workspaceId: 1,
    assignee: 'Person 2'
  },
  {
    id: "task2",
    title: "Performance and Scalability Issues",
    description: "When dealing with large datasets or complex document generation processes, a performance problem such as slow processing time or high resource consumption occurs, which will affect system performance and scalability.",
    status: "To do",
    workspaceId: 0,
    assignee: ''
  },
  {
    id: "task3",
    title: "Document Generation Failure",
    description: "There are instances where the document generation process fails, resulting in no output or incomplete documents being generated",
    status: "In progress",
    workspaceId: 0,
    assignee: 'Person 1'
  },
  {
    id: "task4",
    title: "Security and Access Control",
    description: " Implement appropriate security measures, such as authentication, authorization, and data encryption, to protect sensitive data during the document generation process and storage",
    status: "To do",
    workspaceId: 1,
    assignee: ''
  },
  {
    id: "task5",
    title: "Document Generation Pipeline",
    description: "Build a SnapLogic pipeline that orchestrates the flow of data from the sources to the document generation component, incorporating any necessary data transformations or validations",
    status: "In progress",
    workspaceId: 1,
    assignee: 'Person 1'
  },
  {
    id: "task6",
    title: "Document Assembly",
    description: "Develop mechanisms to assemble multiple documents or sections into a cohesive final document, including options for merging, concatenating, or appending data",
    status: "To do",
    workspaceId: 1,
    assignee: ''
  },
  {
    id: "task7",
    title: "Data Mapping",
    description: "Map the data fields from the integrated sources to the corresponding placeholders in the document templates, ensuring accurate data population.",
    status: "Done",
    workspaceId: 1,
    assignee: 'Person 2'
  },
  {
    id: "task8",
    title: "Conditional Logic",
    description: "Implement conditional logic within the SnapLogic pipeline to control the generation of specific sections or content based on predefined conditions or business rules.",
    status: "To do",
    workspaceId: 1,
    assignee: ''
  },
  {
    id: "task9",
    title: "Data Transformation and Formatting",
    description: "Apply data transformation and formatting operations to ensure that the data is properly structured and formatted within the generated documents.",
    status: "Done",
    workspaceId: 1,
    assignee: 'Person 3'
  },
  {
    id: "task10",
    title: "Document Rendering and Styling",
    description: "Customize the appearance and styling of the generated documents, including font styles, colors, logos, headers, footers, and page layouts",
    status: "In progress",
    workspaceId: 1,
    assignee: 'Person 2'
  },
];

const initialState = { showModal: false };
const initialTasksState = { initialTasks: tasks };

const modalSlice = createSlice({
  name: "showModal",
  initialState,
  reducers: {
    showModal(state) {
      state.showModal = !state.showModal;
    },
  },
});

console.log("initialState", initialState.showModal);
const tasksSlice = createSlice({
  name: "tasks",
  initialState: initialTasksState,
  reducers: {
    setTasks: (state, action) => {
      state.initialTasks = action.payload;
    },
    addTask: (state, action) => {
      state.initialTasks.push(action.payload);
    },
    updateTask: (state, action) => {
      const { id, updatedTask } = action.payload;
      const taskIndex = state.initialTasks.findIndex((task) => task.id === id);
      if (taskIndex !== -1) {
        state.initialTasks[taskIndex] = { ...state.initialTasks[taskIndex], ...updatedTask };
      }
    },
  },
});

const reducer = {
  modal: modalSlice.reducer,
  tasks: tasksSlice.reducer,
};

const store = configureStore({ reducer });
export const modalActions = modalSlice.actions;
export const { setTasks, addTask, updateTask } = tasksSlice.actions;
export default store;
