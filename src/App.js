import "./categories.styles.scss";

import Directory from "./components/directory/directory.component";

const App = () => {
  const categories = [
    {
      id: 1,
      title: "Pebble",
      imageUrl:
        "https://www.porousway.com/wp-content/uploads/2021/08/Pebble-floor-5-416x416.jpg",
    },
    {
      id: 2,
      title: "Flake",
      imageUrl:
        "https://www.porousway.com/wp-content/uploads/2021/08/Pebble-Floor-Flake-Wall-3-scaled-e1633443266574-416x416.jpg",
    },
    {
      id: 3,
      title: "Anti-slip Coating",
      imageUrl:
        "https://www.porousway.com/wp-content/uploads/2021/08/M5-COATING-416x416.jpg",
    },
    {
      id: 4,
      title: "Micro-cement",
      imageUrl:
        "https://www.myrevest.com/en/img/microcements/bedroom-floor-microcement.webp",
    },
    {
      id: 5,
      title: "Upcoming",
      imageUrl:
        "https://m.media-amazon.com/images/I/51HN3qnYIZL._AC_SY350_.jpg",
    },
  ];

  return <Directory categories={categories} />;
};

export default App;
