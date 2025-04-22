import TextWave from "./components/TextWave";

const getCharArray = (text: string) =>
  text.split("").map((char) => ({
    name: char,
    id: crypto.randomUUID(),
  }));

const LINES = [
  "\"The best way",
  "to learn React",
  "is to build a project",
  "and practice",
  "every day\"",
].map((line) => ({
  text: line,
  id: crypto.randomUUID(),
}));

export default function App() {
  return (
    <div className="wrapper">
      {LINES.map((line, index) => (
        <TextWave key={line.id} text={getCharArray(line.text)} index={index} />
      ))}
    </div>
  );
}
