import React from 'react';
import * as NavigationMenu from '@radix-ui/react-navigation-menu';
import classNames from 'classnames';
// import { CaretDownIcon } from '@radix-ui/react-icons';
import './styles.css';
import Image from 'next/image';
import { SITEWEB_URL } from './../../fcts/helper';
import { CaretDownFilled, GlobalOutlined } from '@ant-design/icons';
import { Divider } from 'antd';
import { ChevronRightIcon, Facebook, Globe2Icon, MailCheckIcon, Navigation, PhoneCall, TwitterIcon, X } from 'lucide-react';
import * as Select from '@radix-ui/react-select';
import { greatvibes, inter, lora, pignon, nunito, poppins, michroma, sourceCodePro400, sourceCodePro700 } from "./../../style/fonts"


import { CheckIcon, ChevronDownIcon, ChevronUpIcon } from '@radix-ui/react-icons';
import Link from 'next/link';

const Header = () => {
  return (
    <div className="">
      <div className='border-b border-slate-400 mb-4 flex justify-between py-3'>
        <div className='flex gap-3 items-center justify-center pr-3'>
          <GlobalOutlined className='text-white' />
          <div className=' border-r-1 border-slate-400 bg-transparent'>
            <Select.Root>
              <Select.Trigger className="SelectTrigger" aria-label="Food">
                <Select.Value placeholder="Francais" />
                <Select.Icon className="SelectIcon">
                  <ChevronDownIcon />
                </Select.Icon>
              </Select.Trigger>
              <Select.Portal>
                <Select.Content className="SelectContent">
                  <Select.ScrollUpButton className="SelectScrollButton">
                    <ChevronUpIcon />
                  </Select.ScrollUpButton>
                  <Select.Viewport className="SelectViewport">
                    <Select.Group>
                      <Select.Label className="SelectLabel">Langue</Select.Label>
                      <SelectItem value="fr">Francais</SelectItem>
                      <SelectItem value="en">English</SelectItem>

                    </Select.Group>

                    {/* <Select.Separator className="SelectSeparator" />

                  <Select.Group>
                    <Select.Label className="SelectLabel">Vegetables</Select.Label>
                    <SelectItem value="aubergine">Aubergine</SelectItem>
                    <SelectItem value="broccoli">Broccoli</SelectItem>
                    <SelectItem value="carrot" disabled>
                      Carrot
                    </SelectItem>
                    <SelectItem value="courgette">Courgette</SelectItem>
                    <SelectItem value="leek">Leek</SelectItem>
                  </Select.Group>

                  <Select.Separator className="SelectSeparator" />

                  <Select.Group>
                    <Select.Label className="SelectLabel">Meat</Select.Label>
                    <SelectItem value="beef">Beef</SelectItem>
                    <SelectItem value="chicken">Chicken</SelectItem>
                    <SelectItem value="lamb">Lamb</SelectItem>
                    <SelectItem value="pork">Pork</SelectItem>
                  </Select.Group> */}
                  </Select.Viewport>
                  <Select.ScrollDownButton className="SelectScrollButton">
                    <ChevronDownIcon />
                  </Select.ScrollDownButton>
                </Select.Content>
              </Select.Portal>
            </Select.Root>
          </div>
          <div className='flex gap-2'>
            <Facebook size={16} fill='white' color='white' />
            <TwitterIcon size={16} fill='white' color='white' />
            {/* <TwitterIcon /> */}
          </div>
        </div>
        <div className='text-white text-3xl font-bold' >
          <span className={sourceCodePro700.className}>Régie des Voies Aèriennes</span>
        </div>
        <div className='flex'>
          <div className='text-sm text-white flex gap-2 border-r px-3 items-center justify-center'>
            <PhoneCall size={16} fill='white' color='white' />
            +243 99 236 6766
          </div>
          <div className='text-sm text-white flex gap-2 border-r-0 px-3 items-center justify-center'>
            <MailCheckIcon size={16} color='white' />
            info@rva.cd
          </div>
        </div>
      </div>
      {/* <Divider className='border-gray-400' /> */}
      <div className='flex justify-between items-end border-b-0 border-slate-400'>
        <div>
          <Link href="/"><Image src={SITEWEB_URL + "logoRva.png"} width={260} height={230} className='border-r-0' /></Link>
        </div>
        <NavigationMenu.Root className="NavigationMenuRoot">
          <NavigationMenu.List className="NavigationMenuList">
            <NavigationMenu.Item>
              <NavigationMenu.Trigger className="NavigationMenuTrigger">
                A Propos
                {/* <CaretDownIcon className="CaretDown" aria-hidden /> */}
              </NavigationMenu.Trigger>
              <NavigationMenu.Content className="NavigationMenuContent">
                <ul className="List one">
                  <li style={{ gridRow: 'span 4' }}>
                    <NavigationMenu.Link asChild>
                      <a className="Callout" href="/">
                        <img src={"/logoRva.png"} className='w-[200px] ' />
                      </a>
                    </NavigationMenu.Link>
                  </li>
                  <ListItem href="/apropos" title="">
                    Qui sommes-nous ?
                  </ListItem>
                  <ListItem href="/mission" title="">
                    Mission de la RVA
                  </ListItem>
                  <ListItem href="/structure" title="">
                    Structure de la RVA
                  </ListItem>
                  <ListItem href="/contact" title="">
                    Contact
                  </ListItem>
                </ul>
              </NavigationMenu.Content>
            </NavigationMenu.Item>
            <NavigationMenu.Item>
              <NavigationMenu.Trigger className="NavigationMenuTrigger">
                Actualités
                {/* <CaretDownFilled /> */}
                {/* <CaretDownIcon className="CaretDown" aria-hidden /> */}
              </NavigationMenu.Trigger>
              <NavigationMenu.Content className="NavigationMenuContent">
                <ul className="List one" style={{gridRow:1}}>
                  <ListItem href="/actualites" title="">
                    <span className='flex gap-3'><ChevronRightIcon />Actualités</span>
                  </ListItem>
                  <ListItem href="/evenements" title="">
                    <span className='flex gap-3'><ChevronRightIcon />Evènements</span>
                  </ListItem>
                  <ListItem href="/projets" title="">
                    <span className='flex gap-3'><ChevronRightIcon />Nos projets</span>
                  </ListItem>
                  <ListItem href="/realisations" title="">
                    <span className='flex gap-3'><ChevronRightIcon />Nos réalisations</span>
                  </ListItem>
                </ul>
              </NavigationMenu.Content>
            </NavigationMenu.Item>
            <NavigationMenu.Item>
              <NavigationMenu.Trigger className="NavigationMenuTrigger">
                Aeroports
                {/* <CaretDownFilled /> */}
                {/* <CaretDownIcon className="CaretDown" aria-hidden /> */}
              </NavigationMenu.Trigger>
              <NavigationMenu.Content className="NavigationMenuContent">
                <ul className="List one">
                  <li style={{ gridRow: 'span 4' }}>
                    <NavigationMenu.Link asChild>
                        <img src='/fondtourcontrol.png' className='h-[200px] rounded-md' />
                    </NavigationMenu.Link>
                  </li>

                  <ListItem href="/aeroports/internationaux" title="Aéroports internationaux">
                    {/* 4 Aéroports internationaux */}
                  </ListItem>
                  <ListItem href="/aeroports/nationaux" title="Aéroports nationaux">
                    {/* Beautiful, thought-out palettes with auto dark mode. */}
                  </ListItem>
                  <ListItem href="/aeroports/aerodromes" title="Aérodromes">
                    {/* A crisp set of 15x15 icons, balanced and consistent. */}
                  </ListItem>
                  <ListItem href="/aeroports/tous" title="Aeroports par ordre alphabetique">
                    {/* A crisp set of 15x15 icons, balanced and consistent. */}
                  </ListItem>
                </ul>
              </NavigationMenu.Content>
            </NavigationMenu.Item>

            <NavigationMenu.Item>
              <NavigationMenu.Trigger className="NavigationMenuTrigger">
                Appel d'offres
                {/* <CaretDownIcon className="CaretDown" aria-hidden /> */}
              </NavigationMenu.Trigger>
              <NavigationMenu.Content className="NavigationMenuContent">
                <ul className="List two">
                  <ListItem title="Introduction" href="/primitives/docs/overview/introduction">
                    {/* Build high-quality, accessible design systems and web apps. */}
                  </ListItem>
                  <ListItem title="Getting started" href="/primitives/docs/overview/getting-started">
                    {/* A quick tutorial to get you up and running with Radix Primitives. */}
                  </ListItem>
                  <ListItem title="Styling" href="/primitives/docs/guides/styling">
                    {/* Unstyled and compatible with any styling solution. */}
                  </ListItem>
                  <ListItem title="Animation" href="/primitives/docs/guides/animation">
                    {/* Use CSS keyframes or any animation library of your choice. */}
                  </ListItem>
                  <ListItem title="Accessibility" href="/primitives/docs/overview/accessibility">
                    {/* Tested in a range of browsers and assistive technologies. */}
                  </ListItem>
                  <ListItem title="Releases" href="/primitives/docs/overview/releases">
                    {/* Radix Primitives releases and their changelogs. */}
                  </ListItem>
                </ul>
              </NavigationMenu.Content>
            </NavigationMenu.Item>

            <NavigationMenu.Item>
              <NavigationMenu.Trigger className="NavigationMenuTrigger">
                Services RVA
              </NavigationMenu.Trigger>
              <NavigationMenu.Content className="NavigationMenuContent">
                <ul className="List two">
                  <ListItem title="Introduction" href="/primitives/docs/overview/introduction">
                    {/* Build high-quality, accessible design systems and web apps. */}
                  </ListItem>
                  <ListItem title="Getting started" href="/primitives/docs/overview/getting-started">
                    {/* A quick tutorial to get you up and running with Radix Primitives. */}
                  </ListItem>
                  <ListItem title="Styling" href="/primitives/docs/guides/styling">
                    {/* Unstyled and compatible with any styling solution. */}
                  </ListItem>
                  <ListItem title="Animation" href="/primitives/docs/guides/animation">
                    {/* Use CSS keyframes or any animation library of your choice. */}
                  </ListItem>
                  <ListItem title="Accessibility" href="/primitives/docs/overview/accessibility">
                    {/* Tested in a range of browsers and assistive technologies. */}
                  </ListItem>
                  <ListItem title="Releases" href="/primitives/docs/overview/releases">
                    {/* Radix Primitives releases and their changelogs. */}
                  </ListItem>
                </ul>
              </NavigationMenu.Content>
            </NavigationMenu.Item>
            <NavigationMenu.Item>
            <NavigationMenu.Trigger className="NavigationMenuTrigger">
                Voyager
                {/* <CaretDownFilled /> */}
                {/* <CaretDownIcon className="CaretDown" aria-hidden /> */}
              </NavigationMenu.Trigger>
              <NavigationMenu.Content className="NavigationMenuContent">
                <ul className="List one">
                  <ListItem href="https://stitches.dev/" title="">
                    <span className='flex gap-3'><ChevronRightIcon />Actualités</span>
                  </ListItem>
                  <ListItem href="/colors" title="">
                    <span className='flex gap-3'><ChevronRightIcon />Evènements</span>
                  </ListItem>
                  <ListItem href="https://icons.radix-ui.com/" title="">
                    <span className='flex gap-3'><ChevronRightIcon />Nos projets</span>
                  </ListItem>
                  <ListItem href="https://icons.radix-ui.com/" title="">
                    <span className='flex gap-3'><ChevronRightIcon />Nos réalisations</span>
                  </ListItem>
                </ul>
              </NavigationMenu.Content>
            </NavigationMenu.Item>

            <NavigationMenu.Indicator className="NavigationMenuIndicator">
              <div className="Arrow" />
            </NavigationMenu.Indicator>
          </NavigationMenu.List>

          <div className="ViewportPosition">
            <NavigationMenu.Viewport className="NavigationMenuViewport" />
          </div>
        </NavigationMenu.Root>
        <div className='w-[200px]'>
          &nbsp;
        </div>
      </div>
    </div>
  );
};

const ListItem = React.forwardRef(({ className, children, title, ...props }, forwardedRef) => (
  <li>
    <NavigationMenu.Link asChild>
      <a className={classNames('ListItemLink', className)} {...props} ref={forwardedRef}>
        <div className="ListItemHeading">{title}</div>
        <p className="ListItemText">{children}</p>
      </a>
    </NavigationMenu.Link>
  </li>
));
const SelectItem = React.forwardRef(({ children, className, ...props }, forwardedRef) => {
  return (
    <Select.Item className={classNames('SelectItem', className)} {...props} ref={forwardedRef}>
      <Select.ItemText>{children}</Select.ItemText>
      <Select.ItemIndicator className="SelectItemIndicator">
        <CheckIcon />
      </Select.ItemIndicator>
    </Select.Item>
  );
});

export default Header;