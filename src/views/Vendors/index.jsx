import React, { useEffect, useState } from "react";

import { getVendorsList } from "./request";

function Vendors() {
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    getVendorsList();
  }, []);
  return <div>Vendors</div>;
}

export default Vendors;
