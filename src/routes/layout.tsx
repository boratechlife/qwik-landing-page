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

      <footer class="bg-primary pb-28 px-4 pt-44 relative z-0 flex flex-col justify-center items-center">
        <img src="/images/logo.png" alt="logo" class="h-12 my-10" />

        {/* <!-- location --> */}
        <p class="text-white text-xl lg:text-2xl font-medium font-['Manrope']">
          <span class="text-turquoise-1">We are here 6</span>, Sutton Plaza,
          Sutton, SM1 4FS
        </p>

        {/* <!-- contact --> */}
        <p class="text-white text-base lg:text-xl lg:text-2xl font-medium my-5 font-['Manrope']">
          <span class="text-turquoise-1">Call us</span> 020 8050 8253 |
          <span class="text-turquoise-1">WhatsApp</span> 07908 482 845 |
          <span class="text-turquoise-1">hello</span>@lokl.delivery
        </p>

        {/* <!-- socials --> */}

        <div class="socials flex justify-between gap-10 items-center my-5">
          {/* <!-- Facebook --> */}
          <a href="#">
            <img
              src="/images/Facebook.png"
              alt="Facebook"
              class="h-8 lg:h-[38px]"
            />
          </a>
          {/* <!-- Twitter --> */}
          <a href="#">
            <img
              src="/images/Twitter.png"
              alt="Twitter"
              class="h-8 lg:h-[38px]"
            />
          </a>
          {/* <!-- Instagram --> */}
          <a href="#">
            <img
              src="/images/Instagram.png"
              alt="Instagram"
              class="h-8 lg:h-[38px]"
            />
          </a>
        </div>

        <p class="copyright font-['Manrope'] font-light lg:text-lg text-white mt-12">
          © 2022 Support LOKL Ltd. • Terms & Conditions • Privacy Policy •
          Cookie Settings
        </p>
      </footer>
    </>
  );
});
