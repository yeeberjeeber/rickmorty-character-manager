export async function getAllChar(page = 1) {
  const url = `https://rickandmortyapi.com/api/character?page=${page}`;
  try {
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error(`Response status: ${response.status}`);
    }

    const result = await response.json();
    return {
      results: result.results,
      info: result.info
    }
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

    const chars = result.records.map(record => ({
      id: record.id,
      charId: record.fields.CharID,
      name: record.fields.Name,
      image: record.fields.Image || [], // include Image array
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

export async function getOneAirChar(charId) {
  const url = `https://api.airtable.com/v0/${import.meta.env.VITE_AIRTABLE_BASEID}/${import.meta.env.VITE_AIRTABLE_TABLEID}?filterByFormula=CharID=${charId}`;

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
    if (!result.records || result.records.length === 0) return null;

    const record = result.records[0];

    // record.fields is your object
    return {
      id: record.id,
      charId: record.fields.CharID,
      name: record.fields.Name,
      gender: record.fields.Gender,
      species: record.fields.Species,
      image: record.fields.Image || [],
      status: record.fields.Status,
      origin: record.fields.Origin,
      location: record.fields.Location,
      episodes: record.fields.Episodes
    };
  } catch (error) {
    console.error("Failed to fetch character:", error);
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

export async function deleteChar(charId) {
  const url = `https://api.airtable.com/v0/${import.meta.env.VITE_AIRTABLE_BASEID}/${import.meta.env.VITE_AIRTABLE_TABLEID}/${charId}`;
  try {
    const response = await fetch(url, {
      method: "DELETE",
      headers: {
        Authorization: `Bearer ${import.meta.env.VITE_AIRTABLE_TOKEN}`,
      },
    });

    if (!response.ok) {
      throw new Error(`Response status: ${response.status}`);
    }

    const result = await response.json();
    return result;
  } catch (error) {
    console.error("Failed to delete character:", error.message);
  }
}