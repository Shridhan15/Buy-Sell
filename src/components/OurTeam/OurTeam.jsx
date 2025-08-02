import React, { useState } from "react";
import { assests, teamMembers } from "../../assets/assets";
import "./OurTeam.css";

const OurTeam = () => {
  const [hoveredMember, setHoveredMember] = useState(null);

  return (
    <div className="ourTeam">
      <h2 className="title">Our Team</h2>

      <div className="container">
        {teamMembers.map((member) => (
          <div
            key={member.id}
            className={`teamRow ${hoveredMember === member.id ? "active" : ""}`}
            onMouseEnter={() => setHoveredMember(member.id)}
            onMouseLeave={() => setHoveredMember(null)}
          >
            <span className="sNo">{member.id}</span>
            <span className="name">{member.name}</span>
            <span className="position">{member.position}</span>

            {hoveredMember === member.id && (
              <div className="photoContainer">
                <img src={member.image} alt={member.name} className="photo" />
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default OurTeam;
