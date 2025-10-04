import { useState } from "react";

export function useFriendSearch() {
  const [searchValue, setSearchValue] = useState("");

  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) =>
    setSearchValue(e.target.value);

  return { searchValue, handleSearch };
}
