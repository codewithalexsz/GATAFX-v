"use strict";
import "./comp.js";
import "../main.js";

// import imagePaths from "../main.js";
// console.log(imageModules);

// let currentUrl = window.location.href;
// if (currentUrl.endsWith(".html")) {
//   let newUrl = currentUrl.slice(0, -5);
//   window.location.href = newUrl;

//   console.log("new window code loaded");
// }

document.addEventListener("DOMContentLoaded", function () {
  //logo to home
  let homelogo = document.getElementById("homelogo");
  homelogo.href = "./index.html";

  const closeHamburgerButton = document.querySelector(".closeHamburger");
  const openHamburgerButton = document.querySelector(".openHamburger");
  const menu = document.querySelector(".hamburgermenu");

  // Add click event listeners to the open and close buttons
  openHamburgerButton.addEventListener("click", openHamburger);
  closeHamburgerButton.addEventListener("click", closeHamburger);

  function openHamburger() {
    // Remove the 'hidden' class to show the menu
    menu.classList.remove("hidden");
    console.log("open mobile menu");
  }

  function closeHamburger() {
    // Add the 'hidden' class to hide the menu
    menu.classList.add("hidden");
  }

  // Get a reference to the link or button that triggers the scroll
  var scrollTrigger = document.querySelector(".scrolltoindicators");

  // Get a reference to the section you want to scroll to
  var targetSection = document.getElementById("indicators");

  // Add a click event listener to the trigger
  scrollTrigger.addEventListener("click", function () {
    // Scroll to the target section with smooth behavior and duration
    targetSection.scrollIntoView({
      behavior: "smooth",
      block: "start",
      inline: "start",
      duration: 2000, // Duration in milliseconds
    });
  });
});

document.addEventListener("DOMContentLoaded", function () {
  // Get a reference to the link or button that triggers the scroll
  var scrollTriggerOffers = document.querySelector(".scrolltopackages");

  // Get a reference to the section you want to scroll to
  var targetSectionPackages = document.getElementById("Packages");

  // Add a click event listener to the trigger
  scrollTriggerOffers.addEventListener("click", function () {
    // Scroll to the target section with smooth behavior and duration
    targetSectionPackages.scrollIntoView({
      behavior: "smooth",
      block: "start",
      inline: "start",
      duration: 2000, // Duration in milliseconds
    });
  });
});

document.addEventListener("DOMContentLoaded", function () {
  var getStartedbtnMobile = document.getElementById("getstartmobile");
  const menu = document.querySelector(".hamburgermenu");

  getStartedbtnMobile.addEventListener("click", function () {
    menu.classList.add("hidden");
  });
});

// CHECKOUT OPERATIONS
document.addEventListener("DOMContentLoaded", function () {
  // CHECKOUT MODAL BTNS
  // var oneOnOneMembership = document.getElementById("getstartedoneonone");
  // var vipSignals = document.getElementById("vipsignals");
  // var classroom = document.querySelector(".classroom");
  var closeModal = document.getElementById("closecheckout");
  var checkoutModal = document.querySelector(".modal-wrapper");

  // CHECKOUT SUMMARY DETAILS
  var summaryImg = document.getElementById("productimg");
  var summaryName = document.querySelector(".productname");
  var summaryDesc = document.querySelector(".productdesc");
  var summarySubtotal = document.querySelector(".productsubtotal");
  var summaryPrice = document.querySelector(".productprice");
  var cryptopay = document.getElementById("cryptopay");

  const products = {
    pro: {
      productimg: "product1",
      productname: "Top Plan",
      productdesc: "1-0n-1 Mentorship",
      productsubtotal: "$350",
      productprice: "$350",
      cryptopay: "https://nowpayments.io/payment/?iid=6369724599",
    },
    classroom: {
      productimg: "product2",
      productname: "Classrom Plan",
      productdesc: "Grouped student of 10 - 20",
      productsubtotal: "$150",
      productprice: "$150",
      cryptopay: "https://nowpayments.io/payment/?iid=6397710683",
    },
    vipsignal: {
      productimg: "product3",
      productname: "Premium Signals",
      productdesc: "Access to premium signals",
      productsubtotal: "$50",
      productprice: "$50",
      cryptopay: "https://nowpayments.io/payment/?iid=4725156378",
    },
  };

  closeModal.addEventListener("click", function () {
    checkoutModal.classList.add("hidden");
  });

  // oneOnOneMembership.addEventListener("click", function () {
  //   checkoutModal.classList.remove("hidden");
  //   checkoutModal.classList.add("grid");

  //   //update the modal summary
  //   summaryImg.src = `/assets/${products.pro.productimg}.png`;
  //   summaryName.innerHTML = `${products.pro.productname}`;
  //   summaryDesc.innerHTML = `${products.pro.productdesc}`;
  //   summarySubtotal.innerHTML = `${products.pro.productsubtotal}`;
  //   summaryPrice.innerHTML = `${products.pro.productprice}`;
  //   cryptopay.href = `${products.pro.cryptopay}`;
  // });

  // vipSignals.addEventListener("click", function () {
  //   checkoutModal.classList.remove("hidden");
  //   checkoutModal.classList.add("grid");
  //   console.log("Checkout vip btn click");

  //   //update the modal summary
  //   summaryImg.src = `/assets/${products.vipsignal.productimg}.png`;
  //   summaryName.innerHTML = `${products.vipsignal.productname}`;
  //   summaryDesc.innerHTML = `${products.vipsignal.productdesc}`;
  //   summarySubtotal.innerHTML = `${products.vipsignal.productsubtotal}`;
  //   summaryPrice.innerHTML = `${products.vipsignal.productprice}`;
  //   cryptopay.href = `${products.vipsignal.cryptopay}`;
  // });

  //NEW TRIAL METHOD
  // Function to update the modal summary
  function updateModalSummary(product) {
    summaryImg.src = `../assets/${product.productimg}.png`;
    summaryName.innerHTML = product.productname;
    summaryDesc.innerHTML = product.productdesc;
    summarySubtotal.innerHTML = product.productsubtotal;
    summaryPrice.innerHTML = product.productprice;
    cryptopay.href = product.cryptopay;
  }

  // Product buttons
  const oneOnOneMembership = createCheckoutButton("pro", "getstartedoneonone");
  const vipSignals = createCheckoutButton("vipsignal", "vipsignals");
  const classroom = createCheckoutButton("classroom", "classroom");

  // Function to create a product button and its click event listener
  function createCheckoutButton(productKey, buttonId) {
    const button = document.getElementById(buttonId);

    button.addEventListener("click", function () {
      checkoutModal.classList.remove("hidden");
      checkoutModal.classList.add("grid");

      const product = products[productKey];
      updateModalSummary(product);
    });

    return button;
  }

  // Function to update the modal summary
  function updateModalSummary(product) {
    summaryImg.src = `../assets/${product.productimg}.png`;
    console.log(summaryImg.src);

    summaryName.innerHTML = product.productname;
    summaryDesc.innerHTML = product.productdesc;
    summarySubtotal.innerHTML = product.productsubtotal;
    summaryPrice.innerHTML = product.productprice;
    cryptopay.href = product.cryptopay;
  }

  //END

  // classroom.addEventListener("click", function () {
  //   checkoutModal.classList.remove("hidden");
  //   checkoutModal.classList.add("grid");

  //   //update the modal summary
  //   summaryImg.src = `/assets/${products.classroom.productimg}.png`;
  //   summaryName.innerHTML = `${products.classroom.productname}`;
  //   summaryDesc.innerHTML = `${products.classroom.productdesc}`;
  //   summarySubtotal.innerHTML = `${products.classroom.productsubtotal}`;
  //   summaryPrice.innerHTML = `${products.classroom.productprice}`;
  //   cryptopay.href = `${products.classroom.cryptopay}`;
  // });
});
