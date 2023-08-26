import axios from "axios";

export function getVendorsList() {
  return axios
    .get(
      "https://snappfood.ir/mobile/v3/restaurant/vendors-list?page=0&page_size=10&lat=35.754&long=51.328"
    )
    .then(transformVendorsListResponse);
}

function transformVendorsListResponse({
  data: { data: { finalResult } = {} } = {},
}) {
  return finalResult;
}
