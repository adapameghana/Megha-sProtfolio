import { defineConfig, globalIgnores } from "eslint/config";
import nextVitals from "eslint-config-next/core-web-vitals";
import nextTs from "eslint-config-next/typescript";
import jsxA11y from "eslint-plugin-jsx-a11y";

const eslintConfig = defineConfig([
  ...nextVitals,
  ...nextTs,

  /**
   * Accessibility is a stated requirement (PRD §21) and part of the Lighthouse
   * target (§20), so it is enforced at lint time rather than checked once by
   * hand. This is the standing gate that keeps regressions out.
   */
  /* Rules only — eslint-config-next already registers the plugin itself, and
     declaring it twice is a config error. */
  { rules: jsxA11y.flatConfigs.strict.rules },

  globalIgnores([
    ".next/**",
    "out/**",
    "build/**",
    "next-env.d.ts",
  ]),
]);

export default eslintConfig;
