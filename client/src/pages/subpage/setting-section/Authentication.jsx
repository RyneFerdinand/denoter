import { FaLock } from "react-icons/fa";
import Button from "../../../components/form/Button";
import Input from "../../../components/form/Input";

const Authentication = () => {
  return (
    <div className="flex flex-col gap-4 py-6">
      <Input
        icon={<FaLock className="w-5 h-5 fill-inherit" />}
        name="password"
        type="password"
        placeholder="Previous Password"
      />
      <Input
        icon={<FaLock className="w-5 h-5 fill-inherit" />}
        name="password"
        type="password"
        placeholder="New Password"
      />
      <Input
        icon={<FaLock className="w-5 h-5 fill-inherit" />}
        name="confirmPassword"
        type="password"
        placeholder="Confirm Password"
      />
      <Button size={"SMALL"}>Save</Button>

    </div>
  );
};

export default Authentication;
