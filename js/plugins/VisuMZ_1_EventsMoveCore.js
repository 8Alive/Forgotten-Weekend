//=============================================================================
// VisuStella MZ - Events & Movement Core
// VisuMZ_1_EventsMoveCore.js
//=============================================================================

var Imported = Imported || {};
Imported.VisuMZ_1_EventsMoveCore = true;

var VisuMZ = VisuMZ || {};
VisuMZ.EventsMoveCore = VisuMZ.EventsMoveCore || {};
VisuMZ.EventsMoveCore.version = 1.26;

//=============================================================================
 /*:
 * @target MZ
 * @plugindesc [RPG Maker MZ] [Tier 1] [Version 1.26] [EventsMoveCore]
 * @author VisuStella
 * @url http://www.yanfly.moe/wiki/Events_and_Movement_Core_VisuStella_MZ
 * @orderAfter VisuMZ_0_CoreEngine
 *
 * @help
 * ============================================================================
 * Introduction
 * ============================================================================
 *
 * The Events & Movement Core plugin adds a lot of new functionality in terms
 * of event flexibility and movement options to RPG Maker MZ. These range from
 * adding in old capabilities from previous iterations of RPG Maker to more
 * mainstream techniques found in other game engines. Movement options are also
 * expanded to support 8-directional movement as well as sprite sheets provided
 * that the VisuStella 8 format is used.
 *
 * Features include all (but not limited to) the following:
 * 
 * * Event commands expanded upon to include old and new functions.
 * * Event templates for Copying Events, Morphing Events, and Spawning Events.
 * * 8-directional movement option available and sprite sheet support.
 * * Aesthetics for tilting the sprite when dashing and having shadows below.
 * * Pathfinding support for event movement through custom Move Route commands.
 * * Advanced switches and variable support to run code automatically.
 * * Turn regular Switches and Variables into Self Switches and Self Variables.
 * * Put labels and icons over events.
 * * Allow numerous ways to trigger events, through clicking, proximity, or by
 *   usage of Regions.
 * * Change the hitbox sizes of events to larger in any direction.
 * * Synchronize event movement options to move when player/other events move.
 * * The ability for the player to turn in place.
 *
 * ============================================================================
 * Requirements
 * ============================================================================
 *
 * This plugin is made for RPG Maker MZ. This will not work in other iterations
 * of RPG Maker.
 *
 * ------ Tier 1 ------
 *
 * This plugin is a Tier 1 plugin. Place it under other plugins of lower tier
 * value on your Plugin Manager list (ie: 0, 1, 2, 3, 4, 5). This is to ensure
 * that your plugins will have the best compatibility with the rest of the
 * VisuStella MZ library.
 *
 * ============================================================================
 * Features: Advanced Switches and Variables
 * ============================================================================
 *
 * Switches and variables can now run JavaScript code and return values
 * instantly. While at first glance, this may seem no different from using
 * the Control Variables event command's Script option, this can be used to
 * instantly set up Switch and/or Variable conditions for Parallel Common
 * Events, Event Page Conditions, Enemy Skill Conditions, and Troop Page
 * Conditions instantly without needing to make an event command to do so.
 *
 * ---
 *
 * <JS> code </JS>
 * - Used for: Switch and Variable names
 * - Replace 'code' with JavaScript code on what value to return.
 *
 * ---
 *
 * NOTE: Tagged Switches/Variables are mutually exclusive from one another.
 * You cannot tag them with <JS>, <Self>, or <Global> simultaneously.
 *
 * ============================================================================
 * Features: Self Switches and Variables
 * ============================================================================
 *
 * RPG Maker MZ by default has 4 Self Switches: A, B, C, D. For some types of
 * games, this isn't enough. This plugin gives you the ability convert regular
 * Switches into Self Switches so you could have more.
 *
 * Self Variables also do not exist in RPG Maker MZ by default. Just like with
 * Switches, you can turn regular Variables into Self Variables.
 *
 * ---
 *
 * <Self>
 * - Used for: Switch and Variable names
 * - Converts the Switch/Variable into a Self Switch/Variable.
 *
 * ---
 *
 * After, just use them like you would for normal Switches and Variables in an
 * event's page conditions. If the <Self> tag is present inside the Switch or
 * Variable's name, then it will use data unique to only that event.
 *
 * NOTE: Tagged Switches/Variables are mutually exclusive from one another.
 * You cannot tag them with <JS>, <Self>, or <Global> simultaneously.
 * 
 * ---
 * 
 * If you need to use a script call to get a Self Switch or Self Variable's
 * value, you can use the following script calls.
 * 
 *   ---
 * 
 *   Get Self Switch Values:
 * 
 *   getSelfSwitchValue(mapID, eventID, switchID)
 *   - Replace 'mapID' with the map ID the target event is located on.
 *   - Replace 'eventID' with the ID of the target event.
 *   - Replace 'switchID' with the ID number if it is a Self Switch made with
 *     <Self> or a capital letter surrounded by quotes if it's A, B, C, or D.
 *   - This will return the true/false value of the Self Switch.
 *   - Example: getSelfSwitchValue(12, 34, 56)
 *   - Example: getSelfSwitchValue(12, 34, 'B')
 * 
 *   ---
 * 
 *   Get Self Variable Values:
 * 
 *   getSelfVariableValue(mapID, eventID, variableID)
 *   - Replace 'mapID' with the map ID the target event is located on.
 *   - Replace 'eventID' with the ID of the target event.
 *   - Replace 'variableID' with the ID number of the Self Variable.
 *   - This will return whatever stored value is found in the Self Variable.
 *   - Example: getSelfVariableValue(12, 34, 56)
 * 
 *   ---
 * 
 *   Set Self Switch Values:
 * 
 *   setSelfSwitchValue(mapID, eventID, switchID, value)
 *   - Replace 'mapID' with the map ID the target event is located on.
 *   - Replace 'eventID' with the ID of the target event.
 *   - Replace 'switchID' with the ID number if it is a Self Switch made with
 *     <Self> or a capital letter surrounded by quotes if it's A, B, C, or D.
 *   - Replace 'value' with either 'true' or 'false' for ON/OFF respectively.
 *     Do not use quotes.
 *   - This will change the Self Switch's value to true/false.
 *     - Example: setSelfSwitchValue(12, 34, 56, false)
 *     - Example: setSelfSwitchValue(12, 34, 'B', true)
 * 
 *   ---
 * 
 *   Set Self Variable Values:
 * 
 *   setSelfVariableValue(mapID, eventID, variableID, value)
 *   - Replace 'mapID' with the map ID the target event is located on.
 *   - Replace 'eventID' with the ID of the target event.
 *   - Replace 'variableID' with the ID number of the Self Variable.
 *   - Replace 'value' with the value you want to set the Self Variable to.
 *   - Example: setSelfVariableValue(12, 34, 56, 88888)
 * 
 *   ---
 * 
 * ---
 *
 * ============================================================================
 * Features: VisuStella-Style 8-Directional Sprite Sheets
 * ============================================================================
 *
 * This plugin provides support for the VisuStella-Style 8-Directional Sprite
 * Sheets, also know as VS8. VS8 sprite sheets offer support for walking
 * frames, dashing frames, carrying frames, and emotes.
 *
 * ---
 *
 * To designate a sprite sheet as VS8, simply add [VS8] to the filename.
 * Something like Actor1.png would become Actor1_[VS8].png.
 *
 * ---
 *
 * VS8 sprites are formatted as such. Each block below is a set of 3 frames.
 *
 * Walk Down    Walk DL     Dash Down   Dash DL
 * Walk Left    Walk DR     Dash Left   Dash DR
 * Walk Right   Walk UL     Dash Right  Dash UL
 * Walk Up      Walk UR     Dash Up     Dash UR
 *
 * Carry Down   Carry DL    Ladder      Emotes 3
 * Carry Left   Carry DR    Rope        Emotes 4
 * Carry Right  Carry UL    Emotes 1    Emotes 5
 * Carry Up     Carry UR    Emotes 2    Emotes 6
 *
 * ---
 *
 * Here are how each of the emote sets are grouped from left to right.
 *
 * Emotes 1: Item, Hmph, Victory
 * Emotes 2: Hurt, Kneel, Collapse
 * Emotes 3: !, ?, Music Note
 * Emotes 4: Heart, Anger, Sweat
 * Emotes 5: Cobweb, ..., Light Bulb
 * Emotes 6: Sleep0, Sleep1, Sleep2
 *
 * ---
 *
 * ============================================================================
 * Features: Weighted Random Movement
 * ============================================================================
 * 
 * When creating events to place on the map, you can determine what type of
 * autonomous movement the event will have. When selecting "Random", the event
 * will move randomly across the map.
 * 
 * However, with the way "Random" movement works with the RPG Maker MZ default
 * code, the event is more likely to hit a wall and then hug the said wall as
 * it maps laps around the map's outer borders making it feel very unnatural
 * for any player who's been on the map long enough.
 * 
 * This is where "Weighted Random Movement" comes in. It changes up the random
 * movement behavior to function where the farther the event is, the more
 * likely the event is to step back towards its "home" position (aka where it
 * spawned upon loading the map). This is so that a housewife NPC doesn't
 * suddenly wander off into the middle of an army's training grounds on the
 * same town map.
 * 
 * The event will stay closer to its home value depending on how high the
 * weight's value is. There are a number of ways to adjust the weighted value.
 * 
 * ---
 * 
 * Plugin Parameters > Movement > Event Movement > Random Move Weight
 * 
 * This Plugin Parameter setting allows you to set the default weight for all
 * events with "Random" autonomous movement. It is set at a default value of
 * 0.10 to give the event an understandable degree of freedom.
 * 
 * Lower numbers give events more freedom to move. Larger numbers will make the
 * events stick closer to home.
 * 
 * Change this value to 0 to disable it.
 * 
 * ---
 * 
 * You can customize this individually per event by using Notetags and/or
 * Comment Tags for the events.
 * 
 * <Random Move Weight: x>
 * 
 * - Used for: Event Notetags and Event Page Comment Tags
 * - If this tag is used on an event with random-type autonomous movement, then
 *   the event will stick closer to their home location (where they are located
 *   upon spawning on the map). How close they stick to their home location
 *   will depend on the weighted 'x' value.
 * - Replace 'x' with a number between 0 and 1. Numbers closer to 0 give the
 *   event more freedom when moving randomly while numbers closer to 1 cause
 *   the event to stick closer to their home position.
 * 
 * <True Random Move>
 * 
 * - Used for: Event Notetags and Event Page Comment Tags
 * - If this tag is used on an event with random-type autonomous movement, then
 *   that event will ignore the effects of weighted randomized movement.
 * 
 * ---
 *
 * ============================================================================
 * Notetags and Comment Tags
 * ============================================================================
 *
 * The following are notetags that have been added through this plugin. These
 * notetags will not work with your game if this plugin is OFF or not present.
 *
 * Some of these are comment tags. Comment tags are used for events to mark and
 * affect individual event pages rather than the whole event.
 *
 * === Map Notetags ===
 *
 * The following notetags are used for maps only. While some of these options
 * are also available in the Plugin Parameters, some of these notetags extend
 * usage to specific maps marked by these notetags as well.
 *
 * ---
 *
 * <Diagonal Movement: On>
 * <Diagonal Movement: Off>
 *
 * - Used for: Map Notetags
 * - Turns on/off diagonal movement for those maps.
 * - If notetag isn't present, use Plugin Parameter setting.
 *
 * ---
 *
 * <type Allow Region: x>
 * <type Allow Region: x, x, x>
 *
 * <type Forbid Region: x>
 * <type Forbid Region: x, x, x>
 *
 * <type Dock Region: x>
 * <type Dock Region: x, x, x>
 *
 * - Used for: Map Notetags
 * - Replace 'type' with 'All', 'Walk', 'Player', 'Event', 'Vehicle', 'Boat',
 *   'Ship', or 'Airship'.
 * - 'Allow' notetag variants allow that type to pass through them no matter
 *   what other passability settings are in place.
 * - 'Forbid' notetag variants forbid that type from passing through at all.
 * - 'Dock' notetag variants allow vehicles to dock there. Boats and ships must
 *   face the region direction while airships must land directly on top.
 *
 * ---
 *
 * <Save Event Locations>
 *
 * - Used for: Maps Notetags
 * - Saves the locations of all events on the map so that when you return to
 *   that map at a later point, the events will be in the position they were
 *   last in.
 *
 * ---
 * 
 * === Page Comment Tags ===
 * 
 * The following comment tags are to be put inside of the pages of events,
 * troops, and common events for them to work!
 * 
 * ---
 * 
 * <Page Conditions>
 *   conditions
 *   conditions
 *   conditions
 * </Page Conditions>
 * 
 * - Used for: Map Event Page, Troop Page, and Common Event Page Comment Tags
 * - This allows you to create custom page conditions that utilize the
 *   Conditional Branch event command to see if the additional page conditions
 *   are met.
 * 
 * ---
 * 
 * <Conditions Met>
 * - Used for: Map Event Page, Troop Page, and Common Event Page Comment Tags
 * - If used between the <Page Conditions> and </Page Conditions> comment tag,
 *   upon reaching this part of event command list, the custom page conditions
 *   will be considered met.
 * 
 * ---
 * 
 * Example:
 * 
 * ◆Comment：<Page Conditions>
 * ◆If：Reid has equipped Potion Sword
 *   ◆Comment：If Reid has equipped the Potion Sword
 * ：       ：<Condition Met>
 *   ◆
 * ：End
 * ◆Comment：</Page Conditions>
 * 
 * If Reid has the "Potion Sword" weapon equipped, then the additional custom
 * page conditions are met and the event page will be present/active.
 * 
 * If this is a troop condition, the troop page event will activate.
 * 
 * If this is a common event, there will be a parallel common event active.
 * 
 * ---
 *
 * === Event and Event Page Notetags ===
 *
 * The following notetags have comment tag variants (with a few exceptions).
 * If a notetag is used for an event, it will affect the event constantly.
 * If a comment tag is used, it will only affect the page the comment tag is
 * on and only that page.
 *
 * ---
 *
 * <Activation Region: x>
 * <Activation Regions: x,x,x>
 *
 * - Used for: Event Notetags and Event Page Comment Tags
 * - Allows this event to be remotely activated as long as the player is
 *   standing within a tile marked by a designated region.
 * - Replace 'x' with the regions you wish to remotely activate this event in.
 *   - Action Button: Player must press OK while being in the region.
 *   - Player/Event Touch: Player must step onto the region.
 *   - Autorun/Parallel: Player be in the region.
 * - If this is placed in a notetag, the effect will be present across
 *   all event pages used.
 * - If this is placed inside a page's comment, the effect will only occur
 *   if that event page is currently active.
 * - NOTE: This cannot be used with any other activation tags.
 *
 * ---
 *
 * <Activation Square: x>
 * <Activation Radius: x>
 * <Activation Row: x>
 * <Activation Column: x>
 *
 * - Used for: Event Notetags and Event Page Comment Tags
 * - Allows this event to be remotely activated as long as the player is
 *   within range of its activation type.
 * - Replace 'x' with a number stating the range in tiles.
 *   - Square: A square-shaped range with the event at the center.
 *   - Radius: A diamond-shaped range with the event at the center.
 *   - Row: Spans horizontally across the map. 'x' expands up and down.
 *   - Column: Spans vertically across the map. 'x' expands left and right.
 * - If this is placed in a notetag, the effect will be present across
 *   all event pages used.
 * - If this is placed inside a page's comment, the effect will only occur
 *   if that event page is currently active.
 * - NOTE: This cannot be used with any other activation tags.
 *
 * ---
 *
 * <Always Update Movement>
 *
 * - Used for: Event Notetags and Event Page Comment Tags
 * - Events normally have to be within screen range for them to update their
 *   self movement. If this tag is present, the event is always updating.
 * - If this is placed in a notetag, the effect will be present across
 *   all event pages used.
 * - If this is placed inside a page's comment, the effect will only occur
 *   if that event page is currently active.
 *
 * ---
 *
 * <Click Trigger>
 *
 * - Used for: Event Notetags and Event Page Comment Tags
 * - Allows this event to activate upon being clicked on with the mouse.
 * - If this is placed in a notetag, the effect will be present across
 *   all event pages used.
 * - If this is placed inside a page's comment, the effect will only occur
 *   if that event page is currently active.
 *
 * ---
 *
 * <Copy Event: Map x, Event y>
 * <Copy Event: x, y>
 *
 * <Copy Event: template>
 *
 * - Used for: Event Notetags ONLY
 * - Makes this event copy all of the event settings from a different event
 *   that can be found on a different map (as long as that map is registered
 *   inside of Plugin Parameters => Event Template Settings => Preloaded Maps).
 * - Replace 'x' with a number representing the copied event's Map ID.
 * - Replace 'y' with a number representing the copied event's Event ID.
 * - For the 'template' variant, replace 'template' with the name of the
 *   template made in Plugin Parameters => Event Template Settings =>
 *   Event Template List.
 * - If this is placed in a notetag, the effect will be present across
 *   all event pages used.
 * - If this is placed inside a page's comment, the effect will only occur
 *   if that event page is currently active.
 *
 * ---
 *
 * <Hitbox Left: x>
 * <Hitbox Right: x>
 * <Hitbox Up: x>
 * <Hitbox Down: x>
 *
 * - Used for: Event Notetags and Event Page Comment Tags
 * - Replace 'x' with a number to extend the hitbox of the event by that many
 *   tiles towards the listed direction.
 * - Use multiples of this notetag to extend them to different directions.
 * - If this is placed in a notetag, the effect will be present across
 *   all event pages used.
 * - If this is placed inside a page's comment, the effect will only occur
 *   if that event page is currently active.
 *
 * ---
 *
 * <Icon: x>
 *
 * - Used for: Event Notetags and Event Page Comment Tags
 * - Replace 'x' with the Icon ID you wish to put above this event.
 * - This will not override any Icons designated to the ID through a
 *   Plugin Command.
 * - If this is placed in a notetag, the effect will be present across
 *   all event pages used.
 * - If this is placed inside a page's comment, the effect will only occur
 *   if that event page is currently active.
 *
 * ---
 *
 * <Icon Buffer X: +x>
 * <Icon Buffer X: -x>
 *
 * <Icon Buffer Y: +x>
 * <Icon Buffer Y: -x>
 *
 * <Icon Buffer: +x, +y>
 * <Icon Buffer: -x, -y>
 *
 * - Used for: Event Notetags and Event Page Comment Tags
 * - Allows you to adjust the positions of the icon on the envent by buffers.
 * - Replace 'x' and 'y' with the values to adjust the position buffers by.
 * - If this is placed in a notetag, the effect will be present across
 *   all event pages used.
 * - If this is placed inside a page's comment, the effect will only occur
 *   if that event page is currently active.
 *
 * ---
 *
 * <Icon Blend Mode: Normal>
 * <Icon Blend Mode: Additive>
 * <Icon Blend Mode: Multiply>
 * <Icon Blend Mode: Screen>
 *
 * - Used for: Event Notetags and Event Page Comment Tags
 * - Sets the blend mode for the icon on the event.
 * - If this is placed in a notetag, the effect will be present across
 *   all event pages used.
 * - If this is placed inside a page's comment, the effect will only occur
 *   if that event page is currently active.
 *
 * ---
 *
 * <Label: text>
 *
 * - Used for: Event Notetags and Event Page Comment Tags
 * - Puts a label over the event's head displaying 'text'.
 * - Text codes can be used.
 * - If this is placed in a notetag, the effect will be present across
 *   all event pages used.
 * - If this is placed inside a page's comment, the effect will only occur
 *   if that event page is currently active.
 *
 * ---
 *
 * <Label>
 * text
 * text
 * </Label>
 *
 * - Used for: Event Notetags and Event Page Comment Tags
 * - Puts a label over the event's head displaying 'text'.
 * - This can display multiple lines.
 * - Text codes can be used.
 * - If this is placed in a notetag, the effect will be present across
 *   all event pages used.
 * - If this is placed inside a page's comment, the effect will only occur
 *   if that event page is currently active.
 *
 * ---
 *
 * <Label Range: x>
 *
 * - Used for: Event Notetags and Event Page Comment Tags
 * - Sets a range requirement for the player to be in order for the event's
 *   label to appear.
 * - Replace 'x' with a number value depicting the range in tiles.
 * - If this is placed in a notetag, the effect will be present across
 *   all event pages used.
 * - If this is placed inside a page's comment, the effect will only occur
 *   if that event page is currently active.
 *
 * ---
 *
 * <Label Offset X: +x>
 * <Label Offset X: -x>
 *
 * <Label Offset Y: +x>
 * <Label Offset Y: -x>
 *
 * <Label Offset: +x, +y>
 * <Label Offset: -x, -y>
 *
 * - Used for: Event Notetags and Event Page Comment Tags
 * - Allows you to adjust the positions of the label on the envent by offsets.
 * - Replace 'x' and 'y' with the values to adjust the position offsets by.
 * - If this is placed in a notetag, the effect will be present across
 *   all event pages used.
 * - If this is placed inside a page's comment, the effect will only occur
 *   if that event page is currently active.
 *
 * ---
 * 
 * <Move Only Region: x>
 * <Move Only Regions: x,x,x>
 * 
 * - Used for: Event Notetags and Event Page Comment Tags
 * - Sets the move range of this event to only the region(s) marked by the
 *   notetag(s) or comment tag(s).
 * - This will bypass terrain passability.
 * - This will not bypass event collision.
 * - If this is placed in a notetag, the effect will be present across
 *   all event pages used.
 * - If this is placed inside a page's comment, the effect will only occur
 *   if that event page is currently active.
 * 
 * ---
 *
 * <Move Synch Target: Player>
 *
 * <Move Synch Target: Event x>
 *
 * - Used for: Event Notetags and Event Page Comment Tags
 * - Synchronizes the movement of this event with a target (either the player
 *   or another event). This event will only move whenever the synchronized
 *   target moves.
 * - For 'Event x' variant, replace 'x' with the ID of the event to synch to.
 * - If this is placed in a notetag, the effect will be present across
 *   all event pages used.
 * - If this is placed inside a page's comment, the effect will only occur
 *   if that event page is currently active.
 *
 * ---
 *
 * <Move Synch Type: Random>
 * <Move Synch Type: Approach>
 * <Move Synch Type: Away>
 * <Move Synch Type: Custom>
 *
 * <Move Synch Type: Mimic>
 * <Move Synch Type: Reverse Mimic>
 *
 * <Move Synch Type: Mirror Horizontal>
 * <Move Synch Type: Mirror Vertical>
 *
 * - Used for: Event Notetags and Event Page Comment Tags
 * - Choose the type of movement the event will have if it is synchronized to
 *   a target.
 *   - Random: Move to a random position.
 *   - Approach: Approaches target.
 *   - Away: Flees from target.
 *   - Custom: Follows a custom move route.
 *   - Mimic: Imitates the target's movement style.
 *   - Reverse Mimic: Does the opposite of the target's movement.
 *   - Mirror Horizontal: Moves as if a mirror is placed horizontally.
 *   - Mirror Vertical: Moves as if a mirror is placed vertically.
 * - If this is placed in a notetag, the effect will be present across
 *   all event pages used.
 * - If this is placed inside a page's comment, the effect will only occur
 *   if that event page is currently active.
 *
 * ---
 *
 * <Move Synch Delay: x>
 *
 * - Used for: Event Notetags and Event Page Comment Tags
 * - If this tag is present, the event will wait a bit after each move before
 *   moving again.
 * - Replace 'x' with the number of movement instances in between.
 * - If this is placed in a notetag, the effect will be present across
 *   all event pages used.
 * - If this is placed inside a page's comment, the effect will only occur
 *   if that event page is currently active.
 *
 * ---
 * 
 * <Random Move Weight: x>
 * 
 * - Used for: Event Notetags and Event Page Comment Tags
 * - If this tag is used on an event with random-type autonomous movement, then
 *   the event will stick closer to their home location (where they are located
 *   upon spawning on the map). How close they stick to their home location
 *   will depend on the weighted 'x' value.
 * - Replace 'x' with a number between 0 and 1. Numbers closer to 0 give the
 *   event more freedom when moving randomly while numbers closer to 1 cause
 *   the event to stick closer to their home position.
 * 
 * ---
 * 
 * <True Random Move>
 * 
 * - Used for: Event Notetags and Event Page Comment Tags
 * - If this tag is used on an event with random-type autonomous movement, then
 *   that event will ignore the effects of weighted randomized movement.
 * 
 * ---
 *
 * <Save Event Location>
 *
 * - Used for: Event Notetags ONLY
 * - Saves the locations of the event on the map so that when you return to
 *   that map at a later point, the event will be in the position it was
 *   last in.
 *
 * ---
 *
 * <Hide Shadow>
 * - Used for: Event Notetags and Event Page Comment Tags
 * - Hides the shadow for the event.
 * - If this is placed in a notetag, the effect will be present across
 *   all event pages used.
 * - If this is placed inside a page's comment, the effect will only occur
 *   if that event page is currently active.
 *
 * ---
 *
 * <Shadow Filename: filename>
 *
 * - Used for: Event Notetags and Event Page Comment Tags
 * - Replaces the shadow graphic used with 'filename' found in the
 *   img/system/ project folder.
 * - If this is placed in a notetag, the effect will be present across
 *   all event pages used.
 * - If this is placed inside a page's comment, the effect will only occur
 *   if that event page is currently active.
 *
 * ---
 *
 * <Sprite Offset X: +x>
 * <Sprite Offset X: -x>
 *
 * <Sprite Offset Y: +x>
 * <Sprite Offset Y: -x>
 *
 * <Sprite Offset: +x, +y>
 * <Sprite Offset: -x, -y>
 *
 * - Used for: Event Notetags and Event Page Comment Tags
 * - Changes how much the event's sprite is visibly offset by.
 * - Replace 'x' and 'y' with numbers indicating the offset in pixels.
 * - If this is placed in a notetag, the effect will be present across
 *   all event pages used.
 * - If this is placed inside a page's comment, the effect will only occur
 *   if that event page is currently active.
 *
 * ---
 *
 * <Step Pattern: Left to Right>
 * <Step Pattern: Right to Left>
 *
 * <Step Pattern: Spin Clockwise>
 * <Step Pattern: Spin CW>
 *
 * <Step Pattern: Spin CounterClockwise>
 * <Step Pattern: Spin CCW>
 * <Step Pattern: Spin AntiClockwise>
 * <Step Pattern: Spin ACW>
 *
 * - Used for: Event Notetags and Event Page Comment Tags
 * - Changes the way the event animates if a tag is present.
 *   - Left to Right: Makes the event sprite's step behavior go from frame 0 to
 *     1 to 2, then back to 0 instead of looping backward.
 *   - Right to Left: Makes the event sprite's step behavior go from frame 2 to
 *     1 to 0, then back to 2 instead of looping forward.
 *   - Spin Clockwise: Makes the event sprite's step behavior spin CW.
 *   - Spin CounterClockwise: Makes the event sprite's step behavior spin CCW.
 * - If this is placed in a notetag, the effect will be present across
 *   all event pages used.
 * - If this is placed inside a page's comment, the effect will only occur
 *   if that event page is currently active.
 *
 * ---
 *
 * ============================================================================
 * Plugin Commands
 * ============================================================================
 *
 * The following are Plugin Commands that come with this plugin. They can be
 * accessed through the Plugin Command event command.
 *
 * ---
 * 
 * === Auto Movement Plugin Commands ===
 * 
 * ---
 *
 * Auto Movement: Events
 * - Allow/stop events from auto movement.
 *
 *   Value:
 *   - Allow events to move automatically?
 *
 * ---
 * 
 * === Call Event Plugin Commands ===
 * 
 * ---
 *
 * Call Event: Remote Activation
 * - Runs the page of a different event remotely.
 *
 *   Map ID:
 *   - Target event's map. Use 0 for current map.
 *   - You may use JavaScript code.
 *
 *   Event ID:
 *   - The ID of the event to remotely run.
 *   - Use 0 for current event.
 *   - You may use JavaScript code.
 *
 *   Page ID:
 *   - The page of the remote event to run.
 *   - You may use JavaScript code.
 *
 * ---
 * 
 * === Dash Plugin Commands ===
 * 
 * ---
 *
 * Dash Enable: Toggle
 * - Enable/Disable Dashing on maps.
 *
 *   Value:
 *   - What do you wish to change dashing to?
 *
 * ---
 * 
 * === Event Icon Plugin Commands ===
 * 
 * ---
 *
 * Event Icon: Change
 * - Change the icon that appears on an event.
 *
 *   Map ID:
 *   - The map the target map. Use 0 for current map.
 *   - You may use JavaScript code.
 *
 *   Event ID:
 *   - The ID of the target event.
 *   - Use 0 for current event.
 *   - You may use JavaScript code.
 *
 *   Icon Index:
 *   - Icon index used for the icon.
 *   - You may use JavaScript code.
 *
 *   Buffer X:
 *   - How much to shift the X position by?
 *   - You may use JavaScript code.
 *
 *   Buffer Y:
 *   - How much to shift the Y position by?
 *   - You may use JavaScript code.
 *
 *   Blend Mode:
 *   - What kind of blend mode do you wish to apply to the icon sprite?
 *
 * ---
 *
 * Event Icon: Delete
 * - Delete the icon that appears on an event.
 *
 *   Map ID:
 *   - The map the target map. Use 0 for current map.
 *   - You may use JavaScript code.
 *
 *   Event ID:
 *   - The ID of the target event.
 *   - Use 0 for current event.
 *   - You may use JavaScript code.
 *
 * ---
 * 
 * === Event Label Plugin Commands ===
 * 
 * ---
 *
 * Event Label: Refresh
 * - Refresh all Event Labels on screen.
 * - This is used to refresh page conditions for map changes that don't
 *   force a refresh.
 *
 * ---
 *
 * Event Label: Visible
 * - Change the visibility of Event Labels.
 *
 *   Visibility:
 *   - What do you wish to change visibility to?
 *
 * ---
 * 
 * === Event Location Plugin Commands ===
 * 
 * ---
 *
 * Event Location: Save
 * - Memorize an event's map location so it reappears there the next time the
 *   map is loaded.
 *
 *   Event ID:
 *   - The ID of the target event.
 *   - Use 0 for current event.
 *   - You may use JavaScript code.
 *
 * ---
 *
 * Event Location: Delete
 * - Deletes an event's saved map location.
 * - The event will reappear at its default location.
 *
 *   Map ID:
 *   - The map the target map. Use 0 for current map.
 *   - You may use JavaScript code.
 *   
 *   Event ID:
 *   - The ID of the target event.
 *   - Use 0 for current event.
 *   - You may use JavaScript code.
 *
 * ---
 *
 * Event Location: Create
 * - Creates a custom spawn location for a specific map's event so it appears
 *   there the next time the map is loaded.
 *
 *   Map ID:
 *   - The map the target map. Use 0 for current map.
 *   - You may use JavaScript code.
 *
 *   Event ID:
 *   - The ID of the target event.
 *   - Use 0 for current event.
 *   - You may use JavaScript code.
 *
 *   X Coordinate:
 *   - The X coordinate of the event.
 *   - You may use JavaScript code.
 *
 *   Y Coordinate:
 *   - The Y coordinate of the event.
 *   - You may use JavaScript code.
 *
 *   Direction:
 *   - The direction the event will be facing.
 *
 *   Optional:
 *
 *     Page ID:
 *     - The page of the event to set the move route to.
 *     - You may use JavaScript code.
 *
 *     Move Route Index:
 *     - The point in the move route for this event to be at if the page ID
 *       matches the rest of the page conditions.
 *
 * ---
 * 
 * === Event Timer Plugin Commands ===
 * 
 * ---
 *
 * Event Timer: Change Speed
 * - Changes the timer frame decrease (or increase) speed.
 *
 *   Speed:
 *   - How many 1/60ths of a second does each frame increase or decrease by?
 *   - Negative decreases.
 *   - Positive increases.
 *   - JavaScript allowed.
 *
 * ---
 *
 * Event Timer: Expire Event Assign
 * - Sets a Common Event to run upon expiration.
 * - Bypasses the default code if one is set.
 *
 *   Common Event ID:
 *   - Select the Common Event to run upon the timer's expiration.
 *
 * ---
 *
 * Event Timer: Expire Event Clear
 * - Clears any set to expire Common Event and instead, run the default
 *   Game_Timer expiration code.
 *
 * ---
 *
 * Event Timer: Frames Gain
 * - Chooses how many frames, seconds, minutes, or hours are gained or lost for
 *   the event timer.
 *
 *   Frames:
 *   - How many 1/60ths of a second are gained/lost?
 *   - Positive for gain.
 *   - Negative for lost.
 *   - JavaScript allowed.
 *
 *   Seconds:
 *   - How many seconds are gained/lost?
 *   - Positive for gain.
 *   - Negative for lost.
 *   - JavaScript allowed.
 *
 *   Minutes:
 *   - How many minutes are gained/lost?
 *   - Positive for gain.
 *   - Negative for lost.
 *   - JavaScript allowed.
 *
 *   Hours:
 *   - How many hours are gained/lost?
 *   - Positive for gain.
 *   - Negative for lost.
 *   - JavaScript allowed.
 *
 * ---
 *
 * Event Timer: Frames Set
 * - Chooses how many frames, seconds, minutes, or hours are set for the event
 *   timer.
 *
 *   Frames:
 *   - Set frame count to this value.
 *   - Each frame is 1/60th of a second.
 *   - JavaScript allowed.
 *
 *   Seconds:
 *   - Set seconds to this value.
 *   - JavaScript allowed.
 *
 *   Minutes:
 *   - Set minutes to this value.
 *   - Each minute is 60 seconds.
 *   - JavaScript allowed.
 *
 *   Hours:
 *   - Set hours to this value.
 *   - Each hour is 60 minutes.
 *   - JavaScript allowed.
 *
 * ---
 *
 * Event Timer: Pause
 * - Pauses the current event timer, but does not stop it.
 *
 * ---
 *
 * Event Timer: Resume
 * - Resumes the current event timer from the paused state.
 *
 * ---
 * 
 * === Follower Control Plugin Commands ===
 * 
 * ---
 *
 * Follower: Set Global Chase
 * - Disables all followers from chasing the player or reenables it.
 *
 *   Chase:
 *   - Sets all followers to chase the player or not.
 *
 * ---
 *
 * Follower: Set Target Chase
 * - Disables target follower from chasing the player or reenables it.
 *
 *   Follower ID:
 *   - Select which follower ID to disable/reenable chasing for.
 *
 *   Chase:
 *   - Sets target follower to chase its target or not.
 *
 * ---
 *
 * Follower: Set Control
 * - Sets the event commands to target a follower when "Player" is selected as
 *   the target.
 *
 *   Follower ID:
 *   - Select which follower ID to control.
 *   - 0 is the player.
 *
 * ---
 *
 * Follower: Reset
 * - Resets all follower controls. Event Commands that target the "Player"
 *   return to normal and followers chase again.
 *
 * ---
 * 
 * === Global Switch Plugin Commands ===
 * 
 * ---
 * 
 * Global Switch: Get Self Switch A B C D
 * - Gets the current ON/OFF value from a Self Switch and stores it onto a
 *   Global Switch.
 * 
 *   Map ID:
 *   - The map the source map. Use 0 for current map.
 *   - You may use JavaScript code.
 * 
 *   Event ID:
 *   - The ID of the source event.
 *   - Use 0 for current event.
 *   - You may use JavaScript code.
 * 
 *   Letter:
 *   - Letter of the target event's Self Switch to obtain data from.
 * 
 *   -
 * 
 *   Target Switch ID:
 *   - The ID of the target switch.
 * 
 * ---
 * 
 * Global Switch: Get Self Switch ID
 * - Gets the current ON/OFF value from a Self Switch and stores it onto a
 *   Global Switch.
 * 
 *   Map ID:
 *   - The map the source map. Use 0 for current map.
 *   - You may use JavaScript code.
 * 
 *   Event ID:
 *   - The ID of the source event.
 *   - Use 0 for current event.
 *   - You may use JavaScript code.
 * 
 *   Switch ID:
 *   - The ID of the source switch.
 * 
 *   -
 * 
 *   Target Switch ID:
 *   - The ID of the target switch.
 * 
 * ---
 * 
 * === Global Variable Plugin Commands ===
 * 
 * ---
 * 
 * Global Variable: Get Self Variable ID
 * - Gets the current stored value from a Self Variable and stores it onto a
 *   Global Variable.
 * 
 *   Map ID:
 *   - The map the source map. Use 0 for current map.
 *   - You may use JavaScript code.
 * 
 *   Event ID:
 *   - The ID of the source event.
 *   - Use 0 for current event.
 *   - You may use JavaScript code.
 * 
 *   Variable ID:
 *   - The ID of the source variable.
 * 
 *   -
 * 
 *   Target Variable ID:
 *   - The ID of the target variable.
 * 
 * ---
 * 
 * === Morph Event Plugin Commands ===
 * 
 * ---
 *
 * Morph Event: Change
 * - Runs the page of a different event remotely.
 *
 *   Step 1:
 *
 *     Map ID:
 *     - Target event's map. Use 0 for current map.
 *     - You may use JavaScript code.
 *
 *     Event ID:
 *     - The ID of the target event.
 *     - Use 0 for current event.
 *     - You may use JavaScript code.
 *
 *   Step 2:
 *
 *     Template Name:
 *     - Name of the target event template to morph into.
 *     - Ignored if this is called "Untitled".
 *
 *     Map ID:
 *     - Target event's map. Use 0 for current map.
 *     - You may use JavaScript code.
 *
 *     Event ID:
 *     - The ID of the target event.
 *     - Use 0 for current event.
 *     - You may use JavaScript code.
 *
 *     Preserve Morph:
 *     - Is the morph effect preserved?
 *     - Or does it expire upon leaving the map?
 *
 * ---
 *
 * Morph Event: Remove
 * - Remove the morph status of an event.
 *
 *   Map ID:
 *   - Target event's map. Use 0 for current map.
 *   - You may use JavaScript code.
 *
 *   Event ID:
 *   - The ID of the event to remotely run.
 *   - Use 0 for current event.
 *   - You may use JavaScript code.
 *
 *   Remove Preservation:
 *   - Also remove the preservation effect?
 *
 * ---
 * 
 * === Player Icon Plugin Commands ===
 * 
 * ---
 *
 * Player Icon: Change
 * - Change the icon that appears on on the player.
 *
 *   Icon Index:
 *   - Icon index used for the icon.
 *   - You may use JavaScript code.
 *
 *   Buffer X:
 *   - How much to shift the X position by?
 *   - You may use JavaScript code.
 *
 *   Buffer Y:
 *   - How much to shift the Y position by?
 *   - You may use JavaScript code.
 *
 *   Blend Mode:
 *   - What kind of blend mode do you wish to apply to the icon sprite?
 *
 * ---
 *
 * Player Icon: Delete
 * - Delete the icon that appears on the player.
 *
 * ---
 * 
 * === Player Movement Plugin Commands ===
 * 
 * ---
 * 
 * Player Movement: Control
 * - Enable or disable player control over the player character's movement.
 * 
 *   Enable?:
 *   - Let the player control where the player character moves?
 * 
 * ---
 * 
 * Player Movement: Diagonal
 * - Override settings to for player diagonal movement.
 * 
 *   Setting:
 *   - How do you want to change diagonal movement?
 *   - Default: Whatever the Map Uses
 *   - Forcefully Disable Diagonal Movement
 *   - Forcefully Enable Diagonal Movement
 * 
 * ---
 * 
 * === Self Switch Plugin Commands ===
 * 
 * ---
 *
 * Self Switch: A B C D
 * - Change the Self Switch of a different event.
 *
 *   Map ID:
 *   - The map the target map. Use 0 for current map.
 *   - You may use JavaScript code.
 *
 *   Event ID:
 *   - The ID of the target event.
 *   - Use 0 for current event.
 *   - You may use JavaScript code.
 *
 *   Letter:
 *   - Letter of the target event's Self Switch to change.
 *
 *   Value:
 *   - What value do you want to set the Self Switch to?
 *
 * ---
 *
 * Self Switch: Switch ID
 * - Change the Self Switch of a different event.
 *
 *   Map ID:
 *   - The map the target map. Use 0 for current map.
 *   - You may use JavaScript code.
 *
 *   Event ID:
 *   - The ID of the target event.
 *   - Use 0 for current event.
 *   - You may use JavaScript code.
 *
 *   Switch ID:
 *   - The ID of the target switch.
 *
 *   Value:
 *   - What value do you want to set the Self Switch to?
 *
 * ---
 * 
 * === Self Variable Plugin Commands ===
 * 
 * ---
 *
 * Self Variable: Variable ID
 * - Change the Self Variable of a different event.
 *
 *   Map ID:
 *   - The map the target map. Use 0 for current map.
 *   - You may use JavaScript code.
 *
 *   Event ID:
 *   - The ID of the target event.
 *   - Use 0 for current event.
 *   - You may use JavaScript code.
 *
 *   Variable ID:
 *   - The ID of the target variable.
 *
 *   Value:
 *   - What value do you want to set the Self Switch to?
 *
 * ---
 * 
 * === Spawn Event Plugin Commands ===
 * 
 * ---
 *
 * Spawn Event: Spawn At X, Y
 * - Spawns desired event at X, Y location on the current map.
 *
 *   Step 1:
 *
 *     Template Name:
 *     - Name of the target event template to spawn as.
 *     - Ignored if this is called "Untitled".
 *
 *     Map ID:
 *     - Target event's map to be used as reference.
 *     - You may use JavaScript code.
 *
 *     Event ID:
 *     - The ID of the target event to be used as reference.
 *     - You may use JavaScript code.
 *
 *   Step 2:
 *
 *     X Coordinate:
 *     - Target Location to spawn at.
 *     - You may use JavaScript code.
 *
 *     Y Coordinate:
 *     - Target Location to spawn at.
 *     - You may use JavaScript code.
 *
 *     Check Event Collision:
 *     - Check collision with any other events and player?
 *
 *     Check Passability:
 *     - Check passability of the target location.
 *
 *     Preserve Spawn:
 *     - Is the spawned event preserved?
 *     - Or does it expire upon leaving the map?
 *
 *   Step 3:
 *
 *     Success Switch ID:
 *     - Target switch ID to record spawning success.
 *     - Ignore if ID is 0. OFF means failed. ON means success.
 *
 * ---
 *
 * Spawn Event: Spawn At Region
 * - Spawns desired event at a random region-marked location on the
 *   current map.
 *
 *   Step 1:
 *
 *     Template Name:
 *     - Name of the target event template to spawn as.
 *     - Ignored if this is called "Untitled".
 *
 *     Map ID:
 *     - Target event's map to be used as reference.
 *     - You may use JavaScript code.
 *
 *     Event ID:
 *     - The ID of the target event to be used as reference.
 *     - You may use JavaScript code.
 *
 *   Step 2:
 *
 *     Region ID(s):
 *     - Pick region(s) to spawn this event at.
 *
 *     Check Event Collision:
 *     - Check collision with any other events and player?
 *
 *     Check Passability:
 *     - Check passability of the target location.
 *
 *     Preserve Spawn:
 *     - Is the spawned event preserved?
 *     - Or does it expire upon leaving the map?
 *
 *   Step 3:
 *
 *     Success Switch ID:
 *     - Target switch ID to record spawning success.
 *     - Ignore if ID is 0. OFF means failed. ON means success.
 *
 * ---
 *
 * Spawn Event: Spawn At Terrain Tag
 * - Spawns desired event at a random terrain tag-marked location on the
 *   current map.
 *
 *   Step 1:
 *
 *     Template Name:
 *     - Name of the target event template to spawn as.
 *     - Ignored if this is called "Untitled".
 *
 *     Map ID:
 *     - Target event's map to be used as reference.
 *     - You may use JavaScript code.
 *
 *     Event ID:
 *     - The ID of the target event to be used as reference.
 *     - You may use JavaScript code.
 *
 *   Step 2:
 *
 *     Terrain Tag(s):
 *     - Pick terrain tag(s) to spawn this event at.
 *     - Insert numbers between 0 and 7.
 *
 *     Check Event Collision:
 *     - Check collision with any other events and player?
 *
 *     Check Passability:
 *     - Check passability of the target location.
 *
 *     Preserve Spawn:
 *     - Is the spawned event preserved?
 *     - Or does it expire upon leaving the map?
 *
 *   Step 3:
 *
 *     Success Switch ID:
 *     - Target switch ID to record spawning success.
 *     - Ignore if ID is 0. OFF means failed. ON means success.
 *
 * ---
 *
 * Spawn Event: Despawn Event ID
 * - Despawns the selected Event ID on the current map.
 *
 *   Event ID
 *   - The ID of the target event.
 *   - You may use JavaScript code.
 *
 * ---
 *
 * Spawn Event: Despawn At X, Y
 * - Despawns any spawned event(s) at X, Y location on the current map.
 *
 *   X Coordinate:
 *   - Target Location to despawn at.
 *   - You may use JavaScript code.
 *
 *   Y Coordinate:
 *   - Target Location to despawn at.
 *   - You may use JavaScript code.
 *
 * ---
 *
 * Spawn Event: Despawn Region(s)
 * - Despawns the selected Region(s) on the current map.
 *
 *   Region ID(s):
 *   - Pick region(s) and despawn everything inside it.
 *
 * ---
 *
 * Spawn Event: Despawn Terrain Tag(s)
 * - Despawns the selected Terrain Tags(s) on the current map.
 *
 *   Terrain Tag(s):
 *   - Pick terrain tag(s) and despawn everything inside it.
 *   - Insert numbers between 0 and 7.
 *
 * ---
 *
 * Spawn Event: Despawn Everything
 * - Despawns all spawned events on the current map.
 *
 * ---
 *
 * ============================================================================
 * Move Route Custom Commands
 * ============================================================================
 *
 * Some custom commands have been added to the "Set Movement Route" event
 * command. These can be accessed by pressing the "Script..." command and
 * typing in the following, which don't need to be in code form.
 *
 * Keep in mind that since these are custom additions and RPG Maker MZ does not
 * allow plugins to modify the editor, the "Preview" button will not factor in
 * the effects of these commands.
 * 
 * If you wish to use a value from a variable, insert $gameVariables.value(x)
 * or \V[x] in place of the x in any of the below.
 * 
 * If you wish to use a value from a self variable, insert \SelfVar[x] in place
 * of the x in any of the below. This will only draw from the current event. If
 * you wish to draw data from outside event self variables, we recommend you
 * use the \V[x] variant after using the Plugin Commands to draw data from them
 * for the best accuracy.
 *
 * ---
 * 
 * Animation: x
 * - Replace 'x' with the ID of the animation to play on moving unit.
 *
 * ---
 * 
 * Balloon: name
 * - Replace 'name' with any of the following to play a balloon on that the
 *   target moving unit.
 * - '!', '?', 'Music Note', 'Heart', 'Anger', 'Sweat', 'Cobweb', 'Silence',
 *   'Light Bulb', 'Sleep', 'User-Defined 1', 'User-Defined 2',
 *   'User-Defined 3', 'User-Defined 4', 'User-Defined 5'
 *    - Do NOT insert quotes.
 * - Examples:
 *   - Balloon: !
 *   - Balloon: Sleep
 *   - Balloon: Heart
 *
 * ---
 * 
 * Fade In: x
 * Fade Out: x
 * - Fades in/out the sprite's opacity.
 * - Fade In will continuously raise the opacity level until it reaches 255.
 * - Fade Out will continuously lower the opacity level until it reaches 0.
 * - Replace 'x' with the speed to fade in/out the sprite.
 * 
 * ---
 * 
 * Force Carry: On
 * Force Carry: Off
 * - For usage with the VS8 sprite sheet.
 * - Use ON to turn force carrying on.
 * - Use OFF to turn force carrying off.
 * - Sprites using the VS8 sprite sheet will also show the VS8 Carry frames.
 * 
 * ---
 * 
 * Force Dash: On
 * Force Dash: Off
 * - Use ON to turn force dashing on.
 * - Use OFF to turn force dashing off.
 * - Forces dashing will prompt the player or event to be in the dashing state.
 * - Sprites using the VS8 sprite sheet will also show the VS8 Dashing frames.
 * 
 * ---
 * 
 * Hug: Left
 * Hug: Right
 * - Causes the moving unit to hug the left/right side of the wall.
 *
 * ---
 * 
 * Index: x
 * - Replace 'x' with a number depicting the character index to change the
 *   moving unit's sprite to.
 *
 * ---
 * 
 * Index: +x
 * Index: -x
 * - Replace 'x' with the value to change the character index of the moving
 *   unit's sprite by.
 *
 * ---
 * 
 * Jump Forward: x
 * - Replace 'x' with the number of tiles for the unit to jump forward by.
 *
 * ---
 * 
 * Jump To: x, y
 * - Replace 'x' and 'y' with the coordinates for the unit to jump to.
 *
 * ---
 * 
 * Jump to Event: x
 * - Replace 'x' with the ID of the event for the unit to jump to.
 *
 * ---
 * 
 * Jump to Player
 * - Causes the moving unit to jump to the player.
 *
 * ---
 * 
 * Move Lower Left Until Stop
 * Move Down Until Stop
 * Move Lower Right Until Stop
 * Move Left Until Stop
 * Move Right Until Stop
 * Move Upper Left Until Stop
 * Move Up Until Stop
 * Move Upper Right Until Stop
 * - Causes the moving unit to move that direction until it hits a stop.
 * - Events will stop moving before they make contact with the player.
 *
 * ---
 * 
 * Crash Move Lower Left Until Stop
 * Crash Move Down Until Stop
 * Crash Move Lower Right Until Stop
 * Crash Move Left Until Stop
 * Crash Move Right Until Stop
 * Crash Move Upper Left Until Stop
 * Crash Move Up Until Stop
 * Crash Move Upper Right Until Stop
 * - Causes the moving unit to move that direction until it hits a stop.
 * - Events can crash into the player and trigger an event.
 *
 * ---
 * 
 * Move To: x, y
 * - Replace 'x' and 'y' with the map coordinates to move the unit to through
 *   pathfinding.
 * - This uses RPG Maker MZ's pathfinding algorithm. It is not perfect so do
 *   not expect the most optimal results.
 * - Events will go around the player.
 *
 * ---
 * 
 * Crash Move To: x, y
 * - Replace 'x' and 'y' with the map coordinates to move the unit to through
 *   pathfinding.
 * - This uses RPG Maker MZ's pathfinding algorithm. It is not perfect so do
 *   not expect the most optimal results.
 * - Events can crash into the player and trigger an event.
 *
 * ---
 * 
 * Move to Event: x
 * - Replace 'x' with the ID of the event to move the unit to.
 * - This uses RPG Maker MZ's pathfinding algorithm. It is not perfect so do
 *   not expect the most optimal results.
 * - Events will go around the player.
 *
 * ---
 * 
 * Crash Move to Event: x
 * - Replace 'x' with the ID of the event to move the unit to.
 * - This uses RPG Maker MZ's pathfinding algorithm. It is not perfect so do
 *   not expect the most optimal results.
 * - Events can crash into the player and trigger an event.
 *
 * ---
 * 
 * Move to Player
 * - Moves the unit to the player.
 * - This uses RPG Maker MZ's pathfinding algorithm. It is not perfect so do
 *   not expect the most optimal results.
 *
 * ---
 * 
 * Move Lower Left: x
 * Move Down: x
 * Move Lower Right: x
 * Move Left: x
 * Move Right: x
 * Move Upper Left: x
 * Move Up: x
 * Move Upper Right: x
 * - Replace 'x' with the number of times to move the unit by in the designated
 *   direction on the map.
 * - Events can crash into the player and trigger an event.
 *
 * ---
 * 
 * Opacity: x%
 * - Replace 'x' with the percentage to change the unit's sprite opacity to.
 *
 * ---
 * 
 * Opacity: +x
 * Opacity: -x
 * - Replace 'x' with the increment to change the unit's sprite opacity by.
 *
 * ---
 *
 * Pattern Lock: x
 * - Replace 'x' with the step pattern to lock the unit's sprite to.
 *
 * ---
 *
 * Pattern Unlock
 * - Removes pattern lock effect.
 *
 * ---
 * 
 * Pose: name
 * - If using a VS8 sprite, this will cause the unit to strike a pose.
 * - Replace 'name' with any the following:
 * - 'Item', 'Hmph', 'Victory', 'Hurt', 'Kneel', 'Collapse',
 *   '!', '?', 'Music Note', 'Heart', 'Anger', 'Sweat', 'Cobweb', 'Silence',
 *   'Light Bulb', 'Sleep'
 *    - Do NOT insert quotes.
 * - Examples:
 *   - Balloon: Item
 *   - Balloon: Victory
 *   - Balloon: ?
 *
 * ---
 * 
 * Step Toward: x, y
 * - Replace 'x' and 'y' for the desired coordinates for the unit to take one
 *   step towards.
 * - This uses RPG Maker MZ's pathfinding algorithm. It is not perfect so do
 *   not expect the most optimal results.
 *
 * ---
 * 
 * Step Toward Event: x
 * - Replace 'x' with the ID of the event for the unit to take one step to.
 * - This uses RPG Maker MZ's pathfinding algorithm. It is not perfect so do
 *   not expect the most optimal results.
 *
 * ---
 * 
 * Step Toward Player
 * - Causes event to take one step towards the player.
 * - This uses RPG Maker MZ's pathfinding algorithm. It is not perfect so do
 *   not expect the most optimal results.
 *
 * ---
 * 
 * Step Away From: x, y
 * - Replace 'x' and 'y' for the desired coordinates for the unit to take one
 *   step away from.
 * - This uses RPG Maker MZ's pathfinding algorithm. It is not perfect so do
 *   not expect the most optimal results.
 *
 * ---
 * 
 * Step Away From Event: x
 * - Replace 'x' with the ID of the event for the unit to take one step from.
 * - This uses RPG Maker MZ's pathfinding algorithm. It is not perfect so do
 *   not expect the most optimal results.
 *
 * ---
 * 
 * Step Away From Player
 * - Causes event to take one step away from the player.
 * - This uses RPG Maker MZ's pathfinding algorithm. It is not perfect so do
 *   not expect the most optimal results.
 *
 * ---
 * 
 * Turn To: x, y
 * - Replace 'x' and 'y' for the coordinates to make the unit face towards.
 * - This supports 8 directional turning.
 *
 * ---
 * 
 * Turn to Event: x
 * - Replace 'x' with the ID of the event to turn the unit towards.
 * - This supports 8 directional turning.
 *
 * ---
 * 
 * Turn to Player
 * - Causes the unit to turn towards the player.
 * - This supports 8 directional turning.
 *
 * ---
 * 
 * Turn Away From: x, y
 * - Replace 'x' and 'y' for the coordinates to make the unit face away from.
 * - This supports 8 directional turning.
 *
 * ---
 * 
 * Turn Away From Event: x
 * - Replace 'x' with the ID of the event to turn the unit away from.
 * - This supports 8 directional turning.
 *
 * ---
 * 
 * Turn Away From Player
 * - Causes the unit to turn away from the player.
 * - This supports 8 directional turning.
 *
 * ---
 * 
 * Turn Lower Left
 * Turn Lower Right
 * Turn Upper Left
 * Turn Upper Right
 * - Causes the unit to turn to one of the diagonal directions.
 *
 * ---
 * 
 * Self Switch x: On
 * Self Switch x: Off
 * Self Switch x: Toggle
 * - Replace 'x' with 'A', 'B', 'C', 'D', or a <Self> Switch ID to adjust the
 *   unit's Self Switch.
 *
 * ---
 * 
 * Self Variable x: y
 * - Replace 'x' with a <Self> Variable ID to adjust the unit's Self Variable.
 * - Replace 'y' with a number value to set the Self Variable to.
 *
 * ---
 * 
 * Teleport To: x, y
 * - Replace 'x' and 'y' with the coordinates to instantly move the unit to.
 *
 * ---
 * 
 * Teleport to Event: x
 * - Replace 'x' with the ID of the event to instantly move the unit to.
 *
 * ---
 * 
 * Teleport to Player
 * - Instantly moves the unit to the player's location.
 *
 * ---
 * 
 * If none of the commands are detected above, then a script call will be ran.
 *
 * ---
 *
 * ============================================================================
 * Plugin Parameters: Event Label Settings
 * ============================================================================
 *
 * Event Labels are small windows created to display text over an event's head.
 * They're set up using the <Label> notetags and/or comment tags. Event Labels
 * are a great way to instantly relay information about the event's role to
 * the player.
 *
 * ---
 *
 * Event Labels
 * 
 *   Font Size:
 *   - The font size used for the Event Labels.
 * 
 *   Icon Size:
 *   - The size of the icons used in the Event Labels.
 * 
 *   Line Height:
 *   - The line height used for the Event Labels.
 * 
 *   Offset X:
 *   - Globally offset all labels horizontally by this amount.
 * 
 *   Offset Y:
 *   - Globally offset all labels vertically by this amount.
 * 
 *   Fade Speed:
 *   - Fade speed for labels.
 * 
 *   Visible Range:
 *   - Range the player has to be within the event to make its label visible.
 *
 * ---
 *
 * ============================================================================
 * Plugin Parameters: Event Icon Settings
 * ============================================================================
 *
 * Icons can be displayed over an event's head through the <Icon> notetags
 * and/or comment tags. These can be used for a variety of things such as
 * making them look like they're carrying an item or to indicate they have a
 * specific role.
 *
 * ---
 *
 * Event Icon
 * 
 *   Buffer X:
 *   - Default X position buffer for event icons.
 * 
 *   Buffer Y:
 *   - Default Y position buffer for event icons.
 * 
 *   Blend Mode:
 *   - Default blend mode for even icons.
 *     - 0 - Normal
 *     - 1 - Additive
 *     - 2 - Multiply
 *     - 3 - Screen
 *
 * ---
 *
 * ============================================================================
 * Plugin Parameters: Event Template Settings
 * ============================================================================
 *
 * Event Templates allow you to store specific maps and/or event data to bring
 * out on need while having a premade set base. They're similar to prefabs but
 * aren't things that can be altered individually as one setting for an event
 * template will serve as a blueprint for all of them that use them.
 *
 * Event Templates are used for the <Copy Event> notetags, the Morph Event and
 * Spawn Event Plugin Commands.
 *
 * ---
 *
 * Settings
 * 
 *   Preloaded Maps:
 *   - A list of all the ID's of the maps that will be preloaded to serve as
 *     template maps for this plugin.
 *
 * ---
 *
 * Templates
 * - A list of all the Event Templates used by this project. Used for notetags
 *   and Plugin Commands.
 * 
 *     Name:
 *     - Name of the template. It'll be used as anchor points for notetags and
 *       Plugin Commands.
 * 
 *     Map ID:
 *     - ID of the map the template event is stored on.
 *     - This will automatically add this ID to preloaded list.
 * 
 *     Event ID:
 *     - ID of the event the template event is based on.
 * 
 *     JavaScript:
 *       JS: Pre-Copy:
 *       JS: Post-Copy:
 *       JS: Pre-Morph:
 *       JS: Post-Morph:
 *       JS: Pre-Spawn:
 *       JS: Post-Spawn:
 *       - Code that's ran during certain circumstances.
 *       - The code will occur at the same time as the ones listed in the main
 *         Event Template Settings Plugin Parameters. However, the ones listed
 *         in these individual entries will only occur for these specific
 *         templates and only if the templates are used.
 *
 * ---
 *
 * JavaScript
 * 
 *   JS: Pre-Copy:
 *   JS: Post-Copy:
 *   JS: Pre-Morph:
 *   JS: Post-Morph:
 *   JS: Pre-Spawn:
 *   JS: Post-Spawn:
 *   - Code that's ran during certain circumstances.
 *   - These are global and are ran for all copies, morphs, and/or spawns.
 *
 * ---
 *
 * ============================================================================
 * Plugin Parameters: Movement Settings
 * ============================================================================
 *
 * These plugin parameters allow you to control how movement works in your
 * game, toggling it from 4-directional to 8-directional, setting up rules to
 * stop self-movement from events while an event or message is present, and
 * other aesthetics such as tilting the sprite while dashing, setting shadows
 * beneath the sprites, and allow for turning in place.
 *
 * ---
 *
 * 8 Directional Movement
 * 
 *   Enable:
 *   - Allow 8-directional movement by default? Players can move diagonally.
 * 
 *   Strict Collision:
 *   - Enforce strict collission rules where the player must be able to pass
 *     both cardinal directions?
 * 
 *   Favor Horizontal:
 *   - Favor horizontal if cannot pass diagonally but can pass both
 *     horizontally and vertically?
 * 
 *   Slower Diagonals?
 *   - Enforce a slower movement speed when moving diagonally?
 * 
 *     Speed Multiplier
 *     - What's the multiplier to adjust movement speed when moving diagonally?
 *
 * ---
 *
 * Automatic Movement
 * 
 *   Stop During Events:
 *   - Stop automatic event movement while events are running.
 * 
 *   Stop During Messages:
 *   - Stop automatic event movement while a message is running.
 *
 * ---
 * 
 * Bitmap
 * 
 *   Smoothing:
 *   - Do you want to smooth or pixelate the map sprites?
 *   - Pixelating them is better for zooming and tilting.
 * 
 * ---
 *
 * Dash
 * 
 *   Dash Modifier:
 *   - Alters the dash speed modifier.
 * 
 *   Enable Dash Tilt?:
 *   - Tilt any sprites that are currently dashing?
 * 
 *     Tilt Left Amount:
 *     - Amount in radians when moving left (upper left, left, lower left).
 * 
 *     Tilt Right Amount:
 *     - Amount in radians when moving right (upper right, right, lower right).
 * 
 *     Tilt Vertical Amount:
 *     - Amount in radians when moving vertical (up, down).
 *
 * ---
 * 
 * Event Movement
 * 
 *   Random Move Weight:
 *   - Use numbers between 0 and 1.
 *   - Numbers closer to 1 stay closer to their home position.
 *   - 0 to disable it.
 * 
 * ---
 *
 * Shadows
 * 
 *   Show:
 *   - Show shadows on all events and player-related sprites.
 * 
 *   Default Filename:
 *   - Default filename used for shadows found in img/system/ folder.
 *
 * ---
 *
 * Turn in Place
 * 
 *   Enable:
 *   - When not dashing, player will turn in place before moving.
 *   - This only applies with keyboard inputs.
 * 
 *   Delay in Frames:
 *   - The number of frames to wait before moving.
 *
 * ---
 * 
 * Vehicle Speeds
 * 
 *   Boat Speed:
 *   - Allows you to adjust the base speed of the boat vehicle.
 * 
 *   Ship Speed:
 *   - Allows you to adjust the base speed of the ship vehicle.
 * 
 *   Airship Speed:
 *   - Allows you to adjust the base speed of the airship vehicle.
 * 
 * ---
 *
 * ============================================================================
 * Plugin Parameters: VisuStella 8-Dir Settings
 * ============================================================================
 *
 * These are settings for sprite sheets using the VS8 format.
 * For more information on the VS8 format, look in the help section above.
 *
 * ---
 *
 * Balloon Icon Settings
 * 
 *   Auto-Balloon Poses:
 *   - Automatically pose VS8 sprites when using balloon icons.
 * 
 *   Balloon Offset X:
 *   - Offset balloon icons on VS8 sprites by x pixels.
 * 
 *   Balloon Offset Y:
 *   - Offset balloon icons on VS8 sprites by y pixels.
 *
 * ---
 *
 * Icons
 * 
 *   Auto Buffer:
 *   - Automatically buffer the X and Y coordinates of VS8 sprites?
 * 
 *   Use Carry Pose:
 *   - Use the carry pose when moving with an icon overhead.
 *
 * ---
 *
 * ============================================================================
 * Plugin Parameters: Region Rulings
 * ============================================================================
 *
 * These settings allow you to decide the passability of the player, events,
 * and various vehicles through the usage of Regions.
 *
 * ---
 *
 * Allow Regions
 * 
 *   All Allow:
 *   Walk Allow:
 *   Player Allow:
 *   Event Allow:
 *   Vehicle Allow:
 *   Boat Allow:
 *   Ship Allow:
 *   Airship Allow:
 *   - Insert Region ID's where the affected unit type can enter.
 *   - Region ID's range from 0 to 255.
 *
 * ---
 *
 * Forbid Regions
 * 
 *   All Forbid:
 *   Walk Forbid:
 *   Player Forbid:
 *   Event Forbid:
 *   Vehicle Forbid:
 *   Boat Forbid:
 *   Ship Forbid:
 *   Airship Forbid:
 *   - Insert Region ID's where the affected unit type cannot enter.
 *   - Region ID's range from 0 to 255.
 *
 * ---
 *
 * Dock Regions
 * 
 *   Vehicle Dock:
 *   Boat Dock:
 *   Ship Dock:
 *   Airship Dock:
 *   - Insert Region ID's where the affected vehicle can dock
 *   - Region ID's range from 0 to 255.
 * 
 *   Only Region Dockable:
 *   - Vehicles are only able to dock at designated regions.
 *
 * ---
 *
 * ============================================================================
 * Plugin Parameters: Common Event on OK Button
 * ============================================================================
 *
 * These Plugin Parameters allow you to setup Common Events that activate using
 * Regions when pressing the OK button while standing on top of them or in
 * front of them. These let you create near universally interactable objects
 * using Regions, such as rivers to start up fishing events or locations to
 * places items on.
 *
 * ---
 *
 * Regions
 * 
 *   Regions 1 - 255:
 *   - Which Common Event does this region activate?
 *   - Use 0 to not activate any Common Events.
 *
 * ---
 *
 * Target Tile
 * 
 *   Target Tile:
 *   - Which tile should be checked for Common Event on OK Button?
 *     - Tile in front of player.
 *     - Tile player is standing on top of.
 *
 * ---
 *
 * ============================================================================
 * Plugin Parameters: Common Event on Touch
 * ============================================================================
 *
 * These Plugin Parameters allow you to setup Common Events that trigger when
 * stepping onto Region-marked tiles. These let you create custom effects that
 * will occur such as customized damage floors, traps, and/or events.
 * 
 * Areas marked with these regions will not allow random encounters to occur.
 * This is how RPG Maker works. Assuming you are not using plugins at all, by
 * putting on touch events all over the map, tiles with those on touch events
 * will not let random encounters trigger.
 *
 * ---
 *
 * Regions
 * 
 *   Regions 1 - 255:
 *   - Which Common Event does this region activate?
 *   - Use 0 to not activate any Common Events.
 *
 * ---
 *
 * ============================================================================
 * Plugin Parameters: Terrain Tag Settings
 * ============================================================================
 *
 * Terrain Tags are used in Database => Tilesets to mark certain tiles and
 * give them unique properties through terrain tags.
 *
 * ---
 *
 * Terrain Tag ID's
 * 
 *   Rope:
 *   - Which terrain tag number to use for ropes?
 *
 * ---
 *
 * ============================================================================
 * Terms of Use
 * ============================================================================
 *
 * 1. These plugins may be used in free or commercial games provided that they
 * have been acquired through legitimate means at VisuStella.com and/or any
 * other official approved VisuStella sources. Exceptions and special
 * circumstances that may prohibit usage will be listed on VisuStella.com.
 * 
 * 2. All of the listed coders found in the Credits section of this plugin must
 * be given credit in your games or credited as a collective under the name:
 * "VisuStella".
 * 
 * 3. You may edit the source code to suit your needs, so long as you do not
 * claim the source code belongs to you. VisuStella also does not take
 * responsibility for the plugin if any changes have been made to the plugin's
 * code, nor does VisuStella take responsibility for user-provided custom code
 * used for custom control effects including advanced JavaScript notetags
 * and/or plugin parameters that allow custom JavaScript code.
 * 
 * 4. You may NOT redistribute these plugins nor take code from this plugin to
 * use as your own. These plugins and their code are only to be downloaded from
 * VisuStella.com and other official/approved VisuStella sources. A list of
 * official/approved sources can also be found on VisuStella.com.
 *
 * 5. VisuStella is not responsible for problems found in your game due to
 * unintended usage, incompatibility problems with plugins outside of the
 * VisuStella MZ library, plugin versions that aren't up to date, nor
 * responsible for the proper working of compatibility patches made by any
 * third parties. VisuStella is not responsible for errors caused by any
 * user-provided custom code used for custom control effects including advanced
 * JavaScript notetags and/or plugin parameters that allow JavaScript code.
 *
 * 6. If a compatibility patch needs to be made through a third party that is
 * unaffiliated with VisuStella that involves using code from the VisuStella MZ
 * library, contact must be made with a member from VisuStella and have it
 * approved. The patch would be placed on VisuStella.com as a free download
 * to the public. Such patches cannot be sold for monetary gain, including
 * commissions, crowdfunding, and/or donations.
 *
 * ============================================================================
 * Credits
 * ============================================================================
 * 
 * If you are using this plugin, credit the following people in your game:
 * 
 * Team VisuStella
 * * Yanfly
 * * Arisu
 * * Olivia
 * * Irina
 *
 * ============================================================================
 * Changelog
 * ============================================================================
 * 
 * Version 1.26: September 3, 2021
 * * Bug Fixes!
 * ** "Step Towards Player" custom command should now work properly. Fix made
 *    by Arisu.
 * ** Having multiple region restriction notetags for a map will no longer
 *    cause others to lock out. Fix made by Arisu.
 * 
 * Version 1.25: July 30, 2021
 * * Bug Fixes!
 * ** Fixed a problem that caused the 'setSelfSwitchValue' and
 *    'setSelfVariableValue' functions to not work properly. Fix made by Irina.
 * 
 * Version 1.24: June 4, 2021
 * * Documentation Update!
 * ** Help file updated for new features.
 * ** Added extra clarification on which commands will go around the player
 *    character and which ones won't.
 * * New Move Route Custom Commands added by Arisu:
 * ** Crash Move (direction) Until Stop
 * ** Crash Move To: x, y
 * ** Crash Move To Event: x
 * *** These allow events to collide with the player character and trigger
 *     Event Touch events.
 * 
 * Version 1.23: May 21, 2021
 * * Bug Fixes!
 * ** Morphing by templates should no longer cause a crash. Fix made by Arisu.
 * 
 * Version 1.22: May 7, 2021
 * * Bug Fixes!
 * ** Plugin Commands for Event Label Visibility should now update without
 *    needing to take steps as per distance detection. Fix made by Arisu.
 * * Documentation Update!
 * ** Added clarity to "Common Event on Touch" Plugin Parameters.
 * *** Areas marked with these regions will not allow random encounters to
 *     occur. This is how RPG Maker works. Assuming you are not using plugins
 *     at all, by putting on touch events all over the map, tiles with those on
 *     touch events will not let random encounters trigger.
 * 
 * Version 1.21: March 12, 2021
 * * Bug Fixes!
 * ** Move until stop custom move routes should no longer cause crashes.
 *    Fix made by Arisu.
 * 
 * Version 1.20: February 26, 2021
 * * Bug Fixes!
 * ** Region Restrictions regarding Player Allow will no longer affect vehicle
 *    passability. Update made by Arisu.
 * 
 * Version 1.19: February 12, 2021
 * * Bug Fixes!
 * ** "Self Variable: Variable ID" plugin command's Map ID should now be able
 *    to use "0" to self reference the current map. Fix made by Olivia.
 * 
 * Version 1.18: February 5, 2021
 * * Bug Fixes!
 * ** Event icon plugin commands should now work properly. Fix made by Arisu.
 * * Documentation Update!
 * ** Added new "Features: Weighted Random Movement" section.
 * ** Help file updated for new features.
 * * New Features!
 * ** New Notetags added by Arisu:
 * *** <Random Move Weight: x>
 * **** If this tag is used on an event with random-type autonomous movement,
 *      then the event will stick closer to their home location (where they are
 *      located upon spawning on the map). How close they stick to their home
 *      location will depend on the weighted 'x' value.
 * *** <True Random Move>
 * **** If this tag is used on an event with random-type autonomous movement,
 *      then that event will ignore the effects of weighted randomized
 *      movement.
 * ** New Plugin Commands added by Arisu and sponsored by AndyL:
 * *** Event Timer: Change Speed
 * *** Event Timer: Expire Event Assign
 * *** Event Timer: Expire Event Clear
 * *** Event Timer: Frames Gain
 * *** Event Timer: Frames Set
 * *** Event Timer: Pause
 * *** Event Timer: Resume
 * **** The above Plugin Commands allow you to control the game timer better.
 * ** New Plugin Parameters added by Arisu:
 * *** Plugin Parameters > Movement > Event Movement > Random Move Weight
 * **** Use numbers between 0 and 1. Numbers closer to 1 stay closer to their
 *      home position.
 * 
 * Version 1.17: January 29, 2021
 * * Documentation Update!
 * ** Added "Do NOT insert quotes" to "Balloon: name" and "Pose: name".
 * ** Added Examples for extra clarification.
 * * Optimization Update!
 * ** When touch clicking an event on a map with multiple events, pathfinding
 *    will utilize the non-diagonal function for less resource consumption to
 *    prevent FPS frame drops. Fix made by Arisu.
 * 
 * Version 1.16: January 22, 2021
 * * Optimization Update!
 * ** When touch clicking multiple times on an impassable tile, pathfinding
 *    will utilize the non-diagonal function for less resource consumption to
 *    prevent FPS frame drops. Fix made by Arisu.
 * 
 * Version 1.15: January 1, 2021
 * * Bug Fixes!
 * ** Spawned events should now resume their automated self movement after
 *    being interacted with. Fix made by Yanfly.
 * * Documentation Update!
 * ** Help file updated for new features.
 * ** Help file updated for updated features.
 * * Feature Updates!
 * ** Collission checks for the Spawn Event Plugin Commands now account for
 *    the spawning event's Hitbox, too. Update made by Yanfly.
 * ** Spawn Event Plugin Commands adds a new parameter "Success Switch ID" to
 *    check if the spawning has been successful or not.
 * * New Features!
 * ** New Plugin Commands added by Yanfly!
 * *** Spawn Event: Spawn At Terrain Tag
 * *** Spawn Event: Despawn Terrain Tag(s)
 * **** These function similar to their region counterparts except they target
 *      terrain tags instead.
 * 
 * Version 1.14: December 18, 2020
 * * Bug Fixes!
 * ** Caching for event label positions now account for page index.
 *    Fix made by Yanfly.
 * * Documentation Update!
 * ** Added documentation for the new features!
 * * New Features!
 * ** New Plugin Commands added by Irina.
 * *** Follower: Set Global Chase
 * *** Follower: Set Target Chase
 * *** Follower: Set Control
 * *** Follower: Reset
 * **** These plugin commands allow you to change whether or not the followers
 *      will chase their intended targets and/or shift control over their
 *      movement route from the "Player" to the target follower.
 * 
 * Version 1.13: December 4, 2020
 * * Bug Fixes!
 * ** Caching for event label positions now account for one-screen maps.
 *    Fix made by Arisu.
 * 
 * Version 1.12: November 29, 2020
 * * Bug Fixes!
 * ** Click Triggers no longer work on erased events. Fix made by Arisu.
 * ** Erased events no longer have icons appear above their heads.
 *    Fix made by Arisu.
 * * Feature Update!
 * ** Initialization of the plugin's effects no only occur if the event's
 *    current page settings have been altered. Change made by Arisu.
 * * Optimization Update!
 * ** Plugin should run more optimized.
 * 
 * Version 1.11: November 15, 2020
 * * Bug Fixes!
 * ** Morph plugin command should no longer cause crashes. Fix made by Yanfly.
 * * Documentation Update!
 * ** Added documentation for the updated features!
 * * Feature Updates!
 * ** Updates to these Plugin Commands made by Yanfly:
 * *** Call Event: Remote Activation
 * *** Event Icon: Change
 * *** Event Icon: Delete
 * *** Event Location: Create
 * *** Event Location: Delete
 * *** Global Switch: Get Self Switch A B C D
 * *** Global Switch: Get Self Switch ID
 * *** Global Variable: Get Self Variable ID
 * *** Morph Event: Change
 * *** Morph Event: Remove
 * *** Self Switch: A B C D
 * *** Self Switch: Switch ID
 * *** Self Variable: Variable ID
 * **** All of the above Plugin Commands can now use 0 for their Event ID's in
 *      order to refer to the running event's ID value.
 * 
 * Version 1.10: November 1, 2020
 * * Bug Fixes!
 * ** Spawned Event preserve function now works properly. Fix made by Arisu.
 * 
 * Version 1.09: October 25, 2020
 * * Documentation Update
 * ** Added clarity on the notetags and comment tags on when their effects
 *    are present.
 * * Feature Update!
 * ** Event icons now have an unsmoothing property to them to make them
 *    look better. Update made by Irina.
 * 
 * Version 1.08: October 11, 2020
 * * Compatibility Update
 * ** Added failsafes for better compatibility.
 * 
 * Version 1.07: October 4, 2020
 * * Documentation Update!
 * ** Updated for the new features!
 * * Feature Update!
 * ** Data from deleted events will now be cleared and removed from maps if the
 *    events do not exist to prevent conflict with plugins from the VisuStella
 *    MZ library and other plugins. Feature added by Irina.
 * ** Move Route Custom Commands now support self variable values! If you wish
 *    to use a value from a self variable, insert \SelfVar[x] in place of the x
 *    in any of the below. This will only draw from the current event. If you 
 *    wish to draw data from outside event self variables, we recommend you
 *    use the \V[x] variant after using the Plugin Commands to draw data from
 *    them for the best accuracy.
 * * New Features!
 * ** New Plugin Parameter added by Yanfly!
 * *** Movement > Bitmap > Smoothing
 * **** Do you want to smooth or pixelate the map sprites? Pixelating them is
 *      better for zooming and tilting.
 * 
 * Version 1.06: September 27, 2020
 * * Bug Fixes!
 * ** Events & Movement Core no longer disables the Core Engine's Smart Event
 *    Collision plugin parameter. Fix made by Yanfly.
 * * Documentation Update!
 * ** Move Route Custom Commands updated with the new feature for inserting
 *    variable values.
 * * Feature Update!
 * ** Move Route Custom Commands now support $gameVariable.value(x) values.
 *    You can also just use \V[x] for variable values, too. Added by Irina.
 * 
 * Version 1.05: September 20, 2020
 * * Bug Fixes!
 * ** If player movement is disabled, mouse movement is disabled, too.
 *    Fix made by Arisu.
 * ** The region restriction notetags should be fixed and work again.
 *    Fix made by Arisu.
 * 
 * Version 1.04: September 13, 2020
 * * Feature Update!
 * * Some Move Route Custom Commands are updated to ignore spaces:
 * ** Jump To: x, y
 * ** Move To: x, y
 * ** Step Toward: x, y
 * ** Step Away From: x, y
 * ** Turn To: x, y
 * ** Turn Away From: x, y
 * ** Teleport To: x, y
 * *** These can now be written as x,y. There still needs to be a space between
 *     the : and x for parsing clarity, however.
 * *** Feature updated by Arisu with help from BlueMoon and Zeriab.
 * * New Features!
 * ** New 'Move Route Custom Commands' added by Arisu.
 * *** Fade In: x
 * *** Fade Out: x
 * *** Force Carry: On
 * *** Force Carry: Off
 * *** Force Dash: On
 * *** Force Dash: Off
 * ** New Plugin Commands added by Arisu.
 * *** Player Movement: Control
 * **** Enable or disable player control over the player character's movement.
 * *** Player Movement: Diagonal
 * **** Override settings to for player diagonal movement.
 * 
 * Version 1.03: September 6, 2020
 * * Bug Fixes!
 * ** Sleeping pose is now fixed and working! Fix made by Yanfly.
 * * Documentation Update!
 * ** Extended "Features: Self Switches and Variables" to explain how to use
 *    script calls to grab self switch information.
 * * New Features!
 * ** New Plugin Commands added by Yanfly:
 * *** Global Switch: Get Self Switch A B C D
 * *** Global Switch: Get Self Switch ID
 * *** Global Variable: Get Self Variable ID
 * **** These plugin commands allow you to transfer data stored in a self
 *      switch or Self Variable into a global switch or global variable.
 * 
 * Version 1.02: August 30, 2020
 * * Bug Fixes!
 * ** <Diagonal Movement: Off> notetag now works properly. Fix made by Yanfly.
 * ** Plugin Command "Event Label: Visible" now works properly. Fix made by
 *    Shaz.
 * ** Custom Move Route commands should now be working properly. Fix made by
 *    Shaz.
 * 
 * Version 1.01: August 23, 2020
 * * Bug Fixes!
 * ** Event Cache issues fixed upon loading a saved game. Fix made by Yanfly.
 *
 * Version 1.00: August 20, 2020
 * * Finished Plugin!
 *
 * ============================================================================
 * End of Helpfile
 * ============================================================================
 *
 * @ --------------------------------------------------------------------------
 *
 * @command AutoMoveEvents
 * @text Auto Movement: Events
 * @desc Allow/stop events from auto movement.
 *
 * @arg Value:str
 * @text Value
 * @type select
 * @option Allow
 * @value Allow
 * @option Stop
 * @value Stop
 * @option Toggle
 * @value Toggle
 * @desc Allow events to move automatically?
 * @default Allow
 *
 * @ --------------------------------------------------------------------------
 *
 * @command CallEvent
 * @text Call Event: Remote Activation
 * @desc Runs the page of a different event remotely.
 *
 * @arg MapId:eval
 * @text Map ID
 * @desc Target event's map. Use 0 for current map.
 * You may use JavaScript code.
 * @default 0
 *
 * @arg EventId:eval
 * @text Event ID
 * @desc The ID of the event to remotely run. Use 0 for current event. You may use JavaScript code.
 * @default 0
 *
 * @arg PageId:eval
 * @text Page ID
 * @desc The page of the remote event to run.
 * You may use JavaScript code.
 * @default 1
 *
 * @ --------------------------------------------------------------------------
 *
 * @command DashEnableToggle
 * @text Dash Enable: Toggle
 * @desc Enable/Disable Dashing on maps.
 *
 * @arg Value:str
 * @text Value
 * @type select
 * @option Enable
 * @value Enable
 * @option Disable
 * @value Disable
 * @option Toggle
 * @value Toggle
 * @desc What do you wish to change dashing to?
 * @default Enable
 *
 * @ --------------------------------------------------------------------------
 *
 * @command EventIconChange
 * @text Event Icon: Change
 * @desc Change the icon that appears on an event.
 *
 * @arg MapId:eval
 * @text Map ID
 * @desc The map the target map. Use 0 for current map.
 * You may use JavaScript code.
 * @default 0
 *
 * @arg EventId:eval
 * @text Event ID
 * @parent MapId:eval
 * @desc The ID of the target event.  Use 0 for current event.
 * You may use JavaScript code.
 * @default 0
 *
 * @arg IconIndex:eval
 * @text Icon Index
 * @desc Icon index used for the icon.
 * You may use JavaScript code.
 * @default 1
 *
 * @arg IconBufferX:eval
 * @text Buffer X
 * @parent IconIndex:eval
 * @desc How much to shift the X position by?
 * You may use JavaScript code.
 * @default 0
 *
 * @arg IconBufferY:eval
 * @text Buffer Y
 * @parent IconIndex:eval
 * @desc How much to shift the Y position by?
 * You may use JavaScript code.
 * @default 12
 *
 * @arg IconBlendMode:num
 * @text Blend Mode
 * @parent IconIndex:eval
 * @type select
 * @option 0 - Normal
 * @value 0
 * @option 1 - Additive
 * @value 1
 * @option 2 - Multiply
 * @value 2
 * @option 3 - Screen
 * @value 3
 * @desc What kind of blend mode do you wish to apply to the icon sprite?
 * @default 0
 *
 * @ --------------------------------------------------------------------------
 *
 * @command EventIconDelete
 * @text Event Icon: Delete
 * @desc Delete the icon that appears on an event.
 *
 * @arg MapId:eval
 * @text Map ID
 * @desc The map the target map. Use 0 for current map.
 * You may use JavaScript code.
 * @default 0
 *
 * @arg EventId:eval
 * @text Event ID
 * @parent MapId:eval
 * @desc The ID of the target event. Use 0 for current event.
 * You may use JavaScript code.
 * @default 0
 *
 * @ --------------------------------------------------------------------------
 *
 * @command EventLabelRefresh
 * @text Event Label: Refresh
 * @desc Refresh all Event Labels on screen.
 *
 * @ --------------------------------------------------------------------------
 *
 * @command EventLabelVisible
 * @text Event Label: Visible
 * @desc Change the visibility of Event Labels.
 *
 * @arg Visibility:str
 * @text Visibility
 * @type select
 * @option Visible
 * @value Visible
 * @option Hidden
 * @value Hidden
 * @option Toggle
 * @value Toggle
 * @desc What do you wish to change visibility to?
 * @default Visible
 *
 * @ --------------------------------------------------------------------------
 *
 * @command EventLocationSave
 * @text Event Location: Save
 * @desc Memorize an event's map location so it reappears there
 * the next time the map is loaded.
 *
 * @arg EventId:eval
 * @text Event ID
 * @desc The ID of the target event.
 * You may use JavaScript code.
 * @default 1
 *
 * @ --------------------------------------------------------------------------
 *
 * @command EventLocationCreate
 * @text Event Location: Create
 * @desc Creates a custom spawn location for a specific map's event
 * so it appears there the next time the map is loaded.
 *
 * @arg MapId:eval
 * @text Map ID
 * @desc The map the target map. Use 0 for current map.
 * You may use JavaScript code.
 * @default 0
 *
 * @arg EventId:eval
 * @text Event ID
 * @parent MapId:eval
 * @desc The ID of the target event. Use 0 for current event.
 * You may use JavaScript code.
 * @default 0
 *
 * @arg PosX:eval
 * @text X Coordinate
 * @parent MapId:eval
 * @desc The X coordinate of the event.
 * You may use JavaScript code.
 * @default 0
 *
 * @arg PosY:eval
 * @text Y Coordinate
 * @parent MapId:eval
 * @desc The Y coordinate of the event.
 * You may use JavaScript code.
 * @default 0
 *
 * @arg Direction:num
 * @text Direction
 * @parent MapId:eval
 * @type select
 * @option 1 - Lower Left
 * @value 1
 * @option 2 - Down
 * @value 2
 * @option 3 - Lower Right
 * @value 3
 * @option 4 - Left
 * @value 4
 * @option 6 - Right
 * @value 6
 * @option 7 - Upper Left
 * @value 7
 * @option 8 - Up
 * @value 8
 * @option 9 - Upper Right
 * @value 9
 * @desc The direction the event will be facing.
 * @default 2
 *
 * @arg Optional
 *
 * @arg PageId:eval
 * @text Page ID
 * @parent Optional
 * @desc The page of the event to set the move route to.
 * You may use JavaScript code.
 * @default 1
 *
 * @arg MoveRouteIndex:eval
 * @text Move Route Index
 * @parent Optional
 * @desc The point in the move route for this event to be at
 * if the page ID matches the rest of the page conditions.
 * @default 0
 *
 * @ --------------------------------------------------------------------------
 *
 * @command EventLocationDelete
 * @text Event Location: Delete
 * @desc Deletes an event's saved map location.
 * The event will reappear at its default location.
 *
 * @arg MapId:eval
 * @text Map ID
 * @desc The map the target map. Use 0 for current map.
 * You may use JavaScript code.
 * @default 0
 *
 * @arg EventId:eval
 * @text Event ID
 * @desc The ID of the target event. Use 0 for current event.
 * You may use JavaScript code.
 * @default 0
 *
 * @ --------------------------------------------------------------------------
 *
 * @command EventTimerExpireEvent
 * @text Event Timer: Expire Event Assign
 * @desc Sets a Common Event to run upon expiration.
 * Bypasses the default code if one is set.
 *
 * @arg CommonEventID:num
 * @text Common Event ID
 * @type common_event
 * @desc Select the Common Event to run upon the timer's expiration.
 * @default 1
 *
 * @ --------------------------------------------------------------------------
 *
 * @command EventTimerSpeed
 * @text Event Timer: Change Speed
 * @desc Changes the timer frame decrease (or increase) speed.
 *
 * @arg Speed:eval
 * @text Speed
 * @desc How many 1/60ths of a second does each frame increase or
 * decrease by? Negative decreases. Positive increases.
 * @default -1
 *
 * @ --------------------------------------------------------------------------
 *
 * @command EventTimerExpireClear
 * @text Event Timer: Expire Event Clear
 * @desc Clears any set to expire Common Event and instead,
 * run the default Game_Timer expiration code.
 *
 * @ --------------------------------------------------------------------------
 *
 * @command EventTimerFramesGain
 * @text Event Timer: Frames Gain
 * @desc Chooses how many frames, seconds, minutes, or hours
 * are gained or lost for the event timer.
 *
 * @arg Frames:eval
 * @text Frames
 * @desc How many 1/60ths of a second are gained/lost?
 * Positive for gain. Negative for lost. JavaScript allowed.
 * @default +0
 *
 * @arg Seconds:eval
 * @text Seconds
 * @desc How many seconds are gained/lost?
 * Positive for gain. Negative for lost. JavaScript allowed.
 * @default +0
 *
 * @arg Minutes:eval
 * @text Minutes
 * @desc How many minutes are gained/lost?
 * Positive for gain. Negative for lost. JavaScript allowed.
 * @default +0
 *
 * @arg Hours:eval
 * @text Hours
 * @desc How many hours are gained/lost?
 * Positive for gain. Negative for lost. JavaScript allowed.
 * @default +0
 *
 * @ --------------------------------------------------------------------------
 *
 * @command EventTimerFramesSet
 * @text Event Timer: Frames Set
 * @desc Chooses how many frames, seconds, minutes, or hours
 * are set for the event timer.
 *
 * @arg Frames:eval
 * @text Frames
 * @desc Set frame count to this value.
 * Each frame is 1/60th of a second. JavaScript allowed.
 * @default 0
 *
 * @arg Seconds:eval
 * @text Seconds
 * @desc Set seconds to this value.
 * JavaScript allowed.
 * @default 0
 *
 * @arg Minutes:eval
 * @text Minutes
 * @desc Set minutes to this value.
 * Each minute is 60 seconds. JavaScript allowed.
 * @default 0
 *
 * @arg Hours:eval
 * @text Hours
 * @desc Set hours to this value.
 * Each hour is 60 minutes. JavaScript allowed.
 * @default 0
 *
 * @ --------------------------------------------------------------------------
 *
 * @command EventTimerPause
 * @text Event Timer: Pause
 * @desc Pauses the current event timer, but does not stop it.
 *
 * @ --------------------------------------------------------------------------
 *
 * @command EventTimerResume
 * @text Event Timer: Resume
 * @desc Resumes the current event timer from the paused state.
 *
 * @ --------------------------------------------------------------------------
 *
 * @command FollowerSetGlobalChase
 * @text Follower: Set Global Chase
 * @desc Disables all followers from chasing the player
 * or reenables it.
 *
 * @arg Chase:eval
 * @text Chase
 * @type boolean
 * @on Chase
 * @off Don't Chase
 * @desc Sets all followers to chase the player or not.
 * @default false
 *
 * @ --------------------------------------------------------------------------
 *
 * @command FollowerSetTargetChase
 * @text Follower: Set Target Chase
 * @desc Disables target follower from chasing the player
 * or reenables it.
 *
 * @arg FollowerID:eval
 * @text Follower ID
 * @desc Select which follower ID to disable/reenable chasing for.
 * @default 1
 *
 * @arg Chase:eval
 * @text Chase
 * @type boolean
 * @on Chase
 * @off Don't Chase
 * @desc Sets target follower to chase its target or not.
 * @default false
 *
 * @ --------------------------------------------------------------------------
 *
 * @command FollowerSetControl
 * @text Follower: Set Control
 * @desc Sets the event commands to target a follower when "Player"
 * is selected as the target.
 *
 * @arg FollowerID:eval
 * @text Follower ID
 * @desc Select which follower ID to control.
 * 0 is the player.
 * @default 1
 *
 * @ --------------------------------------------------------------------------
 *
 * @command FollowerReset
 * @text Follower: Reset
 * @desc Resets all follower controls. Event Commands that target
 * the "Player" return to normal and followers chase again.
 *
 * @ --------------------------------------------------------------------------
 *
 * @command SwitchGetSelfSwitchABCD
 * @text Global Switch: Get Self Switch A B C D
 * @desc Gets the current ON/OFF value from a Self Switch and
 * stores it onto a Global Switch.
 *
 * @arg MapId:eval
 * @text Map ID
 * @desc The map the source map. Use 0 for current map.
 * You may use JavaScript code.
 * @default 0
 *
 * @arg EventId:eval
 * @text Event ID
 * @desc The ID of the source event. Use 0 for current event.
 * You may use JavaScript code.
 * @default 0
 *
 * @arg Letter:str
 * @text Letter
 * @type select
 * @option A
 * @value A
 * @option B
 * @value B
 * @option C
 * @value C
 * @option D
 * @value D
 * @desc Letter of the target event's Self Switch to obtain data from.
 * @default A
 *
 * @arg Break
 * @text -
 *
 * @arg TargetSwitchId:num
 * @text Target Switch ID
 * @type switch
 * @desc The ID of the target switch.
 * @default 1
 *
 * @ --------------------------------------------------------------------------
 *
 * @command SwitchGetSelfSwitchID
 * @text Global Switch: Get Self Switch ID
 * @desc Gets the current ON/OFF value from a Self Switch and
 * stores it onto a Global Switch.
 *
 * @arg MapId:eval
 * @text Map ID
 * @desc The map the source map. Use 0 for current map.
 * You may use JavaScript code.
 * @default 0
 *
 * @arg EventId:eval
 * @text Event ID
 * @desc The ID of the source event. Use 0 for current event.
 * You may use JavaScript code.
 * @default 0
 *
 * @arg SwitchId:num
 * @text Switch ID
 * @type switch
 * @desc The ID of the source switch.
 * @default 1
 *
 * @arg Break
 * @text -
 *
 * @arg TargetSwitchId:num
 * @text Target Switch ID
 * @type switch
 * @desc The ID of the target switch.
 * @default 1
 *
 * @ --------------------------------------------------------------------------
 *
 * @command VariableGetSelfVariableID
 * @text Global Variable: Get Self Variable ID
 * @desc Gets the current stored value from a Self Variable and
 * stores it onto a Global Variable.
 *
 * @arg MapId:eval
 * @text Map ID
 * @desc The map the source map. Use 0 for current map.
 * You may use JavaScript code.
 * @default 0
 *
 * @arg EventId:eval
 * @text Event ID
 * @desc The ID of the source event. Use 0 for current event.
 * You may use JavaScript code.
 * @default 0
 *
 * @arg VariableId:num
 * @text Variable ID
 * @type variable
 * @desc The ID of the source variable.
 * @default 1
 *
 * @arg Break
 * @text -
 *
 * @arg TargetVariableId:num
 * @text Target Variable ID
 * @type variable
 * @desc The ID of the target variable.
 * @default 1
 *
 * @ --------------------------------------------------------------------------
 *
 * @command MorphEventTo
 * @text Morph Event: Change
 * @desc Runs the page of a different event remotely.
 *
 * @arg Step1
 * @text Step 1: To Be Changed
 *
 * @arg Step1MapId:eval
 * @text Map ID
 * @parent Step1
 * @desc Target event's map. Use 0 for current map.
 * You may use JavaScript code.
 * @default 0
 *
 * @arg Step1EventId:eval
 * @text Event ID
 * @parent Step1
 * @desc The ID of the target event. Use 0 for current event.
 * You may use JavaScript code.
 * @default 0
 *
 * @arg Step2
 * @text Step 2: Change Into
 *
 * @arg TemplateName:str
 * @text Template Name
 * @parent Step2
 * @desc Name of the target event template to morph into.
 * Ignored if this is called "Untitled".
 * @default Untitled
 *
 * @arg Step2MapId:eval
 * @text Map ID
 * @parent Step2
 * @desc Target event's map. Use 0 for current map.
 * You may use JavaScript code.
 * @default 1
 *
 * @arg Step2EventId:eval
 * @text Event ID
 * @parent Step2
 * @desc The ID of the target event. Use 0 for current event.
 * You may use JavaScript code.
 * @default 0
 *
 * @arg Step2Preserve:eval
 * @text Preserve Morph
 * @parent Step2
 * @type boolean
 * @on Preserve
 * @off Expires
 * @desc Is the morph effect preserved?
 * Or does it expire upon leaving the map?
 * @default true
 *
 * @ --------------------------------------------------------------------------
 *
 * @command MorphEventRemove
 * @text Morph Event: Remove
 * @desc Remove the morph status of an event.
 *
 * @arg MapId:eval
 * @text Map ID
 * @parent Step1
 * @desc Target event's map. Use 0 for current map.
 * You may use JavaScript code.
 * @default 0
 *
 * @arg EventId:eval
 * @text Event ID
 * @parent Step1
 * @desc The ID of the event to remove morph from. Use 0 for current event. You may use JavaScript code.
 * @default 0
 *
 * @arg RemovePreserve:eval
 * @text Remove Preservation
 * @parent Step2
 * @type boolean
 * @on Remove
 * @off Contain
 * @desc Also remove the preservation effect?
 * @default true
 *
 * @ --------------------------------------------------------------------------
 *
 * @command PlayerIconChange
 * @text Player Icon: Change
 * @desc Change the icon that appears on on the player.
 *
 * @arg IconIndex:eval
 * @text Icon Index
 * @desc Icon index used for the icon.
 * You may use JavaScript code.
 * @default 1
 *
 * @arg IconBufferX:eval
 * @text Buffer X
 * @parent IconIndex:eval
 * @desc How much to shift the X position by?
 * You may use JavaScript code.
 * @default 0
 *
 * @arg IconBufferY:eval
 * @text Buffer Y
 * @parent IconIndex:eval
 * @desc How much to shift the Y position by?
 * You may use JavaScript code.
 * @default 12
 *
 * @arg IconBlendMode:num
 * @text Blend Mode
 * @parent IconIndex:eval
 * @type select
 * @option 0 - Normal
 * @value 0
 * @option 1 - Additive
 * @value 1
 * @option 2 - Multiply
 * @value 2
 * @option 3 - Screen
 * @value 3
 * @desc What kind of blend mode do you wish to apply to the icon sprite?
 * @default 0
 *
 * @ --------------------------------------------------------------------------
 *
 * @command PlayerIconDelete
 * @text Player Icon: Delete
 * @desc Delete the icon that appears on the player.
 *
 * @ --------------------------------------------------------------------------
 *
 * @command PlayerMovementChange
 * @text Player Movement: Control
 * @desc Enable or disable player control over the player character's movement.
 *
 * @arg Enable:eval
 * @text Enable?
 * @type boolean
 * @on Enable
 * @off Disable
 * @desc Let the player control where the player character moves?
 * @default true
 *
 * @ --------------------------------------------------------------------------
 *
 * @command PlayerMovementDiagonal
 * @text Player Movement: Diagonal
 * @desc Override settings to for player diagonal movement.
 *
 * @arg Setting:str
 * @text Setting
 * @type select
 * @option Default: Whatever the Map Uses
 * @value default
 * @option Forcefully Disable Diagonal Movement
 * @value disable
 * @option Forcefully Enable Diagonal Movement
 * @value enable
 * @desc How do you want to change diagonal movement?
 * @default default
 *
 * @ --------------------------------------------------------------------------
 *
 * @command SelfSwitchABCD
 * @text Self Switch: A B C D
 * @desc Change the Self Switch of a different event.
 *
 * @arg MapId:eval
 * @text Map ID
 * @desc The map the target map. Use 0 for current map.
 * You may use JavaScript code.
 * @default 0
 *
 * @arg EventId:eval
 * @text Event ID
 * @desc The ID of the target event. Use 0 for current event.
 * You may use JavaScript code.
 * @default 0
 *
 * @arg Letter:str
 * @text Letter
 * @type select
 * @option A
 * @value A
 * @option B
 * @value B
 * @option C
 * @value C
 * @option D
 * @value D
 * @desc Letter of the target event's Self Switch to change.
 * @default A
 *
 * @arg Break
 * @text -
 *
 * @arg Value:str
 * @text Value
 * @type select
 * @option ON
 * @value ON
 * @option OFF
 * @value OFF
 * @option Toggle
 * @value Toggle
 * @desc What value do you want to set the Self Switch to?
 * @default ON
 *
 * @ --------------------------------------------------------------------------
 *
 * @command SelfSwitchID
 * @text Self Switch: Switch ID
 * @desc Change the Self Switch of a different event.
 *
 * @arg MapId:eval
 * @text Map ID
 * @desc The map the target map. Use 0 for current map.
 * You may use JavaScript code.
 * @default 0
 *
 * @arg EventId:eval
 * @text Event ID
 * @desc The ID of the target event. Use 0 for current event.
 * You may use JavaScript code.
 * @default 0
 *
 * @arg SwitchId:num
 * @text Switch ID
 * @type switch
 * @desc The ID of the target switch.
 * @default 1
 *
 * @arg Break
 * @text -
 *
 * @arg Value:str
 * @text Value
 * @type select
 * @option ON
 * @value ON
 * @option OFF
 * @value OFF
 * @option Toggle
 * @value Toggle
 * @desc What value do you want to set the Self Switch to?
 * @default ON
 *
 * @ --------------------------------------------------------------------------
 *
 * @command SelfVariableID
 * @text Self Variable: Variable ID
 * @desc Change the Self Variable of a different event.
 *
 * @arg MapId:eval
 * @text Map ID
 * @desc The map the target map. Use 0 for current map.
 * You may use JavaScript code.
 * @default 0
 *
 * @arg EventId:eval
 * @text Event ID
 * @desc The ID of the target event. Use 0 for current event.
 * You may use JavaScript code.
 * @default 0
 *
 * @arg VariableId:num
 * @text Variable ID
 * @type variable
 * @desc The ID of the target variable.
 * @default 1
 *
 * @arg Break
 * @text -
 *
 * @arg Operation:str
 * @text Operation
 * @type select
 * @option = Set
 * @value =
 * @option + Add
 * @value +
 * @option - Subtract
 * @value -
 * @option * Multiply
 * @value *
 * @option / Divide
 * @value /
 * @option % Modulus
 * @value %
 * @desc Set the operation used.
 * @default =
 *
 * @arg Break2
 * @text -
 *
 * @arg Value:eval
 * @text Value
 * @desc Insert the value to modify the Self Variable by.
 * You may use JavaScript code.
 * @default 0
 *
 * @ --------------------------------------------------------------------------
 *
 * @command SpawnEventAtXY
 * @text Spawn Event: Spawn At X, Y
 * @desc Spawns desired event at X, Y location on the current map.
 *
 * @arg Step1
 * @text Step 1: Spawned Event
 *
 * @arg TemplateName:str
 * @text Template Name
 * @parent Step1
 * @desc Name of the target event template to spawn as.
 * Ignored if this is called "Untitled".
 * @default Untitled
 *
 * @arg MapId:eval
 * @text Map ID
 * @parent Step1
 * @desc Target event's map to be used as reference.
 * You may use JavaScript code.
 * @default 1
 *
 * @arg EventId:eval
 * @text Event ID
 * @parent Step1
 * @desc The ID of the target event to be used as reference.
 * You may use JavaScript code.
 * @default 1
 *
 * @arg Step2
 * @text Step 2: Location
 *
 * @arg PosX:eval
 * @text X Coordinate
 * @parent Step2
 * @type combo
 * @option $gamePlayer.frontX()
 * @option $gamePlayer.backX()
 * @option Math.randomInt($gameMap.width())
 * @option 0
 * @desc Target Location to spawn at.
 * You may use JavaScript code.
 * @default $gamePlayer.frontX()
 *
 * @arg PosY:eval
 * @text Y Coordinate
 * @parent Step2
 * @type combo
 * @option $gamePlayer.frontY()
 * @option $gamePlayer.backY()
 * @option Math.randomInt($gameMap.height())
 * @option 0
 * @desc Target Location to spawn at.
 * You may use JavaScript code.
 * @default $gamePlayer.frontY()
 *
 * @arg Collision:eval
 * @text Check Event Collision
 * @parent Step2
 * @type boolean
 * @on Check
 * @off Ignore
 * @desc Check collision with any other events and player?
 * @default true
 *
 * @arg Passability:eval
 * @text Check Passability
 * @parent Step2
 * @type boolean
 * @on Check
 * @off Ignore
 * @desc Check passability of the target location.
 * @default true
 *
 * @arg Preserve:eval
 * @text Preserve Spawn
 * @parent Step2
 * @type boolean
 * @on Preserve
 * @off Expires
 * @desc Is the spawned event preserved?
 * Or does it expire upon leaving the map?
 * @default true
 *
 * @arg Step3
 * @text Step 3: Success Check
 *
 * @arg SuccessSwitchId:num
 * @text Success Switch ID
 * @parent Step3
 * @type switch
 * @desc Target switch ID to record spawning success.
 * Ignore if ID is 0. OFF means failed. ON means success.
 * @default 0
 *
 * @ --------------------------------------------------------------------------
 *
 * @command SpawnEventAtRegion
 * @text Spawn Event: Spawn At Region
 * @desc Spawns desired event at a random region-marked location on the current map.
 *
 * @arg Step1
 * @text Step 1: Spawned Event
 *
 * @arg TemplateName:str
 * @text Template Name
 * @parent Step1
 * @desc Name of the target event template to spawn as.
 * Ignored if this is called "Untitled".
 * @default Untitled
 *
 * @arg MapId:eval
 * @text Map ID
 * @parent Step1
 * @desc Target event's map.
 * You may use JavaScript code.
 * @default 1
 *
 * @arg EventId:eval
 * @text Event ID
 * @parent Step1
 * @desc The ID of the target event.
 * You may use JavaScript code.
 * @default 1
 *
 * @arg Step2
 * @text Step 2: Location
 *
 * @arg Region:arraynum
 * @text Region ID(s)
 * @parent Step2
 * @type number[]
 * @min 0
 * @max 255
 * @desc Pick region(s) to spawn this event at.
 * @default ["1"]
 *
 * @arg Collision:eval
 * @text Check Event Collision
 * @parent Step2
 * @type boolean
 * @on Check
 * @off Ignore
 * @desc Check collision with any other events and player?
 * @default true
 *
 * @arg Passability:eval
 * @text Check Passability
 * @parent Step2
 * @type boolean
 * @on Check
 * @off Ignore
 * @desc Check passability of the target location.
 * @default true
 *
 * @arg Preserve:eval
 * @text Preserve Spawn
 * @parent Step2
 * @type boolean
 * @on Preserve
 * @off Expires
 * @desc Is the spawned event preserved?
 * Or does it expire upon leaving the map?
 * @default true
 *
 * @arg Step3
 * @text Step 3: Success Check
 *
 * @arg SuccessSwitchId:num
 * @text Success Switch ID
 * @parent Step3
 * @type switch
 * @desc Target switch ID to record spawning success.
 * Ignore if ID is 0. OFF means failed. ON means success.
 * @default 0
 *
 * @ --------------------------------------------------------------------------
 *
 * @command SpawnEventAtTerrainTag
 * @text Spawn Event: Spawn At Terrain Tag
 * @desc Spawns desired event at a random terrain tag-marked location on the current map.
 *
 * @arg Step1
 * @text Step 1: Spawned Event
 *
 * @arg TemplateName:str
 * @text Template Name
 * @parent Step1
 * @desc Name of the target event template to spawn as.
 * Ignored if this is called "Untitled".
 * @default Untitled
 *
 * @arg MapId:eval
 * @text Map ID
 * @parent Step1
 * @desc Target event's map.
 * You may use JavaScript code.
 * @default 1
 *
 * @arg EventId:eval
 * @text Event ID
 * @parent Step1
 * @desc The ID of the target event.
 * You may use JavaScript code.
 * @default 1
 *
 * @arg Step2
 * @text Step 2: Location
 *
 * @arg TerrainTags:arraynum
 * @text Terrain Tag(s)
 * @parent Step2
 * @type number[]
 * @min 0
 * @max 7
 * @desc Pick terrain tag(s) to spawn this event at.
 * Insert numbers between 0 and 7.
 * @default ["1"]
 *
 * @arg Collision:eval
 * @text Check Event Collision
 * @parent Step2
 * @type boolean
 * @on Check
 * @off Ignore
 * @desc Check collision with any other events and player?
 * @default true
 *
 * @arg Passability:eval
 * @text Check Passability
 * @parent Step2
 * @type boolean
 * @on Check
 * @off Ignore
 * @desc Check passability of the target location.
 * @default true
 *
 * @arg Preserve:eval
 * @text Preserve Spawn
 * @parent Step2
 * @type boolean
 * @on Preserve
 * @off Expires
 * @desc Is the spawned event preserved?
 * Or does it expire upon leaving the map?
 * @default true
 *
 * @arg Step3
 * @text Step 3: Success Check
 *
 * @arg SuccessSwitchId:num
 * @text Success Switch ID
 * @parent Step3
 * @type switch
 * @desc Target switch ID to record spawning success.
 * Ignore if ID is 0. OFF means failed. ON means success.
 * @default 0
 *
 * @ --------------------------------------------------------------------------
 *
 * @command SpawnEventDespawnEventID
 * @text Spawn Event: Despawn Event ID
 * @desc Despawns the selected Event ID on the current map.
 *
 * @arg EventID:eval
 * @text Event ID
 * @type combo
 * @option $gameMap.firstSpawnedEventID()
 * @option $gameMap.lastSpawnedEventID()
 * @option 1001
 * @desc The ID of the target event.
 * You may use JavaScript code.
 * @default $gameMap.lastSpawnedEventID()
 *
 * @ --------------------------------------------------------------------------
 *
 * @command SpawnEventDespawnAtXY
 * @text Spawn Event: Despawn At X, Y
 * @desc Despawns any spawned event(s) at X, Y location on the current map.
 *
 * @arg PosX:eval
 * @text X Coordinate
 * @parent Step2
 * @type combo
 * @option $gamePlayer.frontX()
 * @option $gamePlayer.backX()
 * @option Math.randomInt($gameMap.width())
 * @option 0
 * @desc Target Location to despawn at.
 * You may use JavaScript code.
 * @default $gamePlayer.frontX()
 *
 * @arg PosY:eval
 * @text Y Coordinate
 * @parent Step2
 * @type combo
 * @option $gamePlayer.frontY()
 * @option $gamePlayer.backY()
 * @option Math.randomInt($gameMap.height())
 * @option 0
 * @desc Target Location to despawn at.
 * You may use JavaScript code.
 * @default $gamePlayer.frontY()
 *
 * @ --------------------------------------------------------------------------
 *
 * @command SpawnEventDespawnRegions
 * @text Spawn Event: Despawn Region(s)
 * @desc Despawns the selected Region(s) on the current map.
 *
 * @arg Region:arraynum
 * @text Region ID(s)
 * @parent Step2
 * @type number[]
 * @min 0
 * @max 255
 * @desc Pick region(s) and despawn everything inside it.
 * @default ["1"]
 *
 * @ --------------------------------------------------------------------------
 *
 * @command SpawnEventDespawnTerrainTags
 * @text Spawn Event: Despawn Terrain Tag(s)
 * @desc Despawns the selected Terrain Tags(s) on the current map.
 *
 * @arg TerrainTags:arraynum
 * @text Terrain Tag(s)
 * @parent Step2
 * @type number[]
 * @min 0
 * @max 7
 * @desc Pick terrain tag(s) and despawn everything inside it.
 * Insert numbers between 0 and 7.
 * @default ["1"]
 *
 * @ --------------------------------------------------------------------------
 *
 * @command SpawnEventDespawnEverything
 * @text Spawn Event: Despawn Everything
 * @desc Despawns all spawned events on the current map.
 *
 * @ --------------------------------------------------------------------------
 *
 * @ ==========================================================================
 * @ Plugin Parameters
 * @ ==========================================================================
 *
 * @param BreakHead
 * @text --------------------------
 * @default ----------------------------------
 *
 * @param EventsMoveCore
 * @default Plugin Parameters
 *
 * @param ATTENTION
 * @default READ THE HELP FILE
 *
 * @param BreakSettings
 * @text --------------------------
 * @default ----------------------------------
 *
 * @param Label:struct
 * @text Event Label Settings
 * @type struct<Label>
 * @desc Choose settings regarding the Event Labels.
 * @default {"FontSize:num":"22","IconSize:num":"26","LineHeight:num":"30","OffsetX:num":"0","OffsetY:num":"12","OpacitySpeed:num":"16","VisibleRange:num":"30"}
 *
 * @param Icon:struct
 * @text Event Icon Settings
 * @type struct<Icon>
 * @desc Choose settings regarding the Event Icons.
 * @default {"BufferX:num":"0","BufferY:num":"12","BlendMode:num":"0"}
 *
 * @param Template:struct
 * @text Event Template Settings
 * @type struct<Template>
 * @desc Choose settings regarding Event Templates.
 * @default {"Settings":"","PreloadMaps:arraynum":"[\"1\"]","Prefabs":"","List:arraystruct":"[]","JavaScript":"","PreCopyJS:func":"\"// Declare Constants\\nconst mapId = arguments[1];\\nconst eventId = arguments[2];\\nconst target = arguments[3];\\nconst player = $gamePlayer;\\n\\n// Perform Actions\\n\"","PostCopyJS:func":"\"// Declare Constants\\nconst mapId = arguments[1];\\nconst eventId = arguments[2];\\nconst target = arguments[3];\\nconst player = $gamePlayer;\\n\\n// Perform Actions\\n\"","PreMorphJS:func":"\"// Declare Constants\\nconst mapId = arguments[1];\\nconst eventId = arguments[2];\\nconst target = arguments[3];\\nconst player = $gamePlayer;\\n\\n// Perform Actions\\n\"","PostMorphJS:func":"\"// Declare Constants\\nconst mapId = arguments[1];\\nconst eventId = arguments[2];\\nconst target = arguments[3];\\nconst player = $gamePlayer;\\n\\n// Perform Actions\\n\"","PreSpawnJS:func":"\"// Declare Constants\\nconst mapId = arguments[1];\\nconst eventId = arguments[2];\\nconst target = arguments[3];\\nconst player = $gamePlayer;\\n\\n// Perform Actions\\n\"","PostSpawnJS:func":"\"// Declare Constants\\nconst mapId = arguments[1];\\nconst eventId = arguments[2];\\nconst target = arguments[3];\\nconst player = $gamePlayer;\\n\\n// Perform Actions\\n\""}
 *
 * @param EventBreak
 * @text --------------------------
 * @default ----------------------------------
 *
 * @param Movement:struct
 * @text Movement Settings
 * @type struct<Movement>
 * @desc Change the rules regarding movement in the game.
 * @default {"Dir8":"","EnableDir8:eval":"true","StrictCollision:eval":"true","FavorHorz:eval":"true","SlowerSpeed:eval":"false","DiagonalSpeedMultiplier:num":"0.85","AutoMove":"","StopAutoMoveEvents:eval":"true","StopAutoMoveMessages:eval":"true","Bitmap":"","BitmapSmoothing:eval":"false","Dash":"","DashModifier:num":"+1.0","EnableDashTilt:eval":"true","TiltLeft:num":"-0.15","TiltRight:num":"0.15","TiltVert:num":"0.05","EventMove":"","RandomMoveWeight:num":"0.10","Shadows":"","ShowShadows:eval":"true","DefaultShadow:str":"Shadow1","TurnInPlace":"","EnableTurnInPlace:eval":"false","TurnInPlaceDelay:num":"10","Vehicle":"","BoatSpeed:num":"4.0","ShipSpeed:num":"5.0","AirshipSpeed:num":"6.0"}
 *
 * @param VS8:struct
 * @text VisuStella 8-Dir Settings
 * @type struct<VS8>
 * @desc Choose settings regarding VisuStella 8-Directional Sprites.
 * @default {"Balloons":"","AutoBalloon:eval":"true","BalloonOffsetX:num":"0","BalloonOffsetY:num":"12","Icons":"","AutoBuffer:eval":"true","CarryPose:eval":"true"}
 *
 * @param MovementBreak
 * @text --------------------------
 * @default ----------------------------------
 *
 * @param Region:struct
 * @text Region Rulings
 * @type struct<Region>
 * @desc Choose settings regarding regions.
 * @default {"Allow":"","AllAllow:arraynum":"[]","WalkAllow:arraynum":"[]","PlayerAllow:arraynum":"[]","EventAllow:arraynum":"[]","VehicleAllow:arraynum":"[]","BoatAllow:arraynum":"[]","ShipAllow:arraynum":"[]","AirshipAllow:arraynum":"[]","Forbid":"","AllForbid:arraynum":"[]","WalkForbid:arraynum":"[]","PlayerForbid:arraynum":"[]","EventForbid:arraynum":"[]","VehicleForbid:arraynum":"[]","BoatForbid:arraynum":"[]","ShipForbid:arraynum":"[]","AirshipForbid:arraynum":"[]","Dock":"","VehicleDock:arraynum":"[]","BoatDock:arraynum":"[]","BoatDockRegionOnly:eval":"false","ShipDock:arraynum":"[]","ShipDockRegionOnly:eval":"false","AirshipDock:arraynum":"[]","AirshipDockRegionOnly:eval":"false"}
 *
 * @param RegionOk:struct
 * @text Common Event on OK Button
 * @parent Region:struct
 * @type struct<RegionCommonEvent>
 * @desc Set Common Events that activate upon pressing the
 * OK button while standing on top of designated regions.
 * @default {"Region1:num":"0","Region2:num":"0","Region3:num":"0","Region4:num":"0","Region5:num":"0","Region6:num":"0","Region7:num":"0","Region8:num":"0","Region9:num":"0","Region10:num":"0","Region11:num":"0","Region12:num":"0","Region13:num":"0","Region14:num":"0","Region15:num":"0","Region16:num":"0","Region17:num":"0","Region18:num":"0","Region19:num":"0","Region20:num":"0","Region21:num":"0","Region22:num":"0","Region23:num":"0","Region24:num":"0","Region25:num":"0","Region26:num":"0","Region27:num":"0","Region28:num":"0","Region29:num":"0","Region30:num":"0","Region31:num":"0","Region32:num":"0","Region33:num":"0","Region34:num":"0","Region35:num":"0","Region36:num":"0","Region37:num":"0","Region38:num":"0","Region39:num":"0","Region40:num":"0","Region41:num":"0","Region42:num":"0","Region43:num":"0","Region44:num":"0","Region45:num":"0","Region46:num":"0","Region47:num":"0","Region48:num":"0","Region49:num":"0","Region50:num":"0","Region51:num":"0","Region52:num":"0","Region53:num":"0","Region54:num":"0","Region55:num":"0","Region56:num":"0","Region57:num":"0","Region58:num":"0","Region59:num":"0","Region60:num":"0","Region61:num":"0","Region62:num":"0","Region63:num":"0","Region64:num":"0","Region65:num":"0","Region66:num":"0","Region67:num":"0","Region68:num":"0","Region69:num":"0","Region70:num":"0","Region71:num":"0","Region72:num":"0","Region73:num":"0","Region74:num":"0","Region75:num":"0","Region76:num":"0","Region77:num":"0","Region78:num":"0","Region79:num":"0","Region80:num":"0","Region81:num":"0","Region82:num":"0","Region83:num":"0","Region84:num":"0","Region85:num":"0","Region86:num":"0","Region87:num":"0","Region88:num":"0","Region89:num":"0","Region90:num":"0","Region91:num":"0","Region92:num":"0","Region93:num":"0","Region94:num":"0","Region95:num":"0","Region96:num":"0","Region97:num":"0","Region98:num":"0","Region99:num":"0","Region100:num":"0","Region101:num":"0","Region102:num":"0","Region103:num":"0","Region104:num":"0","Region105:num":"0","Region106:num":"0","Region107:num":"0","Region108:num":"0","Region109:num":"0","Region110:num":"0","Region111:num":"0","Region112:num":"0","Region113:num":"0","Region114:num":"0","Region115:num":"0","Region116:num":"0","Region117:num":"0","Region118:num":"0","Region119:num":"0","Region120:num":"0","Region121:num":"0","Region122:num":"0","Region123:num":"0","Region124:num":"0","Region125:num":"0","Region126:num":"0","Region127:num":"0","Region128:num":"0","Region129:num":"0","Region130:num":"0","Region131:num":"0","Region132:num":"0","Region133:num":"0","Region134:num":"0","Region135:num":"0","Region136:num":"0","Region137:num":"0","Region138:num":"0","Region139:num":"0","Region140:num":"0","Region141:num":"0","Region142:num":"0","Region143:num":"0","Region144:num":"0","Region145:num":"0","Region146:num":"0","Region147:num":"0","Region148:num":"0","Region149:num":"0","Region150:num":"0","Region151:num":"0","Region152:num":"0","Region153:num":"0","Region154:num":"0","Region155:num":"0","Region156:num":"0","Region157:num":"0","Region158:num":"0","Region159:num":"0","Region160:num":"0","Region161:num":"0","Region162:num":"0","Region163:num":"0","Region164:num":"0","Region165:num":"0","Region166:num":"0","Region167:num":"0","Region168:num":"0","Region169:num":"0","Region170:num":"0","Region171:num":"0","Region172:num":"0","Region173:num":"0","Region174:num":"0","Region175:num":"0","Region176:num":"0","Region177:num":"0","Region178:num":"0","Region179:num":"0","Region180:num":"0","Region181:num":"0","Region182:num":"0","Region183:num":"0","Region184:num":"0","Region185:num":"0","Region186:num":"0","Region187:num":"0","Region188:num":"0","Region189:num":"0","Region190:num":"0","Region191:num":"0","Region192:num":"0","Region193:num":"0","Region194:num":"0","Region195:num":"0","Region196:num":"0","Region197:num":"0","Region198:num":"0","Region199:num":"0","Region200:num":"0","Region201:num":"0","Region202:num":"0","Region203:num":"0","Region204:num":"0","Region205:num":"0","Region206:num":"0","Region207:num":"0","Region208:num":"0","Region209:num":"0","Region210:num":"0","Region211:num":"0","Region212:num":"0","Region213:num":"0","Region214:num":"0","Region215:num":"0","Region216:num":"0","Region217:num":"0","Region218:num":"0","Region219:num":"0","Region220:num":"0","Region221:num":"0","Region222:num":"0","Region223:num":"0","Region224:num":"0","Region225:num":"0","Region226:num":"0","Region227:num":"0","Region228:num":"0","Region229:num":"0","Region230:num":"0","Region231:num":"0","Region232:num":"0","Region233:num":"0","Region234:num":"0","Region235:num":"0","Region236:num":"0","Region237:num":"0","Region238:num":"0","Region239:num":"0","Region240:num":"0","Region241:num":"0","Region242:num":"0","Region243:num":"0","Region244:num":"0","Region245:num":"0","Region246:num":"0","Region247:num":"0","Region248:num":"0","Region249:num":"0","Region250:num":"0","Region251:num":"0","Region252:num":"0","Region253:num":"0","Region254:num":"0","Region255:num":"0"}
 *
 * @param RegionOkTarget:str
 * @text Target Tile
 * @parent RegionOk:struct
 * @type select
 * @option Tile in front of player.
 * @value front
 * @option Tile player is standing on top of.
 * @value standing
 * @desc Which tile should be checked for
 * Common Event on OK Button?
 * @default front
 *
 * @param RegionTouch:struct
 * @text Common Event on Touch
 * @parent Region:struct
 * @type struct<RegionCommonEvent>
 * @desc Set Common Events that activate upon stepping the tiles
 * marked by the designated regions.
 * @default {"Region1:num":"0","Region2:num":"0","Region3:num":"0","Region4:num":"0","Region5:num":"0","Region6:num":"0","Region7:num":"0","Region8:num":"0","Region9:num":"0","Region10:num":"0","Region11:num":"0","Region12:num":"0","Region13:num":"0","Region14:num":"0","Region15:num":"0","Region16:num":"0","Region17:num":"0","Region18:num":"0","Region19:num":"0","Region20:num":"0","Region21:num":"0","Region22:num":"0","Region23:num":"0","Region24:num":"0","Region25:num":"0","Region26:num":"0","Region27:num":"0","Region28:num":"0","Region29:num":"0","Region30:num":"0","Region31:num":"0","Region32:num":"0","Region33:num":"0","Region34:num":"0","Region35:num":"0","Region36:num":"0","Region37:num":"0","Region38:num":"0","Region39:num":"0","Region40:num":"0","Region41:num":"0","Region42:num":"0","Region43:num":"0","Region44:num":"0","Region45:num":"0","Region46:num":"0","Region47:num":"0","Region48:num":"0","Region49:num":"0","Region50:num":"0","Region51:num":"0","Region52:num":"0","Region53:num":"0","Region54:num":"0","Region55:num":"0","Region56:num":"0","Region57:num":"0","Region58:num":"0","Region59:num":"0","Region60:num":"0","Region61:num":"0","Region62:num":"0","Region63:num":"0","Region64:num":"0","Region65:num":"0","Region66:num":"0","Region67:num":"0","Region68:num":"0","Region69:num":"0","Region70:num":"0","Region71:num":"0","Region72:num":"0","Region73:num":"0","Region74:num":"0","Region75:num":"0","Region76:num":"0","Region77:num":"0","Region78:num":"0","Region79:num":"0","Region80:num":"0","Region81:num":"0","Region82:num":"0","Region83:num":"0","Region84:num":"0","Region85:num":"0","Region86:num":"0","Region87:num":"0","Region88:num":"0","Region89:num":"0","Region90:num":"0","Region91:num":"0","Region92:num":"0","Region93:num":"0","Region94:num":"0","Region95:num":"0","Region96:num":"0","Region97:num":"0","Region98:num":"0","Region99:num":"0","Region100:num":"0","Region101:num":"0","Region102:num":"0","Region103:num":"0","Region104:num":"0","Region105:num":"0","Region106:num":"0","Region107:num":"0","Region108:num":"0","Region109:num":"0","Region110:num":"0","Region111:num":"0","Region112:num":"0","Region113:num":"0","Region114:num":"0","Region115:num":"0","Region116:num":"0","Region117:num":"0","Region118:num":"0","Region119:num":"0","Region120:num":"0","Region121:num":"0","Region122:num":"0","Region123:num":"0","Region124:num":"0","Region125:num":"0","Region126:num":"0","Region127:num":"0","Region128:num":"0","Region129:num":"0","Region130:num":"0","Region131:num":"0","Region132:num":"0","Region133:num":"0","Region134:num":"0","Region135:num":"0","Region136:num":"0","Region137:num":"0","Region138:num":"0","Region139:num":"0","Region140:num":"0","Region141:num":"0","Region142:num":"0","Region143:num":"0","Region144:num":"0","Region145:num":"0","Region146:num":"0","Region147:num":"0","Region148:num":"0","Region149:num":"0","Region150:num":"0","Region151:num":"0","Region152:num":"0","Region153:num":"0","Region154:num":"0","Region155:num":"0","Region156:num":"0","Region157:num":"0","Region158:num":"0","Region159:num":"0","Region160:num":"0","Region161:num":"0","Region162:num":"0","Region163:num":"0","Region164:num":"0","Region165:num":"0","Region166:num":"0","Region167:num":"0","Region168:num":"0","Region169:num":"0","Region170:num":"0","Region171:num":"0","Region172:num":"0","Region173:num":"0","Region174:num":"0","Region175:num":"0","Region176:num":"0","Region177:num":"0","Region178:num":"0","Region179:num":"0","Region180:num":"0","Region181:num":"0","Region182:num":"0","Region183:num":"0","Region184:num":"0","Region185:num":"0","Region186:num":"0","Region187:num":"0","Region188:num":"0","Region189:num":"0","Region190:num":"0","Region191:num":"0","Region192:num":"0","Region193:num":"0","Region194:num":"0","Region195:num":"0","Region196:num":"0","Region197:num":"0","Region198:num":"0","Region199:num":"0","Region200:num":"0","Region201:num":"0","Region202:num":"0","Region203:num":"0","Region204:num":"0","Region205:num":"0","Region206:num":"0","Region207:num":"0","Region208:num":"0","Region209:num":"0","Region210:num":"0","Region211:num":"0","Region212:num":"0","Region213:num":"0","Region214:num":"0","Region215:num":"0","Region216:num":"0","Region217:num":"0","Region218:num":"0","Region219:num":"0","Region220:num":"0","Region221:num":"0","Region222:num":"0","Region223:num":"0","Region224:num":"0","Region225:num":"0","Region226:num":"0","Region227:num":"0","Region228:num":"0","Region229:num":"0","Region230:num":"0","Region231:num":"0","Region232:num":"0","Region233:num":"0","Region234:num":"0","Region235:num":"0","Region236:num":"0","Region237:num":"0","Region238:num":"0","Region239:num":"0","Region240:num":"0","Region241:num":"0","Region242:num":"0","Region243:num":"0","Region244:num":"0","Region245:num":"0","Region246:num":"0","Region247:num":"0","Region248:num":"0","Region249:num":"0","Region250:num":"0","Region251:num":"0","Region252:num":"0","Region253:num":"0","Region254:num":"0","Region255:num":"0"}
 *
 * @param TerrainTag:struct
 * @text Terrain Tag Settings
 * @type struct<TerrainTag>
 * @desc Choose settings regarding terrain tags.
 * @default {"TerrainTag":"","Rope:num":"1"}
 *
 * @param BreakEnd1
 * @text --------------------------
 * @default ----------------------------------
 *
 * @param End Of
 * @default Plugin Parameters
 *
 * @param BreakEnd2
 * @text --------------------------
 * @default ----------------------------------
 *
 */
/* ----------------------------------------------------------------------------
 * Label Settings
 * ----------------------------------------------------------------------------
 */
/*~struct~Label:
 *
 * @param FontSize:num
 * @text Font Size
 * @type number
 * @min 1
 * @desc The font size used for the Event Labels.
 * @default 22
 *
 * @param IconSize:num
 * @text Icon Size
 * @type number
 * @min 1
 * @desc The size of the icons used in the Event Labels.
 * @default 26
 *
 * @param LineHeight:num
 * @text Line Height
 * @type number
 * @min 1
 * @desc The line height used for the Event Labels.
 * @default 26
 *
 * @param OffsetX:num
 * @text Offset X
 * @type number
 * @min 0
 * @desc Globally offset all labels horizontally by this amount.
 * @default 0
 *
 * @param OffsetY:num
 * @text Offset Y
 * @type number
 * @min 0
 * @desc Globally offset all labels vertically by this amount.
 * @default 12
 *
 * @param OpacitySpeed:num
 * @text Fade Speed
 * @type number
 * @min 1
 * @desc Fade speed for labels.
 * @default 16
 *
 * @param VisibleRange:num
 * @text Visible Range
 * @type number
 * @min 1
 * @desc Range the player has to be within the event to make its label visible.
 * @default 30
 *
 */
/* ----------------------------------------------------------------------------
 * Icon Settings
 * ----------------------------------------------------------------------------
 */
/*~struct~Icon:
 *
 * @param BufferX:num
 * @text Buffer X
 * @desc Default X position buffer for event icons.
 * @default 0
 *
 * @param BufferY:num
 * @text Buffer Y
 * @desc Default Y position buffer for event icons.
 * @default 12
 *
 * @param BlendMode:num
 * @text Blend Mode
 * @type select
 * @option 0 - Normal
 * @value 0
 * @option 1 - Additive
 * @value 1
 * @option 2 - Multiply
 * @value 2
 * @option 3 - Screen
 * @value 3
 * @desc Default blend mode for even icons.
 * @default 0
 *
 */
/* ----------------------------------------------------------------------------
 * Template Settings
 * ----------------------------------------------------------------------------
 */
/*~struct~Template:
 *
 * @param Settings
 *
 * @param PreloadMaps:arraynum
 * @text Preloaded Maps
 * @parent Settings
 * @type number[]
 * @desc A list of all the ID's of the maps that will be preloaded
 * to serve as template maps for this plugin.
 * @default ["1"]
 *
 * @param Templates
 *
 * @param List:arraystruct
 * @text Event Template List
 * @parent Templates
 * @type struct<EventTemplate>[]
 * @desc A list of all the Event Templates used by this project.
 * Used for notetags and Plugin Commands.
 * @default []
 *
 * @param JavaScript
 *
 * @param PreCopyJS:func
 * @text JS: Pre-Copy
 * @parent JavaScript
 * @type note
 * @desc Code that's ran before an event is copied.
 * This is global and is ran for all copied events.
 * @default "// Declare Constants\nconst mapId = arguments[1];\nconst eventId = arguments[2];\nconst target = arguments[3];\nconst player = $gamePlayer;\n\n// Perform Actions\n"
 *
 * @param PostCopyJS:func
 * @text JS: Post-Copy
 * @parent JavaScript
 * @type note
 * @desc Code that's ran after an event is copied.
 * This is global and is ran for all copied events.
 * @default "// Declare Constants\nconst mapId = arguments[1];\nconst eventId = arguments[2];\nconst target = arguments[3];\nconst player = $gamePlayer;\n\n// Perform Actions\n"
 *
 * @param PreMorphJS:func
 * @text JS: Pre-Morph
 * @parent JavaScript
 * @type note
 * @desc Code that's ran before an event is morphed.
 * This is global and is ran for all morphed events.
 * @default "// Declare Constants\nconst mapId = arguments[1];\nconst eventId = arguments[2];\nconst target = arguments[3];\nconst player = $gamePlayer;\n\n// Perform Actions\n"
 *
 * @param PostMorphJS:func
 * @text JS: Post-Morph
 * @parent JavaScript
 * @type note
 * @desc Code that's ran after an event is morphed.
 * This is global and is ran for all morphed events.
 * @default "// Declare Constants\nconst mapId = arguments[1];\nconst eventId = arguments[2];\nconst target = arguments[3];\nconst player = $gamePlayer;\n\n// Perform Actions\n"
 *
 * @param PreSpawnJS:func
 * @text JS: Pre-Spawn
 * @parent JavaScript
 * @type note
 * @desc Code that's ran before an event is spawned.
 * This is global and is ran for all spawned events.
 * @default "// Declare Constants\nconst mapId = arguments[1];\nconst eventId = arguments[2];\nconst target = arguments[3];\nconst player = $gamePlayer;\n\n// Perform Actions\n"
 *
 * @param PostSpawnJS:func
 * @text JS: Post-Spawn
 * @parent JavaScript
 * @type note
 * @desc Code that's ran after an event is spawned.
 * This is global and is ran for all spawned events.
 * @default "// Declare Constants\nconst mapId = arguments[1];\nconst eventId = arguments[2];\nconst target = arguments[3];\nconst player = $gamePlayer;\n\n// Perform Actions\n"
 *
 */
/* ----------------------------------------------------------------------------
 * Event Template
 * ----------------------------------------------------------------------------
 */
/*~struct~EventTemplate:
 *
 * @param Name:str
 * @text Name
 * @desc Name of the template. It'll be used as anchor points for
 * notetags and Plugin Commands.
 * @default Untitled
 *
 * @param MapID:num
 * @text Map ID
 * @parent Name:str
 * @type number
 * @min 1
 * @max 999
 * @desc ID of the map the template event is stored on.
 * This will automatically add this ID to preloaded list.
 * @default 1
 *
 * @param EventID:num
 * @text Event ID
 * @parent Name:str
 * @type number
 * @min 1
 * @max 999
 * @desc ID of the event the template event is based on.
 * @default 1
 *
 * @param JavaScript
 *
 * @param PreCopyJS:func
 * @text JS: Pre-Copy
 * @parent JavaScript
 * @type note
 * @desc Code that's ran before an event is copied.
 * This is local only for this template.
 * @default "// Declare Constants\nconst mapId = arguments[1];\nconst eventId = arguments[2];\nconst target = arguments[3];\nconst player = $gamePlayer;\n\n// Perform Actions\n"
 *
 * @param PostCopyJS:func
 * @text JS: Post-Copy
 * @parent JavaScript
 * @type note
 * @desc Code that's ran after an event is copied.
 * This is local only for this template.
 * @default "// Declare Constants\nconst mapId = arguments[1];\nconst eventId = arguments[2];\nconst target = arguments[3];\nconst player = $gamePlayer;\n\n// Perform Actions\n"
 *
 * @param PreMorphJS:func
 * @text JS: Pre-Morph
 * @parent JavaScript
 * @type note
 * @desc Code that's ran before an event is morphed.
 * This is local only for this template.
 * @default "// Declare Constants\nconst mapId = arguments[1];\nconst eventId = arguments[2];\nconst target = arguments[3];\nconst player = $gamePlayer;\n\n// Perform Actions\n"
 *
 * @param PostMorphJS:func
 * @text JS: Post-Morph
 * @parent JavaScript
 * @type note
 * @desc Code that's ran after an event is morphed.
 * This is local only for this template.
 * @default "// Declare Constants\nconst mapId = arguments[1];\nconst eventId = arguments[2];\nconst target = arguments[3];\nconst player = $gamePlayer;\n\n// Perform Actions\n"
 *
 * @param PreSpawnJS:func
 * @text JS: Pre-Spawn
 * @parent JavaScript
 * @type note
 * @desc Code that's ran before an event is spawned.
 * This is global and is ran for all spawned events.
 * @default "// Declare Constants\nconst mapId = arguments[1];\nconst eventId = arguments[2];\nconst target = arguments[3];\nconst player = $gamePlayer;\n\n// Perform Actions\n"
 *
 * @param PostSpawnJS:func
 * @text JS: Post-Spawn
 * @parent JavaScript
 * @type note
 * @desc Code that's ran after an event is spawned.
 * This is global and is ran for all spawned events.
 * @default "// Declare Constants\nconst mapId = arguments[1];\nconst eventId = arguments[2];\nconst target = arguments[3];\nconst player = $gamePlayer;\n\n// Perform Actions\n"
 *
 */
/* ----------------------------------------------------------------------------
 * Movement Settings
 * ----------------------------------------------------------------------------
 */
/*~struct~Movement:
 *
 * @param Dir8
 * @text 8 Directional Movement
 *
 * @param EnableDir8:eval
 * @text Enable
 * @parent Dir8
 * @type boolean
 * @on Enable
 * @off Disabled
 * @desc Allow 8-directional movement by default? Players can move diagonally.
 * @default true
 *
 * @param StrictCollision:eval
 * @text Strict Collision
 * @parent Dir8
 * @type boolean
 * @on Strict
 * @off Flexible
 * @desc Enforce strict collission rules where the player must be able to pass both cardinal directions?
 * @default true
 *
 * @param FavorHorz:eval
 * @text Favor Horizontal
 * @parent StrictCollision:eval
 * @type boolean
 * @on Horizontal
 * @off Vertical
 * @desc Favor horizontal if cannot pass diagonally but can pass both horizontally and vertically?
 * @default true
 *
 * @param SlowerSpeed:eval
 * @text Slower Diagonals?
 * @parent Dir8
 * @type boolean
 * @on Slower
 * @off Normal
 * @desc Enforce a slower movement speed when moving diagonally?
 * @default false
 *
 * @param DiagonalSpeedMultiplier:num
 * @text Speed Multiplier
 * @parent SlowerSpeed:eval
 * @desc What's the multiplier to adjust movement speed when moving diagonally?
 * @default 0.85
 *
 * @param AutoMove
 * @text Automatic Movement
 *
 * @param StopAutoMoveEvents:eval
 * @text Stop During Events
 * @parent AutoMove
 * @type boolean
 * @on Stop
 * @off Wander
 * @desc Stop automatic event movement while events are running.
 * @default true
 *
 * @param StopAutoMoveMessages:eval
 * @text Stop During Messages
 * @parent AutoMove
 * @type boolean
 * @on Stop
 * @off Wander
 * @desc Stop automatic event movement while a message is running.
 * @default true
 *
 * @param Bitmap
 *
 * @param BitmapSmoothing:eval
 * @text Smoothing
 * @parent Bitmap
 * @type boolean
 * @on Smooth
 * @off Pixelated
 * @desc Do you want to smooth or pixelate the map sprites?
 * Pixelating them is better for zooming and tilting.
 * @default false
 *
 * @param Dash
 * @text Dash
 *
 * @param DashModifier:num
 * @text Dash Modifier
 * @parent Dash
 * @desc Alters the dash speed modifier.
 * @default +1.0
 *
 * @param EnableDashTilt:eval
 * @text Enable Dash Tilt?
 * @parent Dash
 * @type boolean
 * @on Enable
 * @off Disabled
 * @desc Tilt any sprites that are currently dashing?
 * @default true
 *
 * @param TiltLeft:num
 * @text Tilt Left Amount
 * @parent EnableDashTilt:eval
 * @desc Amount in radians when moving left (upper left, left, lower left).
 * @default -0.15
 *
 * @param TiltRight:num
 * @text Tilt Right Amount
 * @parent EnableDashTilt:eval
 * @desc Amount in radians when moving right (upper right, right, lower right).
 * @default 0.15
 *
 * @param TiltVert:num
 * @text Tilt Vertical Amount
 * @parent EnableDashTilt:eval
 * @desc Amount in radians when moving vertical (up, down).
 * @default 0.05
 * 
 * @param EventMove
 * @text Event Movement
 *
 * @param RandomMoveWeight:num
 * @text Random Move Weight
 * @parent EventMove
 * @desc Use numbers between 0 and 1. Numbers closer to 1 stay
 * closer to their home position. 0 to disable it.
 * @default 0.10
 *
 * @param Shadows
 *
 * @param ShowShadows:eval
 * @text Show
 * @parent Shadows
 * @type boolean
 * @on Show
 * @off Don't Show
 * @desc Show shadows on all events and player-related sprites.
 * @default true
 *
 * @param DefaultShadow:str
 * @text Default Filename
 * @parent Shadows
 * @type file
 * @dir img/system/
 * @desc Default filename used for shadows found in img/system/ folder.
 * @default Shadow1
 *
 * @param TurnInPlace
 * @text Turn in Place
 *
 * @param EnableTurnInPlace:eval
 * @text Enable
 * @parent TurnInPlace
 * @type boolean
 * @on Turn in Place
 * @off Skip
 * @desc When not dashing, player will turn in place before moving.
 * This only applies with keyboard inputs.
 * @default false
 *
 * @param TurnInPlaceDelay:num
 * @text Delay in Frames
 * @parent TurnInPlace
 * @type number
 * @min 0
 * @desc The number of frames to wait before moving.
 * @default 10
 *
 * @param Vehicle
 * @text Vehicle Speeds
 *
 * @param BoatSpeed:num
 * @text Boat Speed
 * @parent Vehicle
 * @desc Allows you to adjust the base speed of the boat vehicle.
 * @default 4.0
 *
 * @param ShipSpeed:num
 * @text Ship Speed
 * @parent Vehicle
 * @desc Allows you to adjust the base speed of the ship vehicle.
 * @default 5.0
 *
 * @param AirshipSpeed:num
 * @text Airship Speed
 * @parent Vehicle
 * @desc Allows you to adjust the base speed of the airship vehicle.
 * @default 6.0
 *
 */
/* ----------------------------------------------------------------------------
 * Region Rulings
 * ----------------------------------------------------------------------------
 */
/*~struct~Region:
 *
 * @param Allow
 * @text Allow Regions
 *
 * @param AllAllow:arraynum
 * @text All Allow
 * @parent Allow
 * @type number[]
 * @min 0
 * @max 255
 * @desc Insert Region ID's where the player can enter.
 * Region ID's range from 0 to 255.
 * @default []
 *
 * @param WalkAllow:arraynum
 * @text Walk Allow
 * @parent Allow
 * @type number[]
 * @min 0
 * @max 255
 * @desc Insert Region ID's where walking units can enter.
 * Region ID's range from 0 to 255.
 * @default []
 *
 * @param PlayerAllow:arraynum
 * @text Player Allow
 * @parent WalkAllow:arraynum
 * @type number[]
 * @min 0
 * @max 255
 * @desc Insert Region ID's where the player can enter.
 * Region ID's range from 0 to 255.
 * @default []
 *
 * @param EventAllow:arraynum
 * @text Event Allow
 * @parent WalkAllow:arraynum
 * @type number[]
 * @min 0
 * @max 255
 * @desc Insert Region ID's where events can enter.
 * Region ID's range from 0 to 255.
 * @default []
 *
 * @param VehicleAllow:arraynum
 * @text Vehicle Allow
 * @parent Allow
 * @type number[]
 * @min 0
 * @max 255
 * @desc Insert Region ID's where any vehicle can enter.
 * Region ID's range from 0 to 255.
 * @default []
 *
 * @param BoatAllow:arraynum
 * @text Boat Allow
 * @parent VehicleAllow:arraynum
 * @type number[]
 * @min 0
 * @max 255
 * @desc Insert Region ID's where boats can enter.
 * Region ID's range from 0 to 255.
 * @default []
 *
 * @param ShipAllow:arraynum
 * @text Ship Allow
 * @parent VehicleAllow:arraynum
 * @type number[]
 * @min 0
 * @max 255
 * @desc Insert Region ID's where ships can enter.
 * Region ID's range from 0 to 255.
 * @default []
 *
 * @param AirshipAllow:arraynum
 * @text Airship Allow
 * @parent VehicleAllow:arraynum
 * @type number[]
 * @min 0
 * @max 255
 * @desc Insert Region ID's where airships can enter.
 * Region ID's range from 0 to 255.
 * @default []
 *
 * @param Forbid
 * @text Forbid Regions
 *
 * @param AllForbid:arraynum
 * @text All Forbid
 * @parent Forbid
 * @type number[]
 * @min 0
 * @max 255
 * @desc Insert Region ID's where the player cannot enter.
 * Region ID's range from 0 to 255.
 * @default []
 *
 * @param WalkForbid:arraynum
 * @text Walk Forbid
 * @parent Forbid
 * @type number[]
 * @min 0
 * @max 255
 * @desc Insert Region ID's where walking units cannot enter.
 * Region ID's range from 0 to 255.
 * @default []
 *
 * @param PlayerForbid:arraynum
 * @text Player Forbid
 * @parent WalkForbid:arraynum
 * @type number[]
 * @min 0
 * @max 255
 * @desc Insert Region ID's where the player cannot enter.
 * Region ID's range from 0 to 255.
 * @default []
 *
 * @param EventForbid:arraynum
 * @text Event Forbid
 * @parent WalkForbid:arraynum
 * @type number[]
 * @min 0
 * @max 255
 * @desc Insert Region ID's where events cannot enter.
 * Region ID's range from 0 to 255.
 * @default []
 *
 * @param VehicleForbid:arraynum
 * @text Vehicle Forbid
 * @parent Forbid
 * @type number[]
 * @min 0
 * @max 255
 * @desc Insert Region ID's where vehicles cannot enter.
 * Region ID's range from 0 to 255.
 * @default []
 *
 * @param BoatForbid:arraynum
 * @text Boat Forbid
 * @parent VehicleForbid:arraynum
 * @type number[]
 * @min 0
 * @max 255
 * @desc Insert Region ID's where ships cannot enter.
 * Region ID's range from 0 to 255.
 * @default []
 *
 * @param ShipForbid:arraynum
 * @text Ship Forbid
 * @parent VehicleForbid:arraynum
 * @type number[]
 * @min 0
 * @max 255
 * @desc Insert Region ID's where ships cannot enter.
 * Region ID's range from 0 to 255.
 * @default []
 *
 * @param AirshipForbid:arraynum
 * @text Airship Forbid
 * @parent VehicleForbid:arraynum
 * @type number[]
 * @min 0
 * @max 255
 * @desc Insert Region ID's where airships cannot enter.
 * Region ID's range from 0 to 255.
 * @default []
 *
 * @param Dock
 * @text Dock Regions
 *
 * @param VehicleDock:arraynum
 * @text Vehicle Dock
 * @parent Dock
 * @type number[]
 * @min 0
 * @max 255
 * @desc Insert Region ID's where any vehicle can dock.
 * Region ID's range from 0 to 255.
 * @default []
 *
 * @param BoatDock:arraynum
 * @text Boat Dock
 * @parent Dock
 * @type number[]
 * @min 0
 * @max 255
 * @desc Insert Region ID's where boats can dock.
 * Region ID's range from 0 to 255.
 * @default []
 *
 * @param BoatDockRegionOnly:eval
 * @text Only Region Dockable
 * @parent BoatDock:arraynum
 * @type boolean
 * @on At Regions Only
 * @off Default
 * @desc Boats can only dock at designated regions.
 * @default false
 *
 * @param ShipDock:arraynum
 * @text Ship Dock
 * @parent Dock
 * @type number[]
 * @min 0
 * @max 255
 * @desc Insert Region ID's where ships can dock.
 * Region ID's range from 0 to 255.
 * @default []
 *
 * @param ShipDockRegionOnly:eval
 * @text Only Region Dockable
 * @parent ShipDock:arraynum
 * @type boolean
 * @on At Regions Only
 * @off Default
 * @desc Ships can only dock at designated regions.
 * @default false
 *
 * @param AirshipDock:arraynum
 * @text Airship Dock
 * @parent Dock
 * @type number[]
 * @min 0
 * @max 255
 * @desc Insert Region ID's where airships can dock.
 * Region ID's range from 0 to 255.
 * @default []
 *
 * @param AirshipDockRegionOnly:eval
 * @text Only Region Dockable
 * @parent AirshipDock:arraynum
 * @type boolean
 * @on At Regions Only
 * @off Default
 * @desc Airships can only dock at designated regions.
 * @default false
 *
 */
/* ----------------------------------------------------------------------------
 * Region Common Events
 * ----------------------------------------------------------------------------
 */
/*~struct~RegionCommonEvent:
 *
 * @param Region1:num
 * @text Region 1
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region2:num
 * @text Region 2
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region3:num
 * @text Region 3
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region4:num
 * @text Region 4
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region5:num
 * @text Region 5
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region6:num
 * @text Region 6
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region7:num
 * @text Region 7
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region8:num
 * @text Region 8
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region9:num
 * @text Region 9
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region10:num
 * @text Region 10
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region11:num
 * @text Region 11
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region12:num
 * @text Region 12
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region13:num
 * @text Region 13
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region14:num
 * @text Region 14
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region15:num
 * @text Region 15
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region16:num
 * @text Region 16
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region17:num
 * @text Region 17
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region18:num
 * @text Region 18
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region19:num
 * @text Region 19
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region20:num
 * @text Region 20
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region21:num
 * @text Region 21
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region22:num
 * @text Region 22
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region23:num
 * @text Region 23
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region24:num
 * @text Region 24
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region25:num
 * @text Region 25
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region26:num
 * @text Region 26
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region27:num
 * @text Region 27
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region28:num
 * @text Region 28
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region29:num
 * @text Region 29
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region30:num
 * @text Region 30
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region31:num
 * @text Region 31
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region32:num
 * @text Region 32
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region33:num
 * @text Region 33
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region34:num
 * @text Region 34
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region35:num
 * @text Region 35
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region36:num
 * @text Region 36
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region37:num
 * @text Region 37
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region38:num
 * @text Region 38
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region39:num
 * @text Region 39
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region40:num
 * @text Region 40
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region41:num
 * @text Region 41
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region42:num
 * @text Region 42
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region43:num
 * @text Region 43
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region44:num
 * @text Region 44
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region45:num
 * @text Region 45
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region46:num
 * @text Region 46
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region47:num
 * @text Region 47
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region48:num
 * @text Region 48
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region49:num
 * @text Region 49
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region50:num
 * @text Region 50
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region51:num
 * @text Region 51
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region52:num
 * @text Region 52
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region53:num
 * @text Region 53
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region54:num
 * @text Region 54
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region55:num
 * @text Region 55
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region56:num
 * @text Region 56
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region57:num
 * @text Region 57
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region58:num
 * @text Region 58
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region59:num
 * @text Region 59
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region60:num
 * @text Region 60
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region61:num
 * @text Region 61
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region62:num
 * @text Region 62
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region63:num
 * @text Region 63
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region64:num
 * @text Region 64
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region65:num
 * @text Region 65
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region66:num
 * @text Region 66
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region67:num
 * @text Region 67
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region68:num
 * @text Region 68
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region69:num
 * @text Region 69
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region70:num
 * @text Region 70
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region71:num
 * @text Region 71
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region72:num
 * @text Region 72
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region73:num
 * @text Region 73
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region74:num
 * @text Region 74
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region75:num
 * @text Region 75
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region76:num
 * @text Region 76
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region77:num
 * @text Region 77
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region78:num
 * @text Region 78
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region79:num
 * @text Region 79
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region80:num
 * @text Region 70
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region81:num
 * @text Region 71
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region82:num
 * @text Region 72
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region83:num
 * @text Region 73
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region84:num
 * @text Region 74
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region85:num
 * @text Region 75
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region86:num
 * @text Region 76
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region87:num
 * @text Region 77
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region88:num
 * @text Region 78
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region89:num
 * @text Region 79
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region80:num
 * @text Region 80
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region81:num
 * @text Region 81
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region82:num
 * @text Region 82
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region83:num
 * @text Region 83
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region84:num
 * @text Region 84
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region85:num
 * @text Region 85
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region86:num
 * @text Region 86
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region87:num
 * @text Region 87
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region88:num
 * @text Region 88
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region89:num
 * @text Region 89
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region90:num
 * @text Region 80
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region91:num
 * @text Region 81
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region92:num
 * @text Region 82
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region93:num
 * @text Region 83
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region94:num
 * @text Region 84
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region95:num
 * @text Region 85
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region96:num
 * @text Region 86
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region97:num
 * @text Region 87
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region98:num
 * @text Region 88
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region99:num
 * @text Region 89
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region90:num
 * @text Region 90
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region91:num
 * @text Region 91
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region92:num
 * @text Region 92
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region93:num
 * @text Region 93
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region94:num
 * @text Region 94
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region95:num
 * @text Region 95
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region96:num
 * @text Region 96
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region97:num
 * @text Region 97
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region98:num
 * @text Region 98
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region99:num
 * @text Region 99
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region100:num
 * @text Region 100
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region101:num
 * @text Region 101
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region102:num
 * @text Region 102
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region103:num
 * @text Region 103
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region104:num
 * @text Region 104
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region105:num
 * @text Region 105
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region106:num
 * @text Region 106
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region107:num
 * @text Region 107
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region108:num
 * @text Region 108
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region109:num
 * @text Region 109
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region110:num
 * @text Region 110
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region111:num
 * @text Region 111
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region112:num
 * @text Region 112
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region113:num
 * @text Region 113
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region114:num
 * @text Region 114
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region115:num
 * @text Region 115
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region116:num
 * @text Region 116
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region117:num
 * @text Region 117
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region118:num
 * @text Region 118
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region119:num
 * @text Region 119
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region120:num
 * @text Region 120
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region121:num
 * @text Region 121
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region122:num
 * @text Region 122
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region123:num
 * @text Region 123
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region124:num
 * @text Region 124
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region125:num
 * @text Region 125
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region126:num
 * @text Region 126
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region127:num
 * @text Region 127
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region128:num
 * @text Region 128
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region129:num
 * @text Region 129
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region130:num
 * @text Region 130
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region131:num
 * @text Region 131
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region132:num
 * @text Region 132
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region133:num
 * @text Region 133
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region134:num
 * @text Region 134
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region135:num
 * @text Region 135
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region136:num
 * @text Region 136
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region137:num
 * @text Region 137
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region138:num
 * @text Region 138
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region139:num
 * @text Region 139
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region140:num
 * @text Region 140
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region141:num
 * @text Region 141
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region142:num
 * @text Region 142
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region143:num
 * @text Region 143
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region144:num
 * @text Region 144
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region145:num
 * @text Region 145
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region146:num
 * @text Region 146
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region147:num
 * @text Region 147
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region148:num
 * @text Region 148
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region149:num
 * @text Region 149
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region150:num
 * @text Region 150
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region151:num
 * @text Region 151
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region152:num
 * @text Region 152
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region153:num
 * @text Region 153
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region154:num
 * @text Region 154
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region155:num
 * @text Region 155
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region156:num
 * @text Region 156
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region157:num
 * @text Region 157
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region158:num
 * @text Region 158
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region159:num
 * @text Region 159
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region160:num
 * @text Region 160
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region161:num
 * @text Region 161
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region162:num
 * @text Region 162
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region163:num
 * @text Region 163
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region164:num
 * @text Region 164
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region165:num
 * @text Region 165
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region166:num
 * @text Region 166
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region167:num
 * @text Region 167
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region168:num
 * @text Region 168
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region169:num
 * @text Region 169
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region170:num
 * @text Region 170
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region171:num
 * @text Region 171
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region172:num
 * @text Region 172
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region173:num
 * @text Region 173
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region174:num
 * @text Region 174
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region175:num
 * @text Region 175
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region176:num
 * @text Region 176
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region177:num
 * @text Region 177
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region178:num
 * @text Region 178
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region179:num
 * @text Region 179
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region180:num
 * @text Region 170
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region181:num
 * @text Region 171
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region182:num
 * @text Region 172
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region183:num
 * @text Region 173
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region184:num
 * @text Region 174
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region185:num
 * @text Region 175
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region186:num
 * @text Region 176
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region187:num
 * @text Region 177
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region188:num
 * @text Region 178
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region189:num
 * @text Region 179
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region180:num
 * @text Region 180
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region181:num
 * @text Region 181
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region182:num
 * @text Region 182
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region183:num
 * @text Region 183
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region184:num
 * @text Region 184
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region185:num
 * @text Region 185
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region186:num
 * @text Region 186
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region187:num
 * @text Region 187
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region188:num
 * @text Region 188
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region189:num
 * @text Region 189
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region190:num
 * @text Region 180
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region191:num
 * @text Region 181
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region192:num
 * @text Region 182
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region193:num
 * @text Region 183
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region194:num
 * @text Region 184
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region195:num
 * @text Region 185
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region196:num
 * @text Region 186
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region197:num
 * @text Region 187
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region198:num
 * @text Region 188
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region199:num
 * @text Region 189
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region190:num
 * @text Region 190
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region191:num
 * @text Region 191
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region192:num
 * @text Region 192
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region193:num
 * @text Region 193
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region194:num
 * @text Region 194
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region195:num
 * @text Region 195
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region196:num
 * @text Region 196
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region197:num
 * @text Region 197
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region198:num
 * @text Region 198
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region199:num
 * @text Region 199
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region200:num
 * @text Region 200
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region201:num
 * @text Region 201
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region202:num
 * @text Region 202
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region203:num
 * @text Region 203
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region204:num
 * @text Region 204
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region205:num
 * @text Region 205
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region206:num
 * @text Region 206
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region207:num
 * @text Region 207
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region208:num
 * @text Region 208
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region209:num
 * @text Region 209
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region210:num
 * @text Region 210
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region211:num
 * @text Region 211
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region212:num
 * @text Region 212
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region213:num
 * @text Region 213
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region214:num
 * @text Region 214
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region215:num
 * @text Region 215
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region216:num
 * @text Region 216
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region217:num
 * @text Region 217
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region218:num
 * @text Region 218
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region219:num
 * @text Region 219
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region220:num
 * @text Region 220
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region221:num
 * @text Region 221
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region222:num
 * @text Region 222
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region223:num
 * @text Region 223
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region224:num
 * @text Region 224
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region225:num
 * @text Region 225
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region226:num
 * @text Region 226
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region227:num
 * @text Region 227
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region228:num
 * @text Region 228
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region229:num
 * @text Region 229
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region230:num
 * @text Region 230
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region231:num
 * @text Region 231
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region232:num
 * @text Region 232
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region233:num
 * @text Region 233
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region234:num
 * @text Region 234
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region235:num
 * @text Region 235
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region236:num
 * @text Region 236
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region237:num
 * @text Region 237
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region238:num
 * @text Region 238
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region239:num
 * @text Region 239
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region240:num
 * @text Region 240
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region241:num
 * @text Region 241
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region242:num
 * @text Region 242
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region243:num
 * @text Region 243
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region244:num
 * @text Region 244
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region245:num
 * @text Region 245
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region246:num
 * @text Region 246
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region247:num
 * @text Region 247
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region248:num
 * @text Region 248
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region249:num
 * @text Region 249
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region250:num
 * @text Region 250
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region251:num
 * @text Region 251
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region252:num
 * @text Region 252
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region253:num
 * @text Region 253
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region254:num
 * @text Region 254
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region255:num
 * @text Region 255
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 */
/* ----------------------------------------------------------------------------
 * Terrain Tag Settings
 * ----------------------------------------------------------------------------
 */
/*~struct~TerrainTag:
 *
 * @param TerrainTag
 * @text Terrain Tag ID's
 *
 * @param Rope:num
 * @text Rope
 * @parent TerrainTag
 * @type number
 * @min 0
 * @max 7
 * @desc Which terrain tag number to use for ropes?
 * @default 1
 *
 */
/* ----------------------------------------------------------------------------
 * VisuStella 8-Dir Settings
 * ----------------------------------------------------------------------------
 */
/*~struct~VS8:
 *
 * @param Balloons
 * @text Balloon Icon Settings
 *
 * @param AutoBalloon:eval
 * @text Auto-Balloon Poses
 * @parent Balloons
 * @type boolean
 * @on Auto
 * @off Manual
 * @desc Automatically pose VS8 sprites when using balloon icons.
 * @default true
 *
 * @param BalloonOffsetX:num
 * @text Balloon Offset X
 * @parent Balloons
 * @desc Offset balloon icons on VS8 sprites by x pixels.
 * @default 0
 *
 * @param BalloonOffsetY:num
 * @text Balloon Offset Y
 * @parent Balloons
 * @desc Offset balloon icons on VS8 sprites by y pixels.
 * @default 10
 *
 * @param Icons
 * 
 * @param AutoBuffer:eval
 * @text Auto Buffer
 * @parent Icons
 * @type boolean
 * @on Auto
 * @off Manual
 * @desc Automatically buffer the X and Y coordinates of
 * VS8 sprites?
 * @default true
 * 
 * @param CarryPose:eval
 * @text Use Carry Pose
 * @parent Icons
 * @type boolean
 * @on Carry Pose
 * @off Normal
 * @desc Use the carry pose when moving with an icon overhead.
 * @default true
 *
 */
//=============================================================================

const _0x2552df=_0x29fe;(function(_0x68fad,_0xdb7d86){const _0x9163a6=_0x29fe,_0x55be55=_0x68fad();while(!![]){try{const _0x221789=parseInt(_0x9163a6(0x515))/0x1*(-parseInt(_0x9163a6(0x478))/0x2)+-parseInt(_0x9163a6(0x453))/0x3*(-parseInt(_0x9163a6(0x48a))/0x4)+-parseInt(_0x9163a6(0x3a9))/0x5*(parseInt(_0x9163a6(0x49b))/0x6)+parseInt(_0x9163a6(0x254))/0x7*(parseInt(_0x9163a6(0x1d3))/0x8)+-parseInt(_0x9163a6(0x294))/0x9*(parseInt(_0x9163a6(0x5af))/0xa)+parseInt(_0x9163a6(0x2f2))/0xb*(parseInt(_0x9163a6(0x5d6))/0xc)+parseInt(_0x9163a6(0x314))/0xd*(parseInt(_0x9163a6(0x5b0))/0xe);if(_0x221789===_0xdb7d86)break;else _0x55be55['push'](_0x55be55['shift']());}catch(_0x2618e1){_0x55be55['push'](_0x55be55['shift']());}}}(_0x1618,0x90875));var label=_0x2552df(0x338),tier=tier||0x0,dependencies=[],pluginData=$plugins[_0x2552df(0x5c1)](function(_0x52165f){const _0x1c0ee1=_0x2552df;return _0x52165f['status']&&_0x52165f[_0x1c0ee1(0x19f)]['includes']('['+label+']');})[0x0];VisuMZ[label][_0x2552df(0x30c)]=VisuMZ[label][_0x2552df(0x30c)]||{},VisuMZ[_0x2552df(0x3ce)]=function(_0x5e9dd6,_0x3005de){const _0x25c15b=_0x2552df;for(const _0x45266c in _0x3005de){if(_0x45266c['match'](/(.*):(.*)/i)){const _0x38ae91=String(RegExp['$1']),_0x5eafa8=String(RegExp['$2'])[_0x25c15b(0x519)]()['trim']();let _0x30a7be,_0x1f07db,_0x4ebb0f;switch(_0x5eafa8){case'NUM':_0x30a7be=_0x3005de[_0x45266c]!==''?Number(_0x3005de[_0x45266c]):0x0;break;case _0x25c15b(0x22a):_0x1f07db=_0x3005de[_0x45266c]!==''?JSON['parse'](_0x3005de[_0x45266c]):[],_0x30a7be=_0x1f07db[_0x25c15b(0x4bb)](_0x1d39cf=>Number(_0x1d39cf));break;case _0x25c15b(0x300):_0x30a7be=_0x3005de[_0x45266c]!==''?eval(_0x3005de[_0x45266c]):null;break;case _0x25c15b(0x527):_0x1f07db=_0x3005de[_0x45266c]!==''?JSON[_0x25c15b(0x4b1)](_0x3005de[_0x45266c]):[],_0x30a7be=_0x1f07db[_0x25c15b(0x4bb)](_0x5df93f=>eval(_0x5df93f));break;case _0x25c15b(0x2c9):_0x30a7be=_0x3005de[_0x45266c]!==''?JSON['parse'](_0x3005de[_0x45266c]):'';break;case _0x25c15b(0x5a9):_0x1f07db=_0x3005de[_0x45266c]!==''?JSON[_0x25c15b(0x4b1)](_0x3005de[_0x45266c]):[],_0x30a7be=_0x1f07db[_0x25c15b(0x4bb)](_0x59dee3=>JSON[_0x25c15b(0x4b1)](_0x59dee3));break;case _0x25c15b(0x301):_0x30a7be=_0x3005de[_0x45266c]!==''?new Function(JSON[_0x25c15b(0x4b1)](_0x3005de[_0x45266c])):new Function(_0x25c15b(0x53e));break;case _0x25c15b(0x498):_0x1f07db=_0x3005de[_0x45266c]!==''?JSON[_0x25c15b(0x4b1)](_0x3005de[_0x45266c]):[],_0x30a7be=_0x1f07db['map'](_0x1d0451=>new Function(JSON[_0x25c15b(0x4b1)](_0x1d0451)));break;case _0x25c15b(0x202):_0x30a7be=_0x3005de[_0x45266c]!==''?String(_0x3005de[_0x45266c]):'';break;case _0x25c15b(0x3b6):_0x1f07db=_0x3005de[_0x45266c]!==''?JSON[_0x25c15b(0x4b1)](_0x3005de[_0x45266c]):[],_0x30a7be=_0x1f07db[_0x25c15b(0x4bb)](_0x4f2c03=>String(_0x4f2c03));break;case _0x25c15b(0x5be):_0x4ebb0f=_0x3005de[_0x45266c]!==''?JSON[_0x25c15b(0x4b1)](_0x3005de[_0x45266c]):{},_0x5e9dd6[_0x38ae91]={},VisuMZ[_0x25c15b(0x3ce)](_0x5e9dd6[_0x38ae91],_0x4ebb0f);continue;case _0x25c15b(0x376):_0x1f07db=_0x3005de[_0x45266c]!==''?JSON[_0x25c15b(0x4b1)](_0x3005de[_0x45266c]):[],_0x30a7be=_0x1f07db[_0x25c15b(0x4bb)](_0x34cadf=>VisuMZ[_0x25c15b(0x3ce)]({},JSON['parse'](_0x34cadf)));break;default:continue;}_0x5e9dd6[_0x38ae91]=_0x30a7be;}}return _0x5e9dd6;},(_0x53a777=>{const _0x15c74d=_0x2552df,_0x4484d7=_0x53a777[_0x15c74d(0x1f7)];for(const _0xde1109 of dependencies){if(!Imported[_0xde1109]){alert('%1\x20is\x20missing\x20a\x20required\x20plugin.\x0aPlease\x20install\x20%2\x20into\x20the\x20Plugin\x20Manager.'[_0x15c74d(0x265)](_0x4484d7,_0xde1109)),SceneManager['exit']();break;}}const _0x2b5677=_0x53a777['description'];if(_0x2b5677[_0x15c74d(0x47f)](/\[Version[ ](.*?)\]/i)){if(_0x15c74d(0x467)!=='XyrCt'){const _0x394f3a=Number(RegExp['$1']);_0x394f3a!==VisuMZ[label][_0x15c74d(0x37d)]&&(alert(_0x15c74d(0x429)['format'](_0x4484d7,_0x394f3a)),SceneManager[_0x15c74d(0x138)]());}else{const _0xc53c48=this['event']();return this[_0x15c74d(0x5ae)]()&&_0xc53c48[_0x15c74d(0x526)]>=0x1&&_0x507f55[_0x15c74d(0x528)](_0xc53c48['switchId']);}}if(_0x2b5677['match'](/\[Tier[ ](\d+)\]/i)){const _0x132791=Number(RegExp['$1']);if(_0x132791<tier){if(_0x15c74d(0x3aa)===_0x15c74d(0x2cb)){if(this[_0x15c74d(0x15c)]())return!![];if(this['constructor']===_0x5ab758&&this[_0x15c74d(0x3b3)]())return!![];return![];}else alert(_0x15c74d(0x4f8)['format'](_0x4484d7,_0x132791,tier)),SceneManager[_0x15c74d(0x138)]();}else{if(_0x15c74d(0x172)===_0x15c74d(0x172))tier=Math[_0x15c74d(0x504)](_0x132791,tier);else return this['screenY']()+this[_0x15c74d(0x349)]()+this['jumpHeight']();}}VisuMZ[_0x15c74d(0x3ce)](VisuMZ[label]['Settings'],_0x53a777[_0x15c74d(0x322)]);})(pluginData),VisuMZ[_0x2552df(0x3ee)]=function(_0x115c81,_0x30611c,_0x2346f8){switch(_0x2346f8){case'=':return _0x30611c;break;case'+':return _0x115c81+_0x30611c;break;case'-':return _0x115c81-_0x30611c;break;case'*':return _0x115c81*_0x30611c;break;case'/':return _0x115c81/_0x30611c;break;case'%':return _0x115c81%_0x30611c;break;}return _0x115c81;},PluginManager[_0x2552df(0x3b0)](pluginData[_0x2552df(0x1f7)],_0x2552df(0x32d),_0xe2f9d=>{const _0x306280=_0x2552df;VisuMZ[_0x306280(0x3ce)](_0xe2f9d,_0xe2f9d);switch(_0xe2f9d[_0x306280(0x436)]){case _0x306280(0x220):$gameSystem[_0x306280(0x59e)](!![]);break;case'Stop':$gameSystem[_0x306280(0x59e)](![]);break;case _0x306280(0x462):$gameSystem[_0x306280(0x59e)](!$gameSystem[_0x306280(0x593)]());break;}}),PluginManager[_0x2552df(0x3b0)](pluginData[_0x2552df(0x1f7)],_0x2552df(0x45a),_0x2bdf27=>{const _0x56958d=_0x2552df;VisuMZ[_0x56958d(0x3ce)](_0x2bdf27,_0x2bdf27);const _0x3664ab=$gameTemp[_0x56958d(0x205)](),_0x39ce9c={'mapId':_0x2bdf27['MapId'],'eventId':_0x2bdf27[_0x56958d(0x149)]||_0x3664ab['eventId'](),'pageId':_0x2bdf27[_0x56958d(0x445)]};if(_0x39ce9c[_0x56958d(0x399)]<=0x0)_0x39ce9c[_0x56958d(0x399)]=$gameMap?$gameMap['mapId']():0x1;$gameTemp[_0x56958d(0x205)]()[_0x56958d(0x29c)](_0x39ce9c);}),PluginManager[_0x2552df(0x3b0)](pluginData[_0x2552df(0x1f7)],_0x2552df(0x304),_0x42caeb=>{const _0x1809d9=_0x2552df;VisuMZ['ConvertParams'](_0x42caeb,_0x42caeb);switch(_0x42caeb[_0x1809d9(0x436)]){case _0x1809d9(0x2bb):$gameSystem[_0x1809d9(0x4ee)](!![]);break;case'Disable':$gameSystem['setDashingEnabled'](![]);break;case _0x1809d9(0x462):$gameSystem[_0x1809d9(0x4ee)](!$gameSystem[_0x1809d9(0x2af)]());break;}}),PluginManager[_0x2552df(0x3b0)](pluginData[_0x2552df(0x1f7)],_0x2552df(0x4fe),_0x4a7a3d=>{const _0x40c6d5=_0x2552df;VisuMZ[_0x40c6d5(0x3ce)](_0x4a7a3d,_0x4a7a3d);const _0x568d59=$gameTemp[_0x40c6d5(0x205)]();_0x4a7a3d[_0x40c6d5(0x1e0)]=_0x4a7a3d['MapId']||$gameMap[_0x40c6d5(0x399)](),$gameSystem[_0x40c6d5(0x556)](_0x4a7a3d['MapId'],_0x4a7a3d[_0x40c6d5(0x149)]||_0x568d59[_0x40c6d5(0x350)](),_0x4a7a3d[_0x40c6d5(0x1f4)],_0x4a7a3d[_0x40c6d5(0x50e)],_0x4a7a3d[_0x40c6d5(0x5b8)],_0x4a7a3d[_0x40c6d5(0x365)]);}),PluginManager[_0x2552df(0x3b0)](pluginData[_0x2552df(0x1f7)],_0x2552df(0x36a),_0x56786f=>{const _0x536bf0=_0x2552df;VisuMZ[_0x536bf0(0x3ce)](_0x56786f,_0x56786f);const _0x3ce600=$gameTemp[_0x536bf0(0x205)]();_0x56786f[_0x536bf0(0x1e0)]=_0x56786f[_0x536bf0(0x1e0)]||$gameMap[_0x536bf0(0x399)](),$gameSystem[_0x536bf0(0x1db)](_0x56786f[_0x536bf0(0x1e0)],_0x56786f[_0x536bf0(0x149)]||_0x3ce600[_0x536bf0(0x350)]());}),PluginManager[_0x2552df(0x3b0)](pluginData[_0x2552df(0x1f7)],_0x2552df(0x491),_0x5148fa=>{const _0x2a6dbc=_0x2552df;if($gameMap)for(const _0x2d6a6f of $gameMap['events']()){if('gYvZw'!=='tgQXe')_0x2d6a6f[_0x2a6dbc(0x32e)]();else{const _0xe41465=this[_0x2a6dbc(0x53f)](_0x20f378),_0x41b352=_0xc7d7f7[_0x2a6dbc(0x43c)]((this[_0x2a6dbc(0x139)]-_0xe41465[_0x2a6dbc(0x262)])/0x2);this[_0x2a6dbc(0x2f9)](_0x500902,_0x41b352,_0x4ed256),_0x41fd47+=_0xe41465[_0x2a6dbc(0x4ff)];}}}),PluginManager[_0x2552df(0x3b0)](pluginData['name'],_0x2552df(0x197),_0xd49618=>{const _0x23a4ba=_0x2552df;VisuMZ[_0x23a4ba(0x3ce)](_0xd49618,_0xd49618);switch(_0xd49618[_0x23a4ba(0x4c0)]){case _0x23a4ba(0x3ad):$gameSystem[_0x23a4ba(0x28b)](!![]);break;case _0x23a4ba(0x4fc):$gameSystem[_0x23a4ba(0x28b)](![]);break;case _0x23a4ba(0x462):$gameSystem[_0x23a4ba(0x28b)](!$gameSystem[_0x23a4ba(0x364)]());break;}}),PluginManager[_0x2552df(0x3b0)](pluginData[_0x2552df(0x1f7)],'EventLocationSave',_0x386553=>{const _0x4e3c53=_0x2552df;VisuMZ[_0x4e3c53(0x3ce)](_0x386553,_0x386553);const _0xad9702=$gameTemp[_0x4e3c53(0x205)]();if(!$gameMap)return;const _0x3fc778=$gameMap[_0x4e3c53(0x218)](_0x386553[_0x4e3c53(0x149)]||_0xad9702[_0x4e3c53(0x350)]());if(_0x3fc778)_0x3fc778[_0x4e3c53(0x1e2)]();}),PluginManager['registerCommand'](pluginData[_0x2552df(0x1f7)],_0x2552df(0x235),_0x3bd73e=>{const _0x1cf0d5=_0x2552df;VisuMZ['ConvertParams'](_0x3bd73e,_0x3bd73e);const _0x1a068a=$gameTemp['getLastPluginCommandInterpreter'](),_0x288c10=_0x3bd73e[_0x1cf0d5(0x1e0)]||$gameMap[_0x1cf0d5(0x399)](),_0x5e8d26=_0x3bd73e[_0x1cf0d5(0x149)]||_0x1a068a['eventId'](),_0x3eaac6=_0x3bd73e['PosX']||0x0,_0x4e93b7=_0x3bd73e[_0x1cf0d5(0x30e)]||0x0,_0x57fc00=_0x3bd73e[_0x1cf0d5(0x1e3)]||0x2,_0x9a1d3c=((_0x3bd73e[_0x1cf0d5(0x445)]||0x1)-0x1)[_0x1cf0d5(0x468)](0x0,0x13),_0x1a4d86=_0x3bd73e[_0x1cf0d5(0x263)]||0x0;$gameSystem['createSaveEventLocationData'](_0x288c10,_0x5e8d26,_0x3eaac6,_0x4e93b7,_0x57fc00,_0x9a1d3c,_0x1a4d86);}),PluginManager[_0x2552df(0x3b0)](pluginData['name'],_0x2552df(0x583),_0x465748=>{const _0x303c7e=_0x2552df;VisuMZ[_0x303c7e(0x3ce)](_0x465748,_0x465748);const _0x3e76a5=$gameTemp[_0x303c7e(0x205)](),_0x710535=_0x465748[_0x303c7e(0x1e0)]||$gameMap[_0x303c7e(0x399)](),_0x3349fe=_0x465748['EventId']||_0x3e76a5[_0x303c7e(0x350)]();$gameSystem[_0x303c7e(0x3b7)](_0x710535,_0x3349fe);}),PluginManager[_0x2552df(0x3b0)](pluginData[_0x2552df(0x1f7)],_0x2552df(0x1d7),_0x118a00=>{const _0x1c5324=_0x2552df;VisuMZ[_0x1c5324(0x3ce)](_0x118a00,_0x118a00);const _0x2e8904=_0x118a00['CommonEventID'];$gameTimer[_0x1c5324(0x167)](_0x2e8904);}),PluginManager[_0x2552df(0x3b0)](pluginData['name'],'EventTimerExpireClear',_0x3c95fa=>{const _0x495d42=_0x2552df;$gameTimer[_0x495d42(0x167)](0x0);}),PluginManager['registerCommand'](pluginData[_0x2552df(0x1f7)],_0x2552df(0x457),_0x15b170=>{const _0x164fb5=_0x2552df;if(!$gameTimer[_0x164fb5(0x49c)]())return;VisuMZ[_0x164fb5(0x3ce)](_0x15b170,_0x15b170);let _0x5adf39=0x0;_0x5adf39+=_0x15b170[_0x164fb5(0x25f)],_0x5adf39+=_0x15b170[_0x164fb5(0x1bd)]*0x3c,_0x5adf39+=_0x15b170[_0x164fb5(0x545)]*0x3c*0x3c,_0x5adf39+=_0x15b170[_0x164fb5(0x50c)]*0x3c*0x3c*0x3c,$gameTimer[_0x164fb5(0x341)](_0x5adf39);}),PluginManager[_0x2552df(0x3b0)](pluginData[_0x2552df(0x1f7)],_0x2552df(0x4cd),_0xb45b84=>{const _0x4c0906=_0x2552df;if(!$gameTimer[_0x4c0906(0x49c)]())return;VisuMZ[_0x4c0906(0x3ce)](_0xb45b84,_0xb45b84);let _0x2df98d=0x0;_0x2df98d+=_0xb45b84[_0x4c0906(0x25f)],_0x2df98d+=_0xb45b84[_0x4c0906(0x1bd)]*0x3c,_0x2df98d+=_0xb45b84[_0x4c0906(0x545)]*0x3c*0x3c,_0x2df98d+=_0xb45b84[_0x4c0906(0x50c)]*0x3c*0x3c*0x3c,$gameTimer[_0x4c0906(0x371)](_0x2df98d);}),PluginManager[_0x2552df(0x3b0)](pluginData['name'],'EventTimerPause',_0x2c02d0=>{const _0x394bde=_0x2552df;if(!$gameTimer[_0x394bde(0x49c)]())return;$gameTimer[_0x394bde(0x573)]();}),PluginManager['registerCommand'](pluginData[_0x2552df(0x1f7)],_0x2552df(0x438),_0x1fc647=>{const _0x46cc21=_0x2552df;if(!$gameTimer[_0x46cc21(0x49c)]())return;$gameTimer[_0x46cc21(0x188)]();}),PluginManager[_0x2552df(0x3b0)](pluginData[_0x2552df(0x1f7)],_0x2552df(0x2b0),_0x3a1555=>{const _0x4bde0a=_0x2552df;VisuMZ[_0x4bde0a(0x3ce)](_0x3a1555,_0x3a1555);const _0x454724=_0x3a1555[_0x4bde0a(0x1d0)]||0x0;$gameTimer[_0x4bde0a(0x384)](_0x454724);}),PluginManager[_0x2552df(0x3b0)](pluginData[_0x2552df(0x1f7)],'FollowerSetGlobalChase',_0x1df582=>{const _0x2fdb55=_0x2552df;VisuMZ[_0x2fdb55(0x3ce)](_0x1df582,_0x1df582);const _0x3a48e7=!_0x1df582[_0x2fdb55(0x5d0)];$gameSystem[_0x2fdb55(0x4cc)](_0x3a48e7);}),PluginManager[_0x2552df(0x3b0)](pluginData[_0x2552df(0x1f7)],_0x2552df(0x2fa),_0x25d349=>{const _0x43efe9=_0x2552df;VisuMZ[_0x43efe9(0x3ce)](_0x25d349,_0x25d349);const _0x3f52aa=(_0x25d349[_0x43efe9(0x27d)]||0x0)-0x1,_0x4c634e=!_0x25d349['Chase'],_0x23c7dd=$gamePlayer['followers']()[_0x43efe9(0x3c6)](_0x3f52aa);if(_0x23c7dd)_0x23c7dd['setChaseOff'](_0x4c634e);}),PluginManager['registerCommand'](pluginData[_0x2552df(0x1f7)],'FollowerSetControl',_0x2f103d=>{const _0x2911b3=_0x2552df;VisuMZ[_0x2911b3(0x3ce)](_0x2f103d,_0x2f103d);const _0x13669b=_0x2f103d[_0x2911b3(0x27d)];$gameSystem[_0x2911b3(0x388)](_0x13669b);}),PluginManager['registerCommand'](pluginData[_0x2552df(0x1f7)],_0x2552df(0x351),_0x259f26=>{const _0x2a17ba=_0x2552df;VisuMZ[_0x2a17ba(0x3ce)](_0x259f26,_0x259f26),$gameSystem['setControlledFollowerID'](0x0),$gameSystem[_0x2a17ba(0x4cc)](![]);for(const _0x44f4d2 of $gamePlayer['followers']()[_0x2a17ba(0x4df)]){if(_0x2a17ba(0x40a)!=='kvptC')return this[_0x2a17ba(0x3d2)](_0x9e63b);else{if(_0x44f4d2)_0x44f4d2[_0x2a17ba(0x36b)](![]);}}}),PluginManager[_0x2552df(0x3b0)](pluginData[_0x2552df(0x1f7)],_0x2552df(0x35c),_0x4073ce=>{const _0x2f345c=_0x2552df;VisuMZ[_0x2f345c(0x3ce)](_0x4073ce,_0x4073ce);const _0x19474f=$gameTemp['getLastPluginCommandInterpreter']();_0x4073ce['MapId']=_0x4073ce[_0x2f345c(0x1e0)]||$gameMap['mapId']();const _0x3bcdf2=[_0x4073ce[_0x2f345c(0x1e0)],_0x4073ce[_0x2f345c(0x149)]||_0x19474f['eventId'](),_0x4073ce[_0x2f345c(0x33a)]],_0x2045d2=_0x4073ce['TargetSwitchId'],_0x3ec73d=$gameSelfSwitches[_0x2f345c(0x2c1)](_0x3bcdf2)||![];$gameSwitches['setValue'](_0x2045d2,_0x3ec73d);}),PluginManager[_0x2552df(0x3b0)](pluginData[_0x2552df(0x1f7)],'SwitchGetSelfSwitchID',_0x251181=>{const _0x1b624b=_0x2552df;VisuMZ[_0x1b624b(0x3ce)](_0x251181,_0x251181);const _0x54109a=$gameTemp[_0x1b624b(0x205)]();_0x251181[_0x1b624b(0x1e0)]=_0x251181[_0x1b624b(0x1e0)]||$gameMap[_0x1b624b(0x399)]();const _0x35df7f=[_0x251181[_0x1b624b(0x1e0)],_0x251181[_0x1b624b(0x149)]||_0x54109a[_0x1b624b(0x350)](),_0x1b624b(0x46d)[_0x1b624b(0x265)](_0x251181['SwitchId'])],_0x3a48d6=_0x251181[_0x1b624b(0x382)],_0x4ac4e5=$gameSelfSwitches['value'](_0x35df7f)||![];$gameSwitches['setValue'](_0x3a48d6,_0x4ac4e5);}),PluginManager[_0x2552df(0x3b0)](pluginData[_0x2552df(0x1f7)],_0x2552df(0x4e3),_0x14572b=>{const _0x319dbf=_0x2552df;VisuMZ[_0x319dbf(0x3ce)](_0x14572b,_0x14572b);const _0x3c77a6=$gameTemp[_0x319dbf(0x205)]();_0x14572b['MapId']=_0x14572b[_0x319dbf(0x1e0)]||$gameMap[_0x319dbf(0x399)]();const _0x2c6fc5=[_0x14572b[_0x319dbf(0x1e0)],_0x14572b[_0x319dbf(0x149)]||_0x3c77a6[_0x319dbf(0x350)](),'Self\x20Variable\x20%1'[_0x319dbf(0x265)](_0x14572b['VariableId'])],_0x4e1758=_0x14572b[_0x319dbf(0x432)],_0x583ac8=$gameSelfSwitches['value'](_0x2c6fc5)||![];$gameVariables[_0x319dbf(0x17c)](_0x4e1758,_0x583ac8);}),PluginManager[_0x2552df(0x3b0)](pluginData[_0x2552df(0x1f7)],_0x2552df(0x56a),_0x3d035f=>{const _0x3d8499=_0x2552df;VisuMZ[_0x3d8499(0x3ce)](_0x3d035f,_0x3d035f);if(!$gameMap)return;const _0x576305=$gameTemp[_0x3d8499(0x205)](),_0x1777fa=_0x3d035f[_0x3d8499(0x3ea)];_0x3d035f[_0x3d8499(0x416)]=_0x3d035f[_0x3d8499(0x416)]||$gameMap[_0x3d8499(0x399)](),_0x3d035f['Step2MapId']=_0x3d035f[_0x3d8499(0x52c)]||$gameMap[_0x3d8499(0x399)](),_0x3d035f[_0x3d8499(0x281)]=_0x3d035f[_0x3d8499(0x281)][_0x3d8499(0x519)]()[_0x3d8499(0x1c7)]();if(!_0x1777fa&&_0x3d035f[_0x3d8499(0x416)]!==$gameMap[_0x3d8499(0x399)]())return;if($gameMap[_0x3d8499(0x399)]()===_0x3d035f[_0x3d8499(0x416)]){if(_0x3d8499(0x1d6)!==_0x3d8499(0x28c)){const _0x3cd574=$gameMap[_0x3d8499(0x218)](_0x3d035f['Step1EventId']||_0x576305[_0x3d8499(0x350)]());if(!_0x3cd574)return;_0x3d035f[_0x3d8499(0x281)]!==_0x3d8499(0x15d)?_0x3cd574[_0x3d8499(0x591)](_0x3d035f[_0x3d8499(0x281)]):_0x3cd574[_0x3d8499(0x2a1)](_0x3d035f[_0x3d8499(0x52c)],_0x3d035f[_0x3d8499(0x444)]||_0x576305[_0x3d8499(0x350)]());}else this[_0x3d8499(0x2ce)][_0x3d8499(0x3a5)](_0x3c46ca[_0x3d8499(0x3b9)]);}if(_0x1777fa){if(_0x3d8499(0x3d7)===_0x3d8499(0x267)){const _0x589c3f=_0x1bda04(_0x30f23e['$1'])[_0x3d8499(0x519)]()[_0x3d8499(0x1c7)](),_0x503dd2=[_0x3d8499(0x40f),_0x3d8499(0x21a),_0x3d8499(0x559),_0x3d8499(0x3fa)];this[_0x3d8499(0x55f)]['blendMode']=_0x503dd2[_0x3d8499(0x2ae)](_0x589c3f)['clamp'](0x0,0x3);}else $gameSystem[_0x3d8499(0x1e8)](_0x3d035f[_0x3d8499(0x416)],_0x3d035f[_0x3d8499(0x1f5)],_0x3d035f[_0x3d8499(0x281)],_0x3d035f[_0x3d8499(0x52c)],_0x3d035f[_0x3d8499(0x444)]);}}),PluginManager[_0x2552df(0x3b0)](pluginData[_0x2552df(0x1f7)],_0x2552df(0x48e),_0x2d41c8=>{const _0x28afd8=_0x2552df;VisuMZ[_0x28afd8(0x3ce)](_0x2d41c8,_0x2d41c8);if(!$gameMap)return;const _0xd6a8c1=$gameTemp[_0x28afd8(0x205)]();_0x2d41c8[_0x28afd8(0x1e0)]=_0x2d41c8[_0x28afd8(0x1e0)]||$gameMap[_0x28afd8(0x399)]();if($gameMap['mapId']()===_0x2d41c8[_0x28afd8(0x1e0)]){const _0x3d5b22=$gameMap[_0x28afd8(0x218)](_0x2d41c8['EventId']||_0xd6a8c1['eventId']());_0x3d5b22[_0x28afd8(0x53a)]();}_0x2d41c8[_0x28afd8(0x50d)]&&$gameSystem[_0x28afd8(0x17d)](_0x2d41c8[_0x28afd8(0x1e0)],_0x2d41c8[_0x28afd8(0x149)]||_0xd6a8c1[_0x28afd8(0x350)]());}),PluginManager[_0x2552df(0x3b0)](pluginData['name'],'PlayerMovementChange',_0x51812d=>{const _0x503761=_0x2552df;VisuMZ['ConvertParams'](_0x51812d,_0x51812d),$gameSystem['setPlayerControlDisable'](!_0x51812d[_0x503761(0x2bb)]);}),PluginManager[_0x2552df(0x3b0)](pluginData[_0x2552df(0x1f7)],_0x2552df(0x57e),_0x49ae41=>{const _0x30bed1=_0x2552df;VisuMZ[_0x30bed1(0x3ce)](_0x49ae41,_0x49ae41),$gameSystem[_0x30bed1(0x1da)](_0x49ae41[_0x30bed1(0x243)]);}),PluginManager[_0x2552df(0x3b0)](pluginData[_0x2552df(0x1f7)],'PlayerIconChange',_0x270b5c=>{const _0x42f1bd=_0x2552df;VisuMZ[_0x42f1bd(0x3ce)](_0x270b5c,_0x270b5c),$gameSystem[_0x42f1bd(0x374)]($gamePlayer,_0x270b5c[_0x42f1bd(0x1f4)],_0x270b5c[_0x42f1bd(0x50e)],_0x270b5c[_0x42f1bd(0x5b8)],_0x270b5c['IconBlendMode']);}),PluginManager['registerCommand'](pluginData[_0x2552df(0x1f7)],'PlayerIconDelete',_0x4f1542=>{const _0x45ed6e=_0x2552df;VisuMZ[_0x45ed6e(0x3ce)](_0x4f1542,_0x4f1542),$gameSystem[_0x45ed6e(0x2f5)]($gamePlayer);}),PluginManager['registerCommand'](pluginData['name'],_0x2552df(0x372),_0x338636=>{const _0x36a499=_0x2552df;VisuMZ[_0x36a499(0x3ce)](_0x338636,_0x338636);const _0x58966c=$gameTemp[_0x36a499(0x205)]();_0x338636[_0x36a499(0x1e0)]=_0x338636[_0x36a499(0x1e0)]||$gameMap[_0x36a499(0x399)]();const _0x4b1693=[_0x338636[_0x36a499(0x1e0)],_0x338636[_0x36a499(0x149)]||_0x58966c[_0x36a499(0x350)](),_0x338636[_0x36a499(0x33a)]];switch(_0x338636[_0x36a499(0x436)]){case'ON':$gameSelfSwitches[_0x36a499(0x17c)](_0x4b1693,!![]);break;case _0x36a499(0x41c):$gameSelfSwitches[_0x36a499(0x17c)](_0x4b1693,![]);break;case'Toggle':$gameSelfSwitches[_0x36a499(0x17c)](_0x4b1693,!$gameSelfSwitches['value'](_0x4b1693));break;}}),PluginManager['registerCommand'](pluginData['name'],_0x2552df(0x4b2),_0x522cc3=>{const _0x3d82e7=_0x2552df;VisuMZ[_0x3d82e7(0x3ce)](_0x522cc3,_0x522cc3);const _0x2bd2f9=$gameTemp['getLastPluginCommandInterpreter']();_0x522cc3[_0x3d82e7(0x1e0)]=_0x522cc3[_0x3d82e7(0x1e0)]||$gameMap[_0x3d82e7(0x399)]();const _0x43ef04=[_0x522cc3[_0x3d82e7(0x1e0)],_0x522cc3['EventId']||_0x2bd2f9[_0x3d82e7(0x350)](),_0x3d82e7(0x46d)[_0x3d82e7(0x265)](_0x522cc3[_0x3d82e7(0x3d8)])];switch(_0x522cc3[_0x3d82e7(0x436)]){case'ON':$gameSelfSwitches[_0x3d82e7(0x17c)](_0x43ef04,!![]);break;case _0x3d82e7(0x41c):$gameSelfSwitches[_0x3d82e7(0x17c)](_0x43ef04,![]);break;case _0x3d82e7(0x462):$gameSelfSwitches[_0x3d82e7(0x17c)](_0x43ef04,!$gameSelfSwitches[_0x3d82e7(0x2c1)](_0x43ef04));break;}}),PluginManager[_0x2552df(0x3b0)](pluginData[_0x2552df(0x1f7)],_0x2552df(0x1f2),_0x2530f1=>{const _0x3d5b94=_0x2552df;VisuMZ[_0x3d5b94(0x3ce)](_0x2530f1,_0x2530f1);const _0x386204=$gameTemp[_0x3d5b94(0x205)]();_0x2530f1[_0x3d5b94(0x1e0)]=_0x2530f1[_0x3d5b94(0x1e0)]||$gameMap['mapId']();const _0x497617=[_0x2530f1[_0x3d5b94(0x1e0)],_0x2530f1['EventId']||_0x386204['eventId'](),'Self\x20Variable\x20%1'['format'](_0x2530f1['VariableId'])],_0x53e764=VisuMZ['OperateValues']($gameSelfSwitches[_0x3d5b94(0x2c1)](_0x497617),_0x2530f1['Value'],_0x2530f1[_0x3d5b94(0x179)]);$gameSelfSwitches[_0x3d5b94(0x17c)](_0x497617,_0x53e764);}),PluginManager[_0x2552df(0x3b0)](pluginData[_0x2552df(0x1f7)],_0x2552df(0x361),_0x9e9002=>{const _0x275267=_0x2552df;VisuMZ[_0x275267(0x3ce)](_0x9e9002,_0x9e9002);const _0x461434=$gameTemp[_0x275267(0x205)](),_0x352f32={'template':_0x9e9002[_0x275267(0x281)],'mapId':_0x9e9002[_0x275267(0x1e0)]||$gameMap[_0x275267(0x399)](),'eventId':_0x9e9002['EventId']||_0x461434[_0x275267(0x350)](),'x':_0x9e9002[_0x275267(0x2cf)],'y':_0x9e9002[_0x275267(0x30e)],'spawnPreserved':_0x9e9002['Preserve'],'spawnEventId':$gameMap['_spawnedEvents'][_0x275267(0x506)]+0x3e8},_0x15cc21=_0x9e9002[_0x275267(0x44a)]||0x0,_0x364d77=$gameMap['prepareSpawnedEventAtXY'](_0x352f32,_0x9e9002[_0x275267(0x505)],_0x9e9002[_0x275267(0x27e)]);if(_0x15cc21){if(_0x275267(0x25b)!==_0x275267(0x25b)){if(!_0xc3d7de['inBattle']()&&_0x1c389f<0x0){let _0x36d6c2=_0x1982a1[_0x275267(0x480)]();if(_0x36d6c2>0x0)return _0x46435b['followers']()[_0x275267(0x3c6)](_0x36d6c2-0x1);}return _0x495604[_0x275267(0x338)][_0x275267(0x5ea)][_0x275267(0x4d9)](this,_0x3df1ae);}else $gameSwitches['setValue'](_0x15cc21,!!_0x364d77);}}),PluginManager[_0x2552df(0x3b0)](pluginData[_0x2552df(0x1f7)],_0x2552df(0x2f4),_0x36c2e6=>{const _0x332eac=_0x2552df;VisuMZ['ConvertParams'](_0x36c2e6,_0x36c2e6);const _0x1897c2=$gameTemp['getLastPluginCommandInterpreter'](),_0x5efbfe={'template':_0x36c2e6['TemplateName'],'mapId':_0x36c2e6[_0x332eac(0x1e0)]||$gameMap[_0x332eac(0x399)](),'eventId':_0x36c2e6['EventId']||_0x1897c2[_0x332eac(0x350)](),'x':-0x1,'y':-0x1,'spawnPreserved':_0x36c2e6[_0x332eac(0x3d3)],'spawnEventId':$gameMap[_0x332eac(0x1bf)][_0x332eac(0x506)]+0x3e8},_0x509a86=_0x36c2e6[_0x332eac(0x44a)]||0x0,_0x42780e=$gameMap[_0x332eac(0x238)](_0x5efbfe,_0x36c2e6[_0x332eac(0x537)],_0x36c2e6['Collision'],_0x36c2e6[_0x332eac(0x27e)]);if(_0x509a86){if(_0x332eac(0x486)!==_0x332eac(0x486)){this[_0x332eac(0x524)]=!![];return;}else $gameSwitches[_0x332eac(0x17c)](_0x509a86,!!_0x42780e);}}),PluginManager['registerCommand'](pluginData[_0x2552df(0x1f7)],_0x2552df(0x311),_0x37493e=>{const _0x2b34fc=_0x2552df;VisuMZ[_0x2b34fc(0x3ce)](_0x37493e,_0x37493e);const _0x205abc=$gameTemp[_0x2b34fc(0x205)](),_0x600b0b={'template':_0x37493e['TemplateName'],'mapId':_0x37493e[_0x2b34fc(0x1e0)]||$gameMap[_0x2b34fc(0x399)](),'eventId':_0x37493e[_0x2b34fc(0x149)]||_0x205abc[_0x2b34fc(0x350)](),'x':-0x1,'y':-0x1,'spawnPreserved':_0x37493e['Preserve'],'spawnEventId':$gameMap[_0x2b34fc(0x1bf)][_0x2b34fc(0x506)]+0x3e8},_0x2e8c59=_0x37493e[_0x2b34fc(0x44a)]||0x0,_0x513dcf=$gameMap[_0x2b34fc(0x1b2)](_0x600b0b,_0x37493e[_0x2b34fc(0x2cc)],_0x37493e['Collision'],_0x37493e[_0x2b34fc(0x27e)]);_0x2e8c59&&(_0x2b34fc(0x3f6)!==_0x2b34fc(0x1aa)?$gameSwitches[_0x2b34fc(0x17c)](_0x2e8c59,!!_0x513dcf):this['autoEventIconBuffer'](_0xfa5376));}),PluginManager[_0x2552df(0x3b0)](pluginData[_0x2552df(0x1f7)],_0x2552df(0x1c9),_0x3fe353=>{const _0x40f946=_0x2552df;VisuMZ[_0x40f946(0x3ce)](_0x3fe353,_0x3fe353);const _0xf97eab=$gameTemp[_0x40f946(0x205)]();$gameMap[_0x40f946(0x516)](_0x3fe353[_0x40f946(0x196)]||_0xf97eab[_0x40f946(0x350)]());}),PluginManager[_0x2552df(0x3b0)](pluginData[_0x2552df(0x1f7)],'SpawnEventDespawnAtXY',_0x56715b=>{const _0x291977=_0x2552df;VisuMZ['ConvertParams'](_0x56715b,_0x56715b);const _0x3f0847=_0x56715b['PosX'],_0x325bfd=_0x56715b[_0x291977(0x30e)];$gameMap[_0x291977(0x36e)](_0x3f0847,_0x325bfd);}),PluginManager[_0x2552df(0x3b0)](pluginData[_0x2552df(0x1f7)],'SpawnEventDespawnRegions',_0x4a0af0=>{const _0x45c780=_0x2552df;VisuMZ[_0x45c780(0x3ce)](_0x4a0af0,_0x4a0af0),$gameMap['despawnRegions'](_0x4a0af0[_0x45c780(0x537)]);}),PluginManager['registerCommand'](pluginData[_0x2552df(0x1f7)],_0x2552df(0x2ab),_0x2f7db6=>{const _0x2808e7=_0x2552df;VisuMZ['ConvertParams'](_0x2f7db6,_0x2f7db6),$gameMap[_0x2808e7(0x199)](_0x2f7db6[_0x2808e7(0x2cc)]);}),PluginManager[_0x2552df(0x3b0)](pluginData[_0x2552df(0x1f7)],_0x2552df(0x485),_0x14914c=>{const _0xaa7ede=_0x2552df;VisuMZ['ConvertParams'](_0x14914c,_0x14914c),$gameMap[_0xaa7ede(0x529)]();}),VisuMZ[_0x2552df(0x338)][_0x2552df(0x3cf)]=Scene_Boot[_0x2552df(0x4c3)]['onDatabaseLoaded'],Scene_Boot[_0x2552df(0x4c3)]['onDatabaseLoaded']=function(){const _0x1fcb59=_0x2552df;VisuMZ['EventsMoveCore']['Scene_Boot_onDatabaseLoaded'][_0x1fcb59(0x4d9)](this),this['process_VisuMZ_EventsMoveCore_LoadTemplateMaps'](),this['process_VisuMZ_EventsMoveCore_Switches_Variables']();if(VisuMZ[_0x1fcb59(0x338)][_0x1fcb59(0x544)])VisuMZ[_0x1fcb59(0x338)][_0x1fcb59(0x544)][_0x1fcb59(0x52e)]();},VisuMZ['PreloadedMaps']=[],VisuMZ[_0x2552df(0x5ba)]={},Scene_Boot['prototype'][_0x2552df(0x4f9)]=function(){const _0x737079=_0x2552df;if(DataManager[_0x737079(0x2e2)]()||DataManager['isEventTest']())return;const _0x4311a2=VisuMZ[_0x737079(0x338)][_0x737079(0x30c)][_0x737079(0x358)],_0x1d3f4a=_0x4311a2[_0x737079(0x346)]['slice'](0x0);for(const _0x87826b of _0x4311a2[_0x737079(0x5b2)]){_0x87826b[_0x737079(0x2cd)]=_0x87826b[_0x737079(0x2cd)][_0x737079(0x519)]()[_0x737079(0x1c7)](),VisuMZ[_0x737079(0x5ba)][_0x87826b['Name']]=_0x87826b;if(!_0x1d3f4a[_0x737079(0x508)](_0x87826b[_0x737079(0x2d1)]))_0x1d3f4a[_0x737079(0x39c)](_0x87826b['MapID']);}for(const _0xfd8426 of _0x1d3f4a){if(VisuMZ['PreloadedMaps'][_0xfd8426])continue;const _0x587d35=_0x737079(0x1fc)[_0x737079(0x265)](_0xfd8426[_0x737079(0x500)](0x3)),_0x262ae8=_0x737079(0x233)[_0x737079(0x265)](_0xfd8426);DataManager[_0x737079(0x4a2)](_0x262ae8,_0x587d35),setTimeout(this[_0x737079(0x5a7)]['bind'](this,_0xfd8426,_0x262ae8),0x64);}},Scene_Boot[_0x2552df(0x4c3)][_0x2552df(0x5a7)]=function(_0x5be0dc,_0x3d597b){const _0x2214b3=_0x2552df;if(window[_0x3d597b]){if(_0x2214b3(0x1d1)===_0x2214b3(0x13c)){let _0x427e23=_0xf8099['EventsMoveCore'][_0x2214b3(0x30c)][_0x2214b3(0x210)]['FavorHorz']?_0x49887c:_0x1b7886;return this['moveStraight'](_0x427e23);}else VisuMZ['PreloadedMaps'][_0x5be0dc]=window[_0x3d597b],window[_0x3d597b]=undefined;}else'mqpRi'!==_0x2214b3(0x5f0)?this[_0x2214b3(0x411)]():setTimeout(this[_0x2214b3(0x5a7)]['bind'](this,_0x5be0dc,_0x3d597b),0x64);},VisuMZ[_0x2552df(0x154)]=[],VisuMZ[_0x2552df(0x4b4)]=[],VisuMZ[_0x2552df(0x2bc)]=[],VisuMZ[_0x2552df(0x58f)]=[],Scene_Boot[_0x2552df(0x4c3)][_0x2552df(0x413)]=function(){const _0x4157db=_0x2552df;for(let _0x40eea9=0x1;_0x40eea9<$dataSystem['switches'][_0x4157db(0x506)];_0x40eea9++){if(_0x4157db(0x2f8)===_0x4157db(0x2f8)){if($dataSystem[_0x4157db(0x1ba)][_0x40eea9][_0x4157db(0x47f)](/<JS>\s*([\s\S]*)\s*<\/JS>/i))VisuMZ['AdvancedSwitches'][_0x4157db(0x39c)](_0x40eea9);if($dataSystem[_0x4157db(0x1ba)][_0x40eea9][_0x4157db(0x47f)](/<SELF>/i))VisuMZ['SelfSwitches']['push'](_0x40eea9);}else{if(this[_0x4157db(0x49d)]===_0x5d113d)this[_0x4157db(0x1cf)]();this[_0x4157db(0x49d)]=_0x35368f;}}for(let _0x33f094=0x1;_0x33f094<$dataSystem['variables'][_0x4157db(0x506)];_0x33f094++){if('YAmJT'!==_0x4157db(0x16e)){if($dataSystem[_0x4157db(0x51c)][_0x33f094][_0x4157db(0x47f)](/<JS>\s*([\s\S]*)\s*<\/JS>/i))VisuMZ[_0x4157db(0x2bc)][_0x4157db(0x39c)](_0x33f094);if($dataSystem['variables'][_0x33f094]['match'](/<SELF>/i))VisuMZ[_0x4157db(0x58f)][_0x4157db(0x39c)](_0x33f094);}else _0x2a6a71=[_0x3d92f8,_0x5a6e51,_0x2d41c0[_0x4157db(0x519)]()[_0x4157db(0x1c7)]()];}},VisuMZ[_0x2552df(0x338)][_0x2552df(0x544)]={},VisuMZ[_0x2552df(0x338)][_0x2552df(0x544)][_0x2552df(0x52e)]=function(){const _0x4b4e9d=_0x2552df;this[_0x4b4e9d(0x4b7)]=new Game_CPCInterpreter(),this[_0x4b4e9d(0x5da)]();},VisuMZ[_0x2552df(0x338)][_0x2552df(0x544)]['determineCommonEventsWithCPC']=function(){const _0x3e235b=_0x2552df;this[_0x3e235b(0x59c)]=[];for(const _0xac0d60 of $dataCommonEvents){if(!_0xac0d60)continue;VisuMZ['EventsMoveCore']['CustomPageConditions']['loadCPC'](_0xac0d60);if(_0xac0d60[_0x3e235b(0x587)][_0x3e235b(0x506)]>0x0)this[_0x3e235b(0x59c)][_0x3e235b(0x39c)](_0xac0d60['id']);}},VisuMZ['EventsMoveCore'][_0x2552df(0x544)][_0x2552df(0x165)]=function(_0x3b75d4,_0x3c76aa){const _0x580798=_0x2552df;return this['_interpreter'][_0x580798(0x4fd)](_0x3b75d4,_0x3c76aa),this[_0x580798(0x4b7)][_0x580798(0x240)](),this[_0x580798(0x4b7)][_0x580798(0x1b4)];},VisuMZ[_0x2552df(0x338)][_0x2552df(0x544)][_0x2552df(0x5a4)]=function(_0xdd706){const _0x5d0746=_0x2552df;let _0x289767=![];_0xdd706[_0x5d0746(0x587)]=[];for(const _0x5d7598 of _0xdd706[_0x5d0746(0x475)]){if([0x6c,0x198]['includes'](_0x5d7598[_0x5d0746(0x24a)])){const _0x3a12b6=_0x5d7598[_0x5d0746(0x322)][0x0];if(_0x3a12b6[_0x5d0746(0x47f)](/<PAGE (?:CONDITION|CONDITIONS)>/i))_0x289767=!![];else _0x3a12b6[_0x5d0746(0x47f)](/<\/PAGE (?:CONDITION|CONDITIONS)>/i)&&(_0x289767=![]);}_0x289767&&_0xdd706[_0x5d0746(0x587)]['push'](_0x5d7598);}},getSelfSwitchValue=function(_0x2717ef,_0x361851,_0x313ad6){const _0x110d69=_0x2552df;let _0x43d31f=[_0x2717ef,_0x361851,_0x110d69(0x46d)[_0x110d69(0x265)](_0x313ad6)];if(typeof _0x313ad6===_0x110d69(0x577)){if(_0x110d69(0x168)!==_0x110d69(0x4ef))_0x43d31f=[_0x2717ef,_0x361851,_0x313ad6[_0x110d69(0x519)]()['trim']()];else{const _0x383a83=_0x286b98[_0x110d69(0x338)][_0x110d69(0x320)]['call'](this),_0x220296=_0x4f05b9[_0x110d69(0x338)][_0x110d69(0x544)]['_commonEvents']['map'](_0x164bc3=>_0x2de97d[_0x164bc3]);return _0x383a83['concat'](_0x220296)[_0x110d69(0x5c1)]((_0x379d5b,_0x26bf28,_0x43c532)=>_0x43c532[_0x110d69(0x2ae)](_0x379d5b)===_0x26bf28);}}return $gameSelfSwitches[_0x110d69(0x2c1)](_0x43d31f);},getSelfVariableValue=function(_0x8958f8,_0x3b2d73,_0x3244d1){const _0x43bd8f=_0x2552df,_0x6539eb=[_0x8958f8,_0x3b2d73,_0x43bd8f(0x3a3)[_0x43bd8f(0x265)](_0x3244d1)];return $gameSelfSwitches[_0x43bd8f(0x2c1)](_0x6539eb);},setSelfSwitchValue=function(_0x2676e1,_0x14067e,_0x57436a,_0x530a13){const _0x1cbc00=_0x2552df;let _0x34275d=[_0x2676e1,_0x14067e,_0x1cbc00(0x46d)[_0x1cbc00(0x265)](_0x57436a)];typeof _0x57436a===_0x1cbc00(0x577)&&('vHDga'===_0x1cbc00(0x3e3)?(this[_0x1cbc00(0x2aa)]=![],this[_0x1cbc00(0x23b)](),this['clearDashing'](),this[_0x1cbc00(0x35e)](),this[_0x1cbc00(0x284)]()):_0x34275d=[_0x2676e1,_0x14067e,_0x57436a[_0x1cbc00(0x519)]()['trim']()]),$gameSelfSwitches[_0x1cbc00(0x17c)](_0x34275d,_0x530a13);},setSelfVariableValue=function(_0x3e4bd1,_0x5a4f4a,_0x4fa1eb,_0x3d7ac0){const _0x12e7f4=_0x2552df,_0x4e817f=[_0x3e4bd1,_0x5a4f4a,_0x12e7f4(0x3a3)[_0x12e7f4(0x265)](_0x4fa1eb)];$gameSelfSwitches['setValue'](_0x4e817f,_0x3d7ac0);},DataManager[_0x2552df(0x528)]=function(_0x5406d8){const _0x2cad99=_0x2552df;if(SceneManager['_scene'][_0x2cad99(0x57d)]===Scene_Debug)return![];return VisuMZ[_0x2cad99(0x154)]['includes'](_0x5406d8);},DataManager[_0x2552df(0x494)]=function(_0x575d9f){const _0x2ec8dc=_0x2552df;if(SceneManager['_scene']['constructor']===Scene_Debug)return![];return VisuMZ[_0x2ec8dc(0x2bc)][_0x2ec8dc(0x508)](_0x575d9f);},DataManager[_0x2552df(0x147)]=function(_0x300e68){const _0x35b23e=_0x2552df;if(SceneManager[_0x35b23e(0x3d0)][_0x35b23e(0x57d)]===Scene_Debug)return![];return VisuMZ[_0x35b23e(0x4b4)][_0x35b23e(0x508)](_0x300e68);},DataManager[_0x2552df(0x5a0)]=function(_0x3667be){const _0x36bdbb=_0x2552df;if(SceneManager[_0x36bdbb(0x3d0)][_0x36bdbb(0x57d)]===Scene_Debug)return![];return VisuMZ[_0x36bdbb(0x58f)][_0x36bdbb(0x508)](_0x3667be);},VisuMZ[_0x2552df(0x338)][_0x2552df(0x50f)]=Game_Temp[_0x2552df(0x4c3)][_0x2552df(0x142)],Game_Temp[_0x2552df(0x4c3)][_0x2552df(0x142)]=function(_0x70feb5,_0x1bed8a){const _0x15bf80=_0x2552df;if(this[_0x15bf80(0x3dd)](_0x70feb5,_0x1bed8a))return;VisuMZ[_0x15bf80(0x338)][_0x15bf80(0x50f)][_0x15bf80(0x4d9)](this,_0x70feb5,_0x1bed8a);},Game_Temp[_0x2552df(0x4c3)][_0x2552df(0x3dd)]=function(_0x3c5dfa,_0x5c9875){const _0x5708a2=_0x2552df,_0xc16d2a=$gameMap[_0x5708a2(0x34e)](_0x3c5dfa,_0x5c9875);for(const _0x31112b of _0xc16d2a){if(_0x31112b&&_0x31112b[_0x5708a2(0x4f4)]())return _0x31112b[_0x5708a2(0x5b9)](),!![];}return![];},Game_Temp['prototype'][_0x2552df(0x407)]=function(_0x30f49b){const _0x1788f8=_0x2552df;this[_0x1788f8(0x176)]=_0x30f49b;},Game_Temp['prototype'][_0x2552df(0x205)]=function(){const _0x114eb9=_0x2552df;return this[_0x114eb9(0x176)];},Game_Temp[_0x2552df(0x4c3)][_0x2552df(0x15b)]=function(_0x2bb9b8){this['_selfTarget']=_0x2bb9b8;},Game_Temp[_0x2552df(0x4c3)]['clearSelfTarget']=function(){const _0x319b57=_0x2552df;this[_0x319b57(0x554)]=undefined;},Game_Temp[_0x2552df(0x4c3)][_0x2552df(0x222)]=function(){return this['_selfTarget'];},VisuMZ[_0x2552df(0x338)][_0x2552df(0x33f)]=Game_System[_0x2552df(0x4c3)][_0x2552df(0x52e)],Game_System['prototype']['initialize']=function(){const _0x4d1f6a=_0x2552df;VisuMZ[_0x4d1f6a(0x338)][_0x4d1f6a(0x33f)][_0x4d1f6a(0x4d9)](this),this[_0x4d1f6a(0x1cf)](),this[_0x4d1f6a(0x490)]();},Game_System[_0x2552df(0x4c3)][_0x2552df(0x1cf)]=function(){const _0x1b7985=_0x2552df;this['_EventsMoveCoreSettings']={'DashingEnable':!![],'EventAutoMovement':!![],'VisibleEventLabels':!![]},this[_0x1b7985(0x3d4)]={},this[_0x1b7985(0x47b)]=[],this['_PreservedEventMorphData']={},this[_0x1b7985(0x48f)]={},this['_DisablePlayerControl']=![],this[_0x1b7985(0x430)]=_0x1b7985(0x359);},Game_System[_0x2552df(0x4c3)]['isDashingEnabled']=function(){const _0xedbfd9=_0x2552df;if(this[_0xedbfd9(0x48c)]===undefined)this[_0xedbfd9(0x1cf)]();if(this[_0xedbfd9(0x48c)][_0xedbfd9(0x4de)]===undefined)this[_0xedbfd9(0x1cf)]();return this[_0xedbfd9(0x48c)][_0xedbfd9(0x4de)];},Game_System[_0x2552df(0x4c3)]['setDashingEnabled']=function(_0x3636a4){const _0x2cc7c2=_0x2552df;if(this[_0x2cc7c2(0x48c)]===undefined)this[_0x2cc7c2(0x1cf)]();if(this['_EventsMoveCoreSettings'][_0x2cc7c2(0x4de)]===undefined)this[_0x2cc7c2(0x1cf)]();this[_0x2cc7c2(0x48c)]['DashingEnable']=_0x3636a4;},Game_System[_0x2552df(0x4c3)][_0x2552df(0x593)]=function(){const _0x3437eb=_0x2552df;if(this[_0x3437eb(0x48c)]===undefined)this[_0x3437eb(0x1cf)]();if(this[_0x3437eb(0x48c)][_0x3437eb(0x36d)]===undefined)this[_0x3437eb(0x1cf)]();return this[_0x3437eb(0x48c)]['EventAutoMovement'];},Game_System['prototype'][_0x2552df(0x59e)]=function(_0x5eba43){const _0x2ffd28=_0x2552df;if(this[_0x2ffd28(0x48c)]===undefined)this[_0x2ffd28(0x1cf)]();if(this['_EventsMoveCoreSettings']['EventAutoMovement']===undefined)this['initEventsMoveCore']();this[_0x2ffd28(0x48c)][_0x2ffd28(0x36d)]=_0x5eba43;},Game_System[_0x2552df(0x4c3)][_0x2552df(0x364)]=function(){const _0x51f74b=_0x2552df;if(this[_0x51f74b(0x48c)]===undefined)this[_0x51f74b(0x1cf)]();if(this[_0x51f74b(0x48c)][_0x51f74b(0x3c7)]===undefined)this[_0x51f74b(0x1cf)]();return this[_0x51f74b(0x48c)][_0x51f74b(0x3c7)];},Game_System['prototype']['setEventLabelsVisible']=function(_0x71d757){const _0xb4e588=_0x2552df;if(this[_0xb4e588(0x48c)]===undefined)this['initEventsMoveCore']();if(this[_0xb4e588(0x48c)][_0xb4e588(0x3c7)]===undefined)this[_0xb4e588(0x1cf)]();this[_0xb4e588(0x48c)]['VisibleEventLabels']=_0x71d757;},Game_System[_0x2552df(0x4c3)]['isPlayerControlDisabled']=function(){const _0xd44065=_0x2552df;if(this[_0xd44065(0x2b7)]===undefined){if(_0xd44065(0x53d)!=='szVov'){const _0x2fe34a=this[_0xd44065(0x46c)](_0x4fd8ed,_0x481129,!![]);if(_0x2fe34a)this[_0xd44065(0x484)](_0x2fe34a);}else this[_0xd44065(0x2b7)]=![];}return this[_0xd44065(0x2b7)];},Game_System[_0x2552df(0x4c3)][_0x2552df(0x22d)]=function(_0x2e3590){const _0x41af21=_0x2552df;this[_0x41af21(0x2b7)]=_0x2e3590;},Game_System['prototype'][_0x2552df(0x203)]=function(){return this['_PlayerDiagonalSetting'];},Game_System[_0x2552df(0x4c3)][_0x2552df(0x1da)]=function(_0x3fb04b){const _0x326034=_0x2552df;this['_PlayerDiagonalSetting']=String(_0x3fb04b)[_0x326034(0x244)]()[_0x326034(0x1c7)]();},Game_System[_0x2552df(0x4c3)][_0x2552df(0x55a)]=function(_0x17a07f){const _0x41a20a=_0x2552df;if(this[_0x41a20a(0x3d4)]===undefined)this[_0x41a20a(0x1cf)]();if(!_0x17a07f)return null;if(_0x17a07f===$gamePlayer){if(_0x41a20a(0x40c)===_0x41a20a(0x3b4)){if(_0x43eccc>0x0&&_0x2ca151<0x0)return 0x9;if(_0x3a8d65<0x0&&_0x1cd86a<0x0)return 0x7;if(_0x546d4d>0x0&&_0x435f49>0x0)return 0x3;if(_0x5be9a4<0x0&&_0xbc9de5>0x0)return 0x1;}else return this[_0x41a20a(0x3d4)][_0x41a20a(0x2b9)];}else{if(_0x41a20a(0x16d)!==_0x41a20a(0x16d))_0x166e94=[-_0x30a415[_0x41a20a(0x186)],0x0,_0x2380e3[_0x41a20a(0x186)]][this[_0x41a20a(0x15e)][_0x41a20a(0x333)]()];else{const _0x945af4=VisuMZ[_0x41a20a(0x338)][_0x41a20a(0x30c)],_0x391759=_0x41a20a(0x5d1)[_0x41a20a(0x265)](_0x17a07f['_mapId'],_0x17a07f[_0x41a20a(0x155)]);return this[_0x41a20a(0x3d4)][_0x391759]=this[_0x41a20a(0x3d4)][_0x391759]||{'iconIndex':0x0,'bufferX':_0x945af4[_0x41a20a(0x41b)][_0x41a20a(0x1df)],'bufferY':_0x945af4[_0x41a20a(0x41b)]['BufferY'],'blendMode':_0x945af4[_0x41a20a(0x41b)][_0x41a20a(0x2ee)]},this['_EventIcons'][_0x391759];}}},Game_System[_0x2552df(0x4c3)][_0x2552df(0x374)]=function(_0x4fa90c,_0x12e688,_0x432896,_0x3d03f8,_0x429081){const _0x385e19=_0x2552df;if(this[_0x385e19(0x3d4)]===undefined)this[_0x385e19(0x1cf)]();const _0x3a7583=_0x4fa90c===$gamePlayer?_0x385e19(0x2b9):'Map%1-Event%2'[_0x385e19(0x265)](_0x4fa90c[_0x385e19(0x3f5)],_0x4fa90c[_0x385e19(0x155)]);this[_0x385e19(0x3d4)][_0x3a7583]={'iconIndex':_0x12e688,'bufferX':_0x432896,'bufferY':_0x3d03f8,'blendMode':_0x429081};},Game_System[_0x2552df(0x4c3)][_0x2552df(0x556)]=function(_0x19979f,_0x4b1ff5,_0x3a82b0,_0x9cef6c,_0x51bc36,_0x4be1a2){const _0x14bf6d=_0x2552df;if(this[_0x14bf6d(0x3d4)]===undefined)this[_0x14bf6d(0x1cf)]();const _0x29daae=_0x14bf6d(0x5d1)['format'](_0x19979f,_0x4b1ff5);this[_0x14bf6d(0x3d4)][_0x29daae]={'iconIndex':_0x3a82b0,'bufferX':_0x9cef6c,'bufferY':_0x51bc36,'blendMode':_0x4be1a2};},Game_System[_0x2552df(0x4c3)][_0x2552df(0x2f5)]=function(_0x5810b6){const _0x3c52a1=_0x2552df;if(this[_0x3c52a1(0x3d4)]===undefined)this['initEventsMoveCore']();if(!_0x5810b6)return null;if(_0x5810b6===$gamePlayer)delete this[_0x3c52a1(0x3d4)]['Player'];else{if(_0x3c52a1(0x561)!==_0x3c52a1(0x3e6))this['deleteIconsOnEventsDataKey'](_0x5810b6['_mapId'],_0x5810b6[_0x3c52a1(0x155)]);else return this[_0x3c52a1(0x1c4)](_0x1e0eb1,_0x208466);}},Game_System[_0x2552df(0x4c3)][_0x2552df(0x1db)]=function(_0xbb4450,_0x2edb18){const _0x547853=_0x2552df;if(this[_0x547853(0x3d4)]===undefined)this[_0x547853(0x1cf)]();const _0x65360b=_0x547853(0x5d1)[_0x547853(0x265)](_0xbb4450,_0x2edb18);delete this['_EventIcons'][_0x65360b];},Game_System[_0x2552df(0x4c3)][_0x2552df(0x4dd)]=function(_0x480141){const _0xa7f913=_0x2552df;if(this['_SavedEventLocations']===undefined)this[_0xa7f913(0x1cf)]();if(!_0x480141)return null;const _0x4881b2=_0xa7f913(0x5d1)['format'](_0x480141[_0xa7f913(0x3f5)],_0x480141['_eventId']);return this[_0xa7f913(0x48f)][_0x4881b2];},Game_System[_0x2552df(0x4c3)][_0x2552df(0x1e2)]=function(_0x54bcec){const _0x1bf1b2=_0x2552df;if(this[_0x1bf1b2(0x48f)]===undefined)this[_0x1bf1b2(0x1cf)]();if(!_0x54bcec)return;const _0x527767=_0x1bf1b2(0x5d1)[_0x1bf1b2(0x265)](_0x54bcec['_mapId'],_0x54bcec[_0x1bf1b2(0x155)]);this[_0x1bf1b2(0x48f)][_0x527767]={'direction':_0x54bcec['direction'](),'x':Math['round'](_0x54bcec['x']),'y':Math['round'](_0x54bcec['y']),'pageIndex':_0x54bcec[_0x1bf1b2(0x57b)],'moveRouteIndex':_0x54bcec[_0x1bf1b2(0x473)]};},Game_System[_0x2552df(0x4c3)][_0x2552df(0x3cb)]=function(_0x416484){const _0x402dd8=_0x2552df;if(this[_0x402dd8(0x48f)]===undefined)this['initEventsMoveCore']();if(!_0x416484)return;this['deleteSavedEventLocationKey'](_0x416484['_mapId'],_0x416484[_0x402dd8(0x155)]);},Game_System[_0x2552df(0x4c3)][_0x2552df(0x3b7)]=function(_0x544ccc,_0x12b0d7){const _0x2de97e=_0x2552df;if(this['_SavedEventLocations']===undefined)this[_0x2de97e(0x1cf)]();const _0x4c25de=_0x2de97e(0x5d1)[_0x2de97e(0x265)](_0x544ccc,_0x12b0d7);delete this['_SavedEventLocations'][_0x4c25de];},Game_System['prototype'][_0x2552df(0x5d3)]=function(_0x35be96,_0x3ecf21,_0x4c3096,_0xc1d9bb,_0x58a493,_0x5dc62f,_0x551415){const _0x13fa7f=_0x2552df;if(this[_0x13fa7f(0x48f)]===undefined)this[_0x13fa7f(0x1cf)]();const _0x89168=_0x13fa7f(0x5d1)['format'](_0x35be96,_0x3ecf21);this[_0x13fa7f(0x48f)][_0x89168]={'direction':_0x58a493,'x':Math[_0x13fa7f(0x594)](_0x4c3096),'y':Math['round'](_0xc1d9bb),'pageIndex':_0x5dc62f,'moveRouteIndex':_0x551415};},Game_System['prototype'][_0x2552df(0x35f)]=function(_0x111171){const _0x3b9b71=_0x2552df;if(this[_0x3b9b71(0x3c3)]===undefined)this[_0x3b9b71(0x1cf)]();if(!_0x111171)return;const _0x51afca=_0x3b9b71(0x5d1)[_0x3b9b71(0x265)](_0x111171[_0x3b9b71(0x3f5)],_0x111171[_0x3b9b71(0x155)]);return this['_PreservedEventMorphData'][_0x51afca];},Game_System[_0x2552df(0x4c3)][_0x2552df(0x1e8)]=function(_0x3d2dd2,_0x2185f2,_0x1c8a61,_0x53f6df,_0x3b5b32){const _0x1d18be=_0x2552df;if(this['_PreservedEventMorphData']===undefined)this[_0x1d18be(0x1cf)]();const _0x1cbf6d=_0x1d18be(0x5d1)['format'](_0x3d2dd2,_0x2185f2);this['_PreservedEventMorphData'][_0x1cbf6d]={'template':_0x1c8a61,'mapId':_0x53f6df,'eventId':_0x3b5b32};},Game_System['prototype'][_0x2552df(0x17d)]=function(_0x5bf7f3,_0x362354){const _0x34b84e=_0x2552df;if(this[_0x34b84e(0x3c3)]===undefined)this[_0x34b84e(0x1cf)]();const _0x5c4d05=_0x34b84e(0x5d1)[_0x34b84e(0x265)](_0x5bf7f3,_0x362354);delete this[_0x34b84e(0x3c3)][_0x5c4d05];},Game_System[_0x2552df(0x4c3)]['getMapSpawnedEventData']=function(_0x32ea33){const _0x324614=_0x2552df;if(this[_0x324614(0x47b)]===undefined)this[_0x324614(0x1cf)]();return this[_0x324614(0x47b)][_0x32ea33]=this[_0x324614(0x47b)][_0x32ea33]||[],this['_MapSpawnedEventData'][_0x32ea33];},Game_System['prototype'][_0x2552df(0x415)]=function(_0x148e6c){const _0x319f65=_0x2552df,_0x184aff=this[_0x319f65(0x5bb)](_0x148e6c);for(const _0x5d39e2 of _0x184aff){if(!_0x5d39e2)continue;if(_0x5d39e2[_0x319f65(0x13b)])continue;const _0x81399d=_0x184aff[_0x319f65(0x2ae)](_0x5d39e2);_0x184aff[_0x81399d]=null;}},Game_System[_0x2552df(0x4c3)][_0x2552df(0x490)]=function(){const _0x2046bd=_0x2552df;this[_0x2046bd(0x343)]=0x0,this[_0x2046bd(0x2ca)]=![];},Game_System[_0x2552df(0x4c3)][_0x2552df(0x480)]=function(){const _0x338ca6=_0x2552df;if(this[_0x338ca6(0x343)]===undefined)this[_0x338ca6(0x490)]();return this[_0x338ca6(0x343)];},Game_System[_0x2552df(0x4c3)][_0x2552df(0x388)]=function(_0x34e8d9){const _0x5b488b=_0x2552df;if(this['_followerControlID']===undefined)this[_0x5b488b(0x490)]();this['_followerControlID']=_0x34e8d9;;},VisuMZ['EventsMoveCore']['Game_Interpreter_character']=Game_Interpreter[_0x2552df(0x4c3)][_0x2552df(0x1f6)],Game_Interpreter[_0x2552df(0x4c3)][_0x2552df(0x1f6)]=function(_0x5057f8){const _0x49f6e1=_0x2552df;if(!$gameParty[_0x49f6e1(0x588)]()&&_0x5057f8<0x0){let _0x2a4276=$gameSystem[_0x49f6e1(0x480)]();if(_0x2a4276>0x0)return $gamePlayer[_0x49f6e1(0x280)]()[_0x49f6e1(0x3c6)](_0x2a4276-0x1);}return VisuMZ['EventsMoveCore'][_0x49f6e1(0x5ea)][_0x49f6e1(0x4d9)](this,_0x5057f8);},Game_System[_0x2552df(0x4c3)][_0x2552df(0x14f)]=function(){const _0x9e77f6=_0x2552df;if(this['_followerChaseOff']===undefined)this[_0x9e77f6(0x490)]();return this[_0x9e77f6(0x2ca)];},Game_System[_0x2552df(0x4c3)]['setStopFollowerChasing']=function(_0x4dc476){const _0xeffc2e=_0x2552df;if(this[_0xeffc2e(0x2ca)]===undefined)this[_0xeffc2e(0x490)]();this[_0xeffc2e(0x2ca)]=_0x4dc476;;},VisuMZ['EventsMoveCore']['Game_Timer_initialize']=Game_Timer['prototype']['initialize'],Game_Timer[_0x2552df(0x4c3)][_0x2552df(0x52e)]=function(){const _0x2f152a=_0x2552df;VisuMZ[_0x2f152a(0x338)][_0x2f152a(0x2b5)][_0x2f152a(0x4d9)](this),this[_0x2f152a(0x1cf)]();},Game_Timer[_0x2552df(0x4c3)][_0x2552df(0x1cf)]=function(){const _0x5c6d64=_0x2552df;this[_0x5c6d64(0x248)]=![],this[_0x5c6d64(0x160)]=-0x1,this[_0x5c6d64(0x49d)]=0x0;},Game_Timer[_0x2552df(0x4c3)][_0x2552df(0x185)]=function(_0x137f34){const _0xeea305=_0x2552df;if(!_0x137f34)return;if(!this[_0xeea305(0x54b)])return;if(this['_paused'])return;if(this[_0xeea305(0x3bf)]<=0x0)return;if(this['_speed']===undefined)this[_0xeea305(0x1cf)]();this['_frames']+=this[_0xeea305(0x160)];if(this['_frames']<=0x0){if(_0xeea305(0x27f)===_0xeea305(0x36c)){if(this[_0xeea305(0x343)]===_0x11d1db)this[_0xeea305(0x490)]();return this[_0xeea305(0x343)];}else this[_0xeea305(0x435)]();}},VisuMZ[_0x2552df(0x338)][_0x2552df(0x2a9)]=Game_Timer['prototype'][_0x2552df(0x4f5)],Game_Timer[_0x2552df(0x4c3)][_0x2552df(0x4f5)]=function(_0x590d17){const _0x1afd38=_0x2552df;VisuMZ[_0x1afd38(0x338)][_0x1afd38(0x2a9)][_0x1afd38(0x4d9)](this,_0x590d17);if(this[_0x1afd38(0x248)]===undefined)this['initEventsMoveCore']();this['_paused']=![];},VisuMZ['EventsMoveCore'][_0x2552df(0x50b)]=Game_Timer['prototype'][_0x2552df(0x52d)],Game_Timer['prototype'][_0x2552df(0x52d)]=function(){const _0x4bd8b2=_0x2552df;VisuMZ[_0x4bd8b2(0x338)][_0x4bd8b2(0x50b)][_0x4bd8b2(0x4d9)](this);if(this[_0x4bd8b2(0x248)]===undefined)this[_0x4bd8b2(0x1cf)]();this['_paused']=![];},Game_Timer[_0x2552df(0x4c3)][_0x2552df(0x573)]=function(){const _0x411688=_0x2552df;if(this[_0x411688(0x3bf)]<=0x0)return;this['_paused']=!![],this[_0x411688(0x54b)]=!![];},Game_Timer[_0x2552df(0x4c3)]['resume']=function(){const _0xe25827=_0x2552df;if(this['_frames']<=0x0)return;this[_0xe25827(0x248)]=![],this[_0xe25827(0x54b)]=!![];},Game_Timer[_0x2552df(0x4c3)][_0x2552df(0x341)]=function(_0x1f356e){const _0x35d497=_0x2552df;this['_frames']=this[_0x35d497(0x3bf)]||0x0,this[_0x35d497(0x3bf)]+=_0x1f356e,this[_0x35d497(0x54b)]=!![],this[_0x35d497(0x3bf)]=Math['max'](0x1,this['_frames']);},Game_Timer[_0x2552df(0x4c3)][_0x2552df(0x371)]=function(_0x4560a4){const _0x41fd4b=_0x2552df;this[_0x41fd4b(0x3bf)]=this[_0x41fd4b(0x3bf)]||0x0,this[_0x41fd4b(0x3bf)]=_0x4560a4,this[_0x41fd4b(0x54b)]=!![],this[_0x41fd4b(0x3bf)]=Math[_0x41fd4b(0x504)](0x1,this['_frames']);},Game_Timer[_0x2552df(0x4c3)][_0x2552df(0x384)]=function(_0x232bad){const _0x42245b=_0x2552df;this[_0x42245b(0x160)]=_0x232bad,this[_0x42245b(0x54b)]=!![];if(_0x232bad>0x0){if(_0x42245b(0x303)!=='JgRwX'){for(let _0x355484=0x1;_0x355484<_0x5a43ff[_0x42245b(0x1ba)][_0x42245b(0x506)];_0x355484++){if(_0x2e5a9b[_0x42245b(0x1ba)][_0x355484][_0x42245b(0x47f)](/<JS>\s*([\s\S]*)\s*<\/JS>/i))_0x405f68[_0x42245b(0x154)]['push'](_0x355484);if(_0x13da63[_0x42245b(0x1ba)][_0x355484][_0x42245b(0x47f)](/<SELF>/i))_0x2de8a2[_0x42245b(0x4b4)][_0x42245b(0x39c)](_0x355484);}for(let _0x46fd94=0x1;_0x46fd94<_0x2a8d84[_0x42245b(0x51c)][_0x42245b(0x506)];_0x46fd94++){if(_0x2e0e08[_0x42245b(0x51c)][_0x46fd94][_0x42245b(0x47f)](/<JS>\s*([\s\S]*)\s*<\/JS>/i))_0x38c039['AdvancedVariables'][_0x42245b(0x39c)](_0x46fd94);if(_0x3434fb[_0x42245b(0x51c)][_0x46fd94]['match'](/<SELF>/i))_0x24ec1c[_0x42245b(0x58f)][_0x42245b(0x39c)](_0x46fd94);}}else this[_0x42245b(0x3bf)]=Math[_0x42245b(0x504)](this[_0x42245b(0x3bf)],0x1);}},Game_Timer[_0x2552df(0x4c3)][_0x2552df(0x167)]=function(_0x3f1520){const _0x224f32=_0x2552df;if(this[_0x224f32(0x49d)]===undefined)this['initEventsMoveCore']();this[_0x224f32(0x49d)]=_0x3f1520;},VisuMZ[_0x2552df(0x338)][_0x2552df(0x5c5)]=Game_Timer['prototype'][_0x2552df(0x435)],Game_Timer[_0x2552df(0x4c3)][_0x2552df(0x435)]=function(){const _0x3c1c88=_0x2552df;if(this[_0x3c1c88(0x49d)]===undefined)this[_0x3c1c88(0x1cf)]();if(this['_expireCommonEvent'])$gameTemp[_0x3c1c88(0x20e)](this[_0x3c1c88(0x49d)]);else{if(_0x3c1c88(0x260)!==_0x3c1c88(0x17b))VisuMZ[_0x3c1c88(0x338)][_0x3c1c88(0x5c5)][_0x3c1c88(0x4d9)](this);else{if([0x1,0x2,0x3][_0x3c1c88(0x508)](_0x4191f3))_0x3731a3+=0x1;if([0x7,0x8,0x9]['includes'](_0x413d6f))_0x4aa65d-=0x1;return this[_0x3c1c88(0x54f)](_0x3064f6);}}},VisuMZ[_0x2552df(0x338)][_0x2552df(0x40b)]=Game_Message[_0x2552df(0x4c3)][_0x2552df(0x13f)],Game_Message['prototype'][_0x2552df(0x13f)]=function(_0x47e270){const _0x38d97b=_0x2552df;VisuMZ['EventsMoveCore'][_0x38d97b(0x40b)][_0x38d97b(0x4d9)](this,_0x47e270),this['_selfEvent']=$gameTemp[_0x38d97b(0x222)]();},Game_Message['prototype']['registerSelfEvent']=function(){const _0x5a23f7=_0x2552df;$gameTemp['registerSelfTarget'](this[_0x5a23f7(0x137)]);},VisuMZ[_0x2552df(0x338)]['Game_Switches_value']=Game_Switches[_0x2552df(0x4c3)][_0x2552df(0x2c1)],Game_Switches[_0x2552df(0x4c3)][_0x2552df(0x2c1)]=function(_0xe2812b){const _0x4bf10b=_0x2552df;if(DataManager[_0x4bf10b(0x528)](_0xe2812b))return!!this['advancedValue'](_0xe2812b);else return DataManager['isSelfSwitch'](_0xe2812b)?!!this[_0x4bf10b(0x144)](_0xe2812b):VisuMZ[_0x4bf10b(0x338)][_0x4bf10b(0x31a)][_0x4bf10b(0x4d9)](this,_0xe2812b);},Game_Switches['advancedFunc']={},Game_Switches[_0x2552df(0x4c3)][_0x2552df(0x1d8)]=function(_0x4fd47d){const _0x4c2f97=_0x2552df;if(!Game_Switches['advancedFunc'][_0x4fd47d]){$dataSystem['switches'][_0x4fd47d][_0x4c2f97(0x47f)](/<JS>\s*([\s\S]*)\s*<\/JS>/i);const _0x541c33='return\x20%1'[_0x4c2f97(0x265)](String(RegExp['$1']));Game_Switches['advancedFunc'][_0x4fd47d]=new Function(_0x4c2f97(0x191),_0x541c33);}const _0x12e059=$gameTemp[_0x4c2f97(0x222)]()||this;return Game_Switches[_0x4c2f97(0x39f)][_0x4fd47d][_0x4c2f97(0x4d9)](_0x12e059,_0x4fd47d);},Game_Switches[_0x2552df(0x4c3)][_0x2552df(0x144)]=function(_0x431c9f){const _0x32ffff=_0x2552df,_0x1e154f=$gameTemp[_0x32ffff(0x222)]()||this;if(_0x1e154f[_0x32ffff(0x57d)]!==Game_Event){if(_0x32ffff(0x548)!==_0x32ffff(0x272))return VisuMZ[_0x32ffff(0x338)][_0x32ffff(0x31a)][_0x32ffff(0x4d9)](this,_0x431c9f);else _0x347482=!![];}else{if(_0x32ffff(0x3db)===_0x32ffff(0x3db)){const _0x493690=[_0x1e154f[_0x32ffff(0x3f5)],_0x1e154f[_0x32ffff(0x155)],_0x32ffff(0x46d)['format'](_0x431c9f)];return $gameSelfSwitches[_0x32ffff(0x2c1)](_0x493690);}else{_0x42945f[_0x32ffff(0x3ce)](_0x412659,_0x2e4603);const _0x2e503a=_0x35da45[_0x32ffff(0x205)]();_0x367b1e[_0x32ffff(0x1e0)]=_0x4adf8c['MapId']||_0x57abf0[_0x32ffff(0x399)]();const _0x592eaa=[_0x1cd51c[_0x32ffff(0x1e0)],_0x5db48a[_0x32ffff(0x149)]||_0x2e503a[_0x32ffff(0x350)](),_0x32ffff(0x3a3)[_0x32ffff(0x265)](_0x49e09b[_0x32ffff(0x30f)])],_0x45c6e8=_0x278a74['OperateValues'](_0x2c0490['value'](_0x592eaa),_0x3970c4[_0x32ffff(0x436)],_0x2d2cfd[_0x32ffff(0x179)]);_0x59d9d8[_0x32ffff(0x17c)](_0x592eaa,_0x45c6e8);}}},VisuMZ['EventsMoveCore']['Game_Switches_setValue']=Game_Switches[_0x2552df(0x4c3)][_0x2552df(0x17c)],Game_Switches[_0x2552df(0x4c3)]['setValue']=function(_0x4b992a,_0x3692c7){const _0xc23e26=_0x2552df;if(DataManager[_0xc23e26(0x147)](_0x4b992a)){if('WckMW'===_0xc23e26(0x391))this[_0xc23e26(0x40e)](_0x4b992a,_0x3692c7);else return this[_0xc23e26(0x567)](0x8,_0x52152(_0x576bbf['$1']));}else VisuMZ[_0xc23e26(0x338)][_0xc23e26(0x536)]['call'](this,_0x4b992a,_0x3692c7);},Game_Switches[_0x2552df(0x4c3)][_0x2552df(0x40e)]=function(_0x3e9680,_0x5f3524){const _0x271a29=_0x2552df,_0xf7c891=$gameTemp[_0x271a29(0x222)]()||this;if(_0xf7c891['constructor']!==Game_Event)_0x271a29(0x256)!==_0x271a29(0x256)?(this[_0x271a29(0x535)]=![],this['_screenZoomScale']=_0x126458[_0x271a29(0x530)](),this['_eventScreenX']=this[_0x271a29(0x42c)]['screenX'](),this[_0x271a29(0x36f)]=this[_0x271a29(0x42c)][_0x271a29(0x3ae)](),this[_0x271a29(0x2dc)]=this['_event'][_0x271a29(0x2c7)][_0x271a29(0x42a)],this['_eventLabelOffsetY']=this['_event'][_0x271a29(0x2c7)][_0x271a29(0x34a)],this[_0x271a29(0x2f0)]=this['_event'][_0x271a29(0x57b)],this['_cacheVisibility']=this[_0x271a29(0x28f)](),this['_cacheSystemVisible']=_0x1c4b6d[_0x271a29(0x364)](),this[_0x271a29(0x20c)]=_0xc14d5c['x'],this[_0x271a29(0x4ed)]=_0x35dc5e['y'],this[_0x271a29(0x4a0)]=this[_0x271a29(0x42c)]['x'],this['_visibleEventY']=this[_0x271a29(0x42c)]['y']):VisuMZ['EventsMoveCore'][_0x271a29(0x536)]['call'](this,_0x3e9680,_0x5f3524);else{if(_0x271a29(0x29f)===_0x271a29(0x215)){if(_0x104b0a)this[_0x271a29(0x3a7)](_0x15a1b4['x'],_0x1c16de['y']);}else{const _0x26af45=[_0xf7c891[_0x271a29(0x3f5)],_0xf7c891[_0x271a29(0x155)],_0x271a29(0x46d)[_0x271a29(0x265)](_0x3e9680)];$gameSelfSwitches[_0x271a29(0x17c)](_0x26af45,_0x5f3524);}}},VisuMZ[_0x2552df(0x338)][_0x2552df(0x44c)]=Game_Variables[_0x2552df(0x4c3)][_0x2552df(0x2c1)],Game_Variables[_0x2552df(0x4c3)]['value']=function(_0x5ca3df){const _0xd82b6e=_0x2552df;if(DataManager['isAdvancedVariable'](_0x5ca3df))return this[_0xd82b6e(0x1d8)](_0x5ca3df);else{if(DataManager[_0xd82b6e(0x5a0)](_0x5ca3df)){if(_0xd82b6e(0x2d0)!==_0xd82b6e(0x4ac))return this[_0xd82b6e(0x144)](_0x5ca3df);else this['_selfTarget']=_0x4a466f;}else return VisuMZ[_0xd82b6e(0x338)][_0xd82b6e(0x44c)][_0xd82b6e(0x4d9)](this,_0x5ca3df);}},Game_Variables[_0x2552df(0x39f)]={},Game_Variables[_0x2552df(0x4c3)][_0x2552df(0x1d8)]=function(_0x4ca059){const _0x2c1966=_0x2552df;if(!Game_Variables[_0x2c1966(0x39f)][_0x4ca059]){$dataSystem[_0x2c1966(0x51c)][_0x4ca059][_0x2c1966(0x47f)](/<JS>\s*([\s\S]*)\s*<\/JS>/i);const _0x286dd5=_0x2c1966(0x4b8)[_0x2c1966(0x265)](String(RegExp['$1']));Game_Variables[_0x2c1966(0x39f)][_0x4ca059]=new Function('variableId',_0x286dd5);}const _0x2dc475=$gameTemp[_0x2c1966(0x222)]()||this;return Game_Variables[_0x2c1966(0x39f)][_0x4ca059][_0x2c1966(0x4d9)](_0x2dc475,_0x4ca059);},Game_Variables[_0x2552df(0x4c3)][_0x2552df(0x144)]=function(_0x29dde3){const _0x46f25f=_0x2552df,_0x29343e=$gameTemp['getSelfTarget']()||this;if(_0x29343e[_0x46f25f(0x57d)]!==Game_Event){if(_0x46f25f(0x555)===_0x46f25f(0x555))return VisuMZ[_0x46f25f(0x338)][_0x46f25f(0x44c)][_0x46f25f(0x4d9)](this,_0x29dde3);else _0x1384df[_0x46f25f(0x15b)](this['_selfEvent']);}else{const _0xec49e5=[_0x29343e['_mapId'],_0x29343e[_0x46f25f(0x155)],_0x46f25f(0x3a3)[_0x46f25f(0x265)](_0x29dde3)];return $gameSelfSwitches[_0x46f25f(0x2c1)](_0xec49e5);}},VisuMZ['EventsMoveCore'][_0x2552df(0x4ae)]=Game_Variables[_0x2552df(0x4c3)][_0x2552df(0x17c)],Game_Variables[_0x2552df(0x4c3)]['setValue']=function(_0x3d737e,_0x8fd92c){const _0x56edb2=_0x2552df;if(DataManager[_0x56edb2(0x5a0)](_0x3d737e)){if(_0x56edb2(0x5bf)!==_0x56edb2(0x5bf))return this[_0x56edb2(0x2b3)]();else this[_0x56edb2(0x40e)](_0x3d737e,_0x8fd92c);}else VisuMZ[_0x56edb2(0x338)][_0x56edb2(0x4ae)]['call'](this,_0x3d737e,_0x8fd92c);},Game_Variables[_0x2552df(0x4c3)]['setSelfValue']=function(_0x281389,_0x34bba9){const _0x11bcef=_0x2552df,_0x3305b8=$gameTemp['getSelfTarget']()||this;if(_0x3305b8['constructor']!==Game_Event){if('ExUAX'!==_0x11bcef(0x17a))VisuMZ[_0x11bcef(0x338)][_0x11bcef(0x4ae)][_0x11bcef(0x4d9)](this,_0x281389,_0x34bba9);else{if(_0x17ff9e[_0x11bcef(0x494)](_0x3afb56))return this[_0x11bcef(0x1d8)](_0x5efe63);else return _0x137556[_0x11bcef(0x5a0)](_0x55cd73)?this['selfValue'](_0x3303f9):_0x1345ff[_0x11bcef(0x338)][_0x11bcef(0x44c)][_0x11bcef(0x4d9)](this,_0x13f9a3);}}else{if(_0x11bcef(0x4fa)===_0x11bcef(0x15f))_0xd9542e[_0x241f56]=_0x5c0cc7[_0x570c26]['slice'](0x0);else{const _0x79f116=[_0x3305b8['_mapId'],_0x3305b8[_0x11bcef(0x155)],_0x11bcef(0x3a3)[_0x11bcef(0x265)](_0x281389)];$gameSelfSwitches[_0x11bcef(0x17c)](_0x79f116,_0x34bba9);}}},VisuMZ[_0x2552df(0x338)][_0x2552df(0x4c2)]=Game_SelfSwitches[_0x2552df(0x4c3)][_0x2552df(0x2c1)],Game_SelfSwitches[_0x2552df(0x4c3)][_0x2552df(0x2c1)]=function(_0x396774){const _0x25942e=_0x2552df;if(_0x396774[0x2]['match'](/SELF/i))return this[_0x25942e(0x144)](_0x396774);else{if(_0x25942e(0x52b)===_0x25942e(0x389)){const _0x99d88='%1Allow'[_0x25942e(0x265)](_0x5daf77[_0x25942e(0x295)](0x0)[_0x25942e(0x519)]()+_0x32b140[_0x25942e(0x509)](0x1));if(_0x28c579[_0x99d88])return _0x56255f[_0x99d88][_0x25942e(0x508)](_0x4d5905);}else{return VisuMZ['EventsMoveCore']['Game_SelfSwitches_value']['call'](this,_0x396774);;}}},Game_SelfSwitches[_0x2552df(0x4c3)][_0x2552df(0x144)]=function(_0x261a8c){const _0x59defe=_0x2552df;return _0x261a8c[0x2][_0x59defe(0x47f)](/VAR/i)?this[_0x59defe(0x4df)][_0x261a8c]||0x0:!!this[_0x59defe(0x4df)][_0x261a8c];},VisuMZ[_0x2552df(0x338)][_0x2552df(0x1e4)]=Game_SelfSwitches[_0x2552df(0x4c3)]['setValue'],Game_SelfSwitches[_0x2552df(0x4c3)][_0x2552df(0x17c)]=function(_0x596fe5,_0x4c4518){const _0x45e06c=_0x2552df;if(_0x596fe5[0x2][_0x45e06c(0x47f)](/SELF/i))this[_0x45e06c(0x40e)](_0x596fe5,_0x4c4518);else{if(_0x45e06c(0x549)===_0x45e06c(0x549))VisuMZ[_0x45e06c(0x338)][_0x45e06c(0x1e4)][_0x45e06c(0x4d9)](this,_0x596fe5,_0x4c4518);else{if(!this[_0x45e06c(0x21f)](_0xc6af3b,_0x2de7b1))return![];}}},Game_SelfSwitches['prototype'][_0x2552df(0x40e)]=function(_0x45aa10,_0x48b33d){const _0x377918=_0x2552df;this['_data'][_0x45aa10]=_0x45aa10[0x2][_0x377918(0x47f)](/VAR/i)?_0x48b33d:!!_0x48b33d,this[_0x377918(0x59d)]();},VisuMZ[_0x2552df(0x338)][_0x2552df(0x1ec)]=Game_Enemy['prototype'][_0x2552df(0x207)],Game_Enemy[_0x2552df(0x4c3)][_0x2552df(0x207)]=function(_0x2306b9){const _0x403a09=_0x2552df;$gameTemp[_0x403a09(0x15b)](this);const _0x5a73d3=VisuMZ[_0x403a09(0x338)][_0x403a09(0x1ec)][_0x403a09(0x4d9)](this,_0x2306b9);return $gameTemp[_0x403a09(0x21c)](),_0x5a73d3;},VisuMZ[_0x2552df(0x338)]['Game_Troop_meetsConditions']=Game_Troop[_0x2552df(0x4c3)][_0x2552df(0x23c)],Game_Troop[_0x2552df(0x4c3)][_0x2552df(0x23c)]=function(_0x240ea2){const _0x11cbe7=_0x2552df;$gameTemp['registerSelfTarget'](this);const _0xfcaefe=VisuMZ[_0x11cbe7(0x338)][_0x11cbe7(0x522)][_0x11cbe7(0x4d9)](this,_0x240ea2);return $gameTemp['clearSelfTarget'](),_0xfcaefe;},VisuMZ[_0x2552df(0x338)]['Game_Map_setup']=Game_Map[_0x2552df(0x4c3)]['setup'],Game_Map[_0x2552df(0x4c3)][_0x2552df(0x4fd)]=function(_0x287d90){const _0x34d8f9=_0x2552df;this[_0x34d8f9(0x415)](_0x287d90),this[_0x34d8f9(0x289)](),VisuMZ[_0x34d8f9(0x338)][_0x34d8f9(0x22c)][_0x34d8f9(0x4d9)](this,_0x287d90),this[_0x34d8f9(0x289)](),this[_0x34d8f9(0x521)](),this[_0x34d8f9(0x3e1)](),this['setupSaveEventLocations'](),this[_0x34d8f9(0x1f0)](),this[_0x34d8f9(0x289)]();},VisuMZ['EventsMoveCore'][_0x2552df(0x37a)]=Game_Map['prototype'][_0x2552df(0x38d)],Game_Map[_0x2552df(0x4c3)][_0x2552df(0x38d)]=function(){const _0x4ad388=_0x2552df;VisuMZ[_0x4ad388(0x338)][_0x4ad388(0x37a)][_0x4ad388(0x4d9)](this),this[_0x4ad388(0x2d2)]();},Game_Map[_0x2552df(0x45c)]=0xc8,Game_Map[_0x2552df(0x4c3)]['determineEventOverload']=function(){const _0xa26f38=_0x2552df,_0x2501a4=Game_Map['_eventOverloadThreshold'];this['_eventOverload']=this[_0xa26f38(0x5b7)]()[_0xa26f38(0x506)]>_0x2501a4;if(this[_0xa26f38(0x158)]&&$gameTemp[_0xa26f38(0x448)]()){}},Game_Map[_0x2552df(0x4c3)][_0x2552df(0x14e)]=function(){const _0x5d635b=_0x2552df;return this[_0x5d635b(0x158)];},Game_Map[_0x2552df(0x4c3)]['clearEventCache']=function(){const _0x3dce62=_0x2552df;this[_0x3dce62(0x474)]=undefined;},Game_Map[_0x2552df(0x4c3)][_0x2552df(0x521)]=function(){const _0x3a6be3=_0x2552df;this[_0x3a6be3(0x356)]=VisuMZ[_0x3a6be3(0x338)][_0x3a6be3(0x30c)][_0x3a6be3(0x210)]['EnableDir8'];const _0x554478=$dataMap[_0x3a6be3(0x166)]||'';if(_0x554478[_0x3a6be3(0x47f)](/<DIAGONAL MOVEMENT: ON>/i)){if(_0x3a6be3(0x296)==='ENNCQ')this[_0x3a6be3(0x356)]=!![];else return _0x21fc39[_0x3a6be3(0x520)]();}else _0x554478[_0x3a6be3(0x47f)](/<DIAGONAL MOVEMENT: OFF>/i)&&(this['_diagonalSupport']=![]);},Game_Map[_0x2552df(0x4c3)][_0x2552df(0x3c8)]=function(){const _0x55d1bc=_0x2552df,_0x2395c4=$gameSystem[_0x55d1bc(0x203)]();if(_0x2395c4==='enable')return!![];if(_0x2395c4==='disable')return![];if(this[_0x55d1bc(0x356)]===undefined)this[_0x55d1bc(0x521)]();return this[_0x55d1bc(0x356)];},Game_Map[_0x2552df(0x4c3)][_0x2552df(0x4af)]=function(_0x6d4b6d,_0x1ce16d){const _0x1f381a=_0x2552df;if([0x1,0x4,0x7][_0x1f381a(0x508)](_0x1ce16d))_0x6d4b6d-=0x1;if([0x3,0x6,0x9][_0x1f381a(0x508)](_0x1ce16d))_0x6d4b6d+=0x1;return this[_0x1f381a(0x152)](_0x6d4b6d);},Game_Map[_0x2552df(0x4c3)][_0x2552df(0x3bb)]=function(_0x5a831b,_0x4eee70){const _0x1100a0=_0x2552df;if([0x1,0x2,0x3]['includes'](_0x4eee70))_0x5a831b+=0x1;if([0x7,0x8,0x9][_0x1100a0(0x508)](_0x4eee70))_0x5a831b-=0x1;return this[_0x1100a0(0x54f)](_0x5a831b);},Game_Map[_0x2552df(0x4c3)][_0x2552df(0x3f3)]=function(_0x54b9b8,_0xde3c4c,_0xa03bd1,_0x4771cb){const _0x4d4f31=_0x2552df;return Math[_0x4d4f31(0x504)](Math['abs'](this[_0x4d4f31(0x5cf)](_0x54b9b8,_0xa03bd1)),Math['abs'](this[_0x4d4f31(0x5d4)](_0xde3c4c,_0x4771cb)));},Game_Map[_0x2552df(0x4c3)][_0x2552df(0x3e1)]=function(){const _0x17c664=_0x2552df,_0x3f552f=VisuMZ['EventsMoveCore'][_0x17c664(0x30c)][_0x17c664(0x537)],_0x2f7ac2={},_0x9c4ffd=[_0x17c664(0x220),_0x17c664(0x45b),_0x17c664(0x551)],_0x268330=[_0x17c664(0x3c2),_0x17c664(0x1b5),_0x17c664(0x2b9),_0x17c664(0x22b),'Vehicle',_0x17c664(0x173),_0x17c664(0x419),_0x17c664(0x454)];for(const _0x3d4a98 of _0x9c4ffd){for(const _0x5a0d98 of _0x268330){const _0x296c08=_0x17c664(0x3fc)[_0x17c664(0x265)](_0x5a0d98,_0x3d4a98);if(_0x3f552f[_0x296c08]){if('zjgpx'===_0x17c664(0x3c1))_0x2f7ac2[_0x296c08]=_0x3f552f[_0x296c08][_0x17c664(0x509)](0x0);else return this['processMoveRouteSelfSwitch'](_0x3eaa99['$1'],_0x2a2ac1['$2']);}}}const _0x25a35f=$dataMap[_0x17c664(0x166)]||'',_0x2c0797=_0x25a35f[_0x17c664(0x47f)](/<(.*) (.*) REGION:[ ]*(\d+(?:\s*,\s*\d+)*)>/gi);if(_0x2c0797)for(const _0x1ad6ae of _0x2c0797){if(_0x17c664(0x51b)===_0x17c664(0x51b)){_0x1ad6ae[_0x17c664(0x47f)](/<(.*) (.*) REGION:[ ]*(\d+(?:\s*,\s*\d+)*)>/i);let _0x55b0b2=String(RegExp['$1'])['toLowerCase']()[_0x17c664(0x1c7)](),_0x1dd813=String(RegExp['$2'])[_0x17c664(0x244)]()[_0x17c664(0x1c7)]();const _0x156f36=JSON[_0x17c664(0x4b1)]('['+RegExp['$3'][_0x17c664(0x47f)](/\d+/g)+']');_0x55b0b2=_0x55b0b2[_0x17c664(0x295)](0x0)[_0x17c664(0x519)]()+_0x55b0b2[_0x17c664(0x509)](0x1),_0x1dd813=_0x1dd813[_0x17c664(0x295)](0x0)[_0x17c664(0x519)]()+_0x1dd813[_0x17c664(0x509)](0x1);const _0x58f95a=_0x17c664(0x3fc)['format'](_0x55b0b2,_0x1dd813);if(_0x2f7ac2[_0x58f95a])_0x2f7ac2[_0x58f95a]=_0x2f7ac2[_0x58f95a][_0x17c664(0x31b)](_0x156f36);}else _0x5d2a65[_0x17c664(0x221)](),_0x56e822[_0x17c664(0x338)][_0x17c664(0x427)][_0x17c664(0x4d9)](this),_0xcc09ec[_0x17c664(0x21c)]();}this[_0x17c664(0x169)]=_0x2f7ac2;},Game_Map[_0x2552df(0x4c3)][_0x2552df(0x2e7)]=function(_0x226aa7,_0x5850c9,_0x397b37,_0x5c3b7b){const _0x49e53c=_0x2552df,_0x3747ed=this['roundXWithDirection'](_0x226aa7,_0x397b37),_0x3e950b=this['roundYWithDirection'](_0x5850c9,_0x397b37),_0x50f2d2=this[_0x49e53c(0x1d9)](_0x3747ed,_0x3e950b),_0x386c17=this['_regionRules'];if(_0x386c17[_0x49e53c(0x2df)]['includes'](_0x50f2d2))return!![];else{if(_0x5c3b7b===_0x49e53c(0x487))return _0x386c17['PlayerAllow'][_0x49e53c(0x508)](_0x50f2d2)||_0x386c17[_0x49e53c(0x385)]['includes'](_0x50f2d2);else{if(_0x5c3b7b==='event')return _0x386c17['EventAllow'][_0x49e53c(0x508)](_0x50f2d2)||_0x386c17['WalkAllow'][_0x49e53c(0x508)](_0x50f2d2);else{if(_0x386c17['VehicleAllow'][_0x49e53c(0x508)](_0x50f2d2)){if(_0x49e53c(0x5a6)!==_0x49e53c(0x5a6))this['_frames']=this[_0x49e53c(0x3bf)]||0x0,this[_0x49e53c(0x3bf)]+=_0x35a41d,this[_0x49e53c(0x54b)]=!![],this[_0x49e53c(0x3bf)]=_0x2d56fc[_0x49e53c(0x504)](0x1,this[_0x49e53c(0x3bf)]);else return!![];}else{const _0x1e0f7a=_0x49e53c(0x3eb)['format'](_0x5c3b7b[_0x49e53c(0x295)](0x0)['toUpperCase']()+_0x5c3b7b[_0x49e53c(0x509)](0x1));if(_0x386c17[_0x1e0f7a])return _0x386c17[_0x1e0f7a][_0x49e53c(0x508)](_0x50f2d2);}}}}return![];},Game_Map[_0x2552df(0x4c3)][_0x2552df(0x558)]=function(_0x22ee99,_0x3afaaf,_0x46c056,_0x287255){const _0x2ef26c=_0x2552df,_0x46de7e=this['roundXWithDirection'](_0x22ee99,_0x46c056),_0x7fc54b=this[_0x2ef26c(0x3bb)](_0x3afaaf,_0x46c056),_0xe478f6=this[_0x2ef26c(0x1d9)](_0x46de7e,_0x7fc54b),_0xdc496=this['_regionRules'];if(_0xdc496[_0x2ef26c(0x3fd)][_0x2ef26c(0x508)](_0xe478f6))return!![];else{if(_0x287255===_0x2ef26c(0x487)){if('nJSVa'===_0x2ef26c(0x461))return _0xdc496[_0x2ef26c(0x4ba)][_0x2ef26c(0x508)](_0xe478f6)||_0xdc496[_0x2ef26c(0x3c9)][_0x2ef26c(0x508)](_0xe478f6);else this[_0x2ef26c(0x568)]=_0x55fcd6['getSelfTarget'](),_0x21cf1c['EventsMoveCore'][_0x2ef26c(0x1eb)][_0x2ef26c(0x4d9)](this,_0x4fb9a4,_0x3dee9c);}else{if(_0x287255==='event'){if(_0x2ef26c(0x17e)===_0x2ef26c(0x575))this[_0x2ef26c(0x25a)]=0x0;else return _0xdc496[_0x2ef26c(0x4a4)][_0x2ef26c(0x508)](_0xe478f6)||_0xdc496[_0x2ef26c(0x3c9)][_0x2ef26c(0x508)](_0xe478f6);}else{if(_0xdc496['VehicleForbid'][_0x2ef26c(0x508)](_0xe478f6)){if(_0x2ef26c(0x5ac)!==_0x2ef26c(0x146))return!![];else _0x433ea4['EventsMoveCore'][_0x2ef26c(0x562)][_0x2ef26c(0x4d9)](this,_0x541617,_0x43d2a0),this['_randomHomeX']=_0xf1c92b,this[_0x2ef26c(0x3dc)]=_0x181e6d;}else{if('HIjBh'!==_0x2ef26c(0x223)){if(_0x2b7f30[_0x2ef26c(0x47f)](/(?:CRASH|COLLIDE|COLLISION|ENCOUNTER|TOUCH)/i))return!![];else return _0x16d584[_0x2ef26c(0x47f)](/(?:AVOID|EVADE|DODGE)/i)?![]:![];}else{const _0x29e1b3='%1Forbid'[_0x2ef26c(0x265)](_0x287255[_0x2ef26c(0x295)](0x0)[_0x2ef26c(0x519)]()+_0x287255[_0x2ef26c(0x509)](0x1));if(_0xdc496[_0x29e1b3])return _0xdc496[_0x29e1b3]['includes'](_0xe478f6);}}}}}return![];},Game_Map[_0x2552df(0x4c3)][_0x2552df(0x569)]=function(_0x532156,_0x33d1d0,_0x52e02c,_0x74022c){const _0x159cf3=_0x2552df;_0x52e02c=_0x74022c===_0x159cf3(0x25c)?0x5:_0x52e02c;const _0x51e62a=this[_0x159cf3(0x4af)](_0x532156,_0x52e02c),_0x5ef0ed=this[_0x159cf3(0x3bb)](_0x33d1d0,_0x52e02c),_0x5a67e5=this[_0x159cf3(0x1d9)](_0x51e62a,_0x5ef0ed),_0x2eac27=this[_0x159cf3(0x169)];if(_0x2eac27[_0x159cf3(0x163)][_0x159cf3(0x508)](_0x5a67e5)){if(_0x159cf3(0x1b1)!==_0x159cf3(0x1b1)){for(let _0x42e68a=-this[_0x159cf3(0x463)][_0x159cf3(0x32f)];_0x42e68a<=this[_0x159cf3(0x463)]['right'];_0x42e68a++){for(let _0x34df5c=-this[_0x159cf3(0x463)]['up'];_0x34df5c<=this[_0x159cf3(0x463)][_0x159cf3(0x441)];_0x34df5c++){if(!_0x30c70d[_0x159cf3(0x4c3)][_0x159cf3(0x1fb)]['call'](this,_0xb19aab+_0x42e68a,_0x27c09a+_0x34df5c,_0x4c8ad6))return![];}}return!![];}else return!![];}else{const _0xad8103='%1Dock'[_0x159cf3(0x265)](_0x74022c[_0x159cf3(0x295)](0x0)['toUpperCase']()+_0x74022c[_0x159cf3(0x509)](0x1));if(_0x2eac27[_0xad8103])return _0x2eac27[_0xad8103][_0x159cf3(0x508)](_0x5a67e5);}return![];},VisuMZ['EventsMoveCore'][_0x2552df(0x170)]=Game_Map[_0x2552df(0x4c3)][_0x2552df(0x32e)],Game_Map['prototype']['refresh']=function(){const _0x559c0e=_0x2552df;VisuMZ[_0x559c0e(0x338)][_0x559c0e(0x170)][_0x559c0e(0x4d9)](this),this['checkNeedForPeriodicRefresh']();},Game_Map[_0x2552df(0x4c3)][_0x2552df(0x595)]=function(){const _0x4850d0=_0x2552df;this[_0x4850d0(0x524)]=![];if(this['events']()[_0x4850d0(0x214)](_0x412a31=>_0x412a31[_0x4850d0(0x571)]())){if(_0x4850d0(0x1dc)!=='WDscT'){this['_needsPeriodicRefresh']=!![];return;}else{if(_0x273aec<0x3e8)return;if(!this[_0x4850d0(0x1bf)])return;const _0xd9de13=this[_0x4850d0(0x218)](_0x5c6896);_0xd9de13[_0x4850d0(0x2d4)](-0x1,-0x1),_0xd9de13[_0x4850d0(0x55c)](),this[_0x4850d0(0x1bf)][_0x1680c0-0x3e8]=null,this['clearEventCache']();}}if(this[_0x4850d0(0x5b7)]()[_0x4850d0(0x214)](_0x13dae9=>_0x13dae9['hasCPCs']())){this[_0x4850d0(0x524)]=!![];return;}if(this[_0x4850d0(0x59c)][_0x4850d0(0x214)](_0x577f8a=>_0x577f8a[_0x4850d0(0x571)]())){this[_0x4850d0(0x524)]=!![];return;}if(this[_0x4850d0(0x59c)][_0x4850d0(0x214)](_0x3d2586=>_0x3d2586[_0x4850d0(0x232)]())){this['_needsPeriodicRefresh']=!![];return;}},VisuMZ['EventsMoveCore'][_0x2552df(0x20a)]=Game_Map[_0x2552df(0x4c3)][_0x2552df(0x185)],Game_Map[_0x2552df(0x4c3)][_0x2552df(0x185)]=function(_0x4b7603){const _0x195555=_0x2552df;this[_0x195555(0x2f7)](),VisuMZ[_0x195555(0x338)][_0x195555(0x20a)]['call'](this,_0x4b7603);},Game_Map[_0x2552df(0x4c3)]['updatePeriodicRefresh']=function(){const _0x2e887c=_0x2552df;if(!this[_0x2e887c(0x524)])return;this[_0x2e887c(0x557)]=this['_periodicRefreshTimer']||0x3c,this['_periodicRefreshTimer']--,this['_periodicRefreshTimer']<=0x0&&(this['requestRefresh'](),this[_0x2e887c(0x557)]=0x3c);},VisuMZ[_0x2552df(0x338)][_0x2552df(0x4a1)]=Game_Map[_0x2552df(0x4c3)][_0x2552df(0x3be)],Game_Map[_0x2552df(0x4c3)][_0x2552df(0x3be)]=function(){const _0x1a2bf3=_0x2552df;if(!$gameSystem['isDashingEnabled']())return!![];return VisuMZ[_0x1a2bf3(0x338)]['Game_Map_isDashDisabled']['call'](this);},Game_Map['prototype']['setupSaveEventLocations']=function(){const _0x4a9943=_0x2552df;this['_saveEventLocations']=![];const _0x315b67=$dataMap['note']||'';_0x315b67[_0x4a9943(0x47f)](/<SAVE EVENT (?:LOCATION|LOCATIONS)>/i)&&(this[_0x4a9943(0x324)]=!![]);},Game_Map['prototype']['isSaveEventLocations']=function(){const _0x24574a=_0x2552df;if(this[_0x24574a(0x324)]===undefined)this[_0x24574a(0x5ec)]();return this[_0x24574a(0x324)];},Game_Map['prototype']['removeTemporaryMapSpawnedEvents']=function(_0x3133fd){const _0x4d74bf=_0x2552df;_0x3133fd!==this[_0x4d74bf(0x399)]()&&$gamePlayer&&$gameSystem[_0x4d74bf(0x415)](this[_0x4d74bf(0x399)]());},Game_Map['prototype'][_0x2552df(0x1f0)]=function(){const _0x3e7667=_0x2552df;this[_0x3e7667(0x1bf)]=$gameSystem[_0x3e7667(0x5bb)](this['mapId']()),this[_0x3e7667(0x43a)]=!![];},VisuMZ[_0x2552df(0x338)][_0x2552df(0x332)]=Game_Map[_0x2552df(0x4c3)][_0x2552df(0x5b7)],Game_Map[_0x2552df(0x4c3)][_0x2552df(0x5b7)]=function(){const _0x11c3b9=_0x2552df;if(this[_0x11c3b9(0x474)])return this['_eventCache'];const _0x4704d3=VisuMZ[_0x11c3b9(0x338)][_0x11c3b9(0x332)]['call'](this),_0x5acf52=_0x4704d3['concat'](this['_spawnedEvents']||[]);return this[_0x11c3b9(0x474)]=_0x5acf52['filter'](_0x2137c3=>!!_0x2137c3),this['_eventCache'];},VisuMZ[_0x2552df(0x338)][_0x2552df(0x259)]=Game_Map['prototype'][_0x2552df(0x218)],Game_Map[_0x2552df(0x4c3)][_0x2552df(0x218)]=function(_0x3bf11d){const _0x31f300=_0x2552df;if(_0x3bf11d>=0x3e8)return _0x3bf11d-=0x3e8,this[_0x31f300(0x1bf)][_0x3bf11d];else{if('usUBX'!=='usUBX'){if(this[_0x31f300(0x57d)]===_0x3ff2d6&&this[_0x31f300(0x3b3)]())return this[_0x31f300(0x396)]()[_0x31f300(0x408)]()['match'](/\[VS8\]/i);else return _0x5b1399[_0x31f300(0x2fb)]&&this[_0x31f300(0x24b)]()?!![]:this[_0x31f300(0x408)]()[_0x31f300(0x47f)](/\[VS8\]/i);}else return VisuMZ['EventsMoveCore']['Game_Map_event'][_0x31f300(0x4d9)](this,_0x3bf11d);}},Game_Map[_0x2552df(0x4c3)]['eraseEvent']=function(_0x54eece){const _0x3c1d44=_0x2552df,_0x2c5091=this[_0x3c1d44(0x218)](_0x54eece);if(_0x2c5091)_0x2c5091[_0x3c1d44(0x55c)]();},Game_Map['prototype'][_0x2552df(0x20f)]=function(){const _0x1da394=_0x2552df,_0x470300={'template':'Button','mapId':0x1,'eventId':0xc,'x':$gamePlayer['x']+0x1,'y':$gamePlayer['y']+0x1,'spawnPreserved':!![],'spawnEventId':this['_spawnedEvents'][_0x1da394(0x506)]+0x3e8};this[_0x1da394(0x236)](_0x470300);},Game_Map[_0x2552df(0x4c3)][_0x2552df(0x5e2)]=function(_0x248bbd,_0x29f90d){const _0x104bba=_0x2552df;if(this[_0x104bba(0x34e)](_0x248bbd,_0x29f90d)[_0x104bba(0x506)]>0x0)return!![];if($gamePlayer['x']===_0x248bbd&&$gamePlayer['y']===_0x29f90d)return!![];if(this[_0x104bba(0x402)]()[_0x104bba(0x3e9)](_0x248bbd,_0x29f90d))return!![];if(this['ship']()[_0x104bba(0x3e9)](_0x248bbd,_0x29f90d))return!![];return![];},Game_Map[_0x2552df(0x4c3)][_0x2552df(0x3b1)]=function(_0x3e6ae6,_0x1e2f28,_0x3949cd){const _0x2972be=_0x2552df;$gameTemp['_spawnData']=_0x3e6ae6;const _0x44a8fd=new Game_Event(_0x3e6ae6[_0x2972be(0x399)],_0x3e6ae6[_0x2972be(0x350)]);$gameTemp[_0x2972be(0x400)]=undefined,_0x44a8fd[_0x2972be(0x32e)]();let _0x2660d9=_0x1e2f28-_0x44a8fd[_0x2972be(0x463)]['left'],_0x5b9579=_0x1e2f28+_0x44a8fd[_0x2972be(0x463)][_0x2972be(0x32f)],_0x703907=_0x3949cd-_0x44a8fd[_0x2972be(0x463)]['up'],_0x58d744=_0x3949cd+_0x44a8fd[_0x2972be(0x463)][_0x2972be(0x441)];for(let _0x3776dd=_0x2660d9;_0x3776dd<=_0x5b9579;_0x3776dd++){for(let _0x2f3ef9=_0x703907;_0x2f3ef9<=_0x58d744;_0x2f3ef9++){if(_0x2972be(0x312)!==_0x2972be(0x312))_0x3d124a['EventsMoveCore']['Spriteset_Map_createShadow'][_0x2972be(0x4d9)](this),this[_0x2972be(0x143)]();else{if(this[_0x2972be(0x5e2)](_0x3776dd,_0x2f3ef9))return![];}}}return!![];},Game_Map[_0x2552df(0x4c3)][_0x2552df(0x236)]=function(_0x4662d7){const _0x139270=_0x2552df;$gameTemp[_0x139270(0x400)]=_0x4662d7;const _0xaea99=new Game_Event(_0x4662d7['mapId'],_0x4662d7['eventId']);$gameTemp[_0x139270(0x400)]=undefined,this[_0x139270(0x1bf)][_0x139270(0x39c)](_0xaea99),_0xaea99[_0x139270(0x328)](_0x4662d7),this['clearEventCache']();},Game_Map[_0x2552df(0x4c3)][_0x2552df(0x507)]=function(_0x4c754f,_0x33f7e5,_0x457e50){const _0x353271=_0x2552df,_0x53f506=_0x4c754f['x'],_0x4219dd=_0x4c754f['y'];if(!this[_0x353271(0x5d5)](_0x53f506,_0x4219dd))return![];if(_0x33f7e5){if(this[_0x353271(0x5e2)](_0x53f506,_0x4219dd))return![];if(!this[_0x353271(0x3b1)](_0x4c754f,_0x53f506,_0x4219dd))return![];}if(_0x457e50){if(_0x353271(0x140)===_0x353271(0x3a0))_0x436a6d=_0x58cd31[_0x353271(0x26d)](_0x2b7e36,(_0x244b15,_0x80edea)=>_0x1e4e89[_0x353271(0x2c1)](_0x170d0b(_0x80edea)));else{if(!this[_0x353271(0x21f)](_0x53f506,_0x4219dd))return![];}}return this[_0x353271(0x236)](_0x4c754f),!![];},Game_Map[_0x2552df(0x4c3)]['prepareSpawnedEventAtRegion']=function(_0x4587cd,_0x46e7c8,_0x590673,_0x1a1d61){const _0x317871=_0x2552df,_0x5ae912=[],_0x2e6387=this['width'](),_0x3cf3ba=this[_0x317871(0x4ff)]();for(let _0xd23dea=0x0;_0xd23dea<_0x2e6387;_0xd23dea++){if(_0x317871(0x3d6)!==_0x317871(0x3d6)){if(_0x559044===0x0)return _0x57eb7e;return _0x233d74[_0x317871(0x218)](_0x28dd86);}else for(let _0x34a773=0x0;_0x34a773<_0x3cf3ba;_0x34a773++){if(!_0x46e7c8[_0x317871(0x508)](this['regionId'](_0xd23dea,_0x34a773)))continue;if(!this[_0x317871(0x5d5)](_0xd23dea,_0x34a773))continue;if(_0x590673){if(this[_0x317871(0x5e2)](_0xd23dea,_0x34a773))continue;if(!this[_0x317871(0x3b1)](_0x4587cd,_0xd23dea,_0x34a773))continue;}if(_0x1a1d61){if(!this[_0x317871(0x21f)](_0xd23dea,_0x34a773))continue;}_0x5ae912[_0x317871(0x39c)]([_0xd23dea,_0x34a773]);}}if(_0x5ae912[_0x317871(0x506)]>0x0){if('WNeoa'==='WNeoa'){const _0xa31fdf=_0x5ae912[Math['randomInt'](_0x5ae912[_0x317871(0x506)])];return _0x4587cd['x']=_0xa31fdf[0x0],_0x4587cd['y']=_0xa31fdf[0x1],this[_0x317871(0x236)](_0x4587cd),!![];}else return _0x27e081[_0x317871(0x4c3)][_0x317871(0x55a)]['call'](this);}return![];},Game_Map[_0x2552df(0x4c3)][_0x2552df(0x1b2)]=function(_0x326f2e,_0x31c90b,_0x34358b,_0x4e5319){const _0x2f389a=_0x2552df,_0x313994=[],_0x2b71e3=this[_0x2f389a(0x262)](),_0x18c5a5=this[_0x2f389a(0x4ff)]();for(let _0x1ed6a2=0x0;_0x1ed6a2<_0x2b71e3;_0x1ed6a2++){if('IoonD'==='IoonD')for(let _0x58385d=0x0;_0x58385d<_0x18c5a5;_0x58385d++){if('qCyRr'!==_0x2f389a(0x4c1)){if(this[_0x2f389a(0x48c)]===_0x158d39)this[_0x2f389a(0x1cf)]();if(this[_0x2f389a(0x48c)][_0x2f389a(0x4de)]===_0x2498c8)this['initEventsMoveCore']();this[_0x2f389a(0x48c)][_0x2f389a(0x4de)]=_0x2bdb5a;}else{if(!_0x31c90b[_0x2f389a(0x508)](this[_0x2f389a(0x306)](_0x1ed6a2,_0x58385d)))continue;if(!this[_0x2f389a(0x5d5)](_0x1ed6a2,_0x58385d))continue;if(_0x34358b){if(this[_0x2f389a(0x5e2)](_0x1ed6a2,_0x58385d))continue;if(!this[_0x2f389a(0x3b1)](_0x326f2e,_0x1ed6a2,_0x58385d))continue;}if(_0x4e5319){if(_0x2f389a(0x543)===_0x2f389a(0x46f))this[_0x2f389a(0x2aa)]=!![],this[_0x2f389a(0x1ab)](_0x287332);else{if(!this[_0x2f389a(0x21f)](_0x1ed6a2,_0x58385d))continue;}}_0x313994['push']([_0x1ed6a2,_0x58385d]);}}else{var _0x57e0d2=_0x272728[_0x2f389a(0x338)][_0x2f389a(0x247)]['call'](this,_0x480d45);return _0x57e0d2&&this[_0x2f389a(0x47a)](_0x28ea24);}}if(_0x313994[_0x2f389a(0x506)]>0x0){const _0x47fb78=_0x313994[Math[_0x2f389a(0x5f1)](_0x313994[_0x2f389a(0x506)])];return _0x326f2e['x']=_0x47fb78[0x0],_0x326f2e['y']=_0x47fb78[0x1],this[_0x2f389a(0x236)](_0x326f2e),!![];}return![];},Game_Map[_0x2552df(0x4c3)][_0x2552df(0x21f)]=function(_0x2ebdf7,_0xff6b45){const _0x109feb=_0x2552df;if(this[_0x109feb(0x37b)](_0x2ebdf7,_0xff6b45,0x2))return!![];if(this[_0x109feb(0x37b)](_0x2ebdf7,_0xff6b45,0x4))return!![];if(this[_0x109feb(0x37b)](_0x2ebdf7,_0xff6b45,0x6))return!![];if(this[_0x109feb(0x37b)](_0x2ebdf7,_0xff6b45,0x8))return!![];return![];},Game_Map[_0x2552df(0x4c3)][_0x2552df(0x516)]=function(_0x3a6878){const _0x41d296=_0x2552df;if(_0x3a6878<0x3e8)return;if(!this['_spawnedEvents'])return;const _0x2a5c28=this[_0x41d296(0x218)](_0x3a6878);_0x2a5c28[_0x41d296(0x2d4)](-0x1,-0x1),_0x2a5c28[_0x41d296(0x55c)](),this['_spawnedEvents'][_0x3a6878-0x3e8]=null,this[_0x41d296(0x289)]();},Game_Map[_0x2552df(0x4c3)][_0x2552df(0x456)]=function(){const _0x351c49=_0x2552df;for(const _0x4124e3 of this[_0x351c49(0x1bf)]){if(_0x351c49(0x198)!==_0x351c49(0x198)){if(!this[_0x351c49(0x218)]())return;this[_0x351c49(0x44d)](),this[_0x351c49(0x5f2)](),this[_0x351c49(0x174)](),this['updateEventsMoveCoreTagChanges']();}else{if(_0x4124e3)return _0x4124e3;}}return null;},Game_Map[_0x2552df(0x4c3)][_0x2552df(0x21d)]=function(){const _0xf67d01=_0x2552df,_0x21d2ef=this[_0xf67d01(0x456)]();return _0x21d2ef?_0x21d2ef[_0xf67d01(0x155)]:0x0;},Game_Map[_0x2552df(0x4c3)][_0x2552df(0x3a2)]=function(){const _0x6fc6da=_0x2552df,_0x587e18=this[_0x6fc6da(0x1bf)][_0x6fc6da(0x509)](0x0)[_0x6fc6da(0x2f6)]();for(const _0x40cbb5 of _0x587e18){if(_0x40cbb5)return _0x40cbb5;}return null;},Game_Map['prototype'][_0x2552df(0x231)]=function(){const _0x2709a3=_0x2552df,_0x14fdd2=this[_0x2709a3(0x3a2)]();return _0x14fdd2?_0x14fdd2[_0x2709a3(0x155)]:0x0;},Game_Map[_0x2552df(0x4c3)]['despawnAtXY']=function(_0x1b333f,_0x574f07){const _0x2be03a=_0x2552df,_0x41b6b8=this['eventsXy'](_0x1b333f,_0x574f07);for(const _0x29b401 of _0x41b6b8){if(!_0x29b401)continue;if(_0x29b401[_0x2be03a(0x39d)]())this[_0x2be03a(0x516)](_0x29b401[_0x2be03a(0x155)]);}},Game_Map[_0x2552df(0x4c3)][_0x2552df(0x35a)]=function(_0x39e303){const _0x57c266=_0x2552df;for(const _0x107b5f of this['_spawnedEvents']){if(!_0x107b5f)continue;_0x39e303[_0x57c266(0x508)](_0x107b5f[_0x57c266(0x1d9)]())&&this[_0x57c266(0x516)](_0x107b5f[_0x57c266(0x155)]);}},Game_Map[_0x2552df(0x4c3)][_0x2552df(0x199)]=function(_0x11c5fa){const _0x1640ba=_0x2552df;for(const _0x164adc of this[_0x1640ba(0x1bf)]){if(!_0x164adc)continue;_0x11c5fa[_0x1640ba(0x508)](_0x164adc[_0x1640ba(0x306)]())&&this[_0x1640ba(0x516)](_0x164adc[_0x1640ba(0x155)]);}},Game_Map[_0x2552df(0x4c3)][_0x2552df(0x529)]=function(){const _0x202a8f=_0x2552df;for(const _0x40a451 of this[_0x202a8f(0x1bf)]){if(!_0x40a451)continue;this[_0x202a8f(0x516)](_0x40a451[_0x202a8f(0x155)]);}},VisuMZ[_0x2552df(0x338)][_0x2552df(0x3a6)]=Game_Map[_0x2552df(0x4c3)]['unlockEvent'],Game_Map[_0x2552df(0x4c3)][_0x2552df(0x44b)]=function(_0x14fe98){const _0x92d0d3=_0x2552df;VisuMZ[_0x92d0d3(0x338)][_0x92d0d3(0x3a6)][_0x92d0d3(0x4d9)](this,_0x14fe98);if(_0x14fe98>=0x3e8){const _0x5cbfc5=this[_0x92d0d3(0x218)](_0x14fe98);if(_0x5cbfc5)_0x5cbfc5[_0x92d0d3(0x5b1)]();}},Game_CommonEvent['prototype'][_0x2552df(0x571)]=function(){const _0x49a17f=_0x2552df,_0x17386e=this[_0x49a17f(0x218)]();return this[_0x49a17f(0x5ae)]()&&_0x17386e['trigger']>=0x1&&DataManager[_0x49a17f(0x528)](_0x17386e[_0x49a17f(0x191)]);},Game_CommonEvent[_0x2552df(0x4c3)][_0x2552df(0x232)]=function(){const _0x4bb5d8=_0x2552df;return VisuMZ[_0x4bb5d8(0x338)][_0x4bb5d8(0x544)][_0x4bb5d8(0x59c)][_0x4bb5d8(0x508)](this[_0x4bb5d8(0x334)]);},VisuMZ['EventsMoveCore'][_0x2552df(0x1c0)]=Game_CommonEvent[_0x2552df(0x4c3)][_0x2552df(0x5ae)],Game_CommonEvent[_0x2552df(0x4c3)]['isActive']=function(){const _0x4dffbd=_0x2552df;if(VisuMZ[_0x4dffbd(0x338)][_0x4dffbd(0x1c0)][_0x4dffbd(0x4d9)](this))return'eTepu'!==_0x4dffbd(0x431)?!![]:_0x36df5e[_0x4dffbd(0x338)][_0x4dffbd(0x30c)][_0x4dffbd(0x3f0)];else{if('DoNWS'!=='iFkie')return VisuMZ[_0x4dffbd(0x338)][_0x4dffbd(0x544)]['metCPC'](this[_0x4dffbd(0x218)]()[_0x4dffbd(0x587)],this[_0x4dffbd(0x334)]);else{if([0x6c,0x198]['includes'](_0x40b723[_0x4dffbd(0x24a)])){if(_0x554ea9!=='')_0x570391+='\x0a';_0x572792+=_0x462a2a[_0x4dffbd(0x322)][0x0];}}}},VisuMZ[_0x2552df(0x338)][_0x2552df(0x320)]=Game_Map[_0x2552df(0x4c3)][_0x2552df(0x465)],Game_Map[_0x2552df(0x4c3)][_0x2552df(0x465)]=function(){const _0x3e5f9a=_0x2552df,_0x151fc8=VisuMZ[_0x3e5f9a(0x338)][_0x3e5f9a(0x320)][_0x3e5f9a(0x4d9)](this),_0x7d92a=VisuMZ['EventsMoveCore'][_0x3e5f9a(0x544)][_0x3e5f9a(0x59c)][_0x3e5f9a(0x4bb)](_0x3925cc=>$dataCommonEvents[_0x3925cc]);return _0x151fc8[_0x3e5f9a(0x31b)](_0x7d92a)[_0x3e5f9a(0x5c1)]((_0x5c6e37,_0x21380e,_0x26aba8)=>_0x26aba8[_0x3e5f9a(0x2ae)](_0x5c6e37)===_0x21380e);},VisuMZ[_0x2552df(0x338)][_0x2552df(0x329)]=Game_CharacterBase[_0x2552df(0x4c3)][_0x2552df(0x1a3)],Game_CharacterBase['prototype'][_0x2552df(0x1a3)]=function(){const _0x25250b=_0x2552df;VisuMZ[_0x25250b(0x338)][_0x25250b(0x329)]['call'](this),this['initEventsMoveCoreSettings']();},Game_CharacterBase[_0x2552df(0x4c3)][_0x2552df(0x5c8)]=function(){const _0x8b21ca=_0x2552df;this[_0x8b21ca(0x2aa)]=![],this['clearPose'](),this[_0x8b21ca(0x4a6)](),this[_0x8b21ca(0x35e)](),this[_0x8b21ca(0x284)]();},Game_CharacterBase[_0x2552df(0x4c3)][_0x2552df(0x2c2)]=function(){const _0xd4a37c=_0x2552df;if(this[_0xd4a37c(0x57d)]===Game_Player&&this[_0xd4a37c(0x3b3)]())return this[_0xd4a37c(0x396)]()['characterName']()[_0xd4a37c(0x47f)](/\[VS8\]/i);else return Imported[_0xd4a37c(0x2fb)]&&this[_0xd4a37c(0x24b)]()?!![]:this['characterName']()[_0xd4a37c(0x47f)](/\[VS8\]/i);},VisuMZ['EventsMoveCore'][_0x2552df(0x553)]=Game_CharacterBase['prototype']['direction'],Game_CharacterBase[_0x2552df(0x4c3)][_0x2552df(0x17f)]=function(){const _0x53b5e3=_0x2552df;if(this[_0x53b5e3(0x15c)]()&&!this['isJumping']()&&this[_0x53b5e3(0x2c2)]()){if('cKikk'!==_0x53b5e3(0x5b6))this[_0x53b5e3(0x3b9)][_0x53b5e3(0x4fb)]['x']=_0x47a713[_0x53b5e3(0x34d)](0x1,this[_0x53b5e3(0x3b9)][_0x53b5e3(0x4fb)]['x']+0.1),this[_0x53b5e3(0x3b9)][_0x53b5e3(0x4fb)]['y']=_0x1d5906[_0x53b5e3(0x34d)](0x1,this['_shadowSprite'][_0x53b5e3(0x4fb)]['y']+0.1);else return this[_0x53b5e3(0x434)]();}else{if(this[_0x53b5e3(0x15c)]()&&!this['isJumping']())return 0x8;else return this['isPosing']()&&this[_0x53b5e3(0x2c2)]()?this[_0x53b5e3(0x287)]():VisuMZ[_0x53b5e3(0x338)][_0x53b5e3(0x553)]['call'](this);}},VisuMZ[_0x2552df(0x338)][_0x2552df(0x3ac)]=Game_CharacterBase[_0x2552df(0x4c3)]['setDirection'],Game_CharacterBase[_0x2552df(0x4c3)]['setDirection']=function(_0x520e7d){const _0x1eb57e=_0x2552df;if(!this[_0x1eb57e(0x2c2)]())_0x520e7d=this[_0x1eb57e(0x3ca)](_0x520e7d);VisuMZ[_0x1eb57e(0x338)]['Game_CharacterBase_setDirection'][_0x1eb57e(0x4d9)](this,_0x520e7d);},Game_CharacterBase[_0x2552df(0x4c3)][_0x2552df(0x3ca)]=function(_0x54051f){const _0x3cec2b=_0x2552df;if(_0x54051f===0x1)return this[_0x3cec2b(0x1fb)](this['_x'],this['_y'],0x4)?0x4:0x2;if(_0x54051f===0x3)return this[_0x3cec2b(0x1fb)](this['_x'],this['_y'],0x6)?0x6:0x2;if(_0x54051f===0x7)return this[_0x3cec2b(0x1fb)](this['_x'],this['_y'],0x4)?0x4:0x8;if(_0x54051f===0x9)return this[_0x3cec2b(0x1fb)](this['_x'],this['_y'],0x6)?0x6:0x8;return _0x54051f;},Game_CharacterBase[_0x2552df(0x4c3)]['isDiagonalDirection']=function(_0x5ad9f3){const _0x1cea50=_0x2552df;return[0x1,0x3,0x5,0x7,0x9][_0x1cea50(0x508)](_0x5ad9f3);},Game_CharacterBase[_0x2552df(0x4c3)][_0x2552df(0x540)]=function(){const _0x202e8e=_0x2552df;return this[_0x202e8e(0x1b0)]||0x0;},VisuMZ['EventsMoveCore'][_0x2552df(0x204)]=Game_CharacterBase[_0x2552df(0x4c3)][_0x2552df(0x3d2)],Game_CharacterBase[_0x2552df(0x4c3)][_0x2552df(0x3d2)]=function(_0x28e531){const _0x25be9f=_0x2552df;this[_0x25be9f(0x1b0)]=_0x28e531,VisuMZ[_0x25be9f(0x338)]['Game_CharacterBase_moveStraight'][_0x25be9f(0x4d9)](this,_0x28e531);},Game_CharacterBase[_0x2552df(0x4c3)][_0x2552df(0x484)]=function(_0x47707b){const _0x13215a=_0x2552df;if(!this[_0x13215a(0x187)](_0x47707b))return this['moveStraight'](_0x47707b);let _0x230c21=0x0,_0x4fca03=0x0;switch(_0x47707b){case 0x1:_0x230c21=0x4,_0x4fca03=0x2;break;case 0x3:_0x230c21=0x6,_0x4fca03=0x2;break;case 0x7:_0x230c21=0x4,_0x4fca03=0x8;break;case 0x9:_0x230c21=0x6,_0x4fca03=0x8;break;}if(VisuMZ[_0x13215a(0x338)][_0x13215a(0x30c)][_0x13215a(0x210)][_0x13215a(0x3da)]){if(_0x13215a(0x437)===_0x13215a(0x175)){const _0x3915c6=_0x386724['EventsMoveCore'][_0x13215a(0x30c)][_0x13215a(0x210)],_0x30799f=this[_0x13215a(0x15e)][_0x13215a(0x17f)]();let _0x3a3610=0x0;if([0x1,0x4,0x7][_0x13215a(0x508)](_0x30799f))_0x3a3610=_0x3915c6[_0x13215a(0x5d8)];if([0x3,0x6,0x9][_0x13215a(0x508)](_0x30799f))_0x3a3610=_0x3915c6['TiltRight'];[0x2,0x8][_0x13215a(0x508)](_0x30799f)&&(_0x3a3610=[-_0x3915c6[_0x13215a(0x186)],0x0,_0x3915c6[_0x13215a(0x186)]][this[_0x13215a(0x15e)][_0x13215a(0x333)]()]);if(this[_0x13215a(0x1bb)])_0x3a3610*=-0x1;this['rotation']=_0x3a3610;}else{if(!this[_0x13215a(0x1fb)](this['_x'],this['_y'],_0x230c21))return this[_0x13215a(0x3d2)](_0x4fca03);if(!this[_0x13215a(0x1fb)](this['_x'],this['_y'],_0x4fca03)){if(_0x13215a(0x249)!==_0x13215a(0x201))return this[_0x13215a(0x3d2)](_0x230c21);else this['_DisablePlayerControl']=_0x32381b;}if(!this[_0x13215a(0x14d)](this['_x'],this['_y'],_0x230c21,_0x4fca03)){if(_0x13215a(0x3e8)!=='nfBKk'){let _0x39e77c=VisuMZ[_0x13215a(0x338)][_0x13215a(0x30c)][_0x13215a(0x210)][_0x13215a(0x5eb)]?_0x230c21:_0x4fca03;return this[_0x13215a(0x3d2)](_0x39e77c);}else{const _0x29d987=_0xe4be70['eventsXy'](_0x33756e,_0x1913f2);for(const _0x1d503a of _0x29d987){if(_0x1d503a&&_0x1d503a[_0x13215a(0x4f4)]())return _0x1d503a['onClickTrigger'](),!![];}return![];}}}}this[_0x13215a(0x1b0)]=_0x47707b,this['moveDiagonally'](_0x230c21,_0x4fca03);},VisuMZ[_0x2552df(0x338)][_0x2552df(0x209)]=Game_CharacterBase['prototype'][_0x2552df(0x520)],Game_CharacterBase['prototype'][_0x2552df(0x520)]=function(){const _0xe256ef=_0x2552df;let _0x5dccb4=this['_moveSpeed'];return this[_0xe256ef(0x2e8)]()&&(_0x5dccb4+=this[_0xe256ef(0x219)]()),this['adjustDir8MovementSpeed'](_0x5dccb4);},Game_CharacterBase[_0x2552df(0x4c3)]['dashSpeedModifier']=function(){const _0x221118=_0x2552df,_0x46e7fe=VisuMZ[_0x221118(0x338)][_0x221118(0x30c)][_0x221118(0x210)];if(_0x46e7fe[_0x221118(0x4c5)]!==undefined){if(_0x221118(0x23a)==='ULqIL'){if(_0x45dbbe[_0x221118(0x305)])return![];return _0x13fa17[_0x221118(0x338)]['Game_Event_isCollidedWithPlayerCharacters'][_0x221118(0x4d9)](this,_0x375a4a,_0x242374);}else return _0x46e7fe[_0x221118(0x4c5)];}else return VisuMZ['EventsMoveCore'][_0x221118(0x209)][_0x221118(0x4d9)](this)-this[_0x221118(0x360)];},Game_CharacterBase['prototype'][_0x2552df(0x327)]=function(_0x3cb774){const _0x381f53=_0x2552df,_0x184e12=VisuMZ['EventsMoveCore']['Settings']['Movement'];if(!_0x184e12[_0x381f53(0x4d6)])return _0x3cb774;return[0x1,0x3,0x7,0x9][_0x381f53(0x508)](this[_0x381f53(0x1b0)])&&(_0x3cb774*=_0x184e12[_0x381f53(0x472)]||0.01),_0x3cb774;},VisuMZ[_0x2552df(0x338)][_0x2552df(0x27c)]=Game_CharacterBase[_0x2552df(0x4c3)][_0x2552df(0x2e8)],Game_CharacterBase[_0x2552df(0x4c3)][_0x2552df(0x2e8)]=function(){const _0x191cfb=_0x2552df;if(this[_0x191cfb(0x264)])return!![];return VisuMZ['EventsMoveCore']['Game_CharacterBase_isDashing'][_0x191cfb(0x4d9)](this);},Game_CharacterBase[_0x2552df(0x4c3)]['isDashingAndMoving']=function(){const _0x38ec3e=_0x2552df;return this[_0x38ec3e(0x2e8)]();},VisuMZ['EventsMoveCore'][_0x2552df(0x550)]=Game_CharacterBase['prototype']['pattern'],Game_CharacterBase['prototype'][_0x2552df(0x333)]=function(){const _0x4d0bc1=_0x2552df;return this[_0x4d0bc1(0x386)]()?this[_0x4d0bc1(0x4b5)]():VisuMZ['EventsMoveCore']['Game_CharacterBase_pattern'][_0x4d0bc1(0x4d9)](this);},VisuMZ[_0x2552df(0x338)][_0x2552df(0x4f3)]=Game_CharacterBase['prototype']['increaseSteps'],Game_CharacterBase[_0x2552df(0x4c3)][_0x2552df(0x319)]=function(){const _0x43dbae=_0x2552df;VisuMZ[_0x43dbae(0x338)][_0x43dbae(0x4f3)][_0x43dbae(0x4d9)](this),this['clearPose']();},VisuMZ[_0x2552df(0x338)][_0x2552df(0x3a1)]=Game_CharacterBase[_0x2552df(0x4c3)]['characterIndex'],Game_CharacterBase[_0x2552df(0x4c3)]['characterIndex']=function(){const _0x3b4b46=_0x2552df;if(this[_0x3b4b46(0x2c2)]())return this[_0x3b4b46(0x276)]();return VisuMZ[_0x3b4b46(0x338)][_0x3b4b46(0x3a1)][_0x3b4b46(0x4d9)](this);},Game_CharacterBase[_0x2552df(0x4c3)][_0x2552df(0x276)]=function(){const _0xd7adb6=_0x2552df,_0x3e3fea=this[_0xd7adb6(0x17f)]();if(this[_0xd7adb6(0x4e2)]()){if([0x2,0x4,0x6,0x8]['includes'](_0x3e3fea))return 0x4;if([0x1,0x3,0x7,0x9][_0xd7adb6(0x508)](_0x3e3fea))return 0x5;}else{if(this[_0xd7adb6(0x15c)]())return 0x6;else{if(this[_0xd7adb6(0x386)]()){if(_0xd7adb6(0x52f)!==_0xd7adb6(0x246))return this[_0xd7adb6(0x258)]();else{this[_0xd7adb6(0x37f)](_0x269166);if(_0x20a48d[_0xd7adb6(0x508)](0x0)&&this['startMapCommonEventOnOKTarget']()==='standing')this['startMapCommonEventOnOK'](this['x'],this['y']);else(_0x241e41['includes'](0x1)||_0x20fcac[_0xd7adb6(0x508)](0x2))&&this['startMapCommonEventOnTouch']();}}else{if(this[_0xd7adb6(0x422)]){if([0x2,0x4,0x6,0x8][_0xd7adb6(0x508)](_0x3e3fea))return 0x4;if([0x1,0x3,0x7,0x9][_0xd7adb6(0x508)](_0x3e3fea))return 0x5;}else{if(this['hasEventIcon']()&&this[_0xd7adb6(0x16f)]()){if('xKCye'===_0xd7adb6(0x58d)){if([0x2,0x4,0x6,0x8][_0xd7adb6(0x508)](_0x3e3fea))return 0x4;if([0x1,0x3,0x7,0x9]['includes'](_0x3e3fea))return 0x5;}else{if(!this[_0xd7adb6(0x42c)])return![];if(!this[_0xd7adb6(0x42c)][_0xd7adb6(0x2c7)])return![];if(this[_0xd7adb6(0x2f0)]!==this[_0xd7adb6(0x42c)]['_pageIndex'])return!![];if(this[_0xd7adb6(0x42c)][_0xd7adb6(0x5a5)]&&!this[_0xd7adb6(0x535)])return!![];if(this[_0xd7adb6(0x42c)][_0xd7adb6(0x2c7)][_0xd7adb6(0x585)]==='')return![];if(this[_0xd7adb6(0x3cd)]!==_0x8d15c3[_0xd7adb6(0x530)]())return!![];if(this[_0xd7adb6(0x230)]!==this[_0xd7adb6(0x42c)][_0xd7adb6(0x2b3)]())return!![];if(this[_0xd7adb6(0x36f)]!==this['_event'][_0xd7adb6(0x3ae)]())return!![];if(this[_0xd7adb6(0x2dc)]!==this[_0xd7adb6(0x42c)]['_labelWindow'][_0xd7adb6(0x42a)])return!![];if(this[_0xd7adb6(0x3a8)]!==this['_event'][_0xd7adb6(0x2c7)]['offsetY'])return!![];if(this[_0xd7adb6(0x20c)]!==_0x60bcc9['x'])return!![];if(this[_0xd7adb6(0x4ed)]!==_0x38348e['y'])return!![];if(this[_0xd7adb6(0x4a0)]!==this[_0xd7adb6(0x42c)]['x'])return!![];if(this['_visibleEventY']!==this['_event']['y'])return!![];if(this['_cacheSystemVisible']!==_0x33e02a[_0xd7adb6(0x364)]())return!![];if(this[_0xd7adb6(0x39a)]&&this[_0xd7adb6(0x56b)]<0xff)return!![];if(!this[_0xd7adb6(0x39a)]&&this[_0xd7adb6(0x56b)]>0x0)return!![];if(_0x373196['_scene'][_0xd7adb6(0x271)]>0x0)return!![];return![];}}else{if(this[_0xd7adb6(0x3c5)]()){if([0x2,0x4,0x6,0x8][_0xd7adb6(0x508)](_0x3e3fea))return 0x2;if([0x1,0x3,0x7,0x9][_0xd7adb6(0x508)](_0x3e3fea))return 0x3;}else{if([0x2,0x4,0x6,0x8][_0xd7adb6(0x508)](_0x3e3fea))return 0x0;if([0x1,0x3,0x7,0x9]['includes'](_0x3e3fea))return 0x1;}}}}}}},Game_CharacterBase['prototype'][_0x2552df(0x16f)]=function(){const _0x47fc65=_0x2552df;return VisuMZ[_0x47fc65(0x338)][_0x47fc65(0x30c)]['VS8']['CarryPose'];},Game_CharacterBase[_0x2552df(0x4c3)][_0x2552df(0x5cb)]=function(){const _0x3f2ab2=_0x2552df;return this[_0x3f2ab2(0x15c)]()&&this[_0x3f2ab2(0x306)]()===VisuMZ[_0x3f2ab2(0x338)][_0x3f2ab2(0x30c)]['TerrainTag']['Rope'];},Game_CharacterBase[_0x2552df(0x4c3)]['directionOnLadderSpriteVS8dir']=function(){const _0x366179=_0x2552df;if(this['isOnRope']()){if(_0x366179(0x1cb)!=='lfGEY')return 0x4;else{_0x3060ad[_0x366179(0x3ce)](_0x31a5ff,_0x30d51b);const _0x12cca9=_0x86f2ac['getLastPluginCommandInterpreter']();_0x130256[_0x366179(0x1e0)]=_0x56aafb[_0x366179(0x1e0)]||_0x10204f[_0x366179(0x399)]();const _0x32ff14=[_0x54db2b['MapId'],_0x93e516[_0x366179(0x149)]||_0x12cca9[_0x366179(0x350)](),_0x79e8ef[_0x366179(0x33a)]],_0xa30aac=_0xb52db5[_0x366179(0x382)],_0x1752c5=_0x2dd648[_0x366179(0x2c1)](_0x32ff14)||![];_0x1ea48d[_0x366179(0x17c)](_0xa30aac,_0x1752c5);}}else{if(_0x366179(0x1ad)===_0x366179(0x55b))this[_0x366179(0x362)]();else return 0x2;}},VisuMZ[_0x2552df(0x338)][_0x2552df(0x339)]=Game_CharacterBase[_0x2552df(0x4c3)]['update'],Game_CharacterBase[_0x2552df(0x4c3)][_0x2552df(0x185)]=function(){const _0x112d3e=_0x2552df;VisuMZ[_0x112d3e(0x338)]['Game_CharacterBase_update']['call'](this),this[_0x112d3e(0x43d)]();},Game_CharacterBase['prototype']['updatePose']=function(){const _0x389cdf=_0x2552df;this[_0x389cdf(0x3e5)]=this['_poseDuration']||0x0;if(this[_0x389cdf(0x3e5)]>0x0){this[_0x389cdf(0x3e5)]--;if(this[_0x389cdf(0x3e5)]<=0x0&&this[_0x389cdf(0x2c5)]!==_0x389cdf(0x590))this[_0x389cdf(0x23b)]();}},VisuMZ[_0x2552df(0x338)][_0x2552df(0x195)]=Game_CharacterBase[_0x2552df(0x4c3)][_0x2552df(0x2e4)],Game_CharacterBase[_0x2552df(0x4c3)][_0x2552df(0x2e4)]=function(_0x4c918b,_0x111ad3){const _0x114301=_0x2552df;VisuMZ[_0x114301(0x338)][_0x114301(0x195)][_0x114301(0x4d9)](this,_0x4c918b,_0x111ad3);if(this[_0x114301(0x2c2)]())this['setDiagonalDirection'](_0x4c918b,_0x111ad3);},Game_CharacterBase[_0x2552df(0x4c3)][_0x2552df(0x337)]=function(_0x3508a1,_0x197506){const _0x28ebe4=_0x2552df;if(_0x3508a1===0x4&&_0x197506===0x2)this[_0x28ebe4(0x580)](0x1);if(_0x3508a1===0x6&&_0x197506===0x2)this['setDirection'](0x3);if(_0x3508a1===0x4&&_0x197506===0x8)this[_0x28ebe4(0x580)](0x7);if(_0x3508a1===0x6&&_0x197506===0x8)this[_0x28ebe4(0x580)](0x9);},VisuMZ[_0x2552df(0x338)]['Game_CharacterBase_hasStepAnime']=Game_CharacterBase[_0x2552df(0x4c3)][_0x2552df(0x459)],Game_CharacterBase['prototype'][_0x2552df(0x459)]=function(){const _0x4a4137=_0x2552df;if(this[_0x4a4137(0x386)]()&&this[_0x4a4137(0x190)]()===_0x4a4137(0x590))return!![];return VisuMZ[_0x4a4137(0x338)][_0x4a4137(0x38e)]['call'](this);},Game_CharacterBase['prototype'][_0x2552df(0x4e0)]=function(_0x194b98,_0x2f08b8){const _0x5862a6=_0x2552df;if(_0x194b98[_0x5862a6(0x47f)](/Z/i))_0x194b98=_0x5862a6(0x590);if(_0x194b98['match'](/SLEEP/i))_0x194b98=_0x5862a6(0x590);if(this[_0x5862a6(0x2c2)]()){if(_0x5862a6(0x51f)===_0x5862a6(0x51f))this[_0x5862a6(0x2c5)]=_0x194b98[_0x5862a6(0x519)]()['trim'](),this[_0x5862a6(0x3e5)]=_0x2f08b8||Infinity;else{const _0x249235=this[_0x5862a6(0x2b8)](_0x516dd5,_0xa4a8be,!![]);if(_0x249235)this[_0x5862a6(0x484)](_0x249235);}}},Game_CharacterBase[_0x2552df(0x4c3)]['getPose']=function(){const _0x21298f=_0x2552df;return this[_0x21298f(0x2c2)]()?(this['_pose']||'')[_0x21298f(0x519)]()[_0x21298f(0x1c7)]():''[_0x21298f(0x519)]()['trim']();},Game_CharacterBase['prototype']['setBalloonPose']=function(_0x459093,_0x4ea329){const _0xb935e5=_0x2552df;if(this[_0xb935e5(0x2c2)]()){if(_0xb935e5(0x18b)!==_0xb935e5(0x18b))return _0x2fe13c>0x0?0x6:0x4;else{const _0x129794=['',_0xb935e5(0x42f),_0xb935e5(0x164),'MUSIC\x20NOTE',_0xb935e5(0x564),_0xb935e5(0x5b5),_0xb935e5(0x13e),_0xb935e5(0x317),_0xb935e5(0x54c),'LIGHT\x20BULB',_0xb935e5(0x590),'','','','',''][_0x459093];this[_0xb935e5(0x4e0)](_0x129794,_0x4ea329);}}},Game_CharacterBase[_0x2552df(0x4c3)][_0x2552df(0x23b)]=function(){const _0x32dc5b=_0x2552df;this[_0x32dc5b(0x2c5)]='',this['_poseDuration']=0x0;},Game_CharacterBase[_0x2552df(0x4c3)][_0x2552df(0x386)]=function(){const _0xf6664=_0x2552df;return this[_0xf6664(0x2c2)]()&&!!this[_0xf6664(0x2c5)];},Game_CharacterBase['prototype'][_0x2552df(0x258)]=function(){const _0x53e0b8=_0x2552df,_0xe7abb9=this[_0x53e0b8(0x2c5)]['toUpperCase']();switch(this[_0x53e0b8(0x2c5)][_0x53e0b8(0x519)]()['trim']()){case _0x53e0b8(0x5db):case _0x53e0b8(0x1e9):case _0x53e0b8(0x273):case _0x53e0b8(0x228):case _0x53e0b8(0x586):case _0x53e0b8(0x597):return 0x6;break;default:return 0x7;break;}},Game_CharacterBase[_0x2552df(0x4c3)]['getPosingCharacterDirection']=function(){const _0x2d409e=_0x2552df;switch(this[_0x2d409e(0x2c5)][_0x2d409e(0x519)]()){case _0x2d409e(0x42f):case'QUESTION':case'MUSIC\x20NOTE':case'!':case'?':return 0x2;break;case _0x2d409e(0x564):case'ANGER':case _0x2d409e(0x13e):return 0x4;break;case _0x2d409e(0x5db):case _0x2d409e(0x1e9):case _0x2d409e(0x273):case'COBWEB':case _0x2d409e(0x54c):case _0x2d409e(0x381):return 0x6;break;case _0x2d409e(0x228):case'KNEEL':case _0x2d409e(0x597):case _0x2d409e(0x590):case _0x2d409e(0x1fd):return 0x8;break;default:return VisuMZ[_0x2d409e(0x338)][_0x2d409e(0x3ac)][_0x2d409e(0x4d9)](this);break;}},Game_CharacterBase[_0x2552df(0x4c3)][_0x2552df(0x4b5)]=function(){const _0x4d4447=_0x2552df;switch(this[_0x4d4447(0x2c5)][_0x4d4447(0x519)]()){case _0x4d4447(0x5db):case _0x4d4447(0x228):case _0x4d4447(0x42f):case'!':case'HEART':case _0x4d4447(0x317):return 0x0;break;case _0x4d4447(0x1e9):case _0x4d4447(0x586):case'QUESTION':case'?':case _0x4d4447(0x5b5):case'SILENCE':return 0x1;break;case _0x4d4447(0x273):case _0x4d4447(0x597):case _0x4d4447(0x392):case'SWEAT':case _0x4d4447(0x381):return 0x2;break;default:return VisuMZ[_0x4d4447(0x338)][_0x4d4447(0x550)]['call'](this);break;}},Game_CharacterBase[_0x2552df(0x4c3)]['forceCarrying']=function(){this['_forceCarrying']=!![];},Game_CharacterBase[_0x2552df(0x4c3)][_0x2552df(0x318)]=function(){const _0x26e1d5=_0x2552df;this[_0x26e1d5(0x422)]=![];},Game_CharacterBase['prototype'][_0x2552df(0x275)]=function(){const _0x281b4c=_0x2552df;this[_0x281b4c(0x264)]=!![];},Game_CharacterBase[_0x2552df(0x4c3)][_0x2552df(0x4a6)]=function(){const _0x5a7c74=_0x2552df;this[_0x5a7c74(0x264)]=![];},Game_CharacterBase[_0x2552df(0x4c3)][_0x2552df(0x2ef)]=function(){const _0x74217b=_0x2552df;if(this[_0x74217b(0x315)]())return![];if(this['_isObjectCharacter'])return![];if(this[_0x74217b(0x162)])return![];if(this[_0x74217b(0x226)]==='')return![];if(this['constructor']===Game_Vehicle)return![];return!![];},Game_CharacterBase[_0x2552df(0x4c3)][_0x2552df(0x4dc)]=function(){const _0x4477bf=_0x2552df;if(this['isOnLadder']())return!![];if(this[_0x4477bf(0x57d)]===Game_Player&&this[_0x4477bf(0x3b3)]())return!![];return![];},Game_CharacterBase[_0x2552df(0x4c3)][_0x2552df(0x599)]=function(){const _0x5c35ea=_0x2552df;return VisuMZ[_0x5c35ea(0x338)][_0x5c35ea(0x30c)][_0x5c35ea(0x210)][_0x5c35ea(0x59b)];},Game_CharacterBase[_0x2552df(0x4c3)][_0x2552df(0x19e)]=function(){const _0x200454=_0x2552df;return this[_0x200454(0x2b3)]();},Game_CharacterBase[_0x2552df(0x4c3)]['shadowY']=function(){const _0x391c2b=_0x2552df;return this[_0x391c2b(0x3ae)]()+this[_0x391c2b(0x349)]()+this['jumpHeight']();},Game_Character[_0x2552df(0x4c3)][_0x2552df(0x582)]=function(_0x4ac066,_0x2a8dd5){const _0x3f9f13=_0x2552df,_0x4ff58d=this[_0x3f9f13(0x1c6)](),_0x597983=$gameMap[_0x3f9f13(0x262)](),_0x800617=[],_0x4923ee=[],_0x3139a6=[],_0xe0d64a={};let _0x147d56=_0xe0d64a;if(this['x']===_0x4ac066&&this['y']===_0x2a8dd5)return 0x0;_0xe0d64a['parent']=null,_0xe0d64a['x']=this['x'],_0xe0d64a['y']=this['y'],_0xe0d64a['g']=0x0,_0xe0d64a['f']=$gameMap['distance'](_0xe0d64a['x'],_0xe0d64a['y'],_0x4ac066,_0x2a8dd5),_0x800617[_0x3f9f13(0x39c)](_0xe0d64a),_0x4923ee[_0x3f9f13(0x39c)](_0xe0d64a['y']*_0x597983+_0xe0d64a['x']);while(_0x800617[_0x3f9f13(0x506)]>0x0){let _0x5f2304=0x0;for(let _0x3dc886=0x0;_0x3dc886<_0x800617[_0x3f9f13(0x506)];_0x3dc886++){_0x800617[_0x3dc886]['f']<_0x800617[_0x5f2304]['f']&&(_0x5f2304=_0x3dc886);}const _0x4a4000=_0x800617[_0x5f2304],_0x43ed88=_0x4a4000['x'],_0x1a5295=_0x4a4000['y'],_0x758ea1=_0x1a5295*_0x597983+_0x43ed88,_0x3ec92c=_0x4a4000['g'];_0x800617['splice'](_0x5f2304,0x1),_0x4923ee['splice'](_0x4923ee[_0x3f9f13(0x2ae)](_0x758ea1),0x1),_0x3139a6['push'](_0x758ea1);if(_0x4a4000['x']===_0x4ac066&&_0x4a4000['y']===_0x2a8dd5){if(_0x3f9f13(0x33c)==='dCDAX')this[_0x3f9f13(0x2c7)][_0x3f9f13(0x585)]=this[_0x3f9f13(0x2c7)][_0x3f9f13(0x585)][_0x3f9f13(0x26d)](/\\V\[(\d+)\]/gi,(_0x4eb6a9,_0x2c34ef)=>_0x3457ed[_0x3f9f13(0x2c1)](_0x12d897(_0x2c34ef)));else{_0x147d56=_0x4a4000;break;}}if(_0x3ec92c>=_0x4ff58d){if('SPIlu'!=='SPIlu')_0x4b9ce8=[_0x3799d3,_0x1aff6a,_0x3ef213[_0x3f9f13(0x519)]()[_0x3f9f13(0x1c7)]()];else continue;}const _0xa514b1=[0x0,0x4,0x0,0x6,0x4,0x0,0x6,0x4,0x0,0x6],_0x53f47=[0x0,0x2,0x2,0x2,0x0,0x0,0x0,0x8,0x8,0x8];for(let _0x50b35c=0x1;_0x50b35c<0xa;_0x50b35c++){if('wAhuJ'==='wAhuJ'){if(_0x50b35c===0x5)continue;const _0x5e917a=_0x50b35c,_0x5aa97a=_0xa514b1[_0x50b35c],_0x27a78a=_0x53f47[_0x50b35c],_0x489825=$gameMap[_0x3f9f13(0x4af)](_0x43ed88,_0x5e917a),_0x5d8918=$gameMap[_0x3f9f13(0x3bb)](_0x1a5295,_0x5e917a),_0x4b3517=_0x5d8918*_0x597983+_0x489825;if(_0x3139a6[_0x3f9f13(0x508)](_0x4b3517))continue;if(this[_0x3f9f13(0x57d)]===Game_Player&&VisuMZ[_0x3f9f13(0x338)]['Settings'][_0x3f9f13(0x210)][_0x3f9f13(0x3da)]){if(!this[_0x3f9f13(0x1fb)](_0x43ed88,_0x1a5295,_0x5aa97a))continue;if(!this['canPass'](_0x43ed88,_0x1a5295,_0x27a78a))continue;}if(!this['canPassDiagonally'](_0x43ed88,_0x1a5295,_0x5aa97a,_0x27a78a))continue;const _0x499d19=_0x3ec92c+0x1,_0x8fb2e0=_0x4923ee[_0x3f9f13(0x2ae)](_0x4b3517);if(_0x8fb2e0<0x0||_0x499d19<_0x800617[_0x8fb2e0]['g']){if('EQWDJ'==='NvdMj')return this[_0x3f9f13(0x213)](_0xc7d8d0(_0x4a030e['$1']));else{let _0x70aac2={};_0x8fb2e0>=0x0?_0x70aac2=_0x800617[_0x8fb2e0]:(_0x800617[_0x3f9f13(0x39c)](_0x70aac2),_0x4923ee['push'](_0x4b3517));_0x70aac2[_0x3f9f13(0x2d3)]=_0x4a4000,_0x70aac2['x']=_0x489825,_0x70aac2['y']=_0x5d8918,_0x70aac2['g']=_0x499d19,_0x70aac2['f']=_0x499d19+$gameMap[_0x3f9f13(0x290)](_0x489825,_0x5d8918,_0x4ac066,_0x2a8dd5);if(!_0x147d56||_0x70aac2['f']-_0x70aac2['g']<_0x147d56['f']-_0x147d56['g']){if(_0x3f9f13(0x29b)==='oTiaW'){if(_0x1aabff)this['processMoveRouteStepTo'](_0x1b4668['x'],_0xf35bd0['y']);}else _0x147d56=_0x70aac2;}}}}else this['moveForward']();}}let _0x39f0fc=_0x147d56;while(_0x39f0fc[_0x3f9f13(0x2d3)]&&_0x39f0fc[_0x3f9f13(0x2d3)]!==_0xe0d64a){if(_0x3f9f13(0x5ee)===_0x3f9f13(0x292))return![];else _0x39f0fc=_0x39f0fc[_0x3f9f13(0x2d3)];}const _0x24dff7=$gameMap['deltaX'](_0x39f0fc['x'],_0xe0d64a['x']),_0x2bae2e=$gameMap['deltaY'](_0x39f0fc['y'],_0xe0d64a['y']);if(_0x24dff7<0x0&&_0x2bae2e>0x0)return 0x1;if(_0x24dff7>0x0&&_0x2bae2e>0x0)return 0x3;if(_0x24dff7<0x0&&_0x2bae2e<0x0)return 0x7;if(_0x24dff7>0x0&&_0x2bae2e<0x0)return 0x9;if(_0x2bae2e>0x0)return 0x2;if(_0x24dff7<0x0)return 0x4;if(_0x24dff7>0x0)return 0x6;if(_0x2bae2e<0x0)return 0x8;const _0x438eba=this[_0x3f9f13(0x5c2)](_0x4ac066),_0x41f1e3=this[_0x3f9f13(0x592)](_0x2a8dd5);if(Math[_0x3f9f13(0x41e)](_0x438eba)>Math[_0x3f9f13(0x41e)](_0x41f1e3))return _0x438eba>0x0?0x4:0x6;else{if(_0x41f1e3!==0x0)return _0x41f1e3>0x0?0x8:0x2;}return 0x0;},VisuMZ[_0x2552df(0x338)][_0x2552df(0x3f1)]=Game_CharacterBase[_0x2552df(0x4c3)]['canPass'],Game_CharacterBase[_0x2552df(0x4c3)]['canPass']=function(_0x114d41,_0x53d73e,_0x18be45){const _0x3b54a9=_0x2552df;return this[_0x3b54a9(0x4ca)]===_0x3b54a9(0x25c)?'nnssP'!==_0x3b54a9(0x227)?this[_0x3b54a9(0x396)]()[_0x3b54a9(0x511)](_0x114d41,_0x53d73e,_0x18be45):this[_0x3b54a9(0x59f)](_0x146b2f):VisuMZ[_0x3b54a9(0x338)][_0x3b54a9(0x3f1)][_0x3b54a9(0x4d9)](this,_0x114d41,_0x53d73e,_0x18be45);},Game_CharacterBase[_0x2552df(0x4c3)][_0x2552df(0x35e)]=function(){this['_spriteOffsetX']=0x0,this['_spriteOffsetY']=0x0;},VisuMZ[_0x2552df(0x338)]['Game_CharacterBase_screenX']=Game_CharacterBase['prototype']['screenX'],Game_CharacterBase[_0x2552df(0x4c3)][_0x2552df(0x2b3)]=function(){const _0x294666=_0x2552df;return VisuMZ[_0x294666(0x338)][_0x294666(0x576)]['call'](this)+(this[_0x294666(0x5c9)]||0x0);},VisuMZ[_0x2552df(0x338)][_0x2552df(0x387)]=Game_CharacterBase[_0x2552df(0x4c3)][_0x2552df(0x3ae)],Game_CharacterBase[_0x2552df(0x4c3)]['screenY']=function(){const _0x180919=_0x2552df;return VisuMZ[_0x180919(0x338)][_0x180919(0x387)][_0x180919(0x4d9)](this)+(this['_spriteOffsetY']||0x0);},Game_CharacterBase[_0x2552df(0x4c3)][_0x2552df(0x284)]=function(){this['_stepPattern']='';},VisuMZ[_0x2552df(0x338)][_0x2552df(0x250)]=Game_CharacterBase['prototype'][_0x2552df(0x451)],Game_CharacterBase[_0x2552df(0x4c3)][_0x2552df(0x451)]=function(){const _0x2899c3=_0x2552df;if(this[_0x2899c3(0x2aa)])return;if(this[_0x2899c3(0x30a)]())return;VisuMZ['EventsMoveCore'][_0x2899c3(0x250)][_0x2899c3(0x4d9)](this);},Game_CharacterBase[_0x2552df(0x4c3)]['updatePatternEventsMoveCore']=function(){const _0x375161=_0x2552df;if(!this[_0x375161(0x459)]()&&this[_0x375161(0x433)]>0x0)return![];switch(String(this[_0x375161(0x5bd)])[_0x375161(0x519)]()[_0x375161(0x1c7)]()){case _0x375161(0x1c3):this[_0x375161(0x234)]+=0x1;if(this[_0x375161(0x234)]>0x2)this['setPattern'](0x0);break;case _0x375161(0x5a8):this['_pattern']-=0x1;if(this['_pattern']<0x0)this['setPattern'](0x2);break;case _0x375161(0x2d8):case'SPIN\x20CW':this[_0x375161(0x411)]();break;case _0x375161(0x31d):case'SPIN\x20CCW':case _0x375161(0x189):case _0x375161(0x5cd):this[_0x375161(0x362)]();break;default:return![];}return!![];},Game_CharacterBase[_0x2552df(0x4c3)][_0x2552df(0x55a)]=function(){const _0x1d3196=_0x2552df;return $gameSystem[_0x1d3196(0x55a)](this);},Game_CharacterBase['prototype'][_0x2552df(0x27a)]=function(){const _0x2d35ba=_0x2552df,_0x1f0233=this[_0x2d35ba(0x55a)]();if(!_0x1f0233)return![];return _0x1f0233['iconIndex']>0x0;},Game_CharacterBase[_0x2552df(0x4c3)]['frontX']=function(){const _0xa0c0bc=_0x2552df,_0x3fb979=this[_0xa0c0bc(0x17f)]();return $gameMap[_0xa0c0bc(0x4af)](this['x'],_0x3fb979);},Game_CharacterBase['prototype']['frontY']=function(){const _0xe8ebd1=_0x2552df,_0x286195=this[_0xe8ebd1(0x17f)]();return $gameMap['roundYWithDirection'](this['y'],_0x286195);},Game_CharacterBase[_0x2552df(0x4c3)]['backX']=function(){const _0x361c44=_0x2552df,_0x106a22=this[_0x361c44(0x43f)](this[_0x361c44(0x17f)]());return $gameMap[_0x361c44(0x4af)](this['x'],_0x106a22);},Game_CharacterBase['prototype'][_0x2552df(0x58c)]=function(){const _0x42af8e=_0x2552df,_0x22acd1=this[_0x42af8e(0x43f)](this['direction']());return $gameMap[_0x42af8e(0x3bb)](this['y'],_0x22acd1);},VisuMZ[_0x2552df(0x338)][_0x2552df(0x178)]=Game_Character[_0x2552df(0x4c3)][_0x2552df(0x1be)],Game_Character['prototype'][_0x2552df(0x1be)]=function(_0x30e383){const _0xf4ed54=_0x2552df;route=JsonEx[_0xf4ed54(0x414)](_0x30e383),VisuMZ[_0xf4ed54(0x338)]['Game_Character_setMoveRoute']['call'](this,route);},VisuMZ['EventsMoveCore'][_0x2552df(0x4cb)]=Game_Character[_0x2552df(0x4c3)][_0x2552df(0x5e4)],Game_Character[_0x2552df(0x4c3)][_0x2552df(0x5e4)]=function(_0x371538){const _0x458e82=_0x2552df;route=JsonEx[_0x458e82(0x414)](_0x371538),VisuMZ[_0x458e82(0x338)][_0x458e82(0x4cb)][_0x458e82(0x4d9)](this,route);},VisuMZ[_0x2552df(0x338)][_0x2552df(0x379)]=Game_Character[_0x2552df(0x4c3)]['processMoveCommand'],Game_Character[_0x2552df(0x4c3)][_0x2552df(0x56f)]=function(_0x538844){const _0x454dba=_0x2552df,_0x575ba7=Game_Character,_0x2a9c17=_0x538844[_0x454dba(0x322)];if(_0x538844[_0x454dba(0x24a)]===_0x575ba7[_0x454dba(0x421)]){let _0x6b8570=_0x538844[_0x454dba(0x322)][0x0];_0x6b8570=this['convertVariableValuesInScriptCall'](_0x6b8570),_0x6b8570=this[_0x454dba(0x5de)](_0x6b8570),this[_0x454dba(0x1ea)](_0x538844,_0x6b8570);}else{if(_0x454dba(0x33e)==='iZQqR'){if(_0x205219)return _0x2f9f69;}else VisuMZ['EventsMoveCore'][_0x454dba(0x379)][_0x454dba(0x4d9)](this,_0x538844);}},Game_Character[_0x2552df(0x4c3)][_0x2552df(0x3af)]=function(_0x4a19c6){const _0x387654=_0x2552df,_0x4d85e6=/\$gameVariables\.value\((\d+)\)/gi,_0x19d8f0=/\\V\[(\d+)\]/gi;while(_0x4a19c6['match'](_0x4d85e6)){if(_0x387654(0x171)==='nkDVe'){const _0x5f2796=this[_0x387654(0x307)]+_0x567929(_0xe173f2['$1']);return this[_0x387654(0x2b1)](_0x5f2796);}else _0x4a19c6=_0x4a19c6[_0x387654(0x26d)](_0x4d85e6,(_0x1a04f9,_0x19652d)=>$gameVariables[_0x387654(0x2c1)](parseInt(_0x19652d)));}while(_0x4a19c6[_0x387654(0x47f)](_0x19d8f0)){_0x4a19c6=_0x4a19c6[_0x387654(0x26d)](_0x19d8f0,(_0x2d88e7,_0x3d60c2)=>$gameVariables[_0x387654(0x2c1)](parseInt(_0x3d60c2)));}return _0x4a19c6;},Game_Character[_0x2552df(0x4c3)][_0x2552df(0x5de)]=function(_0xeed4db){const _0xaa3b30=_0x2552df,_0x3221f9=/\\SELFVAR\[(\d+)\]/gi;while(_0xeed4db[_0xaa3b30(0x47f)](_0x3221f9)){_0xaa3b30(0x1d4)!==_0xaa3b30(0x148)?_0xeed4db=_0xeed4db['replace'](_0x3221f9,(_0x896a18,_0x5228d8)=>getSelfVariableValue(this[_0xaa3b30(0x3f5)],this[_0xaa3b30(0x155)],parseInt(_0x5228d8))):_0x2dd7d2[_0xaa3b30(0x2a1)](_0x2a8711[_0xaa3b30(0x52c)],_0x48cca7[_0xaa3b30(0x444)]||_0x3fa9a4[_0xaa3b30(0x350)]());}return _0xeed4db;},Game_Character[_0x2552df(0x4c3)][_0x2552df(0x1ea)]=function(_0x3ad3da,_0x4a2f1e){const _0x4b00be=_0x2552df;if(_0x4a2f1e[_0x4b00be(0x47f)](/ANIMATION:[ ](\d+)/i))return this[_0x4b00be(0x237)](Number(RegExp['$1']));if(_0x4a2f1e['match'](/BALLOON:[ ](.*)/i))return _0x4b00be(0x2bf)===_0x4b00be(0x2bf)?this[_0x4b00be(0x213)](String(RegExp['$1'])):_0x2b6b51[_0x4b00be(0x338)]['Game_Switches_value'][_0x4b00be(0x4d9)](this,_0x4b6c98);if(_0x4a2f1e[_0x4b00be(0x47f)](/FADE IN:[ ](\d+)/i))return this[_0x4b00be(0x579)](Number(RegExp['$1']));if(_0x4a2f1e[_0x4b00be(0x47f)](/FADE OUT:[ ](\d+)/i))return this[_0x4b00be(0x193)](Number(RegExp['$1']));if(_0x4a2f1e['match'](/FORCE (?:CARRY|CARRYING|HOLD|HOLDING):[ ](?:TRUE|ON)/i))return this[_0x4b00be(0x3fb)]();if(_0x4a2f1e[_0x4b00be(0x47f)](/FORCE (?:CARRY|CARRYING|HOLD|HOLDING):[ ](?:FALSE|OFF)/i)){if(_0x4b00be(0x532)===_0x4b00be(0x2a5))this[_0x4b00be(0x1ae)][_0x4b00be(0x25e)]=![];else return this['clearCarrying']();}if(_0x4a2f1e['match'](/FORCE (?:DASH|DASHING|RUN|RUNNING):[ ](?:TRUE|ON)/i))return this['forceDashing']();if(_0x4a2f1e[_0x4b00be(0x47f)](/FORCE (?:DASH|DASHING|RUN|RUNNING):[ ](?:FALSE|OFF)/i))return this[_0x4b00be(0x4a6)]();if(_0x4a2f1e[_0x4b00be(0x47f)](/HUG:[ ]LEFT/i)){if(_0x4b00be(0x277)==='tnDAR')_0x3fb161('%1\x20is\x20incorrectly\x20placed\x20on\x20the\x20plugin\x20list.\x0aIt\x20is\x20a\x20Tier\x20%2\x20plugin\x20placed\x20over\x20other\x20Tier\x20%3\x20plugins.\x0aPlease\x20reorder\x20the\x20plugin\x20list\x20from\x20smallest\x20to\x20largest\x20tier\x20numbers.'[_0x4b00be(0x265)](_0x56721f,_0x190b16,_0x4abc92)),_0x3161a7['exit']();else return this[_0x4b00be(0x151)]('left');}if(_0x4a2f1e[_0x4b00be(0x47f)](/HUG:[ ]RIGHT/i)){if(_0x4b00be(0x353)!==_0x4b00be(0x353)){if(this[_0x4b00be(0x5e9)]!==0x3)return;if(this[_0x4b00be(0x1ef)])return;if(!this['checkRegionEventTrigger'](![]))return;if(!this['checkActivationProximity'](![]))return;_0x404b8f[_0x4b00be(0x338)][_0x4b00be(0x41a)][_0x4b00be(0x4d9)](this);}else return this[_0x4b00be(0x151)](_0x4b00be(0x4a7));}if(_0x4a2f1e[_0x4b00be(0x47f)](/INDEX:[ ](\d+)/i)){if(_0x4b00be(0x5df)==='SLfyD'){if(this[_0x4b00be(0x3bf)]<=0x0)return;this[_0x4b00be(0x248)]=![],this[_0x4b00be(0x54b)]=!![];}else return this[_0x4b00be(0x2b1)](Number(RegExp['$1']));}if(_0x4a2f1e[_0x4b00be(0x47f)](/INDEX:[ ]([\+\-]\d+)/i)){const _0x3c1cb1=this['_characterIndex']+Number(RegExp['$1']);return this[_0x4b00be(0x2b1)](_0x3c1cb1);}if(_0x4a2f1e['match'](/JUMP FORWARD:[ ](\d+)/i)){if(_0x4b00be(0x206)!==_0x4b00be(0x206)){let _0x6f144b=[_0x28e87e,_0x2359e2,_0x4b00be(0x46d)[_0x4b00be(0x265)](_0x1829e0)];typeof _0x46c3ae==='string'&&(_0x6f144b=[_0x5c4661,_0x245755,_0x2c0b96[_0x4b00be(0x519)]()[_0x4b00be(0x1c7)]()]),_0x102ca8[_0x4b00be(0x17c)](_0x6f144b,_0x4d1fc3);}else return this['processMoveRouteJumpForward'](Number(RegExp['$1']));}if(_0x4a2f1e[_0x4b00be(0x47f)](/JUMP TO:\s*(\d+)\s*[, ]\s*(\d+)/i)){if(_0x4b00be(0x4b9)!=='GPGjZ')return this['processMoveRouteJumpTo'](Number(RegExp['$1']),Number(RegExp['$2']));else _0x4fdc56['clearDestination']();}if(_0x4a2f1e[_0x4b00be(0x47f)](/JUMP TO EVENT:[ ](\d+)/i)){if(_0x4b00be(0x24e)!=='bhCaY'){if(this['_MapSpawnedEventData']===_0x11d9e7)this['initEventsMoveCore']();return this['_MapSpawnedEventData'][_0x4cfdf4]=this[_0x4b00be(0x47b)][_0x5c75fc]||[],this[_0x4b00be(0x47b)][_0x948c8e];}else{const _0xab9159=$gameMap['event'](Number(RegExp['$1']));return this['processMoveRouteJumpToCharacter'](_0xab9159);}}if(_0x4a2f1e['match'](/JUMP TO PLAYER/i))return this[_0x4b00be(0x566)]($gamePlayer);if(_0x4a2f1e['match'](/MOVE[ ](.*)[ ]UNTIL STOP/i)){if(_0x4b00be(0x397)===_0x4b00be(0x397)){const _0xec669e=String(RegExp['$1']),_0xfea4b6=this[_0x4b00be(0x547)](_0x4a2f1e);return this[_0x4b00be(0x194)](_0xec669e,_0xfea4b6);}else return this[_0x4b00be(0x144)](_0x40cb2f);}if(_0x4a2f1e[_0x4b00be(0x47f)](/MOVE TO:\s*(\d+)\s*[, ]\s*(\d+)/i)){const _0xe196fa=Number(RegExp['$1']),_0x3e6b03=Number(RegExp['$2']),_0x4795bd=this[_0x4b00be(0x547)](_0x4a2f1e);return this[_0x4b00be(0x5e3)](_0xe196fa,_0x3e6b03,_0x4795bd);}if(_0x4a2f1e[_0x4b00be(0x47f)](/MOVE TO EVENT:[ ](\d+)/i)){const _0x555de6=$gameMap['event'](Number(RegExp['$1'])),_0x814a6f=this[_0x4b00be(0x547)](_0x4a2f1e);return this[_0x4b00be(0x19d)](_0x555de6,_0x814a6f);}if(_0x4a2f1e[_0x4b00be(0x47f)](/MOVE TO PLAYER/i)){if(_0x4b00be(0x13a)===_0x4b00be(0x4bc))return 0x6;else{const _0x42013f=this[_0x4b00be(0x547)](_0x4a2f1e);return this['processMoveRouteMoveToCharacter']($gamePlayer,_0x42013f);}}if(_0x4a2f1e[_0x4b00be(0x47f)](/MOVE LOWER LEFT:[ ](\d+)/i))return this[_0x4b00be(0x567)](0x1,Number(RegExp['$1']));if(_0x4a2f1e['match'](/MOVE DOWN:[ ](\d+)/i)){if(_0x4b00be(0x3d9)!==_0x4b00be(0x3d9)){this[_0x4b00be(0x324)]=![];const _0x42ee18=_0x424f76[_0x4b00be(0x166)]||'';_0x42ee18[_0x4b00be(0x47f)](/<SAVE EVENT (?:LOCATION|LOCATIONS)>/i)&&(this[_0x4b00be(0x324)]=!![]);}else return this[_0x4b00be(0x567)](0x2,Number(RegExp['$1']));}if(_0x4a2f1e[_0x4b00be(0x47f)](/MOVE LOWER RIGHT:[ ](\d+)/i))return this[_0x4b00be(0x567)](0x3,Number(RegExp['$1']));if(_0x4a2f1e[_0x4b00be(0x47f)](/MOVE LEFT:[ ](\d+)/i))return this['processMoveRouteMoveRepeat'](0x4,Number(RegExp['$1']));if(_0x4a2f1e['match'](/MOVE RIGHT:[ ](\d+)/i))return this[_0x4b00be(0x567)](0x6,Number(RegExp['$1']));if(_0x4a2f1e[_0x4b00be(0x47f)](/MOVE UPPER LEFT:[ ](\d+)/i))return _0x4b00be(0x38b)===_0x4b00be(0x38b)?this[_0x4b00be(0x567)](0x7,Number(RegExp['$1'])):this[_0x4b00be(0x3b2)][_0x4b00be(0x290)]||0x0;if(_0x4a2f1e[_0x4b00be(0x47f)](/MOVE UP:[ ](\d+)/i)){if('pnWWb'===_0x4b00be(0x1a5))return this[_0x4b00be(0x567)](0x8,Number(RegExp['$1']));else{const _0x24e7ba=/\\SELFVAR\[(\d+)\]/gi;while(_0x48783f[_0x4b00be(0x47f)](_0x24e7ba)){_0x171085=_0x57baf1[_0x4b00be(0x26d)](_0x24e7ba,(_0x22aba5,_0x5b7b97)=>_0x4cedc2(this[_0x4b00be(0x3f5)],this[_0x4b00be(0x155)],_0x1b1981(_0x5b7b97)));}return _0x3d7e15;}}if(_0x4a2f1e[_0x4b00be(0x47f)](/MOVE UPPER RIGHT:[ ](\d+)/i))return this['processMoveRouteMoveRepeat'](0x9,Number(RegExp['$1']));if(_0x4a2f1e['match'](/OPACITY:[ ](\d+)([%％])/i)){const _0x3bc452=Math[_0x4b00be(0x594)](Number(RegExp['$1'])/0x64*0xff);return this['setOpacity'](_0x3bc452[_0x4b00be(0x468)](0x0,0xff));}if(_0x4a2f1e[_0x4b00be(0x47f)](/OPACITY:[ ]([\+\-]\d+)([%％])/i)){const _0x4e2eb7=this[_0x4b00be(0x3f2)]+Math['round'](Number(RegExp['$1'])/0x64*0xff);return this['setOpacity'](_0x4e2eb7[_0x4b00be(0x468)](0x0,0xff));}if(_0x4a2f1e[_0x4b00be(0x47f)](/OPACITY:[ ]([\+\-]\d+)/i)){const _0x50ae0c=this[_0x4b00be(0x3f2)]+Number(RegExp['$1']);return this[_0x4b00be(0x216)](_0x50ae0c[_0x4b00be(0x468)](0x0,0xff));}if(_0x4a2f1e['match'](/PATTERN LOCK:[ ](\d+)/i)){if(_0x4b00be(0x2ed)===_0x4b00be(0x2ed))return this[_0x4b00be(0x325)](Number(RegExp['$1']));else this[_0x4b00be(0x473)]=_0x4f51da[_0x4b00be(0x1d2)];}if(_0x4a2f1e['match'](/PATTERN UNLOCK/i))return this[_0x4b00be(0x2aa)]=![];if(_0x4a2f1e[_0x4b00be(0x47f)](/POSE:[ ](.*)/i)){const _0x1e5891=String(RegExp['$1'])['toUpperCase']()[_0x4b00be(0x1c7)]();return this['setPose'](_0x1e5891);}if(_0x4a2f1e[_0x4b00be(0x47f)](/STEP TOWARD:\s*(\d+)\s*[, ]\s*(\d+)/i)){if(_0x4b00be(0x1ed)!=='HfTwt'){const _0x46da14=Number(RegExp['$1']),_0x24e2d5=Number(RegExp['$2']);return this[_0x4b00be(0x282)](_0x46da14,_0x24e2d5);}else this[_0x4b00be(0x52e)](...arguments);}if(_0x4a2f1e[_0x4b00be(0x47f)](/STEP TOWARD EVENT:[ ](\d+)/i)){const _0xe5cc0a=$gameMap['event'](Number(RegExp['$1']));return this[_0x4b00be(0x59f)](_0xe5cc0a);}if(_0x4a2f1e[_0x4b00be(0x47f)](/STEP TOWARD PLAYER/i))return this['processMoveRouteStepToCharacter']($gamePlayer);if(_0x4a2f1e[_0x4b00be(0x47f)](/STEP AWAY FROM:\s*(\d+)\s*[, ]\s*(\d+)/i))return this[_0x4b00be(0x1b7)](Number(RegExp['$1']),Number(RegExp['$2']));if(_0x4a2f1e[_0x4b00be(0x47f)](/STEP AWAY FROM EVENT:[ ](\d+)/i)){const _0x5e4dcb=$gameMap['event'](Number(RegExp['$1']));return this[_0x4b00be(0x24f)](_0x5e4dcb);}if(_0x4a2f1e[_0x4b00be(0x47f)](/STEP AWAY FROM PLAYER/i))return _0x4b00be(0x401)===_0x4b00be(0x21e)?this[_0x4b00be(0x237)](_0x3aff3b(_0x30ed46['$1'])):this[_0x4b00be(0x24f)]($gamePlayer);if(_0x4a2f1e[_0x4b00be(0x47f)](/TURN TO:\s*(\d+)\s*[, ]\s*(\d+)/i))return this[_0x4b00be(0x2b6)](Number(RegExp['$1']),Number(RegExp['$2']));if(_0x4a2f1e[_0x4b00be(0x47f)](/TURN TO EVENT:[ ](\d+)/i)){const _0x1826af=$gameMap[_0x4b00be(0x218)](Number(RegExp['$1']));return this[_0x4b00be(0x20b)](_0x1826af);}if(_0x4a2f1e[_0x4b00be(0x47f)](/TURN TO PLAYER/i)){if(_0x4b00be(0x141)===_0x4b00be(0x141))return this['turnTowardCharacter']($gamePlayer);else{_0x2da203['EventsMoveCore']['Game_Timer_stop'][_0x4b00be(0x4d9)](this);if(this[_0x4b00be(0x248)]===_0x1bcaa4)this[_0x4b00be(0x1cf)]();this['_paused']=![];}}if(_0x4a2f1e['match'](/TURN AWAY FROM:\s*(\d+)\s*[, ]\s*(\d+)/i))return this[_0x4b00be(0x266)](Number(RegExp['$1']),Number(RegExp['$2']));if(_0x4a2f1e['match'](/TURN AWAY FROM EVENT:[ ](\d+)/i)){const _0x54fa4f=$gameMap[_0x4b00be(0x218)](Number(RegExp['$1']));return this[_0x4b00be(0x49e)](_0x54fa4f);}if(_0x4a2f1e[_0x4b00be(0x47f)](/TURN AWAY FROM PLAYER/i))return this[_0x4b00be(0x49e)]($gamePlayer);if(_0x4a2f1e[_0x4b00be(0x47f)](/TURN LOWER LEFT/i)){if(_0x4b00be(0x2a4)==='yyECQ')return this['setDirection'](0x1);else _0x372a89[_0x4b00be(0x338)]['Scene_Map_startEncounterEffect'][_0x4b00be(0x4d9)](this),this[_0x4b00be(0x157)][_0x4b00be(0x54a)]();}if(_0x4a2f1e[_0x4b00be(0x47f)](/TURN LOWER RIGHT/i)){if('krOui'!=='jJyHb')return this[_0x4b00be(0x580)](0x3);else{_0x46bb63[_0x4b00be(0x3ce)](_0x400fdc,_0x528610);const _0x5daa97=_0x39084c[_0x4b00be(0x205)](),_0x535d75={'template':_0x34c34a['TemplateName'],'mapId':_0x23c560[_0x4b00be(0x1e0)]||_0x384ce1['mapId'](),'eventId':_0x512ea2[_0x4b00be(0x149)]||_0x5daa97[_0x4b00be(0x350)](),'x':-0x1,'y':-0x1,'spawnPreserved':_0x3c0a1c[_0x4b00be(0x3d3)],'spawnEventId':_0x4d32e6[_0x4b00be(0x1bf)][_0x4b00be(0x506)]+0x3e8},_0x40963f=_0x586245['SuccessSwitchId']||0x0,_0x523ddc=_0x3f96ac[_0x4b00be(0x1b2)](_0x535d75,_0x2fb8d4[_0x4b00be(0x2cc)],_0x1b826d['Collision'],_0x4f0572[_0x4b00be(0x27e)]);_0x40963f&&_0x4db6c7[_0x4b00be(0x17c)](_0x40963f,!!_0x523ddc);}}if(_0x4a2f1e[_0x4b00be(0x47f)](/TURN UPPER LEFT/i))return this[_0x4b00be(0x580)](0x7);if(_0x4a2f1e[_0x4b00be(0x47f)](/TURN UPPER RIGHT/i)){if(_0x4b00be(0x412)!==_0x4b00be(0x412))this[_0x4b00be(0x55f)][_0x4b00be(0x380)]=_0x5cb8a1(_0x56acbe['$1']),this[_0x4b00be(0x55f)][_0x4b00be(0x45e)]=_0x118bff(_0x1de897['$2']);else return this[_0x4b00be(0x580)](0x9);}if(_0x4a2f1e[_0x4b00be(0x47f)](/Self Switch[ ](.*):[ ](.*)/i))return this[_0x4b00be(0x156)](RegExp['$1'],RegExp['$2']);if(_0x4a2f1e[_0x4b00be(0x47f)](/Self Variable[ ](.*):[ ](.*)/i))return this[_0x4b00be(0x409)](RegExp['$1'],RegExp['$2']);if(_0x4a2f1e[_0x4b00be(0x47f)](/TELEPORT TO:\s*(\d+)\s*[, ]\s*(\d+)/i)){if(_0x4b00be(0x523)==='tFHvB')this[_0x4b00be(0x1ae)][_0x4b00be(0x398)]=_0x363a02(_0x3af6da['$1']);else return this[_0x4b00be(0x2ec)](Number(RegExp['$1']),Number(RegExp['$2']));}if(_0x4a2f1e[_0x4b00be(0x47f)](/TELEPORT TO EVENT:[ ](\d+)/i)){const _0x2492df=$gameMap['event'](Number(RegExp['$1']));return this['processMoveRouteTeleportToCharacter'](_0x2492df);}if(_0x4a2f1e[_0x4b00be(0x47f)](/TELEPORT TO PLAYER/i))return this['processMoveRouteTeleportToCharacter']($gamePlayer);try{_0x4b00be(0x4d0)===_0x4b00be(0x279)?this[_0x4b00be(0x5bd)]='':VisuMZ[_0x4b00be(0x338)][_0x4b00be(0x379)][_0x4b00be(0x4d9)](this,_0x3ad3da);}catch(_0x4fde86){if($gameTemp['isPlaytest']())console['log'](_0x4fde86);}},Game_Character[_0x2552df(0x4c3)][_0x2552df(0x237)]=function(_0x5c2690){const _0x44e36b=_0x2552df;$gameTemp[_0x44e36b(0x1c2)]([this],_0x5c2690);},Game_Character[_0x2552df(0x4c3)]['processMoveRouteBalloon']=function(_0x92e808){const _0x3218f0=_0x2552df;let _0x5424a6=0x0;switch(_0x92e808[_0x3218f0(0x519)]()['trim']()){case'!':case _0x3218f0(0x42f):_0x5424a6=0x1;break;case'?':case _0x3218f0(0x164):_0x5424a6=0x2;break;case _0x3218f0(0x40d):case'NOTE':case _0x3218f0(0x392):case _0x3218f0(0x5ca):case'MUSICNOTE':_0x5424a6=0x3;break;case _0x3218f0(0x564):case'LOVE':_0x5424a6=0x4;break;case _0x3218f0(0x5b5):_0x5424a6=0x5;break;case _0x3218f0(0x13e):_0x5424a6=0x6;break;case _0x3218f0(0x317):case _0x3218f0(0x150):case'FRUSTRATION':_0x5424a6=0x7;break;case'SILENCE':case _0x3218f0(0x1dd):_0x5424a6=0x8;break;case _0x3218f0(0x5d7):case'BULB':case'LIGHT\x20BULB':case _0x3218f0(0x24c):case _0x3218f0(0x57c):_0x5424a6=0x9;break;case'Z':case'ZZ':case _0x3218f0(0x590):case _0x3218f0(0x1fd):_0x5424a6=0xa;break;case _0x3218f0(0x5a3):_0x5424a6=0xb;break;case'USER-DEFINED\x202':_0x5424a6=0xc;break;case _0x3218f0(0x1b6):_0x5424a6=0xd;break;case'USER-DEFINED\x204':_0x5424a6=0xe;break;case'USER-DEFINED\x205':_0x5424a6=0xf;break;}$gameTemp[_0x3218f0(0x51d)](this,_0x5424a6);},Game_Character[_0x2552df(0x4c3)][_0x2552df(0x579)]=function(_0x2a7aa8){const _0x166f48=_0x2552df;_0x2a7aa8+=this[_0x166f48(0x3f2)],this['setOpacity'](_0x2a7aa8[_0x166f48(0x468)](0x0,0xff));if(this[_0x166f48(0x3f2)]<0xff)this[_0x166f48(0x473)]--;},Game_Character[_0x2552df(0x4c3)]['processMoveRouteFadeOut']=function(_0x4985d8){const _0x1fffd4=_0x2552df;_0x4985d8=this[_0x1fffd4(0x3f2)]-_0x4985d8,this[_0x1fffd4(0x216)](_0x4985d8[_0x1fffd4(0x468)](0x0,0xff));if(this[_0x1fffd4(0x3f2)]>0x0)this['_moveRouteIndex']--;},Game_Character['prototype'][_0x2552df(0x151)]=function(_0x5c6aef){const _0x3f434f=_0x2552df,_0x44d059=[0x0,0x3,0x6,0x9,0x2,0x0,0x8,0x1,0x4,0x7],_0x54f300=[0x0,0x7,0x4,0x1,0x8,0x0,0x2,0x9,0x6,0x3],_0x51d086=this['direction'](),_0x363411=(_0x5c6aef===_0x3f434f(0x32f)?_0x44d059:_0x54f300)[_0x51d086],_0x212efd=(_0x5c6aef===_0x3f434f(0x32f)?_0x54f300:_0x44d059)[_0x51d086];if(this[_0x3f434f(0x1fb)](this['x'],this['y'],_0x363411)){if(_0x3f434f(0x58b)!==_0x3f434f(0x578))_0x5c6aef===_0x3f434f(0x32f)?this['turnLeft90']():this[_0x3f434f(0x411)]();else{_0x531bb3[_0x3f434f(0x3ce)](_0xd8bd5d,_0x497d50),_0x55a3aa['setControlledFollowerID'](0x0),_0x5d423a['setStopFollowerChasing'](![]);for(const _0x4f8b9a of _0x5a768c[_0x3f434f(0x280)]()[_0x3f434f(0x4df)]){if(_0x4f8b9a)_0x4f8b9a['setChaseOff'](![]);}}}else{if(!this[_0x3f434f(0x1fb)](this['x'],this['y'],this[_0x3f434f(0x17f)]())){if(this[_0x3f434f(0x1fb)](this['x'],this['y'],_0x212efd)){if(_0x3f434f(0x589)===_0x3f434f(0x2ac))return this[_0x3f434f(0x580)](0x7);else _0x5c6aef===_0x3f434f(0x32f)?this[_0x3f434f(0x411)]():this[_0x3f434f(0x362)]();}else this[_0x3f434f(0x35d)]();}}this[_0x3f434f(0x1fb)](this['x'],this['y'],this[_0x3f434f(0x17f)]())&&(_0x3f434f(0x5c6)!==_0x3f434f(0x35b)?this['moveForward']():this['morphInto'](_0x2a9744[_0x3f434f(0x399)],_0x174045[_0x3f434f(0x350)],!![]));},Game_Character[_0x2552df(0x4c3)][_0x2552df(0x2b1)]=function(_0x229d7e){const _0x2cd064=_0x2552df;if(ImageManager[_0x2cd064(0x390)](this[_0x2cd064(0x226)]))return;_0x229d7e=_0x229d7e[_0x2cd064(0x468)](0x0,0x7),this[_0x2cd064(0x1c5)](this[_0x2cd064(0x226)],_0x229d7e);},Game_Character[_0x2552df(0x4c3)][_0x2552df(0x336)]=function(_0xcc6a13){const _0x207aba=_0x2552df;switch(this[_0x207aba(0x17f)]()){case 0x1:this['jump'](-_0xcc6a13,_0xcc6a13);break;case 0x2:this[_0x207aba(0x403)](0x0,_0xcc6a13);break;case 0x3:this[_0x207aba(0x403)](_0xcc6a13,_0xcc6a13);break;case 0x4:this['jump'](-_0xcc6a13,0x0);break;case 0x6:this[_0x207aba(0x403)](_0xcc6a13,0x0);break;case 0x7:this['jump'](-_0xcc6a13,-_0xcc6a13);break;case 0x8:this[_0x207aba(0x403)](0x0,-_0xcc6a13);break;case 0x9:this[_0x207aba(0x403)](_0xcc6a13,-_0xcc6a13);break;}},Game_Character['prototype']['processMoveRouteJumpTo']=function(_0x333c49,_0x14fd25){const _0x23969b=_0x2552df,_0x37a7b8=Math[_0x23969b(0x594)](_0x333c49-this['x']),_0x444c5e=Math[_0x23969b(0x594)](_0x14fd25-this['y']);this[_0x23969b(0x403)](_0x37a7b8,_0x444c5e);},Game_Character['prototype'][_0x2552df(0x566)]=function(_0x3c9be9){if(_0x3c9be9)this['processMoveRouteJumpTo'](_0x3c9be9['x'],_0x3c9be9['y']);},Game_Character[_0x2552df(0x4c3)]['processMoveRouteStepTo']=function(_0xeaf06d,_0x584bc5,_0x58918a){const _0x538797=_0x2552df;let _0x3d4480=0x0;if(_0x58918a)$gameTemp[_0x538797(0x305)]=!![];$gameMap[_0x538797(0x3c8)]()?_0x3d4480=this[_0x538797(0x582)](_0xeaf06d,_0x584bc5):_0x3d4480=this[_0x538797(0x1b9)](_0xeaf06d,_0x584bc5);if(_0x58918a)$gameTemp[_0x538797(0x305)]=![];this['executeMoveDir8'](_0x3d4480),this['setMovementSuccess'](!![]);},Game_Character[_0x2552df(0x4c3)][_0x2552df(0x59f)]=function(_0x1c6c24){const _0x1dbb8d=_0x2552df;if(_0x1c6c24)this[_0x1dbb8d(0x282)](_0x1c6c24['x'],_0x1c6c24['y']);},Game_Character[_0x2552df(0x4c3)][_0x2552df(0x253)]=function(_0x21bfc9,_0x38b95e){const _0x353928=_0x2552df,_0x405841=this[_0x353928(0x5c2)](_0x21bfc9),_0xf550f8=this[_0x353928(0x592)](_0x38b95e);},Game_Character[_0x2552df(0x4c3)][_0x2552df(0x547)]=function(_0x96148f){const _0x81e4c=_0x2552df;if(_0x96148f[_0x81e4c(0x47f)](/(?:CRASH|COLLIDE|COLLISION|ENCOUNTER|TOUCH)/i))return!![];else{if(_0x96148f[_0x81e4c(0x47f)](/(?:AVOID|EVADE|DODGE)/i)){if('qCIFF'!=='aleID')return![];else _0x239fa6['EventsMoveCore'][_0x81e4c(0x544)]['loadCPC'](_0x4e09fe);}else return![];}},VisuMZ[_0x2552df(0x338)]['Game_Event_isCollidedWithPlayerCharacters']=Game_Event[_0x2552df(0x4c3)]['isCollidedWithPlayerCharacters'],Game_Event[_0x2552df(0x4c3)][_0x2552df(0x302)]=function(_0x5389a8,_0x5b3352){const _0x16913b=_0x2552df;if($gameTemp[_0x16913b(0x305)])return![];return VisuMZ[_0x16913b(0x338)][_0x16913b(0x4bf)][_0x16913b(0x4d9)](this,_0x5389a8,_0x5b3352);},Game_Character[_0x2552df(0x4c3)]['processMoveRouteMoveUntilStop']=function(_0x2580c3,_0x646980){const _0x522f39=_0x2552df,_0xa08c6a=['',_0x522f39(0x286),_0x522f39(0x31e),'LOWER\x20RIGHT',_0x522f39(0x439),'',_0x522f39(0x483),_0x522f39(0x2d6),'UP',_0x522f39(0x50a)],_0x2e9814=_0xa08c6a[_0x522f39(0x2ae)](_0x2580c3[_0x522f39(0x519)]()[_0x522f39(0x1c7)]());if(_0x2e9814<=0x0)return;if(_0x646980)$gameTemp[_0x522f39(0x305)]=!![];if(this[_0x522f39(0x1fb)](this['x'],this['y'],_0x2e9814)){if(_0x646980)$gameTemp[_0x522f39(0x305)]=![];this['executeMoveDir8'](_0x2e9814),this[_0x522f39(0x473)]-=0x1;}if(_0x646980)$gameTemp['_moveAllowPlayerCollision']=![];},Game_Character[_0x2552df(0x4c3)]['processMoveRouteMoveTo']=function(_0x1925d1,_0x3c14ed,_0x37e81f){const _0x1b7b91=_0x2552df;this[_0x1b7b91(0x282)](_0x1925d1,_0x3c14ed,_0x37e81f);if(this['x']!==_0x1925d1||this['y']!==_0x3c14ed)this[_0x1b7b91(0x473)]--;},Game_Character['prototype'][_0x2552df(0x19d)]=function(_0x440034,_0x40f421){const _0xd3edb7=_0x2552df;if(_0x440034)this[_0xd3edb7(0x5e3)](_0x440034['x'],_0x440034['y'],_0x40f421);},Game_Character[_0x2552df(0x4c3)][_0x2552df(0x567)]=function(_0x145ce4,_0xa0140a){const _0x4d9402=_0x2552df;_0xa0140a=_0xa0140a||0x0;const _0x188256={'code':0x1,'indent':null,'parameters':[]};_0x188256['code']=[0x0,0x5,0x1,0x6,0x2,0x0,0x3,0x7,0x4,0x8][_0x145ce4],this[_0x4d9402(0x1a0)][_0x4d9402(0x475)][this[_0x4d9402(0x473)]][_0x4d9402(0x322)][0x0]='';while(_0xa0140a--){if(_0x4d9402(0x3a4)===_0x4d9402(0x3a4))this['_moveRoute'][_0x4d9402(0x475)][_0x4d9402(0x5c7)](this[_0x4d9402(0x473)]+0x1,0x0,_0x188256);else return this[_0x4d9402(0x580)](0x3);}},Game_Character['prototype'][_0x2552df(0x325)]=function(_0x2c64c1){const _0xee7935=_0x2552df;this[_0xee7935(0x2aa)]=!![],this[_0xee7935(0x1ab)](_0x2c64c1);},Game_Character[_0x2552df(0x4c3)][_0x2552df(0x156)]=function(_0x5de07a,_0x4e9643){const _0x58293b=_0x2552df;if(this===$gamePlayer)return;const _0x1be004=[this[_0x58293b(0x3f5)],this[_0x58293b(0x155)],'A'];_0x5de07a[_0x58293b(0x47f)](/\b[ABCD]\b/i)?_0x1be004[0x2]=String(_0x5de07a)[_0x58293b(0x295)](0x0)[_0x58293b(0x519)]()[_0x58293b(0x1c7)]():_0x1be004[0x2]=_0x58293b(0x46d)[_0x58293b(0x265)](_0x5de07a);switch(_0x4e9643[_0x58293b(0x519)]()[_0x58293b(0x1c7)]()){case'ON':case _0x58293b(0x404):$gameSelfSwitches['setValue'](_0x1be004,!![]);break;case _0x58293b(0x41c):case _0x58293b(0x2a6):$gameSelfSwitches[_0x58293b(0x17c)](_0x1be004,![]);break;case _0x58293b(0x462):$gameSelfSwitches[_0x58293b(0x17c)](_0x1be004,!$gameSelfSwitches[_0x58293b(0x2c1)](_0x1be004));break;}},Game_Character[_0x2552df(0x4c3)][_0x2552df(0x409)]=function(_0x34ff76,_0x2bb4cd){const _0x17a4a8=_0x2552df;if(this===$gamePlayer)return;const _0x597f71=[this[_0x17a4a8(0x3f5)],this[_0x17a4a8(0x155)],_0x17a4a8(0x3a3)[_0x17a4a8(0x265)](switchId)];$gameSelfSwitches[_0x17a4a8(0x17c)](_0x597f71,Number(_0x2bb4cd));},Game_Character['prototype'][_0x2552df(0x2ec)]=function(_0x539e32,_0xdae700){this['locate'](_0x539e32,_0xdae700);},Game_Character[_0x2552df(0x4c3)][_0x2552df(0x261)]=function(_0x5c80ac){const _0x483a12=_0x2552df;if(_0x5c80ac)this[_0x483a12(0x2ec)](_0x5c80ac['x'],_0x5c80ac['y']);},Game_Character[_0x2552df(0x4c3)][_0x2552df(0x411)]=function(){const _0x54d394=_0x2552df;switch(this['direction']()){case 0x1:this[_0x54d394(0x580)](0x7);break;case 0x2:this['setDirection'](0x4);break;case 0x3:this['setDirection'](0x1);break;case 0x4:this[_0x54d394(0x580)](0x8);break;case 0x6:this['setDirection'](0x2);break;case 0x7:this[_0x54d394(0x580)](0x9);break;case 0x8:this['setDirection'](0x6);break;case 0x9:this['setDirection'](0x3);break;}},Game_Character[_0x2552df(0x4c3)][_0x2552df(0x362)]=function(){const _0x5d786b=_0x2552df;switch(this[_0x5d786b(0x17f)]()){case 0x1:this['setDirection'](0x3);break;case 0x2:this[_0x5d786b(0x580)](0x6);break;case 0x3:this['setDirection'](0x9);break;case 0x4:this[_0x5d786b(0x580)](0x2);break;case 0x6:this[_0x5d786b(0x580)](0x8);break;case 0x7:this['setDirection'](0x1);break;case 0x8:this[_0x5d786b(0x580)](0x4);break;case 0x9:this['setDirection'](0x7);break;}},Game_Character[_0x2552df(0x4c3)][_0x2552df(0x46c)]=function(_0x5cc120,_0x43a48a,_0x4e68eb){const _0x26cf91=_0x2552df,_0x3ca8f5=this['deltaXFrom'](_0x5cc120),_0x553b28=this[_0x26cf91(0x592)](_0x43a48a);if($gameMap[_0x26cf91(0x3c8)]()){if(_0x4e68eb||this[_0x26cf91(0x2c2)]()){if(_0x3ca8f5>0x0&&_0x553b28<0x0)return 0x1;if(_0x3ca8f5<0x0&&_0x553b28<0x0)return 0x3;if(_0x3ca8f5>0x0&&_0x553b28>0x0)return 0x7;if(_0x3ca8f5<0x0&&_0x553b28>0x0)return 0x9;}}if(Math['abs'](_0x3ca8f5)>Math['abs'](_0x553b28))return _0x3ca8f5>0x0?0x4:0x6;else{if(_0x553b28!==0x0)return _0x553b28>0x0?0x8:0x2;}return 0x0;},Game_Character['prototype']['getDirectionFromPoint']=function(_0x1ec977,_0x277851,_0x134281){const _0x536ee6=_0x2552df,_0x2f9d6b=this[_0x536ee6(0x5c2)](_0x1ec977),_0xc5489=this[_0x536ee6(0x592)](_0x277851);if($gameMap[_0x536ee6(0x3c8)]()){if(_0x536ee6(0x4ce)==='PfedZ'){if(_0x134281||this[_0x536ee6(0x2c2)]()){if(_0x536ee6(0x563)!==_0x536ee6(0x2ad)){if(_0x2f9d6b>0x0&&_0xc5489<0x0)return 0x9;if(_0x2f9d6b<0x0&&_0xc5489<0x0)return 0x7;if(_0x2f9d6b>0x0&&_0xc5489>0x0)return 0x3;if(_0x2f9d6b<0x0&&_0xc5489>0x0)return 0x1;}else return this['isSpriteVS8dir']()&&!!this[_0x536ee6(0x2c5)];}}else{this[_0x536ee6(0x524)]=!![];return;}}if(Math[_0x536ee6(0x41e)](_0x2f9d6b)>Math[_0x536ee6(0x41e)](_0xc5489))return _0x2f9d6b>0x0?0x6:0x4;else{if(_0xc5489!==0x0)return _0xc5489>0x0?0x2:0x8;}return 0x0;},Game_Character[_0x2552df(0x4c3)][_0x2552df(0x2b6)]=function(_0x1ee716,_0x4db6c6){const _0x11f467=_0x2552df,_0x10e8a1=this[_0x11f467(0x46c)](_0x1ee716,_0x4db6c6,!![]);if(_0x10e8a1)this['executeMoveDir8'](_0x10e8a1);},Game_Character['prototype'][_0x2552df(0x1b7)]=function(_0x96bdb9,_0x2a87a1){const _0x50ea43=_0x2552df,_0x4e91be=this[_0x50ea43(0x2b8)](_0x96bdb9,_0x2a87a1,!![]);if(_0x4e91be)this[_0x50ea43(0x484)](_0x4e91be);},Game_Character['prototype'][_0x2552df(0x378)]=function(_0x417bce,_0x33bf27){const _0x54c85a=_0x2552df,_0x112976=this[_0x54c85a(0x46c)](_0x417bce,_0x33bf27,![]);if(_0x112976)this[_0x54c85a(0x580)](_0x112976);},Game_Character['prototype']['turnAwayFromPoint']=function(_0x4fd257,_0x5d4f2c){const _0x4ce23e=_0x2552df,_0x58bead=this['getDirectionFromPoint'](_0x4fd257,_0x5d4f2c,![]);if(_0x58bead)this[_0x4ce23e(0x580)](_0x58bead);},Game_Character[_0x2552df(0x4c3)][_0x2552df(0x4e9)]=function(_0x3017d5){const _0x802fbb=_0x2552df;if(_0x3017d5)this[_0x802fbb(0x2b6)](_0x3017d5['x'],_0x3017d5['y']);},Game_Character['prototype']['moveAwayFromCharacter']=function(_0x5ab67c){if(_0x5ab67c)this['moveAwayFromPoint'](_0x5ab67c['x'],_0x5ab67c['y']);},Game_Character[_0x2552df(0x4c3)][_0x2552df(0x20b)]=function(_0x1fb7e4){const _0x24f624=_0x2552df;if(_0x1fb7e4)this[_0x24f624(0x378)](_0x1fb7e4['x'],_0x1fb7e4['y']);},Game_Character['prototype']['turnAwayFromCharacter']=function(_0x2ea308){if(_0x2ea308)this['turnAwayFromPoint'](_0x2ea308['x'],_0x2ea308['y']);},VisuMZ[_0x2552df(0x338)][_0x2552df(0x41d)]=Game_Player[_0x2552df(0x4c3)][_0x2552df(0x2e8)],Game_Player[_0x2552df(0x4c3)][_0x2552df(0x2e8)]=function(){const _0x533ac9=_0x2552df;if(this[_0x533ac9(0x264)])return!![];return VisuMZ[_0x533ac9(0x338)][_0x533ac9(0x41d)][_0x533ac9(0x4d9)](this);},Game_Player['prototype'][_0x2552df(0x3c5)]=function(){const _0x52e931=_0x2552df;return this[_0x52e931(0x2e8)]()&&(this[_0x52e931(0x1ac)]()||this[_0x52e931(0x24d)]()!==0x0&&this[_0x52e931(0x1fb)](this['_x'],this['_y'],this[_0x52e931(0x24d)]())||$gameTemp[_0x52e931(0x410)]());},VisuMZ[_0x2552df(0x338)][_0x2552df(0x4d1)]=Game_Player[_0x2552df(0x4c3)][_0x2552df(0x24d)],Game_Player[_0x2552df(0x4c3)][_0x2552df(0x24d)]=function(){const _0x2ae86f=_0x2552df;if($gameMap[_0x2ae86f(0x3c8)]()){if(_0x2ae86f(0x1af)!==_0x2ae86f(0x1af)){_0x205b5d[_0x2ae86f(0x2cd)]=_0x24db21['Name'][_0x2ae86f(0x519)]()[_0x2ae86f(0x1c7)](),_0xf11cc[_0x2ae86f(0x5ba)][_0x5e7682[_0x2ae86f(0x2cd)]]=_0xd445f6;if(!_0x368355['includes'](_0x4a9610['MapID']))_0x59c79c[_0x2ae86f(0x39c)](_0x73c7e3['MapID']);}else return this[_0x2ae86f(0x4c7)]();}else return VisuMZ[_0x2ae86f(0x338)][_0x2ae86f(0x4d1)][_0x2ae86f(0x4d9)](this);},Game_Player[_0x2552df(0x4c3)][_0x2552df(0x4c7)]=function(){const _0x23cf3b=_0x2552df;return Input[_0x23cf3b(0x4c6)];},Game_Player['prototype']['moveByInput']=function(){const _0x3a3748=_0x2552df;if($gameSystem[_0x3a3748(0x177)]())return 0x0;if(!this[_0x3a3748(0x1ac)]()&&this[_0x3a3748(0x53b)]()){let _0x3e1e33=this['getInputDirection']();if(_0x3e1e33>0x0)_0x3a3748(0x469)===_0x3a3748(0x1c1)?_0x505f5f['y']+=0x1:$gameTemp[_0x3a3748(0x3bc)]();else{if($gameTemp['isDestinationValid']()){if('fIavZ'===_0x3a3748(0x542))return this[_0x3a3748(0x20b)](_0x5c1255);else{const _0x46d936=$gameTemp['destinationX'](),_0x5b741d=$gameTemp[_0x3a3748(0x4c4)](),_0x53571f=$gameMap[_0x3a3748(0x3c8)](),_0x14dfcf=$gameMap[_0x3a3748(0x21f)](_0x46d936,_0x5b741d),_0x17a3d7=$gameMap[_0x3a3748(0x447)](_0x46d936,_0x5b741d)[_0x3a3748(0x506)]<=0x0;_0x53571f&&_0x14dfcf&&_0x17a3d7?_0x3e1e33=this[_0x3a3748(0x582)](_0x46d936,_0x5b741d):_0x3e1e33=this['findDirectionTo'](_0x46d936,_0x5b741d);}}}if(_0x3e1e33>0x0){if('mNntq'!==_0x3a3748(0x1a7)){let _0x5aacee=[_0x612f61,_0x40de79,_0x3a3748(0x46d)[_0x3a3748(0x265)](_0x586eb9)];return typeof _0x331fab==='string'&&(_0x5aacee=[_0x10851d,_0x306c8a,_0x2ed495['toUpperCase']()[_0x3a3748(0x1c7)]()]),_0x5b23ad[_0x3a3748(0x2c1)](_0x5aacee);}else{this['_inputTime']=this[_0x3a3748(0x352)]||0x0;if(this[_0x3a3748(0x268)]()){if(_0x3a3748(0x43b)===_0x3a3748(0x43b))this['setDirection'](_0x3e1e33);else{const _0x4ba52a=_0x34f413['eventsXyNt'](_0x53d2c6,_0x272056)['filter'](_0x31adb7=>_0x31adb7!==this&&_0x31adb7['isNormalPriority']());return _0x4ba52a['length']>0x0;}}else this[_0x3a3748(0x313)](_0x3e1e33);this[_0x3a3748(0x352)]++;}}else this[_0x3a3748(0x352)]=0x0;}},Game_Player['prototype'][_0x2552df(0x268)]=function(){const _0x51abcd=_0x2552df,_0x1f1631=VisuMZ['EventsMoveCore'][_0x51abcd(0x30c)][_0x51abcd(0x210)];if(!_0x1f1631['EnableTurnInPlace'])return![];if($gameTemp[_0x51abcd(0x410)]())return![];if(this[_0x51abcd(0x2e8)]()||this[_0x51abcd(0x1ac)]()||this[_0x51abcd(0x15c)]())return![];return this[_0x51abcd(0x352)]<_0x1f1631[_0x51abcd(0x4aa)];},VisuMZ['EventsMoveCore'][_0x2552df(0x1fa)]=Game_Player['prototype'][_0x2552df(0x313)],Game_Player[_0x2552df(0x4c3)][_0x2552df(0x313)]=function(_0x51a0a0){const _0x4fb02b=_0x2552df;$gameMap[_0x4fb02b(0x3c8)]()?this[_0x4fb02b(0x484)](_0x51a0a0):VisuMZ[_0x4fb02b(0x338)][_0x4fb02b(0x1fa)][_0x4fb02b(0x4d9)](this,_0x51a0a0);},VisuMZ[_0x2552df(0x338)][_0x2552df(0x344)]=Game_Player[_0x2552df(0x4c3)]['isMapPassable'],Game_Player[_0x2552df(0x4c3)]['isMapPassable']=function(_0xa70f79,_0x52d0e2,_0x4f697a){const _0x369cfe=_0x2552df;if($gameMap[_0x369cfe(0x2e7)](_0xa70f79,_0x52d0e2,_0x4f697a,_0x369cfe(0x487))){if(this[_0x369cfe(0x3b3)]()&&this['vehicle']())return this['vehicle']()[_0x369cfe(0x26f)](_0xa70f79,_0x52d0e2,_0x4f697a);else{if(_0x369cfe(0x367)===_0x369cfe(0x481))_0xa2ba47[_0x369cfe(0x3ce)](_0x431116,_0x35ffa6),_0x421d9b['setEventIconData'](_0x1d6842,_0x31f4a2[_0x369cfe(0x1f4)],_0x434e78[_0x369cfe(0x50e)],_0x5abd91[_0x369cfe(0x5b8)],_0x5e6230[_0x369cfe(0x365)]);else return!![];}}if($gameMap['isRegionForbidPass'](_0xa70f79,_0x52d0e2,_0x4f697a,'player'))return![];return VisuMZ[_0x369cfe(0x338)][_0x369cfe(0x344)][_0x369cfe(0x4d9)](this,_0xa70f79,_0x52d0e2,_0x4f697a);},VisuMZ[_0x2552df(0x338)][_0x2552df(0x572)]=Game_Player[_0x2552df(0x4c3)][_0x2552df(0x546)],Game_Player[_0x2552df(0x4c3)][_0x2552df(0x546)]=function(_0x236493){const _0xcbd969=_0x2552df;VisuMZ['EventsMoveCore'][_0xcbd969(0x572)][_0xcbd969(0x4d9)](this,_0x236493);if(this[_0xcbd969(0x33b)]()){this[_0xcbd969(0x37f)](_0x236493);if(_0x236493['includes'](0x0)&&this['startMapCommonEventOnOKTarget']()==='standing')_0xcbd969(0x477)==='VhUlf'?this[_0xcbd969(0x4f2)](this['x'],this['y']):(_0x472b25=_0x9144d(_0x3cdbaa['$1'])[_0xcbd969(0x244)]()[_0xcbd969(0x1c7)](),this[_0xcbd969(0x3b2)]['type']=_0x521045,this['_activationProximity'][_0xcbd969(0x290)]=_0x5464b3(_0x1da14a['$2']));else(_0x236493[_0xcbd969(0x508)](0x1)||_0x236493[_0xcbd969(0x508)](0x2))&&(_0xcbd969(0x182)==='bvDrA'?this[_0xcbd969(0x1a1)]():(_0x8cd11e[_0xcbd969(0x4c3)][_0xcbd969(0x2f3)][_0xcbd969(0x4d9)](this),this[_0xcbd969(0x2a0)]['fontSize']=this[_0xcbd969(0x4f6)]()));}},VisuMZ[_0x2552df(0x338)][_0x2552df(0x1a2)]=Game_Player[_0x2552df(0x4c3)]['checkEventTriggerThere'],Game_Player['prototype']['checkEventTriggerThere']=function(_0x401813){const _0x48c886=_0x2552df;VisuMZ[_0x48c886(0x338)][_0x48c886(0x1a2)][_0x48c886(0x4d9)](this,_0x401813);if(this['canStartLocalEvents']()&&_0x401813[_0x48c886(0x508)](0x0)&&this[_0x48c886(0x347)]()===_0x48c886(0x1e6)){if(_0x48c886(0x293)!==_0x48c886(0x293))this[_0x48c886(0x2c7)]['offsetX']=_0x1440c9(_0x54ffb7['$1']),this['_labelWindow'][_0x48c886(0x34a)]=_0x40e6a3(_0x5ef184['$2']);else{const _0x223d9f=this['direction'](),_0x44887c=$gameMap['roundXWithDirection'](this['x'],_0x223d9f),_0x282f6b=$gameMap['roundYWithDirection'](this['y'],_0x223d9f);this[_0x48c886(0x4f2)](_0x44887c,_0x282f6b);}}},Game_Player[_0x2552df(0x4c3)][_0x2552df(0x37f)]=function(_0x39f43a){const _0x15ba4d=_0x2552df;if($gameMap[_0x15ba4d(0x2ba)]())return;if($gameMap[_0x15ba4d(0x3c4)]())return;const _0x1f4964=$gameMap[_0x15ba4d(0x5b7)]();for(const _0x2154ce of _0x1f4964){if(!_0x2154ce)continue;if(!_0x2154ce[_0x15ba4d(0x4bd)](_0x39f43a))continue;if(this[_0x15ba4d(0x4a8)](_0x2154ce))return _0x2154ce[_0x15ba4d(0x4f5)]();if(this[_0x15ba4d(0x368)](_0x2154ce))return _0x2154ce['start']();}},Game_Player[_0x2552df(0x4c3)][_0x2552df(0x4a8)]=function(_0x437a1c){const _0x4d7f9f=_0x2552df;if($gameMap[_0x4d7f9f(0x2ba)]())return![];if($gameMap[_0x4d7f9f(0x3c4)]())return![];return _0x437a1c[_0x4d7f9f(0x14c)]()['includes'](this['regionId']());},Game_Player[_0x2552df(0x4c3)][_0x2552df(0x368)]=function(_0x258dd1){const _0x1d7cd5=_0x2552df;if($gameMap[_0x1d7cd5(0x2ba)]())return![];if($gameMap[_0x1d7cd5(0x3c4)]())return![];if(['none',_0x1d7cd5(0x42b)][_0x1d7cd5(0x508)](_0x258dd1['activationProximityType']()))return![];const _0x41a3fb=_0x258dd1[_0x1d7cd5(0x497)](),_0x27d397=_0x258dd1[_0x1d7cd5(0x560)]();switch(_0x41a3fb){case'radius':const _0x22e2fc=$gameMap['distance'](this['x'],this['y'],_0x258dd1['x'],_0x258dd1['y']);return _0x258dd1['activationProximityDistance']()>=_0x22e2fc;break;case _0x1d7cd5(0x1ca):return _0x27d397>=Math[_0x1d7cd5(0x41e)](_0x258dd1[_0x1d7cd5(0x5c2)](this['x']))&&_0x27d397>=Math[_0x1d7cd5(0x41e)](_0x258dd1[_0x1d7cd5(0x592)](this['y']));break;case _0x1d7cd5(0x274):return _0x27d397>=Math[_0x1d7cd5(0x41e)](_0x258dd1[_0x1d7cd5(0x592)](this['y']));break;case _0x1d7cd5(0x5e6):return _0x27d397>=Math[_0x1d7cd5(0x41e)](_0x258dd1[_0x1d7cd5(0x5c2)](this['x']));break;case _0x1d7cd5(0x359):return![];break;}},Game_Player[_0x2552df(0x4c3)][_0x2552df(0x4f2)]=function(_0x188f42,_0x32d2e6){const _0x229915=_0x2552df;if($gameMap[_0x229915(0x2ba)]())return;if($gameMap['isAnyEventStarting']())return;let _0x5dfad2=VisuMZ[_0x229915(0x338)][_0x229915(0x30c)][_0x229915(0x5c4)],_0x4b1cca=$gameMap[_0x229915(0x1d9)](_0x188f42,_0x32d2e6);const _0xdc3d1b=_0x229915(0x3c0)[_0x229915(0x265)](_0x4b1cca);if(_0x5dfad2[_0xdc3d1b]){if('ckKoX'===_0x229915(0x2c4))$gameTemp[_0x229915(0x20e)](_0x5dfad2[_0xdc3d1b]);else{if(this[_0x229915(0x3d4)]===_0x9abcb0)this[_0x229915(0x1cf)]();if(!_0x493b22)return null;_0x31db34===_0x21aeb1?delete this['_EventIcons']['Player']:this[_0x229915(0x1db)](_0x2e7bd9[_0x229915(0x3f5)],_0x4ff4aa[_0x229915(0x155)]);}}},Game_Player[_0x2552df(0x4c3)]['startMapCommonEventOnOKTarget']=function(){const _0x413066=_0x2552df;return VisuMZ[_0x413066(0x338)][_0x413066(0x30c)][_0x413066(0x3f0)];},Game_Player[_0x2552df(0x4c3)]['startMapCommonEventOnTouch']=function(){const _0x57718f=_0x2552df;if($gameMap[_0x57718f(0x2ba)]())return;if($gameMap[_0x57718f(0x3c4)]())return;let _0x416d16=VisuMZ[_0x57718f(0x338)][_0x57718f(0x30c)][_0x57718f(0x2bd)];const _0x99d4d0=_0x57718f(0x3c0)[_0x57718f(0x265)](this[_0x57718f(0x1d9)]());_0x416d16[_0x99d4d0]&&$gameTemp['reserveCommonEvent'](_0x416d16[_0x99d4d0]);},VisuMZ[_0x2552df(0x338)][_0x2552df(0x1f3)]=Game_Player[_0x2552df(0x4c3)][_0x2552df(0x319)],Game_Player[_0x2552df(0x4c3)][_0x2552df(0x319)]=function(){const _0x1bfa12=_0x2552df;VisuMZ['EventsMoveCore'][_0x1bfa12(0x1f3)][_0x1bfa12(0x4d9)](this),VisuMZ[_0x1bfa12(0x3e7)](0x0);},VisuMZ[_0x2552df(0x338)][_0x2552df(0x5e7)]=Game_Follower['prototype']['initialize'],Game_Follower['prototype'][_0x2552df(0x52e)]=function(_0x5748fe){const _0x442a3d=_0x2552df;VisuMZ[_0x442a3d(0x338)][_0x442a3d(0x5e7)]['call'](this,_0x5748fe),this[_0x442a3d(0x4e5)]=![];},Game_Follower[_0x2552df(0x4c3)][_0x2552df(0x2e8)]=function(){const _0x289269=_0x2552df;return $gamePlayer[_0x289269(0x2e8)]();},Game_Follower[_0x2552df(0x4c3)][_0x2552df(0x3c5)]=function(){const _0xcfd289=_0x2552df;return $gamePlayer[_0xcfd289(0x3c5)]();},Game_Follower[_0x2552df(0x4c3)][_0x2552df(0x520)]=function(){const _0x235d09=_0x2552df;return $gamePlayer[_0x235d09(0x520)]();},Game_Follower[_0x2552df(0x4c3)][_0x2552df(0x36b)]=function(_0x401f0b){const _0x463e19=_0x2552df;this[_0x463e19(0x4e5)]=_0x401f0b;},VisuMZ[_0x2552df(0x338)][_0x2552df(0x3cc)]=Game_Follower['prototype'][_0x2552df(0x574)],Game_Follower['prototype']['chaseCharacter']=function(_0x2cabed){const _0x546436=_0x2552df;if(this[_0x546436(0x4e5)])return;if($gameSystem[_0x546436(0x14f)]())return;VisuMZ[_0x546436(0x338)][_0x546436(0x3cc)][_0x546436(0x4d9)](this,_0x2cabed);},VisuMZ[_0x2552df(0x338)]['Game_Vehicle_isMapPassable']=Game_Vehicle[_0x2552df(0x4c3)][_0x2552df(0x26f)],Game_Vehicle[_0x2552df(0x4c3)][_0x2552df(0x26f)]=function(_0x409ddc,_0xa25880,_0x46beca){const _0x560902=_0x2552df;if($gameMap[_0x560902(0x2e7)](_0x409ddc,_0xa25880,_0x46beca,this[_0x560902(0x2de)]))return!![];if($gameMap[_0x560902(0x558)](_0x409ddc,_0xa25880,_0x46beca,this[_0x560902(0x2de)]))return![];return VisuMZ[_0x560902(0x338)]['Game_Vehicle_isMapPassable'][_0x560902(0x4d9)](this,_0x409ddc,_0xa25880,_0x46beca);},Game_Vehicle[_0x2552df(0x4c3)]['isAirshipPassable']=function(_0x43b4a7,_0x3428c6,_0x4b70c0){const _0x4b83d3=_0x2552df;if($gameMap[_0x4b83d3(0x2e7)](_0x43b4a7,_0x3428c6,_0x4b70c0,this[_0x4b83d3(0x2de)]))return!![];if($gameMap[_0x4b83d3(0x558)](_0x43b4a7,_0x3428c6,_0x4b70c0,this[_0x4b83d3(0x2de)]))return![];return VisuMZ['EventsMoveCore'][_0x4b83d3(0x3f1)][_0x4b83d3(0x4d9)]($gamePlayer,_0x43b4a7,_0x3428c6,_0x4b70c0);},VisuMZ['EventsMoveCore']['Game_Vehicle_isLandOk']=Game_Vehicle[_0x2552df(0x4c3)][_0x2552df(0x54d)],Game_Vehicle[_0x2552df(0x4c3)]['isLandOk']=function(_0x3251ba,_0x423250,_0x240e6a){const _0x1231f0=_0x2552df;if($gameMap[_0x1231f0(0x569)](_0x3251ba,_0x423250,_0x240e6a,this[_0x1231f0(0x2de)]))return!![];const _0x149f83=this[_0x1231f0(0x2de)]['charAt'](0x0)['toUpperCase']()+this[_0x1231f0(0x2de)][_0x1231f0(0x509)](0x1),_0x4ec6f0=_0x1231f0(0x2f1)[_0x1231f0(0x265)](_0x149f83);return VisuMZ[_0x1231f0(0x338)]['Settings']['Region'][_0x4ec6f0]?![]:VisuMZ[_0x1231f0(0x338)][_0x1231f0(0x492)][_0x1231f0(0x4d9)](this,_0x3251ba,_0x423250,_0x240e6a);},VisuMZ['EventsMoveCore']['Game_Vehicle_initMoveSpeed']=Game_Vehicle[_0x2552df(0x4c3)]['initMoveSpeed'],Game_Vehicle[_0x2552df(0x4c3)][_0x2552df(0x29a)]=function(){const _0x10993e=_0x2552df;VisuMZ[_0x10993e(0x338)][_0x10993e(0x393)][_0x10993e(0x4d9)](this);const _0x55abb7=VisuMZ[_0x10993e(0x338)][_0x10993e(0x30c)]['Movement'];if(this[_0x10993e(0x366)]()){if(_0x10993e(0x4a3)!==_0x10993e(0x4a3)){const _0x32d2ce=[_0x3c0254[_0x10993e(0x3f5)],_0x43645c[_0x10993e(0x155)],_0x10993e(0x46d)[_0x10993e(0x265)](_0x2f1cf1)];return _0x386da0['value'](_0x32d2ce);}else{if(_0x55abb7['BoatSpeed'])this[_0x10993e(0x38c)](_0x55abb7[_0x10993e(0x570)]);}}else{if(this[_0x10993e(0x46a)]()){if(_0x10993e(0x2d9)===_0x10993e(0x2d9)){if(_0x55abb7['ShipSpeed'])this[_0x10993e(0x38c)](_0x55abb7[_0x10993e(0x14a)]);}else _0x36d2aa['CPC'][_0x10993e(0x39c)](_0x5be974);}else{if(this[_0x10993e(0x34c)]()){if(_0x10993e(0x4d8)!==_0x10993e(0x4d8)){const _0x31ea5=_0x425b6d['GetMoveSynchTarget'](this['moveSynchTarget']());if(_0x31ea5)return _0x31ea5[_0x10993e(0x520)]();}else{if(_0x55abb7['AirshipSpeed'])this[_0x10993e(0x38c)](_0x55abb7['AirshipSpeed']);}}}}},VisuMZ[_0x2552df(0x338)][_0x2552df(0x4e6)]=Game_Event[_0x2552df(0x4c3)][_0x2552df(0x52e)],Game_Event[_0x2552df(0x4c3)]['initialize']=function(_0x3a8269,_0xf9cfcd){const _0x2ce5d5=_0x2552df;VisuMZ[_0x2ce5d5(0x338)]['Game_Event_initialize']['call'](this,_0x3a8269,_0xf9cfcd),this['setupCopyEvent'](),this['setupMorphEvent'](),this[_0x2ce5d5(0x16a)]();},VisuMZ[_0x2552df(0x338)][_0x2552df(0x4d5)]=Game_Event[_0x2552df(0x4c3)]['event'],Game_Event[_0x2552df(0x4c3)][_0x2552df(0x218)]=function(){const _0x360744=_0x2552df;if(this['_eventMorphData']!==undefined){const _0x443829=this[_0x360744(0x29e)]['mapId'],_0x262011=this[_0x360744(0x29e)][_0x360744(0x350)];return VisuMZ['PreloadedMaps'][_0x443829][_0x360744(0x5b7)][_0x262011];}if(this[_0x360744(0x239)]!==undefined){if(_0x360744(0x5dd)!==_0x360744(0x38f)){const _0x1245f1=this[_0x360744(0x239)]['mapId'],_0x1b66c9=this['_eventCopyData'][_0x360744(0x350)];return VisuMZ[_0x360744(0x18a)][_0x1245f1][_0x360744(0x5b7)][_0x1b66c9];}else return!!this[_0x360744(0x1d8)](_0x3119d3);}if(this['_eventSpawnData']!==undefined){const _0x2d30b6=this[_0x360744(0x30d)]['mapId'],_0x184db3=this[_0x360744(0x30d)][_0x360744(0x350)];return VisuMZ[_0x360744(0x18a)][_0x2d30b6]['events'][_0x184db3];}if($gameTemp[_0x360744(0x400)]!==undefined){const _0x352497=$gameTemp[_0x360744(0x400)]['mapId'],_0x665a2c=$gameTemp[_0x360744(0x400)][_0x360744(0x350)];return VisuMZ[_0x360744(0x18a)][_0x352497]['events'][_0x665a2c];}return VisuMZ[_0x360744(0x338)][_0x360744(0x4d5)][_0x360744(0x4d9)](this);},Game_Event['prototype'][_0x2552df(0x208)]=function(_0x31cfcc,_0x14709a){const _0x52034a=_0x2552df;if(_0x31cfcc===0x0||_0x14709a===0x0)return![];if(!VisuMZ[_0x52034a(0x18a)][_0x31cfcc])return $gameTemp[_0x52034a(0x448)]()&&console[_0x52034a(0x330)](_0x52034a(0x428)[_0x52034a(0x265)](_0x31cfcc)),![];return!![];},VisuMZ[_0x2552df(0x338)][_0x2552df(0x21b)]=Game_Event['prototype'][_0x2552df(0x4f5)],Game_Event[_0x2552df(0x4c3)][_0x2552df(0x4f5)]=function(){const _0xfcff40=_0x2552df;VisuMZ[_0xfcff40(0x338)][_0xfcff40(0x21b)][_0xfcff40(0x4d9)](this),Imported['VisuMZ_1_MessageCore']&&Input[_0xfcff40(0x27b)](VisuMZ[_0xfcff40(0x1f1)]['Settings']['General']['FastForwardKey'])&&Input[_0xfcff40(0x2a7)]();},Game_Event[_0x2552df(0x4c3)][_0x2552df(0x3f4)]=function(){const _0x1f558b=_0x2552df,_0x5e8a32=this[_0x1f558b(0x218)]()[_0x1f558b(0x166)];if(_0x5e8a32==='')return;if(DataManager[_0x1f558b(0x2e2)]()||DataManager['isEventTest']())return;const _0x5de3cf=VisuMZ[_0x1f558b(0x338)]['Settings'][_0x1f558b(0x358)];let _0x5b466c=null,_0x33dfee=0x0,_0x1d9700=0x0;if(_0x5e8a32[_0x1f558b(0x47f)](/<COPY EVENT:[ ]MAP[ ](\d+),[ ]EVENT[ ](\d+)>/i))_0x33dfee=Number(RegExp['$1']),_0x1d9700=Number(RegExp['$2']);else{if(_0x5e8a32[_0x1f558b(0x47f)](/<COPY EVENT:[ ](\d+),[ ](\d+)>/i))_0x1f558b(0x2d5)===_0x1f558b(0x31f)?_0x558f6c[_0x1f558b(0x338)][_0x1f558b(0x1e4)][_0x1f558b(0x4d9)](this,_0x28f7e3,_0x28d090):(_0x33dfee=Number(RegExp['$1']),_0x1d9700=Number(RegExp['$2']));else{if(_0x5e8a32[_0x1f558b(0x47f)](/<COPY EVENT:[ ](.*?)>/i)){const _0x2898d3=String(RegExp['$1'])[_0x1f558b(0x519)]()[_0x1f558b(0x1c7)]();_0x5b466c=VisuMZ[_0x1f558b(0x5ba)][_0x2898d3];if(!_0x5b466c)return;_0x33dfee=_0x5b466c['MapID'],_0x1d9700=_0x5b466c[_0x1f558b(0x196)];}}}if(!this['checkValidEventerMap'](_0x33dfee,_0x1d9700))return;_0x5de3cf[_0x1f558b(0x1b8)][_0x1f558b(0x4d9)](this,_0x33dfee,_0x1d9700,this);if(_0x5b466c)_0x5b466c['PreCopyJS'][_0x1f558b(0x4d9)](this,_0x33dfee,_0x1d9700,this);this[_0x1f558b(0x239)]={'mapId':_0x33dfee,'eventId':_0x1d9700},this[_0x1f558b(0x57b)]=-0x2,this[_0x1f558b(0x32e)](),_0x5de3cf['PostCopyJS'][_0x1f558b(0x4d9)](this,_0x33dfee,_0x1d9700,this);if(_0x5b466c)_0x5b466c['PostCopyJS'][_0x1f558b(0x4d9)](this,_0x33dfee,_0x1d9700,this);$gameMap[_0x1f558b(0x289)]();},Game_Event[_0x2552df(0x4c3)][_0x2552df(0x47d)]=function(){const _0x1c632b=_0x2552df,_0x7cd706=$gameSystem[_0x1c632b(0x35f)](this);if(!_0x7cd706)return;const _0x3296e7=_0x7cd706[_0x1c632b(0x513)]['toUpperCase']()[_0x1c632b(0x1c7)]();_0x3296e7!=='UNTITLED'?this[_0x1c632b(0x591)](_0x3296e7,!![]):'VUuIy'===_0x1c632b(0x450)?_0x28a7f2[_0x1c632b(0x330)](_0x1c632b(0x428)[_0x1c632b(0x265)](_0x4d0f7d)):this[_0x1c632b(0x2a1)](_0x7cd706[_0x1c632b(0x399)],_0x7cd706[_0x1c632b(0x350)],!![]);},Game_Event['prototype'][_0x2552df(0x2a1)]=function(_0x46c3b3,_0x13cb34,_0x281836){const _0x45c732=_0x2552df;if(!this[_0x45c732(0x208)](_0x46c3b3,_0x13cb34))return;const _0x16b807=VisuMZ[_0x45c732(0x338)]['Settings']['Template'];if(!_0x281836)_0x16b807[_0x45c732(0x180)][_0x45c732(0x4d9)](this,_0x46c3b3,_0x13cb34,this);this[_0x45c732(0x29e)]={'mapId':_0x46c3b3,'eventId':_0x13cb34},this[_0x45c732(0x57b)]=-0x2,this[_0x45c732(0x32e)]();if(!_0x281836)_0x16b807['PostMorphJS'][_0x45c732(0x4d9)](this,_0x46c3b3,_0x13cb34,this);$gameMap[_0x45c732(0x289)]();},Game_Event['prototype']['morphIntoTemplate']=function(_0x39af1d,_0x15e178){const _0x1a40f3=_0x2552df;_0x39af1d=_0x39af1d['toUpperCase']()['trim']();const _0x36127c=VisuMZ[_0x1a40f3(0x5ba)][_0x39af1d];if(!_0x36127c)return;const _0x11acbc=_0x36127c[_0x1a40f3(0x2d1)],_0x3629e7=_0x36127c['EventID'];if(!this['checkValidEventerMap'](_0x11acbc,_0x3629e7))return;if(!_0x15e178)_0x36127c[_0x1a40f3(0x180)]['call'](this,_0x11acbc,_0x3629e7,this);this['morphInto'](_0x11acbc,_0x3629e7,_0x15e178);if(!_0x15e178)_0x36127c['PostMorphJS'][_0x1a40f3(0x4d9)](this,_0x11acbc,_0x3629e7,this);if($gameMap)$gameMap['clearEventCache']();},Game_Event['prototype']['removeMorph']=function(){const _0x29b813=_0x2552df;this['_eventMorphData']=undefined,this[_0x29b813(0x57b)]=-0x2,this[_0x29b813(0x32e)]();},Game_Event[_0x2552df(0x4c3)]['setupSpawn']=function(_0x2867d6){const _0x25f140=_0x2552df,_0x5b6bc6=VisuMZ[_0x25f140(0x338)][_0x25f140(0x30c)][_0x25f140(0x358)],_0x3f57df=_0x2867d6[_0x25f140(0x513)]['toUpperCase']()[_0x25f140(0x1c7)](),_0x31b391=!['',_0x25f140(0x15d)][_0x25f140(0x508)](_0x3f57df);let _0x590c44=0x0,_0x4c7088=0x0;if(_0x31b391){const _0x3e7ca3=VisuMZ['EventTemplates'][_0x3f57df];if(!_0x3e7ca3)return;_0x590c44=_0x3e7ca3[_0x25f140(0x2d1)],_0x4c7088=_0x3e7ca3['EventID'];}else _0x590c44=_0x2867d6[_0x25f140(0x399)],_0x4c7088=_0x2867d6[_0x25f140(0x350)];if(!this[_0x25f140(0x208)](_0x590c44,_0x4c7088))return;if(_0x31b391){const _0x479898=VisuMZ[_0x25f140(0x5ba)][_0x3f57df];_0x479898[_0x25f140(0x420)]['call'](this,_0x590c44,_0x4c7088,this);}_0x5b6bc6[_0x25f140(0x420)][_0x25f140(0x4d9)](this,_0x590c44,_0x4c7088,this),this[_0x25f140(0x30d)]=_0x2867d6,this['_pageIndex']=-0x2,this[_0x25f140(0x3f5)]=$gameMap[_0x25f140(0x399)](),this[_0x25f140(0x155)]=_0x2867d6[_0x25f140(0x183)],this[_0x25f140(0x13b)]=_0x2867d6[_0x25f140(0x424)],this[_0x25f140(0x2d4)](_0x2867d6['x'],_0x2867d6['y']),this[_0x25f140(0x580)](_0x2867d6['direction']),this[_0x25f140(0x32e)]();if(_0x31b391){const _0x57641a=VisuMZ[_0x25f140(0x5ba)][_0x3f57df];if(!_0x57641a)return;_0x57641a[_0x25f140(0x5dc)][_0x25f140(0x4d9)](this,_0x590c44,_0x4c7088,this);}_0x5b6bc6[_0x25f140(0x5dc)][_0x25f140(0x4d9)](this,_0x590c44,_0x4c7088,this);const _0x41cd07=SceneManager[_0x25f140(0x3d0)];if(_0x41cd07&&_0x41cd07['_spriteset'])_0x41cd07[_0x25f140(0x157)][_0x25f140(0x321)](this);},Game_Event[_0x2552df(0x4c3)]['isSpawnedEvent']=function(){const _0x24b143=_0x2552df;return!!this[_0x24b143(0x30d)];},VisuMZ[_0x2552df(0x338)]['Game_Event_refresh']=Game_Event[_0x2552df(0x4c3)][_0x2552df(0x32e)],Game_Event[_0x2552df(0x4c3)]['refresh']=function(){const _0x5ddeb7=_0x2552df,_0xcf7421=this[_0x5ddeb7(0x57b)];VisuMZ['EventsMoveCore'][_0x5ddeb7(0x3e4)][_0x5ddeb7(0x4d9)](this),_0xcf7421!==this[_0x5ddeb7(0x57b)]&&this[_0x5ddeb7(0x442)]();},VisuMZ[_0x2552df(0x338)][_0x2552df(0x16b)]=Game_Event[_0x2552df(0x4c3)][_0x2552df(0x2fc)],Game_Event[_0x2552df(0x4c3)][_0x2552df(0x2fc)]=function(){const _0x2365ea=_0x2552df;VisuMZ['EventsMoveCore'][_0x2365ea(0x16b)][_0x2365ea(0x4d9)](this),this[_0x2365ea(0x44d)]();},VisuMZ[_0x2552df(0x338)][_0x2552df(0x5cc)]=Game_Event[_0x2552df(0x4c3)][_0x2552df(0x395)],Game_Event[_0x2552df(0x4c3)][_0x2552df(0x395)]=function(){const _0x154a78=_0x2552df;this[_0x154a78(0x1ef)]=!![],VisuMZ['EventsMoveCore'][_0x154a78(0x5cc)][_0x154a78(0x4d9)](this),this[_0x154a78(0x442)](),this[_0x154a78(0x1ef)]=![];},Game_Event[_0x2552df(0x4c3)]['setupEventsMoveCoreEffects']=function(){const _0x19b368=_0x2552df;if(!this[_0x19b368(0x218)]())return;this[_0x19b368(0x44d)](),this['setupEventsMoveCoreNotetags'](),this['setupEventsMoveCoreCommentTags'](),this[_0x19b368(0x212)]();},Game_Event[_0x2552df(0x4c3)][_0x2552df(0x5f2)]=function(){const _0x1c20d6=_0x2552df,_0x328100=this[_0x1c20d6(0x218)]()[_0x1c20d6(0x166)];if(_0x328100==='')return;this[_0x1c20d6(0x1bc)](_0x328100);},Game_Event['prototype']['setupEventsMoveCoreCommentTags']=function(){const _0x251bdc=_0x2552df;if(!this[_0x251bdc(0x5ce)]())return;const _0x2fb78e=this[_0x251bdc(0x475)]();let _0x3e5c48='';for(const _0x452769 of _0x2fb78e){if('eXjSV'===_0x251bdc(0x225)){if([0x6c,0x198][_0x251bdc(0x508)](_0x452769[_0x251bdc(0x24a)])){if(_0x3e5c48!=='')_0x3e5c48+='\x0a';_0x3e5c48+=_0x452769[_0x251bdc(0x322)][0x0];}}else{const _0x42eda6=_0x5b5ade[_0x251bdc(0x229)](this);_0x42eda6&&_0x42eda6[_0x251bdc(0x3b9)]&&_0x42eda6['_shadowSprite'][_0x251bdc(0x59a)]!==this[_0x251bdc(0x599)]()&&(_0x42eda6[_0x251bdc(0x3b9)][_0x251bdc(0x59a)]=this[_0x251bdc(0x599)](),_0x42eda6['_shadowSprite'][_0x251bdc(0x342)]=_0x508d74[_0x251bdc(0x3bd)](_0x42eda6[_0x251bdc(0x3b9)]['_filename']));}}this[_0x251bdc(0x1bc)](_0x3e5c48);},Game_Event['prototype'][_0x2552df(0x44d)]=function(){const _0x58f1c5=_0x2552df,_0x30cd44=VisuMZ[_0x58f1c5(0x338)][_0x58f1c5(0x30c)];this['_activationProximity']={'type':'none','distance':0x0,'regionList':[]},this[_0x58f1c5(0x47c)]=![],this[_0x58f1c5(0x241)]=![],this[_0x58f1c5(0x463)]={'up':0x0,'down':0x0,'left':0x0,'right':0x0},this[_0x58f1c5(0x55f)]=$gameSystem[_0x58f1c5(0x55a)](this),this['_labelWindow']={'text':'','visibleRange':_0x30cd44[_0x58f1c5(0x2a3)][_0x58f1c5(0x418)],'offsetX':_0x30cd44[_0x58f1c5(0x2a3)][_0x58f1c5(0x503)],'offsetY':_0x30cd44[_0x58f1c5(0x2a3)][_0x58f1c5(0x370)]},this['_moveOnlyRegions']=[],this['_moveSynch']={'target':-0x1,'type':_0x58f1c5(0x15a),'delay':0x1},this[_0x58f1c5(0x25a)]=_0x30cd44['Movement'][_0x58f1c5(0x34f)]??0x0,this[_0x58f1c5(0x340)]=![],this[_0x58f1c5(0x1ae)]={'visible':!![],'filename':_0x30cd44['Movement']['DefaultShadow']},this['clearSpriteOffsets'](),this[_0x58f1c5(0x284)]();},Game_Event[_0x2552df(0x4c3)][_0x2552df(0x1bc)]=function(_0x106b62){const _0x10cc47=_0x2552df;if(_0x106b62[_0x10cc47(0x47f)](/<ACTIVATION[ ](?:REGION|REGIONS):[ ]*(\d+(?:\s*,\s*\d+)*)>/i))this[_0x10cc47(0x3b2)]['regionList']=JSON[_0x10cc47(0x4b1)]('['+RegExp['$1']['match'](/\d+/g)+']'),this[_0x10cc47(0x3b2)]['type']='region';else{if(_0x106b62['match'](/<ACTIVATION[ ](.*?):[ ](\d+)>/i)){if(_0x10cc47(0x2a8)===_0x10cc47(0x2a8))type=String(RegExp['$1'])[_0x10cc47(0x244)]()['trim'](),this[_0x10cc47(0x3b2)][_0x10cc47(0x49f)]=type,this[_0x10cc47(0x3b2)]['distance']=Number(RegExp['$2']);else{const _0x4405c9=_0xd5cc29[_0x10cc47(0x43c)](this[_0x10cc47(0x4da)]/0x3c/0x3c),_0x1f0ee4=_0x18fcd8[_0x10cc47(0x43c)](this['_seconds']/0x3c)%0x3c,_0xa779cb=this[_0x10cc47(0x4da)]%0x3c;let _0x2ffe70=_0x1f0ee4[_0x10cc47(0x500)](0x2)+':'+_0xa779cb[_0x10cc47(0x500)](0x2);if(_0x4405c9>0x0)_0x2ffe70=_0x10cc47(0x181)[_0x10cc47(0x265)](_0x4405c9,_0x2ffe70);return _0x2ffe70;}}}if(_0x106b62[_0x10cc47(0x47f)](/<ALWAYS UPDATE MOVEMENT>/i)){if('cOPru'===_0x10cc47(0x348))return _0x1e8903>0x0?0x4:0x6;else this[_0x10cc47(0x47c)]=!![];}if(_0x106b62['match'](/<CLICK TRIGGER>/i)){if(_0x10cc47(0x3ba)==='ZOqyj')this['_clickTrigger']=!![];else{const _0x3bf720=_0x3adefd[_0x31ad7f['randomInt'](_0x3197c3[_0x10cc47(0x506)])];this[_0x10cc47(0x484)](_0x3bf720);}}const _0x1d14ed=_0x106b62['match'](/<HITBOX[ ](.*?):[ ](\d+)>/gi);if(_0x1d14ed)for(const _0x4320c2 of _0x1d14ed){if(_0x4320c2[_0x10cc47(0x47f)](/<HITBOX[ ](.*?):[ ](\d+)>/i)){const _0x1827d3=String(RegExp['$1'])[_0x10cc47(0x244)]()[_0x10cc47(0x1c7)](),_0x197313=Number(RegExp['$2']);this['_addedHitbox'][_0x1827d3]=_0x197313;}}_0x106b62['match'](/<ICON:[ ](\d+)>/i)&&(this[_0x10cc47(0x55f)][_0x10cc47(0x56d)]=Number(RegExp['$1']));_0x106b62[_0x10cc47(0x47f)](/<ICON (?:BUFFER|OFFSET) X:[ ]([\+\-]\d+)>/i)&&('mLNDj'===_0x10cc47(0x375)?this[_0x10cc47(0x55f)][_0x10cc47(0x380)]=Number(RegExp['$1']):_0x1bae4d['EventsMoveCore']['Game_Variables_setValue']['call'](this,_0x338a04,_0x19536c));if(_0x106b62[_0x10cc47(0x47f)](/<ICON (?:BUFFER|OFFSET) Y:[ ]([\+\-]\d+)>/i)){if('QgKRQ'!==_0x10cc47(0x48d)){if(this[_0x10cc47(0x34e)](_0x307e3b,_0x18f861)[_0x10cc47(0x506)]>0x0)return!![];if(_0x5bc814['x']===_0xfaeadc&&_0x243310['y']===_0x42acec)return!![];if(this[_0x10cc47(0x402)]()[_0x10cc47(0x3e9)](_0x4fa6fa,_0xf1a9c6))return!![];if(this['ship']()[_0x10cc47(0x3e9)](_0x37cf50,_0x56764e))return!![];return![];}else this[_0x10cc47(0x55f)][_0x10cc47(0x45e)]=Number(RegExp['$1']);}if(_0x106b62[_0x10cc47(0x47f)](/<ICON (?:BUFFER|OFFSET):[ ]([\+\-]\d+),[ ]([\+\-]\d+)>/i)){if(_0x10cc47(0x1cc)===_0x10cc47(0x308))return this[_0x10cc47(0x434)]();else this['_eventIcon'][_0x10cc47(0x380)]=Number(RegExp['$1']),this['_eventIcon']['bufferY']=Number(RegExp['$2']);}if(_0x106b62[_0x10cc47(0x47f)](/<ICON BLEND MODE:[ ](.*?)>/i)){if(_0x10cc47(0x443)===_0x10cc47(0x4d3))return!![];else{const _0x258e3b=String(RegExp['$1'])[_0x10cc47(0x519)]()[_0x10cc47(0x1c7)](),_0x3f2e1a=['NORMAL','ADDITIVE',_0x10cc47(0x559),_0x10cc47(0x3fa)];this['_eventIcon'][_0x10cc47(0x32a)]=_0x3f2e1a['indexOf'](_0x258e3b)[_0x10cc47(0x468)](0x0,0x3);}}if(_0x106b62[_0x10cc47(0x47f)](/<LABEL:[ ](.*?)>/i)){if(_0x10cc47(0x426)===_0x10cc47(0x1e5)){if(_0x4f599b[_0x10cc47(0x5b4)])this[_0x10cc47(0x38c)](_0x21e871[_0x10cc47(0x5b4)]);}else this[_0x10cc47(0x2c7)]['text']=String(RegExp['$1'])['trim']();}_0x106b62['match'](/<LABEL>\s*([\s\S]*)\s*<\/LABEL>/i)&&(this[_0x10cc47(0x2c7)][_0x10cc47(0x585)]=String(RegExp['$1'])['trim']());_0x106b62[_0x10cc47(0x47f)](/<LABEL (?:BUFFER|OFFSET) X:[ ]([\+\-]\d+)>/i)&&(this[_0x10cc47(0x2c7)][_0x10cc47(0x42a)]=Number(RegExp['$1']));_0x106b62[_0x10cc47(0x47f)](/<LABEL (?:BUFFER|OFFSET) Y:[ ]([\+\-]\d+)>/i)&&(this[_0x10cc47(0x2c7)][_0x10cc47(0x34a)]=Number(RegExp['$1']));_0x106b62[_0x10cc47(0x47f)](/<LABEL (?:BUFFER|OFFSET):[ ]([\+\-]\d+),[ ]([\+\-]\d+)>/i)&&(this[_0x10cc47(0x2c7)][_0x10cc47(0x42a)]=Number(RegExp['$1']),this['_labelWindow'][_0x10cc47(0x34a)]=Number(RegExp['$2']));$gameTemp[_0x10cc47(0x15b)](this);for(;;){if(this[_0x10cc47(0x2c7)][_0x10cc47(0x585)][_0x10cc47(0x47f)](/\\V\[(\d+)\]/gi))'tNgjA'!==_0x10cc47(0x299)?(_0x6681cc['x']=0x0,_0x2cd4de['y']=-this[_0x10cc47(0x4ff)]+this['height']*0x2/0x5,this[_0x10cc47(0x15e)][_0x10cc47(0x333)]()!==0x1&&(_0x2017a3['y']+=0x1)):this['_labelWindow'][_0x10cc47(0x585)]=this[_0x10cc47(0x2c7)][_0x10cc47(0x585)]['replace'](/\\V\[(\d+)\]/gi,(_0x17fd67,_0x23b666)=>$gameVariables['value'](parseInt(_0x23b666)));else{if(_0x10cc47(0x2a2)!==_0x10cc47(0x514))break;else{const _0x18856f=this[_0x10cc47(0x239)]['mapId'],_0x2c4396=this[_0x10cc47(0x239)]['eventId'];return _0x5be851['PreloadedMaps'][_0x18856f][_0x10cc47(0x5b7)][_0x2c4396];}}}$gameTemp[_0x10cc47(0x21c)]();if(_0x106b62[_0x10cc47(0x47f)](/<LABEL RANGE:[ ](\d+)>/i)){if(_0x10cc47(0x2d7)!==_0x10cc47(0x29d))this[_0x10cc47(0x2c7)][_0x10cc47(0x1a6)]=Number(RegExp['$1']);else{const _0x1fef84=this['event'](_0x390c8c);if(_0x1fef84)_0x1fef84['unlock']();}}if(_0x106b62[_0x10cc47(0x47f)](/<MOVE ONLY (?:REGION|REGIONS):[ ](\d+(?:\s*,\s*\d+)*)>/i)){if(_0x10cc47(0x493)!=='svJvk')return this['_PlayerDiagonalSetting'];else{const _0x4925a2=JSON[_0x10cc47(0x4b1)]('['+RegExp['$1'][_0x10cc47(0x47f)](/\d+/g)+']');this[_0x10cc47(0x57f)]=this[_0x10cc47(0x57f)][_0x10cc47(0x31b)](_0x4925a2),this[_0x10cc47(0x57f)][_0x10cc47(0x4cf)](0x0);}}if(_0x106b62['match'](/<MOVE SYNCH TARGET:[ ](.*?)>/i)){const _0x1c2fb8=String(RegExp['$1']);if(_0x1c2fb8[_0x10cc47(0x47f)](/PLAYER/i))this[_0x10cc47(0x42e)][_0x10cc47(0x405)]=0x0;else{if(_0x1c2fb8[_0x10cc47(0x47f)](/EVENT[ ](\d+)/i)){if('JHlsC'!==_0x10cc47(0x20d))this[_0x10cc47(0x42e)]['target']=Number(RegExp['$1']);else return!![];}}}_0x106b62[_0x10cc47(0x47f)](/<MOVE SYNCH TYPE:[ ](.*?)>/i)&&(this['_moveSynch']['type']=String(RegExp['$1'])[_0x10cc47(0x244)]()[_0x10cc47(0x1c7)]());_0x106b62['match'](/<MOVE SYNCH DELAY:[ ](\d+)>/i)&&(this[_0x10cc47(0x42e)][_0x10cc47(0x4a5)]=Number(RegExp['$1']));if(_0x106b62[_0x10cc47(0x47f)](/<TRUE RANDOM MOVE>/i))this[_0x10cc47(0x25a)]=0x0;else _0x106b62[_0x10cc47(0x47f)](/<RANDOM MOVE WEIGHT:[ ](.*?)>/i)&&(_0x10cc47(0x1ff)==='ELsbc'?this['_randomMoveWeight']=Number(RegExp['$1'])||0x0:this[_0x10cc47(0x5bd)]=_0x3f91cb(_0x12ccad['$1'])[_0x10cc47(0x519)]()[_0x10cc47(0x1c7)]());_0x106b62[_0x10cc47(0x47f)](/<SAVE EVENT (?:LOCATION|LOCATIONS)>/i)&&(this[_0x10cc47(0x340)]=!![]);_0x106b62[_0x10cc47(0x47f)](/<HIDE SHADOW>/i)&&(this[_0x10cc47(0x1ae)][_0x10cc47(0x25e)]=![]);if(_0x106b62['match'](/<SHADOW FILENAME:[ ](.*?)>/i)){if(_0x10cc47(0x406)!==_0x10cc47(0x406)){if(!_0x590b76)return;if(!this[_0x10cc47(0x54b)])return;if(this[_0x10cc47(0x248)])return;if(this[_0x10cc47(0x3bf)]<=0x0)return;if(this['_speed']===_0x348948)this[_0x10cc47(0x1cf)]();this[_0x10cc47(0x3bf)]+=this['_speed'],this['_frames']<=0x0&&this[_0x10cc47(0x435)]();}else this['_shadowGraphic'][_0x10cc47(0x398)]=String(RegExp['$1']);}_0x106b62[_0x10cc47(0x47f)](/<SPRITE OFFSET X:[ ]([\+\-]\d+)>/i)&&(this['_spriteOffsetX']=Number(RegExp['$1'])),_0x106b62['match'](/<SPRITE OFFSET Y:[ ]([\+\-]\d+)>/i)&&(_0x10cc47(0x56e)===_0x10cc47(0x56e)?this['_spriteOffsetY']=Number(RegExp['$1']):this['_eventIcon'][_0x10cc47(0x45e)]=_0x1e3405(_0x3a451a['$1'])),_0x106b62['match'](/<SPRITE OFFSET:[ ]([\+\-]\d+),[ ]([\+\-]\d+)>/i)&&(this[_0x10cc47(0x5c9)]=Number(RegExp['$1']),this[_0x10cc47(0x16c)]=Number(RegExp['$2'])),_0x106b62[_0x10cc47(0x47f)](/<STEP PATTERN:[ ](.*)>/i)&&(this[_0x10cc47(0x5bd)]=String(RegExp['$1'])[_0x10cc47(0x519)]()['trim']());},Game_Event['prototype'][_0x2552df(0x212)]=function(){this['updateShadowChanges']();},Game_Event[_0x2552df(0x4c3)][_0x2552df(0x4f0)]=function(){const _0x42e691=_0x2552df;if(this[_0x42e691(0x47c)])return!![];return Game_Character['prototype'][_0x42e691(0x4f0)]['call'](this);},VisuMZ[_0x2552df(0x338)][_0x2552df(0x331)]=Game_Event[_0x2552df(0x4c3)][_0x2552df(0x32b)],Game_Event[_0x2552df(0x4c3)][_0x2552df(0x32b)]=function(){const _0x106f90=_0x2552df;if(this[_0x106f90(0x2e5)]())return;VisuMZ['EventsMoveCore'][_0x106f90(0x331)][_0x106f90(0x4d9)](this),this['isMoving']()&&VisuMZ[_0x106f90(0x3e7)](this[_0x106f90(0x155)]);},Game_Event[_0x2552df(0x4c3)][_0x2552df(0x2e5)]=function(){const _0x1c57e2=_0x2552df,_0x138679=VisuMZ['EventsMoveCore'][_0x1c57e2(0x30c)][_0x1c57e2(0x210)];if($gameMap['isEventRunning']()&&_0x138679[_0x1c57e2(0x45f)])return!![];if($gameMessage[_0x1c57e2(0x39b)]()&&_0x138679[_0x1c57e2(0x4e7)])return!![];if(!$gameSystem[_0x1c57e2(0x593)]())return!![];if(this[_0x1c57e2(0x5e5)]()>=0x0)return!![];return![];},Game_Event[_0x2552df(0x4c3)][_0x2552df(0x54e)]=function(){const _0x109563=_0x2552df,_0x2ffcf8=SceneManager['_scene'][_0x109563(0x157)];if(_0x2ffcf8){const _0x284839=_0x2ffcf8[_0x109563(0x229)](this);_0x284839&&_0x284839['_shadowSprite']&&_0x284839[_0x109563(0x3b9)][_0x109563(0x59a)]!==this[_0x109563(0x599)]()&&(_0x284839[_0x109563(0x3b9)][_0x109563(0x59a)]=this['shadowFilename'](),_0x284839['_shadowSprite'][_0x109563(0x342)]=ImageManager['loadSystem'](_0x284839[_0x109563(0x3b9)][_0x109563(0x59a)]));}},Game_Event[_0x2552df(0x4c3)][_0x2552df(0x599)]=function(){const _0x54e3c9=_0x2552df;return this[_0x54e3c9(0x1ae)]['filename'];},Game_Event[_0x2552df(0x4c3)][_0x2552df(0x2ef)]=function(){const _0x46de8c=_0x2552df;if(!this[_0x46de8c(0x1ae)]['visible'])return![];return Game_CharacterBase[_0x46de8c(0x4c3)][_0x46de8c(0x2ef)]['call'](this);},Game_Event[_0x2552df(0x4c3)][_0x2552df(0x3fe)]=function(){const _0x926137=_0x2552df;return this[_0x926137(0x2c7)][_0x926137(0x585)];},Game_Event[_0x2552df(0x4c3)][_0x2552df(0x252)]=function(){const _0x342f09=_0x2552df;return this[_0x342f09(0x2c7)][_0x342f09(0x1a6)];},Game_Event['prototype'][_0x2552df(0x26f)]=function(_0x13fbb5,_0x49035a,_0x5b621e){const _0x48ffea=_0x2552df;if(this[_0x48ffea(0x161)]())return this['isMoveOnlyRegionPassable'](_0x13fbb5,_0x49035a,_0x5b621e);if($gameMap[_0x48ffea(0x2e7)](_0x13fbb5,_0x49035a,_0x5b621e,_0x48ffea(0x218)))return!![];if($gameMap['isRegionForbidPass'](_0x13fbb5,_0x49035a,_0x5b621e,_0x48ffea(0x218)))return![];return Game_Character[_0x48ffea(0x4c3)]['isMapPassable'][_0x48ffea(0x4d9)](this,_0x13fbb5,_0x49035a,_0x5b621e);},Game_Event[_0x2552df(0x4c3)]['hasMoveOnlyRegions']=function(){const _0x37cb35=_0x2552df;if(this[_0x37cb35(0x57f)]===undefined)this['initEventsMoveCoreEffects']();return this['_moveOnlyRegions'][_0x37cb35(0x506)]>0x0;},Game_Event[_0x2552df(0x4c3)][_0x2552df(0x19c)]=function(_0x26dd3e,_0x382c11,_0x283649){const _0x3bb831=_0x2552df,_0xe0bf6a=$gameMap['roundXWithDirection'](_0x26dd3e,_0x283649),_0x55f282=$gameMap[_0x3bb831(0x3bb)](_0x382c11,_0x283649),_0x51a1e6=$gameMap[_0x3bb831(0x1d9)](_0xe0bf6a,_0x55f282);return this['_moveOnlyRegions']['includes'](_0x51a1e6);},VisuMZ[_0x2552df(0x338)]['Game_Event_findProperPageIndex']=Game_Event[_0x2552df(0x4c3)][_0x2552df(0x4b6)],Game_Event[_0x2552df(0x4c3)][_0x2552df(0x4b6)]=function(){const _0x21b7d0=_0x2552df;return this[_0x21b7d0(0x2fe)]=![],this[_0x21b7d0(0x18c)]=![],this[_0x21b7d0(0x218)]()?VisuMZ[_0x21b7d0(0x338)][_0x21b7d0(0x534)]['call'](this):-0x1;},VisuMZ['EventsMoveCore']['Game_Event_meetsConditions']=Game_Event[_0x2552df(0x4c3)]['meetsConditions'],Game_Event[_0x2552df(0x4c3)][_0x2552df(0x23c)]=function(_0x445e20){const _0x1bb778=_0x2552df;this[_0x1bb778(0x3e2)](_0x445e20),$gameTemp[_0x1bb778(0x15b)](this);const _0x57ba82=VisuMZ['EventsMoveCore']['Game_Event_meetsConditions'][_0x1bb778(0x4d9)](this,_0x445e20);return $gameTemp[_0x1bb778(0x21c)](),_0x57ba82;},Game_Event[_0x2552df(0x4c3)][_0x2552df(0x571)]=function(){return this['_advancedSwitchVariable'];},Game_Event[_0x2552df(0x4c3)][_0x2552df(0x3e2)]=function(_0x172308){const _0x40f59e=_0x2552df,_0x2f63f1=_0x172308['conditions'];if(_0x2f63f1[_0x40f59e(0x257)]&&DataManager[_0x40f59e(0x528)](_0x2f63f1[_0x40f59e(0x2eb)])){if(_0x40f59e(0x26a)!==_0x40f59e(0x2e0))this[_0x40f59e(0x2fe)]=!![];else{if(!_0x35ede5[_0x40f59e(0x364)]())return![];if(this[_0x40f59e(0x42c)]?.[_0x40f59e(0x5a5)])return![];if(_0x1b84b6[_0x40f59e(0x3d0)]['_encounterEffectDuration']>0x0)return![];const _0x46c40a=_0x3d050d['x'],_0xe27b12=_0x171ac7['y'],_0x572c94=this[_0x40f59e(0x42c)]['x'],_0x5bd6b9=this[_0x40f59e(0x42c)]['y'];if(this['_visiblePlayerX']===_0x46c40a&&this['_visiblePlayerY']===_0xe27b12&&this[_0x40f59e(0x4a0)]===_0x572c94&&this[_0x40f59e(0x2e6)]===_0x5bd6b9)return this['_cacheVisibility'];this[_0x40f59e(0x20c)]=_0x4e8ef6['x'],this[_0x40f59e(0x4ed)]=_0xfe594a['y'],this[_0x40f59e(0x4a0)]=this[_0x40f59e(0x42c)]['x'],this['_visibleEventY']=this[_0x40f59e(0x42c)]['y'];if(_0x72c7c7[_0x40f59e(0x3f3)](_0x46c40a,_0xe27b12,_0x572c94,_0x5bd6b9)>this[_0x40f59e(0x42c)][_0x40f59e(0x252)]())return this[_0x40f59e(0x39a)]=![],![];return this[_0x40f59e(0x39a)]=!![],!![];}}else{if(_0x2f63f1[_0x40f59e(0x3ec)]&&DataManager['isAdvancedSwitch'](_0x2f63f1[_0x40f59e(0x5c3)]))_0x40f59e(0x323)===_0x40f59e(0x13d)?(_0xbb8087['EventsMoveCore'][_0x40f59e(0x2b5)]['call'](this),this['initEventsMoveCore']()):this['_advancedSwitchVariable']=!![];else _0x2f63f1['variableValid']&&DataManager[_0x40f59e(0x494)](_0x2f63f1[_0x40f59e(0x19b)])&&(_0x40f59e(0x3b8)!==_0x40f59e(0x3b8)?this['despawnEventId'](_0x48e703[_0x40f59e(0x155)]):this['_advancedSwitchVariable']=!![]);}},Game_Event['prototype']['hasClickTrigger']=function(){const _0x10a2ca=_0x2552df;if(this[_0x10a2ca(0x5a5)])return![];return this[_0x10a2ca(0x241)];},Game_Event['prototype'][_0x2552df(0x5b9)]=function(){const _0x5e74c8=_0x2552df;$gameTemp[_0x5e74c8(0x3bc)](),this['start']();},Game_Event[_0x2552df(0x4c3)][_0x2552df(0x22e)]=function(_0xeb2731,_0x3b08ec){const _0x3b0c9e=_0x2552df;return this[_0x3b0c9e(0x463)]?this['posEventsMoveCore'](_0xeb2731,_0x3b08ec):Game_Character[_0x3b0c9e(0x4c3)][_0x3b0c9e(0x22e)][_0x3b0c9e(0x4d9)](this,_0xeb2731,_0x3b08ec);},Game_Event['prototype'][_0x2552df(0x1e7)]=function(_0x4431e0,_0x1f1466){const _0x2b8405=_0x2552df;var _0x4beb46=this['x']-this[_0x2b8405(0x463)][_0x2b8405(0x32f)],_0x28e124=this['x']+this['_addedHitbox'][_0x2b8405(0x4a7)],_0xe0130=this['y']-this['_addedHitbox']['up'],_0x20069e=this['y']+this[_0x2b8405(0x463)][_0x2b8405(0x441)];return _0x4beb46<=_0x4431e0&&_0x4431e0<=_0x28e124&&_0xe0130<=_0x1f1466&&_0x1f1466<=_0x20069e;},Game_Event['prototype']['canPass']=function(_0x1d0f62,_0xb36443,_0x3226c1){const _0x575d20=_0x2552df;for(let _0x912142=-this[_0x575d20(0x463)]['left'];_0x912142<=this[_0x575d20(0x463)][_0x575d20(0x4a7)];_0x912142++){for(let _0x20c1f5=-this['_addedHitbox']['up'];_0x20c1f5<=this[_0x575d20(0x463)][_0x575d20(0x441)];_0x20c1f5++){if(_0x575d20(0x283)===_0x575d20(0x283)){if(!Game_Character[_0x575d20(0x4c3)][_0x575d20(0x1fb)][_0x575d20(0x4d9)](this,_0x1d0f62+_0x912142,_0xb36443+_0x20c1f5,_0x3226c1)){if(_0x575d20(0x26c)===_0x575d20(0x1c8)){_0x8b9d11[_0x575d20(0x338)][_0x575d20(0x3a6)]['call'](this,_0x22e66a);if(_0x1fac3e>=0x3e8){const _0x2aa871=this[_0x575d20(0x218)](_0x2f439f);if(_0x2aa871)_0x2aa871[_0x575d20(0x5b1)]();}}else return![];}}else _0x3a3161['EventsMoveCore'][_0x575d20(0x40b)][_0x575d20(0x4d9)](this,_0x408ed8),this[_0x575d20(0x137)]=_0x5addcc['getSelfTarget']();}}return!![];},Game_Event[_0x2552df(0x4c3)][_0x2552df(0x5bc)]=function(_0x26bb2e,_0x4b376b){const _0x511b49=_0x2552df;if(Imported['VisuMZ_0_CoreEngine']&&this['isSmartEventCollisionOn']())return _0x511b49(0x476)==='HosXF'?this[_0x511b49(0x1c4)](_0x26bb2e,_0x4b376b):this[_0x511b49(0x193)](_0x6667bc(_0x4b327a['$1']));else{if(_0x511b49(0x449)!=='IeFHh'){const _0xde4a4e=$gameMap[_0x511b49(0x447)](_0x26bb2e,_0x4b376b)[_0x511b49(0x5c1)](_0x554006=>_0x554006!==this);return _0xde4a4e[_0x511b49(0x506)]>0x0;}else{const _0x529c5a=_0x100e31(_0x11b265['$1']),_0x4bd2b3=_0x1b0781(_0x440e4b['$2']),_0x3ec66f=this[_0x511b49(0x547)](_0x497ce2);return this[_0x511b49(0x5e3)](_0x529c5a,_0x4bd2b3,_0x3ec66f);}}},Game_Event[_0x2552df(0x4c3)][_0x2552df(0x1c4)]=function(_0x348995,_0x18f9e1){const _0x3250b7=_0x2552df;if(!this[_0x3250b7(0x42d)]())return![];else{const _0x5c504b=$gameMap['eventsXyNt'](_0x348995,_0x18f9e1)[_0x3250b7(0x5c1)](_0x2e02df=>_0x2e02df!==this&&_0x2e02df[_0x3250b7(0x42d)]());return _0x5c504b[_0x3250b7(0x506)]>0x0;}},Game_Event[_0x2552df(0x4c3)][_0x2552df(0x497)]=function(){const _0x2f1f49=_0x2552df;return this[_0x2f1f49(0x3b2)]['type']||_0x2f1f49(0x39e);},Game_Event['prototype'][_0x2552df(0x560)]=function(){const _0x5cde69=_0x2552df;return this[_0x5cde69(0x3b2)][_0x5cde69(0x290)]||0x0;},Game_Event['prototype'][_0x2552df(0x14c)]=function(){const _0xa00cc1=_0x2552df;return this['_activationProximity'][_0xa00cc1(0x1ee)]||[];},Game_Event['prototype'][_0x2552df(0x319)]=function(){const _0x46cd01=_0x2552df;Game_Character[_0x46cd01(0x4c3)][_0x46cd01(0x319)][_0x46cd01(0x4d9)](this);if([_0x46cd01(0x39e),'region'][_0x46cd01(0x508)](this['activationProximityType']()))return;$gamePlayer[_0x46cd01(0x37f)]([0x2]);},VisuMZ['EventsMoveCore']['Game_Event_checkEventTriggerAuto']=Game_Event['prototype'][_0x2552df(0x38a)],Game_Event[_0x2552df(0x4c3)][_0x2552df(0x38a)]=function(){const _0x380734=_0x2552df;if(this['_trigger']!==0x3)return;if(this[_0x380734(0x1ef)])return;if(!this[_0x380734(0x5ef)](![]))return;if(!this[_0x380734(0x3f7)](![]))return;VisuMZ['EventsMoveCore']['Game_Event_checkEventTriggerAuto']['call'](this);},VisuMZ[_0x2552df(0x338)][_0x2552df(0x4b3)]=Game_Event[_0x2552df(0x4c3)][_0x2552df(0x499)],Game_Event[_0x2552df(0x4c3)][_0x2552df(0x499)]=function(){const _0x4d86e9=_0x2552df;if(!this[_0x4d86e9(0x4b7)])return;if(!this[_0x4d86e9(0x5ef)](!![]))return;if(!this['checkActivationProximity'](!![]))return;VisuMZ['EventsMoveCore']['Game_Event_updateParallel'][_0x4d86e9(0x4d9)](this);},Game_Event[_0x2552df(0x4c3)]['checkRegionEventTrigger']=function(_0x354407){const _0x17dec9=_0x2552df;if(!_0x354407&&$gameMap[_0x17dec9(0x2ba)]())return![];if(!_0x354407&&$gameMap[_0x17dec9(0x3c4)]())return![];if(this[_0x17dec9(0x14c)]()<=0x0)return!![];return $gamePlayer[_0x17dec9(0x4a8)](this);},Game_Event['prototype'][_0x2552df(0x3f7)]=function(_0x343432){const _0x43c5ae=_0x2552df;if(!_0x343432&&$gameMap[_0x43c5ae(0x2ba)]())return![];if(!_0x343432&&$gameMap['isAnyEventStarting']())return![];if(['none',_0x43c5ae(0x42b)]['includes'](this['activationProximityType']()))return!![];return $gamePlayer[_0x43c5ae(0x368)](this);},VisuMZ[_0x2552df(0x3e7)]=function(_0x323ec5){const _0x2466f=_0x2552df;for(const _0xc77b89 of $gameMap['events']()){if('tnnJB'===_0x2466f(0x471))return this['_activationProximity'][_0x2466f(0x49f)]||_0x2466f(0x39e);else{if(!_0xc77b89)continue;_0xc77b89['moveSynchTarget']()===_0x323ec5&&('GBRTM'===_0x2466f(0x470)?_0xc77b89[_0x2466f(0x37e)]():(_0x52e4ae[_0x2466f(0x338)][_0x2466f(0x242)][_0x2466f(0x4d9)](this),this[_0x2466f(0x2ff)]()));}}},VisuMZ[_0x2552df(0x394)]=function(_0x2c854b){const _0x5bcb0a=_0x2552df;if(_0x2c854b===0x0)return $gamePlayer;return $gameMap[_0x5bcb0a(0x218)](_0x2c854b);},Game_Event[_0x2552df(0x4c3)][_0x2552df(0x5e5)]=function(){const _0xbc9c41=_0x2552df;return this[_0xbc9c41(0x42e)]['target'];},Game_Event[_0x2552df(0x4c3)][_0x2552df(0x4ec)]=function(){return this['_moveSynch']['type'];},Game_Event['prototype'][_0x2552df(0x520)]=function(){const _0x45fa6e=_0x2552df;if(this[_0x45fa6e(0x5e5)]()>=0x0){const _0x1a8453=VisuMZ[_0x45fa6e(0x394)](this[_0x45fa6e(0x5e5)]());if(_0x1a8453)return _0x1a8453[_0x45fa6e(0x520)]();}return Game_Character[_0x45fa6e(0x4c3)][_0x45fa6e(0x520)][_0x45fa6e(0x4d9)](this);},Game_Event[_0x2552df(0x4c3)][_0x2552df(0x37e)]=function(){const _0x18101b=_0x2552df;this[_0x18101b(0x42e)][_0x18101b(0x531)]=this[_0x18101b(0x42e)][_0x18101b(0x531)]||0x0,this[_0x18101b(0x42e)][_0x18101b(0x531)]--;if(this[_0x18101b(0x42e)][_0x18101b(0x531)]>0x0)return;this[_0x18101b(0x42e)][_0x18101b(0x531)]=this['_moveSynch'][_0x18101b(0x4a5)],this[_0x18101b(0x57a)]();},Game_Event[_0x2552df(0x4c3)][_0x2552df(0x57a)]=function(){const _0x3dda9b=_0x2552df;switch(this[_0x3dda9b(0x4ec)]()){case _0x3dda9b(0x15a):this[_0x3dda9b(0x1a4)]();break;case'approach':this[_0x3dda9b(0x55e)]();break;case _0x3dda9b(0x4ad):this[_0x3dda9b(0x383)]();break;case'custom':this[_0x3dda9b(0x46e)]();break;case _0x3dda9b(0x363):case _0x3dda9b(0x466):this[_0x3dda9b(0x552)]();break;case _0x3dda9b(0x4c9):case _0x3dda9b(0x488):this[_0x3dda9b(0x200)]();break;case _0x3dda9b(0x4e8):case _0x3dda9b(0x224):case'mirror\x20horz':case _0x3dda9b(0x4f1):this[_0x3dda9b(0x345)]();break;case'mirror\x20vertical':case'vertical\x20mirror':case _0x3dda9b(0x335):case _0x3dda9b(0x28d):this['processMoveSynchMirrorVert']();break;default:this[_0x3dda9b(0x1a4)]();break;}this[_0x3dda9b(0x185)]();},Game_Event[_0x2552df(0x4c3)][_0x2552df(0x1a4)]=function(){const _0x11edbc=_0x2552df,_0x400025=[0x2,0x4,0x6,0x8];if($gameMap['isSupportDiagonalMovement']()){if(_0x11edbc(0x5e8)===_0x11edbc(0x596)){_0x13d82c[_0x11edbc(0x3ce)](_0x271a97,_0x5a9d16);const _0x4f32a1=_0xdc19b9[_0x11edbc(0x205)]();_0x2fb7a1[_0x11edbc(0x516)](_0x595175[_0x11edbc(0x196)]||_0x4f32a1[_0x11edbc(0x350)]());}else _0x400025['push'](0x1,0x3,0x7,0x9);}const _0x4de176=[];for(const _0x340a99 of _0x400025){if(this['canPass'](this['x'],this['y'],_0x340a99))_0x4de176[_0x11edbc(0x39c)](_0x340a99);}if(_0x4de176[_0x11edbc(0x506)]>0x0){if('ywiMC'===_0x11edbc(0x14b))this[_0x11edbc(0x40e)](_0x3ff26e,_0x47464f);else{const _0x4ccd55=_0x4de176[Math['randomInt'](_0x4de176[_0x11edbc(0x506)])];this[_0x11edbc(0x484)](_0x4ccd55);}}},Game_Event[_0x2552df(0x4c3)][_0x2552df(0x55e)]=function(){const _0x534dba=_0x2552df,_0x732af7=VisuMZ['GetMoveSynchTarget'](this['moveSynchTarget']());this[_0x534dba(0x4e9)](_0x732af7);},Game_Event[_0x2552df(0x4c3)][_0x2552df(0x383)]=function(){const _0xc38270=_0x2552df,_0x5dacd7=VisuMZ['GetMoveSynchTarget'](this[_0xc38270(0x5e5)]());this[_0xc38270(0x24f)](_0x5dacd7);},Game_Event[_0x2552df(0x4c3)][_0x2552df(0x46e)]=function(){const _0x1a2dac=_0x2552df;this[_0x1a2dac(0x565)]();},Game_Event[_0x2552df(0x4c3)][_0x2552df(0x552)]=function(){const _0x205344=_0x2552df,_0x4a62d9=VisuMZ['GetMoveSynchTarget'](this['moveSynchTarget']());this[_0x205344(0x484)](_0x4a62d9[_0x205344(0x540)]());},Game_Event['prototype'][_0x2552df(0x200)]=function(){const _0x361960=_0x2552df,_0x40ca48=VisuMZ[_0x361960(0x394)](this['moveSynchTarget']()),_0x578a87=this[_0x361960(0x43f)](_0x40ca48[_0x361960(0x540)]());this[_0x361960(0x484)](this[_0x361960(0x43f)](_0x40ca48[_0x361960(0x17f)]()));},Game_Event['prototype'][_0x2552df(0x345)]=function(){const _0x533637=_0x2552df,_0xb67cbb=VisuMZ[_0x533637(0x394)](this[_0x533637(0x5e5)]()),_0x2b20e3=[0x0,0x7,0x8,0x9,0x4,0x0,0x6,0x1,0x2,0x3][_0xb67cbb[_0x533637(0x540)]()];this[_0x533637(0x484)](_0x2b20e3);},Game_Event[_0x2552df(0x4c3)][_0x2552df(0x5aa)]=function(){const _0x52ca60=_0x2552df,_0x3aad5b=VisuMZ[_0x52ca60(0x394)](this[_0x52ca60(0x5e5)]()),_0x48a59b=[0x0,0x3,0x2,0x1,0x6,0x0,0x4,0x9,0x8,0x7][_0x3aad5b[_0x52ca60(0x540)]()];this[_0x52ca60(0x484)](_0x48a59b);},Game_Event[_0x2552df(0x4c3)]['restoreSavedEventPosition']=function(){const _0x29bb2e=_0x2552df,_0x3c2783=$gameSystem[_0x29bb2e(0x4dd)](this);if(!_0x3c2783)return;this[_0x29bb2e(0x2d4)](_0x3c2783['x'],_0x3c2783['y']),this['setDirection'](_0x3c2783[_0x29bb2e(0x17f)]),this[_0x29bb2e(0x57b)]===_0x3c2783['pageIndex']&&(_0x29bb2e(0x533)===_0x29bb2e(0x3f8)?_0x5f1288(this[_0x29bb2e(0x5a7)][_0x29bb2e(0x2db)](this,_0x426054,_0x16ce54),0x64):this[_0x29bb2e(0x473)]=_0x3c2783[_0x29bb2e(0x1d2)]);},Game_Event[_0x2552df(0x4c3)]['updateMove']=function(){const _0x1e0ee2=_0x2552df;Game_Character['prototype'][_0x1e0ee2(0x23e)]['call'](this),this[_0x1e0ee2(0x4f7)]();},Game_Event[_0x2552df(0x4c3)][_0x2552df(0x518)]=function(){const _0x90f553=_0x2552df;if($gameMap['isSaveEventLocations']())return!![];return this[_0x90f553(0x340)];},Game_Event[_0x2552df(0x4c3)][_0x2552df(0x4f7)]=function(){const _0x462ab7=_0x2552df;if(!this[_0x462ab7(0x518)]())return;this['saveEventLocation']();},Game_Event[_0x2552df(0x4c3)][_0x2552df(0x1e2)]=function(){const _0x2f3c1f=_0x2552df;$gameSystem[_0x2f3c1f(0x1e2)](this);},Game_Event[_0x2552df(0x4c3)]['deleteEventLocation']=function(){const _0x260428=_0x2552df;$gameSystem[_0x260428(0x3cb)](this);},Game_Event[_0x2552df(0x4c3)][_0x2552df(0x55a)]=function(){const _0x486c9c=_0x2552df;return $gameSystem[_0x486c9c(0x55a)](this)?Game_Character[_0x486c9c(0x4c3)]['getEventIconData'][_0x486c9c(0x4d9)](this):{'iconIndex':0x0,'bufferX':settings['Icon']['BufferX'],'bufferY':settings[_0x486c9c(0x41b)][_0x486c9c(0x3d1)],'blendMode':settings[_0x486c9c(0x41b)][_0x486c9c(0x2ee)]};},Game_Event[_0x2552df(0x4c3)][_0x2552df(0x232)]=function(){const _0x1d3959=_0x2552df;return this[_0x1d3959(0x18c)];},VisuMZ['EventsMoveCore'][_0x2552df(0x326)]=Game_Event[_0x2552df(0x4c3)][_0x2552df(0x23c)],Game_Event[_0x2552df(0x4c3)][_0x2552df(0x23c)]=function(_0x4ed58f){const _0x4483ad=_0x2552df,_0x328c03=VisuMZ[_0x4483ad(0x338)][_0x4483ad(0x326)][_0x4483ad(0x4d9)](this,_0x4ed58f);if(!_0x328c03)return![];return this['meetsCPC'](_0x4ed58f);},Game_Event[_0x2552df(0x4c3)][_0x2552df(0x3ed)]=function(_0x58259d){const _0x1dc39a=_0x2552df;VisuMZ['EventsMoveCore'][_0x1dc39a(0x544)][_0x1dc39a(0x5a4)](_0x58259d),this['_CPCs']=_0x58259d[_0x1dc39a(0x587)][_0x1dc39a(0x506)]>0x0;_0x58259d['CPC']===undefined&&(_0x1dc39a(0x581)!=='YaSwC'?VisuMZ[_0x1dc39a(0x338)][_0x1dc39a(0x544)][_0x1dc39a(0x5a4)](_0x58259d):_0x5cd2c8=_0x4dad71);if(_0x58259d['CPC']['length']>0x0)return $gameMap[_0x1dc39a(0x218)](this[_0x1dc39a(0x155)])&&VisuMZ[_0x1dc39a(0x338)]['CustomPageConditions'][_0x1dc39a(0x165)](_0x58259d[_0x1dc39a(0x587)],this[_0x1dc39a(0x155)]);return!![];},VisuMZ[_0x2552df(0x338)][_0x2552df(0x247)]=Game_Troop['prototype'][_0x2552df(0x23c)],Game_Troop[_0x2552df(0x4c3)][_0x2552df(0x23c)]=function(_0x24ee89){const _0x599678=_0x2552df;var _0x1ae891=VisuMZ[_0x599678(0x338)][_0x599678(0x247)]['call'](this,_0x24ee89);return _0x1ae891&&this[_0x599678(0x47a)](_0x24ee89);},Game_Troop[_0x2552df(0x4c3)][_0x2552df(0x47a)]=function(_0x4ecc71){const _0x12266f=_0x2552df;_0x4ecc71[_0x12266f(0x587)]===undefined&&(_0x12266f(0x44f)==='TlUEz'?_0x49908a[_0x12266f(0x338)][_0x12266f(0x26e)][_0x12266f(0x4d9)](this):VisuMZ[_0x12266f(0x338)][_0x12266f(0x544)][_0x12266f(0x5a4)](_0x4ecc71));if(_0x4ecc71[_0x12266f(0x587)][_0x12266f(0x506)]>0x0)return VisuMZ[_0x12266f(0x338)][_0x12266f(0x544)][_0x12266f(0x165)](_0x4ecc71[_0x12266f(0x587)],0x0);return!![];},VisuMZ[_0x2552df(0x338)][_0x2552df(0x562)]=Game_Event[_0x2552df(0x4c3)][_0x2552df(0x2d4)],Game_Event[_0x2552df(0x4c3)][_0x2552df(0x2d4)]=function(_0x2bceeb,_0x10dbb8){const _0x2edac8=_0x2552df;VisuMZ[_0x2edac8(0x338)][_0x2edac8(0x562)][_0x2edac8(0x4d9)](this,_0x2bceeb,_0x10dbb8),this['_randomHomeX']=_0x2bceeb,this[_0x2edac8(0x3dc)]=_0x10dbb8;},VisuMZ[_0x2552df(0x338)][_0x2552df(0x26e)]=Game_Event[_0x2552df(0x4c3)]['moveTypeRandom'],Game_Event['prototype'][_0x2552df(0x2ea)]=function(){const _0x191ebf=_0x2552df,_0x302983=$gameMap['distance'](this['x'],this['y'],this[_0x191ebf(0x495)],this[_0x191ebf(0x3dc)]),_0x3cfa0c=_0x302983*(this[_0x191ebf(0x25a)]||0x0);if(Math[_0x191ebf(0x15a)]()>=_0x3cfa0c)_0x191ebf(0x55d)!==_0x191ebf(0x55d)?this[_0x191ebf(0x2e3)]():VisuMZ[_0x191ebf(0x338)][_0x191ebf(0x26e)][_0x191ebf(0x4d9)](this);else{if(_0x191ebf(0x153)==='xiiZf'){if([0x2,0x4,0x6,0x8][_0x191ebf(0x508)](_0x1072b3))return 0x4;if([0x1,0x3,0x7,0x9]['includes'](_0x559ce1))return 0x5;}else this[_0x191ebf(0x43e)]();}},Game_Event[_0x2552df(0x4c3)][_0x2552df(0x43e)]=function(){const _0x13425d=_0x2552df,_0x49eadb=this[_0x13425d(0x5c2)](this[_0x13425d(0x495)]),_0x24fb3d=this[_0x13425d(0x592)](this[_0x13425d(0x3dc)]);if(Math['abs'](_0x49eadb)>Math['abs'](_0x24fb3d)){this['moveStraight'](_0x49eadb>0x0?0x4:0x6);if(!this['isMovementSucceeded']()&&_0x24fb3d!==0x0){if('UNjIZ'===_0x13425d(0x297))this['moveStraight'](_0x24fb3d>0x0?0x8:0x2);else{const _0x114536=this[_0x13425d(0x17f)]();return _0xc18790['roundYWithDirection'](this['y'],_0x114536);}}}else{if(_0x24fb3d!==0x0){if('LxbeI'===_0x13425d(0x5b3)){const _0x552b47=_0x509eb0,_0x3fbcf2=_0x4d9669[_0x13425d(0x322)];if(_0x4db9ff[_0x13425d(0x24a)]===_0x552b47[_0x13425d(0x421)]){let _0x1fb9e8=_0x116bf9[_0x13425d(0x322)][0x0];_0x1fb9e8=this[_0x13425d(0x3af)](_0x1fb9e8),_0x1fb9e8=this[_0x13425d(0x5de)](_0x1fb9e8),this[_0x13425d(0x1ea)](_0x1f8937,_0x1fb9e8);}else _0x1e90b0[_0x13425d(0x338)][_0x13425d(0x379)]['call'](this,_0x4e53c0);}else this[_0x13425d(0x3d2)](_0x24fb3d>0x0?0x8:0x2),!this[_0x13425d(0x49a)]()&&_0x49eadb!==0x0&&this[_0x13425d(0x3d2)](_0x49eadb>0x0?0x4:0x6);}}},VisuMZ['EventsMoveCore'][_0x2552df(0x501)]=Game_Interpreter['prototype'][_0x2552df(0x2b2)],Game_Interpreter[_0x2552df(0x4c3)][_0x2552df(0x2b2)]=function(){const _0x4be850=_0x2552df;if(this[_0x4be850(0x2fd)]===_0x4be850(0x45a)){if(window[this[_0x4be850(0x425)]])this[_0x4be850(0x2fd)]='',this['startCallEvent']();else return!![];}else return'gQWzy'===_0x4be850(0x3de)?this[_0x4be850(0x3fb)]():VisuMZ['EventsMoveCore'][_0x4be850(0x501)][_0x4be850(0x4d9)](this);},VisuMZ[_0x2552df(0x338)][_0x2552df(0x316)]=Game_Interpreter[_0x2552df(0x4c3)][_0x2552df(0x3b5)],Game_Interpreter[_0x2552df(0x4c3)][_0x2552df(0x3b5)]=function(){const _0x5ad7a6=_0x2552df,_0x272413=$gameMap&&this[_0x5ad7a6(0x155)]?$gameMap['event'](this[_0x5ad7a6(0x155)]):null;$gameTemp['registerSelfTarget'](_0x272413);const _0x4acb25=VisuMZ[_0x5ad7a6(0x338)][_0x5ad7a6(0x316)][_0x5ad7a6(0x4d9)](this);return $gameTemp['clearSelfTarget'](),_0x4acb25;},VisuMZ[_0x2552df(0x338)]['Game_Interpreter_PluginCommand']=Game_Interpreter['prototype'][_0x2552df(0x145)],Game_Interpreter[_0x2552df(0x4c3)][_0x2552df(0x145)]=function(_0x5fdd71){const _0x3827d2=_0x2552df;return $gameTemp[_0x3827d2(0x407)](this),VisuMZ[_0x3827d2(0x338)][_0x3827d2(0x4e4)][_0x3827d2(0x4d9)](this,_0x5fdd71);},Game_Interpreter[_0x2552df(0x4c3)][_0x2552df(0x29c)]=function(_0x1bd755){const _0x5495dd=_0x2552df;this[_0x5495dd(0x460)]=_0x1bd755;const _0x2cd5a5='Map%1.json'[_0x5495dd(0x265)](_0x1bd755[_0x5495dd(0x399)][_0x5495dd(0x500)](0x3));this[_0x5495dd(0x425)]=_0x5495dd(0x309)+Graphics[_0x5495dd(0x3df)]+'_'+this['eventId'](),DataManager[_0x5495dd(0x4a2)](this['_callEventMap'],_0x2cd5a5),window[this['_callEventMap']]?this[_0x5495dd(0x33d)]():this[_0x5495dd(0x184)](_0x5495dd(0x45a));},Game_Interpreter[_0x2552df(0x4c3)]['startCallEvent']=function(){const _0x4586a9=_0x2552df,_0x5d0764=this[_0x4586a9(0x460)],_0x4ff149=window[this['_callEventMap']],_0xe9ce9d=_0x4ff149[_0x4586a9(0x5b7)][_0x5d0764[_0x4586a9(0x350)]];if(_0xe9ce9d&&_0xe9ce9d['pages'][_0x5d0764[_0x4586a9(0x5c0)]-0x1]){if(_0x4586a9(0x5ad)==='jysdO')return _0x3975c6[_0x4586a9(0x338)][_0x4586a9(0x259)][_0x4586a9(0x4d9)](this,_0x5c1145);else{const _0x257a92=_0xe9ce9d[_0x4586a9(0x502)][_0x5d0764[_0x4586a9(0x5c0)]-0x1][_0x4586a9(0x475)];this[_0x4586a9(0x3d5)](_0x257a92,this['eventId']());}}window[this[_0x4586a9(0x425)]]=undefined,this[_0x4586a9(0x425)]=undefined,this[_0x4586a9(0x460)]=undefined;};function _0x29fe(_0x46a85f,_0x2e5632){const _0x1618ce=_0x1618();return _0x29fe=function(_0x29fe83,_0x457f34){_0x29fe83=_0x29fe83-0x137;let _0x264eba=_0x1618ce[_0x29fe83];return _0x264eba;},_0x29fe(_0x46a85f,_0x2e5632);}function Game_CPCInterpreter(){const _0x43a360=_0x2552df;this[_0x43a360(0x52e)]['apply'](this,arguments);}function _0x1618(){const _0x41c5a6=['autosaveEventLocation','%1\x20is\x20incorrectly\x20placed\x20on\x20the\x20plugin\x20list.\x0aIt\x20is\x20a\x20Tier\x20%2\x20plugin\x20placed\x20over\x20other\x20Tier\x20%3\x20plugins.\x0aPlease\x20reorder\x20the\x20plugin\x20list\x20from\x20smallest\x20to\x20largest\x20tier\x20numbers.','process_VisuMZ_EventsMoveCore_LoadTemplateMaps','djUfM','scale','Hidden','setup','EventIconChange','height','padZero','Game_Interpreter_updateWaitMode','pages','OffsetX','max','Collision','length','prepareSpawnedEventAtXY','includes','slice','UPPER\x20RIGHT','Game_Timer_stop','Hours','RemovePreserve','IconBufferX','Game_Temp_setDestination','setTileBitmap','isAirshipPassable','MWFGT','template','choKe','140485lkrbMZ','despawnEventId','outlineColor','isSaveEventLocation','toUpperCase','_target','SiQxr','variables','requestBalloon','createLowerLayer','pSLOj','realMoveSpeed','setupDiagonalSupport','Game_Troop_meetsConditions','Eqaeq','_needsPeriodicRefresh','lineHeight','trigger','ARRAYEVAL','isAdvancedSwitch','despawnEverything','Window_EventItem_onOk','gBtle','Step2MapId','stop','initialize','sFWNZ','zoomScale','timer','BIzlq','EHIbE','Game_Event_findProperPageIndex','_eventErased','Game_Switches_setValue','Region','createBitmap','IconSet','removeMorph','canMove','updateBitmapSmoothing','szVov','return\x200','textSizeEx','lastMovedDirection','setItemChoice','DDNSU','kMUZR','CustomPageConditions','Minutes','checkEventTriggerHere','checkCollisionKeywords','oIsYM','uuzSx','hideShadows','_working','SILENCE','isLandOk','updateShadowChanges','roundY','Game_CharacterBase_pattern','Dock','processMoveSynchMimic','Game_CharacterBase_direction','_selfTarget','RNIgb','setEventIconDataKey','_periodicRefreshTimer','isRegionForbidPass','MULTIPLY','getEventIconData','HWpwx','erase','tsXdq','processMoveSynchApproach','_eventIcon','activationProximityDistance','CWgfC','Game_Event_locate','wbfaa','HEART','updateRoutineMove','processMoveRouteJumpToCharacter','processMoveRouteMoveRepeat','_selfTargetNumberInput','isRegionDockable','MorphEventTo','contentsOpacity','Scene_Map_startEncounterEffect','iconIndex','AcmzG','processMoveCommand','BoatSpeed','hasAdvancedSwitchVariable','Game_Player_checkEventTriggerHere','pause','chaseCharacter','Wcuad','Game_CharacterBase_screenX','string','vYIft','processMoveRouteFadeIn','processMoveSynch','_pageIndex','LIGHTBULB','constructor','PlayerMovementDiagonal','_moveOnlyRegions','setDirection','MtERl','findDiagonalDirectionTo','EventLocationDelete','itemPadding','text','KNEEL','CPC','inBattle','EEhHi','Bxncu','Rfvkz','backY','xKCye','resizeWindow','SelfVariables','ZZZ','morphIntoTemplate','deltaYFrom','isAllowEventAutoMovement','round','checkNeedForPeriodicRefresh','BYohl','COLLAPSE','bSwtg','shadowFilename','_filename','DefaultShadow','_commonEvents','onChange','setAllowEventAutoMovement','processMoveRouteStepToCharacter','isSelfVariable','getEventIconIndex','_labelWindows','USER-DEFINED\x201','loadCPC','_erased','evvsE','VisuMZ_Setup_Preload_Map','RIGHT\x20TO\x20LEFT','ARRAYJSON','processMoveSynchMirrorVert','shadowY','MUmxo','oLOKE','isActive','580eEOcNZ','70tEUSFe','unlock','List','Walmb','AirshipSpeed','ANGER','cKikk','events','IconBufferY','onClickTrigger','EventTemplates','getMapSpawnedEventData','isCollidedWithEvents','_stepPattern','STRUCT','yJjLf','pageId','filter','deltaXFrom','switch2Id','RegionOk','Game_Timer_onExpire','tYYYn','splice','initEventsMoveCoreSettings','_spriteOffsetX','MUSIC-NOTE','isOnRope','Game_Event_setupPageSettings','SPIN\x20ACW','page','deltaX','Chase','Map%1-Event%2','VS8','createSaveEventLocationData','deltaY','isValid','1728grXzzz','LIGHT','TiltLeft','opacitySpeed','determineCommonEventsWithCPC','ITEM','PostSpawnJS','JeGMJ','convertSelfVariableValuesInScriptCall','qMMQS','startMessage','characterPatternY','checkExistingEntitiesAt','processMoveRouteMoveTo','forceMoveRoute','moveSynchTarget','column','Game_Follower_initialize','jzUrr','_trigger','Game_Interpreter_character','FavorHorz','setupSaveEventLocations','setCharacterBitmap','jeKQo','checkRegionEventTrigger','mqpRi','randomInt','setupEventsMoveCoreNotetags','_selfEvent','exit','innerWidth','KlAxZ','_spawnPreserved','qkqUy','czWKv','SWEAT','add','YQGSm','tafhF','setDestination','createShadows','selfValue','command357','RhCXq','isSelfSwitch','DhTCk','EventId','ShipSpeed','wPORO','activationRegionList','canPassDiagonally','isEventOverloaded','isStopFollowerChasing','ANNOYED','processMoveRouteHugWall','roundX','oLPhr','AdvancedSwitches','_eventId','processMoveRouteSelfSwitch','_spriteset','_eventOverload','_duration','random','registerSelfTarget','isOnLadder','UNTITLED','_character','WNmOu','_speed','hasMoveOnlyRegions','_transparent','VehicleDock','QUESTION','metCPC','note','setCommonEvent','eCskp','_regionRules','restoreSavedEventPosition','Game_Event_clearPageSettings','_spriteOffsetY','IcTYT','lONZo','useCarryPoseForIcons','Game_Map_refresh','qvGHk','ChPXG','Boat','setupEventsMoveCoreCommentTags','fNvNf','_lastPluginCommandInterpreter','isPlayerControlDisabled','Game_Character_setMoveRoute','Operation','ZdxZr','iPonR','setValue','deletePreservedMorphEventDataKey','qUNRn','direction','PreMorphJS','%1:%2','bvDrA','spawnEventId','setWaitMode','update','TiltVert','isDiagonalDirection','resume','SPIN\x20ANTICLOCKWISE','PreloadedMaps','CGJlz','_CPCs','Sprite_Character_characterPatternY','Spriteset_Map_createShadow','processDrawIcon','getPose','switchId','OpacitySpeed','processMoveRouteFadeOut','processMoveRouteMoveUntilStop','Game_CharacterBase_moveDiagonally','EventID','EventLabelVisible','yQunm','despawnTerrainTags','updateOpacity','variableId','isMoveOnlyRegionPassable','processMoveRouteMoveToCharacter','shadowX','description','_moveRoute','startMapCommonEventOnTouch','Game_Player_checkEventTriggerThere','initMembers','processMoveSynchRandom','pnWWb','visibleRange','mNntq','TiltRight','blt','uPVKm','setPattern','isMoving','TEyxA','_shadowGraphic','ODlGw','_lastMovedDirection','KnVrl','prepareSpawnedEventAtTerrainTag','Window_EventItem_onCancel','_cpc','Walk','USER-DEFINED\x203','moveAwayFromPoint','PreCopyJS','findDirectionTo','switches','_reflection','checkEventsMoveCoreStringTags','Seconds','setMoveRoute','_spawnedEvents','Game_CommonEvent_isActive','sPIUh','requestAnimation','LEFT\x20TO\x20RIGHT','checkSmartEventCollision','setImage','searchLimit','trim','hNNJT','SpawnEventDespawnEventID','square','JHaEV','LVTon','rpPmc','needsUpdate','initEventsMoveCore','Speed','WnKoU','moveRouteIndex','59704SxYNyJ','epoNl','vkqOL','GKygw','EventTimerExpireEvent','advancedValue','regionId','setPlayerDiagonalSetting','deleteIconsOnEventsDataKey','ZjBRG','...','createShadow','BufferX','MapId','timerText','saveEventLocation','Direction','Game_SelfSwitches_setValue','RCyzv','front','posEventsMoveCore','savePreservedMorphEventDataKey','HMPH','processMoveCommandEventsMoveCore','Game_Message_setNumberInput','Game_Enemy_meetsSwitchCondition','hPUXI','regionList','_activationProximityAutoTriggerBypass','setupSpawnedEvents','MessageCore','SelfVariableID','Game_Player_increaseSteps','IconIndex','Step1EventId','character','name','Window_NumberInput_start','ZLTvj','Game_Player_executeMove','canPass','Map%1.json','SLEEP','Sprite_Character_initMembers','ELsbc','processMoveSynchReverseMimic','DIoNf','STR','getPlayerDiagonalSetting','Game_CharacterBase_moveStraight','getLastPluginCommandInterpreter','fBImx','meetsSwitchCondition','checkValidEventerMap','Game_CharacterBase_realMoveSpeed','Game_Map_update','turnTowardCharacter','_visiblePlayerX','tsXhi','reserveCommonEvent','setupSpawnTest','Movement','windowPadding','updateEventsMoveCoreTagChanges','processMoveRouteBalloon','some','XEsCh','setOpacity','smooth','event','dashSpeedModifier','ADDITIVE','Game_Event_start','clearSelfTarget','firstSpawnedEventID','JJDqD','isPassableByAnyDirection','Allow','registerSelfEvent','getSelfTarget','HIjBh','horizontal\x20mirror','eXjSV','_characterName','sHJYo','HURT','findTargetSprite','ARRAYNUM','Event','Game_Map_setup','setPlayerControlDisable','pos','gXrMV','_eventScreenX','lastSpawnedEventID','hasCPCs','$preloadedMap_%1','_pattern','EventLocationCreate','createSpawnedEventWithData','processMoveRouteAnimation','prepareSpawnedEventAtRegion','_eventCopyData','BkqXI','clearPose','meetsConditions','EnableDashTilt','updateMove','dVpMK','execute','_clickTrigger','Spriteset_Map_createLowerLayer','Setting','toLowerCase','fontSize','GpNsd','Game_Troop_meetsConditionsCPC','_paused','bYoYj','code','hasDragonbones','LIGHT-BULB','getInputDirection','bhCaY','moveAwayFromCharacter','Game_CharacterBase_updatePattern','FAFcs','labelWindowRange','processMoveRouteStepFrom','994dOLaUX','_selfTargetItemChoice','dDYnh','switch1Valid','getPosingCharacterIndex','Game_Map_event','_randomMoveWeight','zEYQo','airship','fittingHeight','visible','Frames','lAatM','processMoveRouteTeleportToCharacter','width','MoveRouteIndex','_forceDashing','format','turnAwayFromPoint','gxWwe','isTurnInPlace','opacity','QyPGX','command108','WbTTK','replace','Game_Event_moveTypeRandom','isMapPassable','setBackgroundType','_encounterEffectDuration','jcnBj','VICTORY','row','forceDashing','characterIndexVS8','HMxYB','isAllowCharacterTilt','hHwPo','hasEventIcon','isPressed','Game_CharacterBase_isDashing','FollowerID','Passability','FonEX','followers','TemplateName','processMoveRouteStepTo','fipPo','clearStepPattern','create','LOWER\x20LEFT','getPosingCharacterDirection','qIcNG','clearEventCache','isAutoBufferIcon','setEventLabelsVisible','BniTm','vert\x20mirror','BitmapSmoothing','isLabelVisible','distance','updateTilt','DCqsh','uynlY','174897RfhVWI','charAt','ENNCQ','UNjIZ','Sprite_Balloon_setup','tNgjA','initMoveSpeed','wobfr','pluginCommandCallEvent','OzEGN','_eventMorphData','BfuLK','contents','morphInto','FIeqV','Label','yyECQ','wMEEa','FALSE','clear','VVBHT','Game_Timer_start','_patternLocked','SpawnEventDespawnTerrainTags','xnILl','hhTXB','indexOf','isDashingEnabled','EventTimerSpeed','processMoveRouteSetIndex','updateWaitMode','screenX','Game_Message_setItemChoice','Game_Timer_initialize','moveTowardPoint','_DisablePlayerControl','getDirectionFromPoint','Player','isEventRunning','Enable','AdvancedVariables','RegionTouch','startEncounterEffect','Thdtn','characterPatternYVS8','value','isSpriteVS8dir','HrqHS','ckKoX','_pose','boxWidth','_labelWindow','Sprite_Balloon_updatePosition','JSON','_followerChaseOff','NhwWi','TerrainTags','Name','_tilemap','PosX','TEKAt','MapID','refreshIfNeeded','parent','locate','GftYb','UPPER\x20LEFT','fGgCA','SPIN\x20CLOCKWISE','bexCK','ZPsHs','bind','_eventLabelOffsetX','Window_NumberInput_processOk','_type','AllAllow','NoaIl','IconSize','isBattleTest','updateShadow','moveDiagonally','isPreventSelfMovement','_visibleEventY','isRegionAllowPass','isDashing','Window_Message_startMessage','moveTypeRandom','switch1Id','processMoveRouteTeleportTo','bviNN','BlendMode','isShadowVisible','_eventPageIndex','%1DockRegionOnly','12573YndVxb','resetFontSettings','SpawnEventAtRegion','deleteIconsOnEventsData','reverse','updatePeriodicRefresh','likTn','drawTextEx','FollowerSetTargetChase','VisuMZ_2_DragonbonesUnion','clearPageSettings','_waitMode','_advancedSwitchVariable','createLabelWindows','EVAL','FUNC','isCollidedWithPlayerCharacters','JgRwX','DashEnableToggle','_moveAllowPlayerCollision','terrainTag','_characterIndex','DfStB','$callEventMap','updatePatternEventsMoveCore','createLabelWindowForTarget','Settings','_eventSpawnData','PosY','VariableId','onOk','SpawnEventAtTerrainTag','AUHel','executeMove','2126293FlfUBT','isTile','Game_Interpreter_executeCommand','COBWEB','clearCarrying','increaseSteps','Game_Switches_value','concat','updateText','SPIN\x20COUNTERCLOCKWISE','DOWN','FLcMi','Game_Map_parallelCommonEvents','createSpawnedEvent','parameters','aGpEh','_saveEventLocations','processMoveRoutePatternLock','Game_Event_meetsConditionsCPC','adjustDir8MovementSpeed','setupSpawn','Game_CharacterBase_initMembers','blendMode','updateSelfMovement','Sprite_Character_setTileBitmap','AutoMoveEvents','refresh','left','log','Game_Event_updateSelfMovement','Game_Map_events','pattern','_commonEventId','mirror\x20vert','processMoveRouteJumpForward','setDiagonalDirection','EventsMoveCore','Game_CharacterBase_update','Letter','canStartLocalEvents','dODlg','startCallEvent','bPBsS','Game_System_initialize','_saveEventLocation','gainFrames','bitmap','_followerControlID','Game_Player_isMapPassable','processMoveSynchMirrorHorz','PreloadMaps','startMapCommonEventOnOKTarget','VORaT','shiftY','offsetY','drawIcon','isAirship','min','eventsXy','RandomMoveWeight','eventId','FollowerReset','_inputTime','bUlmk','createCharacterShadow','_dragonbones','_diagonalSupport','_hidden','Template','default','despawnRegions','nsFfs','SwitchGetSelfSwitchABCD','turn180','clearSpriteOffsets','getPreservedMorphEventData','_moveSpeed','SpawnEventAtXY','turnLeft90','mimic','eventLabelsVisible','IconBlendMode','isBoat','QGlaS','meetActivationProximityConditions','setBalloonPose','EventIconDelete','setChaseOff','Itmft','EventAutoMovement','despawnAtXY','_eventScreenY','OffsetY','setFrames','SelfSwitchABCD','AutoBalloon','setEventIconData','mLNDj','ARRAYSTRUCT','Scene_Load_onLoadSuccess','turnTowardPoint','Game_Character_processMoveCommand','Game_Map_setupEvents','isPassable','WtckZ','version','updateMoveSynch','checkEventTriggerEventsMoveCore','bufferX','LIGHT\x20BULB','TargetSwitchId','processMoveSynchAway','changeSpeed','WalkAllow','isPosing','Game_CharacterBase_screenY','setControlledFollowerID','fqKnx','checkEventTriggerAuto','qZOEP','setMoveSpeed','setupEvents','Game_CharacterBase_hasStepAnime','ZzYdv','isBigCharacter','WckMW','MUSIC\x20NOTE','Game_Vehicle_initMoveSpeed','GetMoveSynchTarget','setupPageSettings','vehicle','ttmWN','filename','mapId','_cacheVisibility','isBusy','push','isSpawnedEvent','none','advancedFunc','QPvkx','Game_CharacterBase_characterIndex','lastSpawnedEvent','Self\x20Variable\x20%1','GBhRh','removeChild','Game_Map_unlockEvent','processMoveRouteJumpTo','_eventLabelOffsetY','4347880qLhlvs','oBCSy','setFrame','Game_CharacterBase_setDirection','Visible','screenY','convertVariableValuesInScriptCall','registerCommand','isSpawnHitboxCollisionOk','_activationProximity','isInVehicle','oCxeb','executeCommand','ARRAYSTR','deleteSavedEventLocationKey','ZuLjQ','_shadowSprite','ZOqyj','roundYWithDirection','clearDestination','loadSystem','isDashDisabled','_frames','Region%1','zjgpx','All','_PreservedEventMorphData','isAnyEventStarting','isDashingAndMoving','follower','VisibleEventLabels','isSupportDiagonalMovement','WalkForbid','correctFacingDirection','deleteSavedEventLocation','Game_Follower_chaseCharacter','_screenZoomScale','ConvertParams','Scene_Boot_onDatabaseLoaded','_scene','BufferY','moveStraight','Preserve','_EventIcons','setupChild','Uposi','nfyuB','SwitchId','srHNC','StrictCollision','qaIVu','_randomHomeY','isEventClickTriggered','zjAfA','frameCount','iconSize','setupRegionRestrictions','checkAdvancedSwitchVariablePresent','rRbTD','Game_Event_refresh','_poseDuration','yPyNc','MoveAllSynchTargets','arRoi','posNt','Step2Preserve','%1Allow','switch2Valid','meetsCPC','OperateValues','addLoadListener','RegionOkTarget','Game_CharacterBase_canPass','_opacity','absDistance','setupCopyEvent','_mapId','uAPyE','checkActivationProximity','tTLsU','split','SCREEN','forceCarrying','%1%2','AllForbid','labelWindowText','addChild','_spawnData','SMWNV','boat','jump','TRUE','target','FqVNh','setLastPluginCommandInterpreter','characterName','processMoveRouteSelfVariable','kvptC','Game_Message_add','DxVaL','MUSIC','setSelfValue','NORMAL','isDestinationValid','turnRight90','Aklxf','process_VisuMZ_EventsMoveCore_Switches_Variables','makeDeepCopy','removeTemporaryMapSpawnedEvents','Step1MapId','Sprite_Character_update','VisibleRange','Ship','Game_Event_checkEventTriggerAuto','Icon','OFF','Game_Player_isDashing','abs','initMembersEventsMoveCore','PreSpawnJS','ROUTE_SCRIPT','_forceCarrying','spriteId','spawnPreserved','_callEventMap','OgKGm','Window_ScrollText_startMessage','ERROR:\x20Map\x20%1\x20has\x20not\x20been\x20preloaded\x20for\x20<Copy\x20Event>\x20usage.','%1\x27s\x20version\x20does\x20not\x20match\x20plugin\x27s.\x20Please\x20update\x20it\x20in\x20the\x20Plugin\x20Manager.','offsetX','region','_event','isNormalPriority','_moveSynch','EXCLAMATION','_PlayerDiagonalSetting','TfcqM','TargetVariableId','_stopCount','directionOnLadderSpriteVS8dir','onExpire','Value','WihTQ','EventTimerResume','LEFT','_needsRefresh','hvigt','floor','updatePose','moveBackToRandomHome','reverseDir','updateVS8BalloonOffsets','down','setupEventsMoveCoreEffects','CGYiY','Step2EventId','PageId','drawing','eventsXyNt','isPlaytest','XVQeW','SuccessSwitchId','unlockEvent','Game_Variables_value','initEventsMoveCoreEffects','_text','qwvnK','qKhSU','updatePattern','AhwhT','171eHPXJQ','Airship','iconWidth','firstSpawnedEvent','EventTimerFramesGain','anchor','hasStepAnime','CallEvent','Forbid','_eventOverloadThreshold','createIconSprite','bufferY','StopAutoMoveEvents','_callEventData','nJSVa','Toggle','_addedHitbox','Otuaa','parallelCommonEvents','copy','XoYPO','clamp','CFXhR','isShip','fontFace','getDirectionToPoint','Self\x20Switch\x20%1','processMoveSynchCustom','TMgbm','GBRTM','FlUsf','DiagonalSpeedMultiplier','_moveRouteIndex','_eventCache','list','HosXF','VhUlf','2vMExAg','onCancel','CPCsMet','_MapSpawnedEventData','_alwaysUpdateMove','setupMorphEvent','_counter','match','getControlledFollowerID','CRwMH','_cacheSystemVisible','RIGHT','executeMoveDir8','SpawnEventDespawnEverything','jcvqB','player','reverse\x20copy','processOk','48212nNXEYc','autoEventIconBuffer','_EventsMoveCoreSettings','QgKRQ','MorphEventRemove','_SavedEventLocations','initFollowerController','EventLabelRefresh','Game_Vehicle_isLandOk','svJvk','isAdvancedVariable','_randomHomeX','LineHeight','activationProximityType','ARRAYFUNC','updateParallel','isMovementSucceeded','6RJQBNe','isWorking','_expireCommonEvent','turnAwayFromCharacter','type','_visibleEventX','Game_Map_isDashDisabled','loadDataFile','WNuZS','EventForbid','delay','clearDashing','right','meetActivationRegionConditions','QLwHM','TurnInPlaceDelay','_eventIconSprite','uWfBA','away','Game_Variables_setValue','roundXWithDirection','onLoadSuccess','parse','SelfSwitchID','Game_Event_updateParallel','SelfSwitches','getPosingCharacterPattern','findProperPageIndex','_interpreter','return\x20%1','wPlCG','PlayerForbid','map','DiVhO','isTriggerIn','_characterSprites','Game_Event_isCollidedWithPlayerCharacters','Visibility','qCyRr','Game_SelfSwitches_value','prototype','destinationY','DashModifier','dir8','getInputDir8','Sprite_Character_setCharacterBitmap','reverse\x20mimic','_vehicleType','Game_Character_forceMoveRoute','setStopFollowerChasing','EventTimerFramesSet','PfedZ','remove','qaIWD','Game_Player_getInputDirection','setNumberInput','cxwQx','updateScale','Game_Event_event','SlowerSpeed','updatePosition','IxOCw','call','_seconds','WUutA','isShadowShrink','getSavedEventLocation','DashingEnable','_data','setPose','omTyK','isJumping','VariableGetSelfVariableID','Game_Interpreter_PluginCommand','_chaseOff','Game_Event_initialize','StopAutoMoveMessages','mirror\x20horizontal','moveTowardCharacter','rotation','isRunning','moveSynchType','_visiblePlayerY','setDashingEnabled','xgxSP','isNearTheScreen','horz\x20mirror','startMapCommonEventOnOK','Game_CharacterBase_increaseSteps','hasClickTrigger','start','defaultFontSize'];_0x1618=function(){return _0x41c5a6;};return _0x1618();};Game_CPCInterpreter[_0x2552df(0x4c3)]=Object[_0x2552df(0x285)](Game_Interpreter['prototype']),Game_CPCInterpreter[_0x2552df(0x4c3)][_0x2552df(0x57d)]=Game_CPCInterpreter,Game_CPCInterpreter['prototype'][_0x2552df(0x2a7)]=function(){const _0x4b846c=_0x2552df;Game_Interpreter['prototype']['clear'][_0x4b846c(0x4d9)](this),this[_0x4b846c(0x1b4)]=![];},Game_CPCInterpreter[_0x2552df(0x4c3)]['execute']=function(){const _0x41736f=_0x2552df;while(this[_0x41736f(0x4eb)]()){'bUeCf'!==_0x41736f(0x4a9)?this['executeCommand']():(_0x43d4a4['EventsMoveCore'][_0x41736f(0x4f3)][_0x41736f(0x4d9)](this),this[_0x41736f(0x23b)]());}},Game_CPCInterpreter[_0x2552df(0x4c3)][_0x2552df(0x26b)]=function(_0x20fe1c){const _0x323681=_0x2552df;return Game_Interpreter[_0x323681(0x4c3)][_0x323681(0x26b)][_0x323681(0x4d9)](this,_0x20fe1c),this['_comments'][_0x323681(0x214)](_0x4f8539=>_0x4f8539[_0x323681(0x47f)](/<(?:CONDITION|CONDITIONS) MET>/i))&&(this[_0x323681(0x1b4)]=!![]),!![];},VisuMZ[_0x2552df(0x338)][_0x2552df(0x56c)]=Scene_Map['prototype'][_0x2552df(0x2be)],Scene_Map[_0x2552df(0x4c3)][_0x2552df(0x2be)]=function(){const _0x86917a=_0x2552df;VisuMZ[_0x86917a(0x338)][_0x86917a(0x56c)][_0x86917a(0x4d9)](this),this['_spriteset'][_0x86917a(0x54a)]();},VisuMZ['EventsMoveCore'][_0x2552df(0x377)]=Scene_Load[_0x2552df(0x4c3)]['onLoadSuccess'],Scene_Load[_0x2552df(0x4c3)][_0x2552df(0x4b0)]=function(){const _0x2014d3=_0x2552df;if($gameMap)$gameMap[_0x2014d3(0x289)]();VisuMZ[_0x2014d3(0x338)]['Scene_Load_onLoadSuccess'][_0x2014d3(0x4d9)](this);},VisuMZ[_0x2552df(0x338)][_0x2552df(0x1fe)]=Sprite_Character[_0x2552df(0x4c3)][_0x2552df(0x1a3)],Sprite_Character[_0x2552df(0x4c3)][_0x2552df(0x1a3)]=function(){const _0x2301c8=_0x2552df;VisuMZ[_0x2301c8(0x338)][_0x2301c8(0x1fe)]['call'](this),this[_0x2301c8(0x41f)](),this['createIconSprite']();},Sprite_Character[_0x2552df(0x4c3)][_0x2552df(0x41f)]=function(){this['_shadowOpacity']=0xff;},Sprite_Character[_0x2552df(0x4c3)][_0x2552df(0x45d)]=function(){const _0x2b0d98=_0x2552df;this[_0x2b0d98(0x4ab)]=new Sprite(),this[_0x2b0d98(0x4ab)][_0x2b0d98(0x342)]=ImageManager['loadSystem'](_0x2b0d98(0x539)),this['_eventIconSprite'][_0x2b0d98(0x342)]['smooth']=![],this['_eventIconSprite']['setFrame'](0x0,0x0,0x0,0x0),this['_eventIconSprite'][_0x2b0d98(0x458)]['x']=0.5,this[_0x2b0d98(0x4ab)]['anchor']['y']=0x1,this[_0x2b0d98(0x3ff)](this[_0x2b0d98(0x4ab)]);},Sprite_Character[_0x2552df(0x4c3)][_0x2552df(0x2c2)]=function(){const _0x155576=_0x2552df;return this[_0x155576(0x226)]&&this[_0x155576(0x226)][_0x155576(0x47f)](/\[VS8\]/i);},Sprite_Character[_0x2552df(0x4c3)]['isAutoBufferIcon']=function(){const _0x4e0416=_0x2552df;return this['isSpriteVS8dir']()&&VisuMZ[_0x4e0416(0x338)][_0x4e0416(0x30c)][_0x4e0416(0x5d2)]['AutoBuffer'];},VisuMZ[_0x2552df(0x338)][_0x2552df(0x417)]=Sprite_Character[_0x2552df(0x4c3)]['update'],Sprite_Character[_0x2552df(0x4c3)]['update']=function(){const _0x5dd8d6=_0x2552df;VisuMZ['EventsMoveCore'][_0x5dd8d6(0x417)][_0x5dd8d6(0x4d9)](this);if(VisuMZ[_0x5dd8d6(0x338)][_0x5dd8d6(0x30c)][_0x5dd8d6(0x210)][_0x5dd8d6(0x23d)]){if(_0x5dd8d6(0x2da)===_0x5dd8d6(0x2c3)){_0x19712a+=this[_0x5dd8d6(0x3f2)],this[_0x5dd8d6(0x216)](_0x2a4ed6[_0x5dd8d6(0x468)](0x0,0xff));if(this[_0x5dd8d6(0x3f2)]<0xff)this['_moveRouteIndex']--;}else this[_0x5dd8d6(0x291)]();}this[_0x5dd8d6(0x3b9)]&&this['updateShadow']();if(this[_0x5dd8d6(0x4ab)]){if(_0x5dd8d6(0x1f9)==='HuXvJ'){if(_0x38da99)this[_0x5dd8d6(0x378)](_0x121080['x'],_0x3cdf40['y']);}else this['updateEventIconSprite']();}},VisuMZ[_0x2552df(0x338)][_0x2552df(0x32c)]=Sprite_Character[_0x2552df(0x4c3)][_0x2552df(0x510)],Sprite_Character[_0x2552df(0x4c3)][_0x2552df(0x510)]=function(){const _0x45a19a=_0x2552df;VisuMZ[_0x45a19a(0x338)][_0x45a19a(0x32c)][_0x45a19a(0x4d9)](this),this[_0x45a19a(0x342)][_0x45a19a(0x3ef)](this['updateBitmapSmoothing']['bind'](this));},VisuMZ[_0x2552df(0x338)]['Sprite_Character_setCharacterBitmap']=Sprite_Character[_0x2552df(0x4c3)][_0x2552df(0x5ed)],Sprite_Character[_0x2552df(0x4c3)][_0x2552df(0x5ed)]=function(){const _0x451ffa=_0x2552df;VisuMZ['EventsMoveCore'][_0x451ffa(0x4c8)]['call'](this),this['bitmap'][_0x451ffa(0x3ef)](this[_0x451ffa(0x53c)][_0x451ffa(0x2db)](this));},Sprite_Character['prototype'][_0x2552df(0x53c)]=function(){const _0x2826fe=_0x2552df;if(!this[_0x2826fe(0x342)])return;this['bitmap'][_0x2826fe(0x217)]=!!VisuMZ[_0x2826fe(0x338)][_0x2826fe(0x30c)][_0x2826fe(0x210)][_0x2826fe(0x28e)];},VisuMZ[_0x2552df(0x338)]['Sprite_Character_characterPatternY']=Sprite_Character['prototype'][_0x2552df(0x5e1)],Sprite_Character[_0x2552df(0x4c3)][_0x2552df(0x5e1)]=function(){const _0x4d4452=_0x2552df;return this[_0x4d4452(0x2c2)]()?this[_0x4d4452(0x2c0)]():VisuMZ['EventsMoveCore'][_0x4d4452(0x18d)][_0x4d4452(0x4d9)](this);},Sprite_Character[_0x2552df(0x4c3)][_0x2552df(0x2c0)]=function(){const _0x3274aa=_0x2552df,_0x440512=this['_character'][_0x3274aa(0x17f)](),_0x48d82e=[0x2,0x2,0x2,0x4,0x4,0x2,0x6,0x6,0x8,0x8];return(_0x48d82e[_0x440512]-0x2)/0x2;},Sprite_Character['prototype'][_0x2552df(0x291)]=function(){const _0x41c49f=_0x2552df;this['rotation']=0x0;if(this[_0x41c49f(0x278)]()){if('WtckZ'!==_0x41c49f(0x37c)){if(_0x2ab528[_0x41c49f(0x3d0)]['constructor']===_0x4a8a40)return![];return _0x17c960['SelfVariables'][_0x41c49f(0x508)](_0x5e8a16);}else{const _0x10f4e1=VisuMZ[_0x41c49f(0x338)][_0x41c49f(0x30c)][_0x41c49f(0x210)],_0xa7be55=this[_0x41c49f(0x15e)][_0x41c49f(0x17f)]();let _0xf5d3b3=0x0;if([0x1,0x4,0x7][_0x41c49f(0x508)](_0xa7be55))_0xf5d3b3=_0x10f4e1[_0x41c49f(0x5d8)];if([0x3,0x6,0x9][_0x41c49f(0x508)](_0xa7be55))_0xf5d3b3=_0x10f4e1[_0x41c49f(0x1a8)];[0x2,0x8][_0x41c49f(0x508)](_0xa7be55)&&(_0xf5d3b3=[-_0x10f4e1['TiltVert'],0x0,_0x10f4e1[_0x41c49f(0x186)]][this[_0x41c49f(0x15e)][_0x41c49f(0x333)]()]);if(this[_0x41c49f(0x1bb)])_0xf5d3b3*=-0x1;this[_0x41c49f(0x4ea)]=_0xf5d3b3;}}},Sprite_Character[_0x2552df(0x4c3)][_0x2552df(0x278)]=function(){const _0x5dee1c=_0x2552df;if(this[_0x5dee1c(0x355)])return![];return this['_character'][_0x5dee1c(0x3c5)]()&&!this['_character'][_0x5dee1c(0x15c)]()&&!this[_0x5dee1c(0x15e)]['isPosing']()&&this[_0x5dee1c(0x5a1)]()===0x0;},Sprite_Character[_0x2552df(0x4c3)][_0x2552df(0x2e3)]=function(){const _0x340828=_0x2552df;this[_0x340828(0x3b9)]['x']=this[_0x340828(0x15e)][_0x340828(0x19e)](),this['_shadowSprite']['y']=this['_character'][_0x340828(0x5ab)](),this[_0x340828(0x3b9)][_0x340828(0x269)]=this[_0x340828(0x269)],this['_shadowSprite'][_0x340828(0x25e)]=this[_0x340828(0x15e)][_0x340828(0x2ef)](),this[_0x340828(0x3b9)][_0x340828(0x357)]=this[_0x340828(0x357)],!this[_0x340828(0x15e)]['isShadowShrink']()?(this['_shadowSprite'][_0x340828(0x4fb)]['x']=Math['min'](0x1,this['_shadowSprite'][_0x340828(0x4fb)]['x']+0.1),this[_0x340828(0x3b9)][_0x340828(0x4fb)]['y']=Math['min'](0x1,this[_0x340828(0x3b9)]['scale']['y']+0.1)):(this['_shadowSprite'][_0x340828(0x4fb)]['x']=Math[_0x340828(0x504)](0x0,this['_shadowSprite'][_0x340828(0x4fb)]['x']-0.1),this[_0x340828(0x3b9)]['scale']['y']=Math[_0x340828(0x504)](0x0,this[_0x340828(0x3b9)][_0x340828(0x4fb)]['y']-0.1));},Sprite_Character[_0x2552df(0x4c3)]['updateEventIconSprite']=function(){const _0x22e12a=_0x2552df,_0x5dd019=this['_eventIconSprite'],_0x298b66=this[_0x22e12a(0x5a1)]();if(_0x298b66<=0x0)return _0x5dd019[_0x22e12a(0x3ab)](0x0,0x0,0x0,0x0);else{const _0x11a98d=ImageManager['iconWidth'],_0x2bcc7a=ImageManager['iconHeight'],_0x53b920=_0x298b66%0x10*_0x11a98d,_0x43c67e=Math[_0x22e12a(0x43c)](_0x298b66/0x10)*_0x2bcc7a;_0x5dd019[_0x22e12a(0x3ab)](_0x53b920,_0x43c67e,_0x11a98d,_0x2bcc7a),this[_0x22e12a(0x25e)]=!![];}const _0x3db549=this[_0x22e12a(0x15e)]['getEventIconData']();if(this[_0x22e12a(0x28a)]()){if(_0x22e12a(0x58a)===_0x22e12a(0x58a))this[_0x22e12a(0x48b)](_0x5dd019);else{const _0xbae7c5=_0x3be1e9[_0x22e12a(0x338)]['Settings'][_0x22e12a(0x210)];if(_0x4dfd62[_0x22e12a(0x2ba)]()&&_0xbae7c5[_0x22e12a(0x45f)])return!![];if(_0x24de6c[_0x22e12a(0x39b)]()&&_0xbae7c5[_0x22e12a(0x4e7)])return!![];if(!_0x2f56b9[_0x22e12a(0x593)]())return!![];if(this['moveSynchTarget']()>=0x0)return!![];return![];}}else _0x5dd019['x']=_0x3db549?_0x3db549[_0x22e12a(0x380)]:0x0,_0x5dd019['y']=_0x3db549?-this['height']+_0x3db549[_0x22e12a(0x45e)]:0x0;_0x5dd019[_0x22e12a(0x32a)]=_0x3db549?_0x3db549['blendMode']:0x0,this[_0x22e12a(0x3a5)](_0x5dd019),this[_0x22e12a(0x3ff)](_0x5dd019),_0x5dd019['rotation']=-this[_0x22e12a(0x4ea)];},Sprite_Character[_0x2552df(0x4c3)]['autoEventIconBuffer']=function(_0x41dd2e){const _0x5710d3=_0x2552df;_0x41dd2e['x']=0x0,_0x41dd2e['y']=-this['height']+this['height']*0x2/0x5,this[_0x5710d3(0x15e)]['pattern']()!==0x1&&(_0x5710d3(0x251)==='TwYMx'?(_0x214f8b['EventsMoveCore'][_0x5710d3(0x16b)][_0x5710d3(0x4d9)](this),this[_0x5710d3(0x44d)]()):_0x41dd2e['y']+=0x1);},Sprite_Character['prototype']['getEventIconIndex']=function(){const _0x583fe2=_0x2552df;if(!this[_0x583fe2(0x15e)])return 0x0;if(this[_0x583fe2(0x15e)][_0x583fe2(0x5a5)])return 0x0;const _0x33200a=this[_0x583fe2(0x15e)][_0x583fe2(0x55a)]();return _0x33200a?_0x33200a[_0x583fe2(0x56d)]||0x0:0x0;},VisuMZ[_0x2552df(0x338)][_0x2552df(0x298)]=Sprite_Balloon[_0x2552df(0x4c3)][_0x2552df(0x4fd)],Sprite_Balloon['prototype']['setup']=function(_0x45cea0,_0x275293){const _0x703e4f=_0x2552df;VisuMZ[_0x703e4f(0x338)]['Sprite_Balloon_setup'][_0x703e4f(0x4d9)](this,_0x45cea0,_0x275293),VisuMZ[_0x703e4f(0x338)]['Settings'][_0x703e4f(0x5d2)][_0x703e4f(0x373)]&&this[_0x703e4f(0x51a)][_0x703e4f(0x15e)][_0x703e4f(0x369)](_0x275293,this[_0x703e4f(0x159)]);},VisuMZ[_0x2552df(0x338)][_0x2552df(0x2c8)]=Sprite_Balloon[_0x2552df(0x4c3)]['updatePosition'],Sprite_Balloon[_0x2552df(0x4c3)][_0x2552df(0x4d7)]=function(){const _0x4f5ba7=_0x2552df;VisuMZ[_0x4f5ba7(0x338)]['Sprite_Balloon_updatePosition'][_0x4f5ba7(0x4d9)](this),this[_0x4f5ba7(0x440)]();},Sprite_Balloon[_0x2552df(0x4c3)][_0x2552df(0x440)]=function(){const _0x22a230=_0x2552df;if(this['_target'][_0x22a230(0x15e)][_0x22a230(0x2c2)]()){if(_0x22a230(0x512)==='FlXcO'){this['_poseDuration']=this[_0x22a230(0x3e5)]||0x0;if(this[_0x22a230(0x3e5)]>0x0){this[_0x22a230(0x3e5)]--;if(this[_0x22a230(0x3e5)]<=0x0&&this[_0x22a230(0x2c5)]!==_0x22a230(0x590))this['clearPose']();}}else this['x']+=VisuMZ['EventsMoveCore'][_0x22a230(0x30c)][_0x22a230(0x5d2)]['BalloonOffsetX'],this['y']+=VisuMZ[_0x22a230(0x338)][_0x22a230(0x30c)][_0x22a230(0x5d2)]['BalloonOffsetY'];}},Sprite_Timer['prototype'][_0x2552df(0x538)]=function(){const _0x549cb3=_0x2552df;this[_0x549cb3(0x342)]=new Bitmap(Math[_0x549cb3(0x594)](Graphics[_0x549cb3(0x2c6)]/0x2),0x30),this['bitmap'][_0x549cb3(0x46b)]=this[_0x549cb3(0x46b)](),this[_0x549cb3(0x342)][_0x549cb3(0x245)]=this[_0x549cb3(0x245)](),this[_0x549cb3(0x342)]['outlineColor']=ColorManager[_0x549cb3(0x517)]();},Sprite_Timer[_0x2552df(0x4c3)][_0x2552df(0x1e1)]=function(){const _0x15484a=_0x2552df,_0x1916db=Math[_0x15484a(0x43c)](this['_seconds']/0x3c/0x3c),_0x4fd9e9=Math[_0x15484a(0x43c)](this[_0x15484a(0x4da)]/0x3c)%0x3c,_0x5f3068=this['_seconds']%0x3c;let _0x1e7060=_0x4fd9e9[_0x15484a(0x500)](0x2)+':'+_0x5f3068[_0x15484a(0x500)](0x2);if(_0x1916db>0x0)_0x1e7060=_0x15484a(0x181)[_0x15484a(0x265)](_0x1916db,_0x1e7060);return _0x1e7060;},VisuMZ[_0x2552df(0x338)][_0x2552df(0x242)]=Spriteset_Map[_0x2552df(0x4c3)][_0x2552df(0x51e)],Spriteset_Map[_0x2552df(0x4c3)]['createLowerLayer']=function(){const _0x349f9e=_0x2552df;VisuMZ[_0x349f9e(0x338)]['Spriteset_Map_createLowerLayer'][_0x349f9e(0x4d9)](this),this[_0x349f9e(0x2ff)]();},VisuMZ[_0x2552df(0x338)][_0x2552df(0x18e)]=Spriteset_Map[_0x2552df(0x4c3)]['createShadow'],Spriteset_Map['prototype'][_0x2552df(0x1de)]=function(){const _0x3077d1=_0x2552df;VisuMZ[_0x3077d1(0x338)]['Spriteset_Map_createShadow'][_0x3077d1(0x4d9)](this),this[_0x3077d1(0x143)]();},Spriteset_Map['prototype']['createShadows']=function(){const _0x386855=_0x2552df;if(!VisuMZ['EventsMoveCore'][_0x386855(0x30c)][_0x386855(0x210)]['ShowShadows'])return;for(const _0x3e379a of this[_0x386855(0x4be)]){this[_0x386855(0x354)](_0x3e379a);}},Spriteset_Map[_0x2552df(0x4c3)]['createCharacterShadow']=function(_0x419466){const _0x8079d3=_0x2552df;_0x419466[_0x8079d3(0x3b9)]=new Sprite(),_0x419466[_0x8079d3(0x3b9)][_0x8079d3(0x59a)]=_0x419466[_0x8079d3(0x15e)][_0x8079d3(0x599)](),_0x419466[_0x8079d3(0x3b9)][_0x8079d3(0x342)]=ImageManager[_0x8079d3(0x3bd)](_0x419466[_0x8079d3(0x3b9)][_0x8079d3(0x59a)]),_0x419466[_0x8079d3(0x3b9)][_0x8079d3(0x458)]['x']=0.5,_0x419466[_0x8079d3(0x3b9)]['anchor']['y']=0x1,_0x419466[_0x8079d3(0x3b9)]['z']=0x0,this['_tilemap'][_0x8079d3(0x3ff)](_0x419466[_0x8079d3(0x3b9)]);},Spriteset_Map[_0x2552df(0x4c3)]['hideShadows']=function(){const _0x3da35c=_0x2552df;if(!VisuMZ[_0x3da35c(0x338)][_0x3da35c(0x30c)][_0x3da35c(0x210)]['ShowShadows'])return;for(const _0x3bc9e3 of this[_0x3da35c(0x4be)]){this[_0x3da35c(0x2ce)]['removeChild'](_0x3bc9e3['_shadowSprite']);}},Spriteset_Map[_0x2552df(0x4c3)][_0x2552df(0x2ff)]=function(){const _0x48baf3=_0x2552df;this[_0x48baf3(0x5a2)]=[];for(const _0x45bd1d of $gameMap['events']()){_0x48baf3(0x4db)!==_0x48baf3(0x598)?this['createLabelWindowForTarget'](_0x45bd1d):(this[_0x48baf3(0x2c5)]='',this[_0x48baf3(0x3e5)]=0x0);}},Spriteset_Map['prototype']['createLabelWindowForTarget']=function(_0x2089a0){const _0x35fd9f=_0x2552df;if(!this['isTargetEventValidForLabelWindow'](_0x2089a0))return;const _0x2197c9=new Window_EventLabel(_0x2089a0);_0x2197c9['z']=0x8,_0x2197c9[_0x35fd9f(0x423)]=Sprite[_0x35fd9f(0x47e)]++,this[_0x35fd9f(0x2ce)][_0x35fd9f(0x3ff)](_0x2197c9),this[_0x35fd9f(0x5a2)][_0x35fd9f(0x39c)](_0x2197c9);},Spriteset_Map['prototype']['isTargetEventValidForLabelWindow']=function(_0x5bed09){const _0x55ff57=_0x2552df,_0x37c5b9=_0x5bed09[_0x55ff57(0x218)]();if(_0x37c5b9['note']['match'](/<LABEL:[ ](.*?)>/i))return!![];if(_0x37c5b9[_0x55ff57(0x166)][_0x55ff57(0x47f)](/<LABEL>\s*([\s\S]*)\s*<\/LABEL>/i))return!![];for(const _0x300c82 of _0x37c5b9[_0x55ff57(0x502)]){if(_0x55ff57(0x1cd)!==_0x55ff57(0x1cd))return _0x7be4d1['event'](this[_0x55ff57(0x155)])&&_0x29b090[_0x55ff57(0x338)][_0x55ff57(0x544)][_0x55ff57(0x165)](_0x2a35f7[_0x55ff57(0x587)],this['_eventId']);else{let _0x5de9cf='';for(const _0x4a819b of _0x300c82[_0x55ff57(0x475)]){[0x6c,0x198]['includes'](_0x4a819b[_0x55ff57(0x24a)])&&(_0x5de9cf+=_0x4a819b[_0x55ff57(0x322)][0x0]);}if(_0x5de9cf[_0x55ff57(0x47f)](/<LABEL:[ ](.*?)>/i))return!![];if(_0x5de9cf['match'](/<LABEL>\s*([\s\S]*)\s*<\/LABEL>/i))return!![];}}return![];},Spriteset_Map['prototype']['createSpawnedEvent']=function(_0x287652){const _0x81803a=_0x2552df;this[_0x81803a(0x4be)]=this[_0x81803a(0x4be)]||[];const _0x39a9f5=new Sprite_Character(_0x287652);this[_0x81803a(0x4be)]['push'](_0x39a9f5),this[_0x81803a(0x2ce)][_0x81803a(0x3ff)](_0x39a9f5),this[_0x81803a(0x354)](_0x39a9f5),this[_0x81803a(0x30b)](_0x287652),_0x39a9f5[_0x81803a(0x185)]();},VisuMZ[_0x2552df(0x338)][_0x2552df(0x1eb)]=Game_Message[_0x2552df(0x4c3)][_0x2552df(0x4d2)],Game_Message[_0x2552df(0x4c3)]['setNumberInput']=function(_0x38f1b4,_0xd9fc85){const _0x3377ff=_0x2552df;this[_0x3377ff(0x568)]=$gameTemp[_0x3377ff(0x222)](),VisuMZ['EventsMoveCore'][_0x3377ff(0x1eb)][_0x3377ff(0x4d9)](this,_0x38f1b4,_0xd9fc85);},VisuMZ[_0x2552df(0x338)][_0x2552df(0x1f8)]=Window_NumberInput['prototype'][_0x2552df(0x4f5)],Window_NumberInput[_0x2552df(0x4c3)]['start']=function(){const _0x4f4fe5=_0x2552df;$gameTemp['registerSelfTarget']($gameMessage[_0x4f4fe5(0x568)]),VisuMZ[_0x4f4fe5(0x338)][_0x4f4fe5(0x1f8)][_0x4f4fe5(0x4d9)](this),$gameTemp[_0x4f4fe5(0x21c)]();},VisuMZ['EventsMoveCore']['Window_NumberInput_processOk']=Window_NumberInput[_0x2552df(0x4c3)]['processOk'],Window_NumberInput['prototype'][_0x2552df(0x489)]=function(){const _0x36cfeb=_0x2552df;$gameTemp[_0x36cfeb(0x15b)]($gameMessage[_0x36cfeb(0x568)]),VisuMZ[_0x36cfeb(0x338)][_0x36cfeb(0x2dd)][_0x36cfeb(0x4d9)](this),$gameTemp['clearSelfTarget'](),$gameMessage[_0x36cfeb(0x568)]=undefined;},VisuMZ[_0x2552df(0x338)]['Game_Message_setItemChoice']=Game_Message['prototype']['setItemChoice'],Game_Message[_0x2552df(0x4c3)][_0x2552df(0x541)]=function(_0x894395,_0x3653af){const _0xd81840=_0x2552df;this[_0xd81840(0x255)]=$gameTemp['getSelfTarget'](),VisuMZ[_0xd81840(0x338)][_0xd81840(0x2b4)][_0xd81840(0x4d9)](this,_0x894395,_0x3653af);},VisuMZ['EventsMoveCore'][_0x2552df(0x52a)]=Window_EventItem[_0x2552df(0x4c3)]['onOk'],Window_EventItem['prototype'][_0x2552df(0x310)]=function(){const _0x5548d6=_0x2552df;$gameTemp['registerSelfTarget']($gameMessage[_0x5548d6(0x255)]),VisuMZ[_0x5548d6(0x338)]['Window_EventItem_onOk'][_0x5548d6(0x4d9)](this),$gameTemp[_0x5548d6(0x21c)](),$gameMessage['_selfTargetItemChoice']=undefined;},VisuMZ[_0x2552df(0x338)][_0x2552df(0x1b3)]=Window_EventItem[_0x2552df(0x4c3)][_0x2552df(0x479)],Window_EventItem[_0x2552df(0x4c3)][_0x2552df(0x479)]=function(){const _0x326f73=_0x2552df;$gameTemp[_0x326f73(0x15b)]($gameMessage[_0x326f73(0x255)]),VisuMZ[_0x326f73(0x338)][_0x326f73(0x1b3)]['call'](this),$gameTemp[_0x326f73(0x21c)](),$gameMessage[_0x326f73(0x255)]=undefined;},VisuMZ[_0x2552df(0x338)][_0x2552df(0x2e9)]=Window_Message['prototype']['startMessage'],Window_Message['prototype'][_0x2552df(0x5e0)]=function(){const _0x55e86c=_0x2552df;$gameMessage[_0x55e86c(0x221)](),VisuMZ[_0x55e86c(0x338)][_0x55e86c(0x2e9)]['call'](this),$gameTemp[_0x55e86c(0x21c)]();},VisuMZ['EventsMoveCore']['Window_ScrollText_startMessage']=Window_ScrollText['prototype'][_0x2552df(0x5e0)],Window_ScrollText['prototype'][_0x2552df(0x5e0)]=function(){const _0x2a9df7=_0x2552df;$gameMessage[_0x2a9df7(0x221)](),VisuMZ[_0x2a9df7(0x338)]['Window_ScrollText_startMessage']['call'](this),$gameTemp[_0x2a9df7(0x21c)]();};function Window_EventLabel(){this['initialize'](...arguments);}Window_EventLabel[_0x2552df(0x4c3)]=Object[_0x2552df(0x285)](Window_Base[_0x2552df(0x4c3)]),Window_EventLabel[_0x2552df(0x4c3)][_0x2552df(0x57d)]=Window_EventLabel,Window_EventLabel[_0x2552df(0x4c3)][_0x2552df(0x52e)]=function(_0x13ce09){const _0x4541f9=_0x2552df;this[_0x4541f9(0x42c)]=_0x13ce09;const _0x426550=new Rectangle(0x0,0x0,Graphics[_0x4541f9(0x2c6)]/0x4,this[_0x4541f9(0x25d)](0x1));this['initMembers'](),Window_Base[_0x4541f9(0x4c3)][_0x4541f9(0x52e)][_0x4541f9(0x4d9)](this,_0x426550),this[_0x4541f9(0x56b)]=0x0,this[_0x4541f9(0x270)](0x2),this[_0x4541f9(0x44e)]='';},Window_EventLabel['prototype'][_0x2552df(0x1a3)]=function(){const _0x1f3a06=_0x2552df;this[_0x1f3a06(0x535)]=![],this['_screenZoomScale']=$gameScreen['zoomScale'](),this[_0x1f3a06(0x230)]=this[_0x1f3a06(0x42c)]['screenX'](),this['_eventScreenY']=this[_0x1f3a06(0x42c)][_0x1f3a06(0x3ae)](),this[_0x1f3a06(0x2dc)]=this[_0x1f3a06(0x42c)][_0x1f3a06(0x2c7)][_0x1f3a06(0x42a)],this['_eventLabelOffsetY']=this[_0x1f3a06(0x42c)][_0x1f3a06(0x2c7)][_0x1f3a06(0x34a)],this['_eventPageIndex']=this[_0x1f3a06(0x42c)][_0x1f3a06(0x57b)],this['_cacheVisibility']=this[_0x1f3a06(0x28f)](),this[_0x1f3a06(0x482)]=$gameSystem['eventLabelsVisible'](),this[_0x1f3a06(0x20c)]=$gamePlayer['x'],this[_0x1f3a06(0x4ed)]=$gamePlayer['y'],this[_0x1f3a06(0x4a0)]=this[_0x1f3a06(0x42c)]['x'],this[_0x1f3a06(0x2e6)]=this['_event']['y'];},Window_EventLabel[_0x2552df(0x4c3)]['update']=function(){const _0x25b116=_0x2552df;Window_Base[_0x25b116(0x4c3)]['update'][_0x25b116(0x4d9)](this);if(!this[_0x25b116(0x1ce)]())return;this[_0x25b116(0x31c)](),this['updateScale'](),this[_0x25b116(0x4d7)](),this[_0x25b116(0x19a)]();},Window_EventLabel[_0x2552df(0x4c3)]['needsUpdate']=function(){const _0x301c3a=_0x2552df;if(!this[_0x301c3a(0x42c)])return![];if(!this['_event'][_0x301c3a(0x2c7)])return![];if(this[_0x301c3a(0x2f0)]!==this[_0x301c3a(0x42c)][_0x301c3a(0x57b)])return!![];if(this[_0x301c3a(0x42c)][_0x301c3a(0x5a5)]&&!this[_0x301c3a(0x535)])return!![];if(this[_0x301c3a(0x42c)][_0x301c3a(0x2c7)][_0x301c3a(0x585)]==='')return![];if(this['_screenZoomScale']!==$gameScreen[_0x301c3a(0x530)]())return!![];if(this[_0x301c3a(0x230)]!==this[_0x301c3a(0x42c)]['screenX']())return!![];if(this['_eventScreenY']!==this[_0x301c3a(0x42c)][_0x301c3a(0x3ae)]())return!![];if(this['_eventLabelOffsetX']!==this[_0x301c3a(0x42c)][_0x301c3a(0x2c7)][_0x301c3a(0x42a)])return!![];if(this[_0x301c3a(0x3a8)]!==this['_event'][_0x301c3a(0x2c7)][_0x301c3a(0x34a)])return!![];if(this['_visiblePlayerX']!==$gamePlayer['x'])return!![];if(this[_0x301c3a(0x4ed)]!==$gamePlayer['y'])return!![];if(this[_0x301c3a(0x4a0)]!==this[_0x301c3a(0x42c)]['x'])return!![];if(this[_0x301c3a(0x2e6)]!==this['_event']['y'])return!![];if(this[_0x301c3a(0x482)]!==$gameSystem['eventLabelsVisible']())return!![];if(this['_cacheVisibility']&&this['contentsOpacity']<0xff)return!![];if(!this[_0x301c3a(0x39a)]&&this[_0x301c3a(0x56b)]>0x0)return!![];if(SceneManager[_0x301c3a(0x3d0)]['_encounterEffectDuration']>0x0)return!![];return![];},Window_EventLabel[_0x2552df(0x4c3)][_0x2552df(0x31c)]=function(){const _0x41b729=_0x2552df;this[_0x41b729(0x42c)][_0x41b729(0x3fe)]()!==this[_0x41b729(0x44e)]&&(this['_text']=this[_0x41b729(0x42c)][_0x41b729(0x3fe)](),this['refresh']());},Window_EventLabel[_0x2552df(0x4c3)][_0x2552df(0x4d4)]=function(){const _0x2053af=_0x2552df;this['scale']['x']=0x1/$gameScreen[_0x2053af(0x530)](),this[_0x2053af(0x4fb)]['y']=0x1/$gameScreen[_0x2053af(0x530)](),this[_0x2053af(0x3cd)]=$gameScreen[_0x2053af(0x530)]();},Window_EventLabel['prototype'][_0x2552df(0x4d7)]=function(){const _0x970fb1=_0x2552df;if(!SceneManager[_0x970fb1(0x3d0)])return;if(!SceneManager['_scene'][_0x970fb1(0x157)])return;const _0x14eef5=SceneManager[_0x970fb1(0x3d0)][_0x970fb1(0x157)]['findTargetSprite'](this[_0x970fb1(0x42c)]);if(!_0x14eef5)return;this['x']=Math[_0x970fb1(0x594)](this[_0x970fb1(0x42c)][_0x970fb1(0x2b3)]()-Math[_0x970fb1(0x43c)](this[_0x970fb1(0x262)]*this[_0x970fb1(0x4fb)]['x']/0x2)),this['x']+=this['_event'][_0x970fb1(0x2c7)]['offsetX'],this['y']=this[_0x970fb1(0x42c)][_0x970fb1(0x3ae)]()-_0x14eef5['height'],this['y']+=Math[_0x970fb1(0x594)]($gameSystem[_0x970fb1(0x211)]()*0.5),this['y']-=Math[_0x970fb1(0x594)](this[_0x970fb1(0x4ff)]*this[_0x970fb1(0x4fb)]['y']),this['y']+=this[_0x970fb1(0x42c)]['_labelWindow']['offsetY'],this[_0x970fb1(0x535)]=this[_0x970fb1(0x42c)][_0x970fb1(0x5a5)],this[_0x970fb1(0x230)]=this[_0x970fb1(0x42c)][_0x970fb1(0x2b3)](),this['_eventScreenY']=this[_0x970fb1(0x42c)][_0x970fb1(0x3ae)](),this['_eventLabelOffsetX']=this[_0x970fb1(0x42c)][_0x970fb1(0x2c7)][_0x970fb1(0x42a)],this[_0x970fb1(0x3a8)]=this[_0x970fb1(0x42c)][_0x970fb1(0x2c7)][_0x970fb1(0x34a)],this[_0x970fb1(0x2f0)]=this[_0x970fb1(0x42c)][_0x970fb1(0x57b)];if(this[_0x970fb1(0x535)]){if(_0x970fb1(0x288)===_0x970fb1(0x23f))return _0x41a1e2['EventsMoveCore']['Settings'][_0x970fb1(0x210)][_0x970fb1(0x59b)];else this['contentsOpacity']=0x0;}},Window_EventLabel['prototype'][_0x2552df(0x19a)]=function(){const _0x2f18c3=_0x2552df;if(this[_0x2f18c3(0x28f)]())this[_0x2f18c3(0x56b)]+=this[_0x2f18c3(0x5d9)]();else{if(SceneManager[_0x2f18c3(0x3d0)][_0x2f18c3(0x271)]>0x0){if(_0x2f18c3(0x1d5)==='VBKDy'){const _0x4224b8=this[_0x2f18c3(0x30d)]['mapId'],_0xb14440=this[_0x2f18c3(0x30d)]['eventId'];return _0x32bfea[_0x2f18c3(0x18a)][_0x4224b8]['events'][_0xb14440];}else this[_0x2f18c3(0x56b)]=0x0;}else{if('qvJZd'!==_0x2f18c3(0x4e1))this[_0x2f18c3(0x56b)]-=this['opacitySpeed']();else{const _0x14222a=_0xed2dd7[_0x2f18c3(0x5ba)][_0x45c531];if(!_0x14222a)return;_0x42b230=_0x14222a[_0x2f18c3(0x2d1)],_0x912c15=_0x14222a[_0x2f18c3(0x196)];}}}},Window_EventLabel['prototype'][_0x2552df(0x28f)]=function(){const _0x7919c=_0x2552df;if(!$gameSystem['eventLabelsVisible']())return![];if(this[_0x7919c(0x42c)]?.['_erased'])return![];if(SceneManager[_0x7919c(0x3d0)][_0x7919c(0x271)]>0x0)return![];const _0x4792f4=$gamePlayer['x'],_0x4e901f=$gamePlayer['y'],_0x4b3fca=this[_0x7919c(0x42c)]['x'],_0x1b342d=this[_0x7919c(0x42c)]['y'];if(this['_visiblePlayerX']===_0x4792f4&&this[_0x7919c(0x4ed)]===_0x4e901f&&this['_visibleEventX']===_0x4b3fca&&this[_0x7919c(0x2e6)]===_0x1b342d)return this['_cacheVisibility'];this['_visiblePlayerX']=$gamePlayer['x'],this['_visiblePlayerY']=$gamePlayer['y'],this['_visibleEventX']=this['_event']['x'],this[_0x7919c(0x2e6)]=this[_0x7919c(0x42c)]['y'];if($gameMap[_0x7919c(0x3f3)](_0x4792f4,_0x4e901f,_0x4b3fca,_0x1b342d)>this['_event'][_0x7919c(0x252)]())return _0x7919c(0x464)!==_0x7919c(0x464)?this[_0x7919c(0x1d8)](_0x2865c3):(this[_0x7919c(0x39a)]=![],![]);return this[_0x7919c(0x39a)]=!![],!![];},Window_EventLabel['prototype'][_0x2552df(0x5d9)]=function(){const _0x577071=_0x2552df;return VisuMZ[_0x577071(0x338)][_0x577071(0x30c)][_0x577071(0x2a3)][_0x577071(0x192)];},Window_EventLabel[_0x2552df(0x4c3)][_0x2552df(0x58e)]=function(){const _0x4be27a=_0x2552df,_0x38078f=this[_0x4be27a(0x53f)](this[_0x4be27a(0x44e)]);this[_0x4be27a(0x262)]=_0x38078f[_0x4be27a(0x262)]+($gameSystem[_0x4be27a(0x211)]()+this[_0x4be27a(0x584)]())*0x2,this[_0x4be27a(0x4ff)]=Math[_0x4be27a(0x504)](this['lineHeight'](),_0x38078f[_0x4be27a(0x4ff)])+$gameSystem[_0x4be27a(0x211)]()*0x2,this['createContents']();},Window_EventLabel[_0x2552df(0x4c3)][_0x2552df(0x525)]=function(){const _0x466ce1=_0x2552df;return VisuMZ[_0x466ce1(0x338)]['Settings'][_0x466ce1(0x2a3)][_0x466ce1(0x496)];},Window_EventLabel[_0x2552df(0x4c3)][_0x2552df(0x2f3)]=function(){const _0x4fa571=_0x2552df;Window_Base[_0x4fa571(0x4c3)][_0x4fa571(0x2f3)][_0x4fa571(0x4d9)](this),this['contents'][_0x4fa571(0x245)]=this[_0x4fa571(0x4f6)]();},Window_EventLabel[_0x2552df(0x4c3)][_0x2552df(0x4f6)]=function(){const _0x4aacf5=_0x2552df;return VisuMZ['EventsMoveCore']['Settings'][_0x4aacf5(0x2a3)]['FontSize'];},Window_EventLabel[_0x2552df(0x4c3)][_0x2552df(0x32e)]=function(){const _0x4eb51b=_0x2552df;this['resizeWindow'](),this[_0x4eb51b(0x2a0)][_0x4eb51b(0x2a7)]();const _0x4acaa5=this[_0x4eb51b(0x44e)][_0x4eb51b(0x3f9)](/[\r\n]+/);let _0x3fe423=0x0;for(const _0x21f214 of _0x4acaa5){const _0x3eabbc=this[_0x4eb51b(0x53f)](_0x21f214),_0x2e24f=Math[_0x4eb51b(0x43c)]((this[_0x4eb51b(0x139)]-_0x3eabbc['width'])/0x2);this[_0x4eb51b(0x2f9)](_0x21f214,_0x2e24f,_0x3fe423),_0x3fe423+=_0x3eabbc[_0x4eb51b(0x4ff)];}},Window_EventLabel[_0x2552df(0x4c3)][_0x2552df(0x18f)]=function(_0x1c8894,_0xd29b8a){const _0x2189df=_0x2552df;_0xd29b8a[_0x2189df(0x446)]&&(_0x2189df(0x452)===_0x2189df(0x22f)?(_0x4493a5['prototype'][_0x2189df(0x23e)][_0x2189df(0x4d9)](this),this[_0x2189df(0x4f7)]()):this[_0x2189df(0x34b)](_0x1c8894,_0xd29b8a['x']+0x2,_0xd29b8a['y'])),_0xd29b8a['x']+=Math[_0x2189df(0x34d)](this[_0x2189df(0x3e0)](),ImageManager[_0x2189df(0x455)])+0x4;},Window_EventLabel[_0x2552df(0x4c3)][_0x2552df(0x34b)]=function(_0x512b1d,_0x9655ed,_0xce3713){const _0x30926f=_0x2552df,_0x2503b5=ImageManager['loadSystem']('IconSet'),_0x3008b3=ImageManager[_0x30926f(0x455)],_0x5ef2db=ImageManager['iconHeight'],_0x36769a=_0x512b1d%0x10*_0x3008b3,_0x1b5b71=Math[_0x30926f(0x43c)](_0x512b1d/0x10)*_0x5ef2db,_0x10c624=Math[_0x30926f(0x34d)](this['iconSize']()),_0x388298=Math[_0x30926f(0x34d)](this[_0x30926f(0x3e0)]());this['contents'][_0x30926f(0x1a9)](_0x2503b5,_0x36769a,_0x1b5b71,_0x3008b3,_0x5ef2db,_0x9655ed,_0xce3713,_0x10c624,_0x388298);},Window_EventLabel['prototype'][_0x2552df(0x3e0)]=function(){const _0x3baf33=_0x2552df;return VisuMZ[_0x3baf33(0x338)]['Settings'][_0x3baf33(0x2a3)][_0x3baf33(0x2e1)];};