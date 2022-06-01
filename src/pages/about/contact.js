import React, { useState } from "react";
import Grid from "@material-ui/core/Grid";

import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import background from "../../assets/harer.jpg";
import phoneIcon from "../../assets/phone.svg";
import emailIcon from "../../assets/email.svg";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import sendIcon from "../../assets/send.svg";
import { Link } from "react-router-dom";
import Dialog from "@material-ui/core/Dialog";

import DialogTitle from "@material-ui/core/DialogTitle";
import axios from "axios";
import CircularProgress from "@material-ui/core/CircularProgress";
import Snackbar from "@material-ui/core/Snackbar";

//changes to imports
import SecurityIcon from '@material-ui/icons/Security';
import EventNoteIcon from '@material-ui/icons/EventNote';
import TrendingUpIcon from '@material-ui/icons/TrendingUp';
import ImportExportIcon from '@material-ui/icons/ImportExport';
import ComputerIcon from '@material-ui/icons/Computer';
import HttpIcon from '@material-ui/icons/Http';


const useStyle = makeStyles((theme) => ({
  secondGrid: {
    height: "60em",
    padding: "4em",
    backgroundImage: `url(${background})`,
    backgroundPosition: "center",
    backgroundSize: "cover",
    backgoundRepeat: "no-repeat",

    [theme.breakpoints.down("xs")]: {
      height: "17em",
      padding: "0.5em",
      backgroundSize: "21.5em 17em",
    },
  },

  FirstGrid: {
    padding: "2em 5em",
    [theme.breakpoints.down("xs")]: {
      padding: "1em",
    },

    marginTop: "100px"
  },

  form: {
    marginTop: "5em",
  },
  sendButton: {
    backgroundColor: "#4158D0",
    backgroundImage:
      "linear-gradient(43deg, #4158D0 0%, #C850C0 46%, #FFCC70 100%)",
    margin: "3em 3em 3em 0",
    color: "white",
    fontFamily: "Raleway",
    fontWeight: 600,
  },
  button: {
    ...theme.typography.button,
    marginLeft: "25px",
    marginRight: "50px",
    borderRadius: "50px",
  },

  dialog: {
    marginTop: "6em",
  },
  dialogform: {
    margin: "3em ",
    [theme.breakpoints.down("sm")]: {
      margin: "0.5em",
    },
  },
  cancelButton: {
    color: "white",
    fontFamily: "Raleway",
    fontWeight: 600,
    backgroundColor: "red",
    "&:hover": {
      backgroundColor: "#DC143C",
    },
    [theme.breakpoints.down("sm")]: {},
  },
  confirmButton: {
    backgroundColor: "#4158D0",
    backgroundImage:
      "linear-gradient(43deg, #4158D0 0%, #C850C0 46%, #FFCC70 100%)",

    color: "white",
    fontFamily: "Raleway",
    fontWeight: 600,
   width: "210px"
  },
  buttonContainer: {
    marginTop: "2em",
  },

wrapper: {
    width: '65%',
    margin: 'auto',
    textAlign: 'center',
  },

grid: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    flexWrap: 'wrap',
  },

bigSpace: {
    marginTop: '5rem',
  },
  littleSpace: {
    marginTop: '2.5rem',
  },
littleSpace: {
    marginTop: '2.5rem',
  },

}));

const Contact = (props) => {
  const classes = useStyle();

  const [name, setName] = useState("");
  //const [nameHelper, setNameHelper] = useState("");

  const [email, setEmail] = useState("");
  const [emailHelper, setEmailHelper] = useState("");

  const [phone, setPhone] = useState("");
  const [phoneHelper, setPhoneHelper] = useState("");

  const [message, setMessage] = useState("");

  //const [validation, setValidation] = useState(false);

  const [open, setOpen] = useState(false);

  const [loading, setLoading] = useState(false);

  const [alert, setAlert] = useState({ open: false, message: "", color: "" });

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const onChange = (event) => {
    let valid;

    switch (event.target.id) {
      case "email":
        setEmail(event.target.value);
        valid = /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(
          event.target.value
        );
        if (!valid) {
          setEmailHelper("invalid email");
        } else {
          setEmailHelper("");
        }
        break;
      case "phone":
        setPhone(event.target.value);
        valid = /^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/.test(
          event.target.value
        );
        if (!valid) {
          setPhoneHelper("invalid Phone number");
        } else {
          setPhoneHelper("");
        }
        break;
      default:
        break;
    }
  };

  const handleSend = async () => {
    setLoading(true);
   await axios.get("https://us-central1-materialui-company.cloudfunctions.net/sendmail",{params: {
         name:name,
         email:email,
         phone:phone,
         message:message
      }})
      .then((res) => {
        setName("");
        setPhone("");
        setEmail("");
        setMessage("");
        console.log(res)
        setLoading(false);
        setOpen(false);
        setAlert({
          open: true,
          message: "message sent successfuly",
          color: "#32CD32",
        });
      })
      .catch((err) => {
        setLoading(false);
        setAlert({
          open: true,
          message: "something went wrong, try again later",
          color: "#FF0000",
        });
        console.log(err);
      });
  };

  return (

<>


     <div className={classes.wrapper}>
          <Typography variant='h3' className={classes.bigSpace} color='blue'>
            At AirBnb-Et we are passionate about Your Stay
          </Typography>
          <Typography
            variant='h5'
            className={classes.littleSpace}
            color='primary'
          >
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean
            sodales congue tristique. Cras non pretium sem. Duis interdum lorem
            sit amet ligula pretium, sed rutrum urna semper. Pellentesque
            habitant morbi tristique senectus et netus et malesuada fames ac
            turpis egestas. Phasellus egestas gravida ullamcorper.
          </Typography>
        </div>
        <div className={`${classes.grid} ${classes.bigSpace}`}>
          <Grid
            icon={
              <SecurityIcon
                style={{ fill: '#4360A6', height: '125', width: '125' }}
              />
            }
            title='Secure'
            btnTitle='Show me More'
          />
          <Grid
            icon={
              <EventNoteIcon
                style={{ fill: '#449A76', height: '125', width: '125' }}
              />
            }
            title='Reliable'
            btnTitle='Show me More'
          />
          <Grid
            icon={
              <TrendingUpIcon
                style={{ fill: '#D05B2D', height: '125', width: '125' }}
              />
            }
            title='Performant'
            btnTitle='Show me More'
          />
        </div>
        <div className={`${classes.grid} ${classes.littleSpace}`}>
          <Grid
            icon={
              <ImportExportIcon
                style={{ fill: '#5EA780', height: '125', width: '125' }}
              />
            }
            title='Modular'
            btnTitle='Show me More'
          />
          <Grid
            icon={
              <ComputerIcon
                style={{ fill: '#E69426', height: '125', width: '125' }}
              />
            }
            title='Multi-Platform'
            btnTitle='Show me More'
          />
          <Grid
            icon={
              <HttpIcon
                style={{ fill: '#2EA09D', height: '125', width: '125' }}
              />
            }
            title='Connected'
            btnTitle='Show me More'
          />
        </div>

    <React.Fragment>
      <Grid container>
        <Grid
          item
          container
          direction="column"
          lg={5}
          className={classes.FirstGrid}
        >
          <Grid item container direction="column" spacing={3}>
            <Grid item>
              <Typography variant="h3">Contact-Us</Typography>
              <Typography variant="subtitle1"> 
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean
            sodales congue tristique. Cras non pretium sem. Duis interdum lorem
            sit amet ligula pretium, sed rutrum urna semper. Pellentesque
            habitant morbi tristique senectus et netus et malesuada fames ac
            turpis egestas. Phasellus egestas gravida ullamcorper.
              </Typography>
            </Grid>
            <Grid item container direction="column">
              <Grid item container spacing={2}>
                <Grid item>
                  <img src={phoneIcon} alt="phone" />
                </Grid>
                <Grid>
                  <a href="tel:+251975063412" style={{ textDecoration: "none" }}>
                    {" "}
                    <Typography variant="subtitle1">Call Us Now +251975063412</Typography>
                  </a>
                </Grid>
              </Grid>
              <Grid item container spacing={2}>
                <Grid item>
                  <img src={emailIcon} alt="email" />
                </Grid>
                <Grid>
                  <a
                    href="mailto:airbnb-et@gmail.com"
                    style={{ textDecoration: "none" }}
                  >
                    <Typography variant="subtitle1">
                      Our Email airbnb-et@gmail.com
                    </Typography>
                  </a>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
          <Grid item direction="column" className={classes.form} spacing={3}>
            <Grid item>
              <TextField
                label="Name"
                fullWidth
                value={name}
                onChange={(event) => {
                  setName(event.target.value);
                }}
              />
            </Grid>
            <Grid item>
              <TextField
                id="email"
                label="Email"
                error={emailHelper.length !== 0}
                helperText={emailHelper}
                fullWidth
                value={email}
                onChange={onChange}
              />
            </Grid>
            <Grid item>
              <TextField
                id="phone"
                label="Phone"
                error={phoneHelper.length !== 0}
                helperText={phoneHelper}
                fullWidth
                value={phone}
                onChange={onChange}
              />
            </Grid>
            <Grid item>
              <TextField
                label="tel us more about you inquiry"
                multiline
                rows={3}
                fullWidth
                value={message}
                onChange={(event) => {
                  setMessage(event.target.value);
                }}
                className={classes.message}
              />
            </Grid>
            <Grid item>
              <Button
                // disabled={
                //   name.length === 0 ||
                //   phone.length === 0 ||
                //   emailHelper.length !== 0 ||
                //   email.length === 0 ||
                //   message.length === 0 ||
                //   phoneHelper.length !== 0 ||
                //   nameHelper.length !== 0
                // }
                variant="contained"
                className={classes.sendButton}
                onClick={handleClickOpen}
              >
                Send
                <img src={sendIcon} alt="send" style={{ marginLeft: "1em" }} />
              </Button>
            </Grid>
          </Grid>
        </Grid>
        <Grid
          item
          container
          className={classes.secondGrid}
          lg={7}
          alignItems="center"
        >
          <Button
            variant="contained"
            color="secondary"
            className={classes.button}
            component={Link}
            to="/estimate"
          >
            More Info
          </Button>
        </Grid>
      </Grid>
      <Dialog open={open} onClose={handleClose} className={classes.dialog}>
        <DialogTitle>
          <Typography variant="h5">Confirm Informations</Typography>
        </DialogTitle>
        <Grid
          item
          direction="column"
          className={classes.dialogform}
          spacing={3}
        >
          <Grid item>
            <Typography>Name</Typography>
            <Typography variant="subtitle1">{name}</Typography>
          </Grid>
          <Grid item>
            <Typography>Email</Typography>
            <Typography variant="subtitle1">{email}</Typography>
          </Grid>
          <Grid item>
            <Typography>Phone</Typography>
            <Typography variant="subtitle1">{phone}</Typography>
          </Grid>
          <Grid item>
            <Typography>Your inquiry</Typography>
            <Typography variant="subtitle1">{message}</Typography>
          </Grid>
          <Grid item container spacing={2} className={classes.buttonContainer}>
            <Grid item md>
              <Button
                className={classes.cancelButton}
                variant="contained"
                onClick={handleClose}
              >
                cancel
              </Button>
            </Grid>
            <Grid item md>
              <Button
                variant="contained"
                className={classes.confirmButton}
                onClick={handleSend}
              >
                {loading ? <CircularProgress size={30} /> : " Confirm >"}
              </Button>
            </Grid>
          </Grid>
        </Grid>
      </Dialog>
      <Snackbar
        open={alert.open}
        message={alert.message}
        ContentProps={{ style: { backgroundColor: alert.color } }}
        anchorOrigin={{ vertical: "top", horizontal: "center" }}
        onClose={()=>{setAlert({...alert,open:false})}}
        autoHideDuration={4000}
      />
    </React.Fragment>
</>
  );
};

export default Contact;