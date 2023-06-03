import { useFormContext } from "react-hook-form";
import * as yup from "yup";

export const validationSchema = yup.object().shape({
  firstName: yup.string().required("First Name is Required"),
  lastName: yup.string().required("Last Name is Required")
});

interface ContactProps {
  rootKey: string;
}
const Contact = ({ rootKey }: ContactProps) => {
  const {
    register,
    formState: { errors }
  } = useFormContext();
  console.log(errors);
  return (
    <>
      {rootKey}
      <br />
      <input
        type="text"
        placeholder="First Name"
        {...register(`${rootKey}.firstName`)}
      />
      <p className="error">{errors[rootKey]?.firstName?.message}</p>
      <br />
      <input
        type="text"
        placeholder="Last Name"
        {...register(`${rootKey}.lastName`)}
      />
      <p className="error">{errors[rootKey]?.lastName?.message}</p>
    </>
  );
};
export default Contact;
