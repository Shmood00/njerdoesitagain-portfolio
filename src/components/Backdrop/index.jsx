import { motion } from "framer-motion";
import styles from './style.module.scss'

const Backdrop = ({ children, onClick }) => {


    return (

        <motion.div
            onClick={onClick}
            className={styles.backdrop}
            initial={{ opacity: 0}}
            animate={{ opacity: 1}}
            exit={{ opacity: 0}}
        >
            {children}
        </motion.div>
    );
};

export default Backdrop