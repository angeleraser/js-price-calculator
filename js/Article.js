
export class Article {
  constructor(name, price, grToSpend, totalPrice, remove) {
    this._name = name;
    this._price = price;
    this._grToSpend = grToSpend;
    this.id = Date.now();
  }

  get htmlElement() {
    const element = `<article>
    <h2>${this._name}</h2>
    <p> 
      <span> Precio: </span>
      ${this._price} Bs
    </p>
    <p> 
      <span> Precio por gramos: </span>
      ${this.priceGr} Bs
    </p>
    <p>
      <span> Gramos a gastar: </span>  
      ${this._grToSpend} gr
    </p>
    <p>
      <span> Total: </span> 
        ${this.totalPriceGr} Bs
    </p>
  <button id=${this.id} class='quitar-button'>X</button>
</article> `;
    return element;
  }

  get priceGr() {
    return this._price / 1000;
  }

  get totalPriceGr() {
    return this.priceGr * this._grToSpend - 0;
  }
}
