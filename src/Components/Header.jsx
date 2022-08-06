import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import { menuIcon } from "../Icons/icon-384x384.svg";
import styles from "./header.module.css";
import { useNavigate } from "react-router-dom";
export default function Header() {
  let neviget = useNavigate();
  return (
    <Box sx={{ flexGrow: 1 }}>
      <Box position="static" sx={{ background: "white" }}>
        <Toolbar>
          <div>
            <img
              onClick={() => {
                neviget("/");
              }}
              style={{ cursor: "pointer" }}
              src="https://rickandmortyapi.com/icons/icon-48x48.png?v=1538abef51e33ef514e8fe1ab9aeab4e"
              alt=""
            />
          </div>
          <Typography
            variant="h6"
            component="div"
            sx={{ flexGrow: 1 }}
          ></Typography>
          <div className={styles.buttons}>
            <Typography
              variant="h6"
              component="div"
              sx={{ flexGrow: 1 }}
              className={styles.nevigetor}
            >
              Docs
            </Typography>
            <Typography
              className={styles.nevigetor}
              variant="h6"
              component="div"
              sx={{ flexGrow: 1 }}
            >
              About
            </Typography>
            <button className={styles.btns} onClick={() => neviget("/support")}>
              SUPPORT US
            </button>
          </div>
        </Toolbar>
      </Box>
    </Box>
  );
}
