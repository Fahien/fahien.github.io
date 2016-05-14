---
layout: devember
title: Devember&#58; Sending an acknowledgement
category: Informatics
tags: acknowledgement, c, devember, errno, perror, socket
image: devemberisnow.png
---
Today we want the client responds the server with an acknowledgement message, so after the reading step we can call the write function:

```c
char *ack = "Message received\n";
if ((n = write(sockfd, ack, strlen(ack))) < 0) {
    perror("write");
    return -1;
}
```
On the other side, the server invokes the read function:

```c
char recvline[MAXLINE + 1];
if ((n = read(connfd, recvline, MAXLINE)) > 0) {
    recvline[n] = 0;
    fputs(recvline, stdout);
}
if (n < 0) {
    perror("read");
    return -1;
}
```
As you may have noticed, both read and write functions return the number of characters written in the socket buffer. On error they return a negative value (-1) and the _errno_ variable is set appropriately, thus through the _perror_ function we can print a message corresponding to the current value of errno. The complete code can be found on this [repository](https://github.com/Fahien/exsocket).
