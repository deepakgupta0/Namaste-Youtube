import {
  BrowserRouter,
  RouterProvider,
  createBrowserRouter,
} from "react-router-dom";
import "./App.css";
import Body from "./components/Body/Body";
import Header from "./components/Header/Header";
import MainContainer from "./components/MainContainer/MainContainer";
import WatchVideo from "./components/WatchVideo/WatchVideo";
import SearchResult from "./components/SearchResult/SearchResult";

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <Body />,
    children: [
      {
        path: "/",
        element: <MainContainer />,
      },
      {
        path: "/watch",
        element: <WatchVideo />,
      },
      {
        path: "/result",
        element: <SearchResult />,
      },
    ],
  },
]);

function App() {
  return (
    <>
      <RouterProvider router={appRouter} />
    </>
  );
}

export default App;
