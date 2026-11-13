
import { useState } from "react";
import type { FormEvent, JSX } from "react";

const EyeIcon = ({ closed = false }: { closed?: boolean }): JSX.Element => (
  <svg
    className="h-5 w-5"
    fill="none"
    viewBox="0 0 24 24"
    stroke="currentColor"
    strokeWidth="1.8"
    aria-hidden="true"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M2.25 12s3.5-6 9.75-6 9.75 6 9.75 6-3.5 6-9.75 6S2.25 12 2.25 12Z"
    />
    <circle cx="12" cy="12" r="2.75" />
    {closed && <path strokeLinecap="round" d="M3 3l18 18" />}
  </svg>
);

const Login = (): JSX.Element => {
  const [showPassword, setShowPassword] = useState<boolean>(false);
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");

  const SubmitHandler = (e: FormEvent<HTMLFormElement>): void => {
    e.preventDefault();

    console.log({ email, password });

    setEmail("");
    setPassword("");
    setShowPassword(false);
  };

  return (
    <main className="relative min-h-screen w-full overflow-hidden bg-[#5b3725] text-stone-900">

      {/* Background */}
      <img
        src="/login.jpg"
        alt="Sports court"
        className="absolute inset-0 h-full w-full object-cover"
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#321b12]/70 via-[#57321f]/40 to-[#a96b35]/20" />

      {/* Main Content */}
      <div className="relative z-10 mx-auto flex min-h-screen w-full max-w-7xl flex-col px-6 py-7 sm:px-10 lg:px-14">

        {/* Header */}
        <header className="flex items-center justify-between">
          <a
            href="/"
            className="text-2xl font-extrabold tracking-tight text-amber-50"
          >
            COURT<span className="text-amber-400">Finder</span>
          </a>

          <a
            href="/"
            className="text-sm font-medium text-white/80 transition hover:text-amber-300"
          >
            ← Back to Home
          </a>
        </header>

        {/* Form Area */}
        <div className="flex flex-1 items-center justify-center py-12">

          <div className="w-full max-w-[440px]">

            {/* Form Heading */}
            <div className="mb-8">
              <span className="text-xs font-bold uppercase tracking-[0.25em] text-amber-300">
                Welcome Back
              </span>

              <h1 className="mt-3 text-4xl font-bold tracking-tight text-white sm:text-5xl">
                Sign in
                <br />
                to your account.
              </h1>
              <br />
            </div>

            {/* Form */}
            <form onSubmit={SubmitHandler} className="space-y-5">

              {/* Email */}
              <div>
                <label
                  htmlFor="email"
                  className="mb-2 pb-1.5 block text-sm font-semibold text-amber-50"
                >
                  Email Address
                </label>

                <input
                  id="email"
                  type="email"
                  required
                  placeholder="Enter your email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full rounded-xl border border-white/25 bg-white/90 px-4 py-4 text-sm text-stone-800 outline-none transition placeholder:text-stone-400 focus:border-amber-300 focus:bg-white focus:ring-4 focus:ring-amber-300/20"
                />
              </div>

              {/* Password */}
              <div>
                <div className="mb-2 flex items-center justify-between">
                  <label
                    htmlFor="password"
                    className="text-sm font-semibold text-amber-50"
                  >
                    Password
                  </label>

                  <a
                    href="/forgot-password"
                    className="text-xs font-semibold text-amber-300 transition hover:text-white"
                  >
                    Forgot Password?
                  </a>
                </div>

                <div className="relative">
                  <input
                    id="password"
                    type={showPassword ? "text" : "password"}
                    required
                    placeholder="Enter your password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    className="w-full rounded-xl border border-white/25 bg-white/90 px-4 py-4 pr-12 text-sm text-stone-800 outline-none transition placeholder:text-stone-400 focus:border-amber-300 focus:bg-white focus:ring-4 focus:ring-amber-300/20"
                  />

                  <button
                    type="button"
                    onClick={() => setShowPassword((prev) => !prev)}
                    className="absolute right-3 top-1/2 grid h-9 w-9 -translate-y-1/2 place-items-center rounded-lg text-[#8f3f20] transition hover:bg-amber-100"
                    aria-label={showPassword ? "Hide password" : "Show password"}
                  >
                    <EyeIcon closed={showPassword} />
                  </button>
                </div>
              </div>

              {/* Remember Me */}
              <div className="flex items-center gap-2 pt-1">
                <input
                  type="checkbox"
                  id="remember"
                  className="h-4 w-4 accent-[#a94125]"
                />

                <label
                  htmlFor="remember"
                  className="cursor-pointer text-sm text-white/80"
                >
                  Remember me
                </label>
              </div>

              {/* Login Button */}
              <button
                type="submit"
                className="group flex w-full items-center justify-center gap-2 rounded-xl bg-[#a94125] py-4 font-bold text-white shadow-lg shadow-black/20 transition duration-300 hover:-translate-y-0.5 hover:bg-[#8e351e] hover:shadow-xl active:scale-[0.98]"
              >
                Login to Your Account
                <span className="transition-transform group-hover:translate-x-1">
                  →
                </span>
              </button>

            </form>

            {/* Register */}
            <p className="mt-8 text-sm text-white/75">
              Don't have an account?{" "}
              <a
                href="/register"
                className="font-bold text-amber-300 transition hover:text-white"
              >
                Create Account
              </a>
            </p>

          </div>
        </div>

        {/* Footer */}
        <footer className="flex items-center justify-between text-xs font-medium tracking-wide text-white/60">
          <span>© 2026 COURTFinder</span>
          <span>FIND. BOOK. PLAY.</span>
        </footer>

      </div>
    </main>
  );
};

export default Login;
