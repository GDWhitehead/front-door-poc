/* eslint-disable import/no-anonymous-default-export */
export default (api) => {
  const presets = [
    [
      "@babel/preset-env",
      {
        debug: false,
      },
    ],
    "@babel/preset-react",
  ];

  const common = ["@babel/transform-runtime"];

  const productionPlugins = ["babel-plugin-jsx-remove-data-test-id"];

  const plugins =
    api.env() === "production"
      ? [...common, ...productionPlugins]
      : [...common];

  return {
    plugins,
    presets,
  };
};
