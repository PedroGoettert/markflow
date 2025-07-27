import { headers } from 'next/headers';
import Image from 'next/image';
import Link from 'next/link';
import { redirect } from 'next/navigation';
import logo from '@/assets/logo-without-background.png';
import { Row } from '@/components/Row';
import { SocialLoginComponent } from '@/components/socialLogin';
import { authClient } from '@/utils/auth-client';

export default async function Login() {
  const session = await authClient.getSession({
    fetchOptions: {
      headers: await headers(),
    },
  });

  if (session.data) {
    redirect('/');
  }

  return (
    <main className="flex w-[1000px] items-center justify-center rounded-lg bg-[#fff] py-5">
      <header className="h-[450px] w-[500px] flex-col items-center p-10">
        <div className="flex h-full w-full flex-col gap-8">
          <div className="mb-2 flex items-center gap-3">
            <Image
              alt="Logo da marca"
              className="h-20 w-20 text-white"
              priority
              src={logo}
            />
            <strong className="text-4xl">MarkFlow</strong>
          </div>

          <div>
            <p className="text-[24px]">
              A sua plataforma para a gestão dos resultados dos seus clientes
            </p>
          </div>

          <Link
            className="flex cursor-pointer items-center justify-center gap-2 rounded-md bg-gray-300 py-2 font-bold"
            href={'/signup'}
          >
            Criar sua conta
          </Link>
        </div>
      </header>
      <section className="flex h-[450px] w-[500px] flex-col items-center border-gray-300 border-l-1 p-10">
        <div className="w-full ">
          <h1 className="self-start font-bold text-2xl">Sign-In</h1>

          <form className="mt-4 flex flex-col gap-4">
            <div className="flex flex-col gap-2">
              <label htmlFor="email">Email</label>
              <input
                className="rounded-md border-[1px] border-gray-300 border-solid px-2 py-2"
                id="email"
                placeholder="Insira seu email"
                type="email"
              />
            </div>
            <div className="flex flex-col gap-2">
              <label htmlFor="password">Senha</label>
              <input
                className="rounded-md border-[1px] border-gray-300 border-solid px-2 py-2"
                id="password"
                placeholder="Insira sua senha"
                type="password"
              />
            </div>
            <button
              className="w-full rounded-md bg-gray-300 py-2 font-bold hover:cursor-pointer hover:bg-gray-500"
              type="submit"
            >
              Sign In
            </button>
          </form>
        </div>
        <Row />

        <SocialLoginComponent />
      </section>
    </main>
  );
}
