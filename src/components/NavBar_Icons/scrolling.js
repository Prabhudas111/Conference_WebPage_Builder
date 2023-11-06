import React from "react";
const ScrollToBottomButton = () => {
  const handleScrollToBottom = () => {
    window.scrollTo({
      top: document.documentElement.scrollHeight,
      behavior: "smooth",
    });
  };

  return (
    <button
      onClick={handleScrollToBottom}
      className="bg-gradient-to-b mx-auto text-blue-500 font-semibold from-slate-50 to-blue-100 px-10 py-3 rounded-2xl shadow-blue-400 shadow-md hover border-b border-blue-200 hover:shadow-sm transition-all duration-500"
      style={{ display: "block", marginLeft: "auto", marginRight: "auto" }}
    >
      Choose Templates
    </button>
  );
};

export default ScrollToBottomButton;
