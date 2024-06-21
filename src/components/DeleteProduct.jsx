import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogTitle from "@mui/material/DialogTitle";
import * as React from "react";
import axiosInstance from "../lib/axios.instance";
import { useNavigate, useParams } from "react-router-dom";

const DeleteProductDialog = () => {
  const navigate = useNavigate();
  const params = useParams();
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  //   delete product
  const deleteProduct = async () => {
    try {
      await axiosInstance.delete(`/product/delete/${params.id}`);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <React.Fragment>
      <Button onClick={handleClickOpen} variant="contained" color="error">
        Delete Product
      </Button>
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">
          {"Are you sure you want to delete this product?"}
        </DialogTitle>

        <DialogActions>
          <Button onClick={handleClose} color="success" variant="contained">
            Cancel
          </Button>
          <Button
            onClick={async () => {
              await deleteProduct();
              navigate("/");
              handleClose();
            }}
            autoFocus
            variant="contained"
            color="error"
          >
            Yes
          </Button>
        </DialogActions>
      </Dialog>
    </React.Fragment>
  );
};

export default DeleteProductDialog;
