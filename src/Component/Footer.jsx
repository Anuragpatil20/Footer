import React from 'react'

function Footer() {
  return (
    <div>
  
    <div class= " bg-gray-100 mt-30 ">
    <div class="max-w-screen-lg px-4 sm:px-6 text-gray-800 sm:grid md:grid-cols-4 sm:grid-cols-2 mx-auto">
        <div class="p-5">
            <h3 class="font-bold text-2xl text-blak"> NUMETRY TECHNOLOGIES</h3>
        </div>
        <div class="p-5">
            <a href='/home'><div class="text-sm uppercase text-indigo-600 font-bold">Home</div></a>
            <a class="my-3 block" href="/about">About_us <span class="text-teal-600 text-xs p-1"></span></a>
            <a class="my-3 block" href="/services">Services <span class="text-teal-600 text-xs p-1"></span></a>
            <a class="my-3 block" href="/gallery">Gallery <span class="text-teal-600 text-xs p-1"></span></a>
            <a class="my-3 block" href="/contact">Contact <span class="text-teal-600 text-xs p-1"></span></a>
        </div>
        <div class="p-5">
            <div class="text-sm uppercase text-indigo-600 font-bold">Support</div>
            <a class="my-3 block" href="/help">Help Center <span class="text-teal-600 text-xs p-1"></span></a><a
                class="my-3 block" href="/privacy">Privacy Policy <span class="text-teal-600 text-xs p-1"></span></a><a
                class="my-3 block" href="/condition">Conditions <span class="text-teal-600 text-xs p-1"></span></a>
        </div>
        <div class="p-5">
            <div class="text-sm uppercase text-indigo-600 font-bold">Contact us</div>
            <a class="my-3 block" href="/#">numetry technologies kalyani nagar pune www.numetry.in
                <span class="text-teal-600 text-xs p-1"></span></a><a class="my-3 block" href="/#">numetry@gmail.com
                <span class="text-teal-600 text-xs p-1"></span></a>
        </div>
    </div>
</div>

<div class="bg-gray-100 pt-2">
    <div class="flex pb-5 px-3 m-auto pt-5 border-t text-gray-800 text-sm flex-col
      max-w-screen-lg items-center">
        <div class="md:flex-auto md:flex-row-reverse mt-2 flex-row flex">
            <a href="https://www.instagram.com/" class="w-6 mx-1">
               <img src='https://cdn-icons-png.flaticon.com/128/15707/15707749.png'/>
            </a>
            <a href="https://www.facebook.com/" class="w-6 mx-1">
              <img src='https://cdn-icons-png.flaticon.com/128/5968/5968764.png'/>
            </a>
            <a href="https://x.com/?lang=en-in" class="w-6 mx-1">
               <img src='https://cdn-icons-png.flaticon.com/128/3670/3670151.png'/>
            </a>
           
        </div>
        
    </div>
</div>



    </div>
  )
}

export default Footer