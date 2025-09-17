import { Button } from "~shared/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "~shared/ui/dialog";

export default function AddFriendDialog() {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button className="hidden md:flex px-2.5 py-1 h-8 text-sm border-none bg-button-secondary/60 hover:bg-button-secondary-hover cursor-pointer transition-all duration-200 w-full max-w-full overflow-hidden text-ellipsis whitespace-nowrap">
          대화 찾기 또는 시작하기
        </Button>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>대화 찾기 또는 시작하기</DialogTitle>
        </DialogHeader>
      </DialogContent>
    </Dialog>
  );
}
