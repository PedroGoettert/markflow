import { headers } from 'next/headers';
import Image from 'next/image';
import { authClient } from '@/utils/auth-client';

export default async function Dashboard() {
  const session = await authClient.getSession({
    fetchOptions: {
      headers: await headers(),
    },
  });

  return (
    <div>
      <h1>Dashboard</h1>
      <Image
        alt="Profile"
        height={40}
        priority
        src={session.data?.user?.image ?? '/default-avatar.png'}
        width={40}
      />
    </div>
  );
}
