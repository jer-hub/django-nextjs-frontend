"use client";
import { useAuth } from "@/components/authProvider";
import { ThemeToggleButton } from "@/components/themeToggleButton";
import { useEffect } from "react";
import useSWR from "swr";

const fetcher = async (url) => {
  const res = await fetch(url);

  // If the status code is not in the range 200-299,
  // we still try to parse and throw it.
  if (!res.ok) {
    const error = new Error("An error occurred while fetching the data.");
    // Attach extra info to the error object.
    error.info = await res.json();
    error.status = res.status;
    throw error;
  }

  return res.json();
};

const WAITLISTS_API_URL = "/api/waitlists/";

export default function Page() {
  const auth = useAuth();

  const { data, error, isLoading } = useSWR(WAITLISTS_API_URL, fetcher);
  console.log(error?.status)
  useEffect(() => {
    if (error?.status === 401) {
      auth.loginRequiredRedirect();
    }
  }, [auth, error]);

  if (error) return <h1>Error</h1>;
  if (isLoading) return <h1>Loading...</h1>;

  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-24">
      <div><ThemeToggleButton /></div>
      {auth.isAuthenticated ? "Hello World" : "Not Authorized"}
      <div>{JSON.stringify(data)}</div>
    </main>
  );
}
