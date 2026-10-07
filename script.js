"use strict";

/* ============ QUESTIONS ============
   Q(category, difficulty, question, [correct answer, wrong, wrong, wrong], explanation)
   The correct answer is always written FIRST here; it is shuffled when the game runs.
   Each entry becomes: {category, difficulty, question, answers, correct:0, explanation}  */
const Q = (category, difficulty, question, answers, explanation) =>
  ({ category, difficulty, question, answers, correct: 0, explanation });

const QUESTIONS = [
  // General Knowledge
  Q("General Knowledge","easy","What is the smallest country in the world by area?",["Vatican City","Monaco","Malta","San Marino"],"Vatican City covers about 0.44 km². You could walk across it in minutes."),
  Q("General Knowledge","easy","How many sides does a standard stop sign have?",["8","6","7","10"],"Stop signs are octagons so they're recognisable even from behind or covered in snow."),
  Q("General Knowledge","medium","How many hearts does an octopus have?",["3","1","2","5"],"Two pump blood through the gills, one pumps it around the body."),
  Q("General Knowledge","medium","What is the capital of Australia?",["Canberra","Sydney","Melbourne","Perth"],"Canberra was purpose-built as a compromise between rivals Sydney and Melbourne."),
  Q("General Knowledge","medium","Which is the only mammal capable of true flight?",["Bat","Flying squirrel","Sugar glider","Colugo"],"Others just glide. Bats actually flap, and there are over 1,400 species."),
  Q("General Knowledge","hard","Which country has the most time zones, counting overseas territories?",["France","Russia","USA","United Kingdom"],"France's territories scattered across the globe give it 12 or more."),
  Q("General Knowledge","easy","Which is the longest river in Africa?",["Nile","Congo","Niger","Zambezi"],"The Nile flows about 6,650 km through eleven countries."),

  // Random & Funny
  Q("Random & Funny","easy","A group of crows is called a...?",["Murder","Parliament","Gossip","Mob"],"Yes, really. A group of owls is a parliament, though."),
  Q("Random & Funny","medium","What shape is wombat poop?",["Cubes","Spheres","Pyramids","Tubes"],"Their intestines shape it into cubes so it stacks and stays put as a territory marker."),
  Q("Random & Funny","medium","A group of flamingos is called a...?",["Flamboyance","Pinkery","Blush","Parade"],"Flamboyance. It was never going to be anything else."),
  Q("Random & Funny","medium","Botanically speaking, a banana is a...?",["Berry","Nut","Root vegetable","Vegetable"],"Botanically, bananas are berries. Strawberries are not."),
  Q("Random & Funny","hard","Which animal can sleep for up to three years?",["Snail","Sloth","Bear","Koala"],"Snails can hibernate or estivate for years when conditions are rough."),
  Q("Random & Funny","hard","Oxford University is older than which empire?",["The Aztec Empire","The Roman Empire","The Mongol Empire","The Ottoman Empire"],"Teaching at Oxford began around 1096. The Aztec capital was founded in 1325."),
  Q("Random & Funny","medium","Whose fingerprints are so similar to humans' they can confuse crime scenes?",["Koalas","Chimpanzees","Raccoons","Otters"],"Koalas have human-like fingerprints, a case of convergent evolution."),

  // Football
  Q("Football","easy","Which country won the 2022 World Cup?",["Argentina","France","Brazil","Croatia"],"Argentina beat France on penalties after a 3-3 draw in Qatar."),
  Q("Football","easy","Which club is nicknamed 'The Gunners'?",["Arsenal","Chelsea","Tottenham","West Ham"],"Arsenal started life as a workers' team at the Royal Arsenal armaments factory."),
  Q("Football","easy","Which country has won the most men's World Cups?",["Brazil","Germany","Italy","Argentina"],"Brazil has won five: 1958, 1962, 1970, 1994 and 2002."),
  Q("Football","medium","What is Kenya's national team nicknamed?",["Harambee Stars","Simba Boys","Safari Lions","Rift Eagles"],"Harambee means 'pulling together' in Swahili."),
  Q("Football","medium","Who scored the infamous 'Hand of God' goal?",["Diego Maradona","Pelé","Thierry Henry","Luis Suárez"],"Maradona did it against England at the 1986 World Cup, minutes before his wonder goal."),
  Q("Football","medium","Which African nation became the first to reach a World Cup semi-final, in 2022?",["Morocco","Senegal","Ghana","Cameroon"],"Morocco's run in Qatar beat Spain and Portugal on the way."),
  Q("Football","hard","Who is the Premier League's all-time top scorer?",["Alan Shearer","Harry Kane","Wayne Rooney","Thierry Henry"],"Shearer scored 260 Premier League goals. Kane is closest to catching him."),

  // Music
  Q("Music","easy","Which artist released the album 'Thriller'?",["Michael Jackson","Prince","Stevie Wonder","Usher"],"Thriller (1982) is among the best-selling albums of all time."),
  Q("Music","easy","How many strings does a standard guitar have?",["6","4","5","8"],"Standard tuning from low to high is E-A-D-G-B-E."),
  Q("Music","medium","Which Kenyan duo sang 'Unbwogable'?",["Gidi Gidi Maji Maji","Sauti Sol","Camp Mulla","Mejja & Kristoff"],"The 2002 hit became an unofficial anthem for a whole political moment in Kenya."),
  Q("Music","medium","Who released the hit 'Last Last'?",["Burna Boy","Wizkid","Davido","Rema"],"Burna Boy's 2022 track samples Toni Braxton's 'Spanish Guitar'."),
  Q("Music","medium","Hip-hop was born in which New York borough?",["The Bronx","Brooklyn","Queens","Harlem"],"Block parties in the Bronx in the 1970s, with DJ Kool Herc as a key pioneer."),
  Q("Music","easy","Which instrument has 88 keys?",["Piano","Organ","Accordion","Harp"],"52 white keys and 36 black keys on a standard piano."),
  Q("Music","hard","Who has won the most Grammy Awards of all time?",["Beyoncé","Quincy Jones","Taylor Swift","Georg Solti"],"Beyoncé overtook the old record held by conductor Georg Solti."),

  // Movies & TV
  Q("Movies & TV","easy","Which film features the line 'I'll be back'?",["The Terminator","Predator","Die Hard","RoboCop"],"Arnold Schwarzenegger's delivery turned it into a catchphrase for life."),
  Q("Movies & TV","easy","What is the name of the fictional African nation in Black Panther?",["Wakanda","Zamunda","Genovia","Latveria"],"Wakanda's hidden tech is powered by vibranium."),
  Q("Movies & TV","medium","Which was the first non-English-language film to win Best Picture at the Oscars?",["Parasite","Roma","Amélie","Life Is Beautiful"],"Parasite made history in 2020."),
  Q("Movies & TV","medium","What does 'Simba' mean in Swahili?",["Lion","King","Brave","Pride"],"Mufasa means 'king' in the Manazoto language. Simba is straight-up lion."),
  Q("Movies & TV","medium","What was the first fully computer-animated feature film?",["Toy Story","Shrek","A Bug's Life","Antz"],"Toy Story (1995) took four years to make."),
  Q("Movies & TV","easy","Which character in Stranger Things has telekinetic powers?",["Eleven","Max","Will","Nancy"],"Eleven's real name is Jane Hopper."),
  Q("Movies & TV","hard","Which film holds the record for highest worldwide box office, unadjusted for inflation?",["Avatar","Avengers: Endgame","Titanic","Star Wars: The Force Awakens"],"Avatar re-releases keep pushing it past Endgame."),

  // Kenya
  Q("Kenya","easy","In which year did Kenya gain independence?",["1963","1960","1970","1957"],"Kenya became independent on 12 December 1963."),
  Q("Kenya","easy","What is the highest mountain in Kenya?",["Mount Kenya","Mount Elgon","Mount Longonot","Mount Kilimanjaro"],"At 5,199 m, it's the second-highest peak in Africa."),
  Q("Kenya","easy","Wangari Maathai's Green Belt Movement planted millions of what?",["Trees","Coffee bushes","Tea plants","Sunflowers"],"She became the first African woman to win the Nobel Peace Prize, in 2004."),
  Q("Kenya","medium","Which is the largest lake lying entirely within Kenya?",["Lake Turkana","Lake Victoria","Lake Naivasha","Lake Nakuru"],"Turkana is the world's largest permanent desert lake, nicknamed the Jade Sea."),
  Q("Kenya","medium","The Great Migration wildebeest cross which river into Kenya?",["Mara","Tana","Athi","Galana"],"The Mara crossings are one of the most dramatic wildlife events on Earth."),
  Q("Kenya","medium","Which of these is NOT one of the Big Five?",["Giraffe","Lion","Leopard","Rhino"],"The Big Five are lion, leopard, elephant, rhino and buffalo."),
  Q("Kenya","medium","Which Rift Valley lake is famous for huge flocks of flamingos?",["Lake Nakuru","Lake Baringo","Lake Victoria","Lake Jipe"],"Flamingo numbers shift with water levels and algae."),
  Q("Kenya","hard","The Equator crosses Kenya near which town?",["Nanyuki","Nyeri","Naivasha","Nakuru"],"Stand on the line at Nanyuki and you straddle both hemispheres."),

  // Science
  Q("Science","easy","What is the chemical symbol for gold?",["Au","Ag","Go","Gd"],"Au comes from the Latin 'aurum'."),
  Q("Science","easy","What is the powerhouse of the cell?",["Mitochondria","Nucleus","Ribosome","Golgi body"],"Mitochondria turn food into usable energy (ATP)."),
  Q("Science","medium","Which planet is the hottest in our solar system?",["Venus","Mercury","Mars","Jupiter"],"Venus's thick CO₂ atmosphere traps heat, hotter than Mercury despite being farther away."),
  Q("Science","medium","How many bones does an adult human have?",["206","180","256","312"],"Babies have around 300, many of which fuse as they grow."),
  Q("Science","medium","What is the most abundant gas in Earth's atmosphere?",["Nitrogen","Oxygen","Carbon dioxide","Argon"],"Nitrogen is about 78% of the air. Oxygen is only about 21%."),
  Q("Science","medium","Which metal is liquid at room temperature?",["Mercury","Lead","Tin","Sodium"],"Mercury melts at -39 °C."),
  Q("Science","hard","What is absolute zero in degrees Celsius?",["-273.15 °C","-100 °C","-459 °C","-373.15 °C"],"At absolute zero, particles have minimal thermal motion."),

  // Weird & Dark Facts
  Q("Weird & Dark Facts","easy","Which volcano buried Pompeii in 79 AD?",["Vesuvius","Etna","Stromboli","Krakatoa"],"The ash preserved bodies, bread and even graffiti."),
  Q("Weird & Dark Facts","medium","Which animal is responsible for the most human deaths each year?",["Mosquito","Snake","Lion","Hippo"],"Mosquitoes spread malaria and other diseases, killing hundreds of thousands yearly."),
  Q("Weird & Dark Facts","medium","The seeds of which common fruit contain cyanide compounds?",["Apple","Banana","Mango","Orange"],"You'd need to chew a lot of crushed seeds for it to matter. Don't try it."),
  Q("Weird & Dark Facts","medium","The Black Death in the 1300s was caused by which disease?",["Plague","Smallpox","Cholera","Typhoid"],"It killed an estimated third or more of Europe's population."),
  Q("Weird & Dark Facts","hard","Cleopatra lived closer in time to which event than to the building of the Great Pyramid?",["The Moon landing","The fall of Rome","The Magna Carta","The printing press"],"The pyramids were about 2,500 years before her. The Moon landing was about 2,000 years after."),
  Q("Weird & Dark Facts","hard","The 1896 Anglo-Zanzibar War, the shortest war on record, lasted about how long?",["40 minutes","4 hours","2 days","1 week"],"A British fleet shelled the palace until the Sultan's forces gave up."),
  Q("Weird & Dark Facts","medium","Humans share roughly how much of their genes with bananas?",["About 60%","About 5%","About 25%","About 90%"],"Basic cell machinery is shared across all life."),

  // Dating & Relationships
  Q("Dating & Relationships","easy","What does 'ghosting' mean?",["Cutting off contact with no explanation","Dressing up for Halloween","Texting too much","Meeting in a haunted place"],"Ghosting is vanishing from someone's life without a word."),
  Q("Dating & Relationships","easy","What is a 'situationship'?",["A romantic thing with no clear label","A group date","A marriage proposal","An ex who texts back"],"More than friends, less than official, and nobody will say what it is."),
  Q("Dating & Relationships","easy","Which of these is one of the five love languages?",["Quality time","Eye contact","Text speed","Shared playlists"],"The five are words of affirmation, quality time, gifts, acts of service and physical touch."),
  Q("Dating & Relationships","medium","What does a 'soft launch' on social media usually mean?",["Hinting at a partner without showing their face","Posting your wedding","Deleting your exes","Announcing a breakup"],"A hand holding a drink, a shadow on a table... the hint is the point."),
  Q("Dating & Relationships","medium","A 'red flag' in dating is...?",["A warning sign about someone's behaviour","A romantic gesture","A dating app badge","A first-date outfit"],"Spot them early. Your friends can usually see them before you do."),
  Q("Dating & Relationships","medium","Which city is nicknamed 'The City of Love'?",["Paris","Venice","Rome","Vienna"],"Paris earned the title for its romantic atmosphere and Eiffel Tower proposals."),
  Q("Dating & Relationships","hard","Relationship researcher John Gottman found stable couples have about how many positive interactions per negative one?",["5","2","10","1"],"His 'magic ratio' is 5 to 1."),
];

const CATEGORIES = [
  { name: "General Knowledge",  emoji: "🧠" },
  { name: "Random & Funny",     emoji: "😂" },
  { name: "Football",           emoji: "⚽" },
  { name: "Music",              emoji: "🎵" },
  { name: "Movies & TV",        emoji: "🎬" },
  { name: "Kenya",              emoji: "🌍" },
  { name: "Science",            emoji: "🧪" },
  { name: "Weird & Dark Facts", emoji: "💀" },
  { name: "Dating & Relationships", emoji: "❤️" },
];

/* ============ SETTINGS ============ */
const TIME_LIMIT = 15;          // seconds per question
const BASE_POINTS = 100;
const MAX_SPEED_BONUS = 50;     // scaled by time remaining
const STREAK_BONUS = 25;        // per streak step beyond the first, capped
const STREAK_BONUS_CAP = 100;
const REVEAL_MS = 3200;         // pause before auto-advancing

const GOOD_LINES = ["Bro knew that somehow.","Respectfully… nice.","That streak was getting dangerous.","Your brain actually cooked.","Okay, calm down."];
const BAD_LINES = ["That was criminal.","Nah, you guessed that.","Respectfully… how did you miss that?","The comeback starts now.","Your brain left the chat."];
const TIMEOUT_LINES = ["Time's up. Dead silence.","The clock won that one.","Thinking is allowed, you know."];

const RATINGS = [
  [90, "🧠 You are dangerously informed."],
  [70, "🔥 Okay genius, calm down."],
  [50, "😐 You knew enough to survive."],
  [30, "💀 The questions won."],
  [0,  "😭 Please never host trivia."],
];

/* ============ HELPERS ============ */
const $ = id => document.getElementById(id);
const pick = arr => arr[Math.floor(Math.random() * arr.length)];
function shuffle(arr) {
  const a = arr.slice();
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}
const screens = ["home", "setup", "game", "results"];
function show(name) {
  screens.forEach(s => { $(s).hidden = s !== name; });
  window.scrollTo(0, 0);
}

/* ============ STATE ============ */
let setup = { category: null, difficulty: "mixed", count: 10 };
let game = null;
let timerId = null, advanceId = null;

/* ============ HOME + SETUP ============ */
function renderCategories() {
  const grid = $("catGrid");
  grid.innerHTML = "";
  CATEGORIES.forEach(c => {
    const n = QUESTIONS.filter(q => q.category === c.name).length;
    const b = document.createElement("button");
    b.type = "button";
    b.className = "cat";
    b.innerHTML = `<span class="emoji" aria-hidden="true">${c.emoji}</span><span class="name">${c.name}</span><span class="count">${n} questions</span>`;
    b.addEventListener("click", () => openSetup(c));
    grid.appendChild(b);
  });
}

function renderChips(containerId, label, options, current, onPick) {
  const box = $(containerId);
  box.innerHTML = `<span class="group-label">${label}</span>`;
  options.forEach(([value, text]) => {
    const b = document.createElement("button");
    b.type = "button";
    b.className = "chip";
    b.setAttribute("role", "radio");
    b.setAttribute("aria-checked", String(value === current));
    b.textContent = text;
    b.addEventListener("click", () => { onPick(value); });
    box.appendChild(b);
  });
}

function refreshSetup() {
  renderChips("diffGroup", "Difficulty",
    [["easy","Easy"],["medium","Medium"],["hard","Hard"],["mixed","Mixed"]],
    setup.difficulty, v => { setup.difficulty = v; refreshSetup(); });
  renderChips("countGroup", "Number of questions",
    [[5,"5"],[10,"10"],[15,"15"],[20,"20"]],
    setup.count, v => { setup.count = v; refreshSetup(); });
  const own = QUESTIONS.filter(q => q.category === setup.category.name &&
    (setup.difficulty === "mixed" || q.difficulty === setup.difficulty)).length;
  $("setupNote").textContent = own < setup.count
    ? `Only ${own} ${setup.category.name} question${own === 1 ? "" : "s"} match. We'll top up with other questions.`
    : "";
}

function openSetup(cat) {
  setup.category = cat;
  $("setupCat").innerHTML = `<span class="emoji" aria-hidden="true">${cat.emoji}</span><span>${cat.name}</span>`;
  refreshSetup();
  show("setup");
}

/* ============ BUILDING A GAME ============ */
function buildQuestions(category, difficulty, count) {
  const fits = q => difficulty === "mixed" || q.difficulty === difficulty;
  let list;
  if (!category) {
    list = shuffle(QUESTIONS);
  } else {
    const a = shuffle(QUESTIONS.filter(q => q.category === category && fits(q)));
    const b = shuffle(QUESTIONS.filter(q => q.category === category && !fits(q)));
    const c = shuffle(QUESTIONS.filter(q => q.category !== category && fits(q)));
    const d = shuffle(QUESTIONS.filter(q => q.category !== category && !fits(q)));
    list = a.concat(b, c, d);
  }
  // Questions that fit come first, but the first `count` get shuffled together so order isn't predictable.
  return shuffle(list.slice(0, Math.min(count, list.length))).map(q => {
    const order = shuffle(q.answers.map((text, i) => ({ text, ok: i === q.correct })));
    return {
      category: q.category, difficulty: q.difficulty, question: q.question,
      explanation: q.explanation,
      answers: order.map(o => o.text),
      correct: order.findIndex(o => o.ok),   // recalculated after shuffle
    };
  });
}

function startGame(category, difficulty, count) {
  clearTimers();
  game = {
    category, difficulty, count,
    questions: buildQuestions(category, difficulty, count),
    index: 0, score: 0, correct: 0, wrong: 0,
    streak: 0, bestStreak: 0, times: [],
    locked: false, startedAt: 0,
  };
  $("scoreVal").textContent = "0";
  show("game");
  showQuestion();
}

/* ============ GAME LOOP ============ */
function clearTimers() { clearInterval(timerId); clearTimeout(advanceId); }

function showQuestion() {
  const g = game, q = g.questions[g.index];
  g.locked = false;
  $("qCount").textContent = `Question ${g.index + 1}/${g.questions.length}`;
  $("progressBar").style.width = `${(g.index / g.questions.length) * 100}%`;
  $("qMeta").textContent = `${q.category} · ${q.difficulty}`;
  $("qText").textContent = q.question;
  const card = $("qCard");
  card.style.animation = "none"; void card.offsetWidth; card.style.animation = "";
  const box = $("answers");
  box.innerHTML = "";
  q.answers.forEach((text, i) => {
    const b = document.createElement("button");
    b.type = "button";
    b.className = "ans";
    b.innerHTML = `<span class="letter">${"ABCD"[i]}</span><span></span>`;
    b.lastChild.textContent = text;
    b.addEventListener("click", () => answer(i));
    box.appendChild(b);
  });
  $("feedback").hidden = true;
  showStreak();
  startTimer();
}

function startTimer() {
  const g = game, t = $("timer");
  g.startedAt = Date.now();
  const tick = () => {
    const left = Math.max(0, TIME_LIMIT - (Date.now() - g.startedAt) / 1000);
    t.textContent = String(Math.ceil(left)).padStart(2, "0");
    t.classList.toggle("urgent", left <= 5);
    if (left <= 0) { clearInterval(timerId); answer(-1); }
  };
  clearInterval(timerId);
  tick();
  timerId = setInterval(tick, 100);
}

function answer(choice) {
  const g = game;
  if (!g || g.locked) return;          // no double answers
  g.locked = true;
  clearInterval(timerId);
  const q = g.questions[g.index];
  const elapsed = Math.min(TIME_LIMIT, (Date.now() - g.startedAt) / 1000);
  const timedOut = choice === -1;
  const isRight = choice === q.correct;
  const buttons = [...$("answers").children];
  buttons.forEach((b, i) => {
    b.disabled = true;
    if (i === q.correct) b.classList.add("correct");
    else if (i === choice) b.classList.add("wrong");
    else b.classList.add("dim");
  });

  let title, cls;
  if (isRight) {
    g.correct++; g.streak++; g.bestStreak = Math.max(g.bestStreak, g.streak);
    g.times.push(elapsed);
    const speed = Math.round(MAX_SPEED_BONUS * (1 - elapsed / TIME_LIMIT));
    const streak = Math.min(STREAK_BONUS_CAP, Math.max(0, g.streak - 1) * STREAK_BONUS);
    const gained = BASE_POINTS + speed + streak;
    animateScore(g.score, g.score + gained);
    g.score += gained;
    title = `✅ ${pick(GOOD_LINES)} +${gained}`;
    cls = "good";
  } else {
    g.wrong++; g.streak = 0;
    if (!timedOut) g.times.push(elapsed);
    title = timedOut ? `⏰ ${pick(TIMEOUT_LINES)}` : `❌ ${pick(BAD_LINES)}`;
    cls = "bad";
  }
  showStreak(isRight);

  const fb = $("feedback");
  fb.className = "feedback " + cls;
  $("fbTitle").textContent = title;
  $("fbText").textContent = q.explanation;
  $("nextBtn").textContent = g.index + 1 >= g.questions.length ? "SEE RESULTS" : "NEXT";
  fb.hidden = false;
  fb.scrollIntoView({ block: "nearest", behavior: "smooth" });
  advanceId = setTimeout(next, REVEAL_MS);
}

function next() {
  clearTimeout(advanceId);
  if (!game || !game.locked) return;
  game.index++;
  if (game.index >= game.questions.length) showResults();
  else showQuestion();
}

function showStreak(pop) {
  const el = $("streak");
  el.textContent = game.streak >= 2 ? `🔥 ${game.streak} ANSWER STREAK` : "";
  if (pop && game.streak >= 2) { el.classList.remove("pop"); void el.offsetWidth; el.classList.add("pop"); }
}

function animateScore(from, to, target = $("scoreVal"), duration = 600) {
  const pill = target.parentElement;
  if (pill && pill.classList.contains("score-pill")) { pill.classList.remove("bump"); void pill.offsetWidth; pill.classList.add("bump"); }
  const start = performance.now();
  const step = now => {
    const p = Math.min(1, (now - start) / duration);
    target.textContent = Math.round(from + (to - from) * p).toLocaleString();
    if (p < 1) requestAnimationFrame(step);
  };
  requestAnimationFrame(step);
}

/* ============ RESULTS ============ */
function showResults() {
  clearTimers();
  const g = game, total = g.questions.length;
  const acc = Math.round((g.correct / total) * 100);
  const avg = g.times.length ? g.times.reduce((a, b) => a + b, 0) / g.times.length : 0;
  $("progressBar").style.width = "100%";
  $("stCorrect").textContent = `${g.correct}/${total}`;
  $("stAcc").textContent = `${acc}%`;
  $("stStreak").textContent = g.bestStreak;
  $("stTime").textContent = g.times.length ? `${avg.toFixed(1)}s` : "–";
  $("rating").textContent = RATINGS.find(([min]) => acc >= min)[1];
  $("resScore").textContent = "0";
  show("results");
  animateScore(0, g.score, $("resScore"), 1200);
}

/* ============ WIRING ============ */
$("startBtn").addEventListener("click", () => $("catTitle").scrollIntoView({ behavior: "smooth" }));
$("quickBtn").addEventListener("click", () => startGame(null, "mixed", 10));
$("backHome").addEventListener("click", () => show("home"));
$("beginBtn").addEventListener("click", () => startGame(setup.category.name, setup.difficulty, setup.count));
$("nextBtn").addEventListener("click", next);
$("againBtn").addEventListener("click", () => {
  if (game.category) startGame(game.category, game.difficulty, game.count);
  else startGame(null, "mixed", 10);
});
$("changeBtn").addEventListener("click", () => { clearTimers(); show("home"); });

// Keyboard: A-D or 1-4 to answer, Enter/Space to skip ahead
document.addEventListener("keydown", e => {
  if ($("game").hidden || !game) return;
  const k = e.key.toLowerCase();
  const i = "abcd".indexOf(k) >= 0 ? "abcd".indexOf(k) : "1234".indexOf(k);
  if (i >= 0 && i < 4 && !game.locked) answer(i);
});

renderCategories();
