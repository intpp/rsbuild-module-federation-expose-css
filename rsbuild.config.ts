import { pluginModuleFederation } from '@module-federation/rsbuild-plugin';
import { defineConfig } from '@rsbuild/core';
import { pluginReact } from '@rsbuild/plugin-react';

export default defineConfig({
  plugins: [
    pluginReact(),
    pluginModuleFederation({
      name: 'federation_provider',
      exposes: {
        './styles': './src/App.css',
      },
      shared: ['react', 'react-dom'],
    }),
  ],
});
