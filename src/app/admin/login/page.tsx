"use client";
import { signIn } from "next-auth/react";
import { useState } from "react";
import { useRouter } from "next/navigation";

export default function LoginPage() {
  const router = useRouter();
  const [error, setError] = useState("");

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);

    try {
      const res = await signIn("credentials", {
        email: formData.get("email"),
        password: formData.get("password"),
        redirect: false,
      });

      if (res?.error) {
        setError(res.error);
      } else {
        router.push("/admin/dashboard");
      }
    } catch (error) {
      setError("Terjadi kesalahan saat login");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-900">
      <div className="bg-gray-800 p-8 rounded-lg shadow-lg w-full max-w-md">
        <h1 className="text-2xl font-bold text-white mb-6 text-center">Login Admin</h1>

        {error && <div className="bg-red-500/10 border border-red-500 text-red-500 rounded p-3 mb-4">{error}</div>}

        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label htmlFor="email" className="block text-gray-300 mb-1">
              Email
            </label>
            <input type="email" id="email" name="email" required className="w-full bg-gray-700 text-white rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500" />
          </div>

          <div>
            <label htmlFor="password" className="block text-gray-300 mb-1">
              Password
            </label>
            <input type="password" id="password" name="password" required className="w-full bg-gray-700 text-white rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500" />
          </div>

          <button type="submit" className="w-full bg-blue-600 text-white rounded py-2 hover:bg-blue-700 transition-colors">
            Login
          </button>
        </form>
      </div>
    </div>
  );
}
