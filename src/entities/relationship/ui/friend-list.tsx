import { useGetFriends } from "../api/use-get-friends";
import { useFriendSearch } from "../lib/use-friend-search";
import { FriendHeader } from "./friend-header";
import { FriendItem } from "./friend-item";
import { SearchFriend } from "./search-friend";

interface FriendListProps {
  type: "online" | "all";
}

export function FriendList({ type }: FriendListProps) {
  const { searchValue, handleSearch } = useFriendSearch();
  const { data: friends } = useGetFriends();

  const filteredFriends = friends?.filter((friend) =>
    friend.username.toLowerCase().includes(searchValue.toLowerCase()),
  );

  const typeFilteredFriends =
    type === "online"
      ? filteredFriends?.filter(
          (friend) => friend.status === "ONLINE" || friend.status === "NONE",
        )
      : filteredFriends;

  return (
    <div>
      <SearchFriend searchValue={searchValue} onSearch={handleSearch} />
      <FriendHeader type={type} count={typeFilteredFriends?.length ?? 0} />
      <ul>
        {typeFilteredFriends?.map((friend) => (
          <FriendItem
            key={friend.id}
            avatar={
              "https://images-eds-ssl.xboxlive.com/image?url=4rt9.lXDC4H_93laV1_eHHFT949fUipzkiFOBH3fAiZZUCdYojwUyX2aTonS1aIwMrx6NUIsHfUHSLzjGJFxxsG72wAo9EWJR4yQWyJJaDaK1XdUso6cUMpI9hAdPUU_FNs11cY1X284vsHrnWtRw7oqRpN1m9YAg21d_aNKnIo-&format=source&h=210"
            }
            {...friend}
          />
        ))}
      </ul>
    </div>
  );
}
