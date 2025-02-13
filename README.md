# CARMAN - Gestión de Citas para taller Mecánico 🚗

## Objetivo y Descripción

**CARMAN** es una aplicación móvil diseñada para facilitar la gestión de citas en talleres mecánicos. El objetivo principal de **CARMAN** es ofrecer a los usuarios una forma rápida, sencilla y eficiente de programar sus citas para la reparación de vehículos, permitiéndoles elegir el día y la hora que mejor se adapte a su disponibilidad, brindando una experiencia cómoda y libre de complicaciones.

La aplicación permite a los usuarios iniciar sesión con su cuenta, o registrarse rápidamente si no tienen una. Una vez logueados, los usuarios accederán a la agenda de citas, donde podrán elegir el día y la hora de la cita. Además, podrán describir el problema de su vehículo para que el taller pueda ofrecer un servicio más eficiente.

## Arquitectura

La aplicación CARMAN sigue una arquitectura **cliente-servidor**, separando de manera eficiente la interacción del usuario, el procesamiento de datos y el almacenamiento de información:

- **Cliente (App móvil):** Los usuarios ingresan sus datos y seleccionan citas.
- **Servidor:** Procesa la lógica de negocio, valida las entradas y gestiona la programación de citas.
- **Base de datos en la nube:** Los datos se almacenan de forma segura y accesible, garantizando un acceso rápido.

### Ventajas de la arquitectura cliente-servidor:

- **Escalabilidad:** La arquitectura basada en la nube permite agregar recursos sin afectar el rendimiento de la app.
- **Seguridad:** Los datos sensibles son almacenados y protegidos en el servidor, con medidas de autenticación y cifrado.
- **Mantenimiento simplificado:** La centralización de la lógica de negocio y la base de datos permite actualizaciones y mantenimiento sin necesidad de realizar cambios en los dispositivos de los usuarios.
- **Rendimiento optimizado:** Los dispositivos móviles no se ven sobrecargados por tareas pesadas, lo que mejora la experiencia del usuario.
- **Accesibilidad:** La aplicación está disponible en cualquier momento y desde cualquier lugar gracias a la nube.

## Framework Utilizado

**React Native** ha sido elegido como el framework para el desarrollo de **CARMAN**, ya que permite crear aplicaciones móviles nativas para **iOS** y **Android** utilizando un solo código base en **JavaScript**. Este enfoque acelera el proceso de desarrollo y optimiza el mantenimiento y las actualizaciones, ya que solo se necesita modificar una base de código.

React Native también permite el uso de componentes nativos y proporciona una excelente experiencia de usuario con un rendimiento cercano al de las aplicaciones nativas. La integración con herramientas como **Expo** facilita el proceso de desarrollo, ofreciendo soluciones listas para usar que ahorran tiempo y esfuerzo.

## Estrategia de Versionamiento

Se ha adoptado la estrategia de **Semantic Versioning (SemVer)** para gestionar las actualizaciones de **CARMAN**. Esto permite una forma clara y estructurada de comunicar los cambios realizados en cada versión. El formato de versionado sigue el esquema **MAJOR.MINOR.PATCH**:

- **MAJOR:** Cambios incompatibles con versiones anteriores.
- **MINOR:** Nuevas características compatibles con versiones anteriores.
- **PATCH:** Corrección de errores o mejoras menores.

Esta estrategia ayuda a mantener un control adecuado sobre el ciclo de vida de la aplicación, facilita la colaboración en el desarrollo y asegura que los usuarios siempre sepan qué esperar de cada nueva versión.

## Diagrama de flujo 

![] ()

