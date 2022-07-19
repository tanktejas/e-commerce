import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";

import Temp from "../component/temp";
import Logcont from "../component/Loginsignincontext/context";

export default function Home() {
  return (
    <>
      <Logcont>
        <Temp />
      </Logcont>
    </>
  );
}
