import Layout from '../../components/Layout/layout'
import TwoLiner from './components/TwoLiner/twoLiner';
import styles from './styles.module.scss';
import How from "./components/How/how";
import AIAssistant from "./components/AIAssistant/ClaraCard";

export default function Home() {
    return (
        <Layout>
            <section className={`${styles.container} relative`}>
                <TwoLiner/>
                <div className="mt-40 z-1 relative">
                    <How/>
                </div>
                <img src="/images/background.svg" alt="Clara" className={`${styles.background} z-0`} />
                <div className="mt-40 z-1 relative">
                    <AIAssistant/>
                </div>
            </section>
        </Layout>
    );
}