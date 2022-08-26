//JJacksonCode
//array method examples

const items = [
  {},
  {},
  {},
  {},
  {},
  {},
  {}
]

const filteredItems = items.filter((item) => {
  return item.price <= 125
});

console.log(items)
// map ex

items.map(item => item.id)
