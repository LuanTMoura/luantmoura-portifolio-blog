import styles from '@components/pagestyles/about.module.css'

export function AboutContentPartOne() {
    return (
        <div>
        <article>
            <>
        <img className={styles.imgconfig}
        width={styles.imgconfig}
        height={styles.imgconfig}
        src="/imgs/about.png"
        alt={''}/>

    <p className={styles.titleconfig}>
      My name is Luan Tobias Moura da Silva and I've started my journey
      in CEAP (Centro Educacional Assistencial Profissionalizante), a Technical Course
      located on the State of São Paulo in Brazil, with 14 years old.
      It was a long process to reach technical graduation, but at 17 I've conclude my journey.</p>
      <p className={styles.titleconfig}>
      Between this graduation, I've been studying in a english course on saturdays at Wise Up, also
      in State of São Paulo. It seems easy, but it was hard to handle a month between school, technical course
      and english course at saturdays – I mean, I traveled every week with at least four different bus lines 
      and several different routes. Beside all of this, I'm ok!
      </p>
      <p className={styles.titleconfig}>
      Nowadays, I've been spending time on expanding my skills on Java Stack and also, learning
      several ways to solve problems with his technologies. Also, I intend to get deep on web development with TypeScript 
      on front-end interfaces and reach my best as a Full Stack Developer (don't forgetting the knowledge of data base structures), of course.
      Even though I've been working with these technologies, my favorite language is Python (even though I don't 
      know nothing except the basic stuff).
      </p>
        </>
</article>
</div>
    )
}