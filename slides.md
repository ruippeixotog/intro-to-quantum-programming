---
title: 'Quantum Programming: An Introduction'
theme: beige
scripts: scripts.js
css: style.css
revealOptions:
  width: 1024
  margin: 0.2
  transition: fade
  center: false
  controls: false
  progress: false
---


### Quantum Programming:
## An Introduction

or <!-- .element: style="margin-top: 50px; font-size: 20pt" -->

_"What Do You Mean They Can Be Both Zero And One_

_At The Same Time!?"_

Rui Gonçalves <!-- .element: style="margin-top: 120px" -->

Apr -, 2019

Note:

This is a very short introduction to quantum programming.

The kind of quantum programming we'll see here will be a very low-level one, only slightly higher than circuit design. Nonetheless, the paradigm shift it requires is enough to make our head spin.

Quantum computation, like quantum mechanics in general, is backed by a lot of linear algebra concepts. Understanding them is very important, but this presentation tries to go without them as much as possible.

It's by all means incomplete and it most probably sacrifices formal correctness for ease of understanding.


---


## Quantum Mechanics

- Matter, at a quantum level, is in a host of different possible configurations (states)
  - Close to probability theory!
- States may interfere with each other, making observation a destructive operation
  <!-- .element: class="fragment" -->
  - Unlike probability theory :(
- Goal: store information in quantum states, use quantum gates to "program" quantum interference <!-- .element: class="fragment" -->

Note:

One of principles introduced to us by quantum mechanics was one of uncertainty. TODO

TODO

"There are a handful of basic strategies that can be used to manipulate quantum interference in a way useful for computing, while at the same time not causing the solution to be lost in a tangle of quantum possibilities."


---


## Quantum Hall Of Fame

- Shor's algorithm for integer factorization
  $O\left(\left(\log{}N\right)^3\right)$
- Grover's algorithm for searching in unordered lists
  $O\left(\sqrt{N}\right)$

Note:

https://cs.stackexchange.com/questions/16684/shors-algorithm-speed


---


## Bit

![](img/switch.svg)
<!-- .element: style="height: 600px" -->

Note:

A bit is something very simple to understand, like a wall switch. And its physical implementation is actually a switch - 0 and 1 are just two different voltage levels.


---


## Qubit

![](img/bloch.svg)
<!-- .element: style="height: 500px" -->

Note:

A qubit is something much more complicated, that requires us to adapt our minds to reason about it. There are many quantum phenomena that have a two-level quantum system, like the spin of an electron and the polarization of a photon.


---


## Qubit

$\begin{bmatrix}1 \\\ 0\end{bmatrix}$
$\begin{bmatrix}0 \\\ 1\end{bmatrix}$

$\begin{bmatrix}\frac{1}{\sqrt{2}} \\\ -\frac{1}{\sqrt{2}}\end{bmatrix}$
$\begin{bmatrix}1 \\\ i\end{bmatrix}$
<!-- .element: class="fragment" -->

$\begin{bmatrix}\alpha \\\ \beta\end{bmatrix}, \abs{\alpha}^2 + \abs{\beta}^2 = 1$
<!-- .element: class="fragment" -->

Note:

Mathematically, the state of a qubit is represented as a unit 2-vector in the complex number space - a vector of length 1 with two elements.


---


## Qubit

$\ket{0} = \begin{bmatrix}1 \\\ 0\end{bmatrix}$
$\ket{1} = \begin{bmatrix}0 \\\ 1\end{bmatrix}$

$\ket{\psi} = \alpha\ket{0} + \beta\ket{1} = \begin{bmatrix}\alpha \\\ \beta\end{bmatrix}$

Note:

For reasons you'll see a few slides later, quantum states are typically represented in Dirac notation. |0> and |1> are our basis states and since as a set they are a basis for the vector space, we can write any qubit state as a linear combination of |0> and |1>.

When both alpha and beta are greater than zero, we say the qubit is in a _superposition_ between |0> and |1>.


---


## Measuring a Qubit

- "Looking" at a qubit collapses its state!
- Measuring $q = \ket{0}$:
<!-- .element: class="fragment" -->
  - 100% chance of measuring 0, $q := \ket{0}$
- Measuring $q = \frac{1}{\sqrt{2}}\left(\ket{0} + \ket{1}\right)$:
<!-- .element: class="fragment" -->
  - $\left(\frac{1}{\sqrt{2}}\right)^2$ = 50% chance of measuring 0, $q := \ket{0}$
  - $\left(\frac{1}{\sqrt{2}}\right)^2$ = 50% chance of measuring 1, $q := \ket{1}$


---


## Visualizing a Qubit

![](img/bloch.svg)
<!-- .element: style="height: 500px" -->

Note:

Qubits may also be pictured in 3D using the Bloch sphere representation. The Bloch sphere gives a way of describing a single-qubit quantum state (which is a two-dimensional complex vector) as a three-dimensional real-valued vector. This is important because it allows us to visualize single-qubit states and thereby develop reasoning that can be invaluable in understanding multi-qubit states (where sadly the Bloch sphere representation breaks down).


---


## Quantum Gates

- Operations performing a rotation of the quantum state vector
- Unitary matrices - preserve norm, always invertible

Note:

Explain concept of universal set of gates


---


## X Gate

- $X = \begin{bmatrix}0 & 1\\\1 & 0\end{bmatrix}$

- $X\ket{0} = \ket{1}$

  $X\ket{1} = \ket{0}$

  $X\left(\alpha\ket{0} + \beta\ket{1}\right) = \alpha X\ket{0} + \beta X\ket{1} = \alpha\ket{1} + \beta\ket{0}$
  <!-- .element: class="fragment" -->


---


## X Gate

![](img/gate_x.png)
<!-- .element: style="height: 500px" -->


---


## H Gate

- $H = \isqrt{} \begin{bmatrix}1 & 1\\\1 & -1\end{bmatrix}$

- $H\ket{0} = \ket{+} = \isqrt{}\left(\ket{0} + \ket{1}\right)$

  $H\ket{1} = \ket{-} = \isqrt{}\left(\ket{0} - \ket{1}\right)$


---


## H Gate

![](img/gate_h.png)


---


## Multiple Qubits

- $\begin{bmatrix}1 \\\ 0\end{bmatrix} \otimes
  \begin{bmatrix}0 \\\ 1\end{bmatrix} =
  \begin{bmatrix}0 \\\ 1 \\\ 0 \\\ 0\end{bmatrix}$

- $\ket{1} \otimes \ket{0} = \ket{10}$


---


## CNOT Gate

- $CNOT = \begin{bmatrix}
    1 & 0 & 0 & 0 \\\
    0 & 1 & 0 & 0 \\\
    0 & 0 & 0 & 1 \\\
    0 & 0 & 1 & 0
    \end{bmatrix}$


---


## CNOT Gate

<iframe src='/_assets/quirk.html#circuit={"cols":[["•","X"]]}' width='100%' height='390px' />

Note:

Don't forget to mention entanglement.


---


## Q# #

```
operation MyOperation(q1: Qubit, q2: Qubit): Unit {
    H(q1);
    CNOT(q1, q2);
}
```


---


## Types of Sub-Problems

- Generating a state
- Distinguishing states
- Oracles


---


## Generating a state

#### Generate superposition of all basis states

  e.g. $\frac{1}{\sqrt{8}}\left(\ket{000} + \ket{001} + ... + \ket{111}\right)$

<iframe src='/_assets/quirk.html#circuit={"cols":[["…","…","…"]]}' width='100%' height='390px' />


---


## Generating a state

#### Generate superposition of all basis states

```
operation Prepare(qs: Qubit[]): Unit {
  for(q in qs) {
    H(q);
  }
}
```


---


## Generating a state

#### Generate superposition of two basis states

  e.g. $\frac{1}{\sqrt{2}}\left(\ket{0000} + \ket{1010}\right)$

<iframe src='/_assets/quirk.html#circuit={"cols":[["…","…","…","…"]]}' width='100%' height='390px' />


---


## Generating a state

#### Generate superposition of two basis states

```
operation Prepare(qs: Qubit[], bits: Bool[]): Unit {
  // Hadamard first qubit
  H(qs[0]);
  // iterate through the bitstring and CNOT to qubits
  // corresponding to true bits
  for (i in 1..Length(qs)-1) {
    if (bits[i]) {
      CNOT(qs[0], qs[i]);
    }
  }
}
```


---


## Distinguising states

#### Distinguish zero state and W state

  e.g. $\ket{000}$ or $\frac{1}{\sqrt{3}}\left(\ket{100} + \ket{010} + \ket{001}\right)$?


---


## Distinguising states

#### Distinguish zero state and W state

```
operation Measure(qs: Qubit[]): Bool {
  for(q in qs) {
    if(M(q) == One) {
      return true;
    }
  }
  return false;
}
```


---


## Quantum Oracles

- A "black box" operation that is used as input to another algorithm
- Often a classical function $\\{0,1\\}^n \rightarrow \\{0,1\\}^m$
- Classically, we'd define $y = O\ket{x} = \ket{f(x)}$
  <!-- .element: class="fragment" -->
  - But then the function is not guaranteed to be invertible
  - Instead, $O(\ket{x} \otimes \ket{y}) = \ket{x} \otimes \ket{y \oplus f(x)}$

Note:

- https://docs.microsoft.com/en-us/quantum/concepts/oracles?view=qsharp-preview
- https://codeforces.com/contest/1001/problem/G
- https://codeforces.com/contest/1001/problem/H


---


## Quantum Oracles

#### Oracle for qubit parity

  $O(\ket{0000} \otimes \ket{0}) = \ket{0000} \otimes \ket{0}$

  $O(\ket{1101} \otimes \ket{0}) = \ket{1101} \otimes \ket{1}$

  $O(\ket{0000} \otimes \ket{1}) = \ket{0000} \otimes \ket{1}$
  <!-- .element: class="fragment" data-fragment-index="1" -->

  $O(\ket{1101} \otimes \ket{1}) = \ket{1101} \otimes \ket{0}$
  <!-- .element: class="fragment" data-fragment-index="1" -->


---


## Quantum Oracles

#### Oracle for qubit parity

```
operation Oracle(xs: Qubit[], y: Qubit): Unit {
  for(x in xs) {
    CNOT(x, y);
  }
}
```


---


## Deutsch-Jozsa algorithm

- Given:
  - A quantum oracle – an operation on $n+1$ qubits implementing a function $f: \\{0,1\\}^n \rightarrow \\{0,1\\}$
  - Guaranteed to be either constant (e.g. $f(x) = 0$) or balanced (e.g. $f(x) = x \bmod 2$)
- Is the function constant? 

Notes:

You can read more about this problem at https://en.wikipedia.org/wiki/Deutsch%E2%80%93Jozsa_algorithm.


---


## Deutsch-Jozsa algorithm

- You only need to call the oracle once!

<iframe src='/_assets/quirk.html#circuit={"cols":[["…","…","…","…"],[1,"•",1,"X"],["…","…","…","…"]]}' width='100%' height='390px' />


---


<!-- .slide: class="left-aligned-slide" -->
## Deutsch-Jozsa algorithm

Starting with state:

$\frac{1}{\sqrt{2^{n+1}}}\sum_{x=0}^{2^n-1} \ket{x} (\ket{0} - \ket{1})$

After oracle application:

$\frac{1}{\sqrt{2^{n+1}}}\sum_{x=0}^{2^n-1} \ket{x} (\ket{f(x)} - \ket{1 \oplus f(x)})$

Given that for each $x$, $f(x) = 0$ or $f(x) = 1$:

$\frac{1}{\sqrt{2^{n+1}}}\sum_{x=0}^{2^n-1} (-1)^{f(x)} \ket{x} (\ket{0} - \ket{1})$

Note:

The step where the controlled operation affects the inputs and not the outputs is very counter-intuitive. This _phase kickback_ effect is very powerful and used as a building block for many other quantum algorithms. https://cs.uwaterloo.ca/~watrous/LectureNotes/CPSC519.Winter2006/05.pdf provides an excellent proof of this algorithm.


---


## Deutsch-Jozsa algorithm

```
operation IsConstant(N: Int, Uf: (Qubit[], Qubit) => Unit): Bool {
  mutable res = true;
  using (qs = Qubit[N+1]) {
    X(qs[N]);
    ApplyToEach(H, qs[0..N]);
    Uf(qs[0..N-1], qs[N]);
    for(i in 0..N-1) {
      H(qs[i]);
      if(M(qs[i]) == One) {
        set res = false;
      }
    }
    ResetAll(qs);
  }
  return res;
}
```


---


## Grover Search

<iframe src='/_assets/quirk.html#circuit={"cols":[["X","X","X","X","X"],["H","H","H","H","H"],["Chance5"],["~vn6c"],["⊖","⊖","⊖","⊖","X"],["Chance5"],["~vn6c"],["⊖","⊖","⊖","⊖","X"],["Chance5"],["~vn6c"],["⊖","⊖","⊖","⊖","X"],["Chance5"],["~vn6c"],["⊖","⊖","⊖","⊖","X"],["Chance5"]],"gates":[{"id":"~vn6c","name":"Oracle","circuit":{"cols":[["Z","•","◦","•","•"]]}}]}' width='100%' height='450px' />


---


## What's More?

- Quantum Fourier Transform
- Amplitude Amplification
- Error Correction
- Arithmetic


---

<!-- .slide: class="thank-you-slide" -->
## Thank you!

- Microsoft Quantum Development Kit <br />
  https://docs.microsoft.com/quantum

- Quirk Simulator <br />
  https://algassert.com/quirk

- Quantum Katas <br />
  https://github.com/Microsoft/QuantumKatas

<!-- .element: style="margin-bottom: 60px" -->
https://ruippeixotog.net/intro-to-quantum-programming
