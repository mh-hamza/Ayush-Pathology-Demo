
import { createContext, useContext, useEffect, useState } from "react";
import { initializeApp } from "firebase/app";
import {
  getAuth,
  signInWithEmailAndPassword,
  onAuthStateChanged,
  signOut,
} from "firebase/auth";
import { toast } from "react-toastify";
import {
  limit,
  startAfter,
  addDoc,
  query,
  orderBy,
  collection,
  getFirestore,
  getDocs,
  doc,
  deleteDoc,
  getDoc,
  where,
} from "firebase/firestore";

const FirebaseContext = createContext(null);



const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: import.meta.env.VITE_FIREBASE_AUTH_DOMAIN,
  projectId: import.meta.env.VITE_FIREBASE_PROJECT_ID,
  storageBucket: import.meta.env.VITE_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: import.meta.env.VITE_FIREBASE_MESSAGING_SENDER_ID,
  appId: import.meta.env.VITE_FIREBASE_APP_ID
};
export const useFirebase = () => useContext(FirebaseContext);

const firebaseApp = initializeApp(firebaseConfig);
const firebaseAuth = getAuth(firebaseApp);
const firestore = getFirestore(firebaseApp);

export const FirebaseProvider = (props) => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    onAuthStateChanged(firebaseAuth, async (user) => {
      if (user) {
        setUser(user);
      } else {
        setUser(null);
      }
    });
  }, []);

  const isLoggedIn = user !== null;

  const loginUser = async (email, password) => {
    try {
      await signInWithEmailAndPassword(firebaseAuth, email, password);
      toast.success("Login successful!");
    } catch (error) {
      toast.error("Login failed: " + error.message);
    }
  };

  const logoutUser = async () => {
    try {
      await signOut(firebaseAuth);
      toast.success("Logout successful!");
    } catch (error) {
      toast.error("Logout failed: " + error.message);
    }
  };

  // ========================= ALL ABOUT LFT ===================================
  const createLFT = async (
    name,
    age,
    drReff,
    date,
    gender,
    serumTotalBilirubin,
    serumDirectBilirubin,
    serumIndirectBilirubin,
    serumAlkalinePhosphatase,
    sGot,
    sGPT,
    serumProtein
  ) => {
    try {
      const docRef = await addDoc(collection(firestore, "LFT_Reports"), {
        name: name,
        age: age,
        drReff: drReff,
        date: date,
        gender: gender,
        serumTotalBilirubin: serumTotalBilirubin,
        serumDirectBilirubin: serumDirectBilirubin,
        serumIndirectBilirubin: serumIndirectBilirubin,
        serumAlkalinePhosphatase: serumAlkalinePhosphatase,
        sGot: sGot,
        sGPT: sGPT,
        serumProtein: serumProtein,
        createdAt: new Date(), // Store the creation timestamp
      });

      toast.success("Report created successfully!");
    } catch (error) {
      toast.error("Failed to create report: " + error.message);
      console.error("Error creating report:", error);
    }
  };
  const listAllLFT = async () => {
    try {
      const querySnapshot = await getDocs(
        query(
          collection(firestore, "LFT_Reports"),
          orderBy("createdAt", "desc")
        )
      );
      const allReports = querySnapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));
      return allReports; // Return the reports array
    } catch (error) {
      console.error("Error fetching reports:", error);
      return []; // Return an empty array in case of error
    }
  };
  const deleteReport = async (reportId) => {
    try {
      const reportRef = doc(firestore, "LFT_Reports", reportId);
      await deleteDoc(reportRef);
      toast.success("Report deleted successfully!");
    } catch (error) {
      toast.error("Failed to delete report: " + error.message);
      console.error(error);
    }
  };
  const getReport = async (reportId) => {
    try {
      const reportRef = doc(firestore, "LFT_Reports", reportId);
      const reportSnapshot = await getDoc(reportRef);
      if (reportSnapshot.exists) {
        return reportSnapshot.data();
      } else {
        console.warn("Report not found:", reportId);
        return null;
      }
    } catch (error) {
      console.error("Error fetching report:", error);
      return null;
    }
  };

  // ========================== ALL ABOUT CBC ======================================
  const createCBC = async (
    name,
    age,
    drReff,
    date,
    gender,
    hemoglobin,
    wbc,
    rbc,
    hct,
    mcv,
    mch,
    mchc,
    neutrophils,
    lymphocytes,
    eosinophils,
    monocytes,
    basophils,
    platelets
  ) => {
    try {
      const docRef = await addDoc(collection(firestore, "CBCReports"), {
        name: name,
        age: age,
        drReff: drReff,
        date: date,
        gender: gender,
        hemoglobin: hemoglobin,
        wbc: wbc,
        rbc: rbc,
        hct: hct,
        mcv: mcv,
        mch: mch,
        mchc: mchc,
        neutrophils: neutrophils,
        lymphocytes: lymphocytes,
        eosinophils: eosinophils,
        monocytes: monocytes,
        basophils: basophils,
        platelets: platelets,
        createdAt: new Date(), // Store the creation timestamp
      });

      toast.success("Report created successfully!");
    } catch (error) {
      toast.error("Failed to create report: " + error.message);
      console.error("Error creating report:", error);
    }
  };
  const listAllCBCS = async () => {
    try {
      const querySnapshot = await getDocs(
        query(collection(firestore, "CBCReports"), orderBy("createdAt", "desc"))
      );
      const allReports = querySnapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));
      return allReports; // Return the reports array
    } catch (error) {
      console.error("Error fetching reports:", +error);
      return []; // Return an empty array in case of error
    }
  };
  const deleteReportCBC = async (reportId) => {
    try {
      const reportRef = doc(firestore, "CBCReports", reportId);
      await deleteDoc(reportRef);
      toast.success("Report deleted successfully!");
    } catch (error) {
      toast.error("Failed to delete report: " + error.message);
      console.error(error);
    }
  };
  const viewReportCBC = async (reportId) => {
    try {
      const reportRef = doc(firestore, "CBCReports", reportId);
      const reportSnapshot = await getDoc(reportRef);
      if (reportSnapshot.exists) {
        return reportSnapshot.data();
      } else {
        console.warn("Report not found:", reportId);
        return null;
      }
    } catch (error) {
      console.error("Error fetching report:", error);
      return null;
    }
  };
  // ========================= ALL ABOUT URINE TEST ===============================
  const createUrineTest = async (
    name,
    age,
    drReff,
    date,
    gender,
    colour,
    reaction,
    specificGravity,
    turbidity,
    deposits,
    sugar,
    albumin,
    urobilinogen,
    bileSalts,
    bilePigment,
    ketoneBodies,
    chyle,
    pusCell,
    rbc
  ) => {
    try {
      const docRef = await addDoc(collection(firestore, "urineReports"), {
        name: name,
        age: age,
        drReff: drReff,
        date: date,
        gender: gender,
        colour: colour,
        reaction: reaction,
        specificGravity: specificGravity,
        turbidity: turbidity,
        deposits: deposits,
        sugar: sugar,
        albumin: albumin,
        urobilinogen: urobilinogen,
        bileSalts: bileSalts,
        bilePigment: bilePigment,
        ketoneBodies: ketoneBodies,
        chyle: chyle,
        pusCell: pusCell,
        rbc: rbc,
        createdAt: new Date(), // Store the creation timestamp
      });

      toast.success("Report created successfully!");
    } catch (error) {
      toast.error("Failed to create report: " + error.message);
      console.error("Error creating report:", error);
    }
  };
  const listAllUineReports = async () => {
    try {
      const querySnapshot = await getDocs(
        query(
          collection(firestore, "urineReports"),
          orderBy("createdAt", "desc")
        )
      );
      const allReports = querySnapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));
      return allReports; // Return the reports array
    } catch (error) {
      console.error("Error fetching reports:", +error);
      return []; // Return an empty array in case of error
    }
  };
  const deleteUrineReport = async (reportId) => {
    try {
      const reportRef = doc(firestore, "urineReports", reportId);
      await deleteDoc(reportRef);
      toast.success("Report deleted successfully!");
    } catch (error) {
      toast.error("Failed to delete report: " + error.message);
      console.error(error);
    }
  };
  const viewUrineReport = async (reportId) => {
    try {
      const reportRef = doc(firestore, "urineReports", reportId);
      const reportSnapshot = await getDoc(reportRef);
      if (reportSnapshot.exists) {
        return reportSnapshot.data();
      } else {
        console.warn("Report not found:", reportId);
        return null;
      }
    } catch (error) {
      console.error("Error fetching report:", error);
      return null;
    }
  };
  // ========================= ALL ABOUT LAB TESTS ===============================
  const createRFTReport = async (
    name,
    age,
    drReff,
    date,
    gender,
    serumUrea,
    serumCreatinine,
    serumSodium,
    serumPotassium,
    serumProtein,
    serumUricAcid
  ) => {
    try {
      const docRef = await addDoc(collection(firestore, "RFT_Reports"), {
        name: name,
        age: age,
        drReff: drReff,
        date: date,
        gender: gender,
        serumUrea: serumUrea,
        serumCreatinine: serumCreatinine,
        serumSodium: serumSodium,
        serumPotassium: serumPotassium,
        serumProtein: serumProtein,
        serumUricAcid: serumUricAcid,
        createdAt: new Date(), // Store the creation timestamp
      });

      toast.success("Report created successfully!");
    } catch (error) {
      toast.error("Failed to create report: " + error.message);
      console.error("Error creating report:", error);
    }
  };
  const listAllRFTReport = async () => {
    try {
      const querySnapshot = await getDocs(
        query(
          collection(firestore, "RFT_Reports"),
          orderBy("createdAt", "desc")
        )
      );
      const allReports = querySnapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));
      return allReports; // Return the reports array
    } catch (error) {
      console.error("Error fetching reports:", +error);
      return []; // Return an empty array in case of error
    }
  };
  const deleteRFTReport = async (reportId) => {
    try {
      const reportRef = doc(firestore, "RFT_Reports", reportId);
      await deleteDoc(reportRef);
      toast.success("Report deleted successfully!");
    } catch (error) {
      toast.error("Failed to delete report: " + error.message);
      console.error(error);
    }
  };
  const viewRFTReport = async (reportId) => {
    try {
      const reportRef = doc(firestore, "RFT_Reports", reportId);
      const reportSnapshot = await getDoc(reportRef);
      if (reportSnapshot.exists) {
        return reportSnapshot.data();
      } else {
        console.warn("Report not found:", reportId);
        return null;
      }
    } catch (error) {
      console.error("Error fetching report:", error);
      return null;
    }
  };
  // ========================== ALL ABOUT PREGNANCY REPORT =========================
  const createPregReport = async (
    name,
    age,
    drReff,
    date,
    gender,
    hemoglobin,
    hbsag,
    hiv,
    aborh
  ) => {
    try {
      const docRef = await addDoc(collection(firestore, "Pregnancy_Report"), {
        name: name,
        age: age,
        drReff: drReff,
        date: date,
        gender: gender,
        hemoglobin: hemoglobin,
        hbsag: hbsag,
        hiv: hiv,
        aborh: aborh,
        createdAt: new Date(), // Store the creation timestamp
      });

      toast.success("Report created successfully!");
    } catch (error) {
      toast.error("Failed to create report: " + error.message);
      console.error("Error creating report:", error);
    }
  };
  const listAllPregReport = async () => {
    try {
      const querySnapshot = await getDocs(
        query(
          collection(firestore, "Pregnancy_Report"),
          orderBy("createdAt", "desc")
        )
      );
      const allReports = querySnapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));
      return allReports; // Return the reports array
    } catch (error) {
      console.error("Error fetching reports:", +error);
      return []; // Return an empty array in case of error
    }
  };
  const deletePregReport = async (reportId) => {
    try {
      const reportRef = doc(firestore, "Pregnancy_Report", reportId);
      await deleteDoc(reportRef);
      toast.success("Report deleted successfully!");
    } catch (error) {
      toast.error("Failed to delete report: " + error.message);
      console.error(error);
    }
  };
  const viewPregReport = async (reportId) => {
    try {
      const reportRef = doc(firestore, "Pregnancy_Report", reportId);
      const reportSnapshot = await getDoc(reportRef);
      if (reportSnapshot.exists) {
        return reportSnapshot.data();
      } else {
        console.warn("Report not found:", reportId);
        return null;
      }
    } catch (error) {
      console.error("Error fetching report:", error);
      return null;
    }
  };
  //============================ ALL ABOUT WIDAL ===================================
    const createWidalReport = async (
      name,
      age,
      drReff,
      date,
      gender,
      malariya,
      widalTest,
      one,
      two,
      three,
      four,
      five,
      six,
      seven,
      eight,
      nine,
      ten,
      eleven,
      twelve,
      thirteen,
      fourteen,
      fifteen,
      sixteen,
      seventeen,
      eighteen,
      nineteen,
      twenty,
      twentyOne,
      twentyTwo,
      twentyThree,
      twentyFour,
     
    ) => {
      try {
        const docRef = await addDoc(collection(firestore, "Widal_Report"), {
          name: name,
          age: age,
          drReff: drReff,
          date: date,
          gender: gender,
          malariya: malariya,
          widalTest: widalTest,
          one: one,
          two: two,
          three: three,
          four: four,
          five: five,
          six: six,
          seven: seven,
          eight: eight,
          nine: nine,
          ten: ten,
          eleven: eleven,
          twelve: twelve,
          thirteen: thirteen,
          fourteen: fourteen,
          fifteen: fifteen,
          sixteen: sixteen,
          seventeen: seventeen,
          eighteen: eighteen,
          nineteen: nineteen,
          twenty: twenty,
          twentyOne: twentyOne,
          twentyTwo: twentyTwo,
          twentyThree: twentyThree,
          twentyFour: twentyFour,
          createdAt: new Date(), // Store the creation timestamp
        });
  
        toast.success("Report created successfully!");
      } catch (error) {
        toast.error("Failed to create report: " + error.message);
        console.error("Error creating report:", error);
      }
    };
    const listAllWidalReport = async () => {
      try {
        const querySnapshot = await getDocs(
          query(
            collection(firestore, "Widal_Report"),
            orderBy("createdAt", "desc")
          )
        );
        const allReports = querySnapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }));
        return allReports; // Return the reports array
      } catch (error) {
        console.error("Error fetching reports:", +error);
        return []; // Return an empty array in case of error
      }
    };
    const deleteWidalReport = async (reportId) => {
      try {
        const reportRef = doc(firestore, "Widal_Report", reportId);
        await deleteDoc(reportRef);
        toast.success("Report deleted successfully!");
      } catch (error) {
        toast.error("Failed to delete report: " + error.message);
        console.error(error);
      }
    };
    const viewWidalReport = async (reportId) => {
      try {
        const reportRef = doc(firestore, "Widal_Report", reportId);
        const reportSnapshot = await getDoc(reportRef);
        if (reportSnapshot.exists) {
          return reportSnapshot.data();
        } else {
          console.warn("Report not found:", reportId);
          return null;
        }
      } catch (error) {
        console.error("Error fetching report:", error);
        return null;
      }
    };
  // ============================ BOOK APPOINTMENT ==================================
  const bookAppointmentHandler = async (
    fullName,
    selectedDate,
    time,
    selectedTest,
    phoneNumber
  ) => {
    try {
      const docRef = await addDoc(collection(firestore, "Appointments"), {
        name: fullName,
        date: selectedDate,
        time: selectedTest,
        test: time,
        phoneNumber: phoneNumber,
        createdAt: new Date(), // Store the creation timestamp
      });

      toast.success("Appointment booked successfully!");
    } catch (error) {
      toast.error("Failed to book appointment: " + error.message);
      console.error("Error booking appointment:", error);
    }
  };
  const listAllAppointmentsHandler = async () => {
    try {
      const querySnapshot = await getDocs(
        query(
          collection(firestore, "Appointments"),
          orderBy("createdAt", "desc")
        )
      );
      const allReports = querySnapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));
      return allReports; // Return the reports array
    } catch (error) {
      console.error("Error fetching reports:", +error);
      return []; // Return an empty array in case of error
    }
  };
  const deleteAppointmentHandler = async (reportId) => {
    try {
      const reportRef = doc(firestore, "Appointments", reportId);
      await deleteDoc(reportRef);
      toast.success("Report deleted successfully!");
    } catch (error) {
      toast.error("Failed to delete report: " + error.message);
      console.error(error);
    }
  };

  return (
    <FirebaseContext.Provider
      value={{
        loginUser,
        isLoggedIn,
        logoutUser,
        user,
        //LFT
        createLFT,
        listAllLFT,
        deleteReport,
        getReport,
        // CBC
        createCBC,
        listAllCBCS,
        deleteReportCBC,
        viewReportCBC,
        //URINE TEST
        createUrineTest,
        listAllUineReports,
        deleteUrineReport,
        viewUrineReport,
        // RFT
        createRFTReport,
        listAllRFTReport,
        deleteRFTReport,
        viewRFTReport,
        // PREGNANCY
        createPregReport,
        listAllPregReport,
        deletePregReport,
        viewPregReport,
        // WIDAL
        createWidalReport,
        listAllWidalReport,
        deleteWidalReport,
        viewWidalReport,
        // BOOK APPOINTMENT
        bookAppointmentHandler,
        listAllAppointmentsHandler,
        deleteAppointmentHandler,
      }}
    >
      {props.children}
    </FirebaseContext.Provider>
  );
};
