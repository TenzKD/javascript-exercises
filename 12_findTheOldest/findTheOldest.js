/* const findTheOldest = function (oldest) {
  return oldest.reduce((oldest, current) => {
    const oldestAge = getAge(oldest.yearOfBirth, oldest.yearOfDeath);
    const currentAge = getAge(current.yearOfBirth, current.yearOfDeath);
    return oldestAge < currentAge ? current : oldest;
  });
};
function getAge(birth, death) {
  if (!death) {
    death = new Date().getFullYear();
  }
  return death - birth;
} };*/

const findTheOldest = function (people) {
  people.map((person) => {
    if (typeof person.yearOfDeath === "undefined") {
      return (person.yearOfDeath = new Date().getFullYear());
    }
  });
  const oldest = people.sort((first, sec) => {
    const a = first.yearOfDeath - first.yearOfBirth;
    const b = sec.yearOfDeath - sec.yearOfBirth;
    return a > b ? -1 : 1;
  })[0];
  return oldest;
};

// Do not edit below this line
module.exports = findTheOldest;
