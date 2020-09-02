import { Article } from "./Article.js";
import { Form } from "./Form.js";
import {
  articlesList,
  inputs,
  addButton,
  totalAmount,
  dolarAmount,
  convertPriceButton,
  dolarPrice,
  percentajeInput,
  percentajeButton,
  totalPercentajeAmount,
  convertAmountDollarsForm,
  addArticleForm,
} from "./htmlElements.js";

let ARTICLES = [];
let totalBsAmount = 0;
let dollarValue = 0;

const addToList = (e) => {
  e.preventDefault();
  FORM.setInputsValues();
  FORM.cleanInputs();

  ARTICLES = [...ARTICLES, new Article(...FORM.values)];

  // Render html elements
  articlesList.innerHTML = ARTICLES.map((article) => article.htmlElement).join(
    ""
  );
};

const convertPriceToDollars = (e) => {
  e.preventDefault();
  CONVERSOR_FORM.setInputsValues();
  CONVERSOR_FORM.cleanInputs();
  dollarValue = CONVERSOR_FORM.values[0] - 0; // convert string in number value
};

const printPercentaje = () => {
  PERCENTAJE_FORM.setInputsValues();
  PERCENTAJE_FORM.cleanInputs();

  let percentaje = PERCENTAJE_FORM.values[0] / 100;

  totalBsAmount = totalBsAmount * (1 + percentaje);

  // Print total percentaje amount
  totalPercentajeAmount.innerHTML = `
  <p>${totalBsAmount} Bs<p/> 
  <p>${(totalBsAmount / dollarValue).toFixed(2)} $<p/>
  <p>(${percentaje * 100}%) = ${totalBsAmount * percentaje} Bs<p/>
  <p>(${percentaje * 100}%) = ${(
    (totalBsAmount / dollarValue).toFixed(2) * percentaje
  ).toFixed(2)} $<p/>
  `;
};

const updateTotalBsAmount = () => {
  totalBsAmount = ARTICLES.map((a) => a.totalPriceGr).reduce((a, b) => a + b);
  totalAmount.textContent = totalBsAmount;
};

const renderUpdatedArticleList = () => {
  ARTICLES.forEach((article) => {
    const removeButton = document.getElementById(`${article.id}`);
    removeButton.addEventListener("click", () => {
      ARTICLES = ARTICLES.filter((a) => a.id !== article.id);
      // Render html elements
      articlesList.innerHTML = ARTICLES.map(
        (article) => article.htmlElement
      ).join("");
    });
  });
};

setInterval(() => {
  renderUpdatedArticleList();

  ARTICLES.length > 0 && updateTotalBsAmount();

  //Print dollar amount
  if (dollarValue > 0) {
    dolarAmount.textContent = (totalBsAmount / dollarValue).toFixed(2);
  }
}, 500);

const FORM = new Form(inputs);
const CONVERSOR_FORM = new Form([dolarPrice]);
const PERCENTAJE_FORM = new Form([percentajeInput]);

addArticleForm.addEventListener("submit", addToList);
convertAmountDollarsForm.addEventListener("submit", convertPriceToDollars);
percentajeButton.addEventListener("click", printPercentaje);

export { ARTICLES };
