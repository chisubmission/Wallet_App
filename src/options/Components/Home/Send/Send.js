import React, { useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faArrowRight,
  faPaperPlane,
  faQrcode,
  faQuestionCircle,
  faSearch,
  faTimes,
  faChevronDown,
  faCheck,
} from "@fortawesome/free-solid-svg-icons";
import Modal from "react-modal";
import "./Send.css";
import Eth from "../../../../assets/images/628px-Ethereum_logo_2014.svg.png";
import usd from "../../../../assets/images/usdicon.png";
import warningImg from "../../../../assets/images/caution-yellow-noborer.png";
import video7 from "../../../../assets/videos/What is Ethereum Gas_ Ethereum Gas Explained.mp4";
import { useState } from "react";
import userIcon from "../../../../assets/images/950771.png";
import userIcon2 from "../../../../assets/images/avatar+circle+male+profile+user+icon-1320196710301016992.png";
import axios from "axios";
import moment from "moment";
import { useDispatch } from "react-redux";
import { showBalance } from "./../Redux/Actions/BalanceAction";
import finishImg from "../../../../assets/images/finishImg.svg";
import SelfFocus from "react-selffocus-element";

// Modal Custom css
const popupStyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
    width: "800px",
    height: "auto",
    padding: "0",
    overflowX: "hidden",
  },
};

const Send = () => {
  const [modalIsOpen, setIsOpen] = React.useState(false);
  const [finish, setFinish] = useState(false);

  function openModal() {
    setIsOpen(true);
  }
  function closeModal() {
    setIsOpen(false);
  }

  const [selectUsersName, setSelectUsersName] = useState([]);

  // Function for search user
  const SearchUserHandler = () => {};

  // Function for search input onchange handler
  const handleChange = (e) => {
    const ethereumGasContainer = document.querySelector(
      ".ethereum-gas-container"
    );
    const sendModalContainer = document.querySelector(".send-modal-container");
    const ethAssetsSendSelectEthContainer = document.querySelector(
      ".ethAssets-sendSelectEth-container"
    );

    if (e.target.value.length >= 25) {
      sendModalContainer.style.display = "none";
      ethAssetsSendSelectEthContainer.style.display = "block";

      setSelectUsersName(e.target.value);
      e.target.value = "";
    }
  };

  const [searchUser, setSearchUser] = React.useState([]);
  const addUser = (user) => {
    if (!user.userName || /^\s*$/.test(user.userName)) {
      return;
    }
    const newUsers = [user, ...searchUser];
    setSearchUser(newUsers);

    console.log(...searchUser);
  };

  // Function for faucet click handler
  const faucetHandler = (e) => {
    const ethereumGasContainer = document.querySelector(
      ".ethereum-gas-container"
    );
    const sendModalContainer = document.querySelector(".send-modal-container");
    const faucetUserName = document.querySelector(".faucet-userName").innerText;

    sendModalContainer.style.display = "none";
    ethereumGasContainer.style.display = "block";

    setSelectUsersName(faucetUserName);
  };

  const [ETHBalance, setETHBalance] = useState("7");
  const [USDBalance, setUSDBalance] = useState("20145");

  const [selectedEthAmount, setSelectedEthAmount] = useState("");

  // Function for continue button handler
  const continueHandler = () => {
    const warningContainer = document.querySelector(".warning-container");

    const AmountInputValue = document.getElementById("AmountInput").value;
    const newAmountInputValue = parseFloat(AmountInputValue);

    if (!newAmountInputValue) return;
    warningContainer.style.display = "block";
    const ethAssetsSendSelectEthContainer = document.querySelector(
      ".ethAssets-sendSelectEth-container"
    );
    ethAssetsSendSelectEthContainer.style.display = "none";
    //==

    // const ethAssetsSendSelectEthContainer = document.querySelector(
    //   ".ethAssets-sendSelectEth-container"
    // );
    // const ethereumGasContainer = document.querySelector(
    //   ".ethereum-gas-container"
    // );
    // const AmountInputValue = document.getElementById("AmountInput").value;

    // const newAmountInputValue = parseFloat(AmountInputValue);

    // if (newAmountInputValue) {
    //   ethAssetsSendSelectEthContainer.style.display = "none";
    //   ethereumGasContainer.style.display = "block";
    // }
    // setSelectedEthAmount(newAmountInputValue);
  };

  const [selectedEth, setSelectedEth] = useState("");
  const [lowTotal, setLowTotal] = useState("");
  const [gasFee, setGasFee] = useState("");

  const [mediumTotal, setMediumTotal] = useState("");
  const [highTotal, setHighTotal] = useState("");
  const [lowMaxTotal, setLowMaxTotal] = useState("");

  // Function for select eth balance number handler and set state
  const SelectEthNumberHandler = (e) => {
    const SelectEthNumber = document.getElementById("AmountInput");

    const num = /[^0-9]/gi;
    SelectEthNumber.value = SelectEthNumber.value.replace(num, "");

    const newSelectEth = parseFloat(SelectEthNumber.value);
    setSelectedEth(newSelectEth);

    const lowGasFee = document.querySelector(".low-gas-fee");
    const mediumGasFee = document.querySelector(".medium-gas-fee");
    const highGasFee = document.querySelector(".high-gas-fee");
    const lowMaxFee = document.querySelector(".low-max-fee");

    setGasFee("0.000022");

    const newLowGasFee = parseFloat(lowGasFee.innerHTML);
    const newMediumGasFee = parseFloat(mediumGasFee.innerHTML);
    const newHighGasFee = parseFloat(highGasFee.innerHTML);
    const newLowMaxFee = parseFloat(lowMaxFee.innerHTML);

    const lowTotalCost = newSelectEth + newLowGasFee;
    const lowMaxTotalCost = newSelectEth + newLowMaxFee;
    const mediumTotalCost = newSelectEth + newMediumGasFee;
    const highTotalCost = newSelectEth + newHighGasFee;

    setLowTotal(lowTotalCost);

    setMediumTotal(mediumTotalCost);
    setHighTotal(highTotalCost);
    setLowMaxTotal(lowMaxTotalCost);

    const assetNameSelect = document.querySelector(".assetNameSelect");
    const ethereumBalance =
      document.querySelector(".ethereumBalance").innerHTML;
    const usdBalance = document.querySelector(".usdBalance").innerHTML;

    const afterParseEthBalance = parseFloat(ethereumBalance);
    const afterParseUsdBalance = parseFloat(usdBalance);

    if (assetNameSelect.value === "Not set") {
      if (afterParseEthBalance < newSelectEth) {
        SelectEthNumber.value = "";
      }
    }
    if (assetNameSelect.value === "ETH") {
      if (afterParseEthBalance < newSelectEth) {
        SelectEthNumber.value = "";
      }
    }
    if (assetNameSelect.value === "USD") {
      if (afterParseUsdBalance < newSelectEth) {
        SelectEthNumber.value = "";
      }
    }
  };

  const [total, setTotal] = useState("");
  const [maxTotal, setMaxTotal] = useState("");

  // Function for a low gas fee and limit handler of the progress bar
  const lowHandler = () => {
    const lowBullets = document.querySelector(".low");
    const mediumBullets = document.querySelector(".medium");
    const highBullets = document.querySelector(".high");
    const lowName = document.querySelector(".lowName");
    const mediumName = document.querySelector(".mediumName");
    const highName = document.querySelector(".highName");
    const stepperItem2 = document.querySelector(".stepper-item2");
    const stepperItem3 = document.querySelector(".stepper-item3");
    const l = document.querySelector(".l");
    const av = document.querySelector(".av");
    const h = document.querySelector(".h");

    lowBullets.style.backgroundColor = "#037dd6";
    mediumBullets.style.backgroundColor = "";
    highBullets.style.backgroundColor = "";
    stepperItem2.classList.remove("completedNext");
    stepperItem3.classList.remove("completedNext");

    lowName.style.fontWeight = "700";
    mediumName.style.fontWeight = "";
    highName.style.fontWeight = "";

    const lowGasFee = document.querySelector(".low-gas-fee");
    const mediumGasFee = document.querySelector(".medium-gas-fee");
    const highGasFee = document.querySelector(".high-gas-fee");
    const lowMaxFee = document.querySelector(".low-max-fee");
    const mediumMaxFee = document.querySelector(".medium-max-fee");
    const highMaxFee = document.querySelector(".high-max-fee");
    const lowMaxFeeGwei = document.querySelector(".low-max-fee-gwei");
    const mediumMaxFeeGwei = document.querySelector(".medium-max-fee-gwei");
    const highMaxFeeGwei = document.querySelector(".high-max-fee-gwei");
    const lowTransactionTime = document.querySelector(".low-transaction-time");
    const mediumTransactionTime = document.querySelector(
      ".medium-transaction-time"
    );
    const highTransactionTime = document.querySelector(
      ".high-transaction-time"
    );
    const lowTotalEth = document.querySelector(".lowTotalEth");
    const AllTotalEth = document.querySelector(".AllTotalEth");
    const lowMaxTotalEth = document.querySelector(".lowMaxTotalEth");
    const AllMaxTotalEth = document.querySelector(".AllMaxTotalEth");

    setGasFee("0.000022");

    lowGasFee.style.display = "block";
    mediumGasFee.style.display = "none";
    highGasFee.style.display = "none";

    lowMaxFee.style.display = "block";
    mediumMaxFee.style.display = "none";
    highMaxFee.style.display = "none";

    lowMaxFeeGwei.style.display = "block";
    mediumMaxFeeGwei.style.display = "none";
    highMaxFeeGwei.style.display = "none";

    lowTransactionTime.style.display = "block";
    mediumTransactionTime.style.display = "none";
    highTransactionTime.style.display = "none";

    lowTotalEth.style.display = "none";
    AllTotalEth.style.display = "block";

    lowMaxTotalEth.style.display = "none";
    AllMaxTotalEth.style.display = "block";

    l.style.display = "block";
    av.style.display = "none";
    h.style.display = "none";

    const newLowGasFee = parseFloat(lowGasFee.innerHTML);
    const newLowMaxFee = parseFloat(lowMaxFee.innerHTML);

    const lowTotalCost = selectedEth + newLowGasFee;
    const lowMaxTotalCost = selectedEth + newLowMaxFee;

    setTotal(lowTotalCost);
    setMaxTotal(lowMaxTotalCost);
  };

  // Function for a medium gas fee and limit handler of the progress bar
  const mediumHandler = () => {
    const lowBullets = document.querySelector(".low");
    const mediumBullets = document.querySelector(".medium");
    const highBullets = document.querySelector(".high");
    const lowName = document.querySelector(".lowName");
    const mediumName = document.querySelector(".mediumName");
    const highName = document.querySelector(".highName");
    const stepperItem2 = document.querySelector(".stepper-item2");
    const stepperItem3 = document.querySelector(".stepper-item3");
    const l = document.querySelector(".l");
    const av = document.querySelector(".av");
    const h = document.querySelector(".h");

    mediumBullets.style.backgroundColor = "#037dd6";
    highBullets.style.backgroundColor = "";
    stepperItem2.classList.add("completedNext");
    stepperItem3.classList.remove("completedNext");

    lowName.style.fontWeight = "400";
    mediumName.style.fontWeight = "700";
    highName.style.fontWeight = "";

    const lowGasFee = document.querySelector(".low-gas-fee");
    const mediumGasFee = document.querySelector(".medium-gas-fee");
    const highGasFee = document.querySelector(".high-gas-fee");
    const lowMaxFee = document.querySelector(".low-max-fee");
    const mediumMaxFee = document.querySelector(".medium-max-fee");
    const highMaxFee = document.querySelector(".high-max-fee");
    const lowMaxFeeGwei = document.querySelector(".low-max-fee-gwei");
    const mediumMaxFeeGwei = document.querySelector(".medium-max-fee-gwei");
    const highMaxFeeGwei = document.querySelector(".high-max-fee-gwei");
    const lowTransactionTime = document.querySelector(".low-transaction-time");
    const mediumTransactionTime = document.querySelector(
      ".medium-transaction-time"
    );
    const highTransactionTime = document.querySelector(
      ".high-transaction-time"
    );
    const lowTotalEth = document.querySelector(".lowTotalEth");
    const AllTotalEth = document.querySelector(".AllTotalEth");
    const lowMaxTotalEth = document.querySelector(".lowMaxTotalEth");
    const AllMaxTotalEth = document.querySelector(".AllMaxTotalEth");

    setGasFee("0.000032");

    lowGasFee.style.display = "none";
    mediumGasFee.style.display = "block";
    highGasFee.style.display = "none";

    lowMaxFee.style.display = "none";
    mediumMaxFee.style.display = "block";
    highMaxFee.style.display = "none";

    lowMaxFeeGwei.style.display = "none";
    mediumMaxFeeGwei.style.display = "block";
    highMaxFeeGwei.style.display = "none";

    lowTransactionTime.style.display = "none";
    mediumTransactionTime.style.display = "block";
    highTransactionTime.style.display = "none";

    lowTotalEth.style.display = "none";
    AllTotalEth.style.display = "block";

    lowMaxTotalEth.style.display = "none";
    AllMaxTotalEth.style.display = "block";

    l.style.display = "none";
    av.style.display = "block";
    h.style.display = "none";

    const newMediumGasFee = parseFloat(mediumGasFee.innerHTML);
    const newMediumMaxFee = parseFloat(mediumMaxFee.innerHTML);

    const mediumTotalCost = selectedEth + newMediumGasFee;
    const mediumMaxTotalCost = selectedEth + newMediumMaxFee;

    setTotal(mediumTotalCost);
    setMaxTotal(mediumMaxTotalCost);
  };

  // Function for a high gas fee and limit handler of the progress bar
  const highHandler = () => {
    const lowBullets = document.querySelector(".low");
    const mediumBullets = document.querySelector(".medium");
    const highBullets = document.querySelector(".high");
    const lowName = document.querySelector(".lowName");
    const mediumName = document.querySelector(".mediumName");
    const highName = document.querySelector(".highName");
    const stepperItem2 = document.querySelector(".stepper-item2");
    const stepperItem3 = document.querySelector(".stepper-item3");
    const l = document.querySelector(".l");
    const av = document.querySelector(".av");
    const h = document.querySelector(".h");

    highBullets.style.backgroundColor = "#037dd6";
    mediumBullets.style.backgroundColor = "#037dd6";
    stepperItem2.classList.add("completedNext");
    stepperItem3.classList.add("completedNext");

    lowName.style.fontWeight = "400";
    mediumName.style.fontWeight = "";
    highName.style.fontWeight = "700";

    const lowGasFee = document.querySelector(".low-gas-fee");
    const mediumGasFee = document.querySelector(".medium-gas-fee");
    const highGasFee = document.querySelector(".high-gas-fee");
    const lowMaxFee = document.querySelector(".low-max-fee");
    const mediumMaxFee = document.querySelector(".medium-max-fee");
    const highMaxFee = document.querySelector(".high-max-fee");
    const lowMaxFeeGwei = document.querySelector(".low-max-fee-gwei");
    const mediumMaxFeeGwei = document.querySelector(".medium-max-fee-gwei");
    const highMaxFeeGwei = document.querySelector(".high-max-fee-gwei");
    const lowTransactionTime = document.querySelector(".low-transaction-time");
    const mediumTransactionTime = document.querySelector(
      ".medium-transaction-time"
    );
    const highTransactionTime = document.querySelector(
      ".high-transaction-time"
    );
    const lowTotalEth = document.querySelector(".lowTotalEth");
    const AllTotalEth = document.querySelector(".AllTotalEth");
    const lowMaxTotalEth = document.querySelector(".lowMaxTotalEth");
    const AllMaxTotalEth = document.querySelector(".AllMaxTotalEth");

    setGasFee("0.000042");

    lowGasFee.style.display = "none";
    mediumGasFee.style.display = "none";
    highGasFee.style.display = "block";

    lowMaxFee.style.display = "none";
    mediumMaxFee.style.display = "none";
    highMaxFee.style.display = "block";

    lowMaxFeeGwei.style.display = "none";
    mediumMaxFeeGwei.style.display = "none";
    highMaxFeeGwei.style.display = "block";

    lowTransactionTime.style.display = "none";
    mediumTransactionTime.style.display = "none";
    highTransactionTime.style.display = "block";

    lowTotalEth.style.display = "none";
    AllTotalEth.style.display = "block";
    lowMaxTotalEth.style.display = "none";
    AllMaxTotalEth.style.display = "block";

    l.style.display = "none";
    av.style.display = "none";
    h.style.display = "block";

    const newHighGasFee = parseFloat(highGasFee.innerHTML);
    const newHighMaxFee = parseFloat(highMaxFee.innerHTML);

    const highTotalCost = selectedEth + newHighGasFee;
    const highMaxTotalCost = selectedEth + newHighMaxFee;

    setTotal(highTotalCost);
    setMaxTotal(highMaxTotalCost);
  };

  // Function for assets name selection handler
  const assetNameHandler = (e) => {
    const BalanceUsd = document.querySelector(".balance-usd");
    const BalanceEth = document.querySelector(".balance-eth");
    const assetNameSelect = document.querySelector(".assetNameSelect");
    const UsdIcon = document.querySelector(".usd-icon");
    const amountUsdTitle = document.querySelector(".amount-usd-title");
    const amountEthTitle = document.querySelector(".amount-eth-title");
    const selectedAmountEthTitle = document.querySelector(
      ".selected-amount-eth-title"
    );
    const selectedAmountUsdTitle = document.querySelector(
      ".selected-amount-usd-title"
    );
    const ethAmountIcon = document.querySelector(".ethAmount-icon");
    const selectedEthIcon = document.querySelector(".selected-eth-icon");
    const selectedUsdIcon = document.querySelector(".selected-usd-icon");
    const lowTotalTitle = document.querySelector(".lowTotalTitle");
    const allTotalTitle = document.querySelector(".allTotalTitle");
    const lowMaxTotalTitle = document.querySelector(".lowMaxTotalTitle");
    const allMaxTotalTitle = document.querySelector(".allMaxTotalTitle");

    const AmountInput = document.getElementById("AmountInput");
    const ethereumBalance =
      document.querySelector(".ethereumBalance").innerHTML;
    const usdBalance = document.querySelector(".usdBalance").innerHTML;

    const newEthereumBalance = parseFloat(ethereumBalance);
    const newUsdBalance = parseFloat(usdBalance);

    if (assetNameSelect.value === "USD") {
      BalanceUsd.style.display = "block";
      BalanceEth.style.display = "none";
      UsdIcon.style.display = "block";
      amountUsdTitle.style.display = "block";
      selectedAmountUsdTitle.style.display = "block";
      ethAmountIcon.style.display = "none";
      amountEthTitle.style.display = "none";
      selectedAmountEthTitle.style.display = "none";
      selectedEthIcon.style.display = "none";
      selectedUsdIcon.style.display = "block";

      lowTotalTitle.innerHTML = "USD";
      allTotalTitle.innerHTML = "USD";
      lowMaxTotalTitle.innerHTML = "USD";
      allMaxTotalTitle.innerHTML = "USD";

      // let maxed = false;
      // if(!maxed){
      //   maxed = true;
      //   AmountInput.value = newUsdBalance;
      // }
      AmountInput.value = "";
    } else if (assetNameSelect.value === "ETH") {
      BalanceUsd.style.display = "none";
      BalanceEth.style.display = "block";
      UsdIcon.style.display = "none";
      amountUsdTitle.style.display = "none";
      selectedAmountUsdTitle.style.display = "none";
      ethAmountIcon.style.display = "block";
      amountEthTitle.style.display = "block";
      selectedAmountEthTitle.style.display = "block";
      selectedEthIcon.style.display = "block";
      selectedUsdIcon.style.display = "none";

      lowTotalTitle.innerHTML = "ETH";
      allTotalTitle.innerHTML = "ETH";
      lowMaxTotalTitle.innerHTML = "ETH";
      allMaxTotalTitle.innerHTML = "ETH";

      // let maxed = false;
      // if(!maxed){
      //   maxed = true;
      //   AmountInput.value = newEthereumBalance;
      // }
      AmountInput.value = "";
    } else if (assetNameSelect.value === "Not set") {
      BalanceUsd.style.display = "none";
      BalanceEth.style.display = "block";
      UsdIcon.style.display = "none";
      amountUsdTitle.style.display = "none";
      selectedAmountUsdTitle.style.display = "none";
      ethAmountIcon.style.display = "block";
      amountEthTitle.style.display = "block";
      selectedAmountEthTitle.style.display = "block";
      selectedEthIcon.style.display = "block";
      selectedUsdIcon.style.display = "none";

      lowTotalTitle.innerHTML = "ETH";
      allTotalTitle.innerHTML = "ETH";
      lowMaxTotalTitle.innerHTML = "ETH";
      allMaxTotalTitle.innerHTML = "ETH";

      AmountInput.value = "";
    }
  };

  // Function for max button handler with max selection
  const maxBtnHandler = () => {
    const ethereumBalance =
      document.querySelector(".ethereumBalance").innerHTML;
    const usdBalance = document.querySelector(".usdBalance").innerHTML;
    const AmountInput = document.getElementById("AmountInput");
    const assetNameSelect = document.querySelector(".assetNameSelect");

    const newEthereumBalance = parseFloat(ethereumBalance);
    const newUsdBalance = parseFloat(usdBalance);

    if (assetNameSelect.value === "ETH") {
      const selectedEthBalance = (AmountInput.value = newEthereumBalance);

      const lowGasFee = document.querySelector(".low-gas-fee");
      const lowMaxFee = document.querySelector(".low-max-fee");

      const newLowGasFee = parseFloat(lowGasFee.innerHTML);
      const newLowMaxFee = parseFloat(lowMaxFee.innerHTML);

      const lowTotalCost = selectedEthBalance + newLowGasFee;
      const lowMaxTotalCost = selectedEthBalance + newLowMaxFee;

      setLowTotal(lowTotalCost);
      setLowMaxTotal(lowMaxTotalCost);
      setSelectedEth(selectedEthBalance);
    } else if (assetNameSelect.value === "USD") {
      const selectedMaxBalance = (AmountInput.value = newUsdBalance);

      const lowGasFee = document.querySelector(".low-gas-fee");
      const lowMaxFee = document.querySelector(".low-max-fee");

      const newLowGasFee = parseFloat(lowGasFee.innerHTML);
      const newLowMaxFee = parseFloat(lowMaxFee.innerHTML);

      const lowTotalCost = selectedMaxBalance + newLowGasFee;
      const lowMaxTotalCost = selectedMaxBalance + newLowMaxFee;

      setLowTotal(lowTotalCost);
      setLowMaxTotal(lowMaxTotalCost);
      setSelectedEth(selectedMaxBalance);
    }
  };

  // Function for advance option show handler
  const advancedOptionsShowHandler = () => {
    console.log("advancedOptionsShowHandler");
    const GasLimitMpFeeContainer = document.querySelector(
      ".Gas-limit-mp-fee-container"
    );

    if (GasLimitMpFeeContainer.style.display === "none") {
      GasLimitMpFeeContainer.style.display = "block";
    } else {
      GasLimitMpFeeContainer.style.display = "none";
    }
  };

  // Function for Reject button
  const backHandler = () => {
    const ethAssetsSendSelectEthContainer = document.querySelector(
      ".ethAssets-sendSelectEth-container"
    );
    const ethereumGasContainer = document.querySelector(
      ".ethereum-gas-container"
    );

    ethAssetsSendSelectEthContainer.style.display = "block";
    ethereumGasContainer.style.display = "none";
  };

  // Function for Confirm button
  const handleWarningNext = (next) => {
    console.log("handleWarningNExt");
    const ethereumGasContainer = document.querySelector(
      ".ethereum-gas-container"
    );
    const warningContainer = document.querySelector(".warning-container");

    ethereumGasContainer.style.display = next ? "block" : "none";
    warningContainer.style.display = next ? "none" : "block";
  };

  const nextHandler = () => {
    console.log("nextHandler");
    const ethereumGasContainer = document.querySelector(
      ".ethereum-gas-container"
    );
    const warningContainer = document.querySelector(".warning-container");

    ethereumGasContainer.style.display = "block";
    warningContainer.style.display = "none";
  };

  // Function for warning Reject button
  const warningCancelBtnHandler = () => {
    const warningContainer = document.querySelector(".warning-container");
    const ethAssetsSendSelectEthContainer = document.querySelector(
      ".ethAssets-sendSelectEth-container"
    );

    warningContainer.style.display = "none";
    ethAssetsSendSelectEthContainer.style.display = "block";
  };

  // Function for warning check box handling
  const warningCheckBoxHandler = () => {
    const warningConfirmBtnOverlay = document.querySelector(
      ".warningConfirmBtn-overlay"
    );
    if (lastFourValid) warningConfirmBtnOverlay.style.display = "none";
  };

  const transactionHistorySave = (e) => {
    const ethereumGasContainer = document.querySelector(
      ".ethereum-gas-container"
    );

    ethereumGasContainer.style.display = "none";
    setFinish(true);

    const ETHRemaining = ETHBalance - selectedEth;
    const USDRemaining = USDBalance - selectedEth;

    setETHBalance(ETHRemaining - gasFee);
    setUSDBalance(USDRemaining - gasFee);

    const transactionHistory = {
      date: moment().format("ll"),
      senderId: "0x3d4a109736D6b5436bc61321c93a43C0A21F02E1",
      receiverId: selectUsersName,
      amount: selectedEth,
      EstimatedGasFee: gasFee,
      GasLimit: "-37 GWEI",
      MaxPriorityFee: "-37 GWEI",
      MaxFee: "0.000045 GWEI",
      Eth: ETHRemaining - gasFee,
      Usd: USDRemaining - gasFee,
    };

    axios
      .post(
        "https://protected-gorge-73198.herokuapp.com/addTransactionHistory",
        transactionHistory
      )
      .then((res) => {
        console.log("done");
      });
  };

  const ETHRemaining = ETHBalance - selectedEth;
  const USDRemaining = USDBalance - selectedEth;

  const dispatchingData = {
    Eth: ETHRemaining - gasFee,
    Usd: USDRemaining - gasFee,
  };

  const dispatch = useDispatch();
  const [lastFour, setLastFour] = useState("");
  const [lastFourValid, setLastFourValid] = useState(false);

  const handleLastFourInput = (e) => {
    setLastFour(e.target.value);
  };

  useEffect(() => {
    if (lastFour === selectUsersName.toString().slice(-4)) {
      setLastFourValid(true);
      return;
    }
    setLastFourValid(false);
  }, [lastFour]);
  return (
    <>
      {finish && (
        <div className="finishPopup">
          <img src={finishImg} alt="" />
          <SelfFocus>
            <span className="success-text">
              Your transaction has been submitted.
            </span>
            <button
              className="finishButton"
              onClick={() => {
                setFinish(false);
                setIsOpen(false);
              }}
            >
              Finish
            </button>
          </SelfFocus>
        </div>
      )}
      <div className="buy-send-swap text-center">
        <div onClick={openModal} className="send">
          <FontAwesomeIcon className="icons" icon={faPaperPlane} />
        </div>
        <p aria-label="Button. Send">Send</p>
      </div>
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        style={popupStyles}
        contentLabel="Import Modal"
      >
        {/* Modal content of Add recipient container start */}
        <div className="send-modal-container">
          <div className="send-modal-header d-flex">
            <div className="send-header-input">
              {/* <SearchForm onSubmit={addUser}/> */}
              <div>
                <SelfFocus>
                  <h5 tabIndex={0}>Add Recipient</h5>
                </SelfFocus>

                {/* Search input form */}
                <form onSubmit={SearchUserHandler}>
                  <button type="submit">
                    <FontAwesomeIcon className="search-icon" icon={faSearch} />
                  </button>
                  <input
                    type="text"
                    name="Search"
                    id="Search"
                    onChange={handleChange}
                    placeholder="Search, public address (0x), or ENS"
                    required
                  />
                  <FontAwesomeIcon className="qrcode-icon" icon={faQrcode} />
                </form>
              </div>
            </div>

            <span className="send-modal-close" onClick={closeModal}>
              cancel
            </span>
          </div>
          <div className="f">
            <small>F</small>
          </div>

          <div className="faucet-container">
            {searchUser.map((su, index) => {
              return (
                <li className="d-flex">
                  <div onClick={faucetHandler} className="faucet">
                    <div className="faucet-profile-img"></div>
                    <div className="faucet-text">
                      <h6>
                        <span className="faucet-userName">{su.userName}</span>{" "}
                        <br />{" "}
                        <span>
                          <small>0x81b7...7647</small>
                        </span>
                      </h6>
                    </div>
                  </div>
                </li>
              );
            })}
          </div>

          <div className="faucet-footer">
            <div class="row">
              <div className="col-md-4">
                <a href="">
                  {" "}
                  <h6>Public Address</h6>
                </a>
                <small>
                  A public address is just like a bank account number, the place
                  you want to send/receive your crypto.
                </small>
              </div>
              <div className="col-md-4">
                <h6>Recipient</h6>
                <small>
                  Anyone can receive cryptocurrency whether it's
                  friends/relative, a business, or a person from across the
                  globe that you have never met before.
                </small>
              </div>
              <div className="col-md-4">
                <a href="">
                  <h6>Ethereum Name Service (ENS)</h6>
                </a>
                <small>
                  ENS is a way to shorten an address into a name to avoid any
                  mistaken transactions, like how a website's domain name(Ex:
                  youtube.com) is used instead of its IP address.
                </small>
              </div>
            </div>
          </div>
        </div>
        {/* Modal content of Add recipient container end */}

        {/* Modal Content of Eth Assets select and send amount select container start*/}
        <div className="ethAssets-sendSelectEth-container">
          <div className="ethAssets-sendSelectEth-header">
            <div className="faucet-id-container mb-3">
              <div className="faucet-id-header d-flex">
                <SelfFocus aria-label="send">
                  <h6 tabIndex={0} aria-label="Send">
                    Send
                  </h6>
                </SelfFocus>
                <p
                  onClick={closeModal}
                  className="faucet-ethAssets-sendSelectEth-container-close"
                >
                  close
                </p>
              </div>
              <div className="faucet-id-box">
                <div
                  className="faucet-id-content d-flex"
                  aria-label={`Faucet. ${selectUsersName}. *For your security, remember the last 4 digits of the recipient’s address.`}
                >
                  <p className="f-name">
                    Faucet <br />{" "}
                    <span className="f-id">
                      {selectUsersName
                        ? selectUsersName
                            .toString()
                            .replace(selectUsersName.toString().slice(-4), "")
                        : ""}
                      <span className="lastFour">
                        {selectUsersName.toString().slice(-4)}
                      </span>
                    </span>
                  </p>

                  <p onClick={closeModal} className="f-close-timesIcons">
                    <FontAwesomeIcon icon={faTimes} />
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Eth Assets select and send amount select container */}
          <div className="ethAssets-sendSelectEthAmount">
            <div
              className="warning-txt"
              aria-label="*For your security, remember the last 4 digits of the recipient’s address."
            >
              *For your security, remember the last 4 digits of the recipient’s
              address.
            </div>
            <div className="row">
              <div className="col-md-6">
                <div className="ethAssets">
                  <h6>Assets:</h6>
                  <div className="eth-balance-select-container d-flex align-items-center">
                    {/* Eth balance container */}
                    <div className="balance-eth">
                      <div className="d-flex align-items-center">
                        <div>
                          <img width="20px" src={Eth} alt="" />
                        </div>
                        <div>
                          <p>
                            ETH <br />{" "}
                            <span>
                              Balance:{" "}
                              <span className="ethereumBalance">
                                {ETHBalance}
                              </span>{" "}
                              ETH
                            </span>
                          </p>
                        </div>
                      </div>
                    </div>

                    {/* Usd balance container */}
                    <div className="balance-usd">
                      <div className="d-flex align-items-center">
                        <div>
                          <img width="22px" src={usd} alt="" />
                        </div>
                        <div>
                          <p>
                            USD <br />{" "}
                            <span>
                              Balance:{" "}
                              <span className="usdBalance">{USDBalance}</span>{" "}
                              USD
                            </span>
                          </p>
                        </div>
                      </div>
                    </div>

                    {/* Select asset name container */}
                    <div className="selectAsset-name">
                      <select
                        onClick={assetNameHandler}
                        className="assetNameSelect"
                        name="assetName"
                        aria-label="Select Asset"
                      >
                        <option value="Not set">Select</option>
                        <option value="ETH">ETH</option>
                        <option value="USD">USD</option>
                      </select>
                    </div>
                  </div>
                </div>
              </div>

              <div className="col-md-6">
                <div className="SelectEthAmount">
                  <h6>Amount:</h6>

                  <div className="eth-amount-max d-flex align-items-center">
                    <div className="amount-eth">
                      <div className="amount-eth d-flex align-items-center">
                        <div>
                          <img
                            className="ethAmount-icon"
                            width="20px"
                            src={Eth}
                            alt=""
                          />
                          <img
                            className="usd-icon"
                            width="22px"
                            src={usd}
                            alt=""
                          />
                        </div>

                        {/* Amount select input div */}
                        <div>
                          <p className="d-flex">
                            <input
                              type="text"
                              name="Amount"
                              id="AmountInput"
                              onChange={SelectEthNumberHandler}
                              placeholder="0.00"
                              required
                            />
                            <span className="amount-eth-title">ETH</span>
                            <span className="amount-usd-title">USD</span>
                          </p>
                        </div>
                      </div>
                    </div>
                    <button
                      onClick={maxBtnHandler}
                      id="maxBtn"
                      type=""
                      aroa-label="Max. button."
                    >
                      Max
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="d-flex justify-content-center">
            <button onClick={continueHandler} id="sendEthContinueBtn" type="">
              Continue
            </button>
          </div>
        </div>
        {/* Modal Content of Eth Assets select and send amount select container end */}

        {/* Modal content of Ethereum gas price and limit container start */}
        <div className="ethereum-gas-container">
          <div class="row">
            <div className="col-md-6">
              <SelfFocus>
                <div className="what-ethereum-gas-video">
                  <video
                    controls
                    style={{
                      borderRadius: "5px",
                      width: "350px",
                      height: "auto",
                      boxShadow: "rgba(0, 0, 0, 0.16) 0px 1px 4px",
                    }}
                  >
                    <source type="video/webm" src={video7} />
                  </video>
                </div>
                <div className="gas-text">
                  <h6>Why do I need to specify a gas price and limit?</h6>
                  <p>
                    You can think of your gas limit like a budget you set for
                    the miner processing your transactions. Gas markets
                    determine if and when transactions will get confirmed.
                    <br />
                    <br />
                    Set your gas price too low and your transaction may get
                    stuck. Set your gas limit too low and your transaction
                    cannot be executed because it runs out of gas.
                  </p>
                </div>
              </SelfFocus>
            </div>

            <div className="col-md-6">
              <div className="d-flex mb-2">
                <div className="d-flex acc1">
                  <img width="20px" src={userIcon} alt="" />
                  <small className="head-title d-flex justify-content-center">
                    Account 1
                  </small>
                </div>
                <div className="d-flex acc2">
                  <FontAwesomeIcon className="acc2Icon" icon={faArrowRight} />
                  <img width="20px" src={userIcon2} alt="" />
                  <small className="head-title d-flex justify-content-center">
                    {selectUsersName.toString().substring(0, 5)}.....
                    {selectUsersName.toString().substring(38)}
                  </small>
                </div>
              </div>

              <div className="faucet-send-assets-amount-transaction">
                <div className="faucet-code-container mb-3">
                  <div className="select-amount-container">
                    <div className="d-flex justify-content-center align-items-center">
                      <img
                        className="selected-eth-icon"
                        width="20px"
                        src={Eth}
                        alt=""
                      />
                      <img
                        className="selected-usd-icon"
                        width="22px"
                        src={usd}
                        alt=""
                      />

                      <div className="selected-eth">
                        <h5 className="selectedEthAmount d-flex">
                          {selectedEthAmount}
                          <span className="selected-amount-eth-title">
                            {" "}
                            ETH
                          </span>
                          <span className="selected-amount-usd-title">
                            {" "}
                            USD
                          </span>
                        </h5>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Estimated gas fee container */}
                <div className="estimated-fee d-flex">
                  <p>
                    Estimated Gas Fee{" "}
                    <span>
                      <FontAwesomeIcon icon={faQuestionCircle} />
                    </span>
                  </p>

                  {/* <h6 className='gas-fee'>{gasFee}</h6> */}
                  <h6 className="low-gas-fee">0.000022</h6>
                  <h6 className="medium-gas-fee">0.000032</h6>
                  <h6 className="high-gas-fee">0.000042</h6>
                </div>

                {/* Estimated max fee container */}
                <div className="Max-fee d-flex">
                  {/* <p>Max Fee <span><FontAwesomeIcon icon={faQuestionCircle} /></span></p>
                  <h6 className="low-max-fee">0.000045</h6>
                  <h6 className="medium-max-fee">0.000056</h6>
                  <h6 className="high-max-fee">0.000065</h6> */}

                  <h6 className="low-max-fee"></h6>
                  <h6 className="medium-max-fee"></h6>
                  <h6 className="high-max-fee"></h6>
                </div>

                {/* Estimated Transaction Time and Advance options container */}
                <div className="t-time-limit-container d-flex mb-3">
                  {/* Estimated Transaction Time container */}
                  <div className="estimated-t-time">
                    <small>Estimated Transaction Time</small>
                    <h6 className="low-transaction-time">45 Seconds</h6>
                    <h6 className="medium-transaction-time">30 Seconds</h6>
                    <h6 className="high-transaction-time">15 Seconds</h6>
                  </div>

                  {/* Advance-options-container */}
                  <div className="advance-options-container">
                    <div className="showAdvance">
                      <span
                        className="showAdvanceBtn"
                        onClick={advancedOptionsShowHandler}
                      >
                        Advanced Options{" "}
                        <FontAwesomeIcon icon={faChevronDown} />
                      </span>
                    </div>
                    <div className="Gas-limit-mp-fee-container">
                      <div className="d-flex m-1">
                        <small>
                          Gas Limit{" "}
                          <span className="question-icon">
                            <FontAwesomeIcon icon={faQuestionCircle} />
                          </span>
                        </small>
                        <div className="gwei">
                          <small>-37 GWEI</small>
                        </div>
                      </div>
                      <div className="d-flex m-1">
                        <small>
                          Max Priority Fee{" "}
                          <span className="question-icon">
                            <FontAwesomeIcon icon={faQuestionCircle} />
                          </span>
                        </small>
                        <div className="gwei">
                          <small>-37 GWEI</small>
                        </div>
                      </div>
                      <div className="d-flex m-1">
                        <small>
                          Max Fee{" "}
                          <span className="question-icon">
                            <FontAwesomeIcon icon={faQuestionCircle} />
                          </span>
                        </small>
                        <div className="gwei">
                          <small className="low-max-fee-gwei">
                            <span>0.000045</span> GWEI
                          </small>
                          <small className="medium-max-fee-gwei">
                            <span>0.000056</span> GWEI
                          </small>
                          <small className="high-max-fee-gwei">
                            <span>0.000065</span> GWEI
                          </small>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Progress bar container */}
                <div className="slider-container text-center">
                  <div className="progressBar mb-2">
                    {/* <ProgressBar/> */}
                    <div className="stepper-wrapper">
                      <div
                        onClick={lowHandler}
                        className="stepper-item stepper-item1 completed"
                      >
                        <div className="step-counter low"></div>
                        <div className="step-name lowName"></div>
                      </div>

                      <div
                        onClick={mediumHandler}
                        className="stepper-item stepper-item2"
                      >
                        <div className="step-counter medium"></div>
                        <div className="step-name mediumName"></div>
                      </div>

                      <div
                        onClick={highHandler}
                        className="stepper-item stepper-item3"
                      >
                        <div className="step-counter high"></div>
                        <div className="step-name highName"></div>
                      </div>
                    </div>
                  </div>
                  <h5 className="l">Low</h5>
                  <h5 className="av">Average</h5>
                  <h5 className="h">High</h5>
                </div>

                {/* Total amount container */}
                <div className="total-amount-container">
                  <div className="total-container d-flex">
                    <h6>TOTAL</h6>
                    <span className="lowTotalEth">
                      {lowTotal} <span className="lowTotalTitle">Eth</span>
                    </span>
                    <span className="AllTotalEth">
                      {total} <span className="allTotalTitle">Eth</span>
                    </span>
                  </div>

                  <div className="amount-container d-flex">
                    <h6>Amount + Gas Fee</h6>
                    {/* <span>{maxTotal} ETH</span> */}
                    <span className="lowMaxTotalEth">
                      {lowTotal} <span className="lowMaxTotalTitle">Eth</span>
                    </span>
                    <span className="AllMaxTotalEth">
                      {total} <span className="allMaxTotalTitle">Eth</span>
                    </span>
                    {/* <span className="lowMaxTotalEth">{lowMaxTotal} <span className='lowMaxTotalTitle'>Eth</span></span>
                    <span className="AllMaxTotalEth">{maxTotal} <span className='allMaxTotalTitle'>Eth</span></span> */}
                  </div>
                </div>

                <button
                  onClick={backHandler}
                  className="trans-fee-btn-cancel"
                  type=""
                >
                  Reject
                </button>
                <button
                  onClick={transactionHistorySave}
                  className="trans-fee-btn-next"
                  type=""
                >
                  Confirm
                </button>
              </div>
            </div>
          </div>
        </div>
        {/* Modal content of Ethereum gas price and limit container end */}

        {/* Modal content of Warning container start */}
        <div className="warning-container text-center">
          <div className="warning-img d-flex justify-content-center mb-4 mt-4">
            <img width="50px" src={warningImg} alt="" />
          </div>
          <SelfFocus>
            <h5 tabIndex={0} role="heading">
              Before you continue, verify that the address you are sending to is
              correct.
            </h5>
          </SelfFocus>
          <br />
          <div className="recipient-address-container text-center">
            <small>Enter the last 4 digits of the recipient’s address:</small>
          </div>
          <div className="last-four-container">
            <input
              type="password"
              className="last-four-digits"
              maxlength="4"
              onChange={(e) => handleLastFourInput(e)}
            />
            <span className="validity">
              {!lastFourValid && lastFour ? (
                <span className="invalid">
                  <FontAwesomeIcon icon={faTimes} />
                  <span>Address does not match</span>
                </span>
              ) : lastFour ? (
                <span className="valid">
                  <FontAwesomeIcon icon={faCheck} />
                  <span>Address matches</span>
                </span>
              ) : (
                ""
              )}
            </span>
          </div>
          <div className="warning-text-div mt-3 mb-3">
            <small>
              If you input the wrong public address, you will{" "}
              <span style={{ borderBottom: "1px solid red" }}>NOT</span> be able
              to recover the <br /> assets you send as they are irreversable
              always double check <br /> your recipient address.
            </small>
          </div>

          <div className="warningCheckbox">
            <input
              onClick={warningCheckBoxHandler}
              id="warningCheckbox"
              type="checkbox"
              name=""
              value=""
            />
            <span>The address is above correct.</span>
          </div>

          <div className="warning-btn-div mt-3 mb-4">
            <button
              onClick={warningCancelBtnHandler}
              id="warningCancelBtn"
              type=""
            >
              Reject
            </button>
            <button onClick={nextHandler} id="warningConfirmBtn" type="">
              <span onClick={() => dispatch(showBalance(dispatchingData))}>
                <span onClick={() => handleWarningNext(true)}>Confirm</span>
              </span>
            </button>

            <div className="warningConfirmBtn-overlay"></div>
          </div>
        </div>
        {/* Modal content of Warning container end */}
      </Modal>
    </>
  );
};

export default Send;
