import { headers } from 'next/headers';
import Image from 'next/image';
import Link from 'next/link';
import { redirect } from 'next/navigation';
import logo from '@/assets/logo-without-background.png';
import { authClient } from '@/utils/auth-client';
export default async function Signup() {
  const session = await authClient.getSession({
    fetchOptions: {
      headers: await headers(),
    },
  });

  if (session.data) {
    redirect('/');
  }

  return (
    <main className="flex w-[800px] flex-col rounded-lg bg-[#fff] py-5">
      <header className="mb-2 flex items-center gap-3 pt-5 pl-5">
        <Image alt="Logo da marca" className="h-20 w-20" priority src={logo} />
        <strong className="text-4xl">MarkFlow</strong>
      </header>

      <section className="flex w-full flex-col items-center justify-center gap-10">
        <h1 className="font-bold text-3xl">Crie uma conta</h1>

        <form action="" className="flex w-[650px] flex-col gap-4">
          <div className="flex flex-col gap-1">
            <label htmlFor="name">Nome da Empresa</label>
            <input
              className="rounded-md border-1 border-gray-300 border-solid px-2 py-2"
              id="name"
              name="name"
              type="text"
            />
          </div>
          <div className="flex flex-col gap-1">
            <label htmlFor="cnpj">CNPJ</label>
            <input
              className="rounded-md border-1 border-gray-300 border-solid px-2 py-2"
              id="cnpj"
              name="cnpj"
              type="text"
            />
          </div>
          <div className="flex w-full gap-10">
            <div className="flex flex-1 flex-col gap-1">
              <label htmlFor="email">Email</label>
              <input
                className="rounded-md border-1 border-gray-300 border-solid px-1 py-2"
                id="email"
                name="email"
                type="email"
              />
            </div>
            <div className="flex flex-1 flex-col gap-1">
              <label htmlFor="confirmedEmail">Confirme seu Email</label>
              <input
                className="rounded-md border-1 border-gray-300 border-solid px-1 py-2"
                id="confirmedEmail"
                name="confirmedEmail"
                type="email"
              />
            </div>
          </div>
          <div className="flex w-full gap-10">
            <div className="flex flex-1 flex-col gap-1">
              <label htmlFor="password">Senha</label>
              <input
                className="rounded-md border-1 border-gray-300 border-solid px-1 py-2"
                id="password"
                name="password"
                type="password"
              />
            </div>
            <div className="flex flex-1 flex-col gap-1">
              <label htmlFor="confirmedPassword">Confirme sua Senha</label>
              <input
                className="rounded-md border-1 border-gray-300 border-solid px-1 py-2"
                id="confirmedPassword"
                name="confirmedPassword"
                type="password"
              />
            </div>
          </div>

          <button
            className="w-full rounded-md bg-gray-300 py-2 font-bold"
            type="submit"
          >
            CRIAR CONTA
          </button>
        </form>

        <div className="flex gap-2">
          <span>Já possui uma conta?</span>
          <Link className="hover:font-medium" href="/login">
            Clique aqui
          </Link>
        </div>
      </section>
    </main>
  );
}
