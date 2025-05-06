import styles from './styles.module.scss';

export default function How() {
    return (
        <section className={`${styles.container}`}>
            <div className="mx-auto">
                <p className="text-2xl mb-4 font-bold title-color tracking-wider">
                    <span className="text-2xl md:text-5xl">HOW</span> MultiFi Works:
                </p>
            </div>

            <div className={` flex gap-10`}>
                <div className={`${styles.left}  flex-1 mb-4 pr-2`}>
                    <strong className="text-2xl title-color font-600">
                        Introducing Your Al Employees
                    </strong>
                    <p className="text-md mt-4 text-gray-600 tracking-wider">
                        We're building the future of finance software with AI-powered employees, affectionately known as
                        the M team, designed to serve your business.
                    </p>

                </div>
            </div>
        </section>
    );
}