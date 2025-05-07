import styles from './styles.module.scss';

export default function TwoLiner() {
    return (
        <section>
            <div className="mx-auto">

                <div className="text-2xl font-bold md:text-5xl mb-4 title-color tracking-wider flex outfit-900">
                    <div className={styles.Myliner} />
                    Two Liner / Introduction Page
                </div>
            </div>

            <div className={`${styles.container} flex gap-10`}>
                <div className={`${styles.left}  flex-1 mb-4 pr-2`}>
                    <p className="text-xl mb-4 title-color font-bold outfit-800">
                        No one starts a business to run accounting. That's where we come in.
                    </p>
                    <p className="text-md text-gray-600 tracking-wider word-spacing-widest leading-loose outfit-400">
                        MultiFi is the All-In-One Corporate Finance Platform built for growth.
                        We're powered by autonomous AI employees that get things done beyond
                        finance operations, bookkeeping, taxes, and financial reporting.
                        We deliver real-time insights that empower smarter, faster decision making.
                    </p>

                </div>
                <div className={`${styles.right}  flex-1 flex items-start flex-col justify-center`}>
                    <div className="text-gray-700 p-4 flex font-bold rounded-md shadow-2xl bg-white">
                        "Business numbers runs on trust."
                    </div>
                    <div className="text-gray-700 p-4 flex font-bold rounded-md shadow-2xl ml-[32%] bg-white"
                         style={{marginTop: '-10px'}}>
                        "Trust is certified by MultiFi."
                    </div>
                </div>
            </div>
        </section>
    );
}