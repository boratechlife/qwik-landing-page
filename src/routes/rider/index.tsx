import { component$ } from '@builder.io/qwik';
import type { DocumentHead } from '@builder.io/qwik-city';

export default component$(() => {
  return (
    <>
      {/* <!-- HERO SECTION --> */}

      <section
        class="hero relative h-[550px] lg:h-[800px] overflow-hidden rounded-b-[30px] lg:rounded-b-[60px]"
        style="
    background-image: url('/images/blue-texture.png');
    background-repeat: no-repeat;
    background-size: cover;
  "
      >
        {/* <!-- circle-1 --> */}
        <div class="circle-1 border-turquoise-1/10 absolute -top-28 left-28 border-[90px] w-[25%] rounded-full aspect-square"></div>
        {/* <!-- circle-2 --> */}
        <div class="circle-2 border-turquoise-1/10 absolute -bottom-[20%] -left-[10%] border-[110px] w-[30%] rounded-full aspect-square"></div>
        {/* <!-- circle-3 --> */}
        <div class="circle-3 absolute -top-[60%] -right-[10%] border-white/20 border-[150px] w-[70%] rounded-full aspect-square"></div>

        {/* <!-- header --> */}

        <header class="header py-2 lg:py-0 relative px-10 lg:px-20 z-0 h-[80px] flex justify-between items-center">
          <img src="/images/logo.png" alt="Logo" class="h-5 lg:h-9" />

          {/* start humberguer */}
          <span className="lg:hidden text-white">
            <svg
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
                d="M3.75 5.25h16.5m-16.5 4.5h16.5m-16.5 4.5h16.5m-16.5 4.5h16.5"
              />
            </svg>
          </span>
          {/* <!-- navigation --> */}
          <nav class="hidden lg:flex w-full md:w-2/3 lg:w-1/2">
            <ul class="flex flex-col md:flex-row items-center gap-10">
              {/* <!-- active link --> */}
              <li class="border-b-4 border-accent">
                <a
                  href="/"
                  class="text-turquoise-1 text-base lg:text-2xl font-semibold"
                >
                  Book a Rider
                </a>
              </li>

              {/* <!-- nomal link --> */}
              <li>
                <a
                  href="./become-a-rider.html"
                  class="text-primary text-base lg:text-2xl font-semibold"
                >
                  Become a Rider
                </a>
              </li>

              {/* <!-- contact link --> */}
              <li>
                <a
                  href="#"
                  class="text-primary px-5 lg:px-10 py-1.5 lg:py-3 rounded-full shadow-sm text-sm lg:text-lg bg-white"
                >
                  Contact Us
                </a>
              </li>
            </ul>
          </nav>
        </header>
        <div class="hero-content relative z-0 px-4 lg:px-20 flex flex-col lg:flex-row justify-between items-center">
          <div class="cta">
            <h1 class="font-bold text-[36px] lg:text-[64px] text-white leading-tight">
              Become a<br />
              LOKL Rider today.
            </h1>

            <p class="text-white font-thin">
              Join us today and become a part of the change.
            </p>

            <div class="download-btns flex gap-5 mt-5">
              <a href="#">
                <img
                  src="/images/appstore.png"
                  alt="appstore"
                  class="h-10 lg:h-[60px]"
                />
              </a>
              <a href="#">
                <img
                  src="/images/playstore.png"
                  alt="playstore"
                  class="h-10 lg:h-[60px]"
                />
              </a>
            </div>
          </div>

          <div class="hero-img w-full lg:w-1/2 lg:pt-10">
            <img src="/images/woman.png" alt="person" class=" lg:scale-105" />
          </div>
        </div>
      </section>

      {/* <!-- STATS SECTION --> */}

      <section class="stats-wrapper relative -top-16 lg:-top-20 px-4 lg:px-20">
        <div class="stats flex flex-col lg:flex-row justify-between items-center py-5 bg-white shadow-md rounded-[30px]">
          <div class="stat w-full lg:w-1/4 relative flex flex-col justify-center items-center gap-1">
            <img src="/images/trust.png" alt="icon" class="h-8 lg:h-12" />
            <p class="text-2xl lg:text-5xl font-extrabold text-secondary-1 font-['Manrope']">
              2500+
            </p>
            <p class="text-sm lg:text-lg font-bold text-primary font-['Manrope']">
              People trust us
            </p>
          </div>

          <div class="stat w-full lg:w-1/4 relative before:absolute before:h-full lg:before:w-px before:bg-gradient-to-b before:from-transparent before:to-transparent before:via-gray-300 before:left-0 flex flex-col justify-center items-center gap-1">
            <img src="/images/time.png" alt="icon" class="h-8 lg:h-12" />
            <p class="text-2xl lg:text-5xl font-extrabold text-secondary-1 font-['Manrope']">
              6245+
            </p>
            <p class="text-sm lg:text-lg font-bold text-primary font-['Manrope']">
              Hours booked
            </p>
          </div>

          <div class="stat w-full lg:w-1/4 relative before:absolute before:h-full lg:before:w-px before:bg-gradient-to-b before:from-transparent before:to-transparent before:via-gray-300 before:left-0 flex flex-col justify-center items-center gap-1">
            <img src="/images/rocket.png" alt="icon" class="h-8 lg:h-12" />
            <p class="text-2xl lg:text-5xl font-extrabold text-secondary-1 font-['Manrope']">
              10K+
            </p>
            <p class="text-sm lg:text-lg font-bold text-primary font-['Manrope']">
              Parcel delivered
            </p>
          </div>

          <div class="stat w-full lg:w-1/4 relative before:absolute lg:before:h-full before:w-px before:bg-gradient-to-b before:from-transparent before:to-transparent before:via-gray-300 before:left-0 flex flex-col justify-center items-center gap-1">
            <img src="/images/peoples.png" alt="icon" class="h-8 lg:h-12" />
            <p class="text-2xl lg:text-5xl font-extrabold text-secondary-1 font-['Manrope']">
              4000+
            </p>
            <p class="text-sm lg:text-lg font-bold text-primary font-['Manrope']">
              Riders joined
            </p>
          </div>
        </div>
      </section>

      {/* <!-- guarantees section --> */}

      <section class="delivery flex flex-col px-4 lg:px-0 py-5 lg:py-24 justify-center items-center mb-16 lg:mb-28">
        <h2 class="text-4xl lg:text-5xl text-turquoise-1 text-center font-bold mb-10">
          An app that guarantees
          <br />
          <span class="text-primary">safe and stress free shifts at work.</span>
        </h2>

        <p class="text-center text-base lg:text-[21px] text-primary lg:leading-[42px] font-['Manrope']">
          At LOKL we value our riders team and the top quality service they
          provide so we ensure
          <br />
          they’re appreciated and heard. Every minute of their time is accounted
          for through our <br />
          hourly pay system. When we say LOKL is integral to a rider’s
          lifestyle, we don’t mean this <br />
          lightly. Join us today and become a part of the change.
        </p>
      </section>

      {/* <!-- app benefits section  --> */}
      <section class="mockup-wrapper relative py-16 lg:py-28 bg-turquoise-1">
        {/* <!-- background --> */}
        <div class="background-holder overflow-hidden left-0 top-0 h-full w-full absolute z-[2]">
          {/* <!-- circle-1 --> */}
          <div class="circle-1 border-white/10 absolute -top-56 left-40 border-[90px] w-[25%] rounded-full aspect-square"></div>
          {/* <!-- circle-2 --> */}
          <div class="circle-2 border-primary/10 absolute -bottom-[40%] -left-[15%] border-[140px] w-[40%] rounded-full aspect-square"></div>
          {/* <!-- circle-3 --> */}
          <div class="circle-3 absolute -bottom-[35%] -right-[10%] border-light-white border-[130px] w-[34%] rounded-full aspect-square"></div>
        </div>

        {/* <!-- content --> */}
        <div class="mockup px-10 lg:px-20 flex flex-col gap-12 lg:gap-16 relative z-[5]">
          <h2 class="text-4xl lg:text-5xl text-white font-bold lg:leading-[64px]">
            Further benefits <br />
            our riders enjoy include
          </h2>

          <div class="benefits w-full lg:w-[65%] grid grid-cols-1 lg:grid-cols-2 gap-5">
            {/* <!-- benefit --> */}
            <div class="benefit font=['Manrope'] bg-white py-6 shadow-lg px-5 rounded-2xl border-l-2 border-primary">
              <h3 class="text-[21px] text-primary font-medium">
                Our riders are paid fairly
              </h3>
              <p class="text-light-blue lg:text-lg">
                £12 per hour & Extra £1 per two drops
              </p>
            </div>

            {/* <!-- benefit --> */}
            <div class="benefit font=['Manrope'] bg-white py-6 shadow-lg px-5 rounded-2xl border-l-2 border-primary">
              <h3 class="text-[21px] text-primary font-medium">
                Work within your local area
              </h3>
              <p class="text-light-blue lg:text-lg">
                We operate within a 3-mile radius of Sutton
              </p>
            </div>

            {/* <!-- benefit --> */}
            <div class="benefit font=['Manrope'] bg-white py-6 shadow-lg px-5 rounded-2xl border-l-2 border-primary">
              <h3 class="text-[21px] text-primary font-medium">
                A flexible work schedule
              </h3>
              <p class="text-light-blue lg:text-lg">
                select your own work hours directly through the app and match it
                to your schedule
              </p>
            </div>

            {/* <!-- benefit --> */}
            <div class="benefit font=['Manrope'] bg-white py-6 shadow-lg px-5 rounded-2xl border-l-2 border-primary">
              <h3 class="text-[21px] text-primary font-medium">
                On-demand support
              </h3>
              <p class="text-light-blue lg:text-lg">
                our customer service team are always one call away and happy to
                help with any queries
              </p>
            </div>
          </div>
        </div>

        {/* <!-- mockup image --> */}
        <div class="mockup-image hidden lg:block absolute flex justify-end bottom-0 top-0 z-0 right-0 overflow-hidden">
          <img
            src="/images/delivery-man.png"
            alt=""
            class="h-full aspect-auto"
          />
        </div>
      </section>
      {/* <!-- steps --> */}
      <section class="steps-wrapper">
        <div class="py-10 lg:py-28 flex justify-center items-center font-bold">
          <h2 class="text-3xl lg:text-5xl my-14 lg:my-0 lg:text-[64px] lg:leading-[96px] text-transparent bg-clip-text bg-gradient-to-r from-accent/70 via-turquoise-1 to-turquoise-1 text-center">
            We aim to revolutionise the way <br />
            you work and treat you <br />
            with the value you deserve.
          </h2>
        </div>

        {/* <!-- steps area --> */}
        <div
          class="steps mt-12 relative h-[540px]"
          style="
          background-image: url('/images/open-area.png');
          background-repeat: no-repeat;
          background-size: cover;
        "
        >
          {/* <!-- phone --> */}
          <div class="app-on-phone absolute -left-10 lg:left-12 z-[3] -top-20 lg:-top-32">
            <img
              src="/images/phone-mockup-rider.png"
              alt="phone on hand"
              class="scale-75 lg:scale-95"
            />
          </div>

          {/* <!-- circle --> */}
          <div class="relative z-[0] left-0 top-0 w-full h-full overflow-hidden">
            <div class="circle absolute -left-[17%] -bottom-[40%] border-turquoise-1/20 border-[120px] w-[640px] rounded-full aspect-square"></div>
          </div>

          {/* <!-- curved line --> */}
          <div class="curved-line-wrapper overflow-hidden absolute hidden lg:block z-[2] top-[50%] left-0 lg:left-[25%] translate-y-[-50%]">
            <svg
              width="1126"
              height="138"
              viewBox="0 0 1127 138"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M0.5 1.99998C21.5 1.33331 71.5 9.89998 103.5 49.5C143.5 99 287.5 167 418 122C548.5 77 638 63.5 748 97C858 130.5 965 159.5 1127 36"
                stroke="#0CCFF0"
                stroke-width="2"
                stroke-dasharray="2 2"
              />
            </svg>
          </div>

          {/* <!-- step items --> */}

          <div class="step-items absolute z-10 top-[50%] translate-y-[-50%] w-10/12 lg:w-[55%] right-10 lg:right-44 flex flex-col lg:flex-row justify-between items-center">
            {/* <!-- step 1 --> */}
            <div class="step flex flex-col items-center justify-center gap-10">
              <div class="step-icon bg-white flex justify-center items-center w-[150px] lg:w-[200px] aspect-square rounded-full">
                <img
                  src="/images/booking.png"
                  alt="request rider"
                  class="h-[75px] lg:h-[100px] aspect-square"
                />
              </div>

              <p class="text-turquoise-1 font-['Manrope'] font-bold text-lg lg:text-[28px]">
                Pick a Slot
              </p>
            </div>

            {/* <!-- step 2 --> */}
            <div class="step flex flex-col items-center justify-center gap-10">
              <div class="step-icon bg-white flex justify-center items-center w-[150px] lg:w-[200px] aspect-square rounded-full">
                <img
                  src="/images/package.png"
                  alt="Collecting Order"
                  class="h-[75px] lg:h-[100px] aspect-square"
                />
              </div>

              <p class="text-turquoise-1 font-['Manrope'] font-bold text-lg lg:text-[28px]">
                Get Orders
              </p>
            </div>

            {/* <!-- step 3 --> */}
            <div class="step flex flex-col items-center justify-center gap-10">
              <div class="step-icon bg-white flex justify-center items-center w-[150px] lg:w-[200px] aspect-square rounded-full">
                <img
                  src="/images/delivery.png"
                  alt="Delivering Order"
                  class="h-[75px] lg:h-[100px] aspect-square"
                />
              </div>

              <p class="text-turquoise-1 font-['Manrope'] font-bold text-lg lg:text-[28px]">
                Start Delivering
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* <!-- GETTING STARTED SECTION --> */}
      <section class="getting-started py-28 px-10 lg:px-20 flex flex-col gap-12 justify-center items-center">
        <h2 class="text-turquoise-1 font-bold text-4xl lg:text-5xl">
          What you need to get started?
        </h2>

        <div class="getting-started-requirements grid grid-cols-1 lg:grid-cols-3 gap-5">
          {/* <!-- requirement --> */}
          <div class="requirement relative flex flex-col justify-center overflow-hidden items-center bg-turquoise-2 py-10 lg:py-14 px-5 rounded-[15px]">
            <img
              class="h-[60px] shadow-sm"
              src="/images/scooter-small.png"
              alt=""
            />
            <h3 class="font-['Manrope'] text-center text-lg lg:text-2xl font-bold text-primary">
              Own vehicle
            </h3>
            <p class="font-['Manrope'] text-center text-sm lg:text-lg text-light-blue">
              your own vehicle - either car or motorbike
            </p>

            {/* <!-- circle shape --> */}
            <div class="circle absolute rounded-full -bottom-32 -right-32 lg:-bottom-44 lg:-right-24 w-[120%] lg:w-4/5 border-[70px] lg:border-[90px] aspect-square border-light-white"></div>
          </div>
          {/* <!-- requirement --> */}
          <div class="requirement relative flex flex-col justify-center overflow-hidden items-center bg-turquoise-2 py-10 lg:py-14 px-5 rounded-[15px]">
            <img
              class="h-[60px] shadow-sm"
              src="/images/astronaut_helmet.png"
              alt=""
            />
            <h3 class="font-['Manrope'] text-center text-lg lg:text-2xl font-bold text-primary">
              Equipments
            </h3>
            <p class="font-['Manrope'] text-center text-sm lg:text-lg text-light-blue">
              Appropriate equipment (helmet, etc.)
            </p>

            {/* <!-- circle shape --> */}
            <div class="circle absolute rounded-full -bottom-32 -right-32 lg:-bottom-44 lg:-right-24 w-[120%] lg:w-4/5 border-[70px] lg:border-[90px] aspect-square border-light-white"></div>
          </div>
          {/* <!-- requirement --> */}
          <div class="requirement relative flex flex-col justify-center overflow-hidden items-center bg-turquoise-2 py-10 lg:py-14 px-5 rounded-[15px]">
            <img class="h-[60px] shadow-sm" src="/images/bank.png" alt="" />
            <h3 class="font-['Manrope'] text-center text-lg lg:text-2xl font-bold text-primary">
              Bank Account
            </h3>
            <p class="font-['Manrope'] text-center text-sm lg:text-lg text-light-blue">
              A UK bank account
            </p>

            {/* <!-- circle shape --> */}
            <div class="circle absolute rounded-full -bottom-32 -right-32 lg:-bottom-44 lg:-right-24 w-[120%] lg:w-4/5 border-[70px] lg:border-[90px] aspect-square border-light-white"></div>
          </div>
          {/* <!-- requirement --> */}
          <div class="requirement relative flex flex-col justify-center overflow-hidden items-center bg-turquoise-2 py-10 lg:py-14 px-5 rounded-[15px]">
            <img
              class="h-[60px] shadow-sm"
              src="/images/smartphone.png"
              alt=""
            />
            <h3 class="font-['Manrope'] text-center text-lg lg:text-2xl font-bold text-primary">
              Smartphone
            </h3>
            <p class="font-['Manrope'] text-center text-sm lg:text-lg text-light-blue">
              with the LOKL app downloaded (and preferably WhatsApp)
            </p>

            {/* <!-- circle shape --> */}
            <div class="circle absolute rounded-full -bottom-32 -right-32 lg:-bottom-44 lg:-right-24 w-[120%] lg:w-4/5 border-[70px] lg:border-[90px] aspect-square border-light-white"></div>
          </div>
          {/* <!-- requirement --> */}
          <div class="requirement relative flex flex-col justify-center overflow-hidden items-center bg-turquoise-2 py-10 lg:py-14 px-5 rounded-[15px]">
            <img
              class="h-[60px] shadow-sm"
              src="/images/doc-success.png"
              alt=""
            />
            <h3 class="font-['Manrope'] text-center text-lg lg:text-2xl font-bold text-primary">
              Right to work documents
            </h3>
            <p class="font-['Manrope'] text-center text-sm lg:text-lg text-light-blue">
              passport / settled status / visa and driving license
            </p>

            {/* <!-- circle shape --> */}
            <div class="circle absolute rounded-full -bottom-32 -right-32 lg:-bottom-44 lg:-right-24 w-[120%] lg:w-4/5 border-[70px] lg:border-[90px] aspect-square border-light-white"></div>
          </div>
          {/* <!-- requirement --> */}
          <div class="requirement relative flex flex-col justify-center overflow-hidden items-center bg-turquoise-2 py-10 lg:py-14 px-5 rounded-[15px]">
            <img class="h-[60px] shadow-sm" src="/images/mall-bag.png" alt="" />
            <h3 class="font-['Manrope'] text-center text-lg lg:text-2xl font-bold text-primary">
              Thernal bag
            </h3>
            <p class="font-['Manrope'] text-center text-sm lg:text-lg text-light-blue">
              A good quality thermal bag for delivery.
            </p>

            {/* <!-- circle shape --> */}
            <div class="circle absolute rounded-full -bottom-32 -right-32 lg:-bottom-44 lg:-right-24 w-[120%] lg:w-4/5 border-[70px] lg:border-[90px] aspect-square border-light-white"></div>
          </div>
        </div>
      </section>

      {/* <!-- REQUEST A RIDER SECTION --> */}
      <section class="request-a-rider-wrapper lg:mt-20 lg:px-20 relative">
        <div
          class="request-a-rider rounded-[60px] flex justify-between"
          style="
          background-image: url('/images/cooking.png');
          background-repeat: no-repeat;
          background-size: cover;
        "
        >
          <div class="w-full lg:w-1/2 relative min-h-full">
            <img
              src="/images/barista-waiter.png"
              class="absolute bottom-0 z-10 lg:left-16"
              alt=""
            />
          </div>

          <div class="cta relative z-10 w-full lg:w-1/2 flex flex-col gap-4 py-40">
            <h2 class="font-bold text-5xl text-turquoise-1">
              Request a rider.
            </h2>
            <p class="font-bold text-5xl text-white leading-[64px]">
              Boost your sales like <br />
              never before
            </p>
            <a
              href="#"
              class="text-primary w-max text-lg bg-turquoise-1 px-10 py-3 rounded-full"
            >
              Become a Rider
            </a>
          </div>
        </div>
      </section>

      {/* <!-- FAQ --> */}
      <section class="faq-wrapper mt-10 lg:mt-28 flex justify-center px-4 lg:px-20">
        <div class="faq bg-white relative -bottom-20 z-10 shadow-xl w-full lg:w-2/3 rounded-[40px] lg:rounded-[60px] p-6 lg:p-16 flex flex-col justify-center items-center">
          <h2 class="text-3xl lg:text-4xl text-turquoise-1 font-medium text-center">
            Frequently Asked Questions
          </h2>
          <span class="h-1 bg-accent w-20 mt-3"></span>

          {/* <!-- FAQS --> */}
          <section class="bg-white">
            <div class="py-10 mx-auto">
              <div class="faqs flex flex-col gap-10">
                {/* <!-- open faq --> */}
                <div class="faq shadow-md p-2 lg:p-8 rounded-2xl">
                  <button class="flex items-center focus:outline-none">
                    <svg
                      class="flex-shrink-0 w-6 h-6 text-primary"
                      viewBox="0 0 32 32"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M16 28C22.6274 28 28 22.6274 28 16C28 9.37258 22.6274 4 16 4C9.37258 4 4 9.37258 4 16C4 22.6274 9.37258 28 16 28Z"
                        stroke="#141D55"
                        stroke-width="2"
                        stroke-miterlimit="10"
                      />
                      <path
                        d="M11 16H21"
                        stroke="#141D55"
                        stroke-width="2"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                    </svg>

                    <h1 class=" mx-2 lg:mx-4 text-base lg:text-[21px] font-medium text-primary font-['Manrope']">
                      When am I able to book slots?
                    </h1>
                  </button>

                  <div class="flex mt-8 md:mx-10">
                    <p class="max-w-3xl px-4 text-light-blue font-['Manrope'] font-normal">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                      sed do eiusmod tempor incididunt ut labore et dolore magna
                      aliqua.
                    </p>
                  </div>
                </div>

                {/* <!-- closed faq --> */}
                <div class="faq shadow-md p-8 rounded-2xl">
                  <button class="flex items-center focus:outline-none">
                    <svg
                      class="flex-shrink-0 w-6 h-6 text-turquoise-1"
                      viewBox="0 0 32 32"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M16 28C22.6274 28 28 22.6274 28 16C28 9.37258 22.6274 4 16 4C9.37258 4 4 9.37258 4 16C4 22.6274 9.37258 28 16 28Z"
                        stroke="#0CCFF0"
                        stroke-width="2"
                        stroke-miterlimit="10"
                      />
                      <path
                        d="M11 16H21"
                        stroke="#0CCFF0"
                        stroke-width="2"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                      <path
                        d="M16 11V21"
                        stroke="#0CCFF0"
                        stroke-width="2"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                    </svg>

                    <h1 class="mx-4 text-lg lg:text-[21px] font-medium text-primary font-['Manrope']">
                      What is the minimum number of hours I can book a slot for?
                    </h1>
                  </button>
                </div>

                {/* <!-- closed faq --> */}
                <div class="faq shadow-md p-8 rounded-2xl">
                  <button class="flex items-center focus:outline-none">
                    <svg
                      class="flex-shrink-0 w-6 h-6 text-turquoise-1"
                      viewBox="0 0 32 32"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M16 28C22.6274 28 28 22.6274 28 16C28 9.37258 22.6274 4 16 4C9.37258 4 4 9.37258 4 16C4 22.6274 9.37258 28 16 28Z"
                        stroke="#0CCFF0"
                        stroke-width="2"
                        stroke-miterlimit="10"
                      />
                      <path
                        d="M11 16H21"
                        stroke="#0CCFF0"
                        stroke-width="2"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                      <path
                        d="M16 11V21"
                        stroke="#0CCFF0"
                        stroke-width="2"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                    </svg>

                    <h1 class="mx-4 text-lg lg:text-[21px] font-medium text-primary font-['Manrope']">
                      How well in advance do I have to book my slots?
                    </h1>
                  </button>
                </div>

                {/* <!-- closed faq --> */}
                <div class="faq shadow-md p-8 rounded-2xl">
                  <button class="flex items-center focus:outline-none">
                    <svg
                      class="flex-shrink-0 w-6 h-6 text-turquoise-1"
                      viewBox="0 0 32 32"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M16 28C22.6274 28 28 22.6274 28 16C28 9.37258 22.6274 4 16 4C9.37258 4 4 9.37258 4 16C4 22.6274 9.37258 28 16 28Z"
                        stroke="#0CCFF0"
                        stroke-width="2"
                        stroke-miterlimit="10"
                      />
                      <path
                        d="M11 16H21"
                        stroke="#0CCFF0"
                        stroke-width="2"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                      <path
                        d="M16 11V21"
                        stroke="#0CCFF0"
                        stroke-width="2"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                    </svg>

                    <h1 class="mx-4 text-lg lg:text-[21px] font-medium text-primary font-['Manrope']">
                      How can I cancel a slot?
                    </h1>
                  </button>
                </div>
              </div>
            </div>
          </section>
        </div>
      </section>
    </>
  );
});

export const head: DocumentHead = {
  title: 'Welcome to Qwik',
};
