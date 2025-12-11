import React from "react";
import { Link } from "react-router-dom";
import styles from "./Styles/Footer.module.css";
import emblem from "../assets/Images/emblem1.png";
import { FaXTwitter, FaFacebookF } from "react-icons/fa6";

export default function Footer() {
    return (
        <>
            <footer className={styles.footer}>
                <div className={styles.container}>

                    {/* LEFT SECTION */}
                    <div className={styles.left}>
                        <div className={styles.headingBlock}>
                            <div className={styles.logoboxfooter}>
                                <img style={{ width: "100%" }} src={emblem} alt="Emblem" />
                            </div>

                            <div>
                                <h2 className={styles.title}>National Data Repository</h2>
                                <div className={styles.subtitle}>
                                    Directorate General of Hydrocarbons (DGH)
                                </div>
                                <p className={styles.ministry}>
                                    Ministry of Petroleum and Natural Gas, Government of India
                                </p>
                            </div>
                        </div>

                        <p className={styles.desc}>
                            NDR is a comprehensive, government-managed E&P data repository that
                            centralizes seismic, well, production, reservoir, and GIS information.
                            It enables investors, researchers, E&P companies, and academic
                            institutions to access authenticated, high-quality data for India’s
                            hydrocarbon exploration.
                        </p>
                    </div>

                    {/* MIDDLE SECTION */}
                    <div className={styles.middle}>

                        {/* USEFUL LINKS */}
                        <div>
                            <h3 className={styles.colTitle}>Useful links</h3>
                            <ul className={styles.linkList}>
                                <li><Link to="/aboutNDR">About NDR</Link></li>
                                <li><Link to="/data-access-policy">Data access policy</Link></li>
                                <li><Link to="/data-packages">Data packages</Link></li>
                                <li><Link to="/help-support">Help & support</Link></li>
                                <li><Link to="/user-manual">User manuals</Link></li>
                                <li><Link to="/faq">FAQ</Link></li>
                            </ul>

                            <div className={styles.social}>
                                <span>Social</span>
                                <div className={styles.icons}>
                                    <FaXTwitter className={styles.icon} />
                                    <FaFacebookF className={styles.icon} />
                                </div>
                            </div>
                        </div>

                        {/* LEGAL LINKS */}
                        <div>
                            <h3 className={styles.colTitle}>Legal</h3>
                            <ul className={styles.linkList}>
                                <li><Link to="/privacy-policy">Privacy policy</Link></li>
                                <li><Link to="/terms-of-use">Terms of use</Link></li>
                                <li><Link to="/disclaimer">Disclaimer</Link></li>
                                <li><Link to="/copyright">Copyright</Link></li>
                            </ul>
                        </div>
                    </div>

                    {/* RIGHT SECTION */}
                    <div className={styles.right}>
                        <h3 className={styles.colTitle}>Address:</h3>
                        <p className={styles.addr}>
                            Directorate General of Hydrocarbons (DGH)<br />
                            National Data Repository (NDR)<br />
                            OIDB Bhawan, Tower B, Plot No. 2<br />
                            Sector - 73, Noida, Uttar Pradesh – 201301<br />
                            Phone: +91-120-2472000<br />
                            Email: ndr@dgh.gov.in
                        </p>
                    </div>

                </div>

                {/* NEW GOVERNMENT INFO BLOCK */}
                {/* <div className={styles.extraInfo}>
                    <p>Content Owned by DGH and Powered by Halliburton</p>
                    <p>Next Gen NDR is hosted on Public Cloud</p>
                </div> */}

            </footer>

            {/* COPYRIGHT BAR */}
            <div className={styles.copyBar}>
                <div className="container">
                    <div className={styles.copy}>
                        © Directorate General of Hydrocarbons – Government of India
                    </div>
                </div>
            </div>
        </>
    );
}
