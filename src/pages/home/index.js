import React, { useState, useEffect } from "react";
import { styles } from "./style";
import Card from "./components/card";
import Header from "../../components/header";
import Logo from "../../components/img/Harry_5.jpg";
import CardTwo from "./components/cardTwo";
import CardTree from "./components/cardTree";
import CardFour from "./components/cardFour";
import CardFive from "./components/cardFive";
import CardSix from "./components/cardSix";
import Divider from "@material-ui/core/Divider";
import api from "../../services/api";
import { Typography } from "@material-ui/core";

export default function Home() {
  const classes = styles();

  const [card, setCard] = useState([]);
  const getData = async () => {
    const resp = await api.get("/card");
    const data = await resp.data;

    setCard(data);
  };

  useEffect(() => {
    getData();
  }, []);

  const [cardTwo, setCardTwo] = useState([]);
  const getDataTwo = async () => {
    const respTwo = await api.get("/cardTwo");
    const dataTwo = await respTwo.data;

    setCardTwo(dataTwo);
  };

  useEffect(() => {
    getDataTwo();
  }, []);

  const [cardTree, setCardTree] = useState([]);
  const getDataTree = async () => {
    const respTree = await api.get("/cardTree");
    const dataTree = await respTree.data;

    setCardTree(dataTree);
  };

  useEffect(() => {
    getDataTree();
  }, []);

  const [cardFive, setCardFive] = useState([]);
  const getDataFive = async () => {
    const respFive = await api.get("/cardFive");
    const dataFive = await respFive.data;

    setCardFive(dataFive);
  };

  useEffect(() => {
    getDataFive();
  }, []);

  return (
    <div>
      <Header />
      <div className={classes.topo}>
        <div className={classes.top}></div>
      </div>
      <div className={classes.logo}>
        <img className={classes.img} src={Logo} alt="" />

        <div
          style={{
            display: "flex",
            width: "84.5%",
            background: "#EDEDED",
          }}
        >
          {card &&
            card.length > 0 &&
            card.map((value) => (
              <Card
                key={value}
                itemID
                picture={value.picture}
                title={value.title}
              />
            ))}
        </div>

        <div
          //  Fundo Azul
          style={{
            display: "flex",
            width: "84.5%",
            height: 580,
            background: "#051336",
          }}
        >
          {/* texto: Original Disney= */}
          <div
            style={{
              position: "absolute",
              width: "84.5%",
              display: "flex",
              justifyContent: "center",
              color: "#FFFFFF",
              marginTop: 15,
            }}
          >
            <Typography style={{ fontSize: 33 }}> Original Disney+</Typography>
          </div>
          <div
            style={{
              display: "flex",
              width: "88%",
              justifyContent: "space-evenly",
              marginTop: 90,
              marginLeft: 95,
            }}
          >
            {cardTwo &&
              cardTwo.length > 0 &&
              cardTwo.map((value) => (
                <CardTwo
                  key={value}
                  itemID
                  picture={value.picture}
                  title={value.title}
                />
              ))}
          </div>
        </div>

        <div
          style={{
            width: "84.5%",
            background: "#EDEDED",
            height: 620,
          }}
        >
          <div
            style={{
              display: "flex",
              width: "100%",
              justifyContent: "center",
              marginTop: 25,
            }}
          >
            <Typography style={{ fontSize: 33 }}> Em 2021 </Typography>
          </div>
          <div
            style={{
              display: "flex",
              width: "90%",
              justifyContent: "space-evenly",
              marginTop: 30,
              marginLeft: 80,
            }}
          >
            {cardTree &&
              cardTree.length > 0 &&
              cardTree.map((value) => (
                <CardTree
                  key={value}
                  itemID
                  picture={value.picture}
                  title={value.title}
                />
              ))}
          </div>
        </div>

        <CardFour />

        <div
          style={{
            display: "flex",
            width: "84.5%",
          }}
        >
          <div
            style={{
              display: "flex",
              width: "84.5%",
              justifyContent: "center",
            }}
          ></div>
          {cardFive &&
            cardFive.length > 0 &&
            cardFive.map((value) => (
              <CardFive
                key={value}
                itemID
                picture={value.picture}
                title={value.title}
              />
            ))}
        </div>

        <div style={{ width: "84.5%" }}>
          <Divider variant="fullWidth" style={{ height: 2 }} />
        </div>
        <CardSix />
      </div>
    </div>
  );
}
