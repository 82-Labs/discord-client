import { DotIcon } from "lucide-react";
import AddFriendForm from "~/features/friend/ui/add-friend-form";
import { FriendsIcon } from "~/shared/ui/icons/friends-icon";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "~shared/ui/tabs";

const tabs = [
  {
    label: "온라인",
    value: "online",
  },
  {
    label: "모두",
    value: "all",
  },
  {
    label: "추천",
    value: "recommend",
  },
  {
    label: "친구 추가하기",
    value: "add-friend",
  },
];

export default function DirectMessengerTabs() {
  return (
    <div className="flex items-center h-12.5 bg-discord-content w-full border border-discord-outline border-l-0 border-bo">
      <Tabs defaultValue="add-friend" className="h-8 w-full">
        <TabsList className="flex items-center p-0 bg-transparent px-5 h-full">
          <div className="flex items-center gap-1.5 ml-1">
            <FriendsIcon className="w-5 h-5 mt-0.5" />
            <span className="text-white">친구</span>
          </div>
          <DotIcon className="w-5 h-5 fill-discord-tab-active ml-1" />
          {tabs.map((tab) => (
            <TabsTrigger
              key={tab.value}
              value={tab.value}
              className="bg-transparent last:bg-discord last:text-white last:rounded-md     
                          data-[state=active]:bg-discord-tab-active data-[state=active]:rounded-md 
                          last:data-[state=active]:bg-discord-tab-pointer-active last:data-[state=active]:text-discord-tab-pointer-text
                          mx-2 px-3 py-1 h-8 text-discord-text text-base
                          "
            >
              {tab.label}
            </TabsTrigger>
          ))}
        </TabsList>
        <TabsContent value="online"></TabsContent>
        <TabsContent value="all"></TabsContent>
        <TabsContent value="add-friend" className="w-full">
          <AddFriendForm />
        </TabsContent>
      </Tabs>
    </div>
  );
}
