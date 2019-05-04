---
layout: post
mathjax: true
title: Static Single Assignment form
category: Informatics
tags: compiler
excerpt: Static Single Assignment (SSA) form is a property of an <a href="https://en.wikipedia.org/wiki/Intermediate_representation" target="_blank">Intermediate Representation</a> where each variable is assigned exactly once and it is defined before it is used, and existing variables are split into versions.
---
Static Single Assignement (SSA) form is a property of an <a href="https://en.wikipedia.org/wiki/Intermediate_representation" target="_blank">Intermediate Representation</a> where each variable is assigned exactly once and it is defined before it is used, and existing variables are split into versions.

$$
\begin{align}
	\bbox[4pt, border: 1pt solid grey]
	{
		\begin{align}
		y = 1 \\
		y = 2 \\
		x = y
		\end{align}
	}
	\bbox[8pt]
	{
		\rightarrow
	}
	\bbox[4pt, border: 1pt solid grey]
	{
		\begin{align}
		y_1 & = 1 \\
		y_2 & = 2 \\
		x_1 & = y_2
		\end{align}
	}
\end{align}
$$

This technique enables lots of <a href="https://en.wikipedia.org/wiki/Optimizing_compiler" target="_blank">compiler optimizations</a>.

## Converting to SSA

In order to convert an IR to SSA form, the target of each assignment should be replaced with a new variable and each use of these variables should be substituted with the version of that variable reaching that point.

## $\phi$ (phi) function

A $\phi$ function is a special statement which generates a new definition of a variable depending on the control flow. In the last block depicted below, we do not know which version of y to use:


$$
\bbox[4pt, border: 1pt solid grey]
{
	\begin{align}
	x_1 & = 5 \\
	x_2 & = x_1 - 3 \\
	x_2 & \lt 3
	\end{align}
}
\\
\bbox[margin-right:40pt]{\downarrow}
\bbox[]{\downarrow}
\\
\begin{align}
	\bbox[4pt, border: 1pt solid grey]
	{
		\begin{align}
		y_1 & = x_2 * 2 \\
		w_1 & = y_1
		\end{align}
	}
	\bbox[margin-right:32pt]{}
	\bbox[4pt, border: 1pt solid grey]
	{
		\begin{align}
		y_2 & = x_2 - 3
		\end{align}
	}
\end{align}
\\
\bbox[margin-right:40pt]{\downarrow}
\bbox[]{\downarrow}
\\
\bbox[4pt, border: 1pt solid grey]
{
	\begin{align}
	w_2 & = x_2 - y_\color{red}{?} \\
	z_1 & = x_2 - y_\color{red}{?}
	\end{align}
}
$$

We use a $\phi$ function, which selects the right version according to the flow, so the last block becomes:

$$
\begin{align}
\bbox[4pt, border: 1pt solid grey]
{
	\begin{align}
	y_3 & = \phi(y_1, y_2) \\
	w_2 & = x_2 - y_3 \\
	z_1 & = x_2 + y_3
	\end{align}
}
\end{align}
$$

In order to determine where to insert a Phi function and for which variables, we use the concept of <a href="https://en.wikipedia.org/wiki/Dominator_(graph_theory)" target="_blank">dominance frontiers</a>.
