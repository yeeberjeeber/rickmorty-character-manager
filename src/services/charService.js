export async function getAllChar() {
  const url = "https://rickandmortyapi.com/api/character";
  try {
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error(`Response status: ${response.status}`);
    }

    const result = await response.json();
    return result.results;
  } catch (error) {
    console.error(error);
  }
}

export async function getAllAirChar() {
  const url = `https://api.airtable.com/v0/${import.meta.env.VITE_AIRTABLE_BASEID}/${import.meta.env.VITE_AIRTABLE_TABLEID}`;
  try {
    const response = await fetch(url, {
    method: "GET",
      headers: {
        Authorization: `Bearer ${import.meta.env.VITE_AIRTABLE_TOKEN}`,
      },
    });
    if (!response.ok) {
      throw new Error(`Response status: ${response.status}`);
    }

    const result = await response.json();

    // map Airtable records to array of Char objects
    const chars = result.records.map(record => ({
      id: record.id,
      name: record.fields.Name,
      gender: record.fields.Gender,
      species: record.fields.Species
    }));

    return chars;
  } catch (error) {
    console.error(error);
  }
}

export async function getOneChar(charId) {
  const url = `https://rickandmortyapi.com/api/character/${charId}`;
  try {
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error(`Response status: ${response.status}`);
    }

    const result = await response.json();
    return result;
  } catch (error) {
    console.error(error);
  }
}

export async function createChar(data) {
  const url = `https://api.airtable.com/v0/${import.meta.env.VITE_AIRTABLE_BASEID}/${import.meta.env.VITE_AIRTABLE_TABLEID}`;
  try {
    const response = await fetch(url, {
      method: "POST",
      headers: {
        Authorization: `Bearer ${import.meta.env.VITE_AIRTABLE_TOKEN}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({fields: data,}),
    });
    if (!response.ok) {
      throw new Error(`Response status: ${response.status}`);
    }

    const result = await response.json();
    return result;
  } catch (error) {
    console.error(error.message);
  }
}

//Pending some work here
export async function deleteChar(petId) {
  const url = `http://localhost:3000/pets/${petId}`;
  try {
    const response = await fetch(url, {
      method: "DELETE",
    });
    if (!response.ok) {
      throw new Error(`Response status: ${response.status}`);
    }

    const result = await response.json();
    console.log(result);
  } catch (error) {
    console.error(error.message);
  }
}
