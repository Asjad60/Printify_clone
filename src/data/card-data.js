import BestSelection from "../assets/svgs/best-selection.svg";
import HigherProfitsImg from "../assets/svgs/higher-profits.svg";
import RobustScaling from "../assets/svgs/robust-scaling.svg";

import customProductsImg from "../assets/images/custom-products.webp";
import fullfillment from "../assets/images/fullfillment.webp";
import yourProductsImg from "../assets/images/your-products.webp";

import wix from "../assets/svgs/wix.svg";
import etsy from "../assets/svgs/etsy.svg";
import shopify from "../assets/svgs/shopify.svg";
import squarespace from "../assets/svgs/squarespace.svg";
import woo from "../assets/svgs/woo.svg";
import presta from "../assets/svgs/presta.svg";
import moreIntegration from "../assets/svgs/more-integration.svg";
import bigCommerce from "../assets/svgs/big-commerce.svg";

import nikki from "../assets/images/nikki.png";
import quinten from "../assets/images/quinten.png";
import robert from "../assets/images/robert.webp";

export const features = [
  {
    id: 1,
    imgUrl: HigherProfitsImg,
    heading: "Higher Profits",
    para: "We offer some of the lowest prices in the industry because print providers continuously compete to win your business.",
  },
  {
    id: 2,
    imgUrl: RobustScaling,
    heading: "Robust Scaling",
    para: "Easily handle peak holiday seasons, with our wide network of partners and automatic routing functionality.",
  },
  {
    id: 3,
    imgUrl: BestSelection,
    heading: "Best Selection",
    para: "With 900+ products and top quality brands, you can choose the best products for your business.",
  },
];

export const howItWorks = [
  {
    id: 1,
    imgUrl: customProductsImg,
    head1: "create",
    head2: "custom products",
    desc: "Easily add your designs to a wide range of products using our free tools",
  },
  {
    id: 2,
    imgUrl: yourProductsImg,
    head1: "sell",
    head2: "on your terms",
    desc: "You choose the products, sale price, and where to sell",
  },
  {
    id: 1,
    imgUrl: fullfillment,
    head1: "we handle",
    head2: "fullfillment",
    desc: "Once an order is placed, we automatically handle all the printing and delivery logistics",
  },
];

export const connectImages = [
  {
    src: wix,
    alt: "wixImg",
    position: { left: "86%", top: "0%" },
    scale: 1,
    className: "w-[70px] lg:w-[100px] p-6",
  },
  {
    src: etsy,
    alt: "etsyImg",
    position: { left: "78%", top: "65%" },
    scale: 1,
    className: "w-[100px] sm:w-[120px] lg:w-[150px] p-8",
  },
  {
    src: woo,
    alt: "wooImg",
    position: { left: "75%", top: "35%" },
    scale: 1,
    className: "w-[50px] lg:w-[70px] p-2",
  },
  {
    src: bigCommerce,
    alt: "moreIntegrationImg",
    position: { left: "35%", top: "5%" },
    scale: 1,
    className: "w-[50px] lg:w-[70px] p-4",
  },
  {
    src: shopify,
    alt: "shopifyImg",
    position: { left: "55%", top: "75%" },
    scale: 1,
    className: "w-[85px] lg:w-[115px] p-6",
  },
  {
    src: squarespace,
    alt: "squarespaceImg",
    position: { left: "63%", top: "5%" },
    scale: 1,
    className: "w-[70px] lg:w-[100px]",
  },
  {
    src: presta,
    alt: "prestaImg",
    position: { left: "25%", top: "50%" },
    scale: 1,
    className: "w-[70px] lg:w-[100px] p-6",
  },
  {
    src: moreIntegration,
    alt: "moreIntegrationImg",
    position: { left: "35%", top: "80%" },
    scale: 1,
    className: "w-[50px] lg:w-[70px]",
  },
];

export const reviewData = [
  {
    id: 1,
    name: "Robert",
    image: robert,
    rating: 5,
    bio: "Developer",
    desc: "Printify has been an incredible service for us musicians unable to keep large amount of inventory - now we can create designs previously too expensive to print without having to have 1,000 shirts in our jam space. Thanks Printify!",
  },
  {
    id: 1,
    name: "Nikki",
    image: nikki,
    rating: 5,
    bio: "Designer",
    desc: "We chose Printify because of their offerings as well as their incredibly low prices. After several years, we've come to find that their customer service is also top notch, and their platform just keeps getting better and better.",
  },
  {
    id: 1,
    name: "Quinten",
    image: quinten,
    rating: 4,
    bio: "Marketer",
    desc: "Printify has been a amazing partner to work with as we grow our business, from the range of merch we can make for our customers to working with our Customer Service team (Hi Martin!) it's truly made the whole.",
  },
];
