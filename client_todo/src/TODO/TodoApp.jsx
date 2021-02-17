import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  Box,
  Checkbox,
  Container,
  Grid,
  IconButton,
  Paper,
  TextField,
  Typography,
} from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import AddBoxIcon from "@material-ui/icons/AddBox";
import HighlightOffIcon from "@material-ui/icons/HighlightOff";
import { useState } from "react";
import {
  createdata,
  deletedata,
  getdata,
} from "../store/Async Actions/TodoActions";
const TodoApp = () => {
  const useStyles = makeStyles((theme) => ({
    root: {
      marginTop: theme.spacing(1),
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      height: "auto",
    },
    paper: {
      height: "auto",
      minHeight: "70vh",
      width: "400px",
      marginTop: theme.spacing(2),
    },
    h5: {
      color: theme.palette.secondary.main,
      textDecoration: " underline",
      fontWeight: 600,
      marginBottom: theme.spacing(1),
      marginTop: theme.spacing(2),
    },
    box: {
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
    },
    txt: {
      marginRight: "10px",
    },
    btn: {
      cursor: " pointer",
    },
    grid: {
      display: "flex",
      alignItems: "center",
      justifyContent: "space-between",
      marginTop: theme.spacing(1),
    },
    box1: {
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      justifyContent: "center",
    },
    item: {
      marginRight: 10,
    },
    items: {
      marginRight: 10,
      textDecoration: "line-through",
    },
  }));
  const dispatch = useDispatch();
  const classes = useStyles();
  const [state, setState] = useState({
    title: "",
  });
  const { data } = useSelector((state) => state.TodoReducer);
  useEffect(() => {
    dispatch(getdata());
  }, [state.title]);

  const [check, setCheck] = useState(true);

  const handleCheck = (data, e) => {
    setCheck(!check);

    dispatch({ type: "TOGGLE", payload: data, check: check });
  };
  const handleSub = (e) => {
    e.preventDefault();
    console.log(state);
    dispatch(createdata(state));
    setState({ title: "" });
  };
  const handleTitle = (e) => {
    let { value } = e.target;
    setState({ title: value });
  };
  const handleDel = (id) => {
    dispatch(deletedata(id));
    dispatch(getdata());
  };
  return (
    <Container maxWidth="lg" className={classes.root}>
      <form action="" onSubmit={handleSub}>
        <Paper className={classes.paper} elevation={3}>
          <Typography variant="h5" className={classes.h5}>
            TodoApp with MERN
          </Typography>
          <Box className={classes.box}>
            <TextField
              label="Enter to save"
              variant="standard"
              name="text"
              className={classes.txt}
              onChange={handleTitle}
              value={state.title}
            />
            <IconButton onClick={handleSub}>
              <AddBoxIcon
                color="primary"
                fontSize="large"
                className={classes.btn}
                type="submit"
              />
            </IconButton>
          </Box>
          <Box className={classes.box1}>
            {data.map((info) => (
              <Grid container className={classes.grid} key={info._id}>
                <Checkbox
                  color="primary"
                  onChange={(e) => handleCheck(info, e)}
                />
                <Grid
                  item
                  className={info.complete ? classes.items : classes.item}
                >
                  {info.title}
                </Grid>
                <IconButton onClick={() => handleDel(info._id)}>
                  <HighlightOffIcon
                    color="secondary"
                    className={classes.btn}
                    fontSize="medium"
                  />
                </IconButton>
              </Grid>
            ))}
          </Box>
        </Paper>
      </form>
    </Container>
  );
};

export default TodoApp;
