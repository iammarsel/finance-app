import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import axios from "axios";
import { useNavigate } from "react-router-dom";
function SignIn() {
  const history = useNavigate();
  const initialValues = {
    username: "",
    email: "",
    password: ""
  }
  const validationSchema = Yup.object().shape({
    username: Yup.string().min(3,"username too short").max(15,"username too long").required("Required*"),
    email: Yup.string().email("Enter a valid email").required("Required*"),
    password: Yup.string().min(4,"password too short").max(20,"password too long").required("Required*"),
  }) 

  const onSubmit = (data) => {
    axios.post("http://localhost:3001/auth/signin", data).then((response) => {
      if (response.data.error) {
        alert(response.data.error);
      } else {
      sessionStorage.setItem("accessToken", response.data);
      history("/entries");
      }
    });
  };
  return (
    <div className="flex h-screen items-center justify-center bg-gradient-to-bl from-green-300 to-white">
    <div className="flex-col rounded-xl w-96 bg-gray-800 text-white">
      <h1 className="text-2xl my-12 text-center">Sign in to your Financify account</h1>
      <Formik
        initialValues={initialValues}
        onSubmit={onSubmit}
        validateOnBlur={false}
        validateOnChange={false}
        validationSchema={validationSchema}
      >
        <Form className="">
          <div className="h-7 flex items-center space-x-4">
          <label className="text-base pl-[10%]" >Username/Email: </label>
          
          <Field
            autoComplete="off"
            className="h-7 rounded-lg border mr-6 border-slate-300 text-sm bg-transparent outline-green-300 shadow-md"
            name="username"
            placeholder=""
          />
          </div>
          <div className="text-center h-2 mb-6">
          <ErrorMessage name="username" className="text-sm text-red-500" component="span" />
          </div>


          <div className="h-7 flex items-center space-x-4">
          <label className="text-base pl-[10%]" >Username/Email: </label>
          
          <Field
            autoComplete="off"
            className="h-7 rounded-lg border mr-6 border-slate-300 text-sm bg-transparent outline-green-300 shadow-md"
            name="email"
            placeholder=""
          />
          </div>
          <div className="text-center h-2 mb-6">
          <ErrorMessage name="email" className="text-sm text-red-500" component="span" />
          </div>
          
          <div className="h-7 flex items-center space-x-4">
          <label className="text-base pl-[10%]">Password: </label>
          
          <Field
            autoComplete="off"
            type="password"
            className="h-7 rounded-lg border mr-6 border-slate-300 text-sm bg-transparent outline-green-300 shadow-md"
            id="inputCreatePost"
            name="password"
            placeholder=""
          />
          </div>
          <div className="text-center h-2 mb-6">
          <ErrorMessage name="password" className="text-sm text-red-500" component="span" />
          </div>
          <button type="submit" className="rounded-xl align-middle justify-center text-center mx-[40%] mb-10 bg-green-400 mt-5 text-lg w-20">Sign In</button>
        </Form>
      </Formik>
    </div>
    </div>
  )
}

export default SignIn