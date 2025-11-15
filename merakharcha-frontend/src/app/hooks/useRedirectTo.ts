"use client"

import { useRouter } from "next/navigation"

export function useRedirectTo() {
  const router = useRouter()

  const redirectTo = (
    path: string,
    delay: number
  ) => {

    setTimeout(() => {
      router.push(path)
    }, delay)
  }

  return { redirectTo }
}
