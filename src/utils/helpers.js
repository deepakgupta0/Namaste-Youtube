export const formatViews = (number) => {
  return Intl.NumberFormat("en", { notation: "compact" }).format(number);
};
var nameList = [
  "Time",
  "Past",
  "Future",
  "Dev",
  "Fly",
  "Flying",
  "Soar",
  "Soaring",
  "Power",
  "Falling",
  "Fall",
  "Jump",
  "Cliff",
  "Mountain",
  "Rend",
  "Red",
  "Blue",
  "Green",
  "Yellow",
  "Gold",
  "Demon",
  "Demonic",
  "Panda",
  "Cat",
  "Kitty",
  "Kitten",
  "Zero",
  "Memory",
  "Trooper",
  "XX",
  "Bandit",
  "Fear",
  "Light",
  "Glow",
  "Tread",
  "Deep",
  "Deeper",
  "Deepest",
  "Mine",
  "Your",
  "Worst",
  "Enemy",
  "Hostile",
  "Force",
  "Video",
  "Game",
  "Donkey",
  "Mule",
  "Colt",
  "Cult",
  "Cultist",
  "Magnum",
  "Gun",
  "Assault",
  "Recon",
  "Trap",
  "Trapper",
  "Redeem",
  "Code",
  "Script",
  "Writer",
  "Near",
  "Close",
  "Open",
  "Cube",
  "Circle",
  "Geo",
  "Genome",
  "Germ",
  "Spaz",
  "Shot",
  "Echo",
  "Beta",
  "Alpha",
  "Gamma",
  "Omega",
  "Seal",
  "Squid",
  "Money",
  "Cash",
  "Lord",
  "King",
  "Duke",
  "Rest",
  "Fire",
  "Flame",
  "Morrow",
  "Break",
  "Breaker",
  "Numb",
  "Ice",
  "Cold",
  "Rotten",
  "Sick",
  "Sickly",
  "Janitor",
  "Camel",
  "Rooster",
  "Sand",
  "Desert",
  "Dessert",
  "Hurdle",
  "Racer",
  "Eraser",
  "Erase",
  "Big",
  "Small",
  "Short",
  "Tall",
  "Sith",
  "Bounty",
  "Hunter",
  "Cracked",
  "Broken",
  "Sad",
  "Happy",
  "Joy",
  "Joyful",
  "Crimson",
  "Destiny",
  "Deceit",
  "Lies",
  "Lie",
  "Honest",
  "Destined",
  "Bloxxer",
  "Hawk",
  "Eagle",
  "Hawker",
  "Walker",
  "Zombie",
  "Sarge",
  "Capt",
  "Captain",
  "Punch",
  "One",
  "Two",
  "Uno",
  "Slice",
  "Slash",
  "Melt",
  "Melted",
  "Melting",
  "Fell",
  "Wolf",
  "Hound",
  "Legacy",
  "Sharp",
  "Dead",
  "Mew",
  "Chuckle",
  "Bubba",
  "Bubble",
  "Sandwich",
  "Smasher",
  "Extreme",
  "Multi",
  "Universe",
  "Ultimate",
  "Death",
  "Ready",
  "Monkey",
  "Elevator",
  "Wrench",
  "Grease",
  "Head",
  "Theme",
  "Grand",
  "Cool",
  "Kid",
  "Boy",
  "Girl",
  "Vortex",
  "Paradox",
];
const comments = [
  "This video is amazing!",
  "I've never seen anything like this before.",
  "Can't stop watching!",
  "Great content, keep it up!",
  "I learned so much from this video.",
  "This video changed my life.",
  "I wish more people would see this.",
  "I'm speechless, just wow.",
  "I can't believe this is free.",
  "Subscribed! Can't wait for more.",
  "This deserves more views.",
  "Thank you for sharing this.",
  "Mind blown!",
  "This needs to go viral.",
  "I'm sharing this with everyone I know.",
  "I've watched this multiple times.",
  "You're a genius!",
  "This made my day.",
  "I'm so grateful for this video.",
  "My favorite video on the internet.",
  "I can't get enough of this.",
  "This video deserves an award.",
  "I'm in awe of this.",
  "How is this not trending?",
  "Best video ever!",
  "I can't believe I didn't find this sooner.",
  "This video is a masterpiece.",
  "This is the kind of content I live for.",
  "I'm addicted to this video.",
  "This should be taught in schools.",
  "I'm obsessed with this video.",
  "I could watch this all day.",
  "I'm sharing this everywhere.",
  "This video should have millions of views.",
  "I want to meet the person who made this.",
  "This video deserves to be famous.",
  "I can't stop laughing/watching/crying.",
  "This video is pure gold.",
  "I can't stop thinking about this video.",
  "I'm telling all my friends about this.",
  "This video made my week/month/year.",
  "I wish I could like this video more than once.",
  "This video is a work of art.",
  "I'm blown away by this video.",
  "This video is the reason I love the internet.",
  "I'm hooked on this video.",
  "This video should be shown to everyone.",
  "I'm so glad I found this video.",
  "This video is a game changer.",
  "I'm obsessed with this channel now.",
  "This video is too good to be true.",
  "I can't believe this video exists.",
  "This video should be on every TV screen.",
  "I'm going to watch this every day.",
  "This video is my new favorite thing.",
  "I'm addicted to this channel now.",
  "This video is a hidden gem.",
  "I can't get over how good this video is.",
  "This video is a breath of fresh air.",
  "I'm so impressed by this video.",
  "This video is a true masterpiece.",
  "I'm so grateful for this channel.",
  "This video is the highlight of my day.",
  "I'm so glad I clicked on this video.",
  "This video is a game changer.",
  "I can't get enough of this channel.",
  "This video is the best thing I've ever seen.",
  "I'm obsessed with this video.",
  "This video is my new obsession.",
  "I'm so happy I found this channel.",
  "This video is pure joy.",
  "I'm so inspired by this video.",
  "This video is a must-watch.",
  "I'm blown away by this channel.",
  "This video is life-changing.",
  "I can't stop watching this video.",
  "This video is a true gem.",
  "I'm so thankful for this video.",
  "This video is a masterpiece.",
  "I'm so addicted to this video.",
  "This video is a work of art.",
  "I'm so moved by this video.",
  "This video is a gift to the world.",
  "I'm so in love with this video.",
  "This video is a treasure.",
  "I'm so captivated by this video.",
  "This video is pure magic.",
  "I'm so enchanted by this video.",
  "This video is a marvel.",
  "I'm so entranced by this video.",
  "This video is a wonder.",
  "I'm so mesmerized by this video.",
  "This video is pure genius.",
  "I'm so enthralled by this video.",
  "This video is a revelation.",
  "I'm so spellbound by this video.",
  "This video is a delight.",
  "I'm so thrilled by this video.",
  "This video is a joy.",
  "I'm so excited by this video.",
  "This video is a pleasure.",
  "I'm so impressed by this video.",
  "This video is a sensation.",
  "I'm so inspired by this video.",
  "This video is a triumph.",
  "I'm so touched by this video.",
  "This video is a miracle.",
  "I'm so uplifted by this video.",
  "This video is a blessing.",
  "I'm so awed by this video.",
  "This video is a marvel.",
  "I'm so amazed by this video.",
  "This video is a wonder.",
  "I'm so dazzled by this video.",
  "This video is a masterpiece.",
  "I'm so fascinated by this video.",
  "This video is a gem.",
  "I'm so captivated by this video.",
  "This video is a treasure.",
  "I'm so enchanted by this video.",
  "This video is a delight.",
  "I'm so enthralled by this video.",
  "This video is a joy.",
  "I'm so mesmerized by this video.",
  "This video is a pleasure.",
  "I'm so spellbound by this video.",
  "This video is a marvel.",
  "I'm so thrilled by this video.",
  "This video is a sensation.",
  "I'm so excited by this video.",
  "This video is a triumph.",
  "I'm so impressed by this video.",
  "This video is a revelation.",
  "I'm so inspired by this video.",
  "This video is a joy.",
  "I'm so touched by this video.",
  "This video is a miracle.",
  "I'm so uplifted by this video.",
  "This video is a blessing.",
  "I'm so awed by this video.",
  "This video is a marvel.",
  "I'm so amazed by this video.",
  "This video is a wonder.",
  "I'm so dazzled by this video.",
  "This video is a masterpiece.",
  "I'm so fascinated by this video.",
  "This video is a gem.",
  "I'm so captivated by this video.",
  "This video is a treasure.",
  "I'm so enchanted by this video.",
  "This video is a delight.",
  "I'm so enthralled by this video.",
  "This video is a joy.",
  "I'm so mesmerized by this video.",
  "This video is a pleasure.",
  "I'm so spellbound by this video.",
  "This video is a marvel.",
  "I'm so thrilled by this video.",
  "This video is a sensation.",
  "I'm so excited by this video.",
  "This video is a triumph.",
  "I'm so impressed by this video.",
  "This video is a revelation.",
  "I'm so inspired by this video.",
  "This video is a joy.",
  "I'm so touched by this video.",
  "This video is a miracle.",
  "I'm so uplifted by this video.",
  "This video is a blessing.",
  "I'm so awed by this video.",
  "This video is a marvel.",
  "I'm so amazed by this video.",
  "This video is a wonder.",
  "I'm so dazzled by this video.",
  "This video is a masterpiece.",
  "I'm so fascinated by this video.",
  "This video is a gem.",
  "I'm so captivated by this video.",
  "This video is a treasure.",
  "I'm so enchanted by this video.",
  "This video is a delight.",
  "I'm so enthralled by this video.",
  "This video is a joy.",
  "I'm so mesmerized by this video.",
  "This video is a pleasure.",
  "I'm so spellbound by this video.",
  "This video is a marvel.",
  "I'm so thrilled by this video.",
  "This video is a sensation.",
  "I'm so excited by this video.",
  "This video is a triumph.",
  "I'm so impressed by this video.",
  "This video is a revelation.",
  "I'm so inspired by this video.",
  "This video is a joy.",
  "I'm so touched by this video.",
  "This video is a miracle.",
  "I'm so uplifted by this video.",
  "This video is a blessing.",
  "I'm so awed by this video.",
  "This video is a marvel.",
  "I'm so amazed by this video.",
  "This video is a wonder.",
  "I'm so dazzled by this video.",
  "This video is a masterpiece.",
  "I'm so fascinated by this video.",
  "This video is a gem.",
  "I'm so captivated by this video.",
  "This video is a treasure.",
  "I'm so enchanted by this video.",
  "This video is a delight.",
  "I'm so enthralled by this video.",
  "This video is a joy.",
  "I'm so mesmerized by this video.",
  "This video is a pleasure.",
  "I'm so spellbound by this video.",
  "This video is a marvel.",
  "I'm so thrilled by this video.",
  "This video is a sensation.",
  "I'm so excited by this video.",
  "This video is a triumph.",
  "I'm so impressed by this video.",
  "This video is a revelation.",
  "I'm so inspired by this video.",
  "This video is a joy.",
  "I'm so touched by this video.",
  "This video is a miracle.",
  "I'm so uplifted by this video.",
  "This video is a blessing.",
  "I'm so awed by this video.",
  "This video is a marvel.",
  "I'm so amazed by this video.",
  "This video is a wonder.",
  "I'm so dazzled by this video.",
  "This video is a masterpiece.",
  "I'm so fascinated by this video.",
  "This video is a gem.",
  "I'm so captivated by this video.",
  "This video is a treasure.",
  "I'm so enchanted by this video.",
  "This video is a delight.",
  "I'm so enthralled by this video.",
  "This video is a joy.",
  "I'm so mesmerized by this video.",
  "This video is a pleasure.",
  "I'm so spellbound by this video.",
  "This video is a marvel.",
  "I'm so thrilled by this video.",
  "This video is a sensation.",
  "I'm so excited by this video.",
  "This video is a triumph.",
  "I'm so impressed by this video.",
  "This video is a revelation.",
  "I'm so inspired by this video.",
  "This video is a joy.",
  "I'm so touched by this video.",
  "This video is a miracle.",
  "I'm so uplifted by this video.",
  "This video is a blessing.",
  "I'm so awed by this video.",
  "This video is a marvel.",
  "I'm so amazed by this video.",
  "This video is a wonder.",
  "I'm so dazzled by this video.",
  "This video is a masterpiece.",
  "I'm so fascinated by this video.",
  "This video is a gem.",
  "I'm so captivated by this video.",
  "This video is a treasure.",
  "I'm so enchanted by this video.",
  "This video is a delight.",
  "I'm so enthralled by this video.",
  "This video is a joy.",
  "I'm so mesmerized by this video.",
  "This video is a pleasure.",
  "I'm so spellbound by this video.",
  "This video is a marvel.",
  "I'm so thrilled by this video.",
  "This video is a sensation.",
  "I'm so excited by this video.",
  "This video is a triumph.",
  "I'm so impressed by this video.",
  "This video is a revelation.",
  "I'm so inspired by this video.",
  "This video is a joy.",
  "I'm so touched by this video.",
  "This video is a miracle.",
  "I'm so uplifted by this video.",
  "This video is a blessing.",
  "I'm so awed by this video.",
  "This video is a marvel.",
  "I'm so amazed by this video.",
  "This video is a wonder.",
  "I'm so dazzled by this video.",
  "This video is a masterpiece.",
  "I'm so fascinated by this video.",
  "This video is a gem.",
  "I'm so captivated by this video.",
  "This video is a treasure.",
  "I'm so enchanted by this video.",
  "This video is a delight.",
  "I'm so enthralled by this video.",
  "This video is a joy.",
  "I'm so mesmerized by this video.",
  "This video is a pleasure.",
  "I'm so spellbound by this video.",
  "This video is a marvel.",
  "I'm so thrilled by this video.",
  "This video is a sensation.",
  "I'm so excited by this video.",
  "This video is a triumph.",
  "I'm so impressed by this video.",
  "This video is a revelation.",
  "I'm so inspired by this video.",
  "This video is a joy.",
  "I'm so touched by this video.",
  "This video is a miracle.",
  "I'm so uplifted by this video.",
  "This video is a blessing.",
  "I'm so awed by this video.",
  "This video is a marvel.",
  "I'm so amazed by this video.",
  "This video is a wonder.",
  "I'm so dazzled by this video.",
];

export function generateRandomName() {
  return nameList[Math.floor(Math.random() * nameList.length)];
}

export function makeRandomMessage() {
  return comments[Math.floor(Math.random() * comments.length)];
}

export const findPrime = (num) => {
  let i,
    primes = [2, 3],
    n = 5;
  const isPrime = (n) => {
    let i = 1,
      p = primes[i],
      limit = Math.ceil(Math.sqrt(n));
    while (p <= limit) {
      if (n % p === 0) {
        return false;
      }
      i += 1;
      p = primes[i];
    }
    return true;
  };
  for (i = 2; i <= num; i += 1) {
    while (!isPrime(n)) {
      n += 2;
    }
    primes.push(n);
    n += 2;
  }
  return primes[num - 1];
};
