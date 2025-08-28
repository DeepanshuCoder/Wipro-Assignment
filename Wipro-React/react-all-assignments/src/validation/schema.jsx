import * as Yup from "yup";

const Schema = Yup.object({
  name: Yup.string().trim().required("Name is required"),
  email: Yup.string().email("Invalid email").required("Email is required"),
  phone: Yup.string().matches(/^[0-9()+\- ]{7,15}$/, "Invalid phone").required("Phone is required"),
  org: Yup.string().trim().required("Organization is required"),
  ticketType: Yup.string().required("Select a ticket type"),
  quantity: Yup.number().integer().min(1, "Min 1").required("Quantity is required"),
  sessions: Yup.array().of(Yup.string()).min(1, "Pick at least one session"),
  paymentMethod: Yup.string().required("Select a payment method"),
  promoCode: Yup.string().max(20, "Too long"),
  invoiceRequired: Yup.boolean(),
  invoiceAddress: Yup.string().when("invoiceRequired", {
    is: true,
    then: (s) => s.required("Invoice address required"),
  }),
});

export default Schema;
