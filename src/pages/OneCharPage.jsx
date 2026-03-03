import { useEffect, useState } from "react";
import { useParams } from "react-router";
import CharDetails from "../components/CharDetails";
import { getOneChar } from "../services/charService";

export default function OneCharPage() {
  const [char, setChar] = useState([]);
  const { charId } = useParams();

  useEffect(() => {
    const loadChar = async () => {
      const data = await getOneChar(charId);
      setChar(data);
    };
    loadChar();
  }, [charId]);

  return (
    <>
      <h1>Character: {charId}</h1>
      <CharDetails char={char} />
    </>
  );
}
