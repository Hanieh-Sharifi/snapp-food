import React, { useEffect, useState } from "react";

import Progress from "./components/Progress";
import Card from "./components/Card";

import { getVendorsList } from "./request";

import "./Vendors.scss";

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
    <div className="vendors">
      {isLoading && <Progress />}
      {data?.map((widget) => {
        if (widget.type === "TEXT") {
          return;
        }

        const { backgroundImage, deliveryFee, description, rate, logo, title } =
          widget.data;

        return (
          <Card
            backgroundImage={backgroundImage}
            deliveryFee={deliveryFee}
            description={description}
            rate={rate}
            logo={logo}
            title={title}
            // deliveryType={deliveryType}
            key={title}
          />
        );
      })}
    </div>
  );
}

export default Vendors;
