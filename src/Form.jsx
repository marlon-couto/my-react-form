import React, { Component } from 'react';

import Confirmation from './Confirmation';
import Description from './Description';
import EmailInput from './EmailInput';
import NameInput from './NameInput';
import PictureInput from './PictureInput';
import SelectInput from './SelectInput';

export default class Form extends Component {
  constructor() {
    super();
    this.state = {
      age: '',
      confirmation: false,
      description: '',
      email: '',
      errors: true,
      name: '',
      picture: '',
    };
  }

  handleErrors = () => {
    const { age, confirmation, description, email, name } = this.state;

    const errorCases = [
      !age.length,
      !confirmation,
      !description.length,
      !email.match(/^\S+@\S+$/i),
      !name.length,
    ];

    const filledForm = errorCases.every((error) => error !== true);

    this.setState({ errors: !filledForm });
  };

  handleForm = ({ target }) => {
    const { name } = target;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    this.setState(
      {
        [name]: value,
      },
      this.handleErrors
    );
  };

  render() {
    const { age, confirmation, description, email, errors, name, picture } =
      this.state;
    return (
      <div>
        <h1>Formulários React</h1>

        <form>
          <fieldset>
            <legend>Dados pessoais</legend>

            <NameInput
              name={name}
              handleForm={this.handleForm}
            />

            <EmailInput
              email={email}
              handleForm={this.handleForm}
            />
            <br />

            <SelectInput
              age={age}
              handleForm={this.handleForm}
            />
          </fieldset>

          <fieldset>
            <legend>Arquivos</legend>
            <Description
              description={description}
              handleForm={this.handleForm}
            />
            <br />

            <PictureInput
              picture={picture}
              handleForm={this.handleForm}
            />
            <br />

            <Confirmation
              confirmation={confirmation}
              handleForm={this.handleForm}
            />
          </fieldset>
        </form>
        {errors ? (
          <span style={{ color: 'red' }}>
            Preencha todos os campos corretamente.
          </span>
        ) : (
          <span style={{ color: 'green' }}>
            Todos os campos foram preenchidos corretamente.
          </span>
        )}
      </div>
    );
  }
}
