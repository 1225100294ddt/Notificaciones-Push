@echo off
cd /d "%~dp0server"
where node >nul 2>nul || (echo Instala Node.js 20 o superior y vuelve a ejecutar este archivo.& pause & exit /b 1)
if not exist node_modules echo Este servidor no requiere dependencias para el modo de pruebas.
echo Iniciando servidor Loteria Push...
node servidor.js
pause
