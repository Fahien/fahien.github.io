---
layout: devember
title: Devember&#58; Daytime
category: Informatics
tags: c, daytime, devember, socket
image: devemberisnow.png
---
This devlog presents the fundamental functions of the socket API through a simple daytime client and server.

## Client
*   Includes all prototypes it needs through the header file [basic.h](https://github.com/Fahien/exsocket/blob/master/basic.h);

```c
#include "../basic.h"
```
*   creates the socket;

```c
int sockfd;
if ((sockfd = socket(AF_INET6, SOCK_STREAM, 0)) < 0) {
    perror("socket");
    return -1;
}
```
*   prepares the server _sockaddr_ structure. Note that the port number is converted from character to integer (_atoi()_) and subsequently to the network representation (_htons()_);

```c
struct sockaddr_in6 servaddr;
bzero(&servaddr, sizeof(servaddr));
servaddr.sin6_family = AF_INET6;
servaddr.sin6_port = htons(atoi(argv[2]));
```
*   converts the IPv6 address to the network representation;

```c
if (inet_pton(AF_INET6, argv[1], &servaddr.sin6_addr) <= 0) {
    perror("inet_pton");
    return -1;
}
```
*   connects to the server;

```c
if (connect(sockfd, (struct sockaddr *) &servaddr, sizeof(servaddr)) < 0) {
    perror("connect");
    return -1;
}
```
*   reads from the socket, stores the content into _recvline_, adds ‘0’ to finalize the string and calls _fputs()_ to print it;

```c
int n;
char recvline[MAXLINE + 1];
while ((n = read(sockfd, recvline, MAXLINE)) > 0) {
    recvline[n] = 0;
    fputs(recvline, stdout);
}
if (n < 0) {
    perror("read");
    return -1;
}
```
*   closes the socket.

```c
close(sockfd);
```

## Server
*   Includes all prototypes it needs through the header file basic.h;

```c
#include "../basic.h"
```
*   creates the socket;

```c
int listenfd;
if ((listenfd = socket(AF_INET6, SOCK_STREAM, 0)) < 0) {
    perror("socket");
    return -1;
}
```
*   initializes server sockaddr structure;

```c
struct sockaddr_in6 servaddr;
bzero(&servaddr, sizeof(servaddr));
servaddr.sin6_family = AF_INET6;
servaddr.sin6_addr = in6addr_any;
servaddr.sin6_port = htons(atoi(argv[1]));
```
*   calls the bind function;

```c
if ((bind(listenfd, (struct sockaddr *) &servaddr, sizeof(servaddr))) < 0) {
    perror("bind");
    return -1;
}
```
*   converts the socket to a listening socket;

```c
if (listen(listenfd, BACKLOG) < 0) {
    perror("listen");
    return -1;
}
```

*   waits for client requests, then calls _time()_ to get date and time, builds a string containing the answer, writes on the socket and closes the connection.

```c
int connfd;
int n;
time_t ticks;
char buff[MAXLINE];
while (1) {
    if ((connfd = accept(listenfd, (struct sockaddr *) NULL, NULL)) < 0) {
        perror("accept");
        return 1;
    }

    // Send the time to the client
    ticks = time(NULL);
    snprintf(buff, sizeof(buff), "%.24s\r\n", ctime(&ticks));
    while ((n = write(connfd, buff, strlen(buff))) < 0);
    
    // Close the connection
    close(connfd);
}
```
The complete code can be found on this [repository](https://github.com/Fahien/exsocket).
