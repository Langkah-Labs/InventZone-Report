import React from "react";
// dependencies
import ReactDOM from "react-dom/client";
import reportWebVitals from "./reportWebVitals";
import { ApolloClient, InMemoryCache, ApolloProvider } from "@apollo/client";
import { ConfigProvider } from "antd";
// Utils
import { GlobalContextProvider } from "./context/GlobalContext";
// components
import App from "./App";
// assets
import "./styles/global.scss";
import "leaflet/dist/leaflet.css";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);

const client = new ApolloClient({
  uri: process.env.REACT_APP_GRAPHQL_URL || "http://127.0.0.1:8080/v1/graphql",
  cache: new InMemoryCache(),
});

root.render(
  <React.StrictMode>
    <ApolloProvider client={client}>
      <ConfigProvider
        theme={{
          token: {
            // Seed Token
            colorPrimary: "#113A5D",
            // borderRadius: 2,

            // Alias Token
            // colorBgContainer: "#f6ffed",
          },
        }}
      >
        <GlobalContextProvider>
          <App />
        </GlobalContextProvider>
      </ConfigProvider>
    </ApolloProvider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
