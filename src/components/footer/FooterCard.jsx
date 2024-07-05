import React from 'react';
import { Footer } from "flowbite-react";
import { BsDribbble, BsFacebook, BsGithub, BsInstagram, BsTwitter } from "react-icons/bs";

const FooterCard= () => {
  return (
    <>
      <Footer container className=" bg-slate-100 mt-[30px]">
      <div className="w-[82%] mx-auto">
        <div className="grid w-full justify-between sm:flex sm:justify-between md:flex md:grid-cols-1">
          <div>
            <Footer.Brand
              src="/Stem_logo-removebg-preview.png" className="w-20 h-15 mt-4"
              alt="Stem Logo"
            />
            <p className="text-[17px]">
            STEM website ​ដែល​រចនា​ឡើង​សម្រាប់​សិស្សដើម្បី​ចូល​រួម​ក្នុង​ការ​សិក្សា​សហការ និង​ការ​ចែក​រំលែក​ចំណេះដឹង <br />
             អ្នកប្រើប្រាស់មានការគ្រប់គ្រងពេញលេញលើការធ្វើដំណើររបស់ពួកគេនិងបង្កើតមេរៀននៅក្នុងវេទិកា។
            </p>
          </div>
          <div className="grid grid-cols-2 gap-8 sm:mt-4 sm:grid-cols-3 sm:gap-6 ">
            <div>
              <Footer.Title title="គេហទំព័រ" className="font-suwannaphum text-2xl font-bold text-black "/>
              <Footer.LinkGroup col className="text-[16px] font-suwannaphum -ml-5">
                <Footer.Link href="#">មេរៀន</Footer.Link>
                <Footer.Link href="#">ប្លុក</Footer.Link>
                <Footer.Link href="#">វេទិកា</Footer.Link>
                <Footer.Link href="#">វីដេអូ</Footer.Link>
              </Footer.LinkGroup>
            </div>
            <div>
              <Footer.Title title="ព័ឥមាន" className="font-suwannaphum text-2xl font-bold text-black"/>
              <Footer.LinkGroup col className="text-[16px] font-suwannaphum -ml-5">
                <Footer.Link href="#">អំពីយើង</Footer.Link>
                <Footer.Link href="#">លក្ខខណ្ឌប្រើប្រាស់</Footer.Link>
                <Footer.Link href="#">លក្ខខណ្ឌប្រើប្រាស់</Footer.Link>
                <Footer.Link href="#">សាកសួរព័ឥមាន</Footer.Link>
                <Footer.Link href="#">លក្ខខណ្ឌផ្សេងៗ</Footer.Link>
              </Footer.LinkGroup>
            </div>
            <div>
              <Footer.Title title="ទំនាក់ទំនងមកពួកយើង" className="font-suwannaphum text-2xl font-bold text-black"/>
              <Footer.LinkGroup col className="text-[16px] font-suwannaphum -ml-5">
                <Footer.Link href="#">ទំនាក់ទំនងមកពួកយើង</Footer.Link>
                <Footer.Link href="#">អាសយដ្ធាន</Footer.Link>
                <Footer.Link href="#">ក្រុមការងារ</Footer.Link>
                <Footer.Link href="#">ផ្សេងៗ</Footer.Link>
              </Footer.LinkGroup>
            </div>
          </div>
        </div>
        <Footer.Divider />
        <div className="w-full sm:flex sm:items-center sm:justify-between">
          <Footer.Copyright href="#" by=" 2024 Stem. All Rights Reserved" />
          <div className="mt-4 flex space-x-6 sm:mt-0 sm:justify-center">
            <Footer.Icon href="#" icon={BsFacebook} />
            <Footer.Icon href="#" icon={BsInstagram} />
            <Footer.Icon href="#" icon={BsTwitter} />
            <Footer.Icon href="#" icon={BsGithub} />
            <Footer.Icon href="#" icon={BsDribbble} />
          </div>
        </div>
      </div>
    </Footer>
    </>
  )
}

export default FooterCard;
