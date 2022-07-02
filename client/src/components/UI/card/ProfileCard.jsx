const ProfileCard = () => {
  return (
    <div className="bg-light-main rounded-md shadow-lg flex flex-col">
      <img
        src="https://i.kym-cdn.com/entries/icons/facebook/000/002/819/karp.jpg"
        className="rounded-t-md h-64 object-cover"
        alt=""
      />
      <div className="px-10 flex flex-col gap-4 pb-6">
        <div className="relative flex flex-row-reverse pt-4">
          <img
            src="http://www.aweapps.com/images/easyblog_articles/662/magikarp.jpg"
            className="aspect-square w-32 rounded-full object-cover absolute -top-20 left-0"
            alt=""
          />
          <button
            className={`text-highlight font-bold py-1 px-4 border-[1px] border-highlight rounded-full focus:outline-none`}
          >
            Edit Profile
          </button>
        </div>
        <h1 className="font-bold text-2xl">@Magikarp_</h1>
        <p>
          I Kinda tried to use fly, but it’s not working at all, anyone who
          knows please kindly mention it to me, thanks ! 👋
        </p>
        <div className="flex flex-row gap-5">
          <div className="flex flex-row gap-2">
            <p className="font-bold">1K</p>
            <p className="opacity-50">Follower</p>
          </div>
          <div className="flex flex-row gap-2">
            <p className="font-bold">15</p>
            <p className="opacity-50">Following</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfileCard;
