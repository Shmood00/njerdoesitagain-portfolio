'use client'
import Image from 'next/image';
import styles from './style.module.scss';
import { useTransform, motion, useScroll, AnimatePresence, useAnimationControls } from 'framer-motion';
import { useRef, useState } from 'react';
import Modal from '../Modal'
import { useMediaQuery } from 'react-responsive';


const Card = ({ i, title, description, src, color, progress, range, targetScale }) => {


    const container = useRef(null);
    const { scrollYProgress } = useScroll({
        target: container,
        offset: ['start end', 'start start']
    })


    const imageScale = useTransform(scrollYProgress, [0, 1], [2, 1]);
    const scale = useTransform(progress, range, [1, targetScale]);

    //triggers on image click
    function showImg() {
        const imCont = document.getElementById(i);


    }

    

    const [modalOpen, setModalOpen] = useState(false);

    const isMobile = useMediaQuery({query: '(max-width: 720px)'});


    const settings = {
        normal: {
            left: 0,
            x: 0
            
        },

        move: {
            left: isMobile ? 0 : 150,
            x: isMobile ? 0 : -100
        },

        exit: {
            left: 0,
            x: 0
        }
    }

    const controls = useAnimationControls();
   

    const close = () => {
        setModalOpen(false);
        controls.start('exit');
    };

    const open = () => {
        controls.start('move');
        setModalOpen(true); 
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
                    style={{ backgroundColor: color, scale, top: `calc(-5vh + ${i * 25}px)` }}
                    className={styles.card}
                    variants={settings}
                    initial="normal"
                    animate={controls}
                    exit="exit"        

                >
                    <h2>{title}</h2>
                    <div className={styles.body}>
                        <div className={styles.description}>
                            <p>{description}</p>
                        </div>

                        <div id={i} className={styles.imageContainer} onClick={() => (modalOpen ? close() : open() )}>
                           
                            <motion.div
                                className={styles.inner}
                                style={{ scale: imageScale }}
                            >
                                <Image
                                    fill
                                    src={`/images/${src}`}
                                    alt="image"
                                    placeholder="blur"
                                    blurDataURL={`/images/${src}`}
                                />
                            </motion.div>
                        </div>
                        
                    </div>
                    
                </motion.div>
                {modalOpen && <Modal modalOpen={modalOpen} handleClose={close} imSrc={src} i={i} progress={progress} range={range} targ={targetScale}  />}
                
            </div>

        </AnimatePresence>
    )
}

export default Card