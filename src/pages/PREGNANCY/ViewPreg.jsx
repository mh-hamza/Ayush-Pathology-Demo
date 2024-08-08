import React from "react";
import headerImg from "../../assets/header.jpg";
import footerImg from "../../assets/bottom.jpg";
import { useLocation, useParams } from "react-router-dom";
import styles from "./ViewPreg.module.css";

function ViewPreg() {
  const { pregId } = useParams();
  const location = useLocation();
  const reportData = location.state;

  const handlePrint = () => {
    window.print();
  };

  return (
    <>
      <>
        <div className={styles.container_a}>
          <div className={styles.top}>
            <img src={headerImg} alt="image" />
          </div>
          <div className={styles.form}>
            <div className={styles.row}>
              <p>Pt. {reportData.name}</p>
              <p>
                Age :{reportData.age}YRS/{reportData.gender}
              </p>
            </div>
            <div className={styles.row}>
              <p>Dr. Reff : DR {reportData.drReff}</p>
              <p>Date : {reportData.date}</p>
            </div>
            <hr />
            <h4 className={styles.pathology_report_heading}>
              PATHALOGY REPORT
            </h4>
            <div>
              <div className={styles.report_container}>
                <div className={styles.first_column}>
                  <p>Hemoglobin</p>
                  <p>HBsAg</p>
                  <p>HIV</p>
                  <p>ABO RH</p>
                </div>
                <div className={styles.second_column}>
                  <p>{reportData.hemoglobin}</p>
                  <p>{reportData.hbsag}</p>
                  <p>{reportData.hiv}</p>
                  <p>{reportData.aborh}</p>
                </div>
                <div className={styles.third_column}>
                  <p>(11-16 per 100ml)</p>
                  
                </div>
              </div>
            </div> 
          </div>
          <div className={styles.bottom}>
            <img src={footerImg} alt="bottom" />
          </div>
          <button className={styles.print} onClick={handlePrint}>
            Print
          </button>
        </div>
      </>
    </>
  );
}

export default ViewPreg;
 