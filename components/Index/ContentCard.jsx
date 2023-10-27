import React from "react";

const ContentCard = ({ children }) => {
  return <div className="flex items-center max-lg:flex-col lg:justify-between gap-16">{children}</div>;
};

export default ContentCard;
