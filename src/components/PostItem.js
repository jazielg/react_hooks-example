import React, { useEffect } from "react";

const PostItem = ({ fetchData }) => {
  console.log("RE_RENDER POST-ITEM");

  useEffect(() => {
    fetchData("posts");
  }, [fetchData]);

  return <div>PostItem</div>;
};

export default React.memo(PostItem);
