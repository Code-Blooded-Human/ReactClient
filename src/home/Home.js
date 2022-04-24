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
import Box from "@mui/material/Box";

function Home() {
  const token = useRecoilValue(tokenState);
  const [docs, setDocs] = useState([]);
  const [recentlyVisitedDocs, setRecentlyVisitedDocs] = useState([]);

  const getDocs = async () => {
    const d = await axios.get(API_SERVER + "/api/document", {
      headers: { Authorization: `Bearer ${token}` },
    });

    let rvds = d.data.recentlyVisitedDocs;
    setRecentlyVisitedDocs((prev) => [...rvds]);
    setDocs(d.data.docs);
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
  );
}

export default Home;
