"use client";

import { useState } from "react";
import { useAuth } from "@/app/context/AuthProvider";
import Link from "next/link";

export default function RegisterPage() {
  const { register } = useAuth();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [passwordConfirmation, setPasswordConfirmation] = useState("");
  const [error, setError] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (password !== passwordConfirmation) {
        setError("Passwords do not match");
        return;
    }
    setError("");
    setIsSubmitting(true);
    try {
      await register({ name, email, password, password_confirmation: passwordConfirmation });
    } catch (err: any) {
      setError(err.response?.data?.message || "Registration failed. Please check your inputs.");
      setIsSubmitting(false);
    }
  };

  return (
    <div className="flex min-h-[calc(100vh-64px)] items-center justify-center bg-zinc-50 dark:bg-black px-4">
      <div className="w-full max-w-md space-y-8 bg-white dark:bg-zinc-900 p-8 rounded-xl shadow-sm border border-zinc-100 dark:border-zinc-800">
        <div className="text-center">
          <h2 className="text-3xl font-serif font-bold tracking-tight text-zinc-900 dark:text-white">
            Join Medium-Lite.
          </h2>
        </div>
        <form className="mt-8 space-y-6" onSubmit={handleSubmit}>
          {error && (
              <div className="bg-red-50 dark:bg-red-900/20 text-red-600 dark:text-red-400 p-3 rounded-md text-sm text-center">
                  {error}
              </div>
          )}
          <div className="space-y-4 rounded-md shadow-sm">
             <div>
              <label htmlFor="name" className="sr-only">Full Name</label>
              <input
                id="name"
                name="name"
                type="text"
                required
                className="relative block w-full rounded-md border-0 py-3 text-zinc-900 ring-1 ring-inset ring-zinc-300 placeholder:text-zinc-400 focus:z-10 focus:ring-2 focus:ring-inset focus:ring-black dark:bg-zinc-800 dark:text-white dark:ring-zinc-700 sm:text-sm sm:leading-6 px-3"
                placeholder="Full Name"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
            </div>
            <div>
              <label htmlFor="email-address" className="sr-only">Email address</label>
              <input
                id="email-address"
                name="email"
                type="email"
                required
                className="relative block w-full rounded-md border-0 py-3 text-zinc-900 ring-1 ring-inset ring-zinc-300 placeholder:text-zinc-400 focus:z-10 focus:ring-2 focus:ring-inset focus:ring-black dark:bg-zinc-800 dark:text-white dark:ring-zinc-700 sm:text-sm sm:leading-6 px-3"
                placeholder="Email address"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div>
              <label htmlFor="password" className="sr-only">Password</label>
              <input
                id="password"
                name="password"
                type="password"
                required
                className="relative block w-full rounded-md border-0 py-3 text-zinc-900 ring-1 ring-inset ring-zinc-300 placeholder:text-zinc-400 focus:z-10 focus:ring-2 focus:ring-inset focus:ring-black dark:bg-zinc-800 dark:text-white dark:ring-zinc-700 sm:text-sm sm:leading-6 px-3"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
             <div>
              <label htmlFor="password_confirmation" className="sr-only">Confirm Password</label>
              <input
                id="password"
                name="password_confirmation"
                type="password"
                required
                className="relative block w-full rounded-md border-0 py-3 text-zinc-900 ring-1 ring-inset ring-zinc-300 placeholder:text-zinc-400 focus:z-10 focus:ring-2 focus:ring-inset focus:ring-black dark:bg-zinc-800 dark:text-white dark:ring-zinc-700 sm:text-sm sm:leading-6 px-3"
                placeholder="Confirm Password"
                value={passwordConfirmation}
                onChange={(e) => setPasswordConfirmation(e.target.value)}
              />
            </div>
          </div>

          <div>
            <button
              type="submit"
              disabled={isSubmitting}
              className="group relative flex w-full justify-center rounded-full bg-black px-3 py-3 text-sm font-semibold text-white hover:bg-zinc-800 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black disabled:opacity-50 transition-all dark:bg-white dark:text-black dark:hover:bg-zinc-200"
            >
              {isSubmitting ? "Create account" : "Create account"}
            </button>
          </div>
        </form>
        
        <p className="mt-10 text-center text-sm text-zinc-500">
            Already have an account?{" "}
            <Link href="/login" className="font-semibold leading-6 text-black hover:text-zinc-700 dark:text-zinc-300 dark:hover:text-white">
                Sign in
            </Link>
        </p>
      </div>
    </div>
  );
}
