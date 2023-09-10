// CREATE COLLECTIONS
db.createCollection('users');
db.createCollection('admins');
db.createCollection('clients');
db.createCollection('products');
db.createCollection('categories');
db.createCollection('orders');

// USERS
// adding records to the users collection
db.users.insertOne({
    name: "myName",
    password: "myPassword"
  });

db.users.insertOne({
    name: "my second name",
    password: "myPassword2"
  });

db.users.insertOne({
    name: "my third name",
    password: "myPassword3"
  });

// update user
db.users.update(
  { _id: ObjectId('64f9468177014c3f60fabf4a') },
  { $set: { name: 'my first name', password: 'mypassword1' } } 
);

// delete user
db.users.deleteOne(
    { _id: ObjectId('64f9468177014c3f60fabf4a') } 
  );

// query user
db.users.find({ _id: ObjectId('64f9468177014c3f60fabf4a') })

db.users.findOne({ _id: ObjectId('64f9468177014c3f60fabf4a') })


// ADMINS 
// adding records to the admins collection
db.admins.insertOne({
    full_name: "myName",
    email: "myPassword",
    home_address: "lekki, lagos",
    Permissions: "create, update and delete",
    user_id: "123"
  });

db.admins.insertOne({
    full_name: "admin 2",
    email: "password",
    home_address: "Ajah, lagos",
    Permissions: "create, update and delete",
    user_id: "234"
  });

db.admins.insertOne({
    full_name: "admin 3",
    email: "password 2",
    home_address: "Maitama, Abuja",
    Permissions: "create, update and delete",
    user_id: "456"
  });

// update admin
db.admins.update(
  { _id: ObjectId('64f947ce77014c3f60fabf4b') },
  { $set: { full_name: 'my first name', email: 'admin@gmail.com' } } 
);

// delete admin
db.admins.deleteOne(
    { _id: ObjectId('64f947ce77014c3f60fabf4b') } 
  );

// query admin
db.admins.find({ _id: ObjectId('64f947ce77014c3f60fabf4b') })

db.admins.findOne({ _id: ObjectId('64f947ce77014c3f60fabf4b') })


// CLIENTS
// adding records to the clients collection
db.clients.insertOne({
    first_name: "Raymond",
    last_name: "Edoz",
    email_address: "myname@gmail.com",
    home_address: "my address is no 4 fola road lekki",
    postal_code: "202141",
    phone_no: "08022554455",
    city: "Lagos",
    user_id: "123"
  });

db.clients.insertOne({
    first_name: "Edozie",
    last_name: "ray",
    email_address: "name@gmail.com",
    home_address: "my address maitama Abuja",
    postal_code: "102141",
    phone_no: "08022544455",
    city: "Abuja",
    user_id: "456"
  });

db.clients.insertOne({
    first_name: "Benita",
    last_name: "beniz",
    email_address: "beniname@gmail.com",
    home_address: "my address is Ajah Lagos",
    postal_code: "65241",
    phone_no: "08022554455",
    city: "Lagos",
    user_id: "678"
  });

// update client
db.clients.updateOne(
  { _id: ObjectId('64f949d077014c3f60fabf4c') },
  { $set: { first_name: 'Victoria', email_address: 'client@gmail.com' } } 
);

// delete client
db.clients.deleteOne(
  { _id: ObjectId('64f949d077014c3f60fabf4c') },
  );

// query client
db.clients.find({ _id: ObjectId('64f949d077014c3f60fabf4c') })

db.clients.findOne({ _id: ObjectId('64f949d077014c3f60fabf4c') })


// PRODUCTS
// adding records to the products collection
db.products.insertOne({
    name: "lemsip",
    price: "250",
    size: "medium",
    unit: "9",
    description: "it helps improve cold and cough",
    category_id: "245",
    client_id: "789"
  });

db.products.insertOne({
    name: "Clarityn",
    price: "3550",
    size: "small",
    unit: "5",
    description: "it helps improve cold and cough",
    category_id: "667",
    client_id: "754"
  });

db.products.insertOne({
    name: "Strepsils",
    price: "1000",
    size: "large",
    unit: "10",
    description: "it helps improve cold and cough",
    category_id: "112",
    client_id: "482"
  });

// update product
db.products.update(
  { _id: ObjectId('64f94b0d77014c3f60fabf4d') },
  { $set: { name: 'theraflu', price: '2500' } } 
);

// delete product
db.products.deleteOne(
  { _id: ObjectId('64f94b0d77014c3f60fabf4d') }
  );

// query product
db.products.find({ _id: ObjectId('64f94b0d77014c3f60fabf4d') })

db.products.findOne({ _id: ObjectId('64f94b0d77014c3f60fabf4d') })


// CATEGORIES
// adding records to the categories collection
db.categories.insertOne({
    name: "drug",
    description: "medications for treating allergy"
  });

db.categories.insertOne({
    name: "cosmetics",
    description: "making the skin glow and healthy"
  });

db.categories.insertOne({
    name: "cookies",
    description: "best cookies in town"
  });

// update category
db.categories.update(
  { _id: ObjectId('64f94bdb77014c3f60fabf4e') },
  { $set: { name: 'home kits', description: 'variety of home appliances' } } 
);

// delete category
db.categories.deleteOne(
  { _id: ObjectId('64f94bdb77014c3f60fabf4e') }
  );

// query category
db.categories.find({ _id: ObjectId('64f94bdb77014c3f60fabf4e') })

db.categories.findOne({ _id: ObjectId('64f94bdb77014c3f60fabf4e') })


// ORDERS
// adding records to the orders collection
db.orders.insertOne({
    order_date: "20-09-2023",
    order_number: "665522",
    delivery_fee: "$20",
    payment_status: "paid",
    shipping_city: "Lagos",
    postal_code: "77852",
    product_id: "2454"
  });

db.orders.insertOne({
    order_date: "22-09-2023",
    order_number: "5522111",
    delivery_fee: "$50",
    payment_status: "paid",
    shipping_city: "Abuja",
    postal_code: "665857",
    product_id: "23478"
  });

db.orders.insertOne({
    order_date: "25-09-2023",
    order_number: "698111",
    delivery_fee: "$80",
    payment_status: "paid",
    shipping_city: "Port Harcourt",
    postal_code: "3214857",
    product_id: "658145"
  });

// update order
db.orders.update(
  { _id: ObjectId('64f94dc277014c3f60fabf4f') },
  { $set: { shipping_city: 'Kaduna', delivery_fee: '$5000' } } 
);

// delete order
db.orders.deleteOne(
  { _id: ObjectId('64f94dc277014c3f60fabf4f') }
  );

// query an order
db.orders.find({ _id: ObjectId('64f94dc277014c3f60fabf4f') })

db.orders.findOne({ _id: ObjectId('64f94dc277014c3f60fabf4f') })
