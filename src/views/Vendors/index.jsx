import React, { useEffect, useState } from "react";

import Progress from "./components/Progress";

import { getVendorsList } from "./request";

function Vendors() {
  const [isLoading, setIsLoading] = useState(true);
  const [data, setData] = useState([]);

  useEffect(() => {
    getVendorsList()
      .then((data) => {
        setData(data);
      })
      .catch(() => setHasError(true))
      .finally(setIsLoading(false));
  }, []);

  return (
    <div>
      {isLoading && <Progress />}
      <div>random</div>
    </div>
  );
}

export default Vendors;
