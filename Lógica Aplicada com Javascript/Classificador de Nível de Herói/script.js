var name_hero = null;
var xp_hero = null;

const verify_level_hero = (name, xp) => {
    if (xp >= 0 && xp <= 1000) {
        console.log(`*O Herói do nome ${name} está no nível de Ferro.`);
    } else if (xp >= 1001 && xp <= 2000) {
        console.log(`*O Herói do nome ${name} está no nível de Bronze.`);
    } else if (xp >= 2001 && xp <= 5000) {
        console.log(`*O Herói do nome ${name} está no nível de Prata Ouro.`);
    } else if (xp >= 5001 && xp <= 8000) {
        console.log(`*O Herói do nome ${name} está no nível de Platina Diamante.`);
    } else if (xp >= 8001 && xp <= 9000) {
        console.log(`*O Herói do nome ${name} está no nível de Ascendente.`);
    } else if (xp >= 9001 && xp <= 10000) {
        console.log(`*O Herói do nome ${name} está no nível de Imortal.`);
    } else if (xp >= 10001) {
        console.log(`*O Herói do nome ${name} está no nível de Radiante.`);
    } else {
        console.log(`*O Herói do nome ${name} está sem nível.`);
    }
};

verify_level_hero(name_hero = "Agente Molotov", xp_hero = 999);
verify_level_hero(name_hero = "Mr. Steel", xp_hero = 8000);
verify_level_hero(name_hero = "Sra. Ellie", xp_hero = 10000);
verify_level_hero(name_hero = "Rei Supremo", xp_hero = 15000);
