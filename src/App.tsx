import React, { ChangeEvent, FormEvent, useState } from "react";
import { loremIpsum } from "lorem-ipsum";

function App() {
  return (
    <main>
      <h1>React Lorem Ipsum Generator</h1>
      <Generator />
    </main>
  );
}

function Generator() {
  const [count, setCount] = useState(5);
  const [units, setUnits] = useState("paragraphs");

  const handleNumberChange = (e: ChangeEvent<HTMLInputElement>) => {
    !isNaN(parseInt(e.target.value)) &&
      parseInt(e.target.value) > 0 &&
      setCount(parseInt(e.target.value));
  };

  const handleRadioChange = (e: ChangeEvent<HTMLInputElement>) => {
    setUnits(e.target.value);
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
  };

  return (
    <form onSubmit={handleSubmit}>
      <section>
        <input
          type="number"
          name="count"
          value={count}
          onChange={handleNumberChange}
        />
      </section>
      <section>
        <div>
          <input
            type="radio"
            name="units"
            value="paragraphs"
            id="paragraphs"
            checked={units === "paragraphs"}
            onChange={handleRadioChange}
          />
          <label htmlFor="paragraphs">paragraphs</label>
        </div>
        <div>
          <input
            type="radio"
            name="units"
            value="sentences"
            id="sentences"
            checked={units === "sentences"}
            onChange={handleRadioChange}
          />
          <label htmlFor="sentences">sentences</label>
        </div>
        <div>
          <input
            type="radio"
            name="units"
            value="words"
            id="words"
            checked={units === "words"}
            onChange={handleRadioChange}
          />
          <label htmlFor="words">words</label>
        </div>
      </section>
      <button type="submit">Generate</button>
    </form>
  );
}

export default App;

//loremIpsum({ format: "html", units: "paragraphs", count: 3 });
