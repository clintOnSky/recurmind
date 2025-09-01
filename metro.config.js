const { getDefaultConfig } = require("expo/metro-config");

const config = getDefaultConfig(__dirname);

config.resolver.blockList = [/\/\._.*$/]; // ignore macOS resource files

module.exports = config;
