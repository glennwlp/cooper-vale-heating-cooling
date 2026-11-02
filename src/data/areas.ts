export interface Area {
  name: string; postcode: string; image: string; imageAlt: string; lead: string; stats: [string, string][];
  heading: string; intro: [string, string]; facts: [string, string][];
  homes: [string, string, string][]; jobs: [string, string, string][]; nearby: string[]; quote: string;
}
export const glen: Area = {
  name: 'Glen Waverley', postcode: '3150', image: 'brick', imageAlt: 'Modern brick home at dusk (sample imagery)',
  lead: "Local ducted and reverse cycle specialists, eight minutes up Springvale Road from our Mulgrave base. We'll explain the options properly — then our own team installs.",
  stats: [['8 min', 'From our Mulgrave base'], ['140+', 'Local installs [sample]'], ['4.9★', 'Local reviews [sample]']],
  heading: 'Brick veneers, big blocks and cold back bedrooms.',
  intro: ["Glen Waverley's 1960s–80s brick veneer homes often have generous roof space — ideal for ducted — but older gas heating that leaves the bedrooms behind. Newer double-storey rebuilds bring a different challenge: hot upstairs rooms in summer.", "We've installed and serviced systems across Glen Waverley for years [sample], so we know the roof spaces, the council setbacks and where outdoor units sit best on the typical block."],
  facts: [['Postcode', '3150'], ['From Mulgrave', '8 min'], ['Common upgrade', 'Gas ducted → reverse cycle'], ['Typical system', 'Ducted, 4–6 zones'], ['Consults available', 'Mon–Sat']],
  homes: [['1970s brick veneer', 'Good roof space, usually on old gas ducted. Ducts can sometimes be reused.', 'Ducted reverse cycle'], ['Double-storey rebuild', 'Hot upstairs, cool downstairs. Needs separate zoning per level.', 'Ducted, multi-zone'], ['Townhouse & unit', 'Limited roof access and smaller rooms.', 'Split or multi-head']],
  jobs: [['cosy1', 'Ducted, 5 zones', 'Brick veneer near The Glen · Gas to reverse cycle [sample]'], ['thermo2', 'Smart zoning upgrade', 'Double-storey near Wesley College · 6 zones [sample]'], ['cosy5', 'Multi-head split', 'Townhouse off Springvale Rd · 3 indoor units [sample]']],
  nearby: ['Wheelers Hill', 'Mount Waverley', 'Mulgrave', 'Burwood East', 'Vermont South', 'Notting Hill'],
  quote: 'They checked the roof first, explained why the old ducts could stay, and saved us a fair bit.',
};
export const berwick: Area = {
  name: 'Berwick', postcode: '3806', image: 'house2', imageAlt: 'Family home exterior (sample imagery)',
  lead: 'Ducted and reverse cycle heating and cooling for Berwick homes — from heritage weatherboards near the village to new estates off Clyde Road.',
  stats: [['25 min', 'From our Mulgrave base'], ['90+', 'Local installs [sample]'], ['4.9★', 'Local reviews [sample]']],
  heading: 'Heritage weatherboards to brand-new estates.',
  intro: ['Berwick has a bit of everything: character weatherboards around the village, 1990s brick family homes, and large new builds in Berwick Waters and Clyde North. Each needs a different approach to heating and cooling.', "New estates often come with a builder-grade system that struggles on 40° days. Older homes are frequently still on gas ducted. We'll tell you honestly whether to upgrade, re-zone or replace."],
  facts: [['Postcode', '3806'], ['From Mulgrave', '25 min'], ['Common job', 'Builder-grade system upgrade'], ['Typical system', 'Ducted, 4–8 zones'], ['Consults available', 'Mon–Sat']],
  homes: [['Heritage weatherboard', 'Draughty and often under-insulated. Design and placement matter more than size.', 'Ducted or multi-head'], ['1990s brick family home', 'Usually on gas ducted with a dated controller.', 'Gas → reverse cycle'], ['New-estate double storey', 'Builder system often undersized for upstairs.', 'Upgrade & re-zone']],
  jobs: [['cosy2', 'Ducted, 6 zones', 'New build near Berwick Waters [sample]'], ['cosy4', 'Gas to reverse cycle', '1990s brick home off Clyde Rd [sample]'], ['tech2', 'Service plan', 'Weatherboard near Berwick Village [sample]']],
  nearby: ['Narre Warren', 'Beaconsfield', 'Officer', 'Clyde North', 'Harkaway', 'Narre Warren South'],
  quote: "Our builder's system couldn't cope upstairs. They re-zoned it and it's finally even.",
};
export const rowville: Area = {
  name: 'Rowville', postcode: '3178', image: 'fam2', imageAlt: 'Family relaxing at home (sample imagery)',
  lead: "Rowville's local ducted and reverse cycle team, ten minutes from our Mulgrave base. Honest options, our own installers, and a 7-year install warranty.",
  stats: [['10 min', 'From our Mulgrave base'], ['120+', 'Local installs [sample]'], ['4.9★', 'Local reviews [sample]']],
  heading: 'Family homes, foothill weather and big living areas.',
  intro: ['Most Rowville homes date from the 1980s and 90s — brick, single or double storey, with open-plan living areas that are hard to heat evenly with a single gas heater or wall unit.', 'Being closer to the Dandenongs, Rowville mornings run cold. Zoned ducted reverse cycle handles that well, and many families pair it with a split in the home office or rumpus room.'],
  facts: [['Postcode', '3178'], ['From Mulgrave', '10 min'], ['Common job', 'Ducted for open-plan homes'], ['Typical system', 'Ducted, 4–6 zones'], ['Consults available', 'Mon–Sat']],
  homes: [['1980s–90s brick, single storey', 'Big roof spaces and open-plan living. Straightforward ducted installs.', 'Ducted reverse cycle'], ['Double-storey family home', 'Upstairs bedrooms overheat; downstairs stays cool.', 'Multi-zone ducted'], ['Home office or rumpus', 'One room used all day, the rest of the house left off.', 'Split system']],
  jobs: [['cosy1', 'Ducted, 4 zones', 'Single storey near Stud Park [sample]'], ['cosy5', 'Split for home office', 'Double storey off Wellington Rd [sample]'], ['tech1', 'Annual service', 'Ducted system near Lysterfield Lake [sample]']],
  nearby: ['Lysterfield', 'Scoresby', 'Wantirna South', 'Ferntree Gully', 'Knoxfield', 'Mulgrave'],
  quote: "Same tech every year, on time, boots off at the door. Couldn't ask for more.",
};
