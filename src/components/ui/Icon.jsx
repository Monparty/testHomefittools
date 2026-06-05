const Svg = ({ children, size = 24, stroke = 2, className = '' }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth={stroke}
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
  >
    {children}
  </svg>
)

const Icon = {
  dumbbell: (p) => (<Svg {...p}><path d="M6.5 6.5 17.5 17.5"/><path d="m21 21-1-1"/><path d="m3 3 1 1"/><path d="m18 22 4-4"/><path d="m2 6 4-4"/><path d="m3 10 7-7"/><path d="m14 21 7-7"/></Svg>),
  treadmill: (p) => (<Svg {...p}><path d="M3 18h18"/><path d="M5 18l1.5-9.5a2 2 0 0 1 2-1.7h2"/><circle cx="14" cy="5.5" r="1.6"/><path d="M11 7.5l3 1 2.2 2.2 2.8.8"/><path d="m12 9-1.5 4.5"/></Svg>),
  yoga: (p) => (<Svg {...p}><circle cx="12" cy="4.5" r="1.6"/><path d="M12 7v5"/><path d="m12 8-4 2"/><path d="m12 8 4 2"/><path d="m12 12-3 6"/><path d="m12 12 3 6"/></Svg>),
  boxing: (p) => (<Svg {...p}><path d="M8 11V7a3 3 0 0 1 3-3h2a3 3 0 0 1 3 3v3"/><path d="M16 9h1.5a2.5 2.5 0 0 1 0 5H16"/><path d="M6 10h10v5a4 4 0 0 1-4 4h-2a4 4 0 0 1-4-4v-3a2 2 0 0 1 2-2Z"/></Svg>),
  bike: (p) => (<Svg {...p}><circle cx="5.5" cy="17.5" r="3.5"/><circle cx="18.5" cy="17.5" r="3.5"/><path d="M15 6a1 1 0 1 0 0-2 1 1 0 0 0 0 2Z"/><path d="M12 17.5 8.5 9l3-2 3 3h3"/><path d="M5.5 17.5 9 9"/></Svg>),
  barbell: (p) => (<Svg {...p}><path d="M3 9v6"/><path d="M6 8v8"/><path d="M18 8v8"/><path d="M21 9v6"/><path d="M6 12h12"/></Svg>),
  band: (p) => (<Svg {...p}><path d="M4 7v10"/><path d="M20 7v10"/><path d="M4 9c5 4 11 4 16 0"/><path d="M4 15c5-4 11-4 16 0"/></Svg>),
  abs: (p) => (<Svg {...p}><rect x="4" y="4" width="16" height="16" rx="2"/><path d="M12 4v16"/><path d="M4 9h16"/><path d="M4 15h16"/></Svg>),
  supplement: (p) => (<Svg {...p}><path d="M10.5 3.5 3.5 10.5a5 5 0 0 0 7 7l7-7a5 5 0 0 0-7-7Z"/><path d="m7 7 10 10"/></Svg>),
  monitor: (p) => (<Svg {...p}><circle cx="12" cy="12" r="9"/><path d="M3.5 13h4l1.5-4 2 7 2-9 1.5 6h4"/></Svg>),
  search: (p) => (<Svg {...p}><circle cx="11" cy="11" r="7"/><path d="m21 21-4.3-4.3"/></Svg>),
  cart: (p) => (<Svg {...p}><circle cx="9" cy="20" r="1.4"/><circle cx="18" cy="20" r="1.4"/><path d="M2 3h2.2l2 12.4a1.6 1.6 0 0 0 1.6 1.4h9.6a1.6 1.6 0 0 0 1.6-1.3L21 7H5"/></Svg>),
  star: (p) => (<Svg {...p}><path d="m12 3 2.6 5.3 5.9.9-4.3 4.1 1 5.8L12 16.8 6.8 19.1l1-5.8L3.5 9.2l5.9-.9L12 3Z"/></Svg>),
  flame: (p) => (<Svg {...p}><path d="M12 3c0 3-3 4-3 7a3 3 0 0 0 6 0c0-1-.3-1.7-.7-2.3.9.5 1.7 1.5 2.2 2.6A6 6 0 1 1 6.4 13 8 8 0 0 1 12 3Z"/></Svg>),
  truck: (p) => (<Svg {...p}><path d="M2 6h11v9H2z"/><path d="M13 9h4l3 3v3h-7z"/><circle cx="6.5" cy="17.5" r="1.6"/><circle cx="17" cy="17.5" r="1.6"/></Svg>),
  shield: (p) => (<Svg {...p}><path d="M12 3 4 6v6c0 4.5 3.2 7.6 8 9 4.8-1.4 8-4.5 8-9V6Z"/><path d="m9 12 2 2 4-4"/></Svg>),
  tools: (p) => (<Svg {...p}><path d="M14.7 6.3a3.5 3.5 0 0 0 4.6 4.6l-7 7a2.1 2.1 0 0 1-3-3l7-7Z"/><path d="m6 16 2 2"/></Svg>),
  phone: (p) => (<Svg {...p}><path d="M5 3h3.5l1.5 4-2 1.5a12 12 0 0 0 5 5l1.5-2 4 1.5V21a2 2 0 0 1-2 2A17 17 0 0 1 3 5a2 2 0 0 1 2-2Z"/></Svg>),
  mail: (p) => (<Svg {...p}><rect x="3" y="5" width="18" height="14" rx="2"/><path d="m3 7 9 6 9-6"/></Svg>),
  pin: (p) => (<Svg {...p}><path d="M12 21s7-5.6 7-11a7 7 0 1 0-14 0c0 5.4 7 11 7 11Z"/><circle cx="12" cy="10" r="2.5"/></Svg>),
  chat: (p) => (<Svg {...p}><path d="M21 12a8 8 0 0 1-11.5 7.2L3 21l1.8-6.5A8 8 0 1 1 21 12Z"/></Svg>),
  clock: (p) => (<Svg {...p}><circle cx="12" cy="12" r="9"/><path d="M12 7v5l3 2"/></Svg>),
  chevron: (p) => (<Svg {...p}><path d="m6 9 6 6 6-6"/></Svg>),
  check: (p) => (<Svg {...p}><path d="M20 6 9 17l-5-5"/></Svg>),
  menu: (p) => (<Svg {...p}><path d="M4 6h16M4 12h16M4 18h16"/></Svg>),
  close: (p) => (<Svg {...p}><path d="M6 6l12 12M18 6 6 18"/></Svg>),
  seedling: (p) => (<Svg {...p}><path d="M12 20v-7"/><path d="M12 13c0-3-2.5-5-5.5-5C6 11 8.5 13 12 13Z"/><path d="M12 11c0-3 2.5-5 5.5-5C18 9 15.5 11 12 11Z"/></Svg>),
  trophy: (p) => (<Svg {...p}><path d="M7 4h10v4a5 5 0 0 1-10 0Z"/><path d="M7 5H4v1a3 3 0 0 0 3 3"/><path d="M17 5h3v1a3 3 0 0 1-3 3"/><path d="M10 13h4l-.5 4h-3z"/><path d="M8 20h8"/></Svg>),
  heart: (p) => (<Svg {...p}><path d="M12 20s-7-4.6-9-9a4.5 4.5 0 0 1 8-3 4.5 4.5 0 0 1 8 3c-2 4.4-7 9-7 9Z"/></Svg>),
}

export default Icon
