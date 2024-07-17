import React from "react";
import FriendsRequest from "./FriendsRequest";
import Birthday from "./Birthday";
import Ads from "./Ads";
import UserInfoCard from "./UserInfoCard";
import UserMediaCard from "./UserMediaCard";

const RightTab = ({ userId }: { userId?: string }) => {
  return (
    <div className="flex flex-col justify-between text-sm rounded-lg  gap-4">
      {userId ? (
        <>
          <UserInfoCard userId={userId}/>
          <UserMediaCard  userId={userId}/>
        </>
      ) : null}
      <FriendsRequest />

      <Birthday />

      <Ads size="md" />
    </div>
  );
};

export default RightTab;
