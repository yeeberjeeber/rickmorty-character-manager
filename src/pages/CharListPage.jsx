import { useEffect, useState } from "react";
import CharList from "../components/CharList";
import { getAllChar } from "../services/charService";

export default function CharListPage() {

  const [chars, setChars] = useState([]);
  const [page, setPage] = useState(1);
  const [info, setInfo] = useState({ prev: null, next: null });

  useEffect(() => {
    const loadChars = async () => {
      const data = await getAllChar(page);
      setChars(data.results);
      setInfo(data.info);
    };
    loadChars();
  }, [page]);

  return (
    <>
      <div className="page-container">
        <CharList chars={chars} />
        <div className="pagination-buttons">
          <button disabled={!info.prev} onClick={() => setPage(page - 1)}>Prev</button>
          <button disabled={!info.next} onClick={() => setPage(page + 1)}>Next</button>
        </div>
      </div>
    </>
  );
}
