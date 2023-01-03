interface Config {
  server: boolean;
  prefix: string;
  separator: string;
  icons: Record<string, JSX.Element>;
}

let config: Config = {
  server: false,
  prefix: "c-",
  separator: "--",
  icons: {},
};

export function getConfig() {
  return config;
}

export function setConfig(newConfig: Partial<Config>) {
  config = {...config, ...newConfig};
}
