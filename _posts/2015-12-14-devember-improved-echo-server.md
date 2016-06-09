---
layout: devember
title: Devember&#58; Improved echo Server
category: Informatic
tags: broadcast, c, chat, i/o multiplexing, select, server, socket
image: devemberisnow.png
---
I abandoned the idea of a recursive server to avoid proliferation of child processes on each new connected client. [Now](https://github.com/Fahien/exsocket/commit/84b53a07496da48d10fb03cda7c2997a76cfb452) the server benefits of the **I/O Multiplexing** using the **select** function to handle the listening socket and the other connected sockets.

```c
// Call the select function
if ((ready = select(maxfd + 1, &rset, NULL, NULL, NULL)) < 0) {
	perror("select");
	return -1;
}

// Check for incoming connections
if (FD_ISSET(listenfd, &rset)) {
	if ((connfd = accept(listenfd, (struct sockaddr *) &cliaddr, &clilen)) < 0) {
		perror("accept");
		return -1;
	}
	// Save connected socket descriptor in the client array
	for (i = 0; i < FD_SETSIZE; i++) {
		if (client[i] < 0) {
			client[i] = connfd;
			break;
		}
	}
	// ...
}

// Serve clients
for (i = 0; i < FD_SETSIZE; i++) {
	if ((sockfd = client[i]) < 0) {
		continue;
	}
	if (FD_ISSET(sockfd, &rset)) {
		if ((n = exso_readln(sockfd, buff, MAXLINE)) < 0) {
			perror("exso_readln");
		}
		else if (n == 0) {
			printf("A client is gone\n");
			close(sockfd);
			FD_CLR(sockfd, &allset);
			client[i] = -1;
		} else {
			if (exso_writen(sockfd, buff, n) < 0) {
				perror("exso_writen");
			}
		}
		// ...
	}
}
```
## Broadcast

Since I have an array of all the connected clients, I turned the server in a **chat room**. [Now](https://github.com/Fahien/exsocket/commit/5060d726c9a20d359c5440cd9c36ffa15147c483) every message sent by a client is broadcast to all the other connected clients:

```c
int sockfd;
for (i = 0; i < FD_SETSIZE; i++) {
	if (sockfd == client[i] || client[i] == -1) {
		continue;
	}
	if (exso_writen(client[i], buff, n) < 0) {
		perror("exso_writen");
	}
}
```
The complete code can be found on this [repository](https://github.com/Fahien/exsocket).
