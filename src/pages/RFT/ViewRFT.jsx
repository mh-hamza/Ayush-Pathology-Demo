import React from "react";
import headerImg from "../../assets/header.jpg";
import footerImg from "../../assets/bottom.jpg";
import { useLocation, useParams } from "react-router-dom";
import styles from "./ViewRFT.module.css";

function ViewRFT() {
  const { rftId } = useParams();
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
              RENAL FANCTION TEST
            </h4>
            <div className={styles.report_container}>
              <div className={styles.first_column}>
                <span>Test</span>
                <p>Serum Urea</p>
                <p>Serum Creatinine</p>
                <p>Serum Sodium</p>
                <p>Serum Potassium</p>
                <p>Serum Protein</p>
                <p>Serum Uric Acid</p>
              </div>
              <div className={styles.second_column}>
                <span>Result</span>
                <p
                  className={
                    reportData.serumUrea < 13 || reportData.serumUrea > 44
                      ? "font-bold"
                      : ""
                  }
                >
                  {reportData.serumUrea}
                </p>
                <p
                  className={
                    reportData.serumCreatinine < 0.6 ||
                    reportData.serumCreatinine > 1.4
                      ? "font-bold"
                      : ""
                  }
                >
                  {reportData.serumCreatinine}
                </p>

                <p
                  className={
                    reportData.serumSodium < 135 || reportData.serumSodium > 145
                      ? "font-bold"
                      : ""
                  }
                >
                  {reportData.serumSodium}
                </p>

                <p
                  className={
                    reportData.serumPotassium < 3.5 ||
                    reportData.serumPotassium > 5.0
                      ? "font-bold"
                      : ""
                  }
                >
                  {reportData.serumPotassium}
                </p>

                <p
                  className={
                    reportData.serumProtein < 6.0 ||
                    reportData.serumProtein > 8.0
                      ? "font-bold"
                      : ""
                  }
                >
                  {reportData.serumProtein}
                </p>

                <p
                  className={
                    reportData.serumUricAcid < 3.5 ||
                    reportData.serumUricAcid > 7.2
                      ? "font-bold"
                      : ""
                  }
                >
                  {reportData.serumUricAcid}
                </p>
              </div>
              <div className={styles.third_column}>
                <span>Unit</span>
                <p>mg/dl</p>
                <p>mg/dl</p>
                <p>m.Eq/lt</p>
                <p>m.Eq/lt</p>
                <p>g/dl</p>
                <p>mg/dl</p>
              </div>
              <div className={styles.fourth_column}>
                <span>Range</span>
                <p>(13-44)</p>
                <p>(0.6-1.4)</p>
                <p>(135-145)</p>
                <p>(3.5-5.0)</p>
                <p>(6.0-8.0)</p>
                <p>(3.5-7.2)</p>
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

export default ViewRFT;
