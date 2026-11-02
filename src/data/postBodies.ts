export interface Section { id: string; h: string; p: string[]; list?: string[] }
export interface Body { author: [string, string, string]; intro: string; sections: Section[]; quote: [string, string]; tip: [string, string]; bio: string }

const priya: [string, string, string] = ['Priya Vale', 'PV', 'Co-founder & system designer [sample]'];
const sam: [string, string, string] = ['Sam Cooper', 'SC', 'Co-founder & lead installer [sample]'];
const dan: [string, string, string] = ['Dan Huynh', 'DH', 'Senior technician [sample]'];
const bios: Record<string, string> = {
  PV: 'Priya co-founded Cooper & Vale and leads system design. She has spent 15+ years designing heating and cooling for Melbourne homes [sample].',
  SC: 'Sam co-founded Cooper & Vale after more than a decade as a refrigeration mechanic. He still runs installs most weeks [sample].',
  DH: 'Dan leads our service team and has looked inside more roof spaces across the south-east than he cares to count [sample].',
};

export const bodies: Record<string, Body> = {
  'gas-ducted-to-reverse-cycle': {
    author: sam, bio: bios.SC,
    intro: "A lot of homes in Glen Waverley, Mulgrave and Berwick still run the gas ducted heater that came with the house. It works, mostly. But when it starts making noises or the service tech says the heat exchanger is tired, the question comes up: replace it like for like, or switch to ducted reverse cycle?",
    sections: [
      { id: 'what-changes', h: 'What actually changes', p: [
        "A gas ducted heater burns gas in a furnace and pushes warm air through your ducts. A ducted reverse cycle system uses a heat pump instead: an outdoor unit moves heat from the outside air into the house in winter, and reverses the process in summer to cool it.",
        "Inside, the experience is similar. You still have ceiling or floor outlets, a return air grille and a wall controller. The big differences are that you get cooling as well as heating, and the system runs on electricity rather than gas.",
        "Reverse cycle air also feels a little different. Gas ducted tends to blast very hot air in short bursts. A well-sized heat pump delivers gentler, warm air for longer, which most people find more even once they're used to it.",
      ] },
      { id: 'bills', h: 'What happens to your bills', p: [
        "We can't give you a universal number, because running costs depend on your tariffs, how you use the system, the size of the home and how well it's insulated. What we can say is that a modern heat pump typically delivers several units of heat for each unit of electricity it uses, which is why so many households find their heating costs drop after switching.",
        "There's also the gas supply charge to think about. If heating is the main thing you use gas for, switching your hot water and cooktop over time can let you close the gas account entirely and stop paying that daily fee.",
        "During your consult we'll run the numbers using your actual bills, not an average, and put them in writing next to each option.",
      ] },
      { id: 'old-ducts', h: 'What happens to the old ducts', p: [
        "This is the question we get most. Sometimes the existing ductwork can be reused, which keeps the cost and the mess down. Often it can't, or shouldn't be. Older ducts were sized for gas heating, which pushes less air at higher temperatures. Reverse cycle needs more airflow, so undersized ducts can make a new system noisy and less effective.",
        "Floor outlets are another factor. They're fine for heating but poor for cooling, because cool air sinks. If you want good summer comfort, we'll usually recommend moving to ceiling outlets.",
        "We'll get in the roof, check the duct condition, sizes and layout, and tell you plainly which parts are worth keeping.",
      ], list: ['Ducts in good condition and sized correctly: often reusable', 'Damaged, crushed or uninsulated ducts: replace', 'Floor outlets: workable for heating, but ceiling outlets cool far better'] },
      { id: 'when-to-wait', h: 'When it makes sense to wait', p: [
        "If your gas heater is only a few years old and running well, there's usually no rush. Get it serviced, keep an eye on it, and plan the switch for when it's due. Upgrading in a calm spring or autumn is far less stressful than replacing a failed heater in the middle of July.",
        "It also pays to check what discounts may apply when you replace gas heating with an efficient heat pump. Programs and eligibility change, so we check the current rules for your situation rather than assuming.",
        "If your heater is old, has failed a safety check, or you're already planning to add cooling, switching now usually makes the most sense. You get heating and cooling from one system, one controller and one service visit a year.",
      ] },
    ],
    quote: ["The best time to plan a switch is before the old heater gives up, not the week after.", 'Sam Cooper'],
    tip: ['Thinking about switching?', "We'll check your ducts and compare the costs of both options, in writing."],
  },
  'how-many-zones-ducted-system': {
    author: priya, bio: bios.PV,
    intro: "When people ask for a quote on ducted reverse cycle, one of the first questions is how many zones they need. The honest answer is that it depends on how you live in the house, not just how many rooms it has. More zones isn't automatically better.",
    sections: [
      { id: 'what-is-a-zone', h: 'What a zone actually is', p: [
        "A zone is a group of outlets controlled together by a motorised damper in the ductwork. When you turn a zone off, the damper closes and that air goes elsewhere. Most systems let you control zones from the wall controller or an app.",
        "A zone might be a single room, like a home office, or a group of rooms used at the same time, like all the bedrooms upstairs. The point is to only condition the parts of the house you're actually using.",
      ] },
      { id: 'too-many', h: 'Why more zones can be worse', p: [
        "Every ducted system has a minimum amount of air it needs to move. If you split the home into lots of small zones and only open one, the system may have nowhere to push that air. It then has to bleed air through a spill duct, run inefficiently, or get noisy in the one room that's open.",
        "Extra zones also add cost: more dampers, more wiring and a more complex controller. If you never actually use them separately, you've paid for flexibility you don't need.", "Too few zones has its own downside, of course. If the whole house is one zone, you'll heat empty bedrooms all evening and cool an empty living room overnight. The aim is a sensible middle ground that matches how the household actually moves through the day.",
      ] },
      { id: 'how-we-decide', h: 'How we decide, room by room', p: [
        "During a consult we walk through the house and ask how each room is used, and when. A family home might be used very differently at 7am, 3pm and 10pm. We group rooms that tend to be occupied together and keep separate anything that's used on its own schedule.",
        "We also look at orientation. A west-facing living room in Rowville will need cooling at times when the south-facing bedrooms don't, so it's often worth its own zone.", "We also think about how the household might change. A nursery that becomes a teenager's room, or a spare room that becomes a home office, can change how a zone is used. A good design leaves a little room for that without adding zones you'll never switch.",
      ], list: ['Living areas: usually one or two zones', 'Bedrooms: grouped by level or wing', 'Home office or studio: its own zone if used all day', 'Upstairs and downstairs: always separate in a double storey'] },
      { id: 'typical', h: 'What most homes end up with', p: [
        "For a typical single-storey family home in the south-east, four to five zones is common. Double storeys often sit around five to six because each level behaves differently. Smaller units and townhouses might only need two or three, or may be better served by a multi-head split system instead.",
        "Some systems also support individual room sensors, so each zone can be held at its own temperature rather than just switched on or off. That can be worthwhile in larger homes, and we'll tell you if we think it's worth the extra cost.",
        "Whatever we recommend, you'll see the zone plan on paper with the outlets marked, so you know exactly what you're getting before anything is installed.", "If you already have ducted and the zoning doesn't suit you, it can often be reworked. Adding or regrouping dampers and upgrading the controller is usually far less disruptive than replacing the whole system.",
      ] },
    ],
    quote: ["Zone the house for how you live in it, not for the floor plan.", 'Priya Vale'],
    tip: ['Want a zone plan for your home?', "We'll map it out room by room at a free consult."],
  },
  'victorian-energy-upgrades-heating': {
    author: priya, bio: bios.PV,
    intro: "If you're replacing gas heating with an efficient reverse cycle system, you may be eligible for a discount through the Victorian Energy Upgrades (VEU) program. This is a plain-English overview of how it generally works. Program rules change, so always check current details on the official Victorian Government website before you rely on them. [sample guide]",
    sections: [
      { id: 'what-is-veu', h: 'What the program is', p: [
        "Victorian Energy Upgrades is a state government program that encourages households and businesses to install more energy-efficient products. Accredited providers can offer discounts on eligible upgrades, and the discount is usually taken off the price you pay rather than claimed back later.",
        "For heating, the program has typically covered replacing older gas or electric heaters with high-efficiency reverse cycle systems. Which products qualify, and the size of any discount, depends on the rules in force at the time and the specific system installed.",
      ] },
      { id: 'how-it-works', h: 'How it usually works in practice', p: [
        "In general terms, an accredited provider assesses your home, confirms the existing heater and the new system are eligible, and applies the discount to your quote. Some upgrades require the old heater to be decommissioned and removed as part of the job.", "Timing can matter too. Discounts are generally tied to the installation itself, so it's worth confirming the details before work starts rather than afterwards. If you're comparing quotes, check that each one is clear about whether a discount has been included and what conditions apply to it.", "It's also worth thinking about the rest of the house at the same time. If you're removing gas heating, you may want to plan ahead for hot water and cooking too, so you can eventually close the gas account. We're happy to talk through what a staged plan might look like.",
        "You'll normally need to sign some paperwork confirming the upgrade took place. Keep a copy of everything, including your quote, invoice and any certificates provided.",
      ], list: ['Check the current eligibility rules on the official VEU website', 'Confirm the provider is accredited for the upgrade you want', 'Make sure the discount is shown clearly on your written quote', 'Keep copies of all paperwork'] },
      { id: 'watch-out', h: 'Things to watch out for', p: [
        "Be cautious of anyone who leads with the discount rather than with the right system for your home. A cheap system that's poorly sized or badly installed will cost you more in the long run, regardless of the upfront saving.",
        "Also be wary of unsolicited calls or door-knocks promising free upgrades. Legitimate providers will happily give you time to check their accreditation and compare quotes.", "Finally, remember that eligibility for a discount says nothing about whether a system suits your home. Check that the quote covers sizing, zoning, outlet placement and removal of the old heater, and ask what warranty applies to both the product and the installation.",
      ] },
      { id: 'how-we-handle', h: 'How we handle it', p: [
        "At Cooper & Vale [sample], we design the system first and then check what discounts might apply. If an upgrade is likely to be eligible, we'll explain the current rules and show any discount as a separate line on your written options, so you can see the real price either way.",
        "If you're not sure whether your existing heater qualifies, mention it when you book. We can check the model during the consult and let you know where you stand.",
      ] },
    ],
    quote: ['Choose the right system first. A discount is a bonus, not a reason.', 'Priya Vale'],
    tip: ['Replacing gas heating?', "We'll check what may apply and show it clearly on your quote."],
  },
  'why-back-bedroom-always-cold': {
    author: dan, bio: bios.DH,
    intro: "Almost every house has one: the back bedroom that never quite warms up, even when the living room is toasty. It's one of the most common complaints we hear on service visits around Glen Waverley, Rowville and Berwick, and there's usually a fixable reason behind it.",
    sections: [
      { id: 'duct-runs', h: 'Long or damaged duct runs', p: [
        "The rooms furthest from the indoor unit get their air last, through the longest ducts. Every metre of duct and every bend loses a little air pressure and a little heat. If the run is long, undersized or poorly insulated, the air arriving at that back bedroom can be noticeably weaker and cooler.",
        "Ducts can also get crushed, kinked or disconnected over time, especially if tradespeople or pests have been through the roof. A disconnected duct is effectively heating your roof space instead of your room.",
      ] },
      { id: 'return-air', h: 'Return air problems', p: [
        "A ducted system needs to pull air back to the unit, usually through a single return air grille in a hallway. If the bedroom door is closed and there's no gap under it, air can't easily flow out of the room, so less warm air can flow in.",
        "Sometimes the fix is as simple as a slightly larger door gap or a transfer grille. In other cases, a second return air path makes a big difference.", "Filters matter here too. A clogged return air filter restricts the whole system, and the rooms at the end of the longest runs are the first to suffer. If your filter hasn't been cleaned in a while, it's worth checking before anything else.",
      ] },
      { id: 'insulation', h: 'Insulation and the room itself', p: [
        "Back bedrooms are often on the south side, have more external walls, or sit over a draughty subfloor. Gaps around windows and doors, missing ceiling insulation or an uninsulated wall can let heat escape faster than the system can replace it.",
        "We'll often pop our heads into the ceiling above the room. It's surprisingly common to find insulation batts that have been moved aside and never put back.", "Rooms with large windows lose a lot of heat on winter nights. Heavy curtains with a pelmet, or better glazing in the long run, can make the room feel noticeably warmer without touching the heating system at all. Draught-proofing around doors and old wall vents is another cheap improvement.", "Outlet position plays a part as well. An outlet above the door, or one that blows straight at a window, may not mix warm air through the room effectively. Sometimes moving an outlet, or swapping it for a different diffuser, is enough.",
      ] },
      { id: 'fixes', h: 'The usual fixes', p: [
        "The good news is that most cold-room problems don't need a whole new system. On a service visit we check airflow at each outlet, inspect the duct runs and look at how the zones are set up.",
      ], list: ['Repair or replace crushed and disconnected ducts', 'Upsize the duct to the problem room', 'Rebalance the system so distant rooms get their share', 'Improve return air with door gaps or transfer grilles', 'Fix insulation gaps above the room', 'Put the room on its own zone, or add a small split system'] },
      { id: 'when-to-call', h: 'When to call us', p: [
        "If one room has always been cold, it's likely a design or duct issue. If it's a newer problem, something has probably changed, like a disconnected duct or a blocked filter. Either way, it's worth getting it looked at before winter rather than living with it.",
      ] },
    ],
    quote: ["Most cold rooms aren't a bad system. They're a duct, a gap or a door.", 'Dan Huynh'],
    tip: ['Got a room that never warms up?', "Book a service and we'll find out why."],
  },
  'how-often-service-ducted-system': {
    author: dan, bio: bios.DH,
    intro: "A ducted system is one of the most expensive appliances in your home, and it runs hard through Melbourne's winters and the occasional 40-degree day. Regular servicing keeps it efficient, quiet and reliable. Here's a simple schedule for most households, and what a proper service should include.",
    sections: [
      { id: 'schedule', h: 'A simple schedule', p: [
        "For most homes, we recommend a professional service once a year. If you run the system heavily, have pets, or live near a busy road or building site, twice a year may be worth it. Many people like to book in autumn, before the heating season starts.", "Spring is the other popular time, so the system is ready for the first hot spell. Booking early in either season usually means more choice of appointment times, before the rush that comes with the first cold snap or heatwave.",
        "Between services, there are a few things you can do yourself.",
      ], list: ['Clean or check the return air filter every one to three months', 'Keep the outdoor unit clear of leaves, plants and stored items', 'Listen for new noises and note any error codes', 'Make sure supply outlets and return grilles are not blocked by furniture'] },
      { id: 'what-included', h: 'What a good service includes', p: [
        "A quick filter clean isn't a full service. A proper ducted service should look at the whole system, from the outdoor unit to the outlets in every room.",
        "Our technicians work through a checklist and leave you with a written report, so you know what was done and whether anything needs attention.",
      ], list: ['Clean filters and check the return air path', 'Inspect the indoor coil, fan and drain', 'Clean the outdoor coil and check the fan', 'Check refrigerant pressures and electrical connections', 'Test the controller, zones and dampers', 'Check airflow at outlets and inspect visible ductwork'] },
      { id: 'why-it-matters', h: 'Why it matters', p: [
        "A system with dirty filters and coils has to work harder to move the same amount of heat. That means higher running costs, more wear on parts and less comfort. Small issues, like a blocked drain or a loose connection, are much cheaper to fix early than after they cause a breakdown.",
        "Regular servicing may also be a condition of your manufacturer's warranty, so check your warranty terms and keep your service records.", "There's a health and comfort angle too. Filters and coils collect dust, pet hair and pollen over time. Keeping them clean helps the air feel fresher and reduces the musty smell some systems give off when they first start up for the season.", "Finally, a service is a chance to ask questions. Our technicians are happy to show you how to use zoning and scheduling properly, which on its own can make the system more comfortable and cheaper to run.",
      ] },
      { id: 'plans', h: 'Maintenance plans', p: [
        "If you'd rather not think about it, a maintenance plan books your services automatically and usually includes priority booking. We offer several plans [sample] covering ducted and split systems, with the same technician returning where possible so they get to know your system.", "Whether you choose a plan or book as needed, the important thing is consistency. A system that's looked after every year will usually run better, and last longer, than one that's only seen when something goes wrong.",
      ] },
    ],
    quote: ['The cheapest repair is the one a service picks up early.', 'Dan Huynh'],
    tip: ['Due for a service?', 'Book a one-off visit or ask about our maintenance plans.'],
  },
  'split-system-sizing-bigger-isnt-better': {
    author: sam, bio: bios.SC,
    intro: "It seems logical: buy a bigger split system and the room will heat and cool faster. In practice, an oversized unit often costs more to buy, more to run and feels less comfortable. Here's how sizing really works, and why we spend time on it during every consult.",
    sections: [
      { id: 'short-cycling', h: 'What short-cycling means', p: [
        "A split system works best when it can run steadily at a moderate speed. An oversized unit hits the set temperature quickly, slows right down or switches off, then starts up again when the temperature drifts. This stop-start pattern is called short-cycling.",
        "Short-cycling wastes energy, puts more wear on the compressor and can make the room feel uneven. Modern inverter units handle this better than older models, but even an inverter has a minimum speed, and a unit that's far too big will still cycle on and off in mild weather. In summer, it also means the unit doesn't run long enough to pull moisture out of the air, so the room can feel cool but clammy.",
      ] },
      { id: 'how-sizing-works', h: 'How sizing actually works', p: [
        "Sizing isn't just about floor area. A proper assessment looks at how much heat the room gains or loses, which depends on far more than square metres.",
      ], list: ['Room size and ceiling height', 'Window size, orientation and shading', 'Insulation in the ceiling and walls', 'Whether the room opens onto other spaces', 'How many people use it and when', 'Local climate, including cold winter mornings'] },
      { id: 'examples', h: 'Some common examples', p: [
        "A west-facing living room with big windows can need a larger unit than a bigger, shaded room on the south side. An open-plan kitchen and family area might need a unit sized for the whole space, or two smaller units placed at either end.",
        "Bedrooms are the most commonly oversized rooms we see. A small, well-insulated bedroom rarely needs a large unit, and a correctly sized one will run quieter, which matters when you're trying to sleep.", "Undersizing is a problem too, of course. A unit that's too small will run flat out on the coldest mornings and hottest afternoons and still struggle to keep up. The goal is a unit that can comfortably handle the conditions your room actually sees, with a sensible margin, but no more.",
      ] },
      { id: 'placement', h: 'Placement matters too', p: [
        "Even a correctly sized unit won't perform well if it's in the wrong spot. We look at where the air will travel, avoid blowing directly onto beds or couches, and check the outdoor unit location for airflow, noise and neighbours.",
        "During a consult we measure the room, ask how it's used and give you a written recommendation with the size and placement explained, so you can compare quotes properly.", "When comparing quotes, ask each installer how they arrived at the size they recommend. If the answer is only based on floor area, or simply the biggest unit that fits the budget, it's worth getting a second opinion.", "Remember too that a split system is only one option. If you need several rooms done, a multi-head system or ducted reverse cycle may be the better long-term choice, and we'll lay those options out side by side.",
      ] },
    ],
    quote: ['The right size runs quieter, costs less and keeps the room more even.', 'Sam Cooper'],
    tip: ['Not sure what size you need?', "We'll measure up and explain it in writing."],
  },
};
