import { SYSTEM_NAME, DASHBOARD_TITLE } from "../config/constants";

const Dashboard = () => {
  // Set Title
  document.title = SYSTEM_NAME + " | " + DASHBOARD_TITLE;

  return (
    <>
      <h1>Dashboard</h1>
    </>
  );
};

export default Dashboard;
