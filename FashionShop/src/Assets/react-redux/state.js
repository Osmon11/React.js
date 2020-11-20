import paris from "../../img/singapore.webp";
import singapore from "../../img/singapore.webp";
import prague from "../../img/prague.webp";
import amsterdam from "../../img/amsterdam.webp";
import moscow from "../../img/moscow.webp";

export const initialState = {
  categories: ["For men", "For women", "For kids"],
  slides: [
    {
      city: "Paris",
      country: "France",
      img: paris,
    },
    {
      city: "Singapore",
      img: singapore,
    },
    {
      city: "Prague",
      country: "Czech Republic",
      img: prague,
    },
    {
      city: "Amsterdam",
      country: "Netherlands",
      img: amsterdam,
    },
    {
      city: "Moscow",
      country: "Russia",
      img: moscow,
    },
  ],
  modal: {
    title: "Success",
    color: "#02a10a",
    message: "All right!",
    type: "success",
    status: false,
  },
  error: {
    title: "Error",
    color: "#ce1126",
    message: "All right!",
    type: "error",
    status: false,
  },
  warning: {
    title: "Warning",
    color: "#ffb400",
    message: "All right!",
    type: "warning",
    status: false,
  },
  info: {
    title: "Info",
    color: "#0092ff",
    message: "All right!",
    type: "info",
    status: false,
  },
  success: {
    title: "Success",
    color: "#02a10a",
    message: "All right!",
    type: "success",
    status: false,
  },
  newGood: {
    title: "",
    price: "",
    description: "",
    category: "",
    url: "",
  },
};
