function Jedi(name, hp, ap, cap) {
    this.name = name;
    this.hp = hp;
    this.ap = ap;
    this.cap = cap;
}
var obiWan = new Jedi("ben", 125, 150, 125);
console.log(obiWan.name);
var quigonJinn = new Jedi("quigon", 100, 125, 150);
console.log(quigonJinn.name);
var maceWindu = new Jedi("mace", 150, 125, 100);
console.log(maceWindu.name);


