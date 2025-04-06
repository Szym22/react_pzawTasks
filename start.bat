@echo off
SET PATH=%cd%\node-v22.14.0-x64;%PATH%

for /f %%i in ('node --version') do echo node: %%i
for /f %%i in ('npm --version') do echo npm: %%i
