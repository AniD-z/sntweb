// menu.ts

export type MenuItem = {
  href: string;
  label: string;
};

const menu: MenuItem[] = [
  {
    href: "/", 
    label: "Our Story",
  },
  {
    href: "/what-we-offer",
    label: "What We Offer",
  },
  {
    href: "", // This is just a placeholder
    label: "Contact Us",
  },
];

export default menu;
