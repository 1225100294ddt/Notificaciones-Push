@echo off
cd /d "%~dp0app"
where flutter >nul 2>nul || (echo No se encontro Flutter. Instala Flutter y agrega flutter\bin al PATH.& pause & exit /b 1)
echo Preparando archivos nativos de Android...
flutter create --platforms=android .
if errorlevel 1 (echo Error al preparar Android.& pause & exit /b 1)
echo Descargando dependencias...
flutter pub get
if errorlevel 1 (echo Error al descargar dependencias.& pause & exit /b 1)
echo Listo. Abre la carpeta app en VS Code y ejecuta: flutter run
pause
