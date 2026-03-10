import { useEffect, useState } from "react";
import { useParams } from "react-router";
import YourCharDetails from "../components/YourCharDetails";
import { getOneAirChar } from "../services/charService";

export default function YourOneCharPage() {
  const [char, setChar] = useState([]);
  const { charId } = useParams();

  useEffect(() => {
    const loadChar = async () => {
      const data = await getOneAirChar(charId);
      setChar(data);
    };
    loadChar();
  }, [charId]);

  return (
    <>
      <h1>Character: {charId}</h1>
      <YourCharDetails char={char} />
    </>
  );
}
