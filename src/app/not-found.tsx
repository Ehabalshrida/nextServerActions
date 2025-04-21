import React from "react";

export default function notFound() {
  return (
    <div className="flex justify-center items-center h-screen">
    <div className="flex items-center font-medium text-red-600 gap-2 text-2xl">
      <div>404</div>
      <div className="border-l-2 pl-1">Page Not Found</div>
    </div>
    </div>
  );
}
