import { useEffect, useState } from "react";
import CreatePetForm from "../components/CreatePetForm";
import CharList from "../components/CharList";
import { getAllChar } from "../services/charService";

export default function CreateCharPage() {
  const [chars, setChars] = useState([]);

  useEffect(() => {
    const loadChar = async () => {
      const data = await getAllChar();
      setChars(data);
    };
    loadChar();
  }, []);

  const changeState = (newChar) => {
    setChars([...chars, newChar]);
  };

  return (
    <>
      <h1>Create Your Own Character!</h1>
      <CharList chars={chars} />
      <hr />
      <CreatePetForm changeState={changeState} />
    </>
  );
}
