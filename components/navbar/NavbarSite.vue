<template>
  <header>
    <nav>
      <div class="menu">
        <div class="menu-toggle" :class="{'open': menuOpen}" @click="menuOpen = !menuOpen">
          <div class="hamburger"></div>
        </div>
        <ul>
          <li>
            <NuxtLink to="/">עמוד הבית</NuxtLink>
          </li>
          <li><NuxtLink to="/project">פרויקטים</NuxtLink></li>
          <li><NuxtLink to="/about">אודות</NuxtLink></li>
          <li><NuxtLink to="/contact">צור קשר</NuxtLink></li>
        </ul>
      </div>
      <div class="logo">ADI<span>GAIST</span></div>
    </nav>
  </header>
</template>

<script setup>
const menuOpen = ref(false);
</script>

<style lang="scss" scoped>
header {
  @apply w-screen;
  @apply bg-adi-500;

  nav {
    @apply w-full container mx-auto py-4 px-4 lg:px-0;
    @apply flex justify-between items-center;
    @apply text-white;

    .logo {
      @apply text-3xl;
      @apply font-black;
      span {
        @apply font-normal;
      }
    }

    .menu {
      ul {
        @apply hidden lg:flex items-center gap-8;

        li {
          a.router-link-active,
          a:hover {
            @apply font-bold;
          }

          a.router-link-active {
            @apply underline;
            text-underline-offset: 0.6rem;
          }
        }
      }
    }
  }
}

.menu-toggle {
  cursor: pointer;
  @apply lg:hidden;
}

.hamburger,
.hamburger::before,
.hamburger::after {
  content: "";
  display: block;
  background: #fff;
  height: 5px;
  width: 1.75em;
  border-radius: 3px;
  transition: all ease-in-out 500ms;
}

.hamburger::before {
  transform: translateY(-10px);
}

.hamburger::after {
  transform: translateY(5px);
}

.open .hamburger {
  transform: rotate(45deg);
}

.open .hamburger::before {
  opacity: 0;
}

.open .hamburger::after {
  transform: translateY(-5px) rotate(-90deg);
}
</style>
