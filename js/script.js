'use strict';

////////////////////////////////
//Задачи на работу с объектами//
////////////////////////////////
const personalPlanPeter = {
    name: "Peter",
    age: "30",
    skills: {
        languages: ['ru', 'eng'],
        programmingLangs: {
            js: '20%',
            php: '10%'
        },
        exp: '1 month'
    },
    showAgeAndLangs: function(plan) {
        const { age, skills: { languages } } = plan;
        const upperCaseLangs = languages.map(lang => lang.toUpperCase()).join(' ');

        return `Мне ${age} и я владею языками: ${upperCaseLangs}`;
    }
};

function showExperience(plan) {
    const {skills: {exp}} = plan;
    return exp;
}

function showProgrammingLangs(plan) {
    let result = '';
    const { programmingLangs } = plan.skills;

    for (let lang in programmingLangs) {
        result += `Язык ${lang} изучен на ${programmingLangs[lang]}\n`;
    }

    return result.trim();
}

console.log(showExperience(personalPlanPeter));
console.log(showProgrammingLangs(personalPlanPeter));
console.log(personalPlanPeter.showAgeAndLangs(personalPlanPeter));

////////////////////////////////
//Задачи на работу с массивами//
////////////////////////////////
const family = ['Peter', 'Ann', 'Alex', 'Linda'];

function showFamily(arr) {
    if (arr.length === 0) {
        return 'Семья пуста';
    } else {
        return 'Семья состоит из: ' + arr.join(' ');
    }
}

console.log(showFamily(family));

const favoriteCities = ['liSBon', 'ROME', 'miLan', 'Dublin'];

function standardizeStrings(arr) {
    for (let city of arr) {
        console.log(city.toLowerCase());
    }
}

standardizeStrings(favoriteCities);





