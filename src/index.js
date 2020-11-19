
module.exports = function () {
    return {
      visitor: {
        Identifier(path) {
          console.log('identifier');
        },
        StringLiteral(path) {
          console.log('string literal');
        },
      },
    };
  }