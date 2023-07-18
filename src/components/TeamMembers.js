import React, { useContext } from "react";
import styled from "styled-components";
import { motion } from "framer-motion";
import { WorkspaceContext } from "../context/WorkspaceContext";

const MembersContainer = styled(motion.div)`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
`;

const MemberCard = styled(motion.div)`
  width: 200px;
  padding: 16px;
  margin: 16px;
  border: 1px solid #ccc;
  border-radius: 6px;
  background-color: #ffffff;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
`;

const MemberName = styled.h3`
  margin: 0;
  height: 20px;
  color: #498dda;
`;

const TeamMembers = () => {
  const { teamMembers } = useContext(WorkspaceContext);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.2 } },
  };

  const cardVariants = {
    hidden: { opacity: 0, scale: 0 },
    visible: { opacity: 1, scale: 1 },
  };

  return (
    <MembersContainer
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      {teamMembers.map((member, index) => (
        <MemberCard key={index} variants={cardVariants}>
          <MemberName>{member}</MemberName>
        </MemberCard>
      ))}
    </MembersContainer>
  );
};

export default TeamMembers;
