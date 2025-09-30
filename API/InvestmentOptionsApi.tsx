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
      fetch(
        // "http://localhost:8055/items/contactUsInfo"
        buildUrl(ENDPOINTS.OWNER.contact_us_info),
        {
          cache: "force-cache",
        }
      ),
      fetch(
        // "http://localhost:8055/items/conactUsForm"
        buildUrl(ENDPOINTS.OWNER.contact_us_form),
        {
          cache: "force-cache",
        }
      ),
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
