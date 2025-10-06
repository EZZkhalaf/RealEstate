import { buildUrl, ENDPOINTS } from "./api.config";

export async function getStaticFooter() {
  try {
    const [top, bottom] = await Promise.all([
      fetch(buildUrl(ENDPOINTS.FOOTER.footer_up_data), {
        cache: "force-cache",
      }),
      fetch(buildUrl(ENDPOINTS.FOOTER.footer_terms_and_policies), {
        next: { revalidate: 100 },
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
