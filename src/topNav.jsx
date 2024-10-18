import { Disclosure, DisclosureButton, DisclosurePanel } from '@headlessui/react';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline';
import { Link, useLocation } from 'react-router-dom';
import { useState, useEffect } from 'react';
import image from "./Images/images2.jpeg";

export default function TopNav() {
  const location = useLocation();
  const [navigation, setNavigation] = useState([
    { name: 'Home', href: '/', current: true },
    { name: 'Bookings', href: '/History', current: false },
    { name: 'Rosary', href: '/how-to-pray-the-rosary', current: false },
  ]);

  useEffect(() => {
    const updatedNavigation = navigation.map((item) => ({
      ...item,
      current: item.href === location.pathname,
    }));
    setNavigation(updatedNavigation);
  }, [location]);

  function classNames(...classes) {
    return classes.filter(Boolean).join(' ');
  }

  return (
    <Disclosure as="nav" className="bg-amber-900 fixed w-full z-10">
      <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
        <div className="relative flex h-16 items-center justify-between">
          <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
            <div className="flex flex-shrink-3 items-center">
              <img
                alt="Your Company"
                src={image}
                className="h-12 w-auto" style={{ borderRadius: "50%" }}
              />
              <p className='text-white text-4xl font-bold ml-2 font-sans'>Saint Leo's</p>
            </div>
          </div>
          <div className="hidden sm:ml-6 sm:block">
            <div className="flex space-x-4">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  to={item.href}
                  aria-current={item.current ? 'page' : undefined}
                  className={classNames(
                    item.current ? 'bg-amber-900 text-white font-sans' : 'text-red-300 hover:bg-amber-700 hover:text-white',
                    'rounded-md px-3 py-2 text-sm font-medium font-sans',
                  )}
                >
                  {item.name}
                </Link>
              ))}
            </div>
          </div>
          {/* Mobile menu button moved to the right */}
          <div className="absolute inset-y-0 right-0 flex items-center sm:hidden">
            <DisclosureButton className="group relative inline-flex items-center justify-center rounded-md p-2 text-white hover:bg-amber-700 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
              <span className="sr-only">Open main menu</span>
              <Bars3Icon className="block h-6 w-6 group-data-[open]:hidden" aria-hidden="true" />
              <XMarkIcon className="hidden h-6 w-6 group-data-[open]:block" aria-hidden="true" />
            </DisclosureButton>
          </div>
        </div>
      </div>

      <DisclosurePanel className="sm:hidden">
        <div className="space-y-1 px-2 pb-3 pt-2">
          {navigation.map((item) => (
            <DisclosureButton
              key={item.name}
              as={Link}
              to={item.href}
              className={classNames(
                item.current ? 'bg-amber-900 text-white' : 'text-red-300 hover:bg-amber-700 hover:text-white',
                'block rounded-md px-3 py-2 text-base font-medium',
              )}
            >
              {item.name}
            </DisclosureButton>
          ))}
        </div>
      </DisclosurePanel>
    </Disclosure>
  );
}