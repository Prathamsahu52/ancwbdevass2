import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Game from "../components/game";
import {
  RecoilRoot,
  atom,
  selector,
  useRecoilState,
  useRecoilValue,
} from 'recoil';

function Home() {
  
  return(<RecoilRoot><Game /></RecoilRoot>) ;
}

export default Home
