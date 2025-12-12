import React from "react";
import Header from "../Component/Header";
import Footer from "../Component/Footer";
import styles from "../Component/Styles/DownloadDataPriceListPolicies.module.css";

const DownloadDataPriceListPolicies = () => {
  return (
    <>
      <Header />

      <div className="container">

        <div className={styles.pageWrapper}>
        <h1 className={styles.title}>Policy Documents and Guidelines</h1>

        <ul className={styles.list}>

          <li>
            Please refer to the data pricing list for the data available for sale through NDR portal 
            <a href="#" className={styles.link}> NDR Data Sharing Rates (490 KB)</a>
          </li>

          <li>
            Please refer to the refund and cancellation policy for the data ordered through NDR portal  
            <a href="#" className={styles.link}> Refund & Cancellation Policy (62 KB)</a>
          </li>

          <li>
            E&P Data policy is for E&P data assimilation, disclosure, sharing, accessibility and dissemination through NATIONAL DATA REPOSITORY (NDR)  
            <a href="#" className={styles.link}> E&P Data Policy (525 KB)</a>
          </li>

          <li>
            Confidentiality agreement is required to be filled out, signed and a soft copy is to be sent to indr[at]dghindia[dot]gov[dot]in for data purchase only  
            <a href="#" className={styles.link}> Download Confidentiality Agreement (632 KB)</a>
          </li>

          <li>
            Indian Cyber Crime Coordination Centre (I4C) has prepared a manual for Cyber Hygiene Best Practices.  
            Go through attached handbooks:  
            <a href="#" className={styles.link}> Cyber-Security Handbook – ENGLISH (10928 KB)</a>  
            &  
            <a href="#" className={styles.link}> Cyber-Security Handbook – HINDI (13015 KB)</a>
          </li>

          <li>
            Latest Revised Guidelines for submission of E&P data of Nomination Fields by National Oil Companies (NOCs):  
            <a href="#" className={styles.link}> Revised Data Submission Guidelines (1189 KB)</a>
          </li>

          <li>
            Old Guidelines for submission of E&P data of Nomination Fields by National Oil Companies (NOCs):  
            <a href="#" className={styles.link}> Old Data Submission Guidelines (2019 KB)</a>
          </li>

          <li>
            Microsoft Silverlight tool is required for India Online Exploration GIS map, download it from  
            <a href="#" className={styles.link}> Silverlight Download (12858 KB)</a>
          </li>

        </ul>
      </div>

      </div>

      

      <Footer />
    </>
  );
};

export default DownloadDataPriceListPolicies;
