import { useFriendSearch } from "../lib/use-friend-search";
import { ReceivedRequests } from "./received-requests-list";
import { SearchFriend } from "./search-friend";
import { SentRequests } from "./sent-requests-list";

interface FriendRequestProps {
  renderActions?: (args: {
    type: "received" | "sent";
    requestId: string;
  }) => React.ReactNode;
}

export function FriendRequest({ renderActions }: FriendRequestProps) {
  const { searchValue, handleSearch } = useFriendSearch();
  return (
    <div className="flex flex-col justify-center">
      <SearchFriend searchValue={searchValue} onSearch={handleSearch} />
      <ReceivedRequests
        renderActions={renderActions}
        searchValue={searchValue}
      />
      <SentRequests renderActions={renderActions} searchValue={searchValue} />
    </div>
  );
}
