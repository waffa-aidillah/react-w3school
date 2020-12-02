import React, { Component } from 'react';

class Learn extends Component {
  state = {
    colorr: 'red',
  };
  changeState = () => {
    this.setState({ colorr: 'blue' });
  };
  //*method yg dipanggil tepat sebelum rendering
  //*untuk set state di objek
  //*dibawah ini aslinya state warna merah, tapi diubah jadi biru
  /*
  static getDerivedStateFromProps(props, state) {
    return { colorr: props.brand.model };
  }
  */
  //*method yang dipanggil setelah component terender
  componentDidMount() {
    setTimeout(() => {
      this.setState({ colorr: 'green' });
    }, 2000);
  }
  render() {
    let styling = {
      border: '2px solid black',
      padding: '10px',
      margin: '20px',
    };
    return (
      <div className='class1' style={styling}>
        <h1 style={colorStyle}>hello</h1>
        <h1>ini adalah state: {this.state.colorr}</h1>
        <h2>ini adalah prop brand model {this.props.brand.model}</h2>
        <button type='button' onClick={this.changeState}>
          ubah state
        </button>
      </div>
    );
  }
}
const colorStyle = {
  color: 'red',
  fontSize: '20px',
  textDecoration: 'underline',
};
export default Learn;
