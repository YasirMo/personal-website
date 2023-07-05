type Social = {
  label: string;
  link: string;
};

type Presentation = {
  mail: string;
  title: string;
  description: string;
  socials: Social[];
};

const presentation: Presentation = {
  mail: "yasirmo233@gmail.com",
  title: "Hi, I’m Yasir 👋",
  description:
    "Hello, i'm a *Somali frontend developer* with over *3 years* of web experience. I am currently working with *ReactJS and Typescript*. Outside of work I enjoying travelling and surfing 🏄‍♂️",
  socials: [
    {
      label: "Linkedin",
      link: "https://www.linkedin.com/in/yasirmo",
    },
    {
      label: "Github",
      link: "https://github.com/YasirMo",
    },
  ],
};

export default presentation;
