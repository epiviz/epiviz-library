// const ClosureCompiler = require('google-closure-compiler-js').webpack;
// const path = require('path');

// module.exports = {
//   entry: [
//     path.join(__dirname, 'src/epiviz/main.js')
//   ],
//   output: {
//     path: path.join(__dirname, 'bin'),
//     filename: 'epiviz.min.js'
//   },
//   plugins: [
//     new ClosureCompiler({
//       options: {
//         languageIn: 'ECMASCRIPT6',
//         languageOut: 'ECMASCRIPT5',
//         compilationLevel: 'ADVANCED',
//         warningLevel: 'VERBOSE',
//         jsCode: ['src/epiviz/**']
//       },
//     })
//   ]
// };