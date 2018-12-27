window.blockly = window.blockly || {};
window.blockly.js = window.blockly.js || {};
window.blockly.js.blockly = window.blockly.js.blockly || {};
window.blockly.js.blockly.InserirRegistro = window.blockly.js.blockly.InserirRegistro || {};

/**
 * InserirRegistro
 */
window.blockly.js.blockly.InserirRegistro.Executar = function() {

  this.cronapi.screen.startInsertingMode(eval("User"));
}
