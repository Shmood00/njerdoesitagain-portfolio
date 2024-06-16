'use client'

import { motion } from 'framer-motion';
import Link from 'next/link';
import { useState } from 'react';
import styles from './style.module.scss'
import { usePathname } from 'next/navigation';
import { useMediaQuery } from 'react-responsive';

const Navbar = () => {

    const currentPath = usePathname();

    const [isToggled, setToggle] = useState(false);

    const MOBILE_NAV_ITEMS = [
        {
            id: 0,
            navTitle: "Pieces",
            link: "/"
        },
        {
            id: 1,
            navTitle: "About",
            link: "/about"
        }
    ]



    const hideNavItems = { //not here
        opened: {
            opacity: 0,
            y: "-100vh",
            transition: {
                duration: 0.5,
                ease: "easeInOut"

            }
        },

        closed: {
            opacity: 1,
            y: "0%",
            transition: {
                delay: 1,
                duration: 0.5,
                ease: "easeInOut"
            }
        }
    }

    const mobileMenuVariant = {
        opened: {
            y: "0%",
            transition: {
                delay: 0.15,
                duration: 1.1,
                ease: [0.74, 0, 0.19, 1.02]
            }
        },
        closed: {
            y: "-100%",
            transition: {
                delay: 0.25,
                duration: 0.63,
                ease: [0.74, 0, 0.19, 1.02]
            }
        }
    }

    const fadeInVariant = {
        opened: {
            opacity: 1,
            transition: {
                delay: 1.2
            }
        },
        closed: { opacity: 0 }
    }

    const ulVariant = {
        opened: {
            transition: {
                delayChildren: 1,
                staggerChildren: 0.18
            }
        },
        closed: {
            transition: {
                staggerChildren: 0.06,
                staggerDirection: -1
            }
        }
    }

    const liVariant = {
        opened: {
            opacity: 1,
            y: "0%",
            transition: {
                duration: 0.65,
                ease: "easeOut"
            }
        },
        closed: {
            opacity: 0,
            y: "100%",
            transition: {
                duration: 0.25,
                ease: "easeInOut"
            }
        }
    }

    const isMobile = useMediaQuery({ query: '(max-width: 720px)' });

    const navZIndex = {
        forward: {
            zIndex: 1
        }

    }


    return (
        <motion.div className={styles.container}
            variants={navZIndex}
            initial="forward"
            style={isToggled ? { zIndex: 1 } : { zIndex: 0 }}
            id="nav-container"
        >
            <motion.nav
                initial="closed"
                animate={isToggled ? "opened" : "closed"}
            >
                <div className={styles.navHeader}>
                    <div className={styles.logocontainer}>
                        <motion.h1 variants={hideNavItems}>Njerdoesitagain - {currentPath}</motion.h1>
                    </div>
                    <div className={styles.menucontainer}>
                        <motion.div
                            variants={hideNavItems}
                            onClick={() => setToggle(true)}
                        >
                            Menu
                        </motion.div>
                    </div>
                </div>
                <motion.div variants={mobileMenuVariant} className={styles.mobilemenu}>
                    <motion.button
                        variants={fadeInVariant}
                        onClick={() => setToggle(false)}
                    >
                        Close
                    </motion.button>
                    <div className={styles.group}>
                        <motion.ul variants={ulVariant}>
                            {MOBILE_NAV_ITEMS.map(navItem => (
                                <motion.li whileTap={{ scale: 0.95 }} key={navItem.id}>
                                    <Link href={navItem.link} onClick={() => setToggle(false)}>
                                        <motion.div variants={liVariant}>{navItem.navTitle}</motion.div>
                                    </Link>
                                </motion.li>

                            ))}

                        </motion.ul>
                        <motion.div variants={fadeInVariant} className="contact">
                            <motion.div whileHover={{fontStyle: "italic"}}>
                                <Link href="https://www.instagram.com/njerdoesitagain/" style={{ textDecoration: "none", color: "beige" }}>
                                    <h5>@njerdoesitagain</h5>
                                </Link>
                            </motion.div>
                        </motion.div>
                    </div>

                </motion.div>
            </motion.nav>
        </motion.div>
    )
}

export default Navbar;