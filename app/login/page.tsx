import { login } from "./actions";

export default async function LoginPage({
  searchParams,
}: {
  searchParams: Promise<{ error?: string }>;
}) {
  const { error } = await searchParams;
  const showError = error === "1";

  return (
    <div
      className="min-h-screen flex items-center justify-center px-6"
      style={{
        background: "linear-gradient(107.67deg, #e2edeb 23.13%, #f1f9ff 70.226%)",
      }}
    >
      <div className="w-full max-w-sm flex flex-col gap-8">
        {/* Logo text */}
        <div className="flex flex-col gap-1">
          <p
            className="text-xs font-medium tracking-[1.12px] uppercase text-[var(--dark)]"
          >
            Northcoast Dermatology
          </p>
          <h1
            className="text-[28px] leading-tight text-[var(--dark)]"
            style={{ fontFamily: '"Helvetica Neue", Helvetica, Arial, sans-serif' }}
          >
            This site is password protected.
          </h1>
        </div>

        <form action={login} className="flex flex-col gap-4">
          <div className="flex flex-col gap-2">
            <input
              type="password"
              name="password"
              placeholder="Enter password"
              required
              className="w-full border border-[var(--light)] bg-white text-[var(--dark)] placeholder:text-[var(--mid)] rounded-full px-5 py-3 text-base outline-none focus:border-[var(--dark)] transition-colors"
            />
            {showError && (
              <p className="text-sm text-red-600 px-2">Incorrect password. Try again.</p>
            )}
          </div>
          <button
            type="submit"
            className="w-full bg-[var(--dark)] text-white text-base px-6 py-3 rounded-full hover:opacity-90 transition-opacity"
          >
            Enter site
          </button>
        </form>
      </div>
    </div>
  );
}
