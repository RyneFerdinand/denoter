import PostForm from "../../components/UI/form/PostForm";
import PostCard from "../../components/UI/card/PostCard";
import { dummyPosts } from "../../data/dummy-data";

const HomePage = () => {
  return (
    <div className="min-h-screen flex flex-col gap-4 w-7/12 px-24">
      <PostForm />
      {dummyPosts?.map((post, idx) => (
        <PostCard key={idx} post={post} />
      ))}
    </div>
  );
};

export default HomePage;
