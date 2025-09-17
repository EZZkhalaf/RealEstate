export async function getStaticFooter() {
  try {
    const [top, bottom] = await Promise.all([
      fetch("http://localhost:8055/items/footerUpData"),
      fetch("http://localhost:8055/items/footerTermsAndPolicies"),
    ]);

    const topData = await top.json();
    const termsAndPolicies = await bottom.json();

    return {
      topdata: topData.data,
      termsAndPolicies: termsAndPolicies.data,
    };
  } catch (error) {
    console.log(error);
    return error;
  }
}
