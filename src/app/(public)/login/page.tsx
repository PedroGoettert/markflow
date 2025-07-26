'use client';
import Image from 'next/image';
import { PiFacebookLogoBold, PiGoogleLogoBold } from 'react-icons/pi';
import logo from '@/assets/logo-without-background.png';
import { Row } from '@/components/Row';

export default function login() {
  return (
    <div className="flex h-[450] max-h-[450px] w-[1000px] items-center justify-center rounded-lg bg-[#fff] ">
      <section className="h-[450px] w-[500px] flex-col items-center p-10">
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

          <button
            className="flex cursor-pointer items-center justify-center gap-2 rounded-md bg-gray-200 py-2 font-bold"
            type="button"
          >
            Criar sua conta
          </button>
        </div>
      </section>
      <section className="flex h-[450px] w-[500px] flex-col items-center border-gray-300 border-l-1 p-10">
        <div className="w-full ">
          <h1 className="self-start font-bold text-2xl">Sing-In</h1>

          <form className="mt-4 flex flex-col gap-4">
            <div className="flex flex-col gap-2">
              <label htmlFor="email">Email</label>
              <input
                className="rounded-md border-[1px] border-black border-solid px-1 py-2"
                id="email"
                placeholder="Insira seu email"
                type="text"
              />
            </div>
            <div className="flex flex-col gap-2">
              <label htmlFor="password">Senha</label>
              <input
                className="rounded-md border-[1px] border-black border-solid px-1 py-2"
                id="password"
                placeholder="Insira sua senha"
                type="password"
              />
            </div>
            <button
              className="w-full rounded-md bg-gray-300 py-2 font-bold hover:cursor-pointer hover:bg-gray-500"
              type="submit"
            >
              Sing In
            </button>
          </form>
        </div>
        <Row />
        <div className="flex w-full flex-col gap-5">
          <button
            className="flex cursor-pointer items-center justify-center gap-2 rounded-md bg-[#EA4335] py-2 font-bold text-white"
            type="button"
          >
            <PiGoogleLogoBold size={24} />
            Continuar com Google
          </button>
          <button
            className="flex cursor-pointer items-center justify-center gap-2 rounded-md bg-[#1877f2] py-2 font-bold text-white"
            type="button"
          >
            <PiFacebookLogoBold size={24} />
            Continuar com Facebook
          </button>
        </div>
      </section>
    </div>
  );
}
