# NJ Transit Redesign — UX Design Annotations

## Case Study Overview

This document is a UX/UI annotation guide for the NJ Transit mobile app redesign, developed as a portfolio case study. The project reimagines the NJ Transit rider experience as a modern, mobile-first application with a focus on clarity, speed of use, and emotional confidence for daily commuters. The app is built across five core screens — Home, Trip Planner, Tickets, Live Map, and Account — each applying a deliberate set of UX design principles. This document maps those principles to specific design decisions throughout the app, intended to demonstrate informed, principle-driven design thinking.

The redesign prioritizes three core rider needs: knowing when their train is coming, buying and showing a ticket quickly, and staying informed when things change.

---

## Home Screen (`index.html`)

### Affordance
**What it is:** Affordance describes the perceived possibility of an action — elements that visually communicate how they should be used.

**Where applied:** The search bar prominently occupies the top of the scrollable content area with a magnifying glass icon and placeholder text "From station…". Its inset shadow, pill shape, and familiar input treatment tell the user immediately it is tappable and enterable. The notification bell button has a circular background that expands slightly on press (`:active` state), signaling it is a pressable button. The saved route rows feature a subtle right-aligned arrow treatment, communicating that they are navigable links, not static labels.

---

### Progressive Disclosure
**What it is:** Progressive disclosure is the practice of showing only essential information upfront and revealing complexity incrementally when the user requests it.

**Where applied:** The notification bell shows a gold dot indicator to signal new alerts, but the notification content itself is hidden. Only when the user taps the bell does a panel slide into view with the full alert details — delays, on-time confirmations, and service advisories. This prevents the home screen from being cluttered with alert text that may not be relevant at a given moment. The "Next train" hero card similarly shows only the essentials (time, route, countdown), with a progress bar suggesting motion, not a wall of data.

---

### Hick's Law
**What it is:** Hick's Law states that the time to make a decision increases with the number and complexity of choices available.

**Where applied:** The home screen limits the user's primary decision to a single action: check the next train or tap a saved route. There are only three saved routes visible, representing the user's most-used journeys. By curating rather than listing every possible route, the app reduces decision fatigue. The "Next train" card pre-selects the most relevant train so the user doesn't need to make any choice at all to get the most critical piece of information.

---

### Fitts's Law
**What it is:** Fitts's Law states that the time to reach a target is a function of its size and distance from the starting point. Larger targets that are closer to the thumb are easier to tap.

**Where applied:** The five bottom navigation tabs are sized at a minimum of 44px wide and sit at the very bottom of the screen — exactly where the thumb rests in one-handed mobile use. The notification bell button is 38×38px, well above the 44×44px minimum tap target guideline, and sits in the upper-right corner where the thumb can reach in a two-handed hold. The "Next train" hero card's entire body is a pressable zone, not just a small button — a large target for a high-priority action.

---

### Common Region
**What it is:** The common region principle states that elements enclosed within the same visual boundary are perceived as belonging together.

**Where applied:** Each saved route is enclosed in a card (`route-row`) with a subtle border and background, visually grouping the origin, destination, line badge, and travel time as a single meaningful unit. The "Next train" hero card has a distinct frosted glass surface that groups the countdown, departure time, route name, and train metadata as a single glanceable block. The service advisory banner uses a distinct yellow-tinted background to signal it is a separate category of information — contextual alerts rather than personal routes.

---

### Feedback
**What it is:** Feedback is the system's way of communicating its current state back to the user, reducing uncertainty.

**Where applied:** The notification bell's gold dot provides passive feedback that new information is available without interrupting the user. Once tapped, the dot disappears — confirming the user has acknowledged the alerts. The "In X min" countdown badge dynamically updates using a real-time JS interval, providing ongoing feedback about train proximity. The progress bar inside the hero card visually represents how far through the journey the train has progressed.

---

### Aesthetic-Usability Effect
**What it is:** The aesthetic-usability effect describes the tendency for users to perceive visually polished interfaces as easier to use, even before interacting with them.

**Where applied:** The home screen uses the full brand color system — dark green gradient header, gold accents, cream background — paired with Barlow Condensed for display headings and DM Sans for body text. The frosted glass hero card, smooth entrance animation (`appIn`), and subtle card shadows communicate a quality product. The branded logo area (with a styled fallback when the asset isn't present) ensures the brand is always present, building trust on first load.

---

### Recognition over Recall
**What it is:** Recognition over recall means showing users information they need rather than forcing them to remember it from a previous session.

**Where applied:** Saved routes on the home screen display the full origin, destination, line name, and travel time directly — the user never has to remember their route details or re-enter them. The time-sensitive greeting ("Good morning, Alex") combined with a live clock reassures the user they're looking at current information, not a cached state.

---

### Investment / Endowment Effect
**What it is:** The endowment effect describes how people assign greater value to things they have invested in. In UX, systems that remember a user's preferences and history feel more personalized and increase retention.

**Where applied:** The personalized greeting ("Good morning, Alex") and pre-populated saved routes signal that the app knows who the user is. Saved routes persist across sessions, so the longer a user interacts with the app the more useful the home screen becomes to them specifically. This investment makes the user feel the app belongs to them, not to a generic commuter.

---

### Reward / Variable Reward
**What it is:** Reward principles draw from behavioral psychology — positive feedback reinforces behavior. Variable reward (sometimes positive, sometimes neutral) maintains engagement.

**Where applied:** Opening the notification panel and discovering that your train is on time is a small positive reward — relief and reassurance. The panel provides variable content: sometimes there are delays (negative signal that prepares the user), sometimes confirmations (positive signal). This variability keeps the notification bell worth checking regularly.

---

## Trip Planner (`trip.html`)

### Affordance
**What it is:** Elements should visually communicate their interactive nature.

**Where applied:** The swap button (⇅) between the origin and destination fields is styled as a circular icon button with a distinct background, clearly affording a press-and-toggle interaction. The filter chips along the top of results have a pill shape and active/inactive states that communicate they are toggleable filters, not static labels. Each train result card has a chevron icon (›) that rotates on expansion, making the expand/collapse mechanic immediately apparent.

---

### Progressive Disclosure
**What it is:** Show essential information first; reveal detail on demand.

**Where applied:** Train result cards display only the essential details at rest: line, departure/arrival times, duration, and on-time status. The full stop-by-stop breakdown, track number, train number, and purchase button are hidden inside the expandable body. Tapping a card expands it to reveal this additional context. This is progressive disclosure: the user chooses when they want more detail, and the interface doesn't impose it prematurely. The "Recommended" banner at the top of the first card provides a pre-made decision so the user can act without expanding anything at all.

---

### Hick's Law
**What it is:** Reduce choices to reduce decision time.

**Where applied:** The "Recommended" banner on the first result short-circuits the decision entirely for the majority of users — they don't need to compare five trains if the best one is already flagged. The line filter tabs allow users to pre-narrow results by line, reducing visible options before evaluating them. This top-down filtering (from all lines to one) applies Hick's Law progressively: start with fewer relevant options, not all of them.

---

### Fitts's Law
**What it is:** Larger, closer targets are faster to acquire.

**Where applied:** The "Purchase Ticket" button inside expanded train cards is full-width, making it the easiest-to-tap element inside the expanded view. The swap button between origin and destination is centred between the two inputs, within easy thumb reach when both hands are near the phone. Filter chips are 36px tall — large enough to tap comfortably while scrolling.

---

### Common Region
**What it is:** Visual boundaries group related elements.

**Where applied:** Each trip result is enclosed in a rounded white card with a border, clearly grouping departure time, arrival time, duration, line badge, status chip, and stop count as a single trip option. The expanded state adds a visual separator (subtle background change) between the summary row and the detail panel, showing that these two regions contain different levels of information about the same trip.

---

### Feedback
**What it is:** The system communicates its state.

**Where applied:** On-time status chips (green "On Time", red "+8 min delayed") provide immediate visual feedback about train health without requiring the user to interpret raw data. When a filter chip is selected, it fills with the brand green — confirming the active filter state. When a card is expanded, the chevron rotates 180°, confirming the expanded state and affording a tap to collapse. The results count ("5 trains found" / "1 train found") updates live when a line filter is selected, giving immediate feedback on how the filter changed the results.

---

### Recognition over Recall
**What it is:** Surface information rather than making users remember it.

**Where applied:** The origin and destination inputs are pre-populated from the user's saved route, removing the need to retype common journeys. Each result card shows the line name alongside the badge abbreviation (e.g., "MCB" + "Montclair-Boonton"), so users don't need to memorize abbreviations. The stop count ("7 stops · Express") on each card gives context about the type of service without requiring the user to know the timetable.

---

### Aesthetic-Usability Effect
**What it is:** Polished visuals increase perceived usability.

**Where applied:** The green header with the origin/destination input group uses glassmorphic layering and a background pattern to feel premium. Trip result cards use subtle box shadows that lift them off the page, creating a tactile card metaphor. The animated expand/collapse transition (`max-height` with `cubic-bezier` easing) makes interactions feel smooth and intentional, not abrupt.

---

## Tickets (`tickets.html`)

### Affordance
**What it is:** Visual cues that communicate interactivity.

**Where applied:** Both ticket cards have `cursor:pointer` and respond visually to tap, communicating that they are interactive objects, not static displays. The "Activate" button on held tickets is styled as a solid green pill button, the strongest affordance signal in the component hierarchy — clearly the primary action available. The "Buy Ticket" button in the header uses the gold brand color with a plus icon, affording a purchase action distinct from the viewing context.

---

### Progressive Disclosure
**What it is:** Reveal complexity when the user needs it.

**Where applied:** This is the primary UX principle demonstrated by the ticket QR flow. Ticket cards show trip details and a status badge but keep the QR code hidden at rest. When a rider needs to show their ticket to a conductor, they tap the card — and only then does the large, full-screen QR code appear. This is progressive disclosure in its clearest form: the QR code is always available, but not displayed until it serves a purpose. The QR code at rest would be too small to scan anyway, so hiding it is both a UX and practical decision.

For held tickets, tapping first shows a confirmation sheet explaining the consequences of activation before revealing the QR. This two-step reveal prevents accidental activation and gives the user full information before they commit.

---

### Hick's Law
**What it is:** Reduce choices to speed up decisions.

**Where applied:** The "Quick Buy" section below the active tickets reduces re-purchase to a single tap — no line selection, no date/time input, no fare type selection. The three most-used routes are pre-configured, so the decision is not "how do I buy a ticket?" but simply "which of my usual routes do I want today?" This dramatically reduces the cognitive load of the purchase path for repeat commuters.

---

### Fitts's Law
**What it is:** Large, close targets are acquired faster.

**Where applied:** Each ticket card is full-width and roughly 200px tall — a very large tap target relative to the screen. The QR overlay "Done" button is full-width at 48px tall, the easiest element on the overlay to close. The "Activate & Show" button in the confirmation sheet is full-width on the bottom sheet, in the natural thumb zone for a phone held in one hand.

---

### Common Region
**What it is:** Visual containers group related content.

**Where applied:** Each ticket card uses a `border-radius`, shadow, and background to create a distinct visual container that groups all ticket information (line, route, times, QR, price) as a single unified object — a digital ticket. The torn-edge divider (`ticket-tear`) inside each card creates a sub-region that separates the journey information (top) from the logistics and QR code (bottom), mirroring the physical design language of a paper ticket.

---

### Feedback
**What it is:** The system communicates current state.

**Where applied:** The active/held ticket states provide clear system feedback about ticket validity. The green "● Active" badge on active tickets and the muted "◌ Held" badge on inactive tickets immediately communicate whether a ticket can be used. The reduced opacity (0.7) on the held ticket is a passive visual signal that it is in a different state — not broken, just not yet active. After activation, the card re-renders in its full-opacity active state, confirming the state change.

---

### Investment / Endowment Effect
**What it is:** People value things they've invested in.

**Where applied:** Purchased tickets are persisted to `localStorage` and appear on the Tickets page every time the user returns. The act of purchasing a ticket and seeing it in "My Wallet" creates a sense of ownership. The "Quick Buy" section, populated with the user's own saved routes, deepens this sense that the app belongs to them specifically, making return visits more rewarding.

---

### Reward / Variable Reward
**What it is:** Positive feedback reinforces behavior.

**Where applied:** The purchase flow in `purchase.html` ends with a shimmer animation and a success overlay before redirecting to the ticket wallet. This moment of confirmation — "your ticket is ready" — is a deliberate reward signal that closes the loop on the purchase action positively. Seeing the ticket appear in the wallet immediately afterward reinforces the behavior of buying in-app.

---

## Live Map (`map.html`)

### Affordance
**What it is:** Interactive elements signal their use.

**Where applied:** The line selector pills at the top use a clear active/inactive state (gold background vs. transparent), and the color dot on each pill connects visually to the route line color below — implying that tapping a pill will change what's shown in the route visualization. Station names that link to the station detail page (`station.html`) are styled with a slightly darker color on the "Next" stop to suggest they are tappable links. The "Tap a station name to view details" hint at the bottom of the route explicitly surfaces the interaction for first-time users.

---

### Progressive Disclosure
**What it is:** Show what matters now; reveal detail on demand.

**Where applied:** The map page defaults to showing the user's primary line (Montclair-Boonton, matching their home screen route) rather than asking them to choose. Each line's data is available but hidden until the user taps the corresponding pill. The status card and endpoints banner update dynamically on line selection, giving high-level context before the user scrolls into the detailed stop list.

---

### Feedback
**What it is:** The system communicates current state to the user.

**Where applied:** This is the most feedback-rich page in the app. Passed stops are grayed out (gray fill, gray connector line), the train's current position is shown as an animated pulsing dot with a real-time speed readout (42 mph), and the next stop is highlighted in the line's brand color with an "Arrives in ~4 min" label. The "On Time" chip in the status card provides the most critical piece of feedback — is the service running as expected? Switching lines immediately updates all of these elements, with the new route rendering to show the selected line's train position.

---

### Common Region
**What it is:** Grouping by visual containers.

**Where applied:** Passed stops, the train marker, and upcoming stops are visually distinguished by color treatment — but they all exist within the same `.route-track` vertical container, making them clearly part of the same journey narrative. The status bar card at the top groups train number and route description as a unified summary object separate from the detailed stop list. The endpoints banner groups origin and terminus as bookends to the route, spatially communicating the full journey scope.

---

### Hick's Law
**What it is:** Reduce choices to reduce decision time.

**Where applied:** The default state of the map page shows the single line most relevant to the user (their saved route). All other lines are available via the selector but don't compete for attention. The selector itself is horizontally scrollable and off-screen, so only 2-3 lines are visible at a time without scrolling — reducing the perceived number of choices when the user first opens the page.

---

### Fitts's Law
**What it is:** Larger, closer targets are acquired faster.

**Where applied:** Line selector pills are 38px tall with generous horizontal padding, making them easy to tap while scrolling horizontally. Station names in the route visualization are full-width tappable rows, not small text links — the entire row is a target for navigating to station details.

---

### Recognition over Recall
**What it is:** Show information; don't make users remember it.

**Where applied:** Each stop in the route displays its ETA or departure time directly in the list, so riders don't need to recall the timetable. The "Between X & Y" label on the train marker tells the user exactly where the train is right now in plain language, without requiring map literacy or an abstract map view.

---

### Aesthetic-Usability Effect
**What it is:** Visual polish makes interfaces feel easier to use.

**Where applied:** The route visualization uses the line's brand color for connectors and stop circles, creating a direct visual link between the map and the real-world line identity (e.g., Montclair-Boonton is gold, Northeast Corridor is red). The gradient transition between passed (gray) and upcoming (line color) sections creates a visual narrative of the journey's progress — time moving from left to right as the train moves down the screen. The pulsing train icon adds life to an otherwise static list, suggesting real-time data.

---

## Account (`account.html`)

### Affordance
**What it is:** Visual cues that communicate interaction.

**Where applied:** Toggle switches throughout the Notifications and Connected Apps sections use the standard iOS/Android toggle pattern — a rounded track with a sliding circle — which is universally recognized as a binary on/off control. Settings rows have right-aligned chevrons (›) to communicate that they navigate to a deeper screen. The "Sign Out" button at the bottom uses a red-tinted color to signal a destructive or significant action, distinct from all other controls on the page.

---

### Common Region
**What it is:** Visual containers group related elements.

**Where applied:** The account page is structured into clearly separated sections: Profile (avatar, name, stats), Payment Methods, Connected Apps, Notifications, Settings, and Sign Out. Each section is visually separated by whitespace and a section header (`section-title`), creating distinct regions of related settings. The stats strip under the profile groups rides, saved routes, and member-since date as a single summary unit.

---

### Hick's Law
**What it is:** Reduce the number of choices to speed decisions.

**Where applied:** Notification preferences are broken into a small set of binary toggles rather than a multi-option settings page. Each toggle represents a single, named type of notification, and the user can scan and set all of them in a single scroll without navigating to sub-pages. This reduces the decision overhead compared to a settings hierarchy.

---

### Feedback
**What it is:** The system communicates state back to the user.

**Where applied:** Toggle switches show their current state (on/off) at a glance — no action is required to know what settings are enabled. The payment card section shows the card type and masked number, confirming to the user what payment information is on file. The member stats strip (trips taken, routes saved) provides passive feedback that the user's activity is being tracked and valued.

---

### Investment / Endowment Effect
**What it is:** Users value systems they have invested in.

**Where applied:** The Account page surfaces the depth of a user's history with the app: total trips taken, saved routes count, and membership tenure ("Member since Jan 2024"). This creates a sense of sunk investment — the more the user has done in the app, the more it feels like "theirs." Displaying this information prominently makes switching to a competitor feel like giving something up.

---

### Recognition over Recall
**What it is:** Display information rather than requiring users to recall it.

**Where applied:** Saved payment methods are displayed with card type and last-4 digits, so the user can identify which card is on file without needing to remember the full number. Connected apps (Apple Health, Google Wallet) show their current connection status directly in the list. The user never needs to remember what they've configured — it's all surfaced in the interface.

---

### Aesthetic-Usability Effect
**What it is:** Polished design signals a high-quality, trustworthy product.

**Where applied:** The profile section uses a large avatar with a gold gradient background, the user's initials in the brand typeface (Barlow Condensed), and a stats strip with prominent numbers. This premium visual treatment of the user's identity reinforces that this is a personal, personalized product — not a generic utility. Consistent use of the brand color system, card shadows, and transition animations throughout the account page maintains the overall quality signal established on every other screen.

---

*Document prepared as part of the NJ Transit UX/UI Redesign portfolio case study.*
