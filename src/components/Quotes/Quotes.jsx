import React, { useEffect, useState } from "react";
import Quote from "../Quote/Quote";
import PostQuote from "../AddQuote/addQuote"; 
import "./quotes.css";

const Quotes = () => {
  const [quotes, setQuotes] = useState([]);

  // Fetching data from api
  const quotesData = () => {
    fetch("http://localhost:3000/quotes")
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        setQuotes(data?.quotes);
      })
      .catch((err) => console.log(err));
  };

  useEffect(() => {
    quotesData();

    return () => {
      setQuotes([]);
    };
  }, []);


  return (
    <>
      <PostQuote />
      <h1>Quotes</h1>
      {quotes?.map((quote, key) => (
        <Quote
          id={key}
          author={quote?.author}
          content={quote?.content}
          upvotesCount={quote?.upvotesCount}
          downvotesCount={quote?.downvotesCount}
          givenVoute={quote?.givenVoute}
        />
      ))}
    </>
  );
};

export default Quotes;
