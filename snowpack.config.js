module.exports = {
  mount: {
    src: "/dist",
    public: "/",
  },
  plugins: [
    [
      "@snowpack/plugin-babel",
      {
        input: ['.js', '.mjs', '.jsx', '.ts', '.tsx'], // (optional) specify files for Babel to transform
        transformOptions: {
          presets: ['@babel/preset-env'],
        }
      }
    ]
  ],
  // installOptions: {},
  devOptions: {
    port: 3050,
  },
  buildOptions: {
    out: "build",
    clean: true,
  },
};
