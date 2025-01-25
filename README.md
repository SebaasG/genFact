# Proyecto de Facturación

https://geninvoicesebaasg.netlify.app/

Este proyecto es una aplicación web de facturación que permite a los usuarios seleccionar productos, agregar detalles de facturación y guardar las facturas generadas. Está basado en componentes personalizados utilizando Web Components, y emplea un sistema de eventos para la comunicación entre componentes. Además, los datos se gestionan mediante `localStorage` y se envían a un servidor backend simulado para guardar las facturas.

## Estructura del Proyecto

Este proyecto está dividido en varios componentes para manejar las diferentes secciones de la aplicación. Los principales componentes son:

- **userComponent**: Componente que permite ingresar los datos del cliente, como nombre, documento de identidad, dirección, correo electrónico y detalles de la factura.
- **prodComponent**: Componente que muestra los productos disponibles y permite seleccionar un producto para agregarlo a la factura.
- **tableComponent**: Componente que maneja la tabla de productos seleccionados, mostrando el código, nombre, cantidad, valor y subtotal de cada producto.
- **summaryComponent**: Componente que muestra un resumen de la factura, incluyendo el subtotal, IVA y total a pagar.

## Funcionalidades

### 1. Selección de productos

Los usuarios pueden seleccionar productos de una lista desplegable. Al seleccionar un producto, se actualizan los detalles del producto (código y valor) en los campos correspondientes.

### 2. Gestión de productos en la tabla

Una vez que se selecciona un producto, el sistema lo agrega a una tabla de productos en la factura, mostrando el código, nombre, cantidad, valor unitario y subtotal. Si el producto ya está en la tabla, se actualiza su cantidad y subtotal.

### 3. Cálculo de totales

El sistema calcula automáticamente el subtotal, IVA (19%) y el total de la factura a medida que se agregan productos a la tabla. Los totales se actualizan dinámicamente.

### 4. Envío de la factura

Cuando el usuario finaliza la selección de productos, se pueden guardar los detalles de la factura, incluyendo los datos del cliente y el total. Los datos de la factura se envían a un servidor simulado para ser almacenados.

### 5. Almacenamiento en `localStorage`

La información de la factura se guarda temporalmente en `localStorage` para que el usuario pueda continuar el proceso más tarde.

## Requisitos

- Navegador moderno que soporte Web Components.
- Servidor local (o backend simulado) que pueda recibir las solicitudes de guardado de las facturas.

## Instrucciones de Instalación

1. Clona este repositorio:

   ```bash
   git clone https://github.com/tu-usuario/proyecto-facturacion.git
