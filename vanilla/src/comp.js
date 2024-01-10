import "./output.css";
import "./app.js";
import "./bg.css";

//HEADER NAV
document.querySelector("#header").innerHTML = `
<div
class="flex justify-between items-center py-6 px-6 border-b-2 border-yellow-400"
>
<div class="md:flex md:items-center md:gap-12">
  <a href="/" id="homelogo" class="flex items-center">
    <img
      src="/assets/logo.jpg"
      class="h-12 rounded-full w-12"
      alt="logo"
    />
    <span class="ml-2 font-semibold text-white">GataFX</span>
  </a>
</div>

<div class="hidden md:block animate__animated animate__fadeInLeft">
  <nav aria-label="Global">
    <ul class="flex items-center gap-6 text-sm">
      <li>
        <a
          class="text-gray-500 transition hover:text-yellow-500/75"
          href="/offers/"
        >
          Offers
        </a>
      </li>
      <li>
        <a
          class="text-gray-500 transition hover:text-yellow-500/75"
          href="/calculator/"
        >
          Calculator
        </a>
      </li>
      <li>
        <a
          class="text-gray-500 transition hover:text-yellow-500/75"
          href="/indicators/"
        >
          Indicators
        </a>
      </li>
      <li>
        <a
          class="text-gray-500 transition hover:text-yellow-500/75"
          href="/contact/"
        >
          Contact
        </a>
      </li>

      <li>
        <a
          class="text-gray-500 transition hover:text-yellow-500/75"
          href="/faq/"
        >
          FAQs
        </a>
      </li>
    </ul>
  </nav>
</div>

<div class="flex items-center gap-4">
  <div class="sm:flex sm:gap-4">
    <div class="hidden sm:flex">
      <a
        class="group relative inline-block focus:outline-none focus:ring"
        href="#offers"
      >
        <span
          class="absolute inset-0 translate-x-1.5 translate-y-1.5 bg-yellow-300 transition-transform group-hover:translate-x-0 group-hover:translate-y-0"
        ></span>

        <span
          class="relative inline-block border-2 border-current px-8 py-3 text-sm font-bold uppercase tracking-widest text-black group-active:text-opacity-75"
        >
          Get Started
        </span>
      </a>
    </div>
  </div>
  <!-- hamburger -->
  <div
    class="block md:hidden bg-yellow-400/10 hover:bg-yellow-400/25 transition-all divide-purple-200 ease-in-out p-1 rounded-full"
  >
    <button
      id="openHamburger"
      class="rounded openHamburger toggle-button p-2 text-yellow-500 transition hover:text-yellow-600/75"
    >
      <svg
        stroke="currentColor"
        fill="currentColor"
        stroke-width="0"
        viewBox="0 0 20 20"
        aria-hidden="true"
        height="1em"
        width="1em"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          fill-rule="evenodd"
          d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM9 15a1 1 0 011-1h6a1 1 0 110 2h-6a1 1 0 01-1-1z"
          clip-rule="evenodd"
        ></path>
      </svg>
    </button>
  </div>
  <!-- HAMBURGER MENU -->
  <nav
    id="hamburgermenu"
    class="hamburgermenu transition-all duration-100 ease-in-out max-w-[450px] w-[85%] py-6 px-4 overflow-hidden h-[100%] fixed z-20 top-0 bg-white hidden md:hidden right-0"
  >
    <div
      class="burgerheader pb-4 justify-end border-b-2 border-b-yellow-500 mb-2 flex"
    >
      <!-- HAMBURGER CLOS BTN -->
      <button
        id="closeHamburger"
        class="hamburger closeHamburger bg-yellow-400/10 hover:bg-yellow-400/25 transition-all divide-purple-200 ease-in-out h-[2.7rem] flex justify-center items-center w-[2.7rem] rounded-full"
      >
        <svg
          stroke="currentColor"
          fill="currentColor"
          stroke-width="0"
          viewBox="0 0 24 24"
          height="1em"
          width="1em"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fill="none"
            stroke="#000"
            stroke-width="2"
            d="M3,3 L21,21 M3,21 L21,3"
          ></path>
        </svg>
      </button>
    </div>
    <div class="content text-center py-7">
      <ul class="grid gap-10 bold text-2xl">
        <li>
          <a
            class="text-gray-500 transition hover:text-yellow-500/75"
            href="/offers/"
          >
            Offers
          </a>
        </li>
        <li>
          <a
            class="text-gray-500 transition hover:text-yellow-500/75"
            href="/calculator/"
          >
            Calculator
          </a>
        </li>
        <li>
          <a
            class="text-gray-500 transition hover:text-yellow-500/75"
            href="/indicators/"
          >
            Indicators
          </a>
        </li>
        <li>
          <a
            class="text-gray-500 transition hover:text-yellow-500/75"
            href="/contact/"
          >
            Contact Us
          </a>
        </li>

        <li>
          <a
            class="text-gray-500 transition hover:text-yellow-500/75"
            href="/faq/"
          >
            FAQs
          </a>
        </li>
      </ul>
      <a
        id="getstartmobile"
        class="group getstartmobile relative inline-block mt-10 focus:outline-none focus:ring"
        href="#offers"
      >
        <span
          class="absolute inset-0 translate-x-1.5 translate-y-1.5 bg-yellow-300 transition-transform group-hover:translate-x-0 group-hover:translate-y-0"
        ></span>

        <span
          class="relative inline-block border-2 border-current px-8 py-3 text-sm font-bold uppercase tracking-widest text-black group-active:text-opacity-75"
        >
          Get Started
        </span>
      </a>
    </div>
  </nav>
</div>
</div>

`;

// FOOTER
document.querySelector("#footer").innerHTML = `
<div class="py-10 px-2">
      <div
        class="sm:flex grid items-center justify-center gap-[4rem] sm:gap-[15rem]"
      >
        <div class="grid sm:text-left text-center justify-center items-center">
          <div class="w-max mb-3 mx-auto">
            <a href="" class="flex items-center">
              <img
                src="/assets/logo.jpg"
                class="h-14 rounded-full w-14"
                alt="logo"
              />
              <span class="ml-1 font-semibold text-white">GataFX</span>
            </a>
          </div>
          <div>
            <p class="text-white/70 max-w-[14rem] sm:max-w-[26rem]">
              GATA-Fx provides general information and educational materials
              only.
              <br />
              Please, recognize that your ultimate success or failure will be
              the result of your own efforts
            </p>
          </div>
        </div>

        <div>
          <ul class="grid justify-center text-center gap-5">
            <li>
              <a
                class="text-gray-500 transition hover:text-yellow-500/75"
                href="/offers/"
              >
                Offers
              </a>
            </li>
            <li>
              <a
                class="text-gray-500 transition hover:text-yellow-500/75"
                href="/calculator/"
              >
                Calculator
              </a>
            </li>
            <li>
              <a
                class="text-gray-500 transition hover:text-yellow-500/75"
                href="/indicators/"
              >
                indicators
              </a>
            </li>
            <li>
              <a
                class="text-gray-500 transition hover:text-yellow-500/75"
                href="/contact"
              >
                Contact
              </a>
            </li>
            <li>
              <a
                class="text-gray-500 transition hover:text-yellow-500/75"
                href="/faq/"
              >
                FAQs
              </a>
            </li>
          </ul>
        </div>
      </div>
      <span class="relative mt-5 mb-[3.5rem] flex justify-center">
        <div
          class="absolute sm:inset-x-[250px] inset-x-[112px] top-1/2 h-px -translate-y-1/2 bg-transparent bg-gradient-to-r from-transparent via-yellow-500 to-transparent opacity-75"
        ></div>

        <!-- <span
          class="relative z-10 bg-yellow-500 h-[15px] w-[15px] rotate-45"
        ></span> -->
      </span>
      <h2 class="text-white tracking-wider text-[13px] text-center mt-20">
        <span>2024</span> GATA-Fx. All Rights Reserved
      </h2>
      <div class="text-white text-[12px] text-center tracking-widest">
        Built with by <span><a href="">Alex.Dev</a></span>
      </div>
    <div/>
`;
