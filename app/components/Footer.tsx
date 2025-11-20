import Image from "next/image";


const  Footer = () => {
return (
<footer className=" w-full bg-primary text-white py-16 px-6">
{/* MAIN SECTION */}
<div className="max-w-6xl mx-auto flex flex-col gap-10">
{/* TOP ROW */}
<div className="flex flex-col md:flex-row justify-between gap-10 border-b border-white pb-10">
{/* LEFT LINKS */}

 <Image src="/logo.png" alt="logo" width={152} height={65} className="my-auto "/>
<div className="flex flex-wrap gap-10 w-full md:w-auto">
{/* COLUMN 1 */}
<div>
<h3 className="font-raleway font-semibold text-lg mb-2">Discover</h3>
<ul className="flex flex-col gap-1 text-base font-nunito">
<li>Flights</li>
<li>Hotels</li>
<li>Bus</li>
<li>Shop</li>
<li>Gigs</li>
<li>Blog</li>
</ul>
</div>


{/* COLUMN 2 */}
<div>
<h3 className="font-raleway font-semibold text-lg mb-2">Terms</h3>
<ul className="flex flex-col gap-1 text-base font-nunito">
<li>Privacy Notice</li>
<li>Terms & Conditions</li>
<li>Refunds</li>
<li>Cookie Policy</li>
<li>Billing & Payment</li>
<li>Accessibility Statement</li>
</ul>
</div>


{/* COLUMN 3 */}
<div>
<h3 className="font-raleway font-semibold text-lg mb-2">FAQ’s</h3>
<ul className="flex flex-col gap-1 text-base font-nunito">
<li>About Us</li>
<li>FAQ’s</li>
<li>Contact Us</li>
<li>Careers</li>
<li>Explorer Membership</li>
<li>Adventurer Membership</li>
</ul>
</div>
</div>


{/* NEWSLETTER */}
<div className="w-full md:w-[380px] flex flex-col gap-4">
<h3 className="font-raleway font-semibold text-lg">Don't Miss the Adventure!</h3>
<p className="text-sm text-gray-300 font-nunito">Subscribe for insider offers and travel tips</p>


<div className="flex flex-col gap-4">

<div className="flex gap-2 w-full">
<input
type="email"
placeholder="Enter your email"
className="w-full px-4 py-2 bg-white text-black text-sm rounded-md"
/>
<button className="px-6 py-2 rounded-md bg-gradient-to-t from-[#F25C54] to-[#FF914D] font-bold font-nunito text-white text-base">
Subscribe
</button>
</div>


<p className="text-xs text-gray-300 font-nunito">
By subscribing, you agree to our Privacy Policy and consent to receive email updates.
</p>
</div>


{/* SOCIAL ICONS */}
<div className="flex gap-4 justify-end items-center mt-2">

<svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M20 10.0611C20 4.50451 15.5229 0 10 0C4.47715 0 0 4.50451 0 10.0611C0 15.0828 3.65684 19.2452 8.4375 20V12.9694H5.89844V10.0611H8.4375V7.84452C8.4375 5.32296 9.9305 3.93012 12.2146 3.93012C13.3088 3.93012 14.4531 4.12663 14.4531 4.12663V6.60261H13.1922C11.95 6.60261 11.5625 7.37822 11.5625 8.1739V10.0611H14.3359L13.8926 12.9694H11.5625V20C16.3432 19.2452 20 15.083 20 10.0611Z" fill="white"/>
</svg>

<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fillRule="evenodd" clipRule="evenodd" d="M16 3.24219H8C5.23858 3.24219 3 5.48077 3 8.24219V16.2422C3 19.0036 5.23858 21.2422 8 21.2422H16C18.7614 21.2422 21 19.0036 21 16.2422V8.24219C21 5.48077 18.7614 3.24219 16 3.24219ZM19.25 16.2422C19.2445 18.0348 17.7926 19.4867 16 19.4922H8C6.20735 19.4867 4.75549 18.0348 4.75 16.2422V8.24219C4.75549 6.44954 6.20735 4.99768 8 4.99219H16C17.7926 4.99768 19.2445 6.44954 19.25 8.24219V16.2422ZM16.75 8.49219C17.3023 8.49219 17.75 8.04447 17.75 7.49219C17.75 6.93991 17.3023 6.49219 16.75 6.49219C16.1977 6.49219 15.75 6.93991 15.75 7.49219C15.75 8.04447 16.1977 8.49219 16.75 8.49219ZM12 7.74219C9.51472 7.74219 7.5 9.75691 7.5 12.2422C7.5 14.7275 9.51472 16.7422 12 16.7422C14.4853 16.7422 16.5 14.7275 16.5 12.2422C16.5027 11.0479 16.0294 9.90176 15.1849 9.05727C14.3404 8.21278 13.1943 7.73953 12 7.74219ZM9.25 12.2422C9.25 13.761 10.4812 14.9922 12 14.9922C13.5188 14.9922 14.75 13.761 14.75 12.2422C14.75 10.7234 13.5188 9.49219 12 9.49219C10.4812 9.49219 9.25 10.7234 9.25 12.2422Z" fill="white"/>
</svg>

<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M17.1761 4.24219H19.9362L13.9061 11.0196L21 20.2422H15.4456L11.0951 14.6488L6.11723 20.2422H3.35544L9.80517 12.993L3 4.24219H8.69545L12.6279 9.35481L17.1761 4.24219ZM16.2073 18.6176H17.7368L7.86441 5.78147H6.2232L16.2073 18.6176Z" fill="white"/>
</svg>

<svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fillRule="evenodd" clipRule="evenodd" d="M1.5 0C0.67157 0 0 0.67157 0 1.5V16.5C0 17.3284 0.67157 18 1.5 18H16.5C17.3284 18 18 17.3284 18 16.5V1.5C18 0.67157 17.3284 0 16.5 0H1.5ZM5.52076 4.00272C5.52639 4.95897 4.81061 5.54819 3.96123 5.54397C3.16107 5.53975 2.46357 4.90272 2.46779 4.00413C2.47201 3.15897 3.13998 2.47975 4.00764 2.49944C4.88795 2.51913 5.52639 3.1646 5.52076 4.00272ZM9.2797 6.76176H6.75971H6.7583V15.3216H9.4217V15.1219C9.4217 14.742 9.4214 14.362 9.4211 13.9819C9.4203 12.9681 9.4194 11.9532 9.4246 10.9397C9.426 10.6936 9.4372 10.4377 9.5005 10.2028C9.7381 9.3253 10.5271 8.7586 11.4074 8.8979C11.9727 8.9864 12.3467 9.3141 12.5042 9.8471C12.6013 10.1803 12.6449 10.5389 12.6491 10.8863C12.6605 11.9339 12.6589 12.9815 12.6573 14.0292C12.6567 14.399 12.6561 14.769 12.6561 15.1388V15.3202H15.328V15.1149C15.328 14.6629 15.3278 14.211 15.3275 13.7591C15.327 12.6296 15.3264 11.5001 15.3294 10.3702C15.3308 9.8597 15.276 9.3563 15.1508 8.8627C14.9638 8.1286 14.5771 7.5211 13.9485 7.0824C13.5027 6.77019 13.0133 6.5691 12.4663 6.5466C12.404 6.54401 12.3412 6.54062 12.2781 6.53721C11.9984 6.52209 11.7141 6.50673 11.4467 6.56066C10.6817 6.71394 10.0096 7.0641 9.5019 7.6814C9.4429 7.7522 9.3852 7.8241 9.2991 7.9314L9.2797 7.9557V6.76176ZM2.68164 15.3244H5.33242V6.76733H2.68164V15.3244Z" fill="white"/>
</svg>

<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M21.593 7.20301C21.4791 6.78041 21.2565 6.39501 20.9473 6.08518C20.6382 5.77534 20.2533 5.55187 19.831 5.43701C18.265 5.00701 12 5.00001 12 5.00001C12 5.00001 5.73596 4.99301 4.16896 5.40401C3.74689 5.52415 3.36279 5.75078 3.05353 6.06214C2.74427 6.3735 2.52025 6.75913 2.40296 7.18201C1.98996 8.74801 1.98596 11.996 1.98596 11.996C1.98596 11.996 1.98196 15.26 2.39196 16.81C2.62196 17.667 3.29696 18.344 4.15496 18.575C5.73696 19.005 11.985 19.012 11.985 19.012C11.985 19.012 18.25 19.019 19.816 18.609C20.2385 18.4943 20.6237 18.2714 20.9336 17.9622C21.2435 17.653 21.4673 17.2682 21.583 16.846C21.997 15.281 22 12.034 22 12.034C22 12.034 22.02 8.76901 21.593 7.20301ZM9.99596 15.005L10.001 9.00501L15.208 12.01L9.99596 15.005Z" fill="white"/>
</svg>

</div>
</div>
</div>


{/* BOTTOM ROW */}
<div className="flex  font-nunito flex-col md:flex-row justify-center  gap-4 text-xs text-gray-200 ">
<p>© 2023-2025 Travulu. All rights reserved.</p>

<p>Privacy Policy</p>
<p>Terms of Service</p>

</div>
</div>
</footer>
);
}

export default Footer;
