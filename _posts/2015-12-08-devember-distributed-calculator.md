---
layout: devember
title: Devember&#58; Distributed calculator
category: Informatics
tags: c, calculator, datagram, devember, socket, udp
image: devemberisnow.png
---
It's been a week since I started my devlogs for Devember and finally today I've done something more complex than previous exercises: a **distributed calculator**.

The communication takes place via [UDP](http://www.fahien.me/2015/12/07/devember-udp-echo-client/), so I've used the _sendto_ and _recvfrom_ functions. Managing the client input has been a bit cumbersome but eventually I did:

```c
char buff[MAXLINE];
int a = 0;
int b = 0;
char op[OP_LEN] = "+";
while (fgets(buff, MAXLINE, stdin) != NULL) {
	if (sscanf(buff, "%d %s %d", &a, op, &b) == 3) {
		// ... do networking
	}
}
```
On the other end, the server receives the datagram, interprets the data, computes the results and sends it back to the client:

```c
char buff[MAXLINE];
socklen_t len;

int a;
int b;
char op[OP_LEN];

while (1) {
	// Receive datagram
	len = clilen;
	if (recvfrom(sockfd, buff, MAXLINE, 0, cliaddr, &len) < 0) {
		perror("recvfrom");
		return -1;
	}

	// Interpret data and compute the result
	if (sscanf(buff, "%d %s %d", &a, op, &b) == 3) {
		if (strcmp(op, "+") == 0) {
			sprintf(buff, "%d", a + b);
		} else if (strcmp(op, "-") == 0) {
			sprintf(buff, "%d", a - b);
		} else if (strcmp(op, "*") == 0) {
			sprintf(buff, "%d", a * b);
		} else if (strcmp(op, "/") == 0) {
			if (b != 0) {
				sprintf(buff, "%d", a / b);
			} else {
				sprintf(buff, "Undefined");
			}
		} else if (strcmp(op, "mod") == 0) {
			sprintf(buff, "%d", a % b);
		} else {
			sprintf(buff, "Invalid operator");
		}
	} else {
		sprintf(buff, "Invalid message");
	}

	// Send result to the client
	if (sendto(sockfd, buff, strlen(buff), 0, cliaddr, len) < 0) {
		perror("sendto");
		return -1;
	}
}
```
The complete code can be found on this [repository](https://github.com/Fahien/exsocket).
