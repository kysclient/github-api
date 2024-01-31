import { Button } from "./ui/button";

interface BottomTabProps {
  loadMore?: () => any;
  initialize?: () => any;
}

const BottomTab: React.FC<BottomTabProps> = ({loadMore, initialize }) => {
  return (
    <div
      className=" fixed bottom-0 left-0 z-10 p-4 w-full border-t border-gray-200  backdrop-blur-[12px]"
      style={{ background: "transparent" }}
    >
      <div className="flex bottom-tab-height justify-center gap-8 items-center">
        <Button onClick={loadMore}>load</Button>

        <Button onClick={initialize}>초기화</Button>
      </div>
    </div>
  );
};

export default BottomTab;
