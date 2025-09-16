export default async function getStaticAgents({}) {
  try {
    const response = await fetch(`http://localhost:8055/items/agents`);

    const result = await response.json();
    return result.data;
  } catch (error) {
    console.log(error);
    return error;
  }
}
