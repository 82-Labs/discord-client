import { useUserStore } from "~features/user/model/use-user-store";
import { useGetUser } from "../api/use-get-user";
import { useEffect } from "react";

export function UserControlPanel() {
  const { data: user } = useGetUser();

  const { setUserId } = useUserStore();

  useEffect(() => {
    if (user) {
      setUserId(user.id);
    }
  }, [user, setUserId]);

  return (
    <div className="absolute bottom-0 left-0 z-10 w-full text-center">
      UserControlPanel
    </div>
  );
}
