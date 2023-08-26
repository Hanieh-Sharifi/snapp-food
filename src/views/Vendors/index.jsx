import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import { getVendors } from "../../store/reducer";

import Progress from "./components/Progress";
import Card from "./components/Card";

import "./Vendors.scss";

function Vendors() {
  const dispatch = useDispatch();
  const contents = useSelector((state) => state.contents);
  const isLoading = useSelector((state) => state.isLoading);
  const error = useSelector((state) => state.error);

  useEffect(() => {
    dispatch(getVendors());
  }, []);

  return (
    <div className="vendors">
      {isLoading && <Progress />}
      {contents?.data.finalResult?.map((widget) => {
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
      {error && <div>fetch error</div>}
    </div>
  );
}

export default Vendors;
