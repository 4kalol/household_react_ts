import React, { useEffect, useState } from "react";
import "./App.css";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Report from "./pages/Report";
import NoMatch from "./pages/NoMatch";
import AppLayout from "./components/layout/AppLayout";
import { theme } from "./theme/theme";
import { ThemeProvider } from "@emotion/react";
import { CssBaseline } from "@mui/material";
import { Transaction } from "./types/index";
import { collection, getDocs } from "firebase/firestore";
import { db } from "./firebase";

function App() {
  function isFireStoreError(
    error: unknown
  ): error is { code: string; message: string } {
    // fireStoreのエラーかどうか判定する,fireStoreエラーならcodeが含まれている.
    return typeof error === "object" && error !== null && "code" in error;
  }
  const [transactions, setTransactions] = useState<Transaction[]>([]);
  useEffect(() => {
    const fetchTransactons = async () => {
      try {
        const querySnapshot = await getDocs(collection(db, "Transactions"));
        const transactionsData = querySnapshot.docs.map((doc) => {
          return {
            ...doc.data(),
            id: doc.id,
          } as Transaction;
        });

        setTransactions(transactionsData);
      } catch (error) {
        // error handling
        if (isFireStoreError(error)) {
          console.error(error);
          console.error(error.message);
          console.error(error.code);
        } else {
          console.error("予期せぬエラーが発生しました");
        }
      }
    };
    fetchTransactons();
  }, []);
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Router>
        <Routes>
          <Route path="/" element={<AppLayout />}>
            <Route index element={<Home />} />
            <Route path="/report" element={<Report />} />
            <Route path="*" element={<NoMatch />} />
          </Route>
        </Routes>
      </Router>
    </ThemeProvider>
  );
}

export default App;
