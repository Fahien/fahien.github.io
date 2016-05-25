---
layout: devember
title: Devember&#58; UDP echo Client
category: Informatics
tags: c, client, devember, recvfrom, sendto, socket, udp
image: devemberisnow.png
---
The examples seen so far show applications that rely on the [Transmission Control Protocol](https://en.wikipedia.org/wiki/Transmission_Control_Protocol) (TCP). Using the [User Datagram Protocol](https://en.wikipedia.org/wiki/User_Datagram_Protocol) (UDP), we have to make some minor changes:

*   The socket type must be `SOCK_DGRAM`;

    ```c
    int sockfd;
    if ((sockfd = socket(AF_INET6, SOCK_DGRAM, 0)) < 0) {
        perror("socket");
        return -1;
    }
    ```
*   To send data we must use the **sendto** function;

    ```c
    struct sockaddr_in6 servaddr;
    bzero(&servaddr, sizeof(servaddr));
    servaddr.sin6_family = AF_INET6;
    servaddr.sin6_port = htons(atoi(argv[2]));

    //Convert the IPv6 Address in the network representation
    if (inet_pton(AF_INET6, argv[1], &servaddr.sin6_addr) <= 0) {
        perror("inet_pton");
        return -1;
    }

    char sendline[MAXLINE];
    if (fgets(sendline, MAXLINE, fp) != NULL) {
        if (sendto(sockfd, sendline, strlen(sendline), 0, servaddr, sizeof(servaddr) < 0) {
            perror("sendto");
            return -1;
        }
    }
    ```
*   To receive data we must use the **recvfrom** function;
    
    ```c
    struct sockaddr *replyaddr;
    replyaddr = malloc(sizeof(servaddr));
    len = sizeof(servaddr);
    char recvline[MAXLINE + 1];

    if ((n = recvfrom(sockfd, recvline, MAXLINE, 0, replyaddr, &len)) < 0) {
        perror("recvfrom");
        return -1;
    }

    recvline[n] = 0;
    ```
*   Since UDP is a connectionless protocol, we must check the identity of the peer.

    ```c
    char buff[INET6_ADDRSTRLEN];
    struct sockaddr_in6 *sa;

    if ((len != sizeof(servaddr)) || memcmp(&servaddr, replyaddr, len) != 0) {
       sa = (struct sockaddr_in6 *) replyaddr;
       inet_ntop(AF_INET6, &sa->sin6_addr, buff, INET6_ADDRSTRLEN);
       printf("Ignoring reply from %s\n", buff);
       continue;
    }
    ```
The complete code can be found on this [repository](https://github.com/Fahien/exsocket).
