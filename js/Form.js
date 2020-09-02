export class Form {
  constructor(inputs) {
    this._inputs = inputs;
    this._values = [];
  }

  setInputsValues() {
    this._values = this._inputs.map((input) => input.value);
  }

  get values() {
    return this._values;
  }

  cleanInputs() {
    this._inputs.forEach((input) => {
      input.value = "";
    });
  }
}