import { useEffect, useState } from "react";
import CharList from "../components/CharList";
import { getAllChar } from "../services/charService";

export default function CharListPage() {

  const [chars, setChars] = useState([]);

  useEffect(() => {
    const loadChars = async () => {
      const data = await getAllChar();
      setChars(data);
    };
    loadChars();
  }, []);

  return (
    <>
      <div className="page-container">
        <CharList chars={chars} />
      </div>
    </>
  );
}
