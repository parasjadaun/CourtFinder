import React from "react";

const LoginIcon = (): React.JSX.Element => (
  <svg
    className="h-5 w-5"
    fill="none"
    viewBox="0 0 24 24"
    stroke="currentColor"
    strokeWidth="2"
    aria-hidden="true"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M15 3h4a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2h-4"
    />
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M10 17l5-5-5-5M15 12H3"
    />
  </svg>
);

const UserPlusIcon = (): React.JSX.Element => (
  <svg
    className="h-5 w-5"
    fill="none"
    viewBox="0 0 24 24"
    stroke="currentColor"
    strokeWidth="2"
    aria-hidden="true"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M16 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"
    />
    <circle cx="10" cy="7" r="4" />
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M20 8v6m-3-3h6"
    />
  </svg>
);

const Home = (): React.JSX.Element => {
  return (
    <main className="relative isolate min-h-[100dvh] overflow-hidden bg-slate-950 text-white">

      <img
        src="/cover.jpeg"
        alt="Players enjoying a sports court"
        className="absolute inset-0 -z-20 h-full w-full object-cover"
      />

      <div className="absolute inset-0 -z-10 bg-gradient-to-b from-slate-950/80 via-slate-950/20 to-slate-950/95" />

      <div className="absolute -right-24 top-1/3 -z-10 h-64 w-64 rounded-full bg-cyan-400/20 blur-3xl" />

      <div className="mx-auto flex min-h-[100dvh] w-full max-w-6xl flex-col px-5 py-5 sm:px-8 sm:py-7 lg:px-12">

        <header className="flex items-center justify-between">
          <a href="#home" className="flex items-center gap-2.5">
            <span className="grid h-10 w-10 place-items-center rounded-xl bg-cyan-400 text-lg font-black text-slate-950">
              C
            </span>
            <span className="text-lg font-extrabold tracking-tight sm:text-xl">
              COURT<span className="text-cyan-300">Finder</span>
            </span>
          </a>
        </header>

        <section id="home" className="flex flex-1 flex-col justify-end pb-2 pt-16 sm:justify-center sm:py-16">

          <div className="max-w-2xl">
            <h1 className="max-w-xl text-4xl font-black leading-[0.98] tracking-tight sm:text-6xl lg:text-7xl">
              Your court.
              <span className="block text-cyan-300">Your crew.</span>
              Your moment.
            </h1>

            <p className="mt-5 max-w-md text-sm leading-6 text-slate-100/85 sm:text-base sm:leading-7">
              Discover great places to play, lock in a time, and get the whole team on the court in minutes.
            </p>
          </div>

          <div className="mt-8 flex w-full max-w-md flex-col gap-3 sm:mt-10 sm:flex-row">

            <button className="group flex flex-1 items-center justify-center gap-2 rounded-2xl bg-cyan-400 px-5 py-4 text-sm font-extrabold text-slate-950">
              <LoginIcon />
              Login
            </button>

            <button className="flex items-center justify-center gap-2 rounded-2xl border border-white/25 bg-white/10 px-5 py-4 text-sm font-bold text-white backdrop-blur-md">
              Create account
              <UserPlusIcon />
            </button>

          </div>
        </section>

        <footer className="flex items-center justify-between border-t border-white/15 pt-4 text-[11px] font-medium tracking-wide text-white/65">
          <span>CRICKET · FOOTBALL · BADMINTON</span>
          <span className="hidden sm:block">FIND. BOOK. PLAY.</span>
        </footer>

      </div>
    </main>
  );
};

export default Home;
