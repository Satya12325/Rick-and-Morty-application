import * as React from "react";
import { useTheme } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import SkipPreviousIcon from "@mui/icons-material/SkipPrevious";
import PlayArrowIcon from "@mui/icons-material/PlayArrow";
import SkipNextIcon from "@mui/icons-material/SkipNext";
import styles from "./card.module.css";

const Cards = ({
  name,
  status,
  species,
  Lastlocation,
  firstlocation,
  image
}) => {
  const theme = useTheme();
  var Style = {};

  if (status === "Dead") {
    Style = {
      background: "red"
    };
  } else if (status === "unknown") {
    Style = {
      background: "#9E9E9E"
    };
  }

  return (
    <Card
      className={styles.carsResponsive}
      sx={{
        display: "flex",
        background: "#3C3E44",
        borderRadius: "10px",
        width: 550
      }}
    >
      <CardMedia
        component="img"
        sx={{ width: 200 }}
        image={image}
        alt="Live from space album cover"
        className={styles.cardImage}
      />
      <Box sx={{ display: "flex", flexDirection: "column" }}>
        <CardContent sx={{ flex: "1 0 auto" }}>
          <h2 className={styles.cardHeading}>{name}</h2>
          <div className={styles.circkeContainer}>
            <div className={styles.circle} style={Style}></div>
            <Typography
              component="div"
              variant="subtitle1"
              sx={{ color: "#fff", lineHeight: "1" }}
            >
              {status} - {species}
            </Typography>
          </div>
          <div className={styles.cardSubtitle}>
            <Typography
              component="div"
              variant="subtitle1"
              sx={{ color: "#9E9E9E" }}
            >
              Last known location:
            </Typography>
            <Typography
              variant="h6"
              component="div"
              className={styles.subtitle}
            >
              {Lastlocation}
            </Typography>
          </div>
          <div className={styles.cardSubtitle}>
            <Typography
              component="div"
              variant="subtitle1"
              sx={{ color: "#9E9E9E" }}
            >
              First seen in:
            </Typography>
            <Typography
              variant="h6"
              component="div"
              className={styles.subtitle}
            >
              {firstlocation}
            </Typography>
          </div>
        </CardContent>
        <Box sx={{ display: "flex", alignItems: "center", pl: 1, pb: 1 }}></Box>
      </Box>
    </Card>
  );
};

export { Cards };
