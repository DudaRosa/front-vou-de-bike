const proxy = [
    {
      context: '/api',
      target: 'https://maps.googleapis.com/maps/directions',
      pathRewrite: { '^/api': '' }
    }
  ];
  module.exports = proxy;