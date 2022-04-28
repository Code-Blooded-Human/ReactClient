import React from "react";
import Grid from "@mui/material/Grid";
import Container from "@mui/material/Container";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import { Link } from "react-router-dom";
import Footer from "../componets/Footer";

const Product = () => {
  return (
    <Container maxWidth="xl">
      <Grid
        container
        spacing={8}
        justifyContent="center"
        alignItems="center"
        className="mb-3"
      >
        <Grid item xs={4} md={6}>
          <div className="">
            <img
              height="400"
              src={require("../assets/collaborate.png")}
              alt="Paella dish"
            />
          </div>
        </Grid>
        <Grid item xs={8} md={3}>
          <div className="p-3">
            <h1>Real-time collaboration</h1>
            <p>
              With seamless sharing, you can edit together in real time. Every
              item can be immediately shared with the rest of your team. You can
              view updates as they type when others are editing.
            </p>
          </div>
        </Grid>
      </Grid>
      <Grid
        container
        spacing={8}
        justifyContent="center"
        alignItems="center"
        className="mb-3"
      >
        <Grid item xs={8} md={3}>
          <div className="p-3">
            <h1>Working at the lightning pace.</h1>
            <p>
              <strong>Quick-saving:</strong> Changes are saved and synced across
              all devices once save button is pressed.
            </p>
            <p>
              <strong>Search results are returned instantly:</strong> By
              searching and filtering, you can find anything you need quickly.
            </p>
            <p>
              <strong>Quick Keyboard Design:</strong> Hotkeys and other tools
              can help you perform better.
            </p>
          </div>
        </Grid>
        <Grid item xs={4} md={6}>
          <div className="">
            <img
              height="400"
              src={require("../assets/speed.png")}
              alt="Paella dish"
            />
          </div>
        </Grid>
      </Grid>

      <Grid
        container
        spacing={8}
        justifyContent="center"
        alignItems="center"
        className="mb-3"
      >
        <Grid item xs={4} md={6}>
          <div className="">
            <img
              height="400"
              src={require("../assets/organize.png")}
              alt="Paella dish"
            />
          </div>
        </Grid>
        <Grid item xs={8} md={3}>
          <div className="p-3">
            <h1>Quickly organise stuff</h1>
            <p>
              You'll be able to find the information you need when you need it.
              Files are organised by name and version history. See what changes
              who made in past using version history and stay organised.
            </p>
          </div>
        </Grid>
      </Grid>
      <div className="d-flex align-items-center justify-content-center flex-column mt-5 mb-5">
        <h1>Use E-Docs in your browser</h1>
        <div className="d-flex">
          <div className="p-3">
            <img src={require("../assets/windows.png")} height="70" />
          </div>
          <div className="p-3">
            <img src={require("../assets/linux.jpg")} height="70" />
          </div>
        </div>
      </div>
      <div className="d-flex align-items-center justify-content-center flex-column">
        <h1>Files on cloud</h1>
        <Box
          sx={{
            width: "40%",
            height: 150,
            textAlign: "center",
          }}
        >
          Carry all of your documents with you everywhere you go. Now that you
          have everything in one place, you can easily share your files with
          your friends and coworkers.
        </Box>
      </div>

      <div className="d-flex align-items-center justify-content-center flex-column">
        <h1>Ready to Start</h1>
        <Link
          to="/register"
          className="nav-link text-dark"
          rel="nofollow noreferrer"
        >
          <Button variant="outlined" oncl>
            Sign Up
          </Button>
        </Link>
      </div>
      <Footer />
    </Container>
  );
};
export default Product;
