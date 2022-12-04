import React, { Component } from 'react';
import SelectInput from './SelectInput';

export default class Form extends Component {
  constructor() {
    super();
    this.state = {
      age: '',
      confirmation: false,
      description: '',
      email: '',
      name: '',
      picture: '',
    };
  }

  handleForm = ({ target }) => {
    const { name } = target;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    this.setState({
      [name]: value,
    });
  };

  render() {
    const { age, confirmation, description, email, name, picture } = this.state;
    return (
      <div>
        <h1>Formulários React</h1>

        <form>
          <fieldset>
            <legend>Dados pessoais</legend>

            <label htmlFor="name">
              Nome:
              <input
                type="text"
                name="name"
                id="name"
                value={name}
                onChange={this.handleForm}
              />
            </label>

            <label htmlFor="email">
              Email:
              <input
                type="email"
                name="email"
                id="email"
                value={email}
                onChange={this.handleForm}
              />
            </label>
            <br />

            <SelectInput
              age={age}
              handleForm={this.handleForm}
            />
          </fieldset>

          <fieldset>
            <legend>Arquivos</legend>
            <label htmlFor="description">
              Fale um pouco sobre você:
              <br />
              <textarea
                name="description"
                id="description"
                cols="30"
                rows="10"
                value={description}
                onChange={this.handleForm}
              />
            </label>
            <br />

            <label htmlFor="picture">
              <input
                type="file"
                name="picture"
                id="picture"
                value={picture}
                onChange={this.handleForm}
              />
            </label>
            <br />

            <label htmlFor="confirmation">
              As informações acima estão corretas?
              <input
                type="checkbox"
                name="confirmation"
                id="confirmation"
                value={confirmation}
                onChange={this.handleForm}
              />
            </label>
          </fieldset>
        </form>
      </div>
    );
  }
}
