'use client'

import { useTranslations } from "next-intl";
// import { useUserStore } from "@/stores";
import Link from "next/link";

export default function Home() {
  const t = useTranslations('HomePage');
  // const {userName, isLoggedIn, login, logout, setUserName} = useUserStore();

  return (
    <div>
      {
        // isLoggedIn ? (
        //   <>
        //     <p>환영합니다, {userName}님!</p>
        //     <button onClick={logout}>로그아웃</button>

        //     <Link href="/chat">채팅화면으로 ㄱㄱ</Link>
        //   </>
        // ) : (
        //   <>
        //     <input type="text" placeholder="이름을 입력하세요." value={userName} onChange={(e) => setUserName(e.target.value)}/>
        //     <button onClick={login}>로그인</button>
        //   </>
        // )
      }
      <h1>{t('title')}</h1>
      <Link href='/about'>{t('about')}</Link>
    </div>
  );
}
