import React from "react";
import "./about.css";
import Congress from "../../assets/About/congress.png";
import Join from "../../assets/About/join.png";
import Pledge from "../../assets/About/pledge.png";

const data = [
  {
    id: 1,
    image: Congress,
    title: "Tell Congress",
    text: "Save Lives. Sign our Petition."
  },
  {
    id: 2,
    image: Join,
    title: "Join Our GenZ Team",
    text: "We want to hear from you and welcome your involvement in Promly."
  },
  {
    id: 3,
    image: Pledge,
    title: "Take a Pledge",
    text: "Pledge to make change in your community."
  }
];

const Event = () => {
  return (
    <section id="about">
      <div className="container">
        <h1 className="medium__header purple__header">What is Promly?</h1>
        <p className="title">
          Promly is a social enterprise, co-created with GenZ, that aims to
          unify a generation by empowering human connectedness and providing
          holistic support and education for GenZ in places they will naturally
          gravitate to, both online and offline.
        </p>
        <div className="circle__box">
          <div className="about__circle">
            <p className="title">
              An app that reaches teens where they are and gives them something
              better
            </p>
          </div>
          <div className="about__circle">
            <p className="title">
              An app that reaches teens where they are and gives them something
              better
            </p>
          </div>
          <div className="about__circle">
            <p className="title">
              An app that reaches teens where they are and gives them something
              better
            </p>
          </div>
          <div className="about__circle">
            <p className="title">
              An app that reaches teens where they are and gives them something
              better
            </p>
          </div>
        </div>
        <h1 className="medium__header purple__header">
          Together, we will change outcomes and save lives.
        </h1>
      </div>
      <article className="change__container">
        <div className="change__content">
          <h1 className="medium__header purple__header white">#MakeChange</h1>
          <div className="change__box">
            {data.map(({ id, image, title, text }) => {
              return (
                <article key={id} className="change">
                  <img src={image} className="change__img" alt="" />

                  <h4 className="title">{title}</h4>
                  <p className="main__p">{text}</p>
                </article>
              );
            })}
          </div>
        </div>
      </article>
    </section>
  );
};

export default Event;
