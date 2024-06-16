'use client'
import Image from 'next/image';
import styles from './style.module.scss';
import { useTransform, motion, useScroll, AnimatePresence, useAnimationControls } from 'framer-motion';
import { useRef, useState } from 'react';
import Modal from '../Modal'
import { useMediaQuery } from 'react-responsive';


const Card = ({ i, title, description, src, color, rgbColor, progress, range, targetScale }) => {

    const container = useRef(null);
    const { scrollYProgress } = useScroll({
        target: container,
        offset: ['start end', 'start start']
    })


    const imageScale = useTransform(scrollYProgress, [0, 1], [4, 1]);


    const scale = useTransform(progress, range, [1, targetScale]);

    const [modalOpen, setModalOpen] = useState(false);

    const isMobile = useMediaQuery({ query: '(max-width: 720px)' });
    


    const settings = {
        normal: {
            left: 0,
            x: 0,
            scale: scale.current,
            transformPerspective: "1500px"

        },

        move: {
            left: isMobile ? 0 : 150,
            x: isMobile ? 0 : -100,
        },

        exit: {
            left: 0,
            x: 0
        }
    }


    const controls = useAnimationControls();

    const close = () => {

        var nav = document.getElementById("nav-container");

        
        setModalOpen(false);
        controls.start('exit');

        if(isMobile){
            nav.style.zIndex = "1";
        }
    }

    const open = () => {

        var nav = document.getElementById("nav-container");

        controls.start('move');
        setModalOpen(true);

        if(isMobile){
            nav.style.zIndex = "0";
        }

    };

    return (

        <AnimatePresence
            initial={false}
            onExitComplete={() => null}
        >
            <div
                ref={container}
                className={styles.cardContainer}
            >
                <motion.div
                    style={{ backgroundColor: color, scale, top: `calc(-5vh + ${i * 25}px)`}}
                    className={styles.card}
                    variants={settings}
                    initial="normal"
                    animate={controls}
                    exit="exit"
                    transition={{ease: "easeInOut", duration: 0.5}}
                    //whileHover={{scale: scale.current+.02, transition: {ease: "easeInOut", duration: 1}}}
                    whileHover={{transformPerspective: "3000px", rotateX: 2, translateY: -20}}

                >
                    <h2>{title}</h2>
                    <div className={styles.body}>
                        <div className={styles.description}>
                            <p>{description}</p>
                        </div>

                        <div id={i} className={styles.imageContainer} onClick={() => (modalOpen ? close() : open())}>

                            <motion.div
                                className={styles.inner}
                                style={{ scale: imageScale, opacity: 1 }}
                                whileHover={{opacity: 0.93}}
                            >
                                <Image
                                    fill={true}
                                    src={`/images/${src}`}
                                    alt="image"
                                    placeholder="blur"
                                    blurDataURL={rgbColor}

                                />
                            </motion.div>
                        </div>

                    </div>

                </motion.div>
                {modalOpen && <Modal modalOpen={modalOpen} handleClose={close} imSrc={src} i={i} progress={progress} range={range} targ={targetScale} />}

            </div>

        </AnimatePresence>
    )
}

export default Card