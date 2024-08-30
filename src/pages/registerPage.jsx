export default function RegisterPage() {
  return (
    <div data-theme="light" className="h-full w-full flex justify-center">
      <div className="flex justify-center items-center flex-col md:w-1/3 h-full gap-5">
        <div className="flex flex-col h-fit w-full  items-center">
          <label className="form-control w-full max-w-xs">
            <div className="label">
              <span className="label-text font-semibold">Username</span>
            </div>
            <input
              type="text"
              placeholder="Type your username"
              className="input input-bordered w-full max-w-xs"
            />
          </label>
          <label className="form-control w-full max-w-xs">
            <div className="label">
              <span className="label-text font-semibold">Email address</span>
            </div>
            <input
              type="text"
              placeholder="Type your e-mail"
              className="input input-bordered w-full max-w-xs"
            />
          </label>
          <label className="form-control w-full max-w-xs">
            <div className="label">
              <span className="label-text font-semibold">Password</span>
            </div>
            <input
              type="password"
              placeholder="Type your password"
              className="input input-bordered w-full max-w-xs"
            />
          </label>
        </div>

        <button className="btn w-full max-w-xs">Sign Up</button>
      </div>
    </div>
  );
}
