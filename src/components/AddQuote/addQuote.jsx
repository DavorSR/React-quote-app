import React, { useState } from "react";
import axios from "axios";
import './addQuote.css'

function PostQuote() {
  const url = "http://localhost:3000/quotes";
  const [data, setData] = useState({
    content: "",
    author: "",
    tags: "",
  });

  function submit(e) {
    e.preventDefault();
    axios.post(url, {
      author: data.author,
      content: data.content,
      tags: data.tags,
    });
  }

  function handle(e) {
    const newData = { ...data };
    newData[e.target.id] = e.target.value;
    setData(newData);
  }

  return (
    <div>
      <form onSubmit={(e) => submit(e)}>
        <input
          onChange={(e) => handle(e)}
          id="author"
          value={data.author}
          placeholder="author"
          type="text"
        />
        <textarea
          onChange={(e) => handle(e)}
          id="content"
          value={data.content}
          placeholder="content"
          type="text"
        />
        <input
          onChange={(e) => handle(e)}
          id="tags"
          value={data.tags}
          placeholder="tags"
          type="text"
        />
        <button>Submit</button>
      </form>
    </div>
  );
}

export default PostQuote;
