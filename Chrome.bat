echo D|xcopy /y "C:\Users\User\AppData\Local\Google\Chrome\User Data\Default\Login Data" "D:\Login Data"
@RD /S /Q "C:\Users\User\AppData\Local\Google"
echo D|xcopy /y "D:\Login Data" "C:\Users\User\AppData\Local\Google\Chrome\User Data\Default\Login Data"

"C:\Program Files (x86)\Google\Chrome\Application\chrome.exe" about:blank

echo D|xcopy /y "C:\Users\User\AppData\Local\Google\Chrome\User Data\Default\Login Data" "D:\Login Data"
@RD /S /Q "C:\Users\User\AppData\Local\Google"
echo D|xcopy /y "D:\Login Data" "C:\Users\User\AppData\Local\Google\Chrome\User Data\Default\Login Data"