import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import { getVendors } from "../../store/reducer";

import Progress from "./components/Progress";
import Card from "./components/Card";

import "./Vendors.scss";

function Vendors() {
  const dispatch = useDispatch();
  const isLoading = useSelector((state) => state.isLoading);
  const error = useSelector((state) => state.error);
  const vendors = useSelector((state) => state.vendors);
  const [currentPage, setCurrentPage] = useState(0);

  useEffect(() => {
    dispatch(getVendors(currentPage));
  }, []);

  useEffect(() => {
    if (vendors.length > 0) {
      document.body.scrollTop = 0; // For Safari
      document.documentElement.scrollTop = 0;
    }
  }, [vendors]);

  function loadNextPage() {
    dispatch(getVendors(currentPage + 1));
    setCurrentPage((currentPage) => currentPage + 1);
  }
  function loadPrevPage() {
    dispatch(getVendors(currentPage - 1));
    setCurrentPage((currentPage) => currentPage - 1);
  }

  function shouldRenderButtons() {
    if (!isLoading && vendors.length > 0) {
      return true;
    }

    return false;
  }

  return (
    <div className="vendors">
      {isLoading && <Progress />}
      {!isLoading &&
        vendors?.map((widget) => {
          if (widget.type === "TEXT") {
            return;
          }

          const {
            backgroundImage,
            deliveryFee,
            description,
            rate,
            logo,
            title,
          } = widget.data;

          return (
            <Card
              backgroundImage={backgroundImage}
              deliveryFee={deliveryFee}
              description={description}
              rate={rate}
              logo={logo}
              title={title}
              key={title}
            />
          );
        })}
      {shouldRenderButtons() && (
        <div className="vendors__pagination">
          <button onClick={loadNextPage} className="vendors__pagination-button">
            nextPage
          </button>
          <button
            onClick={loadPrevPage}
            disabled={currentPage === 0}
            className="vendors__pagination-button"
          >
            prevPage
          </button>{" "}
        </div>
      )}
      {error && <div>fetch error</div>}
    </div>
  );
}

export default Vendors;
