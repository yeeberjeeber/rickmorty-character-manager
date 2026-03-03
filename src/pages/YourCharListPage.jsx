import { useEffect, useState } from "react";
import YourCharList from "../components/YourCharList";
import { getAllAirChar } from "../services/charService";

export default function YourCharListPage() {

  const [chars, setChars] = useState([]);

  useEffect(() => {
    const loadChars = async () => {
      const data = await getAllAirChar();
      setChars(data);
    };
    loadChars();
  }, []);

  return (
    <>
      <header>Your Rick and Morty Characters</header>
      <hr />
      <aside>
        <YourCharList chars={chars} />
      </aside>
    </>
  );
}