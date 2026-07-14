export default {
  id: "opencode",
  priority: 40,
  hasFree: true,
  alias: "oc",
  uiAlias: "oc",
  display: {
    name: "OpenCode Free",
    icon: "terminal",
    color: "#E87040",
    textIcon: "OC",
  },
  category: "free",
  noAuth: true,
  transport: {
    baseUrl: "https://opencode.ai",
    headers: {
      "x-opencode-client": "desktop",
    },
    noAuth: true,
  },
  models: [
    { id: "big-pickle", name: "Big Pickle" },
    { id: "deepseek-v4-flash-free", name: "DeepSeek V4 Flash (Free)" },
    { id: "mimo-v2.5-free", name: "MiMo V2.5 (Free)" },
    { id: "hy3-free", name: "HY3 (Free)" },
    { id: "nemotron-3-ultra-free", name: "NVIDIA Nemotron 3 Ultra (Free)" },
    { id: "north-mini-code-free", name: "North Mini Code (Free)" },
  ],
  modelsFetcher: { url: "https://opencode.ai/zen/v1/models", type: "opencode-free" },
  passthroughModels: true,
};
