import { authClient } from "@/utils/auth-client";
import { headers } from "next/headers";
import Image from "next/image";

export default async function Dashboard() {
   
    const session = await authClient.getSession({
      fetchOptions: {
        headers: await headers()
      }
    })

  return (
    <div>
      <h1>Dashboard</h1>
      <pre>{JSON.stringify(session.data?.user, null, 2)}</pre>
      <Image src={session.data?.user?.image ?? "/default-avatar.png"} // fallback local
  width={40}
  height={40}
  alt="Profile"
  priority
  />
    </div>
  );
}
