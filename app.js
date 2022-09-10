let mobiles = [
  {
    id: 1,
    Brand: "iPhone",
    Model: "v14",
    Category: "E",
    price: 300,
    isApproved: true,
    isMobile: true,
  },
  {
    id: 2,
    Brand: "Samsung",
    Model: "s22",
    Category: "B",
    price: 400,
    isApproved: false,
    isMobile: true,
  },
  {
    id: 3,
    Brand: "Xiaomi",
    Model: "s29",
    Category: "C",
    price: 100,
    isApproved: false,
    isMobile: true,
  },
  {
    id: 4,
    Brand: "Redmi",
    Model: "s20 ultra",
    Category: "A",
    price: 200,
    isApproved: true,
    isMobile: true,
  },
];

// 1) Total price of array;
document.write("Total price of array");
//Through Reduce Method
const output = mobiles.reduce((acc, current) => {
  return acc + current.price;
}, 0);
console.log(output);
document.write("<br>" + output);
//Through ForEach Meathod
let sum = 0;
mobiles.forEach((elements) => {
  sum += elements.price;
  return sum;
});
console.log(sum);

// 2) You have to return true false when you see all are mobiles;
let checkThroughEveryMethod = mobiles.every(checkIsMobile);
function checkIsMobile(item) {
  return item.isMobile;
}
console.log("isMobile " + checkThroughEveryMethod);
// 3) show all isApproved devices;
let checkThroughEveryMethod1 = mobiles.every(checkIsApproved);

function checkIsApproved(item) {
  return item.isApproved;
}
console.log("isApproved" + checkThroughEveryMethod1);
// 4) In mobile array add new key which is checked: true;
let update = mobiles.map((a) => ({ ...a, isChecked: true }));
console.log("isChecked <br/>");
console.log(update);
// 5) Create duplicate array and sort it them by category;
let duplicate = [...mobiles];
let sort = duplicate.filter(function (e, i) {
  if (e.Category == "A") {
    e.index = i;
    return e;
  }
});
console.log(sort);
// 6) Search mobile by name hint: (using include method);
let name = "iPhone";
let searchedDevices = mobiles.filter((item) => {
  return item.Brand.includes(name);
});
console.log(searchedDevices);
// 7) replace redmi mobile to Infinix;
const index = mobiles.findIndex((object) => {
  return object.id === 4;
});
if (index !== -1) {
  mobiles[index].Brand = "Infinix";
}
console.log(mobiles);

// 8) Add image to there own object hint: (search through name and add include method!);

let images = [
  "./images/iphone.jpg",
  "./images/infinix.jpg",
  "./images/redmi.jpg",
  "./images/samsung.jpg",
  "./images/xiaomi.jpg",
];
mobiles.forEach((item, index) => {
  let ImageArray = images.filter((image) => {
    return image.toLocaleLowerCase().includes(item.Brand.toLocaleLowerCase());
   
  });

  mobiles[index].image = ImageArray[0];
});
console.log("IMAGE ARRAY", mobiles);

