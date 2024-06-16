'use client'

import styles from './style.module.scss'
import Image from 'next/image'
import { motion } from 'framer-motion'

export default function About() {


    return (

        <div className={styles.container}>
            <motion.div className={styles.card} initial={{scale: 1}} whileHover={{scale: 1.02, transition: {ease: "easeInOut", duration: 1}}}>
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