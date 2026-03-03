//@ts-check
import { Link } from "react-router";

/**
 * @typedef {{ id: string, name: string }} Char
 * @param {{ chars: Char[]}} param0
 * @returns
 */

export default function CharList( { chars } ) {
  if (chars.length === 0) {
    return <p>No Characters Available</p>;
  }

  return (
    <>
      <ul>
        {chars.map((char) => (
          <li key={char.id}>
            <Link to={`/characters/${char.id}`}>{char.name}</Link>
          </li>
        ))}
      </ul>
    </>
  );
}
