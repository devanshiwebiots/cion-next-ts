"use client";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

export default function Home() {
  const router = useRouter();
  useEffect(() => {
    router.push("/dashboards/crmdashboard");
  }, [router]);
  return <main></main>;
}
