import * as yup from "yup";

export const forgetSchema = yup.object().shape({
    email: yup
        .string("email should be a string")
        .email("please provide a valid email address")
        .required("email address is required"),
  });