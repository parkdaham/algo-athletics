import globals from "globals";
import pluginJs from "@eslint/js";
import pluginReactConfig from "eslint-plugin-react/configs/jsx-runtime.js";

export default [
  {
    files: ["**/*.{js,jsx,mjs,cjs,ts,tsx}"],
    languageOptions: {
      parserOptions: { 
        ecmaFeatures: { jsx: true },
        ecmaVersion: 'latest',
        sourceType: 'module'
      },
      globals: { ...globals.browser, ...globals.node }
    }
  },
  pluginJs.configs.recommended,
  pluginReactConfig,
]; 