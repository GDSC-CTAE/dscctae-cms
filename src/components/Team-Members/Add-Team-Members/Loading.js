import { Typography } from "@mui/material";
import CircularProgress from "@mui/material/CircularProgress";
const Loading = ({ message }) => {
  return (
    <div
      style={{
        position: "absolute",
        top: 0,
        left: 0,
        zIndex: "30",
        width: "100%",
        height: "100%",
        background: "rgba(0, 0, 0, 0.75)",
        display: "flex",
        alignItems: "center",
        flexDirection: "column",
        justifyContent: "center",
      }}
    >
      <CircularProgress />
      <Typography style={{ color: "#ffffff", fontSize: "21px" }}>{message}</Typography>
    </div>
  );
};

export default Loading;
