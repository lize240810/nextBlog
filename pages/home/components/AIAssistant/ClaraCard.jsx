import Image from 'next/image';
import styles from './styles.module.scss';

export default function ClaraCard() {
    const features = [
        {
            title: "Works tirelessly 24/7, with no turnover and zero human error.",
            desc: "We go beyond traditional purchase-to-pay software. Clara guides, executes, and automates your entire purchase-to-pay workflow."
        },
        {
            title: "One employee to orchestrate your entire workflow.",
            desc: "We go beyond traditional purchase-to-pay software. Clara guides, executes, and automates your entire purchase-to-pay workflow.We go beyond traditional purchase-to-pay software."
        }
    ];

    const howItWorks = [
        "Centralized communication hub for AP processes",
        "Automated purchase acquisition review",
        "Efficient vendor onboarding",
        "Intelligent invoice review with matching",
        "Proactive handling of disputes",
        "Automated payment processing",
        "Customizable expense insights",
        "Compliance automation",
        "Multi-entity support",
        "Audit-ready documentation"
    ];

    return (
        <section>
            <p className="text-2xl mb-4 font-bold title-color tracking-wider">
                <span className="text-2xl md:text-5xl">Meet</span> Our First M Assistant:
            </p>

            <div className={`${styles.borderMy} flex flex-col md:flex-row gap-8 items-center relative w-[70%]`}>
                <div className="w-full h-full absolute top-0 left-0 bg-[#49414114] blur-md"/>
                <div className="relative w-80 h-80">
                    <Image src="/images/clara-avatar.svg" alt="Clara AI Assistant" fill/>
                </div>
                <div className="w-full md:w-2/3 flex flex-col justify-center">
                    <h4 className="text-5xl mb-4 font-semibold">Clara</h4>
                    <div className="text-2xl mb-3 font-semibold">Your AP Accountant</div>

                    <ul className="space-y-2">
                        {features.map((feature, index) => (
                            <li key={index} className="flex items-start flex-col">
                                <div className="font-bold text-lg"><span className="mr-2">•</span>{feature.title}</div>
                                <div className="text-sm ml-4">{feature.desc}</div>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>

            <div className="ml-20 mt-10">
                <h4 className="text-xl font-semibold my-4">How Clara Works</h4>
                <ul className="grid grid-cols-1">
                    {howItWorks.map((item, index) => (
                        <li key={index}>
                            <span className="mr-2">•</span>{item}
                        </li>
                    ))}
                </ul>
            </div>

        </section>
    );
}