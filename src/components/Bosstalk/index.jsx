import React, { useEffect } from "react";
import "./bosstalk.css";
import bosstalk from "../../assets/teamIMG/img1.jpeg";
import { Link } from "react-router-dom";

const Bosstalk = () => {
  // useEffect(() => {
  //   AOS.init({
  //     duration: 800,
  //     offset: 250
  //   });
  // }, []);
  return (
    <section id="bosstalk">
      <div className="container">
        <img src={bosstalk} alt="" className="bosstalk__img" />
        <h2 className="medium__header purple__header">Lorem, ipsum.</h2>
        <p className="big__p">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Officiis
          exercitationem esse quos officia, magnam praesentium, dolorem itaque
          sapiente similique ipsam voluptates eos minima velit commodi. Earum
          aliquam suscipit praesentium veritatis!
        </p>
        <p className="big__p">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet est
          accusamus ullam, soluta, voluptatem impedit cum quam deleniti animi
          nemo eos voluptatibus laborum ut eaque vero nobis. Laborum fugit,
          optio impedit illum quam soluta natus atque aut eius dolorem labore
          ratione doloribus amet aspernatur a exercitationem magni assumenda.
          Obcaecati vitae fugiat expedita, modi cumque provident, ullam sequi
          quas quasi fugit accusantium exercitationem esse eum sint libero nihil
          neque nulla necessitatibus!
        </p>
        <p className="big__p">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia nisi at
          nobis. Earum excepturi, dignissimos, cum veritatis odio suscipit autem
          ex impedit dolores placeat ea, quas nihil? Sequi velit ut maxime iste
          laborum sapiente. Iste, accusantium rem! Quos, id beatae! Reiciendis
          libero velit fugit perspiciatis dolor fugiat officiis quos ipsam
          aspernatur quas rem et tenetur atque autem cum in asperiores quod
          quaerat nihil at nulla, quae veniam molestias ratione. Modi omnis
          possimus eligendi mollitia eum cupiditate rem quae nobis blanditiis
          vero, dolorum, aut nesciunt ut cumque. Fugit ea numquam tempora.
        </p>
      </div>
    </section>
  );
};

export default Bosstalk;
