import ProfileCard from "../../components/UI/card/ProfileCard";
import PostCard from "../../components/UI/card/PostCard";
import { dummyPosts } from "../../data/dummy-data";

const ProfilePage = () => {
  return (
    <div className="min-h-screen flex flex-col gap-4 w-7/12 px-24">
      <ProfileCard />
      <div className="py-4 flex flex-col gap-4">
        <div className="flex flex-row gap-6 text-xl font-bold my-2 px-2">
          <div className="border-b-4 border-highlight cursor-pointer">
            Posts
          </div>
          <div className="cursor-pointer opacity-50">Likes</div>
        </div>
        {dummyPosts?.map((post, idx) => (
          <PostCard key={idx} post={post} />
        ))}
      </div>
    </div>
  );
};

export default ProfilePage;
