import styles from './Invite.module.css'

export default function Invite() {
    return (
        <div className={styles.inviteWrapper}>
            <div className={styles.archWrapper}>
                <div className={styles.arch}>
                    <div className={styles.archContent}>
                        <p className={styles.small}>You're invited to</p>
                        <p className={styles.large}>Lia's</p>
                        <p className={styles.small}>25th birthday</p>
                    </div>
                </div>
            </div>
            <div className={styles.inviteInfo}>
                <section>
                    <span className={styles.title}>Date</span>
                    <time>Saturday February 25th, 2023</time>
                </section>

                <section>
                    <span className={styles.title}>Itinerary</span>
                    <div className={styles.contentDivider}>
                        <time>6PM</time>
                        <p>Pre dinner celebration with drinks and cakes</p>
                    </div>
                    <div className={styles.contentDivider}>
                        <time>6PM</time>
                        <p>Dinner reservation at Zaytinya Location Icon.</p>
                    </div>
                </section>

                <section>
                    <span className={styles.title}>Dress Code</span>
                    <time>Semi-Formal</time>
                </section>

                <section>
                    <span className={styles.title}>RSVP</span>
                    <time>Please RSVP by</time>
                </section>
            </div>
        </div>
    )
}
