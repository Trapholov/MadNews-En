var predict = [
  {'message': '[TWO] students of [UNIVERSITY]', 'sex': 'plural'},
  {'message': '[TWO] [DRUNK] prostitutes from [CITY]', 'sex': 'plural'},
  {'message': '[DRUNK] [GIRL] from [CITY]', 'sex': 'f'},
  {'message': '[DRUNK] citizen from [CITY]', 'sex': 'f'},
  {'message': '[DRUNK] gay activists', 'sex': 'plural'},
  {'message': '[DRUNK] [CONGRESSMAN] from [CITY]', 'sex': 'm'},
  {'message': '[DRUNK] [OLDMAN] in [CITY]', 'sex': 'm'},
  {'message': '[DRUNK] [OLDMAN] from [CITY]', 'sex': 'm'},
  {'message': '[DRUNK] [OLDMAN] from [CITY]', 'sex': 'm'},
  {'message': '[DRUNK] [OLDMAN]', 'sex': 'm'},
  {'message': '[DRUNK] [CITIZEN]', 'sex': 'm'},
  {'message': '[DRUNK] [CITIZEN] with a laser stick', 'sex': 'm'},
  {'message': '[DRUNK] [CITIZENS]', 'sex': 'plural'},
  {'message': 'In [CITY] [TWO] [DRUNK] [GIRLS]', 'sex': 'plural'},
  {'message': 'In [CITY] [DRUNK] [GIRL]', 'sex': 'f'},
  {'message': 'In [CITY] [DRUNK] [OLDMAN]', 'sex': 'm'},
  {'message': 'In [CITY] [DRUNK] Mexican worker', 'sex': 'm'},
  {'message': 'Group of young men from [CITY]', 'sex': 'plural'},
  {'message': 'Some guys from [CITY]', 'sex': 'plural'},
  {'message': 'citizens from [CITY]', 'sex': 'plural'},
  {'message': '[ONE_PLUS_ONE]', 'sex': 'plural'},
  {'message': 'Bigfoot in [CITY]', 'sex': 'bf'},
  {'message': 'Bigfoot', 'sex': 'bf'},
  {'message': 'gay aliens', 'sex': 'aliens'},
  {'message': 'aliens', 'sex': 'aliens'},
];

var sets = {
  'GARAGE': [
    'a garage',
    'a weed farm',
    'a billboard',
  ],
  'UNIVERSITY': ['MIT', 'Harvard', 'Stanford', 'Caltech'],
  'GIRL': [
    'GIRL',
    'night club cleaner',
    'old lady',
    'writer',
    'saleswoman',
    'teacher',
    'beauty salon visitor',
    'hooker',
  ],
  'GIRLS': [
    'girls',
    'hypnotist swindlers',
    'retirees',
    'writers',
    'saleswomans',
    'teachers',
    'beauty salon visitors',
    'students',
    'old ladies',
    'hookers',
  ],
  'ONE_PLUS_ONE': [
    'pregnant woman with a friend',
    'KGB officers',
    'CIA officers',
  ],
  'CONGRESSMAN': ['congressman', 'mayor', 'sheriff', 'ex-mayor', 'policemen', 'citizen'],
  'WIFE': ['his wife', 'his dog'],
  'TRAIN': ['a train', 'tractor', 'concrete mixer', 'WW2 tank', 'tram', 'trolleybus', 'patrol boat'],
  'HUSBAND': ['her husband', 'her ex-boyfriend', 'her sister'],
  'CITIZEN': ['NYC citizen', 'LA citizen', 'Mexican', 'German', 'San-Jose citizen'],
  'CITIZENS': ['NYC citizens'],
  'OLDMAN': [
    'Redneck',
    'vampire',
    'Redneck vampire',
    'businessman',
    'WW2 veteran',
    'iraq veteran',
    'old thief',
    'loader',
    'janitor',
    'bald suicide',
    'millionaire',
    'young man',
    'Mormon',
    'drugdealer',
    'beggar',
    'hunter',
    'guy',
    'old man',
    'brewer',
    'fireworker',
    'young arsonist',
    'teenager',
    'old teacher',
    'policeman',
    'programmer',
    'fisherman',
    'lumberjack',
    'plumber',
    'Satanist',
    'Priest',
    'Social worker',
    'football player',
    'ex-prosecutor',
    'ambulance driver',
    'truck driver',
    'post truck driver',
    'garbage truck driver',
    'tractor driver',
    'combine harvester driver',
    'lawn mower driver',
    'tank driver',
  ],
  'MOONSHINE': [
    'moonshine',
    'vodka',
    'meth',
    'heroine',
  ],
  'OLDMANS': [
    'WW2 veterans',
    'iraq veterans',
    'Mormons',
    'drugdealers',
    'hunters',
    'brewers',
    'old teachers',
    'policemans',
    'programmers',
    'fishermans',
    'Satanists',
    'Priests',
    'Social workers',
    'ambulance driver',
    'truck drivers',
  ],
  'CITY': [
    'LA',
    'NYC',
    'Central Europe',
    'Eastern Europe',
    'South Asia',
    'Germany',
    'Mexico',
    'San-Jose',
    'Africa',
    'Australia',
    'Canada',
    'China',
    'Russia',
    'Ukraine',
    'Belorussia',
  ],
  'PET': ['a dog', 'a cat', 'a cow', 'a horse', 'a goat', 'a pig'],
  'NEIGHBOR': ['neighbor', 'passerby', 'two passersby', 'two female students', 'congressman', 'dog', 'goat',
    'cow', 'cat', 'goose', 'two peacocks'],
  'DRUNK': ['', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', 'drunk'],
  'KILLED': ['killed', 'injured', 'executed', 'humiliated', 'shot', 'strangled', 'drowned', 'stabbed', 'outraged'],
  'LOSS': ['his penis', 'all his documents', 'all the money', 'his hand', 'his mind'],
  'BLEW_UP': ['blew up', 'set on fire', 'shot'],
  'KILL': ['scare', 'kill'],
  'RETURN_M': ['female partner', 'wife', 'girlfriend', 'honor of the family'],
  'RETURN_F': ['husband', 'addict child from the clinic', 'honor of the family'],
  'ACCIDENTALLY': ['accidentally', '', '', '', ''],
  'TWO': ['two', 'three', 'four'],
};

var action = {
  'm': [
    '[BLEW_UP] [GARAGE]',
    'took bribes',
    'took mother-in-law as a hostage',
    'broke into someone else\'s house',
    'shot a neighbor with a gun',
    'cooked a dinner',
    'got into the pensioner\'s house',
    'in a fit of passion killed a drinking companion',
    'went into a construction firm with a gun',
    'beat a teenager',
    'raped a conductress',
    'bought an accordion',
    'watered the cat with moonshine',
    'Poured out with GASOLINE, BURNED',
    'found a skeleton in the basement',
    'robbed a toys machine',
    'robbed a couple who sheltered him for the night',
    'poisoned with ethanol',
    'BURNED his DOCUMENTS',
    'wanted to steal a NEIGHBOR\'s scooter',
    'caught a bicycle stealing',
    'went fishing',
    'spent the night in a nest of a stork',
    'spent the night in an anthill',
    'tried to carry [PET] in the suitcase',
    'lit a fire in the METRO',
    'gave his wages to homeless people',
    'wounded two policemen with a knife',
    'attacked a passer-by with a fire extinguisher in his hands',
    'escaped from the ambulance',
    'escaped from a psychiatric hospital',
    'hijacked [TRAIN]',
    'stole [PET]',
    'drowned a girlfriend in the bathroom',
    'wanted to [KILL] [WIFE]',
    'wanted to get a job in a kindergarten',
  ],
  'f': [
    '[BLEW_UP] [GARAGE]',
    'took father-in-law as a hostage',
    'broke into someone else\'s house',
    'cooked a dinner',
    'stabbed [HUSBAND] during the dinner',
    'did not let [HUSBAND] go fishing',
    'Poured out with GASOLINE, BURNED',
    'robbed a toys machine',
    'gave her wages to homeless people',
    'gave a salary to a swindler',
    'tried to steal food in a diaper',
    'BURNED her DOCUMENTS',
    'lit a fire in the subway',
    'distributed a salary to orphans',
    'escaped from a psychiatric hospital',
    'broke husband\'s moonshine home brewery',
    'starred naked',
    'starred in porn',
    'has made a road accident with a tractor',
    '[KILLED] sister with a can of flour',
    'hijacked [TRAIN]',
    'stole [PET]',
    'caught [PET]',
    'was chasing a neighbor\'s child',
    'photographed a lion in a circus',
    'wanted to [KILL] [HUSBAND]',
  ],
  'plural': [
    '[BLEW_UP] [GARAGE]',
    'broke into someone else\'s house',
    'stole $2 million from a female student',
    'detained a teenager with a Kalashnikov assault rifle',
    'ordered to kill their director',
    'raped the priest',
    'robbed a toys machine',
    'desecrated the grave of an unknown soldier',
    'went fishing',
    'tried to commit suicide',
    'distributed their wages to homeless people',
    'escaped from a psychiatric hospital',
    'broke the moonshine brewery',
    'stolen the concrete mixer',
    'hijacked the WW2 tank from the exhibition',
    'hijacked the tractor',
    'hijacked a herd of rams from the farmer',
    'stole [PET]',
    'stole a lion from a local circus',
    'stole several tons of cigarettes',
    'stole $20 million from the townspeople',
    'BURNED their DOCUMENTS',
    'lit a fire in the subway',
    'hijacked [TRAIN], got passangers',
  ],
  'aliens': [
    'broke into someone\'s house',
    'stole a hundred students',
    'stole a [GARAGE]',
    'raped an [OLDMAN]',
    'hijacked the WW2 tank from the exhibition',
    'hijacked the tractor',
    'hijacked a herd of rams from the farmer',
    'stole [PET]',
    'stole a lion from a local circus',
    'stole a weed farm',
  ],
  'bf': [
    'broke into someone\'s house',
    'got into the pensioner\'s house',
    'beat a teenager',
    'raped alien',
    'robbed a bank',
    'poisoned with ethanol',
    'wanted to steal a scooter',
    'caught a bicycle stealing',
    'wounded two policemen',
    'hijacked [TRAIN]',
    'stole [PET]',
  ],
};

var conclusion = {
  'm': [
    'and [ACCIDENTALLY] injured [OLDMANS]',
    'and [ACCIDENTALLY] [KILLED] [NEIGHBOR]',
    'and was detained for fraud',
    'and won the lottery',
    'and LOST [LOSS]',
    'and sang dirty ditties',
    'and set fire to the apartment',
    'and got a bullet in the leg',
    'and stole a purse',
    'and nearly killed [PET]',
    'and [ACCIDENTALLY] died',
    'saving [PET]',
    'and died of electric shock',
    'to return [RETURN_M]',
    'to enter the Guinness Book of Records',
    'to be left alone',
    'to cover the traces of making [MOONSHINE]',
    'to protect their honor',
    'to settle a conflict with a neighbor',
  ],
  'f': [
    'and [ACCIDENTALLY] [KILLED] [NEIGHBOR]',
    'and [ACCIDENTALLY] injured [OLDMANS]',
    'and won the lottery',
    'and posted a photo to the instagram',
    'and STRIKED over a neighbor',
    'and ASKED NOT TO DISTURB',
    'and laughed loud',
    'and hiding from justice',
    'and [ACCIDENTALLY] died',
    'with particular cruelty',
    'saving [PET]',
    'to return [RETURN_F]',
    'to enter the Guinness Book of Records',
    'to not be suspected of cheating',
    'to be left alone',
    'to settle a conflict with a neighbor',
  ],
  'plural': [
    'and [ACCIDENTALLY] [KILLED] [NEIGHBOR]',
    'and [ACCIDENTALLY] injured [OLDMANS]',
    'and ASKED NOT TO DISTURB',
    'and laughed loud',
    'and shot armed criminal',
    'and are hiding from justice',
    'and [ACCIDENTALLY] died',
    'and staged shooting from pneumatics',
    'just for fun',
    'with particular cruelty',
    'with the goal of killing each other',
    'saving [PET]',
    'threatening with weapons',
    'to enter the Guinness Book of Records',
    'to be left alone',
    'to settle a conflict with a neighbors',
  ],
  'aliens': [
    'and [KILLED] [NEIGHBOR]',
    'and flew away',
    'eating [PET]',
  ],
  'bf': [
    'and [ACCIDENTALLY] injured [OLDMANS]',
    'and sang mysterious melodies',
    'and ran away',
    'and nearly killed [PET]',
    'and [ACCIDENTALLY] disappeared',
    'to be left alone',
  ],
};

function MadNews() {
  this.getPerson = function () {
    this.predict = this.predict && this.predict.length ? this.predict : JSON.parse(JSON.stringify(predict));
    var seed = this.predict.splice(Math.floor(Math.random() * this.predict.length), 1)[0];
    this.sex = seed['sex'];
    return multiply(seed.message).toUpperCase();
  };
  this.getAction = function () {
    if (!this.action) {
      this.action = JSON.parse(JSON.stringify(action));
    }
    if (!this.action[this.sex].length) {
      this.action[this.sex] = JSON.parse(JSON.stringify(action[this.sex]));
    }
    return multiply(extract_sentense(this.action[this.sex].splice(Math.floor(Math.random() * this.action[this.sex].length), 1)[0])).toUpperCase();
  };
  this.getConclusion = function () {
    if (!this.conclusion) {
      this.conclusion = JSON.parse(JSON.stringify(conclusion));
    }
    if (!this.conclusion[this.sex].length) {
      this.conclusion[this.sex] = JSON.parse(JSON.stringify(conclusion[this.sex]));
    }
    return multiply(extract_sentense(this.conclusion[this.sex].splice(Math.floor(Math.random() * this.conclusion[this.sex].length), 1)[0])).toUpperCase();
  };

  function multiply(template) {
    var content = template || '';
    var matches = content.match(/\[[а-яА-Я\w]*\]/g);
    if (matches) {
      matches.forEach(function (match) {
        var randomSet = sets[match.substr(1).substr(0, match.length - 2)];
        randomSet = randomSet[Math.floor(Math.random() * randomSet.length)];
        content = content.replace(match, randomSet.trim());
      });
    }
    return content;
  }

  function extract_sentense(content) {
    var matches = content.match(/\[[а-яА-Я\w]*\]/g);
    if (matches) {
      matches.forEach(function (code) {
        code = code.substr(1).substr(0, code.length - 2);
        var randomSet = sets[code];
        randomSet = randomSet[Math.floor(Math.random() * randomSet.length)];
        content = content.replace('[' + code + ']', randomSet).trim();
      });
    }
    return content;
  }
}

document.addEventListener('DOMContentLoaded', function (event) {
  var madness = new MadNews();
  GetMad();
  document.querySelector('#stage_refresh a').addEventListener('click', function (e) {
    GetMad();
    return false;
  });

  function GetMad() {
    document.querySelector('#stage_a0 p').innerText = madness.getPerson();
    document.querySelector('#stage_b0 p').innerText = madness.getAction();
    document.querySelector('#stage_c0 p').innerText = madness.getConclusion();
  }
});
