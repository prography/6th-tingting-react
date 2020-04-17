import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Header from "./components/Header";
import SideBar from "./components/SideBar";
import PictureAuthPage from "./pages/PictureAuthPage";
import CardAuthPage from "./pages/CardAuthPage";
import ReportListPage from "./pages/ReportListPage";
import ReportDetailPage from "./pages/ReportDetailPage";


function App() {
  return (
    <Router>
      <Header/>
      <SideBar />
      <Route exact path="/picture-auth" component={PictureAuthPage} />
      <Route exact path="/card-auth" component={CardAuthPage} />
      <Route exact path="/reports" component={ReportListPage} />
      <Route exact path="/reports/:id" component={ReportDetailPage} />
    </Router>
  );
}

export default App;