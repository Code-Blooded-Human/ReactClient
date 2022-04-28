import React from "react";
import docicon from "../assets/file.png";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { maxWidth } from "@mui/system";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import CustomizedMenus from "./CustomizedMenus";
import { Link } from "react-router-dom";

function DocIcon(props) {
  return (
    <Grid item>
      <Card sx={{ minWidth: 110 }}>
        <div
          style={{
            alignItems: "center",
            justifyContent: "center",
            textAlign: "right",
          }}
        >
          <CustomizedMenus to={props.to} versions={props.versions} />
        </div>
        <CardContent
          style={{
            padding: "0",
            alignItems: "center",
            justifyContent: "center",
            textAlign: "center",
          }}
        >
          <Link to={props.to}>
            <img src={docicon} style={{ margin: "auto" }}></img>
          </Link>
        </CardContent>
        <CardActions
          style={{
            alignItems: "center",
            justifyContent: "center",
            textAlign: "center",
          }}
        >
          <span
            style={{
              fontSize: "12  px",
              maxWidth: 110,
              display: "block",
              whiteSpace: "nowrap",
              overflow: "hidden",
              textOverflow: "ellipsis",
            }}
          >
            {props.name}
          </span>
        </CardActions>
      </Card>
    </Grid>
  );
}

export default DocIcon;
