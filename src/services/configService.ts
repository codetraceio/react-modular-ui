interface Config {
  server: boolean;
  prefix: string;
  separator: string;
  icons: Record<string, JSX.Element>;
}

function configService() {
  let config: Config = {
    server: false,
    prefix: "c-",
    separator: "--",
    icons: {},
  };
  
  function getConfig() {
    return config;
  }
  
  function setConfig(newConfig: Partial<Config>) {
    config = {...config, ...newConfig};
  }

  return {
    getConfig,
    setConfig,
  };
}

export default configService();
