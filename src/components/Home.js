import React, { useState } from "react";
import FlexBoxContainer from "./FlexBoxContainer";
import styled from "styled-components";
import Select from "./Select";
import Board from "./Board";
import { AnimatePresence, motion } from "framer-motion";
import Workspace from "./Workspace";
import ReactDOM from "react-dom"
import CreateTaskModal from "./CreateTaskModal";
import { useDispatch, useSelector } from "react-redux";
import { modalActions, addTask, setTasks } from "../store";

const Page = styled.div`
  background-color: #f4f7f9;
  margin: 0 auto;
  padding: 20px;
  border-radius: 6px;
`;

const Header = styled(motion.div)`
  color: #ffffff;
  align-items: flex-start;
  padding: 10px;
  height: auto;
  background: linear-gradient(270deg, #667eea 0%, #764ba2 100%);
  border-radius: 6px;
`;

const StyledFlexBox = styled(FlexBoxContainer)`
  margin-right: 30px;
  padding: 20px;
`;

const StyledSelect = styled(Select)`
  margin-left: 16px;
  border-radius: 6px;
  border-color: #498dda;
  padding: 6px;
  font-size: 14px;
`;

const WelcomeMessageHeader = styled.p`
  font-size: 25px;
  color: white;
  margin-bottom: 0;
  padding-left: 20px;
  margin-top: 0;
`;

const WelcomeMessage = styled.p`
  font-size: 20px;
  margin: 0;
  color: white;
  padding-left: 20px;
`;

const StyledButton = styled.button`
  width: 130px;
  border: 1px solid #498dda;
  border-radius: 6px;
  margin: 30px 0 20px;
  padding: 10px;
  background-color: rgba(105, 125, 226, 0.1);
  color: white;
  font-size: 14px;
  cursor: pointer;

  &:hover {
    background-color: rgba(95, 125, 218, 1);
  }
`;

const MenuContainer = styled(motion.div)`
  width: 15%;
  height: 50%;
  background-color: #ffffff;
  color: #498dda;
  margin: 10px 0;
  border: 1px solid #498dda;
  border-radius: 6px;
  overflow: hidden;
`;

const MenuItem = styled(motion.div)`
  padding: 45px;
  margin-bottom: 16px;
  cursor: pointer;
  font-size: 18px;
  color: #333333;
  background-color: #ffffff;
  border-radius: 6px;
  border: none; /* Remove the default border */

  &:hover {
    background-color: #f7f7f7;
  }
`;

const ContentContainer = styled(motion.div)`
  width: 100%;
  margin: 30px;
  position: relative;
  background-color: #ffffff;
  border-radius: 6px;
  box-shadow: 0px 4px 8px rgba(75, 78, 81, 0.1);
`;

const Label = styled.label`
  margin: 0 0 10px;
`;


const variants = {
  menuItem: {
    rest: { opacity: 0.6, scale: 1, color: "#333333", fontSize: "18px", border: "none" },
    selected: {
      opacity: 1,
      scale: 1.3,
      fontWeight: "bold",
      fontSize: "20px",
      color: "#498dda"
    },
    initial: { opacity: 0, x: -20 },
    animate: { opacity: 1, x: 0 },
    exit: { opacity: 0, x: -20 },
  },
  content: {
    initial: { opacity: 0, x: 20 },
    animate: { opacity: 1, x: 0 },
    exit: { opacity: 0, x: 20 },
  },
};

const workspaces = [
  { id: 0, name: "Bugs" },
  { id: 1, name: "Story" },
];

const Home = () => {
  const [selectedWorkspace, setSelectedWorkspace] = useState(workspaces[0]);
  const tasks = useSelector((state) => state.tasks.initialTasks);
  const foundTasks = tasks.filter(task => task.workspaceId === selectedWorkspace.id)
  const [selectedItem, setSelectedItem] = useState("workspace");
  const showModal = useSelector((state) => state.modal.showModal);
  const dispatch = useDispatch()

  const showModalHandler = () => {
    dispatch(modalActions.showModal())
  }

  const closeModalHandler = () => {
    dispatch(modalActions.showModal())
  }

  const createTask = (newTask) => {
    const taskId = `task${tasks.length + 1}`;
    const updatedTask = {
      id: taskId,
      title: newTask.title,
      description: newTask.description,
      status: 'To do',
      workspaceId: selectedWorkspace.id,
      taskType: newTask.taskType,
    };
    dispatch(addTask(updatedTask));
    closeModalHandler();
  };

  const handleItemClick = (item) => {
    setSelectedItem(item);
  };

  const renderContent = () => {
    switch (selectedItem) {
      case "workspace":
        return <Workspace />;
      case "board":
        return <Board tasks={foundTasks}/>;
      default:
        return <Workspace />;
    }
  };

  const handleWorkspaceChange = (value) => {
    const foundWorkspace = workspaces.find((w) => w.id === value);
    setSelectedWorkspace(foundWorkspace);
  };


return (
  <Page>
    <Header
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.3 }}
    >
      <FlexBoxContainer justifyContent="space-between" displayFlex="flex" alignItems="center" width="100%">
        <FlexBoxContainer flexDirection="column">
          <WelcomeMessageHeader>Welcome back,</WelcomeMessageHeader>
          <WelcomeMessage>Dragana</WelcomeMessage>
        </FlexBoxContainer>
        <FlexBoxContainer flexDirection="row" displayFlex="flex">
          <StyledFlexBox flexDirection="column" displayFlex="flex">
            <Label>Quick filters</Label>
            <StyledSelect
              options={workspaces}
              selectedOption={selectedWorkspace.id}
              onChange={(e) => handleWorkspaceChange(parseInt(e.target.value))}
            />
          </StyledFlexBox>
          <StyledButton onClick={showModalHandler}>Create Task/Bug</StyledButton>
          {showModal && ReactDOM.createPortal(<CreateTaskModal onClose={closeModalHandler} onSubmit={createTask} />, document.getElementById("portal-root"))}
        </FlexBoxContainer>
      </FlexBoxContainer>
    </Header>
    <FlexBoxContainer displayFlex="flex" width="100%">
      <MenuContainer initial="initial" animate="animate" exit="exit">
        <MenuItem
          variants={variants.menuItem}
          animate={selectedItem === "workspace" ? "selected" : "rest"}
          onClick={() => handleItemClick("workspace")}
        >
          Workspace
        </MenuItem>
        <MenuItem
          variants={variants.menuItem}
          animate={selectedItem === "board" ? "selected" : "rest"}
          onClick={() => handleItemClick("board")}
        >
          Board
        </MenuItem>
      </MenuContainer>

      <ContentContainer initial="initial" animate="animate" exit="exit" variants={variants.content} transition={{ type: "tween", duration: 0.3 }} mode="wait">
        <AnimatePresence>{renderContent()}</AnimatePresence>
      </ContentContainer>
    </FlexBoxContainer>
  </Page>
);
};

export default Home;
