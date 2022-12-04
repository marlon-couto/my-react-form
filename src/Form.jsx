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
      </div>
    );
  }
}
