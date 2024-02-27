import styles from './header.module.css'
import Image from 'next/image'

export default function Header() {
return (
    <div>
    <article>
        <Image className={styles.imgconfig} 
        width={480}
        height={220}
        src="/imgs/home.png"
        alt={''}/>
    </article>
</div>
)
}
