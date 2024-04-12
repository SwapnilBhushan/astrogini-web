import React, { useState, useEffect } from "react";
import timer1 from "../../assets/images/content/astrogini_timer_1.png";
import timer2 from "../../assets/images/content/astrogini_timer_2.png";
import timer3 from "../../assets/images/content/astrogini_timer_3.png";
import timer4 from "../../assets/images/content/astrogini_timer_4.png";

const timerData = [
  { image: timer1, from: 0, to: 100, speed: 5000, label: "Offices Worldwide" },
  {
    image: timer2,
    from: 0,
    to: 5000,
    speed: 500,
    label: "Skilled Astrologers",
  },
  { image: timer3, from: 0, to: 600, speed: 5000, label: "Countries Covered" },
  {
    image: timer4,
    from: 0,
    to: 200,
    speed: 5000,
    label: "Years of Experiences",
  },
];

const Records = () => {
  const [counters, setCounters] = useState(Array(timerData.length).fill(0));

  useEffect(() => {
    const timers = timerData.map((data, index) => {
      const { from, to, speed } = data;
      let current = from;
      const increment = to > from ? 100 : -100;
      const duration = Math.abs(speed / (to - from));
      return setInterval(() => {
        current += increment;
        setCounters((prevCounters) => {
          const newCounters = [...prevCounters];
          newCounters[index] = current;
          return newCounters;
        });
        if (current === to) clearInterval(timers[index]);
      }, duration);
    });
    return () => {
      timers.forEach((timer) => clearInterval(timer));
    };
  }, [timerData]);

  return (
    <div className="ast_timer_wrapper ast_toppadder40 ast_bottompadder20">
      <div className="ast_img_overlay"></div>
      <div className="container">
        <div className="row">
          <div className="col-lg-12 col-md-12 col-sm-12 col-12">
            <div className="ast_heading">
              <h1 style={{ fontWeight: "bold" }}>
                Now <span>We Have</span>
              </h1>
              <p></p>
            </div>
          </div>
          <div className="ast_counter_wrapper row">
            {timerData.map((data, index) => (
              <div key={index} className="col-lg-3 col-md-3 col-sm-6 col-12">
                <div className="ast_counter">
                  <span>
                    <img src={data.image} alt="timer" />
                  </span>
                  <h2
                    style={{ fontWeight: "bold" }}
                    className="timer"
                    data-from={data.from}
                    data-to={data.to}
                    data-speed={data.speed}
                  >
                    {counters[index]}
                  </h2>
                  <h4 style={{ fontWeight: "bold" }}>{data.label}</h4>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Records;
