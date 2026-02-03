// animation/variants.ts
export const sectionVariant = {
    hidden: { opacity: 0, y: 30 },
    visible: {
        opacity: 1,
        y: 0,
        transition: {
            staggerChildren: 0.16,
            when: "beforeChildren",
            ease: "easeOut",
            duration: 0.72,
        },
    },
};

export const itemVariant = {
    hidden: { opacity: 0, y: 18 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.46, ease: "easeOut" } },
};
