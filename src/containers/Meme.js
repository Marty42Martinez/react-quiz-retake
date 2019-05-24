import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import TextSelector from '../components/TextSelector';
import Display from '../components/Display';

export default class Meme extends PureComponent {
  state = {
    headerText: '',
    image: '',
    footerText: ''
  }
  handleChange = ({ target }) => {
    this.setState({ [target.name]: target.value });
  }

  render() {
    const { headerText, image, footerText } = this.state;
    return (
      <>
        <TextSelector name='headerText' text={headerText} handleChange={this.handleChange} />
        <TextSelector name='image' text={image} handleChange={this.handleChange} />
        <TextSelector name='footerText' text={footerText} handleChange={this.handleChange} />
        <Display headerText={headerText} image={image} footerText={footerText} />
      </>
    );
  }


}