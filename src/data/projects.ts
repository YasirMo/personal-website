export type Project = {
  title: string;
  techs: string[];
  link: string;
  isComingSoon?: boolean;
};

const projects: Project[] = [
  {
    title: "Are Generative Adversarial Networks a fashion sustainability solution?",
    techs: ["Python", "Tensorflow", "Keras", "GANs", "CNNs", "Fashion MNIST"],
    link: "https://github.com/YasirMo/O-COUTURE-Final-Year-Project",
  },
  {
    title: "Neo Terra - Full Stack",
    techs: ["Tech Lead", "Javascript", "React", "Java", "Spring", "Google API"],
    link: "https://github.com/YasirMo/Neo-Terra",
  },
  {
    title: "React Shopping Cart - TypeScript",
    techs: ["ReactJS", "TypeScript"],
    link: "https://react-shopping-cart-iota-woad.vercel.app//",
  },
  {
    title: "Weather Application - TypeScript",
    techs: ["ReactJS", "TypeScript"],
    link: "https://react-shopping-cart-oscm.vercel.app/",
  },
];

export default projects;
