import React from "react";

type DataFetchProps = {
  status: "loading" | "success" | "error";
};

const DataFetch = ({ status }: DataFetchProps) => {
  if (status === "loading") {
    return <h2>Data is loading....</h2>;
  } else if (status === "error") {
    return <h2>Error. Data could not fecthed</h2>;
  }

  return (
    <div>
      <h2>Data fetched successfully</h2>
    </div>
  );
};

export default DataFetch;
