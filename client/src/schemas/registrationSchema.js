import * as Yup from "yup";

const registrationSchema = Yup.object().shape({
  email: Yup.string().email("invalid email provided").required("Valid Email Required"),
  first_name: Yup.string().min(2).max(50).required("First name required"),
  last_name: Yup.string().min(2).max(50).required("Last name is required"),
});

export default registrationSchema;