import { Link } from "react-router-dom";

const SignUp = () => {
    return (
        <div className="flex h-screen justify-center items-center">
            <div className="card w-96 bg-base-100 shadow-xl">
                <div className="card-body">
                    <h2 className="text-center text-orange-500 text-2xl font-bold">Sign Up</h2>

                    <form>
                        <div class="form-control w-full max-w-xs">
                            <label class="label">
                                <span class="label-text">Name</span>
                            </label>
                            <input
                                type="text"
                                placeholder="Your Name"
                                class="input input-bordered w-full max-w-xs"

                            />
                            <label class="label">

                            </label>
                        </div>
                        <div class="form-control w-full max-w-xs">
                            <label class="label">
                                <span class="label-text">Email</span>
                            </label>
                            <input
                                type="email"
                                placeholder="Your Email"
                                class="input input-bordered w-full max-w-xs"

                            />
                            <label class="label">

                            </label>
                        </div>
                        <div class="form-control w-full max-w-xs">
                            <label class="label">
                                <span class="label-text">Password</span>
                            </label>
                            <input
                                type="password"
                                placeholder="Password"
                                class="input input-bordered w-full max-w-xs"

                            />
                            <label class="label">

                            </label>
                        </div>

                        <input
                            className="btn w-full max-w-xs text-white"
                            type="submit"
                            value="Sign Up"
                        />
                    </form>
                    <p className="text-center mt-1">
                        <small>
                            {" "}
                            Already have an account?
                            <Link className="text-orange-500" to="/login">
                                {" "}
                                Please Login
                            </Link>
                        </small>
                    </p>
                    <div className="divider">OR</div>
                    <button
                        onClick={() => signInWithGoogle()}
                        className="btn btn-outline uppercase"
                    >
                        Continue With Google
                    </button>
                </div>
            </div>
        </div>
    );
};

export default SignUp;