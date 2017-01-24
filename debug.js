// Requires

const color = require('colors');

// Setting colors
color.setTheme({
  success: 'green',
  error: 'red',
});

// Debug

function debugSuccess(message) {
  if (process.env.DEBUG) {
    console.warn(color.success(message));
  }
}

function debugError(message) {
  if (process.env.DEBUG) {
    console.error(color.error(message));
  }
}

// Export

exports.debusSuccess = debugSuccess;
exports.debugError = debugError;
