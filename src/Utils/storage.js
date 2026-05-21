export const getBookings = () => {
  return JSON.parse(localStorage.getItem("bookings")) || [];
};

export const saveBookings = (bookings) => {
  localStorage.setItem("bookings", JSON.stringify(bookings));
};