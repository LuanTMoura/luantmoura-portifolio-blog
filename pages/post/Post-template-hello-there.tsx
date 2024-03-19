import styles from '@components/post/posts.module.css'
import Image from 'next/image'

const Hello = () => (
    <>
    <article>

        <h1 className={styles.iconconfig}><a href="/">↩</a></h1>
        <div className={styles.blankspace}></div>
        <div className={styles.hrtop}></div>
        <h1 className={styles.titleconfig}>
        This is a test of a title!
        </h1>
        <div>
        <div className={styles.hr}></div>
        <img className={styles.imgconfig} 
        width={styles.imgconfig}
        height={styles.imgconfig}
        src="/post/hello-there/teste.jpeg"
        alt={''}/>
        </div>        
        <div className={styles.textconfig}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris dapibus feugiat ornare. Aliquam id mauris et urna ultricies facilisis sed non sem. Suspendisse orci leo, vestibulum et molestie nec, laoreet et ante. Nulla non nibh sagittis, rutrum libero ac, elementum ex. Duis interdum mi vel mattis mattis. Nulla vel bibendum felis. Fusce a diam tortor. Curabitur ut iaculis nulla. Aenean auctor orci in leo maximus condimentum. Sed congue velit at ex tristique efficitur. Morbi tortor lectus, gravida a nisl vitae, placerat scelerisque purus. Nulla eu arcu felis.</div>
    </article>
    </>
)

export default Hello