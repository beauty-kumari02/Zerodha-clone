import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleDown, faAngleUp } from '@fortawesome/free-solid-svg-icons';

const teamData = [
  {
    name: "Nikhil Kamath",
    role: "Co-founder & CFO",
    image: "media/Nikhil Kamath.jpg",
    bio: `Nikhil is an astute and experienced investor, and he heads financial planning at Zerodha. An avid reader, he always appreciates a good game of chess.`,
  },
  {
    name: "Dr. Kailash Nadh",
    role: "CTO",
    image: "media/Dr. Kailash Nadh.jpg",
    bio: `Kailash has a PhD in Artificial Intelligence & Computational Linguistics, and is the brain behind all our technology and products. He has been a developer from his adolescence and continues to write code every day.`,
  },
  {
    name: "Venu Madhav",
    role: "COO",
    image: "media/Venu Madhav.jpg",
    bio: `Venu is the backbone of Zerodha taking care of operations and ensuring that we are compliant to rules and regulations. He has over a dozen certifications in financial markets and is also proficient in technical analysis. Workouts, cycling, and adventuring is what he does outside of Zerodha.`,
  },
  {
    name: "Hanan Delvi",
    role: "CCO",
    image: "media/Hanan Delvi.jpg",
    bio: `We take pride in the way we support our clients, and Hanan is responsible for this with his never ending flow of energy. He is the man behind many of our support initiatives that have helped us stay ahead of the game. A free thinker, Hanan can be seen posing as one in his free time.`,
  },
  {
    name: "Seema Patil",
    role: "Director",
    image: "media/Seema Patil.jpg",
    bio: `Seema who has led the quality team since the beginning of Zerodha, is now a director. She is an extremely disciplined fitness enthusiast.`,
  },
  {
    name: "Karthik Rangappa",
    role: "Chief of Education",
    image: "media/Karthik Rangappa.jpg",
    bio: `Karthik "Guru" Rangappa single handedly wrote Varsity, Zerodha's massive educational program. He heads investor education initiatives at Zerodha and loves stock markets, classic rock, single malts, and photography.`,
  },
  {
    name: "Austin Prakesh",
    role: "Director Strategy",
    image: "media/Austin Prakesh.jpg",
    bio: `Austin is a successful self-made entrepreneur from Singapore. His area of specialty revolves around helping organisations grow by optimizing revenue streams and creating growth strategies. He is a boxing enthusiast and loves collecting exquisite watches.`,
  },
];

function Team() {
  const [openBio, setOpenBio] = useState(null);

  const toggleBio = (index) => {
    setOpenBio(openBio === index ? null : index);
  };

  return (
    <div className="container my-5">
      <h2 className="text-center mb-5">People</h2>

      {/* Nithin Kamath - unchanged */}
      <div className="row align-items-center mb-5">
        <div className="col-md-6 text-center">
          <img
            src="media/nithinKamath.jpg"
            alt="Nithin Kamath"
            className="rounded-circle img-fluid"
            style={{ width: "60%" }}
          />
          <h4 className="mt-3">Nithin Kamath</h4>
          <h6 className="text-muted">Founder, CEO</h6>
        </div>
        <div className="col-md-6">
          <p>Nithin bootstrapped and founded Zerodha in 2010 to overcome the hurdles he faced during his decade-long stint as a trader. Today, Zerodha has changed the landscape of the Indian broking industry.</p>
          <p>He is a member of the SEBI Secondary Market Advisory Committee (SMAC) and the Market Data Advisory Committee (MDAC).</p>
          <p>Playing basketball is his zen.</p>
          <p>
            Connect on <a href="">Homepage</a> / <a href="">TradingQnA</a> / <a href="">Twitter</a>
          </p>
        </div>
      </div>

      {/* Other Team Members */}
      <div className="row">
        {teamData.map((member, index) => (
          <div className="col-md-4 mb-5 text-center" key={index}>
            <img
              src={member.image}
              alt={member.name}
              className="rounded-circle img-fluid mb-3"
              style={{ width: "60%" }}
            />
            <h5 className="mb-1">{member.name}</h5>
            <p className="text-muted">{member.role}</p>
            <div
              className="text-muted mb-2"
              style={{ cursor: "pointer" }}
              onClick={() => toggleBio(index)}
            >
              Bio{" "}
              <FontAwesomeIcon icon={openBio === index ? faAngleUp : faAngleDown} />
            </div>
            {openBio === index && (
              <p className="px-3 text-start" style={{ fontSize: "0.95rem", lineHeight: "1.6" }}>
                {member.bio}
              </p>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}

export default Team;
