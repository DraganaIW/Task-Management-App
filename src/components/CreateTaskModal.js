import React, { useState } from 'react';
import styled from 'styled-components';

const ModalOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.3);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 9999;
`;

const ModalContainer = styled.div`
  background-color: #f0f8ff;
  width: 18%;
  border: 1px solid #498dda;
  padding: 20px;
  border-radius: 8px;
  display: flex;
  flex-direction: column;
`;

const FormField = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 10px;
`;

const FormLabel = styled.label`
  margin-bottom: 5px;
`;

const FormInput = styled.input`
  padding: 5px;
  border-radius: 4px;
  border: 1px solid #ccc;
`;

const FormTextarea = styled.textarea`
  padding: 5px;
  height: 20%;
  border-radius: 4px;
  border: 1px solid #ccc;
`;

const FormSelect = styled.select`
  padding: 5px;
  border-radius: 6px;
  border: 1px solid #ccc;
`;

const ButtonContainer = styled.div`
  display: flex;
  justify-content: flex-end;
  margin-top: 10px;
`;

const Button = styled.button`
  background-color: #498dda;
    border-radius: 6px;
    color: white;
    border-color: #498dda !important;
    font-weight: bold;
    font-size: 16px;
    line-height: 16px;
    cursor: pointer;
    height: 36px;
    width: fit-content;
    padding: 0 12px;
    margin: 20px auto;
    font-family: 'Lato', sans-serif !important;
`;

const CreateTaskModal = ({ onClose, onSubmit }) => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [taskType, setTaskType] = useState('task');

  const handleTitleChange = (e) => {
    setTitle(e.target.value);
  };

  const handleDescriptionChange = (e) => {
    setDescription(e.target.value);
  };

  const handleTaskTypeChange = (e) => {
    setTaskType(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit({ title, description, taskType });
    setTitle('');
    setDescription('');
    setTaskType('task');
  };

  return (
    <ModalOverlay>
      <ModalContainer>
        <h2>Create New {taskType === 'task' ? 'Task' : 'Bug'}</h2>
        <form onSubmit={handleSubmit}>
          <FormField>
            <FormLabel htmlFor="title">Title:</FormLabel>
            <FormInput type="text" id="title" value={title} onChange={handleTitleChange} required />
          </FormField>

          <FormField>
            <FormLabel htmlFor="description">Description:</FormLabel>
            <FormTextarea
              id="description"
              value={description}
              onChange={handleDescriptionChange}
              required
            ></FormTextarea>
          </FormField>

          <FormField>
            <FormLabel htmlFor="taskType">Task Type:</FormLabel>
            <FormSelect id="taskType" value={taskType} onChange={handleTaskTypeChange}>
              <option value="task">Task</option>
              <option value="bug">Bug</option>
            </FormSelect>
          </FormField>

          <ButtonContainer>
            <Button type="submit">Create</Button>
            <Button type="button" onClick={onClose}>
              Cancel
            </Button>
          </ButtonContainer>
        </form>
      </ModalContainer>
    </ModalOverlay>
  );
};

export default CreateTaskModal;
