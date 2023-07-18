import React, { useState } from "react";
import styled from "styled-components";

const CalendarContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
`;

const CalendarHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  margin-bottom: 16px;
`;

const CalendarTitle = styled.h2`
  font-size: 24px;
  margin: 0;
`;

const CalendarGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(7, 4fr);
  gap: 6px;
`;

const CalendarDay = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 30px;
  border-radius: 6px;
  background-color: ${({ hasMeeting }) => (hasMeeting ? "#498dda" : "#F1F1F1")};
  color: ${({ hasMeeting }) => (hasMeeting ? "#FFFFFF" : "#000000")};
  font-size: 16px;
  cursor: pointer;
  transition: background-color 0.2s ease-in-out;

  &:hover {
    background-color: ${({ hasMeeting }) => (hasMeeting ? "#FF3939" : "#E6E6E6")};
  }
`;

const Calendar = ({ meetings }) => {
  const daysOfWeek = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

  const currentDate = new Date();
  const [displayedDate, setDisplayedDate] = useState(currentDate);

  const numberOfDays = new Date(
    displayedDate.getFullYear(),
    displayedDate.getMonth() + 1,
    0
  ).getDate();

  const firstDayOfWeek = new Date(
    displayedDate.getFullYear(),
    displayedDate.getMonth(),
    1
  ).getDay();

  const daysOfMonth = Array.from({ length: numberOfDays }, (_, index) => index + 1);

  const goToPreviousMonth = () => {
    setDisplayedDate(new Date(displayedDate.getFullYear(), displayedDate.getMonth() - 1));
  };

  const goToNextMonth = () => {
    setDisplayedDate(new Date(displayedDate.getFullYear(), displayedDate.getMonth() + 1));
  };

  return (
    <CalendarContainer>
      <CalendarHeader>
        <button onClick={goToPreviousMonth}>&lt;</button>
        <CalendarTitle>{displayedDate.toLocaleString("default", { month: "long" })}</CalendarTitle>
        <div>{displayedDate.getFullYear()}</div>
        <button onClick={goToNextMonth}>&gt;</button>
      </CalendarHeader>
      <CalendarGrid>
        {daysOfWeek.map((day) => (
          <CalendarDay key={day}>{day}</CalendarDay>
        ))}
        {Array(firstDayOfWeek)
          .fill(null)
          .map((_, index) => (
            <div key={`empty-${index}`} />
          ))}
        {daysOfMonth.map((day) => {
          const date = new Date(displayedDate.getFullYear(), displayedDate.getMonth(), day);
          const hasMeeting = meetings.some((meeting) => isSameDay(meeting.date, date));
          return (
            <CalendarDay key={day} hasMeeting={hasMeeting}>
              {day}
            </CalendarDay>
          );
        })}
      </CalendarGrid>
    </CalendarContainer>
  );
};

const isSameDay = (date1, date2) => {
  const d1 = new Date(date1);
  const d2 = new Date(date2);
  return (
    d1.getDate() === d2.getDate() &&
    d1.getMonth() === d2.getMonth() &&
    d1.getFullYear() === d2.getFullYear()
  );
};

export default Calendar;
