import React from "react";
import { Link } from "react-router-dom";
import "./courts.scss";
import Court from "./Court";
const Courts = ({ courts }) => {
  return (
    <section>
      <div className="courts__wrapper">
        {courts.map((court) => {
          return (
            <Link to={`/details/${court.id}`} className="courts__link">
              <Court key={court.id} {...court} />
            </Link>
          );
        })}
      </div>
    </section>
  );
};

export default Courts;
