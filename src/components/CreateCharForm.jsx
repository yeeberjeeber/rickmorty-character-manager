import { createChar } from "../services/charService";

export default function CreateCharForm({ changeState }) {
  const handleSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);
    const data = Object.fromEntries(formData);
    const newChar = await createChar(data);
    changeState(newChar);
  };

  return (
    <form onSubmit={handleSubmit}>
      <fieldset>
        <legend>Create Pet</legend>

        <label>
          Name: <input type="text" name="name" />
        </label>

        <label>
          Gender: <input type="text" name="gender" />
        </label>

        <label>
          Species: <input type="text" name="species" />
        </label>
      </fieldset>
      <button>Create</button>
    </form>
  );
}
