import React from "react";
import "./court.scss";

const toCommaString = (num) => {
  let arr = [];

  while (num > 1000) {
    let n = num % 1000;
    let s = "";
    if (n < 100) s = "0";
    if (n < 10) s = "00";
    arr.unshift(s + n);
    num = Math.floor(num / 1000);
  }

  arr.unshift(num.toString());
  let str = arr.join();
  return str;
};

const decamelize = (str, separator) => {
  separator = typeof separator === "undefined" ? "_" : separator;

  return str
    .replace(/([a-z\d])([A-Z])/g, "$1" + separator + "$2")
    .replace(/([A-Z]+)([A-Z][a-z\d]+)/g, "$1" + separator + "$2")
    .toLowerCase();
};

const Court = ({ title, address, price, type }) => {
  return (
    <>
      <div className="court__wrapper">
        <div className="court__img-wrapper">
          <p
            className={
              type === "IndependentLiving"
                ? "court__type court__type-ind"
                : "court__type court__type-support"
            }
          >
            {decamelize(type, " ")}
          </p>
        </div>
        <div className="court__content">
          <div className="court__top-content">
            <p className="court__title">{title}</p>
            <p className="court__address">{address}</p>
          </div>
          <div className="court__bottom-content">
            <p className="court__price">
              New Properties for Sale from <span>£{toCommaString(price)}</span>
            </p>
            <p className="court__prop">Shared Ownership Available</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Court;
