Set oShell = CreateObject ("Wscript.Shell") 
Dim strArgs
strArgs = "cmd /c Chrome.bat"
oShell.Run strArgs, 0, false