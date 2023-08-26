export function transformDescription(description) {
  return description.split(",").join(" ");
}

const persianNumbers = ["۰", "۱", "۲", "۳", "۴", "۵", "۶", "۷", "۸", "۹"];

export function translateEnglishDigitsToPersian(number) {
  const persianNumber = number.toLocaleString("fa-IR");
  return persianNumber.split("٫").join(".");
}

export function getRateColor(rate) {
  if (rate >= 4.5) {
    return "#305d02";
  }
  if (rate >= 4) {
    return "#5ba839";
  }
  if (rate >= 3.5) {
    return "#9ACD32";
  }
  if (rate >= 3) {
    return "#CDD614";
  }
}

export function getBackgroundColor(rate) {
  if (rate >= 4.5) {
    return "rgba(63, 126, 0, 0.08)";
  }
  if (rate >= 4) {
    return "rgba(91, 168, 41, 0.08)";
  }
  if (rate >= 3.5) {
    return "rgba(154, 205, 50, 0.08)";
  }
  if (rate >= 3) {
    return "rgba(205, 214, 20, 0.08)";
  }
}
