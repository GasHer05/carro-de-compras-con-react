import { Component } from "react";
import Productos from "./components/Productos";
import Layout from "./components/Layout";
import Navbar from "./components/Navbar";
import Title from "./components/Title";

class App extends Component {
  state = {
    productos: [
      { name: "Tomate", price: 118, img: "/productos/tomate.png" },
      { name: "Arvejas", price: 49, img: "/productos/arvejas.png" },
      { name: "Lechuga", price: 68, img: "/productos/lechuga.png" },
    ],
    carro: [
      //  {name: "Lechuga", price: 68, img: "/productos/lechuga.png", cantidad:1}
    ],
  };

  agregarAlCarro = (producto) => {
    return this.setState({
      carro: this.state.carro.concat({
        ...producto,
        cantidad: 1,
      }),
    });
  };
  render() {
    console.log(this.state.carro);
    return (
      <div>
        <Navbar />
        <Layout>
          <Title />
          <Productos
            agregarAlCarro={this.agregarAlCarro}
            productos={this.state.productos}
          />
        </Layout>
      </div>
    );
  }
}

export default App;
