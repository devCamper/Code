BITS 64
DEFAULT REL                  ;RIP relative addressing by default

GLOBAL main                  ;Main must be visible to the linker

;Function the linker will look for in other modules (libs or objs)
EXTERN WriteFile
EXTERN GetStdHandle

STD_OUTPUT_HANDLE   EQU -11

SECTION .data

 strHelloWorld  db "Hello world!", 13, 10, 0
 lenHelloWorld  dd $-strHelloWorld

 hOut           dd 0    ;Will store STDOUT handler

 abyte:    db  1
 abyte1:   db  5
  aword:    dw  452
  adword:   dd  478569  

SECTION .text

main:
 sub rsp, 30h               ;20h (Home space) + 10h (params)


 ;Get STDOUT handler (Handler are 32-bit values)

 mov ecx, STD_OUTPUT_HANDLE
 call GetStdHandle

 mov DWORD [hOut], eax                 ;Useless as now, for future reuse

 ;Write strHelloWorld to STDOUT

 mov ecx, eax
 lea rdx, [strHelloWorld]
 mov r8d, DWORD [lenHelloWorld]
 xor r9, r9
 mov QWORD [rsp+20h], r9
 call WriteFile

 add rsp, 30h

 sub rsp, 30h               ;20h (Home space) + 10h (params)
mov eax, [abyte]    ; Load a double word from memory into eax
mov ebx, [abyte1]    ; Load a double word from memory into ebx
add eax, ebx                ; Adds eax and ebx and stores the result in eax
mov [abyte1], eax     ; Store a double word in eax into memory

 ;Get STDOUT handler (Handler are 32-bit values)

 mov ecx, STD_OUTPUT_HANDLE
 call GetStdHandle

 mov DWORD [hOut], eax                 ;Useless as now, for future reuse

 ;Write strHelloWorld to STDOUT

 mov ecx, eax
 mov eax, [abyte]
 mov [strHelloWorld], eax
 lea rdx, [strHelloWorld]
 mov r8d, DWORD [lenHelloWorld]
 xor r9, r9
 mov QWORD [rsp+20h], r9
 call WriteFile

 add rsp, 30h
 ret