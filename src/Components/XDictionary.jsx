import React, { useState } from "react";

const XDictionary = () => {
  const [message, setMessage] = useState("");

  const dictionary = [
    {
      word: "React",
      meaning: "A JavaScript library for building user interfaces.",
    },

    { word: "Component", meaning: "A reusable building block in React." },

    { word: "State", meaning: "An object that stores data for a component." },
  ];

  const handleSubmit = (event) => {
    event.preventDefault();

    let searchText = event.target.elements[0].value;
    const meaning = dictionary.find(
      (element) =>
        element.word.toLocaleLowerCase() === searchText.toLocaleLowerCase()
    );
    if (meaning?.meaning) setMessage(meaning.meaning);
    else setMessage("Word not found in the dictionary.");
  };

  return (
    <div>
      <h1>Dictionary App</h1>
      <form action="" onSubmit={handleSubmit}>
        <input type="text" placeholder="Search for a word" />
        <button>Search</button>
      </form>
      <b>Definition:</b>
      <p>{message}</p>
    </div>
  );
};

export default XDictionary;
