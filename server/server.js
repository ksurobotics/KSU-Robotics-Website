const express = require('express');
const bodyParser = require('body-parser');
const { graphqlExpress, graphiqlExpress } = require('apollo-server-express');
const { makeExecutableSchema } = require('graphql-tools');
const cors = require('cors');
const _ = require('lodash');
const axios = require('axios');

const PORT = 8000;
const path = require('path');

// The GraphQL schema in string form
const typeDefs = `
  type Query {
    rates(currency: String!): [ExchangeRate] 
  }
  
  type ExchangeRate { 
    currency: String,
    rate: String,
    name: String
  }
`;

// Provide resolver functions for your schema fields
const resolvers = {
  Query: {
    rates: async (root, { currency }) => {
      try {
        const exchangeRates = await axios.get(`https://api.coinbase.com/v2/exchange-rates?currency=${currency}`);
        console.log(`firstRes: \n\n${JSON.stringify(exchangeRates.data.data.rates)}`);
        const newRes = _.map(exchangeRates.data.data.rates, (rate, currency) => ({ currency, rate }));
        console.log(`newRes: \n\n${newRes}`);
        return newRes;
      } catch (e) {
        console.error(e);
      }
    },
  },
  ExchangeRate: {
    name: async ({ currency }) => {
      try {
        const currencyData = await axios.get('https://api.coinbase.com/v2/currencies');

        const currencyInfo = currencyData.data.data.find(c => c.id.toUpperCase() === currency);
        return currencyInfo ? currencyInfo.name : null;
      } catch (e) {
        console.error(e);
      }
    },
  },
};

// Put together a schema
const schema = makeExecutableSchema({
  typeDefs,
  resolvers,
});

// initialize the application and create the routes
const app = express();
const router = express.Router();

router.use(express.static(path.resolve(__dirname, '..', 'build'), { maxAge: '30d' }));

// tell the app to use the above rules
app.use(router);

/* app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', 'http://localhost:3000');
  res.header('Access-Control-Allow-Headers', 'Origin, Accept');
  next();
}); */

// The GraphQL endpoint
const corsOptions = {
  origin: 'http://localhost:3000',
  optionsSuccessStatus: 200,
};
app.use('/graphql', cors(corsOptions), bodyParser.json(), graphqlExpress({ schema }));

// GraphiQL, a visual editor for queries
app.use('/graphiql', graphiqlExpress({ endpointURL: '/graphql' }));

// start the app
app.listen(PORT, error => {
  if (error) {
    return console.log('something bad happened', error);
  }

  console.log(`backend listening on port ${PORT}... \ngo to http://localhost:${PORT}/graphiql to run queries!\n`);
});

// Some fake data
const rates = [
  {
    currency: 'AED',
    rate: '3.67',
    name: 'United Arab Emirates Dirham',
  },
  {
    currency: 'AFN',
    rate: '71.56',
    name: 'Afghan Afghani',
  },
  {
    currency: 'ALL',
    rate: '109.40',
    name: 'Albanian Lek',
  },
  {
    currency: 'AMD',
    rate: '484.17',
    name: 'Armenian Dram',
  },
  {
    currency: 'ANG',
    rate: '1.80',
    name: 'Netherlands Antillean Gulden',
  },
  {
    currency: 'AOA',
    rate: '236.64',
    name: 'Angolan Kwanza',
  },
  {
    currency: 'ARS',
    rate: '24.86',
    name: 'Argentine Peso',
  },
  {
    currency: 'AUD',
    rate: '1.33',
    name: 'Australian Dollar',
  },
  {
    currency: 'AWG',
    rate: '1.79',
    name: 'Aruban Florin',
  },
  {
    currency: 'AZN',
    rate: '1.70',
    name: 'Azerbaijani Manat',
  },
  {
    currency: 'BAM',
    rate: '1.70',
    name: 'Bosnia and Herzegovina Convertible Mark',
  },
  {
    currency: 'BBD',
    rate: '2.00',
    name: 'Barbadian Dollar',
  },
  {
    currency: 'BCH',
    rate: '0.00099249',
    name: null,
  },
  {
    currency: 'BDT',
    rate: '84.60',
    name: 'Bangladeshi Taka',
  },
  {
    currency: 'BGN',
    rate: '1.70',
    name: 'Bulgarian Lev',
  },
  {
    currency: 'BHD',
    rate: '0.378',
    name: 'Bahraini Dinar',
  },
  {
    currency: 'BIF',
    rate: '1767',
    name: 'Burundian Franc',
  },
  {
    currency: 'BMD',
    rate: '1.00',
    name: 'Bermudian Dollar',
  },
  {
    currency: 'BND',
    rate: '1.35',
    name: 'Brunei Dollar',
  },
  {
    currency: 'BOB',
    rate: '6.92',
    name: 'Bolivian Boliviano',
  },
  {
    currency: 'BRL',
    rate: '3.73',
    name: 'Brazilian Real',
  },
  {
    currency: 'BSD',
    rate: '1.00',
    name: 'Bahamian Dollar',
  },
  {
    currency: 'BTC',
    rate: '0.00013400',
    name: 'Bitcoin',
  },
  {
    currency: 'BTN',
    rate: '67.95',
    name: 'Bhutanese Ngultrum',
  },
  {
    currency: 'BWP',
    rate: '10.03',
    name: 'Botswana Pula',
  },
  {
    currency: 'BYN',
    rate: '2.03',
    name: 'Belarusian Ruble',
  },
  {
    currency: 'BYR',
    rate: '20253',
    name: 'Belarusian Ruble',
  },
  {
    currency: 'BZD',
    rate: '2.01',
    name: 'Belize Dollar',
  },
  {
    currency: 'CAD',
    rate: '1.30',
    name: 'Canadian Dollar',
  },
  {
    currency: 'CDF',
    rate: '1613.32',
    name: 'Congolese Franc',
  },
  {
    currency: 'CHF',
    rate: '0.99',
    name: 'Swiss Franc',
  },
  {
    currency: 'CLF',
    rate: '0.0230',
    name: 'Unidad de Fomento',
  },
  {
    currency: 'CLP',
    rate: '630',
    name: 'Chilean Peso',
  },
  {
    currency: 'CNH',
    rate: '6.42',
    name: 'Chinese Renminbi Yuan Offshore',
  },
  {
    currency: 'CNY',
    rate: '6.43',
    name: 'Chinese Renminbi Yuan',
  },
  {
    currency: 'COP',
    rate: '2906.00',
    name: 'Colombian Peso',
  },
  {
    currency: 'CRC',
    rate: '566.61',
    name: 'Costa Rican Colón',
  },
  {
    currency: 'CUC',
    rate: '1.00',
    name: 'Cuban Convertible Peso',
  },
  {
    currency: 'CVE',
    rate: '95.35',
    name: 'Cape Verdean Escudo',
  },
  {
    currency: 'CZK',
    rate: '22.38',
    name: 'Czech Koruna',
  },
  {
    currency: 'DJF',
    rate: '178',
    name: 'Djiboutian Franc',
  },
  {
    currency: 'DKK',
    rate: '6.43',
    name: 'Danish Krone',
  },
  {
    currency: 'DOP',
    rate: '49.65',
    name: 'Dominican Peso',
  },
  {
    currency: 'DZD',
    rate: '117.02',
    name: 'Algerian Dinar',
  },
  {
    currency: 'EEK',
    rate: '14.61',
    name: 'Estonian Kroon',
  },
  {
    currency: 'EGP',
    rate: '17.92',
    name: 'Egyptian Pound',
  },
];
