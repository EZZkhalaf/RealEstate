export async function getStaticInvestmentOption() {
  try {
    const response = await fetch("http://localhost:8055/items/investOption", {
      //   headers: {
      //     Authorization: `Bearer ${TOKEN}`,
      //   },
      cache: "force-cache",
    });
    const result = await response.json();
    return result.data;
  } catch (error) {
    console.log(error);
    return error;
  }
}

export async function getStaticContactUsInfo() {
  try {
    const [contactRes, addressRes] = await Promise.all([
      fetch("http://localhost:8055/items/contactUsInfo", {
        cache: "force-cache", // ✅ must be here
      }),
      fetch("http://localhost:8055/items/conactUsForm", {
        cache: "force-cache", // ✅ must be here
      }),
    ]);

    const contactData = await contactRes.json();
    const addressData = await addressRes.json();

    return {
      contact: contactData.data,
      form: addressData.data,
    };
  } catch (error) {
    console.log(error);
    return error;
  }
}
