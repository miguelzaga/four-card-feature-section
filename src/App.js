import { useState } from "react";
import iconKarma from "/src/images/icon-karma.svg";
import iconSupervisor from "/src/images/icon-supervisor.svg";
import iconCalculator from "/src/images/icon-calculator.svg";
import iconTeam from "/src/images/icon-team-builder.svg";

function App() {
  var cardsInfo = [
    {
      title: "Supervisor",
      text: "Monitors activity to identify project roadblocks",
      color: "teal",
      img: iconSupervisor,
    },
    {
      title: "Team Builder",
      text: "Scans our talent network to create the optimal team for your project",
      color: "red",
      img: iconTeam,
    },
    {
      title: "Karma",
      text: "Regularly evaluates our talent to ensure quality",
      color: "yellow",
      img: iconKarma,
    },
    {
      title: "Calculator",
      text: "Uses data from past projects to provide better delivery estimates",
      color: "blue",
      img: iconCalculator,
    },
  ];
  return (
    <main className="feature">
      <section className="feature__top">
        <h2 className="feature__subtitle">Reliable, efficient delivery</h2>
        <h1 className="feature__title"> Powered by Technology</h1>

        <p className="feature__text">
          Our Artificial Intelligence powered tools use millions of project data
          points to ensure that your project is successful
        </p>
      </section>

      <section className="feature__cards">
        {cardsInfo.map(function renderCard(cardInfo, i) {
          return (
            <article
              key={`card--${i}`}
              className={`card card--${cardInfo.color}`}
            >
              <h3 className="card__title">{cardInfo.title}</h3>
              <p className="card__text">{cardInfo.text}</p>
              <img
                className="card__icon"
                src={cardInfo.img}
                alt={`${cardInfo.title} icon`}
              />
            </article>
          );
        })}
      </section>
    </main>
  );
}

export default App;
