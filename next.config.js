const {
  PHASE_DEVELOPMENT_SERVER,
  PHASE_PRODUCTION_BUILD,
  PHASE_PRODUCTION_SERVER,
  PHASE_EXPORT,
} = require("next/constants");

module.exports = (phase, { defaultConfig }) => {
  console.log(phase);
  const url = "/fbclone";

  if (phase === PHASE_DEVELOPMENT_SERVER) {
    return {
      reactStrictMode: true,
      env: {
        PREFIX: "",
      },
    };
  }

  return {
    reactStrictMode: true,
    basePath: `${url}`,
    assetPrefix: `${url}/`,
    env: {
      PREFIX: `${url}`,
    },
  };
};