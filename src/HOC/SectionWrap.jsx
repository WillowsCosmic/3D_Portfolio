import React from "react";
import { motion } from "framer-motion";
import { styles } from "../styles";
import { staggerContainer } from "../utils/motion";


const SectionWrap = (Component, idname) => 
function HOC(){
    return(
        <div className="px-6 sm:px-16">
    <motion.section
        variants={staggerContainer()}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.25 }}
        // Using !important to override global CSS reset
        className="!px-18 !sm:px-2 !py-12 max-w-7xl mx-auto relative z-0"
    >
        <span className="hash-span" id={idname}>
            &nbsp;
        </span>
        <Component />
    </motion.section>
</div>
    )
}
    

export default SectionWrap
