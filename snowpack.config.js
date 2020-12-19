module.exports = {
  mount: {
    src: "/dist",
    public: "/",
  },
  devOptions: {
    port: 3050,
  },
  buildOptions: {
    out: "build",
    clean: true,
  },
  experiments: {
    optimize: {
      bundle: true,
      minify: true,
    }
  }
};
