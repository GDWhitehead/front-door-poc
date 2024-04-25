// Replace these values with the urls for your application
export const getEnvironment = (): string => {
  const url = window.location.hostname;
  switch (url) {
    case "reactsample-example1-smk.keoghs.co.uk":
      return "smoke";
    case "reactsample-example1-uat.keoghs.co.uk":
      return "uat";
    case "reactsample-example1-prd.keoghs.co.uk":
      return "production";
    default:
      return "local";
  }
};

export default getEnvironment;
