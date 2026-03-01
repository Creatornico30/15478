/**
 * Punto de entrada para publicar como aplicación web en Google Apps Script.
 */
function doGet() {
  return HtmlService.createHtmlOutputFromFile('Index')
    .setTitle('NovaObra | Obra civil y acabados modernos')
    .setXFrameOptionsMode(HtmlService.XFrameOptionsMode.ALLOWALL);
}

/**
 * Procesa una solicitud de cotización enviada desde la interfaz.
 * Puedes extender esta función para guardar en Sheets, enviar correo, etc.
 */
function processQuote(data) {
  if (!data || !data.nombre || !data.telefono || !data.espacio) {
    throw new Error('Por favor completa los campos obligatorios.');
  }

  const now = new Date();
  const quoteId = 'NOVA-' + Utilities.formatDate(now, Session.getScriptTimeZone(), 'yyyyMMdd-HHmmss');

  // Ejemplo de registro en logs (reemplazar por SpreadsheetApp/MailApp en producción).
  console.log(JSON.stringify({ quoteId: quoteId, createdAt: now.toISOString(), payload: data }));

  return {
    ok: true,
    quoteId: quoteId,
    message: '¡Cotización recibida! Te contactaremos muy pronto.'
  };
}
