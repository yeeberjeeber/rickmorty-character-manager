//@ts-check

import { useNavigate } from "react-router";
import { deleteChar, createChar } from "../services/charService";

/**
 * /**
 * @typedef {Object} Char
 * @property {number} id
 * @property {string} name
 * @property {string} status
 * @property {string} species
 * @property {string} type
 * @property {string} gender
 * @property {{name:string, url:string}} origin
 * @property {{name:string, url:string}} location
 * @property {string} image
 * @property {string[]} episode
 */
 /**
 * @param {{ char: Char }} props
 */
export default function CharDetails({ char }) {
  const navigate = useNavigate();

  const handleAdd = async () => {
    await createChar({
      CharID: char.id,
      Name: char.name,
      Gender: char.gender,
      Species: char.species,
      Status: char.status,
      Type: char.type || "N/A",
      Origin: char.origin?.name || "Unknown",
      Location: char.location?.name || "Unknown",
      Image: [{ url: char.image }],
      Episodes: char.episode.join(", ") // or JSON.stringify(char.episode)
    });
    navigate("/characters");
  }

  return (
    <div className="char-details-card-rect">
  {char.image && (
    <img src={char.image} alt={char.name} className="char-card-image-rect" />
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

      {char.type && (
        <div className="info-box">
          <p><strong>Type:</strong> {char.type}</p>
        </div>
      )}

      <div className="info-box">
        <p><strong>Gender:</strong> {char.gender || "unknown"}</p>
      </div>

      <div className="info-box">
        <p>
          <strong>Origin:</strong>{" "}
          {char.origin?.url ? (
            <a href={char.origin.url} target="_blank" rel="noreferrer">
              {char.origin.name}
            </a>
          ) : (
            char.origin?.name || "unknown"
          )}
        </p>
      </div>

      <div className="info-box">
        <p>
          <strong>Location:</strong>{" "}
          {char.location?.url ? (
            <a href={char.location.url} target="_blank" rel="noreferrer">
              {char.location.name}
            </a>
          ) : (
            char.location?.name || "unknown"
          )}
        </p>
      </div>

      <div className="info-box">
        <p><strong>Episodes:</strong> {char.episode?.length || 0}</p>
      </div>
    </div>

    <div className="char-card-buttons">
      <button onClick={handleAdd} className="add-button">Add</button>
    </div>
  </div>
</div>
  );
}
