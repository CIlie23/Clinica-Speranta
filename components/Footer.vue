<template>
    <footer class="bg-[#323236] text-white pt-12 pb-6">
      <div class="max-w-6xl mx-auto px-4">
        <div class="flex flex-col md:flex-row justify-between gap-8 mb-10">
          <!-- Despre noi -->
          <div>
            <h3 class="font-semibold mb-3">Despre noi</h3>
            <ul class="space-y-1 text-gray-300 text-sm">
              <li>Acasa</li>
              <li>Updates</li>
              <li>Beta</li>
              <li>Newsletter</li>
              <li>Collaborations</li>
            </ul>
          </div>
          <!-- Servicii -->
          <div>
            <h3 class="font-semibold mb-3">Servicii</h3>
            <ul class="space-y-1 text-gray-300 text-sm">
              <li>Business</li>
              <li>Designers</li>
              <li>Classrooms</li>
              <li>Newcomers</li>
            </ul>
          </div>
          <!-- Program -->
          <div>
            <h3 class="font-semibold mb-3">Program</h3>
            <ul class="space-y-1 text-gray-300 text-sm">
              <li>Learn Hub</li>
              <li>Manuals</li>
              <li>Tutorials</li>
              <li>Communities</li>
            </ul>
          </div>
          <!-- Blog -->
          <div>
            <h3 class="font-semibold mb-3">Blog</h3>
            <ul class="space-y-1 text-gray-300 text-sm">
              <li>Tutorials</li>
              <li>Editorials</li>
              <li>Product</li>
              <li>Newsroom</li>
            </ul>
          </div>
          <!-- Linkuri utile -->
          <div>
            <h3 class="font-semibold mb-3">Linkuri utile</h3>
            <ul class="space-y-1 text-gray-300 text-sm">
              <li>Termeni si conditii</li>
              <li>Confidentialitate</li>
            </ul>
          </div>
        </div>
        <!-- Porumbel, copyright, social -->
        <div class="flex flex-col items-center mt-8">
          <img
            src="~/assets/porumbel.png"
            alt="dove"
            class="w-20 mb-2"
          />
          <p class="text-gray-300 text-sm mb-2">
            © Lolololo. All rights reserved.
          </p>
          <div class="flex space-x-5 mt-2">
            <a href="#" aria-label="Facebook" class="hover:text-blue-400">
              <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path
                  d="M22 12c0-5.522-4.477-10-10-10S2 6.478 2 12c0 5.006 3.657 9.128 8.438 9.877v-6.987h-2.54v-2.89h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.242 0-1.632.771-1.632 1.562v1.875h2.773l-.443 2.89h-2.33v6.987C18.343 21.128 22 17.006 22 12"
                />
              </svg>
            </a>
            <a href="#" aria-label="Twitter" class="hover:text-blue-400">
              <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path
                  d="M24 4.557a9.93 9.93 0 0 1-2.828.775 4.932 4.932 0 0 0 2.165-2.724c-.951.564-2.005.974-3.127 1.195A4.92 4.92 0 0 0 16.616 3c-2.73 0-4.942 2.21-4.942 4.936 0 .388.045.765.127 1.124C7.728 8.89 4.1 7.13 1.671 4.149c-.427.729-.666 1.577-.666 2.476 0 1.708.87 3.216 2.188 4.099a4.904 4.904 0 0 1-2.237-.616c-.054 2.281 1.581 4.415 3.949 4.89a4.936 4.936 0 0 1-2.224.084c.627 1.956 2.444 3.377 4.6 3.417A9.867 9.867 0 0 1 0 21.543a13.94 13.94 0 0 0 7.548 2.209c9.057 0 14.009-7.496 14.009-13.986 0-.213-.005-.425-.014-.636A9.936 9.936 0 0 0 24 4.557z"
                />
              </svg>
            </a>
            <a href="#" aria-label="Instagram" class="hover:text-blue-400">
              <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path
                  d="M12 2.163c3.204 0 3.584.012 4.85.07 1.366.062 2.633.334 3.608 1.308.974.974 1.246 2.241 1.308 3.608.058 1.266.07 1.646.07 4.85s-.012 3.584-.07 4.85c-.062 1.366-.334 2.633-1.308 3.608-.974.974-2.241 1.246-3.608 1.308-1.266.058-1.646.07-4.85.07s-3.584-.012-4.85-.07c-1.366-.062-2.633-.334-3.608-1.308-.974-.974-1.246-2.241-1.308-3.608C2.175 15.647 2.163 15.267 2.163 12s.012-3.584.07-4.85c.062-1.366.334-2.633 1.308-3.608.974-.974 2.241-1.246 3.608-1.308C8.416 2.175 8.796 2.163 12 2.163zm0-2.163C8.741 0 8.332.013 7.052.072 5.775.13 4.602.402 3.635 1.37 2.668 2.337 2.396 3.51 2.338 4.788.013 8.332 0 8.741 0 12c0 3.259.013 3.668.072 4.948.058 1.277.33 2.45 1.297 3.417.967.967 2.14 1.239 3.417 1.297C8.332 23.987 8.741 24 12 24c3.259 0 3.668-.013 4.948-.072 1.277-.058 2.45-.33 3.417-1.297.967-.967 1.239-2.14 1.297-3.417.059-1.28.072-1.689.072-4.948 0-3.259-.013-3.668-.072-4.948-.058-1.277-.33-2.45-1.297-3.417-.967-.967-2.14-1.239-3.417-1.297C15.668.013 15.259 0 12 0zm0 5.838a6.162 6.162 0 1 0 0 12.324 6.162 6.162 0 0 0 0-12.324zm0 10.162a3.999 3.999 0 1 1 0-7.998 3.999 3.999 0 0 1 0 7.998zm6.406-11.845a1.44 1.44 0 1 0 0 2.88 1.44 1.44 0 0 0 0-2.88z"
                />
              </svg>
            </a>
            <a href="#" aria-label="Telegram" class="hover:text-blue-400">
              <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path
                  d="M9.036 16.569l-.398 4.024c.57 0 .816-.244 1.112-.54l2.664-2.53 5.522 4.04c1.01.556 1.728.264 1.98-.936l3.594-16.84c.328-1.53-.552-2.13-1.54-1.76L2.24 9.75c-1.49.6-1.47 1.45-.254 1.84l4.1 1.28 9.52-6.01c.45-.28.86-.13.52.18z"
                />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </footer>
  </template>
  