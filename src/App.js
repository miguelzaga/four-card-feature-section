import { useState } from "react";

function App() {
  var cardsInfo = [
    {
      title: "Supervisor",
      text: "Monitors activity to identify project roadblocks",
    },
    {
      title: "Team Builder",
      text: "Scans our talent network to create the optimal team for your project",
    },
    {
      title: "Karma",
      text: "Regularly evaluates our talent to ensure quality",
    },
    {
      title: "Calculator",
      text: "Uses data from past projects to provide better delivery estimates",
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
        {cardsInfo.map(function renderCard(cardInfo) {
          return (
            <article className="card">
              <h3 className="card__title">{cardInfo.title}</h3>
              <p className="card__text">{cardInfo.text}</p>
            </article>
          );
        })}
      </section>
    </main>
  );
}

export default App;
