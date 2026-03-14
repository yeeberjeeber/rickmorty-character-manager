//@ts-check
import { Link } from "react-router";

/**
 * @typedef {{
 *   id: string;
 *   charId: string;
 *   name: string;
 *   image: { url: string }[];
 * }} Char
 *
 * @param {{ chars: Char[] }} props
 */
export default function YourCharList({ chars }) {
  if (chars.length === 0) return <p>No Characters Available</p>;

  return (
    <div className="char-grid">
      {chars.map((char) => (
        <div className="char-card" key={char.id}>
          {char.image && char.image.length > 0 && (
            <img
              src={char.image[0].url}
              alt={char.name}
              className="char-image"
              style={{ display: "block", margin: "0 auto" }}
            />
          )}
          <Link to={`/characters/${char.charId}`} className="char-name">
            {char.name}
          </Link>
        </div>
      ))}
    </div>
  );
}