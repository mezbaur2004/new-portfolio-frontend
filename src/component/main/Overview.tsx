"use client";

import { motion } from "framer-motion";
import { sectionVariant, itemVariant } from "@/animation/variants";

const Overview = () => {
    return (
        <section
            id="overview"
            className="scroll-mt-12 sm:scroll-mt-16 min-h-screen px-6 py-20"
        >
            <motion.div
                variants={sectionVariant}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.32 }}
                className="max-w-4xl mx-auto flex flex-col items-center gap-6"
            >
                <motion.img
                    src="/images/no-bg.png"
                    alt="Overview"
                    className="w-48 h-70 object-cover shadow-lg"
                    variants={itemVariant}
                />

                <motion.h2
                    className="text-4xl font-bold text-center"
                    variants={itemVariant}
                >
                    Welcome to My Portfolio
                </motion.h2>

                <motion.p
                    className="text-gray-700 dark:text-gray-400 text-center text-lg max-w-xl"
                    variants={itemVariant}
                >
                    Abdullah Jaman is a seasoned educator with 20 years of teaching experience and a visionary leader in the field of education. He is the founder of Wheaton International School (WIS) and Guidance International School (GIS) in Dhaka, institutions known for their commitment to academic excellence and holistic student development.

                    As the Principal of Wheaton International School, Abdullah Jaman has played a pivotal role in shaping the school’s curriculum, fostering an innovative learning environment, and implementing global best practices in education. Under his leadership, WIS has grown into a distinguished institution that emphasizes critical thinking, creativity, and character development.

                    His leadership is characterized by a student-centered approach, modern teaching methodologies, and a strong emphasis on discipline and ethical values. He has also been instrumental in integrating technology into education, ensuring that WIS remains at the forefront of contemporary learning trends.

                    With his unwavering dedication to quality education, Abdullah Jaman continues to inspire students, teachers, and the broader educational community, making a lasting impact on the education sector in Bangladesh.
                </motion.p>
            </motion.div>
        </section>
    );
};

export default Overview;
