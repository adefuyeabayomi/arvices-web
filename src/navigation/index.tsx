import React, { useEffect } from "react";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  useLocation,
} from "react-router-dom";
import Home from "../pages/home";
import Login from "../pages/auth/login";
import Signup from "../pages/auth/signup";
import ForgotPassword from "../pages/auth/forgotpassword";
import PasswordReset from "../pages/auth/passwordreset";
import VerifyEmail from "../pages/auth/verifyemail";
import PageNotFound from "../pages/util/pagenotfound";
import Header from "../components/header";
import Footer from "../components/footer";
import AvailableJobPostings from "../pages/availablejobposts";
import HelpCenter from "../pages/helpcenter";
import ArvicesProviders from "../pages/providers";
import Activities from "../pages/activities";
import CompleteProfile from "../pages/auth/completeprofile";
import NewJobPosting from "../pages/newjobposting";
import AccountSettings from "../pages/accountsettings";
import Profile from "../pages/profile";
import Notification from "../pages/notification";
import Conversations from "../pages/messaging";
import ChatPage from "../pages/messaging/chatpage";
import PostShowcase from "../pages/postshowcase";
import Wallet from "../pages/wallet";
import Transactions from "../pages/transactionhistory";
import BaseLayout from "../pages/base";
import { ProfileEdit } from "../pages/profile/profile.edit";

// Import pages

const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    // Scroll window to the top whenever the route changes
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
};

function Navigation(): React.JSX.Element {
  return (
    <Router>
      <ScrollToTop />
      <NavigationContent />
    </Router>
  );
}

// Move useLocation inside a separate component inside Router
// How to implement page not found?
function NavigationContent() {
  return (
    <div className="overflow-x-auto  text-royalblue-shade6 ">
      <Header />
      <Routes>
        <Route path="/" Component={Home} />
        {/* Auth Pages */}
        <Route path="/login" Component={Login} />
        <Route path="/signup" Component={Signup} />
        <Route path="/forgot-password" Component={ForgotPassword} />
        <Route path="/resetpassword" Component={PasswordReset} />
        <Route path="/verify-email" Component={VerifyEmail} />
        <Route path="/complete-profile" Component={CompleteProfile} />

        {/* App Functional Pages */}
        <Route path="/job-posting" Component={AvailableJobPostings} />
        <Route path="/service-providers" Component={ArvicesProviders} />
        <Route path="/activities" Component={Activities} />
        <Route path="/help-center" Component={HelpCenter} />
        <Route path="/account-settings" Component={AccountSettings} />
        <Route path="/user-profile/:id" Component={Profile} />
        <Route path="/myprofile" Component={Profile} />
        <Route path="/profile/edit" Component={ProfileEdit} />
        <Route path="/notifications" Component={Notification} />
        <Route path="/messaging/conversations" Component={Conversations} />
        <Route path="/messaging/chat" Component={ChatPage} />
        <Route path="/post-showcase" Component={PostShowcase} />
        <Route path="/wallet" Component={Wallet} />
        <Route path="/transaction-history" Component={Transactions} />
        <Route path="/jobs" Component={Transactions} />
        <Route path="/provider/open-offers" Component={BaseLayout} />
        <Route path="/provider/ongoing-negotiations" Component={BaseLayout} />
        <Route path="/provider/ongoing-jobs" Component={BaseLayout} />
        <Route path="/provider/completed-jobs" Component={BaseLayout} />
        <Route path="/client/new-job" Component={NewJobPosting} />
        <Route path="/client/open-jobs" Component={BaseLayout} />
        <Route path="/client/pending-offers" Component={BaseLayout} />
        <Route path="/client/ongoing-jobs" Component={BaseLayout} />
        <Route path="/client-completed-jobs" Component={BaseLayout} />
        <Route
          path="/client/favourite-service-providers"
          Component={BaseLayout}
        />
        <Route path="/provider/open-offers" Component={BaseLayout} />
        <Route path="/provider/open-offers" Component={BaseLayout} />

        {/* 404 Route - must be last */}
        <Route path="*" Component={PageNotFound} />
      </Routes>
      <Footer />
    </div>
  );
}

export default Navigation;
