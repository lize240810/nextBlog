import styles from './styles.module.scss';

export default function Header() {
    return (
        <header className={`${styles.container} relative`}>
            <div className={`${styles.logo} flex items-center justify-center w-full`}>
                <img src="/images/logo.svg" alt=''/>
                <span className="text-[#1a2064] font-bold outfit-900">MuLItiFi</span>
            </div>

            <div
                className={`${styles.headerText} flex font-500 text-centerfont-bold text-white justify-center w-full text-center`}>
                <div className="w-[63%] outfit-900">
                    Transform Your Finance Operations with Autonomous AI Agents
                </div>
            </div>

        </header>
    )
}