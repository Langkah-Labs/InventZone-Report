export const home_img =
  "https://imagizer.imageshack.com/img922/5253/Xgz4CD.png";
export const icon_img =
  "https://imagizer.imageshack.com/img924/8489/Ul24nu.png";
export const yellow_icon =
  "https://imagizer.imageshack.com/img924/5120/oUFwDA.png";
export const blue_icon =
  "https://imagizer.imageshack.com/img922/9292/NjxSvM.png";
export const red_icon = "https://imagizer.imageshack.com/img924/936/RE7BJI.png";
export const pattern_img =
  "https://imagizer.imageshack.com/img923/9875/RfYMuW.jpg";

export const mock_data = [
  {
    _id: 1,
    odp_id: "E200RT567",
    capacity: 8,
    capacity_after: 2,
    optical_power: -19,
    installation_date: "2021-05-23 12:34:20",
    location: "-6.826844270379128, 110.00180855164521",
    lat: -6.826844270379128,
    long: 110.00180855164521,
  },
  {
    _id: 2,
    odp_id: "E3000FGHY",
    capacity: 8,
    capacity_after: 6,
    optical_power: -29,
    installation_date: "2022-05-23 12:34:20",
    location: "-6.008239485073829, 106.03978463292805",
    lat: -6.008239485073829,
    long: 106.03978463292805,
  },
  {
    _id: 3,
    odp_id: "E200N812F",
    capacity: 16,
    capacity_after: 8,
    optical_power: -19,
    installation_date: "2021-10-20 12:34:20",
    location: "-6.886683176271803, 107.62005181464347",
    lat: -6.886683176271803,
    long: 107.62005181464347,
  },
  {
    _id: 4,
    odp_id: "E200RT567",
    capacity: 8,
    capacity_after: 8,
    optical_power: -20,
    installation_date: "2022-01-02 12:34:20",
    location: "-8.46054729573578, 115.17057836507453",
    lat: -8.46054729573578,
    long: 115.17057836507453,
  },
  {
    _id: 5,
    odp_id: "E200RT567",
    capacity: 16,
    capacity_after: 8,
    optical_power: -20,
    installation_date: "2020-12-22 12:34:20",
    location: "-4.009106559113772, 103.23899308454023",
    lat: -4.009106559113772,
    long: 103.23899308454023,
  },
];

export const generateUniqueId = () => {
  var randomNumber = Math.random() * 10 ** 36 - 1;
  var uniqueId = randomNumber.toString(36);
  while (uniqueId.length < 36) {
    uniqueId = "0" + uniqueId;
  }

  return uniqueId;
};
