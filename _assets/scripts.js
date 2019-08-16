window.MathJax = {
  AuthorInit: function () {
    MathJax.Hub.Config({
      TeX: {
        Macros: {
          ket: ["{\\left| #1 \\right>}", 1],
          abs: ["\\left\\lvert #1 \\right\\rvert", 1],
          isqrt: "\\frac{1}{\\sqrt{2}}"
        }
      }
    });
  }
}
