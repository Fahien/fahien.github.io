---
layout: devember
title: Devember&#58; I/O Multiplexing using select
category: Informatics
tags: c, client, devember, i/o multiplexing, select, socket
image: devemberisnow.png
---
A few days ago, I wrote a simple [echo Client](https://github.com/Fahien/exsocket/blob/6c2f438cabaa80fbb6f4617ba9986f0bffafd732/echo/echocli.c) that however has some robustness problems. For example, while the client is blocked in a request for user input and the server closes the connection, the client will not aware of that until it try to send data. The **I/O Multiplexing** solves that problem.

Using the select function we can operate on more than one descriptor:

```c
FILE *fp;
int sockfd;
// ...
fd_set readset;
FD_ZERO(&readset);
FD_SET(fileno(fp), &readset);
FD_SET(sockfd, &readset);
int maxfd = MAX(fileno(fp), sockfd) + 1;
if (select(maxfd, &readset, NULL, NULL, NULL) < 0) {
	perror("select");
	return -1;
}
```
Then, when the select returns, we checks whether the descriptors are ready to operate:

```c
if (FD_ISSET(sockfd, &readset)) {
	if ((n = exso_readln(sockfd, recvline, MAXLINE)) < 0) {
		perror("exso_readln");
		return -1;
	}
	if (n == 0) {
		printf("Server terminated prematurely\n");
		return -1;
	}
	fputs(recvline, stdout);
}

if (FD_ISSET(fileno(fp), &readset)) {
	if (fgets(sendline, MAXLINE, fp) == NULL) {
		return 0;
	}
	if (exso_writen(sockfd, sendline, strlen(sendline)) < 0) {
		perror("exso_writen");
		return -1;
	}
}
```
The complete code can be found on this [repository](https://github.com/Fahien/exsocket).
