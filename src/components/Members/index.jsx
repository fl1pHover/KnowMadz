import React, { useState } from "react";
import "./members.css";
import landingLogo from "../../assets/Logos/landingLogo.png";
import { motion } from "framer-motion";
import img1 from "../../assets/teamIMG/img1.jpeg";
const leaders = [
  {
    leaderIMG: img1,
    name: "Tugo.",
    role: "CEO"
  },
  {
    leaderIMG: img1,
    name: "bob",
    role: "CFO"
  },
  {
    leaderIMG: img1,
    name: "bob",
    role: "CFO"
  },

  {
    leaderIMG: img1,
    name: "bob",
    role: "CFO"
  },
  {
    leaderIMG: img1,
    name: "bob",
    role: "CFO"
  },
  {
    leaderIMG: img1,
    name: "bob",
    role: "CFO"
  },
  {
    leaderIMG: img1,
    name: "bob",
    role: "CFO"
  },
  {
    leaderIMG: img1,
    name: "bobbob.",
    role: "CFO"
  },
  {
    leaderIMG: img1,
    name: "bobbob.",
    role: "CFO"
  },
  {
    leaderIMG: img1,
    name: "bobbob.",
    role: "CFO"
  },
  {
    leaderIMG: img1,
    name: "bobbob.",
    role: "CFO"
  },
  {
    leaderIMG: img1,
    name: "bobbob.",
    role: "CFO"
  },
  {
    leaderIMG: img1,
    name: "bobbob.",
    role: "CFO"
  },
  {
    leaderIMG: img1,
    name: "bobbob.",
    role: "CFO"
  },
  {
    leaderIMG: img1,
    name: "bobbob.",
    role: "CFO"
  }
];
const members = [
  {
    memberIMG: img1,
    name: "Tugo."
  },
  {
    memberIMG: img1,
    name: "bob"
  },
  {
    memberIMG: img1,
    name: "bob"
  },

  {
    memberIMG: img1,
    name: "bob"
  },
  {
    memberIMG: img1,
    name: "bob"
  },
  {
    memberIMG: img1,
    name: "bob"
  },
  {
    memberIMG: img1,
    name: "bob"
  },
  {
    memberIMG: img1,
    name: "bobbob."
  },
  {
    memberIMG: img1,
    name: "bobbob."
  },
  {
    memberIMG: img1,
    name: "bobbob."
  },
  {
    memberIMG: img1,
    name: "bobbob."
  },
  {
    memberIMG: img1,
    name: "bobbob."
  },
  {
    memberIMG: img1,
    name: "bobbob."
  },
  {
    memberIMG: img1,
    name: "bobbob."
  },
  {
    memberIMG: img1,
    name: "bobbob."
  }
];

const Members = () => {
  return (
    <section id="members">
      <div className="member__container">
        <h1 className="medium__header purple__header">Meet the Team</h1>
        <h1 className="sub__header">Leadership & Advisors</h1>
        <p className="main__p">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem
          beatae cupiditate aut sunt consequatur doloribus alias culpa odit
          fugit similique.
        </p>
        <div className="member__box" style={{ margin: "0 0 50px 0" }}>
          {leaders.map(({ leaderIMG, name, role }, index) => {
            return (
              <article key={index} className="member__profile">
                <img src={leaderIMG} alt="leaders Picture" />
                <p className="team__name">{name}</p>
                <p className="team__name role">{role}</p>
              </article>
            );
          })}
        </div>
        <h1 className="sub__header 2nd">Our Gen Z Team, The Heart of Promly</h1>
        <p className="main__p">
          Our Gen Z team has selflessly come together to share their voices,
          talents and ideas in order to help create better options for Gen Z
          that will leave Gen Z users feeling empowered and inspired.
        </p>
        <div className="member__box">
          {members.map(({ memberIMG, name, role }, index) => {
            return (
              <article key={index} className="member__profile">
                <img src={memberIMG} alt="Members Picture" />
                <p className="team__name">{name}</p>
                {/* <p className="team__name role">{role}</p> */}
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Members;
