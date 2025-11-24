import { API_BASE_URL } from "@/config/config";

export function useApi() {
  const callApi = async (endpoint: string, options: RequestInit = {}) => {
    try {

      const token = localStorage.getItem("token");

      const headers: HeadersInit = {
        "Content-Type": "application/json",
        ...(options.headers || {}),
        ...(token ? { Authorization: `Bearer ${token}` } : {}),
      };

      const res = await fetch(`${API_BASE_URL}${endpoint}`, {
        ...options,
        headers,
      });

      const data = await res.json();
      return { ok: res.ok, status: res.status, data };
    } catch (error) {
      console.log("API error:", error);
      return { ok: false, status: 500, data: null };
    }
  };

  return { callApi };
}
