import React, { useEffect, useState } from "react";
import "./contact.css";
import { Link } from "react-router-dom";

// Location icon
import { GoLocation } from "react-icons/go";
// Mail icon
import { MdAlternateEmail } from "react-icons/md";
// Call icon
import { MdOutlineCall } from "react-icons/md";
import { AiOutlineInstagram } from "react-icons/ai";
import { AiOutlineTwitter } from "react-icons/ai";

const info = [
  {
    icon: <GoLocation />,
    desc: "Lorem ipsum dolor sit."
  },
  {
    icon: <MdAlternateEmail />,
    desc: "knwmdz@knwmdz"
  },
  {
    icon: <MdOutlineCall />,
    desc: "+976 99887766"
  }
];

const follow = [
  {
    icon: <AiOutlineInstagram />,
    link: "https://www.instagram.com/theknowmadz/",
    desc: "instagram.com/theknowmadz"
  }
  //   {
  //     icon: <AiOutlineTwitter />,
  //     desc: "+976 99887766"
  //   }
];
const Contact = () => {
  // useEffect(() => {
  //   AOS.init({
  //     duration: 800,
  //     offset: 250
  //   });
  // }, []);
  const [data, setData] = useState({
    name: "",
    email: "",
    message: "",
    date: ""
  });
  const { name, email, message } = data;

  const handleChange = e =>
    setData({ ...data, [e.target.name]: e.target.value });

  const handleSubmit = async e => {
    e.preventDefault();
    const input = document.querySelectorAll(".contact__input");
    try {
      await fetch(
        "https://v1.nocodeapi.com/fl1phover/google_sheets/oZzHLeaLfKORfoTO?tabId=Sheet1",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json"
          },
          body: JSON.stringify([
            [name, email, message, new Date().toLocaleString()]
          ])
        }
      );
      alert("Амжилттай бүртгэгдлээ!");
    } catch (err) {
      console.log(err);
      input.value = "";
    }
  };
  return (
    <section id="contact">
      <div className="container">
        <div className="contact__container">
          <h2 className="medium__header orange__header">Contact Us</h2>
          <p className="big__p">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus
            dignissimos veritatis accusantium ipsa ea nam maxime alias, fuga
            cumque dolorum explicabo dicta ut consectetur quod quis, eius
            excepturi quidem mollitia doloremque natus consequatur fugiat
            aperiam voluptas? Voluptates nobis ratione quisquam?
          </p>
        </div>
        <div className="form__container">
          <h2 className="medium__header orange__header">Send us a message</h2>
          <form className="contact__form" onSubmit={handleSubmit}>
            <label htmlFor="" className="contact__label">
              Name
            </label>
            <input
              type="text"
              name="name"
              value={name}
              className="contact__input"
              onChange={handleChange}
            />
            <label htmlFor="" className="contact__label">
              Email
            </label>
            <input
              type="text"
              name="email"
              value={email}
              className="contact__input"
              onChange={handleChange}
              required
            />
            <label htmlFor="" className="contact__label">
              Message
            </label>
            <textarea
              name="message"
              value={message}
              className="contact__input contact__textarea"
              onChange={handleChange}
            />
            <div>
              <button className="small__btn">Submit</button>
            </div>
          </form>
        </div>
        <div className="contact__info">
          <div className="info__wrapper">
            <h2 className="medium__header orange__header">Get in touch</h2>
            {info.map(({ icon, desc }, index) => {
              return (
                <p className="big__p">
                  {icon} {desc}
                </p>
              );
            })}
          </div>
          <div className="info__wrapper">
            <h2 className="medium__header orange__header">Follow Us</h2>
            {follow.map(({ icon, desc, link }, index) => {
              return (
                <a href={link} className="big__p" target="_blank">
                  {icon} {desc}
                </a>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
