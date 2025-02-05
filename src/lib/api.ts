const API_URL = "https://fedskillstest.coalitiontechnologies.workers.dev";

function getBasicAuthHeader() {
  const credentials = btoa("coalition:skills-test");
  return `Basic ${credentials}`;
}

export async function fetchPatients() {
  try {
    const response = await fetch(API_URL, {
      headers: {
        Authorization: getBasicAuthHeader(),
      },
    });

    if (!response.ok) {
      throw new Error("Failed to fetch patients");
    }

    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Error fetching patients:", error);
    throw error;
  }
}
