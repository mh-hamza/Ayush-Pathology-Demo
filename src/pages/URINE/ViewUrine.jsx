import React from "react";
import headerImg from "../../assets/header.jpg";
import footerImg from "../../assets/bottom.jpg";
import { useLocation, useParams } from "react-router-dom";
import styles from "./ViewUrine.module.css";

function ViewUrine() {
  const { urineId } = useParams();

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
              URINE EXAMINATION
            </h4>
            <div>
              <h4 className={styles.examination_name}>Physical Examination</h4>
              <div className={styles.report_container}>
                <div className={styles.first_column}>
                  <p>Colour</p>
                  <p>Reaction</p>
                  <p>Specific gravity</p>
                  <p>Turbidity</p>
                  <p>Deposits</p>
                </div>
                <div className={styles.second_column}>
                  <p>:</p>
                  <p>:</p>
                  <p>:</p>
                  <p>:</p>
                  <p>:</p>
                </div>
                <div className={styles.third_column}>
                  <p>{reportData.colour}</p>
                  <p>{reportData.reaction}</p>
                  <p>{reportData.specificGravity}</p>
                  <p>{reportData.turbidity}</p>
                  <p>{reportData.deposits}</p>
                </div>
              </div>
            </div>
            <div>
              <h4 className={styles.examination_name}>Chemical Examination</h4>
              <div className={styles.report_container}>
                <div className={styles.first_column}>
                  <p>Sugar</p>
                  <p>Albumin</p>
                  <p>Urobilinogen</p>
                  <p>Bile Salts</p>
                  <p>Bile Pigment</p>
                  <p>Ketone Bodies</p>
                  <p>Chyle</p>
                </div>
                <div className={styles.second_column}>
                  <p>:</p>
                  <p>:</p>
                  <p>:</p>
                  <p>:</p>
                  <p>:</p>
                  <p>:</p>
                  <p>:</p>
                </div>
                <div className={styles.third_column}>
                  <p>{reportData.sugar}&nbsp;&nbsp;&nbsp;&nbsp;</p>
                  <p>{reportData.albumin}</p>
                  <p>{reportData.urobilinogen}</p>
                  <p>{reportData.bileSalts}</p>
                  <p>{reportData.bilePigment}</p>
                  <p>{reportData.ketoneBodies}</p>
                  <p>{reportData.chyle}</p>
                </div>
              </div>
            </div>
            <div>
              <h4 className={styles.examination_name}>Microscopic Examination</h4>
              <div className={styles.report_container}>
                <div className={styles.first_column}>
                  <p>Sugar</p>
                  <p>Albumin</p>
                </div>
                <div className={styles.second_column}>
                  <p>:</p>
                  <p>:</p>
                </div>
                <div className={styles.third_column}>
                  <p>{reportData.pusCell}</p>
                  <p>{reportData.rbc}</p>
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

export default ViewUrine;
