'use client';
import { FaFacebook, FaGoogle } from 'react-icons/fa';
import { authClient } from '@/utils/auth-client';

export function SocialLoginComponent() {
  const loginWithGoogle = async () => {
    await authClient.signIn.social({
      provider: 'google',
      callbackURL: 'http://localhost:3000/',
    });
  };

  const loginWithFacebook = () => {
    // biome-ignore lint/suspicious/noConsole: <explanation>
    console.log('futuro botao de login com facebook');
  };
  return (
    <div className="flex w-full flex-col gap-5">
      <button
        className="flex cursor-pointer items-center justify-center gap-2 rounded-md bg-[#EA4335] py-2 font-bold text-white"
        onClick={loginWithGoogle}
        type="button"
      >
        <FaGoogle size={24} />
        Continuar com Google
      </button>
      <button
        className="flex cursor-pointer items-center justify-center gap-2 rounded-md bg-[#1877f2] py-2 font-bold text-white"
        onClick={loginWithFacebook}
        type="button"
      >
        <FaFacebook size={24} />
        Continuar com Facebook
      </button>
    </div>
  );
}
