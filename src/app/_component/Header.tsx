import Link from "next/link";
import styles from "./header.module.scss";
// import Image from "next/image";
// import logoimg from "/public/KakaoTalk_Photo_2023-05-11-17-29-42 002.png";
// import UseSessionHeader from "./header/useSessionHeader";
export default function Header() {
    return (
        <div className={styles.header_container}>
            <div className="flex gap-5 text-[20px] items-center">
                <h1 className={styles.header_logo}>
                    <Link href={"/"}>What'ch Next Movie</Link>
                </h1>
                <div className="flex gap-x-4">
                    <Link href={"/community/movie"}>영화</Link>
                </div>
            </div>
            <div className="flex gap-x-3">
                <Link href={"/signup"}>회원가입</Link>
                <Link href={"/login"}>로그인</Link>
            </div>
        </div>
    );
}
