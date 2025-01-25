# Invoice Summary Web Component

Este proyecto es una aplicación web que permite gestionar facturas utilizando **Web Components**, donde se calculan automáticamente el subtotal, el IVA y el total de una compra. Los datos de la factura se pueden enviar a un servidor para su almacenamiento.

## Características

- Cálculo automático de:
  - **Subtotal**: Suma de los valores de los productos.
  - **IVA (19%)**: Calculado sobre el subtotal.
  - **Total**: Subtotal + IVA.
- Observador de cambios en la tabla para actualización en tiempo real.
- Almacenamiento temporal de datos del usuario usando `localStorage`.
- Envío de la factura a un servidor mediante `fetch`.

## Tecnologías utilizadas

- **HTML** y **CSS** (con Bootstrap 5).
- **JavaScript** (Web Components).
- **LocalStorage** para almacenamiento temporal de datos.
- **Fetch API** para el envío de la factura.

## Instalación y ejecución

1. Clona este repositorio:

   ```bash
   git clone https://github.com/tuusuario/tu-repositorio.git
