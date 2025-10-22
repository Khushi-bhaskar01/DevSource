// "use client"

// import useSWR from "swr"
// import type { DevSourceData } from "@/types/devsource"

// const fetcher = (url: string) => fetch(url).then((r) => r.json())

// export default function useDevSourceData() {
//   const { data, error, isLoading } = useSWR<DevSourceData>("/data.json", fetcher, {
//     revalidateOnFocus: false,
//     shouldRetryOnError: true,
//   })
//   return { data, error, isLoading }
// }

"use client"

import useSWR from "swr"
import type { DevSourceData } from "@/types/devsource"

const fetcher = (url: string) => fetch(url).then((r) => r.json())

export default function useDevSourceData() {
  const { data, error, isLoading } = useSWR<DevSourceData>("/data.json", fetcher, {
    revalidateOnFocus: true,      // re-fetch on window focus
    refreshInterval: 5000,        // auto-refresh every 5 seconds
    shouldRetryOnError: true,
  })

  return { data, error, isLoading }
}
