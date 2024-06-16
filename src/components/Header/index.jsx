import styles from './style.module.scss'
import { motion } from 'framer-motion'

const Header = () => {

    const settings = {
        hidden: {
            opacity: 0,
            y: "100vh"
        },

        show: {
            opacity: 1,
            y: 0,
            transition: {
                duration: 1,
                type: "spring"

            }
        }
    }

    return (
        <motion.div 
            className={styles.header}
            variants={settings}
            initial="hidden"
            animate="show"
        >
            <h1>Njerdoesitagain Art Pieces</h1>
        </motion.div>
    )
}

export default Header;