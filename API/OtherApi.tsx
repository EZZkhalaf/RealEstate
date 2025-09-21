export async function getStaticFooter() {
  try {
    const [top, bottom] = await Promise.all([
      fetch("http://localhost:8055/items/footerUpData", {
        cache: "force-cache",
      }),
      fetch("http://localhost:8055/items/footerTermsAndPolicies", {
        cache: "force-cache",
      }),
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
