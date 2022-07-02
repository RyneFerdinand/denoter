import ImageGrid from "../image/ImageGrid";
import { AiOutlineHeart, AiFillHeart } from "react-icons/ai";
import { BiCommentDetail } from "react-icons/bi";
import { RiShareForwardLine } from "react-icons/ri";
import { useEffect, useRef } from "react";
import { useLocation, useNavigate } from "react-router-dom";

const PostCard = (props) => {
  const cardRef = useRef([]);
  const navigate = useNavigate();
  const { pathname } = useLocation();

  const { post } = props;

  useEffect(() => {
    cardRef.current = cardRef.current.slice(0, 3);
  }, []);

  const isPostPage = () => {
    return pathname.includes("post");
  };

  const cardClickHandler = (e) => {
    let cardElement = false;
    cardRef.current.forEach((el) => {
      if (el === e.target) {
        cardElement = true;
      }
    });
    if (cardElement && !isPostPage()) {
      navigate("/post/1");
    }
  };

  return (
    <div
      className={`bg-light-main rounded-md shadow-lg gap-8 flex flex-row p-8 ${
        isPostPage() ? "" : "cursor-pointer"
      }`}
      ref={(el) => {
        cardRef.current[0] = el;
      }}
      onClick={cardClickHandler}
    >
      <img
        src={post.userImage}
        alt=""
        className="aspect-square w-16 rounded-full object-cover self-start cursor-pointer"
      />
      <div className="flex flex-col gap-3 w-10/12 pt-1">
        <div className="flex flex-row">
          <h3 className="font-bold text-xl hover:underline cursor-pointer">
            {post.userName + " "}
          </h3>
          <h3
            className="opacity-50  text-xl"
            ref={(el) => {
              cardRef.current[1] = el;
            }}
            onClick={cardClickHandler}
          >
            •{" " + post.postTime}
          </h3>
        </div>
        <p
          ref={(el) => {
            cardRef.current[2] = el;
          }}
          onClick={cardClickHandler}
        >
          {post.description}
        </p>
        <ImageGrid type="CARD" images={post.images} />
        {isPostPage() && (
          <div className="flex flex-row gap-4 mt-2">
            <p>
              <strong>{post.like}</strong> {" Likes"}
            </p>
            <p>
              <strong>{post.comment}</strong> {" Comments"}
            </p>
          </div>
        )}
        <div className="flex items-center gap-4 mt-2">
          <div className="cursor-pointer flex flex-row items-center justify-center gap-2 w-1/3 hover:bg-light-negative hover:bg-opacity-10 py-1 rounded-md">
            <AiOutlineHeart className="h-5 w-5" />
            <p className="text-md">Like</p>
          </div>
          <div className="cursor-pointer flex flex-row items-center justify-center gap-2 w-1/3 hover:bg-light-negative hover:bg-opacity-10 py-1 rounded-md">
            <BiCommentDetail className="h-5 w-5" />
            <p>Comment</p>
          </div>
          <div className="cursor-pointer flex flex-row items-center justify-center gap-2 w-1/3 hover:bg-light-negative hover:bg-opacity-10 py-1 rounded-md">
            <RiShareForwardLine className="h-5 w-5" />
            <p>Share</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PostCard;
