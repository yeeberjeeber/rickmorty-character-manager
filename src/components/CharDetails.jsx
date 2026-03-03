//@ts-check

import { useNavigate } from "react-router";
import { deleteChar, createChar } from "../services/charService";

/**
 * @typedef {{ id: string; name: string; gender: string; species: string}} Char
 * @param {{ char: Char}} props
 * @returns
 */
export default function CharDetails({ char }) {
  const navigate = useNavigate();

  const handleDelete = () => {
    deleteChar(char.id);
    navigate("/characters");
  };

  const handleAdd = async () => {
    await createChar({
        CharID: char.id,
        Name: char.name,
        Gender: char.gender,
        Species: char.species
    });
    navigate("/characters");
  }

  return (
    <>
      <h2>{char.name}</h2>
      <dl>
        <dt>Gender</dt>
        <dd>{char.gender} years</dd>
        <dt>Species</dt>
        <dd>{char.species}</dd>
      </dl>

      <button onClick={handleAdd}>Add</button>
    </>
  );
}
