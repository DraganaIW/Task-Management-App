import React, { useContext } from "react";
import styled from "styled-components";
import TeamMembers from "./TeamMembers";
import UpcomingMeetings from "./UpcomingMeeting";
import FlexBoxContainer from "./FlexBoxContainer";
import { WorkspaceContext } from "../context/WorkspaceContext";

const PageContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: flex-start;
  padding: 20px;
`;

const Sidebar = styled.div`
  width: 150px;
  margin-left: 20px;
`;

const Content = styled.div`
  flex-grow: 1;
`;

const Container = styled.div`
  background-color: #f9f9f9;
  padding: 20px;
  margin-bottom: 20px;
  border-radius: 6px;
`;

const CalendarContainer = styled(Container)`
  font-size: 16px;
  background-color: #ffffff;
`;

const MeetingsContainer = styled(Container)`
  width: 40%;
  color: #498dda;
`;

const TeamMembersContainer = styled(Container)`
  width: 40%;
`;

const Workspace = () => {
  const { currentDate } = useContext(WorkspaceContext);

  return (
    <PageContainer>
      <Content>
        <FlexBoxContainer flexDirection="row" displayFlex="flex" justifyContent="space-between">
          <MeetingsContainer>
            <h2>Upcoming Meetings</h2>
            <UpcomingMeetings />
          </MeetingsContainer>
          <TeamMembersContainer>
            <h2>Team Members</h2>
            <TeamMembers />
          </TeamMembersContainer>
        </FlexBoxContainer>
      </Content>
      <Sidebar>
        <CalendarContainer>
          <h3>Current date</h3>
          <p>{currentDate}</p>
        </CalendarContainer>
      </Sidebar>
    </PageContainer>
  );
};

export default Workspace;
