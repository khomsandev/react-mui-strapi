import { SYSTEM_NAME, SETTING_TITLE } from "../config/constants";

const Setting = () => {
  // Set Title
  document.title = SYSTEM_NAME + " | " + SETTING_TITLE;
  return (
    <>
      <h1>Setting</h1>
    </>
  );
};

export default Setting;
