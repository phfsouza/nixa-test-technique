import React from "react";
import "./styles.css";
import { Button, Avatar, Divider } from "@mui/material";

const UserData = () => {
  return (
    <div className="userDataContainer">
      <header className="header">
        <div className="info">
          <Avatar src="/broken-image.jpg" sx={{ margin: "0 20px", padding: "8px" }} fontSize="large" />
          <div>
            <div>Leanne Graham</div>
            <div>1-770-736-8031 x56442</div>
          </div>
        </div>
        <div className="button">
          <Button
            variant="filled"
            style={{
              backgroundColor: "#f8f9f8",
              fontSize: "12px",
              fontWeight: "bold",
              marginRight: "20px",
              color: "black",
            }}
          >
            log out
          </Button>
        </div>
      </header>
      <div className="body">
        <div classname="leftSide">
          <Avatar src="/broken-image.jpg" sx={{ height: '140px', width: '140px', margin: '0 30px 30px 0'}}/>
          <div className="leftInfos">
            <div>Leanne Graham</div>
            <div>1-770-736-8031 x56442</div>
            <div>Sincere@april.biz</div>
          </div>
        </div>
        <Divider orientation="vertical" flexItem/>
        <div classname="rightSide">
              direita
        </div>
      </div>
      <footer className="footer">footer</footer>
    </div>
  );
};

export default UserData;
