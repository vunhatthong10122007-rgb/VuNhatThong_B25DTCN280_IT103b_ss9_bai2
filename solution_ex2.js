const bookingReservation = {
  bookingId: "BK-2024-8891",
  guestName: "Trần Minh Quang",
  roomType: "Deluxe Ocean View",
  roomPrice: 1500000,
  checkInHour: 9,
  discountCode: "SUMMER10"
};

const isVoucherValid = false;

const priceKey = "roomPrice";
const basePrice = bookingReservation[priceKey];

let earlySurcharge = 0;
if (bookingReservation.checkInHour < 12) {
  earlySurcharge = basePrice * 0.3;
  bookingReservation.earlySurcharge = earlySurcharge;
}

const totalAmount = basePrice + earlySurcharge;
bookingReservation.totalAmount = totalAmount;

if (!isVoucherValid) {
  delete bookingReservation.discountCode;
}

console.log("--- CHI TIẾT PHIẾU ĐẶT PHÒNG ---");
for (const key in bookingReservation) {
  console.log(key + ": " + bookingReservation[key]);
}

//const basePrice = bookingReservation.priceKey;bookingReservation.key . priceKey , .key ko tìm thấy nên undefined
//bookingReservation.discountCode = undefined; ko xoá mà lại cập nhật là undefined

// th1: nhận ko đúng giờ -> checkInHour = 9,roomPrice = 1500000,priceKey = "roomPrice",isVoucherValid = false,discountCode = "SUMMER10"
// kết quả sai: earlySurcharge: NaN, totalAmount: NaN, mọi dòng đều in: undefined, discountCode: undefined,
// lết quả đúng: earlySurcharge: 450000, totalAmount: 1950000, in từng giá trị tương ứng, discountCode đã được xoá

// th2: nhận đúng giờ -> checkInHour = 14,roomPrice = 1500000,priceKey = "roomPrice",isVoucherValid = true,discountCode = "SUMMER10"
// kết quả sai: earlySurcharge: 0, totalAmount: NaN, mọi dòng đều in: undefined, discountCode: undefined,
// lết quả đúng: earlySurcharge: 0, totalAmount: 1500000, in từng giá trị tương ứng, discountCode: SUMMER10 
