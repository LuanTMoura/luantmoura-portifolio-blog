import Link from "next/link";
import Navigation from "@components/navigation"
import Head from "next/head";
import Image from 'next/image'
import { AboutContentPartOne } from "@components/paragraphs/aboutcontent";
import styles from '@components/pagestyles/about.module.css'

export default function About() {
  return (
    <>
    <Head>
    <title>Luan Tobias - Sobre</title>
    </Head>
    <Navigation/>
    <div>
    <AboutContentPartOne/>
    </div>
    </>
    );
}
