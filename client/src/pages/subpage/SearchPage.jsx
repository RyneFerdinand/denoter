import UserCard from "../../components/UI/card/UserCard";

const SearchPage = () => {
  return (
    <div className="flex flex-col gap-4 w-7/12 px-24">
      <h3 className="text-lg">
        Found<strong>{" 15"}</strong> Users with username <strong>{` "Testing"`}</strong>
      </h3>
        <UserCard type="LARGE"/>
        <UserCard type="LARGE"/>
        <UserCard type="LARGE"/>
        <UserCard type="LARGE"/>
    </div>
  );
};

export default SearchPage;
