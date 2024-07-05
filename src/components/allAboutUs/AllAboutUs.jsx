import React from 'react';

const AllAboutUs = () => {
  return (
    <>
      <section className="relative">
      <img className="w-full h-[600px] object-cover" src="../src/assets/AboutUs_content.jpg" alt="About STEM" />
      <div className="absolute inset-0 flex flex-col justify-center items-center text-white bg-black bg-opacity-50 ">
     
        <div class="w-max">
    <h1
      class="animate-typing overflow-hidden whitespace-nowrap border-r-4 border-r-white pr-5 text-5xl p-3 text-white font-bold">
      អំពីយើង
    </h1>
  </div>
        <p className="text-center text-2xl px-4">STEM ដែលមាន​ទម្រង់ពេញ​ Science, technology, engineering, and mathematics) <br className="mt-2"/>
         ជាការធ្វើការដែលពាក់ព័ន្ធនឹង ផ្នែកវិទ្យាសាស្រ្ត, បច្ចេកវិទ្យា, វិស្វកម្ម និងគណិតវិទ្យា។</p>
      </div>
    </section>
    <section className="py-14 lg:py-24 relative">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative ">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-9">
                <div className="img-box">
                  <img src="../src/assets/About_STEM_Purpose.jpg" alt=""classNameName="max-lg:mx-auto"/>
                </div>
                <div className="lg:pl-[100px] flex items-center">
                    <div className="data w-full">
                        <h2
                            className="font-manrope font-bold text-4xl lg:text-5xl text-black mb-9 max-lg:text-center relative">
                           អំពី STEM </h2>
                        <p className="font-normal text-xl leading-8 text-gray-500 max-lg:text-center max-w-2xl mx-auto">
                        ជាមួយSTEMអ្នកប្រើប្រាស់អាចរៀនតាមប្រព័ន្ធអ៊ីនធឺណិតទៅលើមុខជំនាញជាច្រើនដែលកំពុងពេញនិយមពិសេសយើងផ្តោតសំខាន់ទៅលើជំនាញSTEMដើម្បីអោយអ្នកសិក្សាបានយល់ដឹងអំពីសារ:សំខាន់នៃSTEនិងចូលរួមចំណែកក្នុងការអភិវឌ្ឍន៍ប្រទេសរបស់យើងផងដែរលើសពីនេះយើងក៏មាននូវវេទិកាសាធារណៈដលដើរតួនាទីជាអ្នកsupportមួយយ៉ាងសំខាន់ក្នុងការជួយសម្រួលដល់ការសិក្សារបស់សិស្សតាមរយៈការអនុញ្ញាតឱ្យអ្នកប្រើប្រាស់ទាំងអស់អាចសួរនិងឆ្លើយសំណួរដោយសេរីនៅលើគេហទំព័ររបស់យើង។
                        </p>
                    </div>
                </div>
            </div>
        </div>
    </section>
    <section className="py-14 lg:py-24 relative">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative ">
            <div className="grid grid-cols-1 lg:grid-cols-2 lg:gap-9 ">

                <div className="lg:pr-24 flex items-center">
                    <div className="data w-full">
                        <h2 className="font-manrope font-bold text-4xl lg:text-5xl text-black mb-9 max-lg:text-center">គោលបំណងរបស់ពួកយើង</h2>
                        <p className="font-normal text-xl leading-8 text-gray-500 max-lg:text-center max-w-2xl mx-auto">
                        ប្រមូលផ្តុំឯកសារ និងវីឌីអូដែលជាភាសាខ្មែរដែលទាក់ទងSTEM (Science,  Technology,  Engineering,  and Mathematics) ឬ វិទ្យាសាស្រ្ត បច្ចេកវិទ្យា វិស្វករ និង គណិតវិទ្យា ដើម្បីជាជំនួយដល់ការលើកកម្ពស់ការ
                        បណ្តះបណ្តាលដល់ការសិក្សារទៅលើ STEM (Science,  Technology,  Engineering,  and Mathematics)។
                        </p>
                    </div>
                </div>
                <div classNamename="img-box ">
                      <img src="../src/assets/About_STEM.jpg" alt="" />
                </div>
            </div>
        </div>
    </section>
    <div className="w-max mx-auto text-blue-600">
      <h1
      class="animate-typing  overflow-hidden whitespace-nowrap border-r-4  text-center border-r-white  text-3xl p-3 text-black font-bold">
      លោកគ្រូនិងអ្នកគ្រូរបស់យើង
    </h1>
    </div>
    
    <div className="sm:flex items-center max-w-screen-xl w-[80%] mx-auto bg-slate-200">
    <div className="sm:w-1/2 p-10">
        <div className="image object-center text-center">
            <img className="w-[400px]" src="../src/assets/Mentor Muyleang.jpg" alt="" />
        </div>
    </div>
    <div className="sm:w-1/2 p-5 w-[80%] ">
        <div className="text">
            <span className="text-gray-500 border-b-2 border-indigo-600 uppercase">About us</span>
            <h2 className="my-4 font-bold text-3xl  sm:text-4xl ">About <span className="text-indigo-600">Our Company</span>
            </h2>
            <p className="text-gray-700">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid, commodi
                doloremque, fugiat illum magni minus nisi nulla numquam obcaecati placeat quia, repellat tempore
                voluptatum.
            </p>
        </div>
    </div>
</div>
    </>
  );
};

export default AllAboutUs;
