import { SearchIcon } from "lucide-react";
import { Input } from "~/shared/ui/input";

interface SearchFriendProps {
  searchValue: string;
  onSearch: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

export function SearchFriend({ searchValue, onSearch }: SearchFriendProps) {
  return (
    <div className="flex items-center gap-2 rounded-md mt-3 mb-5 mx-5  h-11 border border-discord-outline bg-discord-search-input">
      <div className="p-2 w-8 h-8 ml-2">
        <SearchIcon className="w-4 h-4" />
      </div>
      <Input
        placeholder="검색하기"
        className="w-full h-6 p-0 outline-none ring-0 border-0 focus-visible:ring-0 focus-visible:border-0 text-xl"
        value={searchValue}
        onChange={onSearch}
      />
    </div>
  );
}
