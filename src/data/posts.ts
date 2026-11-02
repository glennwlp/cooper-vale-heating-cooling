export const posts = [
  ['cosy4', 'Gas upgrades', 'Is it worth switching from gas ducted to reverse cycle?', 'What changes on your bills, what happens to the old ducts, and when it makes sense to wait.', '28 Sep 2026  ·  6 min read', 'gas-ducted-to-reverse-cycle'],
  ['thermo2', 'Ducted', 'How many zones does a ducted system actually need?', "More zones isn't always better. How we decide, room by room.", '14 Sep 2026  ·  5 min read', 'how-many-zones-ducted-system'],
  ['brick', 'Rebates', 'What Victorian Energy Upgrades means for your heating [sample]', 'A plain-English guide to VEU discounts when you replace gas heating.', '2 Sep 2026  ·  7 min read', 'victorian-energy-upgrades-heating'],
  ['cosy3', 'Comfort', 'Why your back bedroom is always cold', 'Duct runs, return air and insulation — the usual suspects, and the fixes.', '20 Aug 2026  ·  4 min read', 'why-back-bedroom-always-cold'],
  ['tech1', 'Maintenance', 'How often should you service a ducted system?', 'A simple schedule for Melbourne households, and what a good service includes.', '6 Aug 2026  ·  4 min read', 'how-often-service-ducted-system'],
  ['cosy5', 'Split systems', "Split system sizing: why bigger isn't better", "Oversized units short-cycle, cost more and feel worse. Here's how sizing works.", '23 Jul 2026  ·  5 min read', 'split-system-sizing-bigger-isnt-better'],
] as const;
export const featured = ['cosy1', 'Comparisons', 'Ducted vs split systems: which suits a Melbourne home?', 'The honest trade-offs in cost, comfort and looks — and the three questions we ask before recommending either.', '12 Oct 2026  ·  8 min read', 'ducted-vs-split-systems-melbourne'] as const;
export const postHref = (p: readonly string[]) => `/blog/${p[5]}/`;
