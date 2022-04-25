import axios from "axios";
import React, { useEffect, useState } from "react";
import { atom, useRecoilState, useRecoilValue } from "recoil";
import { API_SERVER } from "../const";
import { tokenState } from "../recoilState";
import { Link } from "react-router-dom";
import DocIcon from "./DocIcon";
import Grid from "@mui/material/Grid";
import { styled } from "@mui/material/styles";
import Paper from "@mui/material/Paper";
import CardMedia from "@mui/material/CardMedia";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Card from "@mui/material/Card";
import Avatar from "@mui/material/Avatar";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import CardHeader from "@mui/material/CardHeader";

function Home({ navbarType, setNavbarType }) {
  const token = useRecoilValue(tokenState);
  const [docs, setDocs] = useState([]);
  const [recentlyVisitedDocs, setRecentlyVisitedDocs] = useState([]);
  const [loadingState, setLoadingState] = useState(true);
  const [errorState, setErrorState] = useState(false);

  const getDocs = async () => {
    setLoadingState(true);
    await axios
      .get(API_SERVER + "/api/document", {
        headers: { Authorization: `Bearer ${token}` },
      })
      .then((res) => {
        setDocs(res.data.docs);
        const rvds = res.data.recentlyVisitedDocs;
        setRecentlyVisitedDocs(() => [...rvds]);
        setLoadingState(false);
      })
      .catch(() => {
        setLoadingState(false);
        setErrorState(true);
      });
  };

  useEffect(() => {
    getDocs();

    return () => {};
  }, []);

  function getLabels(name, content) {
    return content.map((c, i) => {
      let to = "/document/" + name + "/" + c.label;
      if (c.label != "No Label") {
        return (
          <ul key={i}>
            <Link to={to}>{c.label}</Link>
          </ul>
        );
      }
    });
  }

  return (
    <div>
      {loadingState && <div>Loading...</div>}
      {errorState && (
        <>
          <div className="mt-5 p-3" style={{ height: "70vh" }}>
            <Grid
              container
              spacing={3}
              justifyContent="center"
              alignItems="center"
            >
              <Grid item xs={12} sm={6} md={3}>
                <div className="p-3">
                  <h1>The collaborative mind of your crew</h1>
                  <p>
                    Bring knowledge, documents, and> projects together in one
                    spot with this modern, straightforward, and lightning-fast
                    method to collaborate.
                  </p>
                  <Link
                    to="/register"
                    className="nav-link text-dark"
                    rel="nofollow noreferrer"
                  >
                    <Button variant="outlined" oncl>
                      Get Started
                    </Button>

                    <div className="d-flex justify-content-center mt-5">
                      <img
                        src={require("../assets/iit_logo.png")}
                        height="150"
                      />
                    </div>
                  </Link>
                </div>
              </Grid>
              <Grid item xs={12} sm={6} md={6}>
                <div className="p-3">
                  <CardMedia
                    component="img"
                    height={600}
                    image={require("../assets/home.jpg")}
                    alt="Paella dish"
                  />
                </div>
              </Grid>
            </Grid>
          </div>
          <div className="d-flex align-items-center justify-content-center flex-column mt-5 mb-5">
            <h1>All is in one spot</h1>
            <p>
              Compile information, organise activities, and communicate ideas,
              among other things.
            </p>
          </div>
          <div className="d-flex flex-column justify-content-center align-items-center">
            <h1>Trusted by IITians of Bhilai</h1>
            <Grid
              container
              spacing={1}
              justifyContent="center"
              alignItems="center"
              className="p-5"
            >
              <Grid container item xs={8} spacing={3}>
                <Grid item xs={3}>
                  <Paper>
                    <Card sx={{ maxWidth: 345, height: 350 }}>
                      <CardHeader
                        avatar={<Avatar>R</Avatar>}
                        title="Shrimp and Chorizo Paella"
                        subheader="September 14, 2016"
                      />
                      <CardContent>
                        <Typography variant="body2" color="text.secondary">
                          This impressive paella is a perfect party dish and a
                          fun meal to cook together with your guests. Add 1 cup
                          of frozen peas along with the mussels, if you like.
                          Lorem ipsum dolor sit, amet consectetur adipisicing
                          elit. Quibusdam vel optio autem doloremque eum nobis
                          officia, ut, sequi iure quasi iusto amet molestiae,
                          omnis inventore non culpa illo recusandae officiis.2
                        </Typography>
                      </CardContent>
                    </Card>
                  </Paper>
                </Grid>
                <Grid item xs={3}>
                  <Paper>
                    <Card sx={{ maxWidth: 345, height: 350 }}>
                      <CardHeader
                        avatar={<Avatar>R</Avatar>}
                        title="Shrimp and Chorizo Paella"
                        subheader="September 14, 2016"
                      />
                      <CardContent>
                        <Typography variant="body2" color="text.secondary">
                          This impressive paella is a perfect party dish and a
                          fun meal to cook together with your guests. Add 1 cup
                          of frozen peas along with the mussels, if you like.
                        </Typography>
                      </CardContent>
                    </Card>
                  </Paper>
                </Grid>
                <Grid item xs={3}>
                  <Paper>
                    <Card sx={{ maxWidth: 345, height: 350 }}>
                      <CardHeader
                        avatar={<Avatar>R</Avatar>}
                        title="Shrimp and Chorizo Paella"
                        subheader="September 14, 2016"
                      />
                      <CardContent>
                        <Typography variant="body2" color="text.secondary">
                          This impressive paella is a perfect party dish and a
                          fun meal to cook together with your guests. Add 1 cup
                          of frozen peas along with the mussels, if you like.
                        </Typography>
                      </CardContent>
                    </Card>
                  </Paper>
                </Grid>
                <Grid item xs={3}>
                  <Paper>
                    <Card sx={{ maxWidth: 345, height: 350 }}>
                      <CardHeader
                        avatar={<Avatar>R</Avatar>}
                        title="Shrimp and Chorizo Paella"
                        subheader="September 14, 2016"
                      />
                      <CardContent>
                        <Typography variant="body2" color="text.secondary">
                          This impressive paella is a perfect party dish and a
                          fun meal to cook together with your guests. Add 1 cup
                          of frozen peas along with the mussels, if you like.
                        </Typography>
                      </CardContent>
                    </Card>
                  </Paper>
                </Grid>
              </Grid>
            </Grid>
          </div>
        </>
      )}
      {!loadingState && !errorState && (
        <Box sx={{ width: "100%", margin: "30px" }}>
          <h1>Recent Documents</h1>
          <Grid container rowSpacing={3} columnSpacing={3}>
            {recentlyVisitedDocs.map(function (name, index) {
              return (
                <DocIcon
                  name={name}
                  to={"/document/" + name}
                  versions={"/" + name + "/"}
                />
              );
            })}
          </Grid>
          <div>
            <hr />
          </div>
          <Grid container rowSpacing={3} columnSpacing={3}>
            {docs.map(function (doc, index) {
              return (
                <DocIcon
                  name={doc.name}
                  to={"/document/" + doc.name}
                  versions={"/" + doc.name + "/"}
                />
              );
            })}
          </Grid>
        </Box>
      )}
    </div>
  );
}

export default Home;
