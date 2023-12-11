let $ = document
let none = $.querySelector('.dis-none')
let copy = $.querySelector('.copy');

let resultName = $.querySelector('#result-name')
let goldAll = $.querySelector('.gold-all')
let woodAll = $.querySelector('.wood-all')
let personAll = $.querySelector('.person-all')
let stoneAll = $.querySelector('.stone-all')
let meatAll = $.querySelector('.meat-all')
let wheatAll = $.querySelector('.wheat-all')
let happyAll = $.querySelector('.happy-all')

let allNums = $.querySelectorAll('.number')
let upgrade = $.querySelector('.upgrade')
let sell = $.querySelector('.sell')

let btnJade = $.querySelector('.button-jade')
let btnKarvan = $.querySelector('.button-karvan')
let btnRestooran = $.querySelector('.button-restooran')
let btnMaabad = $.querySelector('.button-maabad')
let btnWooder = $.querySelector('.button-wooder')
let btnFarm = $.querySelector('.button-farm')
let btnShekar = $.querySelector('.button-shekar')
let btnPeople = $.querySelector('.button-people')
let btnMadan = $.querySelector('.button-madan')

let levelJade = $.querySelector('.jade-lvl')
let levelKarvan = $.querySelector('.karvan-lvl')
let levelRestooran = $.querySelector('.restooran-lvl')
let levelMaabad = $.querySelector('.maabad-lvl')
let levelwooder = $.querySelector('.wooder-lvl')
let levelFarm = $.querySelector('.farm-lvl')
let levelShekar = $.querySelector('.shekar-lvl')
let levelPeople = $.querySelector('.people-lvl')
let levelMadan = $.querySelector('.madan-lvl')

let structures = {
    jade: {gold: 750, wood: 250, person: 25, stone: 25},
    karvan: {gold: 1000, wood: 500, person: 25, stone: 25},
    restooran: {gold: 1000, wood: 750, person: 25, stone: 25},
    maabad: {gold: 1000, wood: 250, person: 50, stone: 25},
    wooder: {gold: 750, wood: 0, person: 25, stone: 0},
    farm: {gold: 500, wood: 100, person: 25, stone: 25},
    shekar: {gold: 2000, wood: 300, person: 50, stone: 50},
    people: {gold: 750, wood: 250, person: 0, stone: 25},
    madan: {gold: 750, wood: 250, person: 50, stone: 0},
}
let result = {
    jade: {gold: 1000},
    karvan: {gold: 1500},
    restooran: {gold: 2000},
    maabad: {happy: 2},
    wooder: {wood: 500},
    farm: {wheat: 500},
    shekar: {meat: 350},
    people: {person: 250},
    madan: {stone: 300},
}

function jade() {
    let input = +prompt('لول ساختمان را وارد کنید')
    levelJade.innerHTML = input
}


function karvan() {
    let input = +prompt('لول ساختمان را وارد کنید')
    levelKarvan.innerHTML = input 
}

function restooran() {
    let input = +prompt('لول ساختمان را وارد کنید')
    levelRestooran.innerHTML = input
}

function maabad() {
    let input = +prompt('لول ساختمان را وارد کنید')
    levelMaabad.innerHTML = input
}

function wooder() {
    let input = +prompt('لول ساختمان را وارد کنید')
    levelwooder.innerHTML = input
}

function farm() {
    let input = +prompt('لول ساختمان را وارد کنید')
    levelFarm.innerHTML = input
}

function people() {
    let input = +prompt('لول ساختمان را وارد کنید')
    levelPeople.innerHTML = input
}

function shekar() {
    let input = +prompt('لول ساختمان را وارد کنید')
    levelShekar.innerHTML = input
}

function madan() {
    let input = +prompt('لول ساختمان را وارد کنید')
    levelMadan.innerHTML = input
}

function upgred(){
    var goldResJade = levelJade.innerHTML * result.jade.gold
    var goldResKarvan = levelKarvan.innerHTML * result.karvan.gold
    var goldResRestooran = levelRestooran.innerHTML * result.restooran.gold
    var happyResMaabad = levelMaabad.innerHTML * result.maabad.happy
    var woodResWooder = levelwooder.innerHTML * result.wooder.wood
    var stoneResMadan = levelMadan.innerHTML * result.madan.stone
    var personResPeople = levelPeople.innerHTML * result.people.person
    var meatResShekar = levelShekar.innerHTML * result.shekar.meat
    var wheatResFarm = levelFarm.innerHTML * result.farm.wheat
    goldAll.innerHTML = goldResJade + goldResKarvan + goldResRestooran
    woodAll.innerHTML = woodResWooder
    happyAll.innerHTML = happyResMaabad
    stoneAll.innerHTML = stoneResMadan
    personAll.innerHTML = personResPeople
    meatAll.innerHTML = meatResShekar
    wheatAll.innerHTML = wheatResFarm
    resultName.innerHTML = 'بازدهی کل:'
    none.style.display = 'block';
}

function sellPrice() {
    var goldResultSell = (levelJade.innerHTML * structures.jade.gold) + (levelKarvan.innerHTML * structures.karvan.gold) + (levelRestooran.innerHTML * structures.restooran.gold) + (levelMaabad.innerHTML * structures.maabad.gold) + (levelwooder.innerHTML * structures.wooder.gold) + (levelFarm.innerHTML * structures.farm.gold) + (levelShekar.innerHTML * structures.shekar.gold) + (levelPeople.innerHTML * structures.people.gold) + (levelMadan.innerHTML * structures.madan.gold)
    var woodResultSell = (levelJade.innerHTML * structures.jade.wood) + (levelKarvan.innerHTML * structures.karvan.wood) + (levelRestooran.innerHTML * structures.restooran.wood) + (levelMaabad.innerHTML * structures.maabad.wood) + (levelwooder.innerHTML * structures.wooder.wood) + (levelFarm.innerHTML * structures.farm.wood) + (levelShekar.innerHTML * structures.shekar.wood) + (levelPeople.innerHTML * structures.people.wood) + (levelMadan.innerHTML * structures.madan.wood)
    var personResultSell = (levelJade.innerHTML * structures.jade.person) + (levelKarvan.innerHTML * structures.karvan.person) + (levelRestooran.innerHTML * structures.restooran.person) + (levelMaabad.innerHTML * structures.maabad.person) + (levelwooder.innerHTML * structures.wooder.person) + (levelFarm.innerHTML * structures.farm.person) + (levelShekar.innerHTML * structures.shekar.person) + (levelPeople.innerHTML * structures.people.person) + (levelMadan.innerHTML * structures.madan.person)
    var stoneResultSell = (levelJade.innerHTML * structures.jade.stone) + (levelKarvan.innerHTML * structures.karvan.stone) + (levelRestooran.innerHTML * structures.restooran.stone) + (levelMaabad.innerHTML * structures.maabad.stone) + (levelwooder.innerHTML * structures.wooder.stone) + (levelFarm.innerHTML * structures.farm.stone) + (levelShekar.innerHTML * structures.shekar.stone) + (levelPeople.innerHTML * structures.people.stone) + (levelMadan.innerHTML * structures.madan.stone)
    resultName.innerHTML = 'قیمت خرید ها:'
    goldAll.innerHTML = goldResultSell
    woodAll.innerHTML = woodResultSell
    personAll.innerHTML = personResultSell
    stoneAll.innerHTML = stoneResultSell
    happyAll.innerHTML = 0
    meatAll.innerHTML = 0
    wheatAll.innerHTML = 0
    none.style.display = 'block';

}

function coped () {
    let vaidCopy = "💰 " + goldAll.innerHTML + "\n🪵 " + woodAll.innerHTML + "\n👤 " + personAll.innerHTML + "\n🪨 " + stoneAll.innerHTML + "\n🌾 " + wheatAll.innerHTML + "\n🥩 " + meatAll.innerHTML + "\n🎭 " + happyAll.innerHTML ;
    navigator.clipboard.writeText(vaidCopy)
    alert("کپی شد\n حالا میتونی خریداتو بفرستی برای گاد!")
}

btnJade.addEventListener('click', jade)
btnKarvan.addEventListener('click', karvan)
btnRestooran.addEventListener('click', restooran)
btnFarm.addEventListener('click', farm)
btnMaabad.addEventListener('click', maabad)
btnShekar.addEventListener('click', shekar)
btnPeople.addEventListener('click', people)
btnWooder.addEventListener('click', wooder)
btnMadan.addEventListener('click', madan)
upgrade.addEventListener('click', upgred)
sell.addEventListener('click', sellPrice)
copy.addEventListener('click', coped)
