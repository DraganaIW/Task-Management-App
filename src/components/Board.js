import React from 'react';
import styled from 'styled-components';
import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd';
import { setTasks } from '../store';
import { useDispatch } from 'react-redux';
import { motion } from 'framer-motion';

const TaskBoardContainer = styled.div`
  display: flex;
`;

const AssigneeSelect = styled.select`
  margin-left: 16px;
  border-radius: 6px;
  border-color: #498dda;
  padding: 6px;
  font-size: 14px;
`;
const AssigneeOption = styled.option``;

const BoardColumn = styled(motion.div)`
  flex: 1;
  padding: 20px;
`;

const BoardHeader = styled.h2`
  font-size: 24px;
  margin-bottom: 20px;
`;

const BoardTask = styled(motion.div)`
  background-color: #fff;
  color: #498dda;
  border-radius: 8px;
  padding: 20px;
  margin-bottom: 20px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
`;

const StyledH1 = styled.h1`
  padding: 20px;
`;

const Board = ({ tasks }) => {
  const dispatch = useDispatch();

  const handleAssigneeChange = (taskId, assignee) => {
    const updatedTasks = tasks.map((task) =>
      task.id === taskId ? { ...task, assignee } : task
    );
    dispatch(setTasks(updatedTasks));
  };

  const handleDragEnd = (result) => {
    if (!result.destination) return;

    const sourceColumn = result.source.droppableId;
    const destinationColumn = result.destination.droppableId;
    const updatedTasks = [...tasks];

    if (sourceColumn === destinationColumn) {
      const [removed] = updatedTasks.splice(result.source.index, 1);
      updatedTasks.splice(result.destination.index, 0, removed);
    } else {
      const [removed] = updatedTasks.splice(result.source.index, 1);
      const updatedTask = { ...removed, status: destinationColumn };
      updatedTasks.splice(result.destination.index, 0, updatedTask);
    }

    dispatch(setTasks(updatedTasks));
  };

  const statusColumns = ['To do', 'In progress', 'Done'];

  return (
    <div>
      <StyledH1>Task Board</StyledH1>
      <DragDropContext onDragEnd={handleDragEnd}>
        <TaskBoardContainer>
          {statusColumns.map((status) => (
            <Droppable droppableId={status} key={status}>
              {(provided) => (
                <BoardColumn
                  ref={provided.innerRef}
                  {...provided.droppableProps}
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5 }}
                >
                  <BoardHeader>{status}</BoardHeader>
                  {tasks
                    .filter((task) => task.status === status)
                    .map((task, index) => (
                      <Draggable key={task.id} draggableId={task.id} index={index}>
                        {(provided) => (
                          <BoardTask
                            ref={provided.innerRef}
                            {...provided.draggableProps}
                            {...provided.dragHandleProps}
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                          >
                            <h3>{task.title}</h3>
                            <p>{task.description}</p>
                            <AssigneeSelect
                              value={task.assignee || ''}
                              onChange={(e) => handleAssigneeChange(task.id, e.target.value)}
                            >
                              <AssigneeOption value="">Assignee</AssigneeOption>
                              <AssigneeOption value="Person 1">Marko</AssigneeOption>
                              <AssigneeOption value="Person 2">Dragana</AssigneeOption>
                              <AssigneeOption value="Person 3">Kristina</AssigneeOption>
                            </AssigneeSelect>
                          </BoardTask>
                        )}
                      </Draggable>
                    ))}
                  {provided.placeholder}
                </BoardColumn>
              )}
            </Droppable>
          ))}
        </TaskBoardContainer>
      </DragDropContext>
    </div>
  );
};
export default Board;
