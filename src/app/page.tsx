import { headers } from 'next/headers';
import { redirect } from 'next/navigation';
import { authClient } from '@/utils/auth-client';
export default async function Home() {
  const session = await authClient.getSession({
    fetchOptions: {
      headers: await headers(),
    },
  });

  console.log('Session:', session);

  if (!session.data) {
    redirect('/login');
  }

  return <div>Home</div>;
}
