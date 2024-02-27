import { ReactNode } from "react"
import { useRouter } from "next/router"
import styles from './navigation.module.css'

import Link from 'next/link'

const LINKS = [
    {
        name: 'Home',
        path: '/'
    },
    {
        name: 'Projects',
        path: '/projects' 
    },
    {
        name: 'About',
        path: '/about' 
    }
]

type NavAnchor = {
    path: string,
    children: ReactNode
}

function NavAnchor ({path, children}: NavAnchor){
    return (
        <Link href={path}>
        <div className={styles.navAnchor}>{children}</div>
        </Link>
    )
}

export default function Navigation (){
    const { pathname } = useRouter ()
    return (
        <nav>
            <ul className={styles.list}>
                {LINKS.map(({name, path}) => 
                (
                <li key={path}>{
                    path == pathname ? <span>{name}</span>
                    : <NavAnchor path={path}>{name}</NavAnchor>
                }
                </li>
                ))}
            </ul>
        </nav>
    )
}