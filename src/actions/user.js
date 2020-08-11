import { SET_USER_PURCHASES, SET_PURCHASE_DETAIL } from "./types";

export function setPurchaseDetail(_id) {
  return {
    type: SET_PURCHASE_DETAIL,
    payload: _id,
  };
}

export function fetchUserPurchases() {
  return {
    type: SET_USER_PURCHASES,
    payload: [
      {
        _id: 10,
        total: 1.02,
        orderNumber: "A001",
        orderDate: new Date().toDateString(),
        creditCard: "-0000",
        user: {
          name: "Jordan Hudgens",
          shippingAddress: "1234 State Street",
        },
      },
      {
        _id: 1,
        total: 2.02,
        orderNumber: "A0012",
        orderDate: new Date().toDateString(),
        creditCard: "-0000",
        user: {
          name: "Jordan Hudgens",
          shippingAddress: "1234 State Street",
        },
      },
      {
        _id: 2,
        total: 3.02,
        orderNumber: "A0013",
        orderDate: new Date().toDateString(),
        creditCard: "-0000",
        user: {
          name: "Jordan Hudgens",
          shippingAddress: "1234 State Street",
        },
      },
      {
        _id: 3,
        total: 4.02,
        orderNumber: "A0014",
        orderDate: new Date().toDateString(),
        creditCard: "-0000",
        user: {
          name: "Jordan Hudgens",
          shippingAddress: "1234 State Street",
        },
      },
      {
        _id: 4,
        total: 5.02,
        orderNumber: "A0015",
        orderDate: new Date().toDateString(),
        creditCard: "-0000",
        user: {
          name: "Jordan Hudgens",
          shippingAddress: "1234 State Street",
        },
      },
      {
        _id: 5,
        total: 6.02,
        orderNumber: "A0016",
        orderDate: new Date().toDateString(),
        creditCard: "-0000",
        user: {
          name: "Jordan Hudgens",
          shippingAddress: "1234 State Street",
        },
      },
      {
        _id: 6,
        total: 7.02,
        orderNumber: "A0017",
        orderDate: new Date().toDateString(),
        creditCard: "-0000",
        user: {
          name: "Jordan Hudgens",
          shippingAddress: "1234 State Street",
        },
      },
      {
        _id: 7,
        total: 8.02,
        orderNumber: "A0018",
        orderDate: new Date().toDateString(),
        creditCard: "-0000",
        user: {
          name: "Jordan Hudgens",
          shippingAddress: "1234 State Street",
        },
      },
    ],
  };
}
