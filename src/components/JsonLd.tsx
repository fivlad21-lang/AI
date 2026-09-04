import { SITE_URL } from "@/lib/site";
import { BRAND } from "@/lib/contacts";

export function OrganizationJsonLd() {
  const data = {
    "@context": "https://schema.org",
    "@type": "RealEstateAgent",
    name: BRAND,
    url: SITE_URL,
    areaServed: ["Burgas", "Sunny Beach", "Nesebar", "Pomorie", "Sozopol", "Sveti Vlas"],
    availableLanguage: ["bg", "ru", "uk", "en"],
  };
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}

export function ListingJsonLd({
  name,
  description,
  image,
  priceEur,
  url,
}: {
  name: string;
  description: string;
  image: string;
  priceEur: number;
  url: string;
}) {
  const data = {
    "@context": "https://schema.org",
    "@type": "Apartment",
    name,
    description,
    image,
    url,
    offers: {
      "@type": "Offer",
      price: priceEur,
      priceCurrency: "EUR",
      availability: "https://schema.org/InStock",
    },
  };
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}
