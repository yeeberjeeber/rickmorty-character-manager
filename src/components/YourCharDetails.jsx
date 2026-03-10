//@ts-check
import { useNavigate } from "react-router";
import { deleteChar } from "../services/charService";

/**
 * @typedef {Object} Char
 * @property {string} id
 * @property {string} name
 * @property {string} gender
 * @property {string} species
 * @property {string} status
 * @property {string} type
 * @property {string} origin
 * @property {string} location
 * @property {{url: string}[]} image
 * @property {string} episodes
 */

/**
 * @param {{ char: Char }} props
 */
export default function YourCharDetails({ char }) {
  const navigate = useNavigate();

  const handleDelete = async () => {
    await deleteChar(char.id);
    navigate("/characters/yours");
};

  if (!char) return <p>Loading character...</p>;

  return (
    <div className="char-details-card-rect">
      {char.image && char.image.length > 0 && (
        <img
          src={char.image[0].url}
          alt={char.name}
          className="char-card-image-rect"
        />
      )}

      <div className="char-card-content-rect">
        <h2 className="char-card-name">{char.name}</h2>

        <div className="char-card-info-grid">
          <div className="info-box">
            <p><strong>Status:</strong> {char.status || "unknown"}</p>
          </div>

          <div className="info-box">
            <p><strong>Species:</strong> {char.species || "unknown"}</p>
          </div>

          <div className="info-box">
            <p><strong>Type:</strong> {char.type || "N/A"}</p>
          </div>

          <div className="info-box">
            <p><strong>Gender:</strong> {char.gender || "unknown"}</p>
          </div>

          <div className="info-box">
            <p><strong>Origin:</strong> {char.origin || "unknown"}</p>
          </div>

          <div className="info-box">
            <p><strong>Location:</strong> {char.location || "unknown"}</p>
          </div>

          <div className="info-box">
            <p><strong>Episodes:</strong> {char.episodes?.split(", ").length || 0}</p>
          </div>
        </div>

        <div className="char-card-buttons">
          <button onClick={handleDelete} className="delete-button">Delete</button>
        </div>
      </div>
    </div>
  );
}