class DateRepository {
  #date;

  constructor() {
    this.#date = null;
  }

  getDate() {
    return this.#date;
  }

  setDate(date) {
    this.#date = date;
  }
}

export default DateRepository;