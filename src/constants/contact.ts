export const CONTACT = {
  phone: "244944958019",
  email: "editacriativoao@gmail.com",

  social: {
    instagram:
      "https://www.instagram.com/s/aGlnaGxpZ2h0OjE4MDkwNDYwMzkxNTY0NjA5?story_media_id=3937748991953705346_15543226682&igsh=MWdsNG9ndTI3MGE4eA==",
    facebook: "https://www.facebook.com/share/1bdgTrFsrC/",
    linkedin: "#",
  },
};

export function whatsapp(message: string) {
  return `https://wa.me/${CONTACT.phone}?text=${encodeURIComponent(message)}`;
}
