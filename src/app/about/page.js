'use client'

import styles from './style.module.scss'
import Image from 'next/image'
import { easeInOut, motion } from 'framer-motion'

export default function About() {


    return (

        <div className={styles.container} id="card-con">
            <motion.div 
                className={styles.card} 
                initial={{transformPerspective: "1500px"}}
                transition={{ease: "easeInOut", duration: 0.5}}
                whileHover={{
                    transformPerspective: "3000px",
                    rotateX: 2,
                    translateY: -15,
                    
                }}
                
            >
                <h1>Test</h1>
                <div className={styles.body}>
                    <div className={styles.description}>
                        <p>This is some text</p>
                    </div>
                    <div className={styles.imageContainer}>
                        <div className={styles.inner}>
                            <Image
                                fill={true}
                                src={`/images/me.jpeg`}
                                alt="image"
                            >

                            </Image>
                        </div>

                    </div>
                </div>
            </motion.div>
        </div>
    )
}