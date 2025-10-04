import { useState } from "react";

export const useSelectMenu = () => {
  const [selectedMenu, setSelectedMenu] = useState("");

  const handleSelectMenu = (label: string) =>
    setSelectedMenu((prevMenu) => (label === prevMenu ? "" : label));
  return {
    selectedMenu,
    handleSelectMenu,
  };
};
