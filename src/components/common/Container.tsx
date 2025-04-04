import React from "react";

const Container = ({ children, full = false }: { children: React.ReactNode; full?: boolean }) => {
  return <div className={`${!full && "container mx-auto px-5"} w-full overflow-hidden `}>{children}</div>;
};

export default Container;
