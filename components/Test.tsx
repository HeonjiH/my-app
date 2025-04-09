'use client'

import { useUserStore } from "@/stores";

export default function Test(){
    const {userName, setUserName} = useUserStore();

    return (
        <div>
            <span>이름: {userName}</span>
            <button onClick={() => setUserName("황현지")}>바꾸기</button>
        </div>
    )
}