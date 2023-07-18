import React from "react";
import styled from "styled-components";
import Calendar from "./Calendar";
import { useTasks } from "../hooks/useTasks";

const MeetingsContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const CalendarBoard = styled.div`
  width: 300px;
  height: 300px;
  border: none;
  border-radius: 6px;
  margin-bottom: 16px;
  /* Add any other calendar styling here */
`;

const MeetingsText = styled.p`
  font-size: 16px;
  margin: 0;
`;

const MeetingItem = styled(MeetingsText)`
  margin-bottom: 8px;
`;

const UpcomingMeetings = () => {
  const { meetings } = useTasks();

  return (
    <MeetingsContainer>
      <CalendarBoard>
        <Calendar meetings={meetings} />
      </CalendarBoard>
      <MeetingsText>Upcoming Meetings:</MeetingsText>
      {meetings.map((meeting, index) => (
        <MeetingItem key={index}>
          {meeting.date} - {meeting.description}
        </MeetingItem>
      ))}
    </MeetingsContainer>
  );
};

export default UpcomingMeetings;
