import React from "react";
import logo from "./logo.svg";
import "./App.css";
import { MyCustomDialog } from "./MyCustomDialog";
import { useState } from "react";
import { TextField } from "@mui/material";

function App() {
  const [openConfirmDialog, setOpenConfirmDialog] = useState(false);

  return (
    <>
      <MyCustomDialog
        open={openConfirmDialog}
        setOpen={setOpenConfirmDialog}
        myAsyncTask={async () => await postMyHttpRequest()}
      />
      <a>Hello</a>
    </>
  );
}

export default App;

function postMyHttpRequest():
  | { readonly status: string }
  | PromiseLike<{ readonly status: string }> {
  throw new Error("Function not implemented.");
}
