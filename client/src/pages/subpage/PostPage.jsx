import CommentCard from "../../components/UI/card/CommentCard";
import PostCard from "../../components/UI/card/PostCard";
import { dummyComments, dummyPosts } from "../../data/dummy-data";

const PostPage = () => {
  return (
    <div className="min-h-screen flex flex-col gap-4 w-7/12 px-24">
      <PostCard post={dummyPosts[0]} />
      <h2 className="text-xl font-bold mt-4 border-b-4 pb-1 border-highlight self-start">
        Comment
      </h2>
      {dummyComments?.map((comment, idx) => (
        <CommentCard comment={comment} key={idx} />
      ))}
    </div>
  );
};

export default PostPage;
