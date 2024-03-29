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
  optimize: {
    bundle: true,
    minify: true,
  }
};
