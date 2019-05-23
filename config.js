
/**
 * Global configuration object.
 */
const config = {
  'api': {
    'host': 'http://explore.vulcano.io',
    'port': '3000',
    'prefix': '/api',
    'timeout': '5s'
  },
  'coinMarketCap': {
    'api': 'http://api.coinmarketcap.com/v1/ticker/',
    'ticker': 'vulcano'
  },
  'db': {
    'host': '127.0.0.1',
    'port': '27017',
    'name': 'blockex',
    'user': 'vulcMongoU_er2019',
    'pass': 'Expl0rerDBPa-_05_2019'
  },
  'freegeoip': {
    'api': 'https://extreme-ip-lookup.com/json/'
  },
  'rpc': {
    'host': '127.0.0.1',
    'port': '62541',
    'user': 'f59UOls2GwbW',
    'pass': '94vpPHUZxvj1fTWoXr1OIUvrAHBfPlI9',
    'timeout': 12000, // 12 seconds
  },
  'slack': {
    'url': 'https://hooks.slack.com/services/A00000000/B00000000/somekindofhashhere',
    //'channel': '#general',
    //'username': 'Block Report',
    //'icon_emoji': ':bwk:'
  },
  'community': {
    'highlightedAddresses': [
      // If you comment out all of these addresses the "Community Addresses" section will not show up on the homepage. You can add as many addresses to highlight as you wish.
      //{ label: "Community Donations", address: "XXXXXXXXXXXXXXXXXXXXXXXXXXX" }, // Uncomment and replace with your coin address to highlight an address
      //{ label: "Community Funding", address: "XXXXXXXXXXXXXXXXXXXXXXXXXXX" }, // Uncomment and replace with your coin address to highlight any other address
    ]
  }
};

module.exports = config;
