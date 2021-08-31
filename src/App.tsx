import React, { ChangeEvent, Dispatch, FormEvent, useState } from "react";
import { loremIpsum } from "lorem-ipsum";
import parse from "html-react-parser";

function App() {
  return (
    <main>
      <h1>React Lorem Ipsum Generator</h1>
      <Generator />
    </main>
  );
}

function Generator() {
  const [lorem, setLorem] = useState("");

  return (
    <>
      <Form setLorem={setLorem} />
      <Display lorem={lorem} />
    </>
  );
}

//Props for form component
interface FormInterface {
  setLorem: Dispatch<React.SetStateAction<string>>;
}

function Form(props: FormInterface) {
  const [count, setCount] = useState(5);
  const [units, setUnits] = useState("paragraphs");

  //saves count if value if number and bigger than zero
  const handleNumberChange = (e: ChangeEvent<HTMLInputElement>) => {
    !isNaN(parseInt(e.target.value)) &&
      parseInt(e.target.value) > 0 &&
      setCount(parseInt(e.target.value));
  };

  //saves units from radio button
  const handleRadioChange = (e: ChangeEvent<HTMLInputElement>) => {
    setUnits(e.target.value);
  };

  //generates lorem based on input from form
  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (units === "paragraphs" || units === "sentences" || units === "words") {
      const generatedLorem = loremIpsum({ format: "html", units, count });
      props.setLorem(generatedLorem);
    }
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

//props for display
interface DisplayInterface {
  lorem: string;
}

//takes generated lorem and parses it to a html
function Display(props: DisplayInterface) {
  return <section>{parse(props.lorem)}</section>;
}

export default App;

//loremIpsum({ format: "html", units: "paragraphs", count: 3 });
