import React, { Component } from 'react';
import WeatherWidget from './WeatherWidget';
import './mtt.css'

class ScrollHide extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showItem: false
    };
    this.handleScroll = this.handleScroll.bind(this);
  }

  componentDidMount() {
    window.addEventListener('scroll', this.handleScroll);
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', this.handleScroll);
  }

  handleScroll() {
    if (window.pageYOffset > 100) {
      this.setState({ showItem: true });
    }
  }

  render() {
    return (
      <div>
        {!this.state.showItem && (
          <div style={{ height: '70vh' }}>
            <p  style={{ animationDelay: '10s' }} className='aviso  animate__animated animate__bounce  '>Desplácese hacia abajo para ver el elemento oculto</p>
          </div>
        )}
        {this.state.showItem && <div className='animate__animated animate__fadeInUp'>
          <WeatherWidget></WeatherWidget></div>}
      </div>
    );
  }
}

export default ScrollHide;
