import ejs from "ejs";

// const template = `
//   <h1>Hello <%= name %></h1>
  
//   <p>You have <%= count %> unread messages.</p>
// `;

// const data = {
//     name: "Ali",
//     count: 5,
// };

// const html = ejs.render(template, data);

// console.log(html);


const products = [
    { name: "Product 1" },
    { name: "Product 2" },
    { name: "Product 3" },
];
const data = {
    name: "Rizwan",
    products,
    email: "mrizwanashiq@outlook,com",
    company: "MercurySols",
    address: "Rahim Yar Khan, Pakistan",
    phone: "+923004000000",
    website: "https://mercurysols.org",
    logo: "https://mercurysols.org/logo.png",
};
ejs.renderFile("./templates/email.ejs", data, (err, html) => {
    if (err) {
        console.log(err);
    }
    else {
        console.log(html);
    }
});