import { component$, useStore } from '@builder.io/qwik';
import type { DocumentHead } from '@builder.io/qwik-city';

export default component$(() => {
  const menu = useStore({ open: false });
  return (
    <>
      <section
        class=""
        style="
        background: linear-gradient(311.76deg, #d4e7fe -15.24%, #ffffff 78.85%);
      "
      >
        {/* <!-- NAV --> */}
        <header class="site-container fixed top-0 left-0 w-full md:static z-[8892] bg-white/95 flex items-center py-2 md:h-[90px] border-b border-primary-1/10">
          <nav class="flex justify-between min-h-full items-center w-full">
            <div class="flex items-center gap-5 lg:gap-[72px]">
              <a href="/">
                {/* <!-- logo --> */}
                <img src="/images/logo1.png" alt="logo" />
              </a>
              {/* <!-- navigation --> */}
              <ul
                id="Navigation"
                data-isMobile="false"
                class="transition-all duration-300 ease-in-out flex flex-col md:flex-row absolute md:static top-0 left-0 bg-white/95 md:bg-transparent site-container pt-16 md:p-0 md:w-auto min-h-screen md:min-h-full md:items-center gap-8"
              >
                <li>
                  <a
                    href="#"
                    class="text-lg md:text-sm text-washed-1 font-semibold"
                  >
                    Home
                  </a>
                </li>
                {/* <!-- dropdown menu --> */}
                <div class="dropdown-menu relative">
                  <button
                    id="dropdownToggle"
                    class="flex justify-between items-center gap-2 text-washed-2 text-lg md:text-sm"
                    onClick$={() => {
                      document
                        .getElementById('dropdownIcon')
                        ?.classList.toggle('rotate-180');
                      document
                        .getElementById('dropdown')
                        ?.classList.toggle('hidden');
                    }}
                  >
                    Community
                    <img
                      id="dropdownIcon"
                      src="/images/down-arrow.png"
                      alt="dropdown icon"
                      class="h-4 transition-all aspect-square"
                    />
                  </button>

                  <div
                    id="dropdown"
                    class="drop-menu md:absolute w-max md:mt-5 hidden border-l border-primary-3/20"
                  >
                    <ul class="md:bg-white flex flex-col gap-2 md:shadow overflow-hidden rounded">
                      <li class="hover:bg-primary-1 py-1 px-2">
                        <a
                          href="#"
                          class="text-base md:text-sm hover:text-white text-washed-2"
                        >
                          Community 1
                        </a>
                      </li>
                      <li class="hover:bg-primary-1 py-1 px-2">
                        <a
                          href="#"
                          class="text-base md:text-sm hover:text-white text-washed-2"
                        >
                          Community 2
                        </a>
                      </li>
                      <li class="hover:bg-primary-1 py-1 px-2">
                        <a
                          href="#"
                          class="text-base md:text-sm hover:text-white text-washed-2"
                        >
                          Community 3
                        </a>
                      </li>
                      <li class="hover:bg-primary-1 py-1 px-2">
                        <a
                          href="#"
                          class="text-base md:text-sm hover:text-white text-washed-2"
                        >
                          Community 4
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
                <li>
                  <a href="#" class="text-lg md:text-sm text-washed-2">
                    Blog
                  </a>
                </li>
                <li>
                  <a href="#" class="text-lg md:text-sm text-washed-2">
                    Events
                  </a>
                </li>

                {/* <!-- mobile search --> */}
                <div class="mobile-search flex flex-col gap-10 md:hidden">
                  <form action="" class="w-max">
                    <div class="relative mr-10">
                      <input
                        type="search"
                        id="default-search"
                        class="p-2 border-b bg-transparent border-gray-300 outline-none text-gray-400"
                        placeholder="Search Here..."
                        required
                      />
                    </div>
                  </form>
                  <a
                    href=""
                    class="px-10 py-2.5 bg-primary-1 w-max rounded-[14px] text-sm font-semibold text-white shadow-lg shadow-primary-1/30"
                  >
                    Log in
                  </a>
                </div>
              </ul>
            </div>

            {/* <!-- mobile toggle --> */}
            <button
              class="md:hidden"
              onClick$={() => (menu.open = true)}
              data-mobile-open={menu.open}
            >
              {!menu.open && (
                <svg
                  id="openIcon"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke-width="1.5"
                  stroke="currentColor"
                  class="w-7 h-7"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M3.75 6.75h16.5M3.75 12h16.5M12 17.25h8.25"
                  />
                </svg>
              )}

              {menu.open && (
                <svg
                  id="closeIcon"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke-width="1.5"
                  stroke="currentColor"
                  class="w-6 h-6"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              )}
            </button>

            {/* <!-- search / login --> */}
            <div class="hidden md:flex items-center gap-5 lg:gap-0">
              {/* <!-- tablet search --> */}
              <button class="lg:hidden">
                <svg
                  aria-hidden="true"
                  class="w-8 lg:w-5 aspect-square text-gray-500 dark:text-gray-400"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                  ></path>
                </svg>
              </button>

              {/* <!-- desktop search --> */}
              <form action="" class="hidden lg:block lg:w-max">
                <div class="relative mr-10">
                  <div class="flex absolute inset-y-0 left-0 items-center pointer-events-none">
                    <svg
                      aria-hidden="true"
                      class="lg:w-5 aspect-square text-gray-500 dark:text-gray-400"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                      ></path>
                    </svg>
                  </div>
                  <input
                    type="search"
                    id="default-search"
                    class="p-2 hidden lg:block lg:p-6 border-b bg-transparent border-gray-300 outline-none lg:w-max text-sm text-gray-400"
                    placeholder="Search Here..."
                    required
                  />
                </div>
              </form>

              <a
                href=""
                class="px-8 lg:px-[44px] py-3 lg:py-[18px] bg-primary-1 rounded-[14px] text-sm font-semibold text-white shadow-lg shadow-primary-1/30"
              >
                Log in
              </a>
            </div>
          </nav>
        </header>

        {/* <!-- MOBILE NAV --> */}
        {/* 
      <!-- <div
        class="site-container mobile-nav pt-16 fixed top-0 left-0 w-full min-h-screen z-[8222] bg-white/95"
      >
        Mobile Nav
      </div> --> */}
        {/* <!-- HERO --> */}

        <section class="hero site-container flex flex-col-reverse md:flex-row items-center py-20 md:py-0 justify-between min-h-[450px] lg:min-h-[650px]">
          {/* <!-- cta --> */}
          <div class="hero-cta w-full lg:w-1/2 flex flex-col">
            <span class="px-[30px] py-2 bg-primary-1/10 rounded-lg text-xs w-max text-primary-1">
              Netbook community
            </span>
            <h1 class="text-3xl lg:text-[56px] mt-[18px] lg:leading-[66px] mb-5 text-primary-2 font-bold">
              Your Solutions For Community!
            </h1>
            <p class="text-lg text-washed-2 mb-[42px]">
              More than 2 billion people in over countries use socibook
              <br class="hidden lg:block" />
              to stay in touch with friends & family.
            </p>

            <div class="cta-btns flex gap-5 md:gap-3 items-center">
              <a
                href=""
                class="px-7 md:px-[44px] py-[18px] bg-primary-1 rounded-[14px] text-sm font-semibold text-white shadow-lg shadow-primary-1/30"
              >
                About more
              </a>
              <a
                href=""
                class="px-7 md:px-[44px] py-[18px] border border-primary-1 rounded-[14px] text-sm font-semibold text-primary-1"
              >
                Invite a friend
              </a>
            </div>
          </div>

          {/* <!-- hero image --> */}
          <div class="hero-img lg:w-1/2">
            <img src="/images/Iamge.png" alt="hero-image" />
          </div>
        </section>
      </section>

      {/* <!-- WHY JOIN --> */}

      <section class="site-container why-join-netbook flex items-center py-20 lg:py-[124px] relative bg-white">
        <div class="joining w-full relative z-10 lg:w-1/2">
          <span class="text-lg w-max text-primary-1 font-medium">
            Whats Netbooks?
          </span>
          <h1 class="text-[36px] mt-[10px] leading-[48px] mb-4 text-primary-2 font-bold">
            Why Join to Netbook <br />
            Social Network?
          </h1>
          <p class="text-lg text-washed-2 mb-[36px]">
            More than 2 billion people in over countries use socibook <br />
            to stay in touch with friends & family.
          </p>

          <ul class="flex flex-col gap-4">
            <li class="text-primary-2 font-medium flex items-center gap-2">
              <div class="outer-circle flex justify-center items-center w-[18px] aspect-square rounded-full bg-primary-1/10">
                <div class="inner-circle w-[10px] aspect-square rounded-full bg-primary-1"></div>
              </div>
              Groups
            </li>
            <li class="text-primary-2 font-medium flex items-center gap-2">
              <div class="outer-circle flex justify-center items-center w-[18px] aspect-square rounded-full bg-primary-1/10">
                <div class="inner-circle w-[10px] aspect-square rounded-full bg-primary-1"></div>
              </div>
              Messages
            </li>
            <li class="text-primary-2 font-medium flex items-center gap-2">
              <div class="outer-circle flex justify-center items-center w-[18px] aspect-square rounded-full bg-primary-1/10">
                <div class="inner-circle w-[10px] aspect-square rounded-full bg-primary-1"></div>
              </div>
              Share
            </li>
          </ul>
        </div>

        <div class="joining-show hidden absolute -right-[70px] top-36 rotate-12 lg:rotate-0 skew-x-12 lg:skew-x-0 lg:static md:grid z-0 grid-cols-[repeat(2,170px)] grid-rows-[repeat(2,150px)] lg:grid-cols-[repeat(2,270px)] gap-2 lg:gap-[26px] lg:grid-rows-[repeat(2,238px)]">
          <div class="video-wrapper col-start-1 col-end-2 row-start-1 row-end-3 flex flex-col justify-center">
            <div
              class="bg-no-repeat flex justify-center items-center bg-cover rounded-[14px] w-full h-[368px] overflow-hidden"
              style="
          background-image: url('/images/pexels-fauxels-3182834.png');
        "
            >
              <a
                href="#"
                class="hover:shadow-lg w-[44px] aspect-square rounded-full transition-all bg-white flex justify-center items-center hover:shadow-primary-1/30"
              >
                <img src="/images/triangle.png" class="ml-1" alt="" />
              </a>
            </div>
          </div>

          <div class="image-wrapper row-start-1 row-end-2 col-start-2 col-end-3 flex justify-center items-center overflow-hidden">
            <img
              src="/images/pexels-andres-ayrton-6578391.png"
              class="w-[265px] rounded-[14px]"
              alt=""
            />
          </div>
          <div class="image-wrapper row-start-2 row-end-3 col-start-2 col-end-3 flex justify-center items-center overflow-hidden">
            <img
              src="/images/pexels-brett-sayles-2881232.png"
              class="w-[265px] rounded-[14px]"
              alt=""
            />
          </div>
        </div>
      </section>

      {/* <!-- ACHIEVEMENT --> */}

      <section class="achievements site-container grid md:grid-cols-2 lg:grid-cols-[336px_336px_auto] gap-10 lg:gap-6 pb-[124px] bg-white">
        {/* <!-- rating --> */}
        <div class="ratings flex flex-col gap-10 p-11 lg:pr-[18px] border border-washed-3/20 hover:border-none transition-all duration-400 w-max hover:drop-shadow-md bg-white rounded-[14px]">
          <h3 class="text-[20px] text-primary-2 font-medium flex gap-3 items-center">
            <img src="/images/Star.png" alt="" class="w-7 aspect-square" />
            4.8 Rating
          </h3>

          <div class="members flex items-center gap-4">
            <div class="avatar-group flex items-center -space-x-3">
              <div class="avatar">
                <div class="w-6 rounded-full overflow-hidden">
                  <img src="/images/person.png" />
                </div>
              </div>
              <div class="avatar">
                <div class="w-6 rounded-full overflow-hidden">
                  <img src="/images/person2.png" />
                </div>
              </div>
              <div class="avatar">
                <div class="w-6 rounded-full overflow-hidden">
                  <img src="/images/person3.png" />
                </div>
              </div>
            </div>
            <p>
              <span class="text-primary-1">+836k</span> Members
            </p>
          </div>

          <p class="leading-[26px] text-washed-3">
            More than 2 billion we people over <br />
            countries use socibooks we to stay <br />
            in touch with friends.
          </p>

          <a
            href="#"
            class="text-primary-1 font-medium flex items-center gap-[10px]"
          >
            Join Our Community
            <img src="/images/ArrowRight.png" class="h-3" alt="" />
          </a>
        </div>

        {/* <!-- awwards --> */}
        <div class="awwards flex flex-col gap-10 p-11 lg:pr-[18px] border border-washed-3/20 hover:border-none transition-all duration-400 w-max hover:drop-shadow-md bg-white rounded-[14px]">
          <h3 class="text-[20px] text-primary-2 font-medium flex gap-3 items-center">
            <img src="/images/Trophy.png" alt="" class="w-7 aspect-square" />
            Awwwards
          </h3>

          <div class="members flex items-center gap-4">
            <img src="/images/github.png" alt="" class="w-6 aspect-square" />
            <p>
              Best of <span class="text-primary-1">2021</span> on Github
            </p>
          </div>

          <p class="leading-[26px] text-washed-3">
            More than 2 billion we people over <br />
            countries use socibooks we to stay <br />
            in touch with friends.
          </p>

          <a
            href="#"
            class="text-washed-4 font-medium flex items-center gap-[10px]"
          >
            Go To Awards
            <img src="/images/DarkArrowRight.png" class="h-3" alt="" />
          </a>
        </div>
        <div class="our-achievement lg:pl-[93px]">
          <span class="text-lg text-center md:text-left block md:w-max text-primary-1 font-medium">
            Our Achievement
          </span>
          <h1 class="text-2xl text-center md:text-left md:text-[36px] mt-[10px] md:leading-[48px] mb-4 text-primary-2 font-bold">
            We are Connecting <br class="lg:block hidden" />
            You The Digital Life.
          </h1>
          <p class="leading-7 text-washed-2 md:text-left text-center mb-[36px]">
            The scope the Social Media becomes crucial Is
            <br class="lg:block hidden" />
            helps the business to directly engage with their
            <br class="lg:block hidden" />
            needs and wants.
          </p>
          <a
            href="#"
            class="px-[38px] flex items-center justify-center md:justify-start gap-5 md:w-max py-[22px] bg-primary-1 rounded-[14px] md:text-sm font-semibold text-white shadow-lg shadow-primary-1/30"
          >
            Discover me
            <img src="/images/WhiteArrowRight.png" class="w-3" alt="" />
          </a>
        </div>
      </section>

      {/* <!-- COMMUNITY --> */}

      <section
        class="site-container our-community lg:mt-16 mb-28 lg:mb-44"
        style="
    background: linear-gradient(
      0deg,
      rgba(241, 246, 253, 0) 1.63%,
      #f1f6fd 20.5%,
      #f1f6fd 58.57%,
      #ffffff 100%
    );
  "
      >
        {/* <!-- community header --> */}
        <div class="flex flex-col items-center mb-2 lg:mb-16">
          <span class="text-lg w-max text-primary-1 font-medium">
            Our Community
          </span>
          <h1 class="text-[36px] mt-[10px] leading-[48px] mb-5 text-center lg:text-left text-primary-2 font-bold">
            Community Main Feature
          </h1>
          <p class="leading-7 text-washed-2 text-center mb-[36px]">
            The wise man therefore always holds in these matters
            <br class="hidden lg:block" />
            to this principle of selection.
          </p>
        </div>

        {/* <!-- features --> */}
        <div class="features grid md:grid-cols-2 lg:px-10 gap-7 lg:gap-11 mb-16">
          {/* <!-- feature --> */}
          <div
            class="feature items-center bg-white lg:flex-row flex-col p-5 pt-7 lg:p-10 rounded-[14px] flex gap-4 lg:gap-9 lg:items-start"
            style="box-shadow: 14px 22px 52px -12px rgba(127, 127, 127, 0.13)"
          >
            <img src="/images/members.png" alt="" />
            <div class="flex lg:mt-[6px] flex-col gap-2 lg:gap-[14px]">
              <h5 class="text-center lg:text-left text-primary-2 text-2xl leading-6 font-semibold">
                Members, Friends
              </h5>
              <p class="text-washed-2 text-center lg:text-left leading-[26px]">
                Members, Friends Connection ( like{' '}
                <br class="hidden lg:block" />
                followers ), Private Message
              </p>
            </div>
          </div>

          {/* <!-- feature --> */}
          <div
            class="feature items-center bg-white lg:flex-row flex-col p-5 pt-7 lg:p-10 rounded-[14px] flex gap-4 lg:gap-9 lg:items-start"
            style="box-shadow: 14px 22px 52px -12px rgba(127, 127, 127, 0.13)"
          >
            <img src="/images/groups.png" alt="" />
            <div class="flex lg:mt-[6px] flex-col gap-2 lg:gap-[14px]">
              <h5 class="text-center lg:text-left text-primary-2 text-2xl leading-6 font-semibold">
                Groups
              </h5>
              <p class="text-washed-2 text-center lg:text-left leading-[26px]">
                Your users can create groups to let other
                <br class="hidden lg:block" />
                users to join and talk
              </p>
            </div>
          </div>
          {/* <!-- feature --> */}
          <div
            class="feature items-center bg-white lg:flex-row flex-col p-5 pt-7 lg:p-10 rounded-[14px] flex gap-4 lg:gap-9 lg:items-start"
            style="box-shadow: 14px 22px 52px -12px rgba(127, 127, 127, 0.13)"
          >
            <img src="/images/forum.png" alt="" />
            <div class="flex lg:mt-[6px] flex-col gap-2 lg:gap-[14px]">
              <h5 class="text-center lg:text-left text-primary-2 text-2xl leading-6 font-semibold">
                Forum
              </h5>
              <p class="text-washed-2 text-center lg:text-left leading-[26px]">
                Forum is ready by BBPress. Your users
                <br class="hidden lg:block" />
                can make topics and talk.
              </p>
            </div>
          </div>

          {/* <!-- feature --> */}
          <div
            class="feature items-center bg-white lg:flex-row flex-col p-5 pt-7 lg:p-10 rounded-[14px] flex gap-4 lg:gap-9 lg:items-start"
            style="box-shadow: 14px 22px 52px -12px rgba(127, 127, 127, 0.13)"
          >
            <img src="/images/module.png" alt="" />
            <div class="flex lg:mt-[6px] flex-col gap-2 lg:gap-[14px]">
              <h5 class="text-center lg:text-left text-primary-2 text-2xl leading-6 font-semibold">
                Custom Module
              </h5>
              <p class="text-washed-2 text-center lg:text-left leading-[26px]">
                You can create Members, Groups <br class="hidden lg:block" />
                Module. We already created 3 modules.
                <br class="hidden lg:block" />
                It's by drag & drop live builder.
              </p>
            </div>
          </div>
          {/* <!-- feature --> */}
          <div
            class="feature items-center bg-white lg:flex-row flex-col p-5 pt-7 lg:p-10 rounded-[14px] flex gap-4 lg:gap-9 lg:items-start"
            style="box-shadow: 14px 22px 52px -12px rgba(127, 127, 127, 0.13)"
          >
            <img src="/images/list-builder.png" alt="" />
            <div class="flex lg:mt-[6px] flex-col gap-2 lg:gap-[14px]">
              <h5 class="text-center lg:text-left text-primary-2 text-2xl leading-6 font-semibold">
                List Builder
              </h5>
              <p class="text-washed-2 text-center lg:text-left leading-[26px]">
                Members, Groups list can be modified by
                <br class="hidden lg:block" />
                drag & drop live builder.
              </p>
            </div>
          </div>
          {/* 
    <!-- feature --> */}
          <div
            class="feature items-center bg-white lg:flex-row flex-col p-5 pt-7 lg:p-10 rounded-[14px] flex gap-4 lg:gap-9 lg:items-start"
            style="box-shadow: 14px 22px 52px -12px rgba(127, 127, 127, 0.13)"
          >
            <img src="/images/scroll.png" alt="" />
            <div class="flex lg:mt-[6px] flex-col gap-2 lg:gap-[14px]">
              <h5 class="text-center lg:text-left text-primary-2 text-2xl leading-6 font-semibold">
                List Scroll Effects
              </h5>
              <p class="text-washed-2 text-center lg:text-left leading-[26px]">
                8 different scroll effects are ready.
                <br class="hidden lg:block" />
                You can always change by your tastes.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* <!-- MEMBERS --> */}

      <section class="members flex flex-col items-center mb-24 lg:mb-[130px]">
        <span class="text-lg w-max text-primary-1 font-medium">
          Valuable Team
        </span>
        <h1 class="text-[36px] mt-[10px] leading-[48px] mb-5 text-primary-2 font-bold">
          Our Active Members
        </h1>
        <p class="leading-7 text-washed-2 text-center mb-[36px]">
          when an unknown printer took a galley of type and meeting
          <br class="md:block hidden" />
          fari scrambled it.
        </p>

        <div class="tabs w-max rounded-[14px] bg-primary-1/5 grid grid-cols-3 gap-2 p-2">
          <div class="tab py-3 lg:py-5 px-8 lg:px-[50px] rounded-[10px] font-medium hover:font-semibold text-primary-3 transition-all duration-300 hover:bg-primary-1 hover:text-white">
            Newest
          </div>
          <div class="tab py-3 lg:py-5 px-8 lg:px-[50px] rounded-[10px] font-medium hover:font-semibold text-primary-3 transition-all duration-300 hover:bg-primary-1 hover:text-white">
            Popular
          </div>
          <div class="tab py-3 lg:py-5 px-8 lg:px-[50px] rounded-[10px] font-semibold bg-primary-1 text-white">
            Active
          </div>
        </div>

        <div class="members-view grid md:grid-cols-2 lg:grid-cols-4 gap-[30px] mt-11">
          {/* <!-- member --> */}
          <div class="member flex flex-col justify-center py-[30px] px-[52px] bg-white rounded-[14px] shadow-[0_34px_68px_rgba(116,115,128,0.1)]">
            {/* <!-- image --> */}
            <div
              class="image flex justify-center p-1 items-center relative w-[166px]"
              style="background-image: url('/images/dotted.png')"
            >
              <img
                src="/images/person.png"
                alt=""
                class="w-full rounded-full"
              />

              <img
                src="/images/checkmark.png"
                class="absolute bottom-0"
                alt=""
              />
            </div>

            {/* <!-- name --> */}
            <p class="text-center mt-[34px] mb-3.5 text-2xl font-semibold text-primary-3">
              Fahim Rahman
            </p>
            {/* <!-- username --> */}
            <span class="text-center text-washed-2">@rahman</span>
          </div>

          {/* <!-- member --> */}
          <div class="member flex flex-col justify-center py-[30px] px-[52px] bg-white rounded-[14px] shadow-[0_34px_68px_rgba(116,115,128,0.1)]">
            {/* <!-- image --> */}
            <div
              class="image flex justify-center p-1 items-center relative w-[166px]"
              style="background-image: url('/images/dotted.png')"
            >
              <img
                src="/images/person2.png"
                alt=""
                class="w-full rounded-full"
              />

              <img
                src="/images/checkmark.png"
                class="absolute bottom-0"
                alt=""
              />
            </div>

            {/* <!-- name --> */}
            <p class="text-center mt-[34px] mb-3.5 text-2xl font-semibold text-primary-3">
              Kazi Rahman
            </p>
            {/* <!-- username --> */}
            <span class="text-center text-washed-2">@Rahman</span>
          </div>

          {/* <!-- member --> */}
          <div class="member flex flex-col justify-center py-[30px] px-[52px] bg-white rounded-[14px] shadow-[0_34px_68px_rgba(116,115,128,0.1)]">
            {/* <!-- image --> */}
            <div
              class="image flex justify-center p-1 items-center relative w-[166px]"
              style="background-image: url('/images/dotted.png')"
            >
              <img
                src="/images/person4.png"
                alt=""
                class="w-full rounded-full"
              />

              <img
                src="/images/checkmark.png"
                class="absolute bottom-0"
                alt=""
              />
            </div>

            {/* <!-- name --> */}
            <p class="text-center mt-[34px] mb-3.5 text-2xl font-semibold text-primary-3">
              Masterero Ali
            </p>
            {/* <!-- username --> */}
            <span class="text-center text-washed-2">@Master</span>
          </div>

          {/* <!-- member --> */}
          <div class="member flex flex-col justify-center py-[30px] px-[52px] bg-white rounded-[14px] shadow-[0_34px_68px_rgba(116,115,128,0.1)]">
            {/* <!-- image --> */}
            <div
              class="image flex justify-center p-1 items-center relative w-[166px]"
              style="background-image: url('/images/dotted.png')"
            >
              <img
                src="/images/person3.png"
                alt=""
                class="w-full rounded-full"
              />

              <img
                src="/images/checkmark.png"
                class="absolute bottom-0"
                alt=""
              />
            </div>

            {/* <!-- name --> */}
            <p class="text-center mt-[34px] mb-3.5 text-2xl font-semibold text-primary-3">
              Alia Karon
            </p>
            {/* <!-- username --> */}
            <span class="text-center text-washed-2">@Alia</span>
          </div>
        </div>
      </section>

      {/* <!-- APP --> */}
      <section class="app site-container bg-primary-4 lg:px-[135px] flex flex-col lg:flex-row overflow-hidden justify-between">
        <div class="info w-full md:w-2/3 lg:w-2/5 py-10 md:py-20 lg:py-[122px] h-full relative lg:static z-10">
          <span class="text-lg w-max text-primary-1 font-medium">
            Get Our Application
          </span>
          <h1 class="text-2xl text-[36px] mt-[10px] lg:leading-[48px] mb-4 text-primary-2 font-bold">
            You Can Easily Find <br class="hidden lg:block" />
            This App…!
          </h1>
          <p class="leading-[26px] text-washed-2 mb-[36px]">
            I say chap that’s suing lavatory chip shop
            <br class="hidden lg:block" />
            gosh off his smashing boot are you taking
            <br class="hidden lg:block" />
            the piss posh loo brilliant.
          </p>

          {/* <!-- download --> */}
          <div class="get-app-btns flex flex-col md:flex-row gap-5 md:gap-10 lg:gap-5 md:items-center">
            <a href="#">
              {/* <!-- png not good -->
            <!-- <img
              src="/images/appstore.png"
              class="h-[52px]"
              alt="appstore"
            /> --> */}
              <img
                src="/images/appstore.svg"
                class="h-10 sm:h-[52px]"
                alt="appstore"
              />
            </a>
            <a href="#">
              <img
                src="/images/playstore.png"
                class="h-10 sm:h-[52px]"
                alt="playstore"
              />
            </a>
          </div>
        </div>

        {/* <!-- mockup --> */}
        <div class="w-full lg:w-3/5 min-h-full relative z-0">
          <img
            src="/images/mobile muckup.png"
            class="absolute w-full md:w-[75%] lg:w-full -right-[80px] md:-right-[190px] lg:right-auto md:-rotate-[30deg] lg:rotate-0 -top-[200px] sm:-top-[250px] md:-top-[350px] lg:top-auto lg:bottom-0"
            alt=""
          />
        </div>
      </section>

      {/* <!-- LATEST NEWS --> */}

      <section class="site-container latest-news py-20 lg:py-[130px] flex flex-col items-center">
        <span class="text-lg w-max text-primary-1 font-medium">
          Get Our Application
        </span>
        <h1 class="text-[36px] mt-[10px] leading-[48px] mb-10 md:mb-20 text-primary-2 font-bold">
          Latest News
        </h1>

        <div class="news-list grid gap-5 lg:gap-[60px] md:grid-cols-2 lg:grid-cols-3">
          {/* <!-- news-item --> */}
          <div class="news-item items-center md:items-start flex flex-col gap-6">
            <div class="news-image w-[356px] h-[349px] rounded-[20px] overflow-hidden">
              <img
                src="/images/pexels-meruyert-gonullu-6589064.png"
                alt=""
                class="w-full"
              />
            </div>

            <div class="title px-5 flex text-[20px] font-semibold gap-2 leading-[32px]">
              <span class="dash w-10 h-[2px] mt-[15px] bg-yellowish"></span>
              <p>It Does Not Matter Hows Slowly go as Long</p>
            </div>

            <a
              href="#"
              class="pl-[60px] text-washed-2 flex hover:text-primary-1 transition-all duration-300 items-center gap-1"
            >
              Continue Reading
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                class="w-4 h-4"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3"
                />
              </svg>
            </a>
          </div>

          {/* <!-- news-item --> */}
          <div class="news-item items-center md:items-start flex flex-col gap-6">
            <div class="news-image w-[356px] h-[349px] rounded-[20px] overflow-hidden">
              <img
                src="/images/pexels-cottonbro-6140202.png"
                alt=""
                class="w-full"
              />
            </div>

            <div class="title px-5 flex text-[20px] font-semibold gap-2 leading-[32px]">
              <span class="dash w-10 h-[2px] mt-[15px] bg-yellowish"></span>
              <p>Netbook Network Added New Photo Filter</p>
            </div>

            <a
              href="#"
              class="pl-[60px] text-washed-2 flex hover:text-primary-1 transition-all duration-300 items-center gap-1"
            >
              Continue Reading
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                class="w-4 h-4"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3"
                />
              </svg>
            </a>
          </div>

          {/* <!-- news-item --> */}
          <div class="news-item items-center md:items-start flex flex-col gap-6">
            <div class="news-image w-[356px] h-[349px] rounded-[20px] overflow-hidden">
              <img
                src="/images/pexels-pixabay-163064.png"
                alt=""
                class="w-full"
              />
            </div>

            <div class="title px-5 flex text-[20px] font-semibold gap-2 leading-[32px]">
              <span class="dash w-10 h-[2px] mt-[15px] bg-yellowish"></span>
              <p>We Optimised Netbooks Better Navigation</p>
            </div>

            <a
              href="#"
              class="pl-[60px] text-washed-2 flex hover:text-primary-1 transition-all duration-300 items-center gap-1"
            >
              Continue Reading
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                class="w-4 h-4"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3"
                />
              </svg>
            </a>
          </div>
        </div>
      </section>
    </>
  );
});

export const head: DocumentHead = {
  title: 'Welcome to Qwik',
};
