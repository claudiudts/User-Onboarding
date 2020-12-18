import * as yup from "yup";


export default yup.object().shape({
  name: yup.string().required("Please enter a real name"),
  email: yup
    .string()
    .email("Enter a valid email")
    .required("Enter a valid email"),
  term: yup.boolean().oneOf([true], 'Please check the box!'),
});