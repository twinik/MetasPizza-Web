import React, { useState, useEffect, useRef } from "react";

import styles from "./ClaimScreen.module.css";

const unitPrice = 0.0777;

const preSaleMaxSupply = 1000;
const preSaleMaxPerTx = 3;

const publicSaleMaxSupply = 3333;
const publicSaleMaxPerTx = 7;

//timer functions

const handlePreSaleTimeLeft = () => {
  let date = new Date();
  let now_utc = Date.UTC(
    date.getUTCFullYear(),
    date.getUTCMonth(),
    date.getUTCDate(),
    date.getUTCHours(),
    date.getUTCMinutes(),
    date.getUTCSeconds()
  );
  let difference = +new Date(Date.UTC(2022, 0, 8, 20, 0, 0)) - +now_utc;
  let timeLeft = {};

  if (difference > 0) {
    timeLeft = {
      days: Math.floor(difference / (1000 * 60 * 60 * 24)),
      hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
      minutes: Math.floor((difference / 1000 / 60) % 60),
      seconds: Math.floor((difference / 1000) % 60),
      difference: true,
    };
  } else {
    timeLeft = {
      days: 0,
      hours: 0,
      minutes: 0,
      seconds: 0,
      difference: false,
    };
  }

  return timeLeft;
};

const handlePublicSaleStart = () => {
  let date = new Date();
  let now_utc = Date.UTC(
    date.getUTCFullYear(),
    date.getUTCMonth(),
    date.getUTCDate(),
    date.getUTCHours(),
    date.getUTCMinutes(),
    date.getUTCSeconds()
  );
  let difference = +new Date(Date.UTC(2022, 0, 8, 21, 0, 0)) - +now_utc;
  let timeLeft = {};

  if (difference > 0) {
    timeLeft = {
      days: Math.floor(difference / (1000 * 60 * 60 * 24)),
      hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
      minutes: Math.floor((difference / 1000 / 60) % 60),
      seconds: Math.floor((difference / 1000) % 60),
      difference: true,
    };
  } else {
    timeLeft = {
      days: 0,
      hours: 0,
      minutes: 0,
      seconds: 0,
      difference: false,
    };
  }

  return timeLeft;
};

export default function Claim() {
  return (
    <div className={styles["mint"]}>
      <video
        className={styles["mint-gif"]}
        autoPlay="autoplay"
        loop
        muted
        playsInline
      >
        <source src={"/images/JoeBiden.webm"} type="video/webm" />
        <source src={"/images/JoeBiden.mp4"} type="video/mp4" />
      </video>
      <div className={styles["claim-text-wrapper"]}>
        <div className={styles["payment-modal"]}>
          <div className={styles["payment-header"]}>
            <div className={styles["payment-header-text"]}>
              <h4>BUY YOUR VILLAIN NFT</h4>
              <p className={styles["pt-1.5 italic-grey"]}>
                Total supply: 1.500 NFTs
              </p>
            </div>
          </div>
          <div className={styles["payment-info"]}>
            <video
              className={styles["price-img"]}
              autoPlay="autoplay"
              loop
              muted
              playsInline
            >
              <source src={"/images/JoeBiden.webm"} type="video/webm" />
              <source src={"/images/JoeBiden.mp4"} type="video/mp4" />
            </video>
            <div className={styles["payment-info-text"]}>
              <p>Price Per NFT</p>
              <h5>{unitPrice} ETH + gas</h5>
              <p className={styles["launch-date"]}>Coming soon</p>
            </div>
          </div>
          <div className={styles["ape-number"]}>
            <div className={styles["minus"]}>
              <svg
                width="16"
                height="2"
                viewBox="0 0 16 2"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M15 0H1C0.734784 0 0.48043 0.105357 0.292893 0.292893C0.105357 0.48043 0 0.734784 0 1C0 1.26522 0.105357 1.51957 0.292893 1.70711C0.48043 1.89464 0.734784 2 1 2H15C15.2652 2 15.5196 1.89464 15.7071 1.70711C15.8946 1.51957 16 1.26522 16 1C16 0.734784 15.8946 0.48043 15.7071 0.292893C15.5196 0.105357 15.2652 0 15 0Z"
                  fill="black"
                />
              </svg>
            </div>
            <h5>1</h5>
            <div className={styles["plus"]}>
              <svg
                width="16"
                height="16"
                viewBox="0 0 16 16"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M15 7H9V1C9 0.734784 8.89464 0.48043 8.70711 0.292893C8.51957 0.105357 8.26522 0 8 0C7.73478 0 7.48043 0.105357 7.29289 0.292893C7.10536 0.48043 7 0.734784 7 1V7H1C0.734784 7 0.48043 7.10536 0.292893 7.29289C0.105357 7.48043 0 7.73478 0 8C0 8.26522 0.105357 8.51957 0.292893 8.70711C0.48043 8.89464 0.734784 9 1 9H7V15C7 15.2652 7.10536 15.5196 7.29289 15.7071C7.48043 15.8946 7.73478 16 8 16C8.26522 16 8.51957 15.8946 8.70711 15.7071C8.89464 15.5196 9 15.2652 9 15V9H15C15.2652 9 15.5196 8.89464 15.7071 8.70711C15.8946 8.51957 16 8.26522 16 8C16 7.73478 15.8946 7.48043 15.7071 7.29289C15.5196 7.10536 15.2652 7 15 7Z"
                  fill="black"
                />
              </svg>
            </div>
            <h5 className={styles["ape-max"]}>7 Max</h5>
          </div>
          <div className={styles["ape-total"]}>
            <p>Total</p>
            <h5>{unitPrice} ETH + gas</h5>
          </div>

          <button className={styles["purchase-button"]}>Connect wallet</button>
        </div>
      </div>
    </div>
  );
}
