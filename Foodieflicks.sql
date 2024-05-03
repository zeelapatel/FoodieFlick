CREATE DATABASE foodieflicks;
GO
USE foodieflicks;

CREATE TABLE [Table] (
    TableNumber INT IDENTITY(1,1) PRIMARY KEY,
    QRCode VARBINARY(MAX),
    SeatCount INT
);


CREATE TABLE Menu (
    ItemID INT IDENTITY(1,1) PRIMARY KEY,
    ItemName VARCHAR(255) NOT NULL,
    ItemPrice DECIMAL(10, 2) NOT NULL,
    [Description] TEXT,
    CategoryName VARCHAR(255),
    [Availability] BIT DEFAULT 1,
    -- FOREIGN KEY (CategoryID) REFERENCES Categories(CategoryID)
);
CREATE TABLE Orders (
    OrderID INT IDENTITY(1,1) PRIMARY KEY,
    TableNumber INT NOT NULL,
    ItemID INT NOT NULL,
    Quantity INT NOT NULL,
    OrderStatus VARCHAR(50),
    Timestamp DATETIME,
    FOREIGN KEY (TableNumber) REFERENCES [Table](TableNumber),
    FOREIGN KEY (ItemID) REFERENCES Menu(ItemID)
);
CREATE TABLE ReviewRating (
    ReviewID INT IDENTITY(1,1) PRIMARY KEY,
    UserName VARCHAR(255),
    PhoneNumber VARCHAR(15),
    Ratings INT CHECK (Ratings >= 1 AND Ratings <= 5),
    Comments TEXT,
    ReviewDate DATETIME DEFAULT GETDATE(),
    Email VARCHAR(255),
    [Location] VARCHAR(100)
);
