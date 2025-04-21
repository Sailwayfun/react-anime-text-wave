import TextWave from "./components/TextWave";

const text = "Best way to learn React is to build a project";

const textArray = text.split(" ").map((word) => ({
  name: word,
  id: crypto.randomUUID(),
}));

export default function App() {
  return (
    <div className="wrapper">
      {textArray.map((text) => (
        <TextWave key={text.id} text={text} />
      ))}
    </div>
  );
}
