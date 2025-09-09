import React from "react";
import Button from "@mui/material/Button";
const TestingPage = () => {
  return (
    <div className="mt-25">
      <Button variant="contained">Testing MUI</Button>
      <div className="bg-red-500 mdlg:bg-black">Resize me!</div>
    </div>
  );
};

export default TestingPage;
