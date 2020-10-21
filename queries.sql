-- Multi-Table Query Practice

-- Display the ProductName and CategoryName for all products in the database. Shows 77 records.
SELECT ProductName, CategoryName
FROM product 
JOIN Category ON Product.CategoryId
-- Display the order Id and shipper CompanyName for all orders placed before August 9 2012. Shows 429 records.
SELECT "Order".Id, CompanyName, ShippedDate
FROM "Order" 
JOIN Shipper ON "Order".ShipVia=Shipper.Id
WHERE "Order".ShippedDate < 2012-08-9
ORDER BY "Order".ShippedDate;
-- Display the name and quantity of the products ordered in order with Id 10251. Sort by ProductName. Shows 3 records.
SELECT ProductName, QuantityPerUnit 
FROM Product
JOIN OrderDetail ON OrderDetail.ProductId=Product.Id
WHERE OrderDetail.OrderId=10251
ORDER BY Product.ProductName;
-- Display the OrderID, Customer's Company Name and the employee's LastName for every order. All columns should be labeled clearly. Displays 16,789 records.
SELECT "Order".Id, CompanyName, LastName 
FROM "Order"
JOIN Employee ON "Order".EmployeeId=Employee.Id
JOIN Customer ON  "Order".CustomerId= Customer.Id;