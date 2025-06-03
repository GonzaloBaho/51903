import dslVisitor from './generated/dslVisitor.js';

export default class CustomDSLVisitor extends dslVisitor {
  visitRegla(ctx) {
    const id = ctx.IDENTIFICADOR().getText();
    const condicion = this.visit(ctx.condicion());
    const comando = this.visit(ctx.comando());

    console.log(`Regla definida para: ${id}`);
    console.log(`Condición: ${condicion}`);
    console.log(`Comando: ${comando}`);

    return null;
  }

  visitCondicion(ctx) {
    if (ctx.accesoNoAutorizado()) return this.visit(ctx.accesoNoAutorizado());
    if (ctx.multiplesIntentosFallidos()) return this.visit(ctx.multiplesIntentosFallidos());
    if (ctx.actividadSospechosa()) return this.visit(ctx.actividadSospechosa());
    return "Condición desconocida";
  }

  visitAccesoNoAutorizado(ctx) {
    return 'Acceso No Autorizado';
  }

  visitMultiplesIntentosFallidos(ctx) {
    const numero = ctx.NUMERO().getText();
    return `Múltiples intentos fallidos (mayor a ${numero})`;
  }

  visitActividadSospechosa(ctx) {
    return 'Actividad sospechosa (acceso a recursos sensibles sin ser admin)';
  }

  visitComando(ctx) {
    if (ctx.AGREGAR_USUARIO()) return 'Agregar usuario a lista negra';
    if (ctx.AGREGAR_IP()) return 'Agregar IP a lista negra';
    if (ctx.ACTIVAR_MONITOREO()) return 'Activar monitoreo detallado';
    return "Comando desconocido";
  }
}
