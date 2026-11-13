
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

const RequiredStar = (): JSX.Element => (
  <span className="ml-1 text-red-500">*</span>
);

const Register = (): JSX.Element => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [agreeToTerms, setAgreeToTerms] = useState(false);
  const [error, setError] = useState("");

  const SubmitHandler = (e: FormEvent<HTMLFormElement>): void => {
    e.preventDefault();
    setError("");

    if (password !== confirmPassword) {
      setError("Passwords do not match.");
      return;
    }

    if (!agreeToTerms) {
      setError("Please accept the Terms & Conditions.");
      return;
    }

    console.log({
      firstName,
      lastName,
      email,
      phone,
      password,
    });

    // Connect your registration API here.
  };

  const inputClass =
    "w-full rounded-xl border border-white/25 bg-white/90 px-4 py-3.5 text-sm text-stone-800 outline-none transition placeholder:text-stone-400 focus:border-amber-300 focus:bg-white focus:ring-4 focus:ring-amber-300/20";

  const labelClass =
    "mb-2 block text-sm font-semibold text-amber-50";

  return (
    <main className="relative min-h-screen w-full overflow-hidden bg-[#5b3725] text-stone-900">

      {/* Background */}
      <img
        src="/login.jpg"
        alt="Sports court"
        className="absolute inset-0 h-full w-full object-cover"
      />

      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#321b12]/75 via-[#57321f]/50 to-[#a96b35]/25" />

      {/* Content */}
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

        {/* Registration Form */}
        <div className="flex flex-1 items-center justify-center py-10">

          <div className="w-full max-w-[480px]">

            {/* Heading */}
            <div className="mb-7">
              <span className="text-xs font-bold uppercase tracking-[0.25em] text-amber-300">
                Get Started
              </span>

              <h1 className="mt-3 text-4xl font-bold tracking-tight text-white sm:text-5xl">
                Create Account
              </h1>

              <p className="mt-3 text-sm leading-6 text-white/70">
                Join COURTFinder and discover the perfect court
                for your next game.
              </p>

              <p className="mt-3 text-xs text-white/60">
                Fields marked with <span className="text-red-500">*</span> are required.
              </p>
            </div>

            {/* Form */}
            <form onSubmit={SubmitHandler} className="space-y-4">

              {/* First Name + Last Name */}
              <div className="grid grid-cols-2 gap-4">

                <div>
                  <label htmlFor="firstName" className={labelClass}>
                    First Name <RequiredStar />
                  </label>

                  <input
                    id="firstName"
                    type="text"
                    required
                    autoComplete="given-name"
                    placeholder="First name"
                    value={firstName}
                    onChange={(e) => setFirstName(e.target.value)}
                    className={inputClass}
                  />
                </div>

                <div>
                  <label htmlFor="lastName" className={labelClass}>
                    Last Name 
                  </label>

                  <input
                    id="lastName"
                    type="text"
                    autoComplete="family-name"
                    placeholder="Last name"
                    value={lastName}
                    onChange={(e) => setLastName(e.target.value)}
                    className={inputClass}
                  />
                </div>

              </div>

              {/* Email */}
              <div>
                <label htmlFor="email" className={labelClass}>
                  Email Address <RequiredStar />
                </label>

                <input
                  id="email"
                  type="email"
                  required
                  autoComplete="email"
                  placeholder="Enter your email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className={inputClass}
                />
              </div>

              {/* Phone */}
              <div>
                <label htmlFor="phone" className={labelClass}>
                  Phone Number{" "}
                  <span className="text-xs font-normal text-white/60">
                    (Optional)
                  </span>
                </label>

                <input
                  id="phone"
                  type="tel"
                  autoComplete="tel"
                  placeholder="Enter your phone number"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  className={inputClass}
                />
              </div>

              {/* Password */}
              <div>
                <label htmlFor="password" className={labelClass}>
                  Password <RequiredStar />
                </label>

                <div className="relative">
                  <input
                    id="password"
                    type={showPassword ? "text" : "password"}
                    required
                    minLength={8}
                    autoComplete="new-password"
                    placeholder="Create a password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    className={`${inputClass} pr-12`}
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

                <p className="mt-1.5 text-xs text-white/55">
                  Use at least 8 characters.
                </p>
              </div>

              {/* Confirm Password */}
              <div>
                <label htmlFor="confirmPassword" className={labelClass}>
                  Confirm Password <RequiredStar />
                </label>

                <div className="relative">
                  <input
                    id="confirmPassword"
                    type={showConfirmPassword ? "text" : "password"}
                    required
                    minLength={8}
                    autoComplete="new-password"
                    placeholder="Confirm your password"
                    value={confirmPassword}
                    onChange={(e) => setConfirmPassword(e.target.value)}
                    className={`${inputClass} pr-12`}
                  />

                  <button
                    type="button"
                    onClick={() => setShowConfirmPassword((prev) => !prev)}
                    className="absolute right-3 top-1/2 grid h-9 w-9 -translate-y-1/2 place-items-center rounded-lg text-[#8f3f20] transition hover:bg-amber-100"
                    aria-label={
                      showConfirmPassword ? "Hide password" : "Show password"
                    }
                  >
                    <EyeIcon closed={showConfirmPassword} />
                  </button>
                </div>
              </div>

              {/* Terms & Conditions */}
              <div className="pt-1">
                <label className="flex cursor-pointer items-start gap-2.5 text-sm text-white/80">
                  <input
                    type="checkbox"
                    required
                    checked={agreeToTerms}
                    onChange={(e) => setAgreeToTerms(e.target.checked)}
                    className="mt-1 h-4 w-4 shrink-0 cursor-pointer accent-[#a94125]"
                  />

                  <span>
                    I agree to the{" "}
                    <a
                      href="/terms"
                      className="font-semibold text-amber-300 hover:text-white"
                    >
                      Terms & Conditions
                    </a>{" "}
                    and{" "}
                    <a
                      href="/privacy"
                      className="font-semibold text-amber-300 hover:text-white"
                    >
                      Privacy Policy
                    </a>
                    <RequiredStar />
                  </span>
                </label>
              </div>

              {/* Error Message */}
              {error && (
                <p
                  role="alert"
                  className="rounded-lg border border-red-900 bg-red-500/10 px-3 py-2 text-sm text-red-200"
                >
                  {error}
                </p>
              )}

              {/* Submit Button */}
              <button
                type="submit"
                className="group flex w-full items-center justify-center gap-2 rounded-xl bg-[#a94125] py-4 font-bold text-white shadow-lg shadow-black/20 transition duration-300 hover:-translate-y-0.5 hover:bg-[#8e351e] hover:shadow-xl active:scale-[0.98]"
              >
                Create Account

                <span className="transition-transform group-hover:translate-x-1">
                  →
                </span>
              </button>

            </form>

            {/* Login Link */}
            <p className="mt-6 text-center text-sm text-white/75">
              Already have an account?{" "}
              <a
                href="/login"
                className="font-bold text-amber-300 transition hover:text-white"
              >
                Sign In
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

export default Register;
