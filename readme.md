# Features
1. As a user I want to buy products from other users and vendors.
2. As a user I want to search for products, and compare the best prices.
3. As a buyer I want to checkout with cc.
4. As a seller I want to list my products for purchase.
5. As a user I want my own identifiable profile.

# MVP List
### 1. Auth
    * Users can sign up, login, logout.
    * Demo user
### 2. Search
    * Users can search for items they may want to buy.
    * Sellers can tag items for search.
### 3. Cart
    * Users will have a persisting cart.
### 4. Profile
    * Users will have an about page where they can also list items.
### 5. Shopping
    * Sellers will have their products categorized on main page.
    * Main page content will contain most recent additions based on category.
### 6. Heroku
    * Deploy to Heroku.

# Additional Features
### 1. Checkout
    * Credit card checkout
### 2. Edit Profile
    * Users can change profile info after account has been created.

# Schema
Click here for a better visual representation of 
[Schema](https://drawsql.app/solodolo/diagrams/ebay-clone#) <---------------
### User Table
***
| Column name  | Data Type    | constraints       |
| :---        |    :----:   |:---                 |
| id  | integer  | not null, autoIncrement, primary key |
| username   | string        | not null, unique   |
| email      | string        | not null, unique   |
| hashedPassword | string    | not null           |
| created_at | datetime      | not null           |
***
### Products Table
***
| Column name  | Data Type    | constraints       |
| :---        |    :----:   |:---                 |
| id      | integer  | not null, primary key      |
| title   | string        | not null              |
| img     | string        | not null              |
| description | string        |                   |
| category | string        |  not null             |
| price | float        |  not null                 |
| user_id     | integer       | not null, foreign key |
| created_at | datetime      | not null           |
* user_id references User.id
* category references  Category.id
***
### Categories Table
***
| Column name  | Data Type    | constraints       |
| :---        |    :----:   |:---                 |
| id      | integer  | not null, primary key      |
| category   | string       | not null |
***
### Carts Table
***
| Column name  | Data Type    | constraints       |
| :---        |    :----:   |:---                 |
| user_id      | integer  | not null     |
| product_id      | integer  | not null    |
* user_id references Users.id
* product_id references Products.id

![Wireframe](site_wireframe.png)
<!-- ### Sub-Categories Table
***
| Column name  | Data Type    | constraints       |
| :---        |    :----:   |:---                 |
| product_id      | integer  | not null     |
| sub_category      | integer  | not null    |
* product_id references User.id
*** -->