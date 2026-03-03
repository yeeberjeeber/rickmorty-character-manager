export default function EditCharForm() {
  return (
    <form>
      <fieldset>
        <legend>Edit Character</legend>

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
      <button>Edit</button>
    </form>
  );
}
