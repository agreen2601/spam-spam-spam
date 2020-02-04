import customers from "./data.js"

const emailInfo = customers.map(customer => customer.contacts).map(contact => contact.email)
console.log(emailInfo);