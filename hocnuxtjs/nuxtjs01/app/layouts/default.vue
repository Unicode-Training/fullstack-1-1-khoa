<template>
  <header>
    <h2>Header</h2>
    <RouterLink to="/">Home</RouterLink>
    <RouterLink to="/about">About</RouterLink>
    <RouterLink to="/products">Products</RouterLink>
    <RouterLink to="/todos">Todos</RouterLink>
    <RouterLink to="/demo">Demo</RouterLink>
  </header>
  <main>
    <slot></slot>
  </main>
  <footer>
    <h2>Footer</h2>
  </footer>
</template>
