import React from "react";
import headerImg from "../../assets/header.jpg";
import footerImg from "../../assets/bottom.jpg";
import { useLocation, useParams } from "react-router-dom";
import styles from "./ViewWidal.module.css";

function ViewWidal() {
  const { reportId } = useParams();

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
              PATHOLOGY REPORT
            </h4>
            <div>
              <div className={styles.report_container}>
                <div className={styles.first_column}>
                  <p>Malaria Parasite (Antigen Cord)</p>
                </div>
                <div className={styles.third_column}>
                  <p>{reportData.malariya}</p>
                </div>
              </div>
            </div>
            <div>
              <div className={styles.report_container}>
                <div className={styles.first_column}>
                  <p className=" font-semibold underline">WIDAL TEST {reportData.widalTest}</p>
                </div>
              </div>
            </div>
            <div>
              <div className={styles.report_container}>
                <table className="border-collapse border border-slate-500 text-center">
                  <tbody>
                    <tr>
                      <td className="border border-slate-500 px-4"></td>
                      <td className="border border-slate-500 px-4">1:20</td>
                      <td className="border border-slate-500 px-4">1:40</td>
                      <td className="border border-slate-500 px-4">1:80</td>
                      <td className="border border-slate-500 px-4">1:160</td>
                      <td className="border border-slate-500 px-4">1:320</td>
                      <td className="border border-slate-500 px-4">1:640</td>
                    </tr>
                    <tr>
                      <td className="border border-slate-500 px-8">
                        S. Typhi "O"
                      </td>
                      <td className="border border-slate-500 ">
                        {reportData.one}
                      </td>
                      <td className="border border-slate-500 ">
                        {reportData.two}
                      </td>
                      <td className="border border-slate-500 ">
                        {reportData.three}
                      </td>
                      <td className="border border-slate-500">
                        {reportData.four}
                      </td>
                      <td className="border border-slate-500 ">
                        {reportData.five}
                      </td>
                      <td className="border border-slate-500 ">
                        {reportData.six}
                      </td>
                    </tr>
                    <tr>
                      <td className="border border-slate-500 p-1">
                        S. Typhi "H"
                      </td>
                      <td className="border border-slate-500 ">
                        {reportData.seven}
                      </td>
                      <td className="border border-slate-500 ">
                        {reportData.eight}
                      </td>
                      <td className="border border-slate-500 ">
                        {reportData.nine}
                      </td>
                      <td className="border border-slate-500">
                        {reportData.ten}
                      </td>
                      <td className="border border-slate-500 ">
                        {reportData.eleven}
                      </td>
                      <td className="border border-slate-500 ">
                        {reportData.twelve}
                      </td>
                    </tr>
                    <tr>
                      <td className="border border-slate-500 p-1">
                        S. Typhi "AH"
                      </td>
                      <td className="border border-slate-500 ">
                        {reportData.thirteen}
                      </td>
                      <td className="border border-slate-500 ">
                        {reportData.fourteen}
                      </td>
                      <td className="border border-slate-500 ">
                        {reportData.fifteen}
                      </td>
                      <td className="border border-slate-500">
                        {reportData.sixteen}
                      </td>
                      <td className="border border-slate-500 ">
                        {reportData.seventeen}
                      </td>
                      <td className="border border-slate-500 ">
                        {reportData.eighteen}
                      </td>
                    </tr>
                    <tr>
                      <td className="border border-slate-500 p-1">
                        S. Typhi "BH"
                      </td>
                      <td className="border border-slate-500 ">
                        {reportData.nineteen}
                      </td>
                      <td className="border border-slate-500 ">
                        {reportData.twenty}
                      </td>
                      <td className="border border-slate-500 ">
                        {reportData.twentyOne}
                      </td>
                      <td className="border border-slate-500">
                        {reportData.twentyTwo}
                      </td>
                      <td className="border border-slate-500 ">
                        {reportData.twentyThree}
                      </td>
                      <td className="border border-slate-500 ">
                        {reportData.twentyFour}
                      </td>
                    </tr>
                  </tbody>
                </table>
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

export default ViewWidal;
