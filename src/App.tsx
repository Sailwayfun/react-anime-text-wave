import TextWave from "./components/TextWave";

const getCharArray = (text: string) =>
  text.split("").map((char) => ({
    name: char,
    id: crypto.randomUUID(),
  }));

const LINES = [
  "Team Taiwan!",
  "Team Taiwan!",
  "Taiwan is the best country!",
].map((line) => ({
  text: line,
  id: crypto.randomUUID(),
}));

const STARTING_QUOTE = {
  text: '"',
  id: crypto.randomUUID(),
};

const CLOSING_QUOTE = {
  text: '"',
  id: crypto.randomUUID(),
};

export default function App() {
  return (
    <div className="wrapper">
      <div className="content">
        <TextWave
          key={STARTING_QUOTE.id}
          text={getCharArray(STARTING_QUOTE.text)}
          index={0}
          type="starting-quote"
        />
        {LINES.map((line, index) => (
          <TextWave
            key={line.id}
            text={getCharArray(line.text)}
            index={index + 1}
            type="text"
          />
        ))}
      </div>
      <TextWave
        key={CLOSING_QUOTE.id}
        text={getCharArray(CLOSING_QUOTE.text)}
        index={LINES.length + 1}
        type="closing-quote"
      />
    </div>
  );
}
