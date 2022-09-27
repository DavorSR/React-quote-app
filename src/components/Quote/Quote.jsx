import { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCaretUp } from "@fortawesome/free-solid-svg-icons";
import { faCaretDown } from "@fortawesome/free-solid-svg-icons";
import "./quote.css";

const Quote = (props) => {
  const [activeVote, setActiveVote] = useState(props?.givenVote);

// Calculate percentage of votes
  let resultInPercentages = Math.round(
    (props?.upvotesCount / (props?.upvotesCount + props?.downvotesCount)) * 100
  );

  // Color rating depend on result
  const ratingHandler = (votes) => {
    if (votes >= 90) {
      return "green";
    } else if (votes >= 75) {
      return "lightGreen";
    } else if (votes >= 50) {
      return "orange";
    } else if (votes >= 25) {
      return "darkOrange";
    } else {
      return "red";
    }
  };

  const handleUpVote = () => {
    setActiveVote("upvote");

    // TODO rise up vote for 1

    if (activeVote === "upvote") {
      setActiveVote("none");

      // TODO drop up vote for 1
    }

    // update percentage
  };

  const handleDownVote = () => {
    setActiveVote("downvote");

    // TODO rise up vote for 1

    if (activeVote === "downvote") {
      setActiveVote("none");

      // TODO drop up vote for 1
    }

    // update percentage
  };

  useEffect(() => {
    const axios = require("axios").default;

    axios({
      method: "post",
      url: "http://localhost:3000/quotes/upvotesCount",
      data: {
        // props?.upvotesCount
      },
    });

    //   // TODO get new data on change of vote

    //   // TODO send new data
  }, [activeVote]);

  return (
    <div className="quote">
      <div className="quote-input">
        <span
          className={
            "quote-input__up" +
            (activeVote === "upvote" ? " active" : " deleted")
          }
          onClick={() => handleUpVote()}
        >
          <FontAwesomeIcon icon={faCaretUp} />
        </span>

        <span
          className={`quote-input__rating ${ratingHandler(
            resultInPercentages
          )}`}
        >
          {resultInPercentages}%
        </span>

        <span className="quote-input__votes">
          <span>{props?.upvotesCount}</span> /{" "}
          <span>{props?.downvotesCount}</span>
        </span>

        <span
          className={
            "quote-input__down" +
            (activeVote === "downvote" ? " active" : " deleted")
          }
          onClick={() => handleDownVote()}
        >
          <FontAwesomeIcon icon={faCaretDown} />
        </span>
      </div>

      <div className="quote-data">
        <div className="quote-data__text">{props?.content}</div>
        <span className="quote-data__author">- {props?.author}</span>
      </div>
    </div>
  );
};

export default Quote;
