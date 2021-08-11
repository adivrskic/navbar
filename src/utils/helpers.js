import navData from "../data/navData";

export const getNavIcons = () => {
  return navData.map((item) => item.icon);
};
