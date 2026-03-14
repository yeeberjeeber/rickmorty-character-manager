//@ts-check
import { Link } from "react-router";

/**
 * @typedef {{ id: string, name: string, image: string }} Char
 * @param {{ chars: Char[]}} param0
 * @returns
 */

export default function CharList( { chars } ) {
  if (chars.length === 0) {
    return <p>No Characters Available</p>;
  }

   return (
      <div className="char-grid">
        {chars.map((char) => (
          <div className="char-card" key={char.id}>
            {char.image && (
              <img src={char.image} alt={char.name} className="char-image" />
            )}
            <Link to={`/characters/${char.id}`} className="char-name">
              {char.name}
            </Link>
          </div>
        ))}
      </div>
  );
}
