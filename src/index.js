import React from 'react';
import ReactDOM from 'react-dom/client';
import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  gql,
} from "@apollo/client";
import './index.css';
import App from './App';

const client = new ApolloClient({
  uri: "http://localhost:4000/",
  cache: new InMemoryCache(),
});

const lat = 51.5073219;
const lon = -0.1276474;

client
  .query({
    query: gql`
        query { forecastweatherdata(lat: ${lat}, lon: ${lon}) {
          list {
            dt_txt
            main {
              temp
              feels_like
              temp_min
              temp_max
              pressure
              sea_level
              grnd_level
              humidity
              temp_kf
            }
          }
        }
      }
      
    `,
  })
  .then((result) => console.log(result));

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
