import { useState } from 'react';

const useTasks = () => {
  const [meetings, setMeetings] = useState([{ date: "2023-07-25", description: "Meeting with customer" },
    { date: "2023-07-28", description: "Meeting with developers" },
    { date: "2023-08-02", description: "Technical interview with Rob" }]);

  return { meetings };
};

export { useTasks };
