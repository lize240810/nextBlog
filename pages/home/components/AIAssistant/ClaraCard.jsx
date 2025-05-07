import Image from 'next/image';
import styles from './styles.module.scss';

export default function ClaraCard() {


    return (
        <section>
            <p className="text-2xl mb-10 font-bold title-color tracking-wider outfit-900">
                <span className="text-2xl md:text-5xl myUnderline">Meet</span> Our First M Assistant:
            </p>

            <div
                className={`${styles.borderMy} flex flex-col md:flex-row gap-8 items-center relative md:w-full lg:w-full xl:w-7/10`}>
                <div className="w-full h-full absolute top-0 left-0 bg-[#49414114] backdrop-blur-md z-1"/>
                <div className="z-2 relative w-80 h-80">
                    <Image src="/images/clara-avatar.svg" alt="Clara AI Assistant" fill/>
                </div>
                <div className={`${styles.right} z-2 w-full md:w-2/3 flex flex-col justify-center`}>
                    <h4 className="text-5xl mb-4 font-semibold outfit-900">
                        <span className="colorful-title">Clara</span>
                    </h4>
                    <div className="text-2xl mb-3 font-semibold text-[#464b69] outfit-900">Your AP Accountant</div>

                    <ul className="space-y-2">
                        <li className="flex items-start flex-col">
                            <div className="font-semibold text-lg text-[#4b506d] outfit-900">
                                <span className="mr-2">•</span>
                                Works tirelessly <strong className="text-xl text-[#004276]">24/7, </strong>with <span
                                className="colorful-title-2">no turnover</span> and <span className="colorful-title-2">zero human error.</span>
                            </div>
                            <div className="text-md ml-4 text-[#6a6d86]">We go beyond traditional purchase-to-pay
                                software. Clara guides, executes, and automates your entire purchase-to-pay workflow.
                            </div>
                        </li>
                        <li className="flex items-start flex-col">
                            <div className="font-bold text-lg text-[#4b506d] outfit-900">
                                <span className="mr-2">•</span>
                                <span className="colorful-title-2">One employee</span> to orchestrate your <span
                                className="colorful-title-2">entire workflow.</span>
                            </div>
                            <div className="text-md ml-4 text-[#6a6d86]">We go beyond traditional purchase-to-pay
                                software. Clara guides, executes, and automates your entire purchase-to-pay workflow.We
                                go beyond traditional purchase-to-pay software.
                            </div>
                        </li>
                    </ul>
                </div>
            </div>

            <div className={styles.Works}>
                <h4 className="text-2xl font-semibold my-4 text-[#1a2064]">How Clara Works</h4>
                <ul className="grid grid-cols-1 text-[#646781] gap-2">
                    <li><span className="mr-2">•</span><span>Centralized communication hub for <b
                        className="text-[#464b69]">all AP processes</b> </span>
                    </li>
                    <li><span className="mr-2">•</span><span>Automated purchase acquisition review</span></li>
                    <li><span className="mr-2">•</span><span>Efficient vendor onboarding</span></li>
                    <li><span className="mr-2">•</span><span>Intelligent <b
                        className="text-[#464b69]">invoice review</b> with matching</span></li>
                    <li><span className="mr-2">•</span><span>Proactive handling of <b
                        className="text-[#464b69]">disputes</b></span></li>
                    <li><span className="mr-2">•</span><span>Automated payment <b
                        className="text-[#464b69]">processing</b></span></li>
                    <li><span className="mr-2">•</span><span>Customizable expense insights</span></li>
                    <li><span className="mr-2">•</span><span>Compliance automation</span></li>
                    <li><span className="mr-2">•</span><span>Multi-entity support</span></li>
                    <li><span className="mr-2">•</span><span><b className="text-[#464b69]">Audit-ready</b> documentation</span>
                    </li>
                </ul>
            </div>
        </section>
    );
}