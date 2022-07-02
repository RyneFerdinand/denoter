import ImageGrid from "../image/ImageGrid";

const CommentCard = (props) => {
  const { comment } = props;

  return (
    <div className="bg-light-main rounded-md shadow-lg gap-8 flex flex-row p-8">
      <img
        src={comment.userImage}
        alt=""
        className="aspect-square w-12 rounded-full object-cover self-start cursor-pointer"
      />
      <div className="flex flex-col gap-3 w-10/12 pt-1">
        <div className="flex flex-row">
          <h3 className="font-bold text-lg hover:underline cursor-pointer">
            {comment.userName + " "}
          </h3>
          <h3 className="opacity-50  text-lg">•{" " + comment.commentTime}</h3>
        </div>
        <p>{comment.description}</p>
        {comment.images && <ImageGrid type="CARD" images={comment.images} />}
      </div>
    </div>
  );
};

export default CommentCard;
