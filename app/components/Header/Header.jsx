import React from 'react';
import * as NavigationMenu from '@radix-ui/react-navigation-menu';
import classNames from 'classnames';
// import { CaretDownIcon } from '@radix-ui/react-icons';
import './styles.css';
import Image from 'next/image';
import { SITEWEB_URL } from './../../fcts/helper';
import { CaretDownFilled, GlobalOutlined } from '@ant-design/icons';
import { Divider } from 'antd';
import { Facebook, Globe2Icon, MailCheckIcon, PhoneCall, TwitterIcon, X } from 'lucide-react';
import * as Select from '@radix-ui/react-select';
import {greatvibes,inter,lora,pignon} from "./../../style/fonts"


import { CheckIcon, ChevronDownIcon, ChevronUpIcon } from '@radix-ui/react-icons';

const Header = () => {
  return (
    <div className=''>
      <div className='border-b border-slate-400 mb-4 flex justify-between py-3'>
        <div className='flex gap-3 items-center justify-center pr-3'>
          <GlobalOutlined className='text-white' />
          <div className=' border-r-1 border-slate-400'>
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
                  <span className={pignon.style}>Régie des Voies Aèriennes</span>
        </div>
        <div className='flex'>
          <div className='text-sm text-white flex gap-2 border-r px-3 items-center justify-center'>
            <PhoneCall size={16} fill='white' color='white' />
            +243 99 236 6766
          </div>
          <div className='text-sm text-white flex gap-2 border-r-0 px-3 items-center justify-center'>
            <MailCheckIcon size={16}  color='white' />
            info@rva.cd
          </div>
        </div>
      </div>
      {/* <Divider className='border-gray-400' /> */}
      <div className='flex justify-between border-b-0 border-slate-400'>
        <div>
          <Image src={SITEWEB_URL + "logoRva.png"} width={260} height={230} className='border-r-0' />
        </div>
        <NavigationMenu.Root className="NavigationMenuRoot">
          <NavigationMenu.List className="NavigationMenuList">
          <NavigationMenu.Item>
              <NavigationMenu.Link className="NavigationMenuLink" href="https://github.com/radix-ui">
                A Propos
              </NavigationMenu.Link>
            </NavigationMenu.Item>
            <NavigationMenu.Item>
              <NavigationMenu.Trigger className="NavigationMenuTrigger">
                Aeroports
                {/* <CaretDownFilled /> */}
                {/* <CaretDownIcon className="CaretDown" aria-hidden /> */}
              </NavigationMenu.Trigger>
              <NavigationMenu.Content className="NavigationMenuContent">
                <ul className="List one">
                  <li style={{ gridRow: 'span 3' }}>
                    <NavigationMenu.Link asChild>
                      <a className="Callout" href="/">
                        <svg aria-hidden width="38" height="38" viewBox="0 0 25 25" fill="white">
                          <path d="M12 25C7.58173 25 4 21.4183 4 17C4 12.5817 7.58173 9 12 9V25Z"></path>
                          <path d="M12 0H4V8H12V0Z"></path>
                          <path d="M17 8C19.2091 8 21 6.20914 21 4C21 1.79086 19.2091 0 17 0C14.7909 0 13 1.79086 13 4C13 6.20914 14.7909 8 17 8Z"></path>
                        </svg>
                        <div className="CalloutHeading">Radix Primitives</div>
                        <p className="CalloutText">Unstyled, accessible components for React.</p>
                      </a>
                    </NavigationMenu.Link>
                  </li>

                  <ListItem href="https://stitches.dev/" title="Stitches">
                    CSS-in-JS with best-in-class developer experience.
                  </ListItem>
                  <ListItem href="/colors" title="Colors">
                    Beautiful, thought-out palettes with auto dark mode.
                  </ListItem>
                  <ListItem href="https://icons.radix-ui.com/" title="Icons">
                    A crisp set of 15x15 icons, balanced and consistent.
                  </ListItem>
                </ul>
              </NavigationMenu.Content>
            </NavigationMenu.Item>
            <NavigationMenu.Item>
              <NavigationMenu.Link className="NavigationMenuLink" href="https://github.com/radix-ui">
                Actualités
              </NavigationMenu.Link>
            </NavigationMenu.Item>
            <NavigationMenu.Item>
              <NavigationMenu.Trigger className="NavigationMenuTrigger">
                Appel d'offres
                {/* <CaretDownIcon className="CaretDown" aria-hidden /> */}
              </NavigationMenu.Trigger>
              <NavigationMenu.Content className="NavigationMenuContent">
                <ul className="List two">
                  <ListItem title="Introduction" href="/primitives/docs/overview/introduction">
                    Build high-quality, accessible design systems and web apps.
                  </ListItem>
                  <ListItem title="Getting started" href="/primitives/docs/overview/getting-started">
                    A quick tutorial to get you up and running with Radix Primitives.
                  </ListItem>
                  <ListItem title="Styling" href="/primitives/docs/guides/styling">
                    Unstyled and compatible with any styling solution.
                  </ListItem>
                  <ListItem title="Animation" href="/primitives/docs/guides/animation">
                    Use CSS keyframes or any animation library of your choice.
                  </ListItem>
                  <ListItem title="Accessibility" href="/primitives/docs/overview/accessibility">
                    Tested in a range of browsers and assistive technologies.
                  </ListItem>
                  <ListItem title="Releases" href="/primitives/docs/overview/releases">
                    Radix Primitives releases and their changelogs.
                  </ListItem>
                </ul>
              </NavigationMenu.Content>
            </NavigationMenu.Item>

            <NavigationMenu.Item>
              <NavigationMenu.Link className="NavigationMenuLink" href="https://github.com/radix-ui">
                Services RVA
              </NavigationMenu.Link>
            </NavigationMenu.Item>
            <NavigationMenu.Item>
              <NavigationMenu.Link className="NavigationMenuLink" href="https://github.com/radix-ui">
                Voyager
              </NavigationMenu.Link>
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