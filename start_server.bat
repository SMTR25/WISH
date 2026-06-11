@echo off
chcp 65001 >nul
echo ========================================
echo 🚀 启动本地服务器
echo ========================================
echo.
echo 正在启动HTTP服务器...
echo.
echo 📍 访问地址: http://localhost:8080
echo.
echo 💡 提示: 
echo    - 在浏览器中打开上述地址
echo    - 按 Ctrl+C 停止服务器
echo.
echo ========================================
echo.

python -m http.server 8080

pause
