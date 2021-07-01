/* eslint-disable linebreak-style */
/* eslint-disable no-underscore-dangle */

export default class Validator {
  constructor(name) {
    this._name = name;
  }

  validateUsername(name) {
    if (!/\d{3}/.test(name) && /^[^\d_-][\w-]+[^\d_-]$/.test(name)) {
      this.name = name;
      return 'Имя подходит';
    }

    throw new Error('Ошибка, имя не подходит');
  }
}
