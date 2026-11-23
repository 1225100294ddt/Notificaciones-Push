# Lotería Push

Proyecto de Flutter + Node.js inspirado en el manual **Manual_TDD_LoteriaPush**.

## Requisitos
- Flutter 3.22 o superior (Dart 3.3+).
- Node.js 20 o superior.
- VS Code con extensiones Flutter y Dart.

## Ejecutar
1. Descomprime la carpeta `loteria_push`.
2. Abre `app` en VS Code para trabajar con Flutter.
3. Ejecuta `CONFIGURAR_FLUTTER.bat` para generar/actualizar los archivos nativos de Android y descargar dependencias. También puedes abrir `app` y ejecutar `flutter create --platforms=android .` seguido de `flutter pub get`.
4. En otra terminal ejecuta `cd server` y `node servidor.js` (Windows: `INICIAR_WINDOWS.bat`).
5. En el emulador Android, la dirección predeterminada `http://10.0.2.2:3000` apunta al servidor de tu PC. En un teléfono físico cambia la dirección en la pantalla inicial por la IP local de tu computadora, por ejemplo `http://192.168.1.20:3000`.
6. Ejecuta la app con `flutter run`.

## Cómo jugar
- Un jugador crea una sala y comparte el código.
- Los demás escriben su nombre y el código para unirse.
- El cantor pulsa **Cantar siguiente carta**.
- Los jugadores actualizan la consulta del estado y marcan sus cartas.

## Pruebas
En `server`: `npm test` (usa `node:test`, no requiere paquetes adicionales). En `app`: `flutter test`.

## Sobre Firebase / push real
El proyecto funciona en modo local sin API Key ni credenciales Firebase: el servidor registra los envíos como `[push simulado]` en consola. Para entregar notificaciones push reales se requiere crear un proyecto Firebase, registrar Android/iOS con FlutterFire, agregar `firebase_core` y `firebase_messaging`, configurar `firebase_options.dart` y proporcionar al servidor una cuenta de servicio mediante `GOOGLE_APPLICATION_CREDENTIALS`. Nunca guardes el JSON de servicio en la app ni lo subas a GitHub. Este ZIP no contiene credenciales privadas ni afirma que push real esté configurado.

## Estructura
- `server/`: API HTTP, reglas de sala, baraja, validaciones, emisor simulado y pruebas.
- `app/`: aplicación Flutter con pantalla de inicio, cantor y tabla del jugador.

**Nota:** este entorno no tiene Flutter instalado; por ello no se pudo ejecutar `flutter analyze` ni compilar APK aquí. Ejecuta `flutter pub get`, `flutter analyze` y `flutter test` en tu equipo. El servidor se puede probar con `node --test`.
