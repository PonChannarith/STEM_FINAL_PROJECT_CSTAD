import React from 'react'
import { FaArrowRightLong } from "react-icons/fa6";
const  BlogCard = () => {
  return (
    <>
    <section className="flex justify-between mt-5 w-[80%] mx-auto font-suwannaphum mb-4 ">
         <h3 className="text-black text-3xl">ប្លុក</h3>
         <span className="flex items-center text-black text-[20px]">
           បង្ហាញទាំងអស់
           <FaArrowRightLong />
         </span>
     </section> 

     <section className=" grid grid-flow-row-dense grid-cols-4 grid-rows-1  w-[80%] mx-auto  gap-7">
       <div className="relative col-span-2  flex justify-between h-[480px] flex-col overflow-hidden rounded-xl bg-white bg-clip-border text-gray-700 shadow-md ">
           <div className="relative   overflow-hidden text-gray-700 bg-transparent rounded-none shadow-none bg-clip-border">
             <img className="h-[100%] w-[100%]  object-cover bg-cover"
               src="../src/assets/stem_book.jpg"
               alt=""
             />
           </div>
       </div>
       {/* card */}
   <div className="relative col-span-1   flex justify-between flex-col h-[480px] overflow-hidden rounded-xl bg-white bg-clip-border text-gray-700 shadow-md ">
     <div className="relative  overflow-hidden text-gray-700  bg-transparent rounded-none shadow-none bg-clip-border">
       <img className="h-80 w-[100%] object-cover"
        src="../src/assets/Book_layout.png"
         alt=""
       />
     </div>
     <div className="p-2">
       <h4 className="block font-suwannaphum text-2xl font-semibold leading-snug tracking-normal text-blue-gray-900">
         សន្ទានុក្រមពាក្យផ្ទុយ
       </h4>
       <span className="block font-suwannaphum mt-2 text-[18px] antialiased font-normal leading-relaxed text-gray-700">
         សៀវភៅនេះត្រូវបានរៀបចំឡើងដើម្បីជួយសម្រួលដល់ ការសិក្សា
         របស់និស្សិតកម្ពុជា.......
       </span>
     </div>
     <div className="flex items-center justify-between p-3 -mt-10" >
       <p className="font-suwannphum text-[15px]">ចំនួនអ្នកមេីល: 144</p>
       <div className="flex items-center​ pt-8 pl-2 text-[15px]">
         <svg
           xmlns="http://www.w3.org/2000/svg"
           viewBox="0 0 24 24"
           fill="currentColor"
           className="w-5 h-5 text-yellow-400"
         >
           <path
             fill-rule="evenodd"
             d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z"
             clip-rule="evenodd"
           ></path>
         </svg>
         <svg
           xmlns="http://www.w3.org/2000/svg"
           viewBox="0 0 24 24"
           fill="currentColor"
           className="w-5 h-5  text-yellow-400"
         >
           <path
             fill-rule="evenodd"
             d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z"
             clip-rule="evenodd"
           ></path>
         </svg>
         <svg
           xmlns="http://www.w3.org/2000/svg"
           viewBox="0 0 24 24"
           fill="currentColor"
           className="w-5 h-5 text-yellow-400"
         >
           <path
             fill-rule="evenodd"
             d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z"
             clip-rule="evenodd"
           ></path>
         </svg>
         <svg
           xmlns="http://www.w3.org/2000/svg"
           viewBox="0 0 24 24"
           fill="currentColor"
           className="w-5 h-5  text-yellow-400"
         >
           <path
             fill-rule="evenodd"
             d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z"
             clip-rule="evenodd"
           ></path>
         </svg>
         <svg
           xmlns="http://www.w3.org/2000/svg"
           viewBox="0 0 24 24"
           fill="currentColor"
           className="w-5 h-5  text-yellow-400"
         >
           <path
             fill-rule="evenodd"
             d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z"
             clip-rule="evenodd"
           ></path>
         </svg>
       </div>
     </div>
   </div>
   <div className="relative col-span-1   flex justify-between flex-col h-[480px] overflow-hidden rounded-xl bg-white bg-clip-border text-gray-700 shadow-md ">
     <div className="relative  overflow-hidden text-gray-700  bg-transparent rounded-none shadow-none bg-clip-border">
       <img className="h-80 w-[100%] object-cover"
         src="../src/assets/Book_layout.png"
         alt=""
       />
     </div>
     <div className="p-2">
       <h4 className="block font-suwannaphum text-2xl font-semibold leading-snug tracking-normal text-blue-gray-900">
         សន្ទានុក្រមពាក្យផ្ទុយ
       </h4>
       <span className="block font-suwannaphum mt-2 text-[18px] antialiased font-normal leading-relaxed text-gray-700">
         សៀវភៅនេះត្រូវបានរៀបចំឡើងដើម្បីជួយសម្រួលដល់ ការសិក្សា
         របស់និស្សិតកម្ពុជា.......
       </span>
     </div>
     <div className="flex items-center justify-between p-3 -mt-9">
       <p className="font-suwannphum text-[15px]">ចំនួនអ្នកមេីល: 144</p>
       <div className="flex items-center​ pt-8 pl-2 text-[15px]">
         <svg
           xmlns="http://www.w3.org/2000/svg"
           viewBox="0 0 24 24"
           fill="currentColor"
           className="w-5 h-5 text-yellow-400"
         >
           <path
             fill-rule="evenodd"
             d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z"
             clip-rule="evenodd"
           ></path>
         </svg>
         <svg
           xmlns="http://www.w3.org/2000/svg"
           viewBox="0 0 24 24"
           fill="currentColor"
           className="w-5 h-5  text-yellow-400"
         >
           <path
             fill-rule="evenodd"
             d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z"
             clip-rule="evenodd"
           ></path>
         </svg>
         <svg
           xmlns="http://www.w3.org/2000/svg"
           viewBox="0 0 24 24"
           fill="currentColor"
           className="w-5 h-5 text-yellow-400"
         >
           <path
             fill-rule="evenodd"
             d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z"
             clip-rule="evenodd"
           ></path>
         </svg>
         <svg
           xmlns="http://www.w3.org/2000/svg"
           viewBox="0 0 24 24"
           fill="currentColor"
           className="w-5 h-5  text-yellow-400"
         >
           <path
             fill-rule="evenodd"
             d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z"
             clip-rule="evenodd"
           ></path>
         </svg>
         <svg
           xmlns="http://www.w3.org/2000/svg"
           viewBox="0 0 24 24"
           fill="currentColor"
           className="w-5 h-5  text-yellow-400"
         >
           <path
             fill-rule="evenodd"
             d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z"
             clip-rule="evenodd"
           ></path>
         </svg>
       </div>
     </div>
   </div>

   </section>
       
 </>
  )
}
export default BlogCard;