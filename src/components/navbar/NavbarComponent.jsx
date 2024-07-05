import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Navbar, Dropdown, Avatar, Button } from 'flowbite-react';
import { BiSolidVideoPlus } from 'react-icons/bi';
import { MdNotificationsActive } from 'react-icons/md';

const NavbarComponent = () => {
  const location = useLocation();
  const pathname = location.pathname;
  const [navbarList, setNavbarList] = useState([
    { title: "សៀវភៅ", path: "/book" },
    { title: "មេរៀន", path: "/lesson" },
    { title: "វេទិកា", path: "/forum" },
    { title: "ប្លុក", path: "/blog" },
  ]);

  return (
    <nav className="bg-[#16A1DF]">
 <Navbar fluid rounded className="w-[85%] mx-auto bg-[#16A1DF]">
    <div className="flex justify-between items-center w-full">
      <Navbar.Collapse>
        <Navbar.Link as={Link} to="/" active={pathname === '/'}>
          <img src="/Stem_logo-removebg-preview.png" className="h-[50px] w-[80px] object-cover bg-none" alt="Stem logo" />
        </Navbar.Link>
      </Navbar.Collapse>
      <Navbar.Collapse className="flex justify-center w-full ml-36 ">
        {navbarList.map((item, index) => (
          <Navbar.Link
            key={index}
            as={Link}
            to={item.path}
            active={pathname === item.path}
            className="font-suwannaphum text-[20px] font-medium text-white"
          >
            {item.title}
          </Navbar.Link>
        ))}
        <Navbar.Link
          as={Link}
          to="/about-us"
          active={pathname === '/about-us'}
          className="font-suwannaphum text-[20px] font-medium text-white"
        >
          អំពីយើង
        </Navbar.Link>
      </Navbar.Collapse>
      <div className="flex items-center space-x-6 md:order-2 ">
        <Navbar.Link
          as={Link}
          to="/create"
          active={pathname === '/create'}
          className="font-suwannaphum text-[28px] font-semibold text-red-700"
        >
          <BiSolidVideoPlus />
        </Navbar.Link>
        <Navbar.Link
          as={Link}
          to="/notification"
          active={pathname === '/notification'}
          className="font-suwannaphum text-[28px] font-semibold text-yellow-300"
        >
          <MdNotificationsActive />
        </Navbar.Link>
        <Navbar.Link
          as={Link}
          to="/login"
          active={pathname === '/login'}
          className="font-suwannaphum text-[20px] font-semibold"
        >
          <Button className=" border-2 border-slate-600 bg-white hover:bg-blue-600 text-black">
            ចូលគណនី
          </Button>
        </Navbar.Link>
        <Dropdown
          arrowIcon={false}
          inline
          label={
            <Avatar className="mr-3" alt="User settings" img="https://flowbite.com/docs/images/people/profile-picture-5.jpg" rounded />
          }
        >
          <Dropdown.Header>
            <span className="block text-sm">Bonnie Green</span>
            <span className="block truncate text-sm font-medium">name@flowbite.com</span>
          </Dropdown.Header>
          <Dropdown.Item>Dashboard</Dropdown.Item>
          <Dropdown.Item>Settings</Dropdown.Item>
          <Dropdown.Item>Earnings</Dropdown.Item>
          <Dropdown.Divider />
          <Dropdown.Item>Sign out</Dropdown.Item>
        </Dropdown>
        <Navbar.Toggle />
      </div>
    </div>
  </Navbar>
    </nav>
   
  


  );
};

export default NavbarComponent;
