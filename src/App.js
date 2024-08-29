import Items from "./components/Items";
import MySwiper from "./components/MySwiper";
import React from "react";
class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      items: [
        { id: 1, img: "i.webp" },
        {
          id: 2,
          img: "i9.jpg",
        },
        {
          id: 3,
          img: "i3.jpeg",
        },
        {
          id: 4,
          img: "i10.png",
        },
        {
          id: 5,
          img: "i12.png",
        },
        {
          id: 6,
          img: "i11.png",
        },
      ],
    };
  }
  render() {
    return (
      <div>
        <MySwiper></MySwiper>
        <Items items={this.state.items} />
      </div>
    );
  }
}

export default App;
