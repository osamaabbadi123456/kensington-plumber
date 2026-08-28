export const siteConfig = {
  name: "Plumber Kensington",
  shortName: "Plumber Kensington",

  description:
    "Need help with a leak, blocked toilet, faulty tap or shower in Kensington? Find the right route and send clear details by WhatsApp or email.",

  url: "https://plumberkensington.co.uk",

  contact: {
    email: "info@plumberkensington.co.uk",

    whatsapp: {
      display: "+44 7405 955956",
      number: "447405955956",
      baseUrl: "https://wa.me/447405955956",
    },
  },

  location: {
    primary: "Kensington",
    primaryPostcode: "W8",
    region: "London",
    country: "United Kingdom",
    countryCode: "GB",
  },

  positioning: {
    type: "Local plumbing enquiry website",
    isPlumbingCompany: false,
  },

  navigation: [
    { label: "Home", href: "/" },
    { label: "Services", href: "/services" },
    { label: "Plumbing Problems", href: "/plumbing-problems" },
    { label: "Areas", href: "/areas" },
    { label: "Advice", href: "/plumbing-advice" },
    { label: "About", href: "/about" },
    { label: "Contact", href: "/contact" },
  ],
} as const;
