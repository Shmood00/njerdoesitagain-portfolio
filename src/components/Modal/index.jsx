import { motion, useTransform } from "framer-motion";
import Backdrop from "../Backdrop";
import styles from './style.module.scss'
import Image from 'next/image';
import { useMediaQuery } from "react-responsive";

const dropIn = {
    hidden: {
        y: "-100vh",
        opacity: 0,
    },
    visible: {
        y: "0",
        opacity: 1,
        transition: {
            duration: 0.1,
            type: "spring",
            damping: 50,
            stiffness: 500,
        },
    },
    exit: {
        y: "100vh",
        opacity: 0
    },
};


const Modal = ({ handleClose, imSrc, i, progress, range, targ }) => {

    const isMobile = useMediaQuery({ query: '(max-width: 720px)' });

    const scale = useTransform(progress, range, [1, targ]);

    return (
        isMobile ?
            <Backdrop onClick={handleClose}>
                <motion.div
                    onClick={(e) => e.stopPropagation()}
                    className={styles.modal}
                    variants={dropIn}
                    initial="hidden"
                    animate="visible"
                    exit="exit"                

                >

                    <Image
                        fill
                        src={`/images/${imSrc}`}
                        alt="im"
                        placeholder="blur"
                        blurDataURL={`/images/${imSrc}`}
                        onClick={handleClose}
                        style={{ top: `calc(-5vh + ${i * 25}px)` }}
                    />
                    <span className={styles.close} onClick={handleClose}>
                        &times;
                    </span>
                </motion.div>
            </Backdrop>
            :
            <motion.div
                onClick={(e) => e.stopPropagation()}
                style={{ scale, top: `calc(-5vh + ${i * 25}px)` }}
                className={styles.modal}
                variants={dropIn}
                initial="hidden"
                animate="visible"
                exit="exit"

            >

                <Image
                    fill
                    src={`/images/${imSrc}`}
                    alt="im"
                    placeholder="blur"
                    blurDataURL={`/images/${imSrc}`}
                    onClick={handleClose}
                    style={{ top: `calc(-5vh + ${i * 25}px)` }}
                />

            </motion.div>
    );
};

export default Modal;