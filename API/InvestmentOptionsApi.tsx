import { buildUrl, ENDPOINTS } from "./api.config";

export async function getStaticInvestmentOption() {
  try {
    const response = await fetch(
      // "http://localhost:8055/items/investOption"
      buildUrl(ENDPOINTS.INVEST.invest_options),
      {
        //   headers: {
        //     Authorization: `Bearer ${TOKEN}`,
        //   },
        cache: "force-cache",
      }
    );
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
      fetch(buildUrl(ENDPOINTS.OWNER.contact_us_info), {
        next: { revalidate: 60 },
        cache: "force-cache",
      }),
      fetch(buildUrl(ENDPOINTS.OWNER.contact_us_form), {
        next: { revalidate: 60 },

        cache: "force-cache",
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
