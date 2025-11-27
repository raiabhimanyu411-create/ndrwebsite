import React from "react";
import styles from "./Styles/Footer.module.css";
import emblem from "../assets/Images/emblem1.png"
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
                            NDR is a comprehensive, government-managed E&P data repository that centralizes seismic,
                            well, production, reservoir, and GIS information. It enables investors, researchers, E&P
                            companies, and academic institutions to access authenticated, high-quality data for India’s
                            hydrocarbon exploration.
                        </p>
                    </div>

                    {/* MIDDLE */}
                    <div className={styles.middle}>

                        <div>
                            <h3 className={styles.colTitle}>Useful links</h3>
                            <ul>
                                <li>About NDR</li>
                                <li>Data access policy</li>
                                <li>Data packages</li>
                                <li>Help & support</li>
                                <li>User manuals</li>
                                <li>FAQ</li>
                            </ul>




                             <div className={styles.social}>
                            <span>Social</span>
                            <div className={styles.icons}>
                                <FaXTwitter className={styles.icon} />
                                <FaFacebookF className={styles.icon} />
                            </div>
                        </div>
                        </div>

                        <div>
                            <h3 className={styles.colTitle}>Legal</h3>
                            <ul>
                                <li>Privacy policy</li>
                                <li>Terms of use</li>
                                <li>Disclaimer</li>
                                <li>Copyright</li>
                            </ul>
                        </div>







                    </div>

                    {/* RIGHT */}
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

                        {/* <div className={styles.social}>
                            <span>Social</span>
                            <div className={styles.icons}>
                                <FaXTwitter className={styles.icon} />
                                <FaFacebookF className={styles.icon} />
                            </div>
                        </div> */}
                    </div>

                </div>





            </footer>

            <div style={{background : "rgba(2 , 31 , 79 , 1"}}>

                <div className="container">
                    <div className={styles.copy}>
                        © Directorate General of Hydrocarbons – Government of India
                    </div>
                </div>

            </div>



        </>



    );
}
