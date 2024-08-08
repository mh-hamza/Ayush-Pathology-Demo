import React from "react";
import headerImg from "../../assets/header.jpg"
import footerImg from "../../assets/bottom.jpg";
import { useLocation, useParams } from "react-router-dom";
import styles from "./ViewCBC.module.css"; 

function ViewCBC() {
  const { cbcId } = useParams();
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
            <h4 className={styles.pathology_report_heading}>HAEMOGRAM</h4>
            <div className={styles.report_container}>
              <div className={styles.first_column}>
                <span>Parameter</span>
                <p>Hemoglobin</p>
                <p>WBC</p>
                <p>RBC</p>
                <p>HCT</p>
                <p>MCV</p>
                <p>MCH</p>
                <p>MCHC</p>
              </div>
              <div className={styles.second_column}>
                <span>Result</span>
                <p
                  className={
                    reportData.hemoglobin < 12 ||
                    reportData.hemoglobin > 16
                      ? "font-bold"
                      : ""
                  }
                >
                  {reportData.hemoglobin}
                </p>
                <p
                  className={
                    reportData.wbc < 4000 ||
                    reportData.wbc > 11000
                      ? "font-bold"
                      : ""
                  }
                >
                  {reportData.wbc}
                </p>

                <p
                  className={
                    reportData.rbc < 4 ||
                    reportData.rbc > 5.5
                      ? "font-bold"
                      : ""
                  }
                >
                  {reportData.rbc}
                </p>

                <p
                  className={
                    reportData.hct < 40||
                    reportData.hct > 54
                      ? "font-bold"
                      : ""
                  }
                >
                  {reportData.hct}
                </p>

                <p
                  className={
                    reportData.mcv < 80 || reportData.mcv > 100
                      ? "font-bold"
                      : ""
                  }
                >
                  {reportData.mcv}
                </p>

                <p
                  className={
                    reportData.mch < 27 || reportData.mch > 34
                      ? "font-bold"
                      : ""
                  }
                >
                  {reportData.mch}
                </p>

                <p
                  className={
                    reportData.mchc < 32 ||
                    reportData.mchc > 36
                      ? "font-bold"
                      : ""
                  }
                >
                  {reportData.mchc}
                </p>
              </div>
              <div className={styles.third_column}>
                <span>Unit</span>
                <p>g/dl</p>
                <p>10<sup>3</sup>/ul</p>
                <p>10<sup>4</sup>/ul</p>
                <p>%</p>
                <p>fl</p>
                <p>pg</p>
                <p>g/dl</p>
              </div>
              <div className={styles.fourth_column}>
                <span>Range</span>
                <p>(12-16)</p>
                <p>(4000-11000)</p>
                <p>(4.0-5.5)</p>
                <p>(40-54)</p>
                <p>(80-100)</p>
                <p>(27-34)</p>
                <p>(32-36)</p>
              </div>
            </div>

            <h4 className={styles.pathology_report_heading}>Differential Leucocytes Count.</h4>

            <div className={styles.report_container_2}>
              <div className={styles.first_column}>
                <p>Neutrophils</p>
                <p>Lymphocytes</p>
                <p>Ecosinophils</p>
                <p>Monocytes</p>
                <p>Basophils</p>
                <p>Platelets</p>
              </div>
              <div className={styles.second_column}>
                <p
                  className={
                    reportData.neutrophils < 50 ||
                    reportData.neutrophils > 70
                      ? "font-bold"
                      : ""
                  }
                >
                  {reportData.neutrophils} 
                </p>
                <p
                  className={
                    reportData.lymphocytes < 20 ||
                    reportData.lymphocytes > 40
                      ? "font-bold"
                      : ""
                  }
                >
                  {reportData.lymphocytes}
                </p>

                <p
                  className={
                    reportData.eosinophils < 0 ||
                    reportData.eosinophils > 6
                      ? "font-bold"
                      : ""
                  }
                >
                  {reportData.eosinophils}
                </p>

                <p
                  className={
                    reportData.monocytes < 1||
                    reportData.monocytes > 3
                      ? "font-bold"
                      : ""
                  }
                >
                  {reportData.monocytes}
                </p>

                <p
                  className={
                    reportData.basophils < 0 || reportData.basophils > 1
                      ? "font-bold"
                      : ""
                  }
                >
                  {reportData.basophils}
                </p>

                <p
                  className={
                    reportData.platelets < 150000 || reportData.platelets > 450000
                      ? "font-bold"
                      : ""
                  }
                >
                  {reportData.platelets}
                </p>

                
              </div>
              <div className={styles.third_column}>
                <p>g/dl</p>
                <p>10<sup>3</sup>/ul</p>
                <p>10<sup>4</sup>/ul</p>
                <p>%</p>
                <p>fl</p>
                <p>pg</p>
                
              </div>
              <div className={styles.fourth_column}>
                <p>(12-16)</p>
                <p>(4000-11000)</p>
                <p>(4.0-5.5)</p>
                <p>(40-54)</p>
                <p>(80-100)</p>
                <p>(27-34)</p>
              
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

export default ViewCBC;
