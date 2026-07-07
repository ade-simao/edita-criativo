export const CONTACT = {
  phone: "244944958019",
  email: "editacriativoao@gmail.com",

  social: {
    instagram: "#",
    facebook: "#",
    linkedin: "#",
  },
};

export function whatsapp(message: string) {
  return `https://wa.me/${CONTACT.phone}?text=${encodeURIComponent(message)}`;
}
