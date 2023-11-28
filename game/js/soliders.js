let $ = document;
let person = $.querySelector('.person-all');
let gold = $.querySelector('.gold-all');
// ---------------------------------------------------------
let dehganLVL = $.querySelector('.dehgan-lvl');
let guardLVL = $.querySelector('.guard-lvl');
let hashtashiLVL = $.querySelector('.hashtashi-lvl');
let prensibLVL = $.querySelector('.prensib-lvl');
let leziunerJavanLVL = $.querySelector('.leziunerJavan-lvl');
let leziunerBatajobeLVL = $.querySelector('.leziunerBatajobe-lvl');
let teriariLVL = $.querySelector('.teriari-lvl');
let peratoriLVL = $.querySelector('.peratori-lvl');
let veltisLVL = $.querySelector('.veltis-lvl');
let bowerLVL = $.querySelector('.bower-lvl');
let neyzeSabokLVL = $.querySelector('.neyzeSabok-lvl');
let komakSavarLVL = $.querySelector('.komakSavar-lvl');
let savareLVL = $.querySelector('.savare-lvl');
let savareRoomiLVL = $.querySelector('.savareRoomi-lvl');
let savareLeziunerLVL = $.querySelector('.savareLeziuner-lvl');
let savarePeratoriLVL = $.querySelector('.savarePeratori-lvl');
// -----------------------------------------------------------------------
let dehganButton = $.querySelector('.button-dehgan');
let guardButton = $.querySelector('.button-guard');
let hashtashiButton = $.querySelector('.button-hashtashi');
let prensibButton = $.querySelector('.button-prensib');
let leziunerJavanButton = $.querySelector('.button-leziunerJavan');
let leziunerBatajobeButton = $.querySelector('.button-leziunerBatajobe');
let teriariButton = $.querySelector('.button-teriari');
let peratoriButton = $.querySelector('.button-peratori');
let veltisButton = $.querySelector('.button-veltis');
let bowerButton = $.querySelector('.button-bower');
let neyzeSabokButton = $.querySelector('.button-neyzeSabok');
let komakSavarButton = $.querySelector('.button-komakSavar');
let savareButton = $.querySelector('.button-savare');
let savareRoomiButton = $.querySelector('.button-savareRoomi');
let savareLeziunerButton = $.querySelector('.button-savareLeziuner');
let savarePeratoriButton = $.querySelector('.button-savarePeratori');
let buy = $.querySelector('.buy');

// ------------------------------------------------------------------------------------

let roomSoliders = {
    dehgan: {gold: 3, people: 1},
    guard: {gold: 5, people:1},
    hashtashi: {gold: 10, people:1},
    prensib: {gold: 15, people:1},
    leziunerJavan: {gold: 20, people: 1},
    leziunerBatajobe: {gold: 25, people: 1},
    teriari: {gold: 30, people:1},
    peratori: {gold: 40, people: 1},
    veltis: {gold: 10, people: 1},
    bower: {gold: 15, people: 1},
    neyzeSabok: {gold: 20, people: 1},
    komakSavar: {gold: 20, people: 2},
    savare: {gold: 25, people: 2},
    savareRoomi: {gold: 35, people: 2},
    savareLeziuner: {gold: 40, people: 2},
    savarePeratori: {gold: 50, people: 2},
}

// ------------------------------------------------------------------------------------

function dehgan () {
    let input = +prompt("تعداد سرباز هایی که میخواهید خریداری کنید را وارد کنید :  ")
    dehganLVL.innerHTML = input
}
function guard () {
    let input = +prompt("تعداد سرباز هایی که میخواهید خریداری کنید را وارد کنید :  ")
    guardLVL.innerHTML = input
}
function hashtashi () {
    let input = +prompt("تعداد سرباز هایی که میخواهید خریداری کنید را وارد کنید :  ")
    hashtashiLVL.innerHTML = input
}
function prensib () {
    let input = +prompt("تعداد سرباز هایی که میخواهید خریداری کنید را وارد کنید :  ")
    prensibLVL.innerHTML = input
}
function leziunerJavan () {
    let input = +prompt("تعداد سرباز هایی که میخواهید خریداری کنید را وارد کنید :  ")
    leziunerJavanLVL.innerHTML = input
}
function leziunerBatajobe () {
    let input = +prompt("تعداد سرباز هایی که میخواهید خریداری کنید را وارد کنید :  ")
    leziunerBatajobeLVL.innerHTML = input
}
function teriari () {
    let input = +prompt("تعداد سرباز هایی که میخواهید خریداری کنید را وارد کنید :  ")
    teriariLVL.innerHTML = input
}
function peratori () {
    let input = +prompt("تعداد سرباز هایی که میخواهید خریداری کنید را وارد کنید :  ")
    peratoriLVL.innerHTML = input
}
function veltis () {
    let input = +prompt("تعداد سرباز هایی که میخواهید خریداری کنید را وارد کنید :  ")
    veltisLVL.innerHTML = input
}
function bower () {
    let input = +prompt("تعداد سرباز هایی که میخواهید خریداری کنید را وارد کنید :  ")
    bowerLVL.innerHTML = input
}
function neyzeSabok () {
    let input = +prompt("تعداد سرباز هایی که میخواهید خریداری کنید را وارد کنید :  ")
    neyzeSabokLVL.innerHTML = input
}
function komakSavar () {
    let input = +prompt("تعداد سرباز هایی که میخواهید خریداری کنید را وارد کنید :  ")
    komakSavarLVL.innerHTML = input
}
function savare () {
    let input = +prompt("تعداد سرباز هایی که میخواهید خریداری کنید را وارد کنید :  ")
    savareLVL.innerHTML = input
}
function savareLeziuner () {
    let input = +prompt("تعداد سرباز هایی که میخواهید خریداری کنید را وارد کنید :  ")
    savareLeziunerLVL.innerHTML = input
}
function savareRoomi () {
    let input = +prompt("تعداد سرباز هایی که میخواهید خریداری کنید را وارد کنید :  ")
    savareRoomiLVL.innerHTML = input
}
function savarePeratori () {
    let input = +prompt("تعداد سرباز هایی که میخواهید خریداری کنید را وارد کنید :  ")
    savarePeratoriLVL.innerHTML = input
}

function buys() {
    let resultGold = (dehganLVL.innerHTML * roomSoliders.dehgan.gold) + (guardLVL.innerHTML * roomSoliders.guard.gold) + (prensibLVL.innerHTML * roomSoliders.prensib.gold) + (leziunerJavanLVL.innerHTML * roomSoliders.leziunerJavan.gold) + (hashtashiLVL.innerHTML * roomSoliders.hashtashi.gold) + (leziunerBatajobeLVL.innerHTML * roomSoliders.leziunerBatajobe.gold) + (teriariLVL.innerHTML * roomSoliders.teriari.gold) + (peratoriLVL.innerHTML * roomSoliders.peratori.gold) + (veltisLVL.innerHTML * roomSoliders.veltis.gold) + (bowerLVL.innerHTML * roomSoliders.bower.gold) + (neyzeSabokLVL.innerHTML * roomSoliders.neyzeSabok.gold) + (komakSavarLVL.innerHTML * roomSoliders.komakSavar.gold) + (savareLVL.innerHTML * roomSoliders.savare.gold) + (savareRoomiLVL.innerHTML * roomSoliders.savareRoomi.gold) + (savareLeziunerLVL.innerHTML * roomSoliders.savareLeziuner.gold) + (savarePeratoriLVL.innerHTML * roomSoliders.savarePeratori.gold)
    let resultPeople = (dehganLVL.innerHTML * roomSoliders.dehgan.people) + (guardLVL.innerHTML * roomSoliders.guard.people) + (prensibLVL.innerHTML * roomSoliders.prensib.people) + (leziunerJavanLVL.innerHTML * roomSoliders.leziunerJavan.people) + (hashtashiLVL.innerHTML * roomSoliders.hashtashi.people) + (leziunerBatajobeLVL.innerHTML * roomSoliders.leziunerBatajobe.people) + (teriariLVL.innerHTML * roomSoliders.teriari.people) + (peratoriLVL.innerHTML * roomSoliders.peratori.people) + (veltisLVL.innerHTML * roomSoliders.veltis.people) + (bowerLVL.innerHTML * roomSoliders.bower.people) + (neyzeSabokLVL.innerHTML * roomSoliders.neyzeSabok.people) + (komakSavarLVL.innerHTML * roomSoliders.komakSavar.people) + (savareLVL.innerHTML * roomSoliders.savare.people) + (savareRoomiLVL.innerHTML * roomSoliders.savareRoomi.people) + (savareLeziunerLVL.innerHTML * roomSoliders.savareLeziuner.people) + (savarePeratoriLVL.innerHTML * roomSoliders.savarePeratori.people)
    person.innerHTML = resultPeople;
    gold.innerHTML = resultGold;
}


dehganButton.addEventListener('click', dehgan);
guardButton.addEventListener('click', guard);
hashtashiButton.addEventListener('click', hashtashi);
prensibButton.addEventListener('click', prensib);
teriariButton.addEventListener('click', teriari);
peratoriButton.addEventListener('click', peratori);
neyzeSabokButton.addEventListener('click', neyzeSabok);
bowerButton.addEventListener('click', bower);
veltisButton.addEventListener('click', veltis);
komakSavarButton.addEventListener('click', komakSavar);
savareButton.addEventListener('click', savare);
savareRoomiButton.addEventListener('click', savareRoomi);
savareLeziunerButton.addEventListener('click', savareLeziuner);
savarePeratoriButton.addEventListener('click', savarePeratori);
leziunerBatajobeButton.addEventListener('click', leziunerBatajobe);
leziunerJavanButton.addEventListener('click', leziunerJavan);
buy.addEventListener('click', buys)