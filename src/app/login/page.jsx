"use client";

import Image from "next/image";
import Link from "next/link";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useAuth } from "@/components/authProvider";

const url = "/api/login/";

export default function Page() {
  const auth = useAuth();

  async function handleSubmit(event) {
    event.preventDefault();
    const formData = new FormData(event.target);
    const objectData = Object.fromEntries(formData);
    const jsonData = JSON.stringify(objectData);

    const response = await fetch(url, {
      method: "POST",
      header: {
        "Content-Type": "application/json",
      },
      body: jsonData,
    });
    const rData = await response.json();
    if (response.ok) {
      auth.login();
    }
  }

  return (
    <div className="w-full lg:grid lg:min-h-[85vh] lg:grid-cols-2 xl:min-h-[90vh]">
      <div className="flex items-center justify-center py-12">
        <div className="mx-auto grid w-[350px] gap-6">
          <div className="grid gap-2 text-center">
            <h1 className="text-3xl font-bold">Login</h1>
          </div>
          <div className="grid gap-4 m-2">
            <form onSubmit={handleSubmit}>
              <div className="grid gap-2">
                <Label htmlFor="username">Username: </Label>
                <Input
                  id="username"
                  type="username"
                  name="username"
                  placeholder="username"
                  required
                />
              </div>
              <div className="grid gap-2 m-2">
                <div className="flex items-center">
                  <Label htmlFor="password">Password</Label>
                </div>
                <Input
                  id="password"
                  placeholder="password"
                  type="password"
                  name="password"
                  required
                />
              </div>
              <Button type="submit" className="w-full mt-2">
                Login
              </Button>
            </form>
          </div>
        </div>
      </div>
      <div className="hidden bg-muted lg:block">
        <Image
          src="/placeholder.svg"
          alt="Image"
          width="1920"
          height="1080"
          className="h-full w-full object-cover dark:brightness-[0.2] dark:grayscale"
        />
      </div>
    </div>
  );
}
