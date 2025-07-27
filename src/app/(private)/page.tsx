import { headers } from 'next/headers';
import { redirect } from 'next/navigation';
import { authClient } from '@/utils/auth-client';
export default async function Home() {
  const session = await authClient.getSession({
    fetchOptions: {
      headers: await headers(),
    },
  });

  if (!session.data) {
    redirect('/login');
  }

  return (
    <div>
      <h1>Home</h1>
      <p>Bem vindo {session.data.user.name}</p>
    </div>
  );
}
