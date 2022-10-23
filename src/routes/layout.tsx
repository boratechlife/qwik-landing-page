import { component$, Slot } from '@builder.io/qwik';
import Header from '../components/header/header';

export default component$(() => {
  return (
    <>
      <main>
        <Header />
        <section>
          <Slot />
        </section>
      </main>
      {/* <!-- FOOTER --> */}

      <footer class="bg-[#2b2b39] py-20 md:py-16 lg:py-[78px] gap-10 px-10 lg:px-[135px] grid grid-cols-2 md:grid-cols-3 md:gap-20 lg:gap-0 lg:grid-cols-6">
        {/* <!-- link-group --> */}
        <ul class="flex flex-col gap-6">
          <li class="font-bold text-white">Home</li>
          <li>
            <a href="#" class="text-[#E7E7E7]">
              Home
            </a>
          </li>
          <li>
            <a href="#" class="text-[#E7E7E7]">
              Community
            </a>
          </li>
          <li>
            <a href="#" class="text-[#E7E7E7]">
              Events
            </a>
          </li>
          <li>
            <a href="#" class="text-[#E7E7E7]">
              Contacts
            </a>
          </li>
        </ul>
        {/* <!-- link-group --> */}
        <ul class="flex flex-col gap-6">
          <li class="font-bold text-white">Resources</li>
          <li>
            <a href="#" class="text-[#E7E7E7]">
              Blog
            </a>
          </li>
          <li>
            <a href="#" class="text-[#E7E7E7]">
              News
            </a>
          </li>
          <li>
            <a href="#" class="text-[#E7E7E7]">
              Guides
            </a>
          </li>
          <li>
            <a href="#" class="text-[#E7E7E7]">
              Help Center
            </a>
          </li>
        </ul>
        {/* <!-- link-group --> */}
        <ul class="flex flex-col gap-6">
          <li class="font-bold text-white">Community</li>
          <li>
            <a href="#" class="text-[#E7E7E7]">
              News Feed
            </a>
          </li>
          <li>
            <a href="#" class="text-[#E7E7E7]">
              Profile
            </a>
          </li>
          <li>
            <a href="#" class="text-[#E7E7E7]">
              Friends
            </a>
          </li>
          <li>
            <a href="#" class="text-[#E7E7E7]">
              Forum
            </a>
          </li>
        </ul>
        {/* <!-- link-group --> */}
        <ul class="flex flex-col gap-6">
          <li class="font-bold text-white">Main Links</li>
          <li>
            <a href="#" class="text-[#E7E7E7]">
              Members
            </a>
          </li>
          <li>
            <a href="#" class="text-[#E7E7E7]">
              Activity
            </a>
          </li>
          <li>
            <a href="#" class="text-[#E7E7E7]">
              Groups
            </a>
          </li>
          <li>
            <a href="#" class="text-[#E7E7E7]">
              Private Group
            </a>
          </li>
        </ul>

        <div class="news-letter text-white col-span-2 flex flex-col">
          <h5 class="font-medium text-[20px] leading-8 mb-5 text-white">
            Subscribe Cirkle <br class="hidden lg:block" />
            Newsletter
          </h5>
          <p class="mb-8">
            Subscribe to be the first one to know <br class="hidden lg:block" />
            about updates. Enter your email
          </p>

          <form
            action=""
            class="md:border md:border-white/80 flex-col md:flex-row gap-3 md:gap-0 lg:gap-5 lg:justify-between w-full md:w-max flex rounded-[12px]"
          >
            <input
              type="text"
              class="bg-transparent border border-white md:border-none placeholder:text-['#717179'] p-2 lg:px-5 h-full outline-none"
              placeholder="Email Address"
            />
            <button class="bg-white text-[#2b2b39] font-medium px-6 py-4 rounded-[12px]">
              Subscribe
            </button>
          </form>
        </div>
      </footer>

      <footer class="bg-[#20202D] py-9 px-10 lg:px-[135px] text-[#F6F6F6] flex flex-col md:flex-row gap-5 md:gap-0 items-center justify-between">
        <p>Besnik Creative Agency.</p>

        <a href="/">
          {/* <!-- logo --> */}
          <img src="/images/white-logo.png" alt="logo" />
        </a>

        <div class="socials flex items-center gap-2">
          <a href="#">
            {/* <!-- social --> */}
            <img src="/images/Twitter.png" alt="logo" />
          </a>
          <a href="#">
            {/* <!-- social --> */}
            <img src="/images/instagram.png" alt="logo" />
          </a>
          <a href="#">
            {/* <!-- social --> */}
            <img src="/images/facebook.png" alt="logo" />
          </a>
          <a href="#">
            {/* <!-- social --> */}
            <img src="/images/Linkedin.png" alt="logo" />
          </a>
        </div>
      </footer>
    </>
  );
});
