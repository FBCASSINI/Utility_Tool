// Requires

const color = require('colors');
const fs = require('fs');

// Setting colors
color.setTheme({
  success: 'green',
  error: 'red',
});

// Debug

function debugSuccess(message) {
  if (process.env.DEBUG) {
    console.log(color.success(message));
        // Logging
    fs.appendFile('./logs/log.log', message + '\n', (err) => {});
  }
}

function debugError(message) {
  if (process.env.DEBUG) {
    console.log(color.error(message));

    // Logging
    fs.appendFile('./logs/log.log', message + '\n', (err) => {});
  }
}

// Export

exports.debusSuccess = debugSuccess;
exports.debugError = debugError;
