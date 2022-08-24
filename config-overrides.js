module.exports = {
  webpack: function (config, env) {
    config.module.rules = config.module.rules.map(rule => {
      if (rule.oneOf instanceof Array) {
        rule.oneOf[rule.oneOf.length - 1].exclude = [/\.(js|mjs|zbin|cjs|jsx|ts|tsx)$/, /\.html$/, /\.json$/];
        return rule;
      }
      return rule;
    });

    return config;
  },
  jest: function (config) {
    return config;
  },
  devServer: function (configFunction) {
    return function (proxy, allowedHost) {
      const config = configFunction(proxy, allowedHost);
      config.https = true
      return config;
    };
  },
  paths: function (paths, env) {
    return paths;
  },
}
