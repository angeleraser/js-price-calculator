const articleInput = document.getElementById("article-input");
const priceInput = document.getElementById("price-input");
const grInput = document.getElementById("gr-input");
const percentajeInput = document.getElementById("percentaje");
const inputs = [articleInput, priceInput, grInput];
const addButton = document.getElementById("add");
const articlesList = document.getElementById("list");
const totalAmount = document.getElementById("total-amount");
const dolarAmount = document.getElementById("dolar-amount");
const dolarPrice = document.getElementById("dolar-price");
const convertPriceButton = document.getElementById("convert-price");
const percentajeButton = document.getElementById("percentaje-button");
const totalPercentajeAmount = document.getElementById("total-percentaje");
const addArticleForm = document.getElementById("add-article");
const convertAmountDollarsForm = document.getElementById("dollar-conversor");
export {
  articleInput,
  articlesList,
  inputs,
  addButton,
  totalAmount,
  dolarAmount,
  dolarPrice,
  convertPriceButton,
  percentajeButton,
  percentajeInput,
  totalPercentajeAmount,
  addArticleForm,
  convertAmountDollarsForm
};
