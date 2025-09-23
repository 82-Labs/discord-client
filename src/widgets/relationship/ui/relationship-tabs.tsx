import { DotIcon } from "lucide-react";

import { ActivityFeed } from "~entities/activity/ui/activity-feed";
import { useGetReceivedRequests } from "~entities/relationship/api/use-get-received-requests";
import { useGetSentRequests } from "~entities/relationship/api/use-get-sent-requests";
import { FriendRequest } from "~entities/relationship/ui";
import { AddFriendForm } from "~features/relationships/ui";
import { FriendRequestActionsSlot } from "~features/relationships/ui/friend-request-actions-slot";
import { FriendsIcon } from "~shared/ui/icons";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "~shared/ui/tabs";
import { RELATIONSHIP_TABS } from "./relationship-tabs.config";

export function RelationshipTabs() {
  const { data: friendRequests } = useGetReceivedRequests();
  const { data: sentRequests } = useGetSentRequests();

  const pendingCount =
    (friendRequests?.length ?? 0) + (sentRequests?.length ?? 0);
  const hasPending = pendingCount > 0;

  const filteredTabs = RELATIONSHIP_TABS.filter(
    (tab) => tab.value !== "pending" || hasPending,
  );

  return (
    <div className="flex items-center h-12.5 bg-discord-content w-full border border-discord-outline border-l-0 border-b">
      <Tabs defaultValue="add-friend" className="h-8 w-full flex">
        <TabsList className="flex items-center p-0 bg-transparent px-5 h-full">
          <div className="flex items-center gap-1.5 ml-1">
            <FriendsIcon className="w-5 h-5 mt-0.5" />
            <span className="text-white">친구</span>
          </div>
          <DotIcon className="w-5 h-5 fill-discord-tab-active ml-1" />
          {filteredTabs.map((tab) => (
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

        <div className="flex">
          <TabsContent value="online"></TabsContent>
          <TabsContent value="all"></TabsContent>
          <TabsContent value="pending">
            <FriendRequest
              renderActions={(request) => (
                <FriendRequestActionsSlot {...request} />
              )}
            />
          </TabsContent>
          <TabsContent value="recommend"></TabsContent>
          <TabsContent value="add-friend" className="w-full">
            <AddFriendForm />
          </TabsContent>
          <ActivityFeed />
        </div>
      </Tabs>
    </div>
  );
}
