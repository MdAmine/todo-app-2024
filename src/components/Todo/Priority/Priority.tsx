import React, { useState } from "react";

type PriorityProps = {
  setFilterType: (type: string) => void;
};

const Priority: React.FC<PriorityProps> = ({ setFilterType }) => {
  const [activeLinkId, setActiveLinkId] = useState<number | null>(null);

  const handleLinkClick = (linkId: number, filterType: string) => {
    setActiveLinkId(linkId);
    setFilterType(filterType);
  };

  return (
    <div className="d-inline-flex justify-content-center mb-2 ml-12">
      <button
        type="button"
        className={`btn btn-outline-secondary me-2 ${
          activeLinkId === 1 ? "active" : ""
        }`}
        onClick={() => handleLinkClick(1, "all")}
      >
        All
      </button>
      <button
        type="button"
        className={`btn btn-outline-danger me-2 ${
          activeLinkId === 2 ? "active" : ""
        }`}
        onClick={() => handleLinkClick(2, "P1")}
      >
        P1
      </button>
      <button
        type="button"
        className={`btn btn-outline-warning me-2 ${
          activeLinkId === 3 ? "active" : ""
        }`}
        onClick={() => handleLinkClick(3, "P2")}
      >
        P2
      </button>
      <button
        type="button"
        className={`btn btn-outline-primary me-2 ${
          activeLinkId === 4 ? "active" : ""
        }`}
        onClick={() => handleLinkClick(4, "P3")}
      >
        P3
      </button>
      <button
        type="button"
        className={`btn btn-outline-success me-2 ${
          activeLinkId === 5 ? "active" : ""
        }`}
        onClick={() => handleLinkClick(5, "P4")}
      >
        P4
      </button>
    </div>
  );
};

export default Priority;
