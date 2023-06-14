import { SYSTEM_NAME, REPORT_TITLE } from "../config/constants";

const Report = () => {
  // Set Title
  document.title = SYSTEM_NAME + " | " + REPORT_TITLE;
  return (
    <>
      <h1>Report</h1>
    </>
  );
};

export default Report;
