import "./styles.css";
import Contact, { validationSchema } from "./Contact";
import { useForm, FormProvider } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

const schema = yup.object().shape({
  primary: validationSchema,
  secondary: validationSchema
});

export default function App(): JSX.Element {
  const methods = useForm({
    resolver: yupResolver(schema)
  });
  const { handleSubmit } = methods;
  const onSubmit = (data) => console.log(data.primary);

  return (
    <div className="App">
      <FormProvider {...methods}>
        <form onSubmit={handleSubmit(onSubmit)}>
          <Contact rootKey="primary" />
          <br />
          <hr />
          {/* <Contact rootKey="secondary" /> */}
          <br />
          <br />
          <input type="submit" value="Submit" />
        </form>
      </FormProvider>
    </div>
  );
}
