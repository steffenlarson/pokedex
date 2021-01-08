export default class Pokemon {
  constructor({ name, img, description, weight, height, types }) {

    this.name = name
    // TODO absolute value to dig in
    this.img = img
    this.description = description
    this.weight = weight
    this.height = height
    this.types = types
  }

  get Template() {
    return `
    <h3>${this.name}</h3>
    `
  }
}