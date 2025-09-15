const TOKEN = "erEJU7IDSxghSVFDnwDh1ZyeELkKWnGR";
export async function getStaticEstates() {
  try {
    const response = await fetch("http://localhost:8055/items/estateCard", {
      //   headers: {
      //     Authorization: `Bearer ${TOKEN}`,
      //   },
    });
    const result = await response.json();
    return result.data;
  } catch (error) {
    console.log(error);
    return error;
  }
}

export async function getStaticSingleEstate(id: string) {
  console.log("The ID passed is:", id);

  try {
    const response = await fetch(
      `http://localhost:8055/items/estateDetail/${id}` // <- use /collectionName/:id
      // optionally add headers if needed
      // {
      //   headers: {
      //     Authorization: `Bearer ${TOKEN}`,
      //   },
      // }
    );

    const result = await response.json();
    return result.data; // this will be the single estate object
  } catch (error) {
    console.log(error);
    return error;
  }
}
