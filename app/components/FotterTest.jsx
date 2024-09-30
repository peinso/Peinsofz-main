import Link from "next/link";
import Button from "./Button";
import button from "./Button";
const Icons = (
  <ul className="flex gap-4 md:flex ">
    <li className="hover:scale-150">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="22"
        height="20"
        viewBox="0 0 22 20"
        fill="none"
      >
        <path
          fill-rule="evenodd"
          clipRule="evenodd"
          d="M21.4065 10.4689C21.4065 5.15818 16.8092 0.852051 11.1393 0.852051C5.4694 0.852051 0.87207 5.15818 0.87207 10.4689C0.87207 15.2688 4.62602 19.2473 9.53503 19.9694V13.2497H6.92743V10.4689H9.53503V8.35021C9.53503 5.94041 11.0682 4.60821 13.4132 4.60821C14.5366 4.60821 15.7119 4.79626 15.7119 4.79626V7.16312H14.4165C13.1418 7.16312 12.7431 7.90414 12.7431 8.66576V10.4689H15.5904L15.1357 13.2497H12.7435V19.9703C17.6525 19.2486 21.4065 15.2701 21.4065 10.4689Z"
          fill="white"
        />
      </svg>
    </li>
    <li className="hover:scale-150">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="20"
        height="17"
        viewBox="0 0 20 17"
        fill="none"
      >
        <path
          d="M19.5756 2.56483C18.8566 2.87705 18.0958 3.08274 17.3172 3.17542C18.1354 2.69668 18.7507 1.93611 19.0477 1.03637C18.2742 1.48836 17.4293 1.80549 16.5493 1.9742C16.1787 1.58611 15.733 1.27737 15.2393 1.06675C14.7456 0.856137 14.2143 0.748039 13.6775 0.74903C11.5041 0.74903 9.74533 2.48102 9.74533 4.61608C9.74379 4.91306 9.77785 5.20916 9.84677 5.49804C8.28834 5.42504 6.76231 5.02776 5.36632 4.33164C3.97033 3.63552 2.73512 2.65588 1.73972 1.4554C1.39051 2.04368 1.20583 2.7149 1.20497 3.3989C1.20497 4.7398 1.90506 5.92506 2.96217 6.61945C2.33586 6.6046 1.72238 6.43895 1.17382 6.13657V6.18446C1.17382 8.06012 2.53166 9.62051 4.32879 9.97569C3.99084 10.0657 3.64259 10.1113 3.29284 10.1114C3.04467 10.1118 2.79706 10.0877 2.55362 10.0395C3.05322 11.576 4.5073 12.6934 6.22975 12.7253C4.83014 13.8032 3.11178 14.3858 1.34475 14.3815C1.0311 14.381 0.717739 14.3624 0.40625 14.3256C2.20385 15.4727 4.29342 16.0794 6.42624 16.0736C13.6691 16.0736 17.6259 10.1792 17.6259 5.06704C17.6259 4.89943 17.6216 4.73182 17.6136 4.56819C18.3816 4.02228 19.046 3.34387 19.5756 2.56483Z"
          fill="white"
        />
      </svg>
    </li>
    <li className="hover:scale-150">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="20"
        height="21"
        viewBox="0 0 20 21"
        fill="none"
      >
        <path
          d="M18.4415 0.702148H2.2354C1.34987 0.702148 0.576172 1.33931 0.576172 2.21444V18.4565C0.576172 19.3364 1.34987 20.1205 2.2354 20.1205H18.4367C19.327 20.1205 19.9945 19.3312 19.9945 18.4565V2.21444C19.9997 1.33931 19.327 0.702148 18.4415 0.702148ZM6.59543 16.8883H3.81358V8.2389H6.59543V16.8883ZM5.30073 6.92383H5.28079C4.39049 6.92383 3.81401 6.26109 3.81401 5.43147C3.81401 4.58669 4.40566 3.93955 5.3159 3.93955C6.22613 3.93955 6.78311 4.58192 6.80305 5.43147C6.80262 6.26109 6.22613 6.92383 5.30073 6.92383ZM16.7623 16.8883H13.9805V12.159C13.9805 11.026 13.5756 10.2518 12.5692 10.2518C11.8002 10.2518 11.3451 10.772 11.1427 11.2787C11.0669 11.4607 11.0465 11.7086 11.0465 11.9618V16.8883H8.26463V8.2389H11.0465V9.44258C11.4513 8.8661 12.0837 8.03648 13.5553 8.03648C15.3814 8.03648 16.7628 9.24016 16.7628 11.8352L16.7623 16.8883Z"
          fill="white"
        />
      </svg>
    </li>
  </ul>
);
const FooterTest = () => {
  return (
    <footer className="px-8 text-white bg-gradient-to-r from-[#091242] to-[#0026ff9e]   lg:px-0">
      <header className=" bg-[#FFFFFF14] hidden lg:block py-12">
        <main className="hidden lg:grid  lg:grid-cols-[1fr_.5fr_1fr] lg:gap-6 mx-auto max-w-7xl gap-x-6 ">
          <h1 className="text-5xl font-bold">Contact </h1>
          <h1 className="text-5xl font-bold ">Pages</h1>
          <h1 className="text-5xl font-bold">Subscribe</h1>
        </main>
      </header>
      <main className="grid items-center lg:items-start  px-8 lg:px-0  py-16 mx-auto max-w-7xl gap-y-16 lg:grid-cols-[1fr_.5fr_1fr] gap-x-6">
        <ul className="flex flex-col gap-10 ">
          <li className="font-medium leading-6 font-color ">
            Leverage agile frameworks to provide a robust synopsis for strategy
            collaborative thinking to further the overall value proposition.
          </li>
          <ul className="flex items-center gap-2">
            <li>
              <svg
                width="63"
                height="63"
                viewBox="0 0 63 63"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <circle
                  cx="31.5"
                  cy="31.5"
                  r="31"
                  fill="#111C55"
                  stroke="#273270"
                />
                <path
                  d="M40.996 23H23.004C22.4495 23 22 23.3755 22 23.8387V37.1613C22 37.6245 22.4495 38 23.004 38H40.996C41.5505 38 42 37.6245 42 37.1613V23.8387C42 23.3755 41.5505 23 40.996 23Z"
                  stroke="#F6B426"
                />
                <path d="M22 23L32.4247 30L42 23.2294" stroke="#F6B426" />
              </svg>
            </li>
            <li className="text-sm">
              <p>Email</p>
              <p>contact@logistics.com</p>
            </li>
          </ul>
          <ul className="flex items-center gap-2">
            <li>
              <svg
                width="63"
                height="63"
                viewBox="0 0 63 63"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <circle
                  cx="31.5"
                  cy="31.5"
                  r="31"
                  fill="#111C55"
                  stroke="#273270"
                />
                <path
                  d="M23.9741 22.1408C23.8394 22.1449 23.7071 22.1743 23.5848 22.2272C23.4625 22.28 23.3528 22.3554 23.2622 22.4487C23.1715 22.542 23.1018 22.6514 23.0571 22.7704C23.0124 22.8894 22.9936 23.0156 23.0019 23.1416C23.1364 25.3015 23.7704 30.5716 26.8059 33.8583C30.4409 37.8181 35.1748 39.1824 40.0317 38.9808C40.292 38.9662 40.5368 38.8596 40.7165 38.6826C40.8962 38.5055 40.9975 38.2712 41 38.0268V34.5674C40.997 34.2446 40.8783 33.9322 40.663 33.6802C40.4476 33.4282 40.1482 33.2513 39.8127 33.1779L37.3804 32.6739C37.0796 32.6138 36.7664 32.6397 36.4815 32.7481C36.1965 32.8566 35.9528 33.0427 35.7819 33.2823L35.244 34.0454C35.1946 34.1153 35.1208 34.1668 35.0352 34.1911C34.9496 34.2154 34.8577 34.211 34.7752 34.1786C33.5379 33.6783 28.6081 31.5184 28.0663 27.8753C28.0557 27.805 28.0675 27.7333 28.1003 27.6692C28.1332 27.6051 28.1855 27.5516 28.2507 27.5154L29.2267 26.9574C29.4944 26.802 29.7047 26.5732 29.8291 26.3022C29.9535 26.0311 29.986 25.7308 29.9222 25.4419L29.3881 23.1236C29.31 22.7988 29.1142 22.5093 28.8339 22.3045C28.5537 22.0998 28.2064 21.9923 27.8511 22.0004L23.9741 22.1408Z"
                  stroke="#F6B426"
                />
              </svg>
            </li>
            <li className="text-sm">
              <p>Call us</p>
              <p>contact@logistics.com</p>
            </li>
          </ul>
        </ul>
        <ul className="flex flex-col w-56 gap-4 text-base ">
          <Link href={"/about"}>
            {" "}
            <li className="hover:text-[#FFBE34]">About Us</li>
          </Link>
          <Link href={"/projects"}>
            <li className="hover:text-[#FFBE34]">Our Projects</li>
          </Link>
          <li className="hover:text-[#FFBE34]">Connect</li>
          <li className="hover:text-[#FFBE34]">Blog</li>
          {/* <li>Careers</li>
          <li>FAQ</li> */}
        </ul>
        <ul className="flex flex-col gap-8">
          <li>
            <input
              type="email"
              placeholder="Email here "
              className="w-[60%] border border-[#4E5683] p-2 px-4  focus:border-[#4E5683] bg-transparent "
            />
          </li>
          <li className="flex flex-col gap-6 lg:gap-4 lg:items-center lg:flex-row">
            <Button buttonText="Subscribe" />
            {Icons}
          </li>
        </ul>
      </main>
      <div className="w-full border border-[#4E5683]"></div>
      <footer className="flex items-center justify-between px-8 py-4 mx-auto font-medium text-white lg:px-0 max-w-7xl ">
        <p>Copyright © PEINSOfz.</p>
      </footer>
    </footer>
  );
};

export default Footer;
