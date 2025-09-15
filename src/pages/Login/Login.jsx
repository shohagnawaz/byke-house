import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";

const Login = () => {
  const { register, handleSubmit, formState: {errors} } = useForm();
  const onSubmit = data => {
    console.log(data);
  }

  return (
    <div className="hero bg-base-200 min-h-screen">
      <div className="hero-content flex-col lg:flex-row-reverse">
        <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
          <div className="card-body">
            <h1 className="text-5xl p-10 font-bold">Login now!</h1>

            <form onSubmit={handleSubmit(onSubmit)}>
              <fieldset className="fieldset">

                <label className="label">Email</label>
                <input
                  type="email"
                  {...register("email")}
                  className="input"
                  placeholder="Email"
                />

                <label className="label">Password</label>
                <input
                  type="password"
                  {...register("password", {
                    required: true,
                    minLength: 6
                  })}
                  className="input"
                  placeholder="Password"                  
                />
                {
                    errors.password?.type === "required" && <p
                    className="text-red-500">Password is required</p>
                }
                {
                    errors.password?.type === "required" && <p
                    className="text-red-500">Password must be 6 characters or longer</p>
                }

                <div>
                  <a className="link link-hover">Forgot password?</a>
                </div>

                <button className="btn btn-neutral mt-4">Login</button>
              </fieldset>
            </form>
            <p>New in here? <Link to="/signup">Please Sign Up</Link></p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
