import React from 'react';

export default class AbstractComponent extends React.Component {
  constructor(props) {
    super(props);

    this.bindKeys(this.__proto__);
  }

  bindKeys(object) {
    Object.keys(object).forEach((key) => {
      let method = this[key];

      if (typeof method === 'function') {
        this[key] = method.bind(this);
      }

      if (object instanceof AbstractComponent) {
        this.bindKeys(object.__proto__);
      }
    });
  }
}
