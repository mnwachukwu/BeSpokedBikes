-- ======================
-- Addresses (20 rows)
-- ======================
INSERT INTO Addresses (Id, Line1, City, State, ZipCode, Country, CreatedDate)
VALUES
(NEWID(), '123 Main St', 'Oakland', 'AL', '62701', 'USA', GETDATE()),
(NEWID(), '456 Oak Ave', 'Springfield', 'AK', '62702', 'USA', GETDATE()),
(NEWID(), '789 Pine Rd', 'Flowery Branch', 'AZ', '60601', 'USA', GETDATE()),
(NEWID(), '101 Maple St', 'Naperville', 'AR', '60540', 'USA', GETDATE()),
(NEWID(), '202 Birch St', 'Peoria', 'CA', '61602', 'USA', GETDATE()),
(NEWID(), '303 Cedar Ln', 'Evanston', 'CO', '60201', 'USA', GETDATE()),
(NEWID(), '404 Elm St', 'Aurora', 'CT', '60505', 'USA', GETDATE()),
(NEWID(), '505 Walnut Ave', 'Decatur', 'DE', '62521', 'USA', GETDATE()),
(NEWID(), '606 Cherry Rd', 'Rockford', 'FL', '61101', 'USA', GETDATE()),
(NEWID(), '707 Spruce St', 'Joliet', 'GA', '60431', 'USA', GETDATE()),
(NEWID(), '808 Aspen Ln', 'Bloomington', 'HI', '61701', 'USA', GETDATE()),
(NEWID(), '909 Hickory St', 'Champaign', 'ID', '61820', 'USA', GETDATE()),
(NEWID(), '111 Fir St', 'Normal', 'IL', '61761', 'USA', GETDATE()),
(NEWID(), '222 Poplar Ave', 'Elgin', 'IN', '60120', 'USA', GETDATE()),
(NEWID(), '333 Willow Rd', 'Waukegan', 'IA', '60085', 'USA', GETDATE()),
(NEWID(), '444 Sycamore St', 'Bolingbrook', 'KS', '60440', 'USA', GETDATE()),
(NEWID(), '555 Magnolia Ave', 'Orland Park', 'KY', '60462', 'USA', GETDATE()),
(NEWID(), '666 Dogwood Rd', 'Moline', 'LA', '61265', 'USA', GETDATE()),
(NEWID(), '777 Palm St', 'Rock Island', 'ME', '61201', 'USA', GETDATE()),
(NEWID(), '888 Cottonwood Ln', 'Peoria', 'MD', '61615', 'USA', GETDATE());


-- ======================
-- Manufacturers (20 rows)
-- ======================
-- Use random AddressIds from Addresses
INSERT INTO Manufacturers (Id, Name, AddressId, Phone, CreatedDate)
VALUES
(NEWID(), 'BeSpoked Bikes', (SELECT TOP 1 Id FROM Addresses ORDER BY NEWID()), '555-1000', GETDATE()),
(NEWID(), 'BikeWorks', (SELECT TOP 1 Id FROM Addresses ORDER BY NEWID()), '555-1001', GETDATE()),
(NEWID(), 'CyclePro', (SELECT TOP 1 Id FROM Addresses ORDER BY NEWID()), '555-1002', GETDATE()),
(NEWID(), 'Speedster Inc', (SELECT TOP 1 Id FROM Addresses ORDER BY NEWID()), '555-1003', GETDATE()),
(NEWID(), 'PedalMasters', (SELECT TOP 1 Id FROM Addresses ORDER BY NEWID()), '555-1004', GETDATE()),
(NEWID(), 'VeloTech', (SELECT TOP 1 Id FROM Addresses ORDER BY NEWID()), '555-1005', GETDATE()),
(NEWID(), 'GearWorks', (SELECT TOP 1 Id FROM Addresses ORDER BY NEWID()), '555-1006', GETDATE()),
(NEWID(), 'Wheelie Inc', (SELECT TOP 1 Id FROM Addresses ORDER BY NEWID()), '555-1007', GETDATE()),
(NEWID(), 'ChainLink Co', (SELECT TOP 1 Id FROM Addresses ORDER BY NEWID()), '555-1008', GETDATE()),
(NEWID(), 'PedalPower', (SELECT TOP 1 Id FROM Addresses ORDER BY NEWID()), '555-1009', GETDATE()),
(NEWID(), 'Spoke & Hub', (SELECT TOP 1 Id FROM Addresses ORDER BY NEWID()), '555-1010', GETDATE()),
(NEWID(), 'TrailRiders', (SELECT TOP 1 Id FROM Addresses ORDER BY NEWID()), '555-1011', GETDATE()),
(NEWID(), 'MountainGo', (SELECT TOP 1 Id FROM Addresses ORDER BY NEWID()), '555-1012', GETDATE()),
(NEWID(), 'UrbanCycles', (SELECT TOP 1 Id FROM Addresses ORDER BY NEWID()), '555-1013', GETDATE()),
(NEWID(), 'RoadKing', (SELECT TOP 1 Id FROM Addresses ORDER BY NEWID()), '555-1014', GETDATE()),
(NEWID(), 'BikePlanet', (SELECT TOP 1 Id FROM Addresses ORDER BY NEWID()), '555-1015', GETDATE()),
(NEWID(), 'CycleWorld', (SELECT TOP 1 Id FROM Addresses ORDER BY NEWID()), '555-1016', GETDATE()),
(NEWID(), 'RideOn', (SELECT TOP 1 Id FROM Addresses ORDER BY NEWID()), '555-1017', GETDATE()),
(NEWID(), 'TwoWheels', (SELECT TOP 1 Id FROM Addresses ORDER BY NEWID()), '555-1018', GETDATE()),
(NEWID(), 'FastPedal', (SELECT TOP 1 Id FROM Addresses ORDER BY NEWID()), '555-1019', GETDATE());


-- ======================
-- Customers (10 rows)
-- ======================
-- Use random AddressIds from Addresses
INSERT INTO Customers (Id, FirstName, LastName, LoyaltyPoints, AddressId, PhoneNumber, StartDate, CreatedDate)
VALUES
(NEWID(), 'John', 'Doe', 120, (SELECT TOP 1 Id FROM Addresses ORDER BY NEWID()), '555-2000', GETDATE(), GETDATE()),
(NEWID(), 'Jane', 'Smith', 250, (SELECT TOP 1 Id FROM Addresses ORDER BY NEWID()), '555-2001', GETDATE(), GETDATE()),
(NEWID(), 'Alice', 'Johnson', 90, (SELECT TOP 1 Id FROM Addresses ORDER BY NEWID()), '555-2002', GETDATE(), GETDATE()),
(NEWID(), 'Bob', 'Williams', 150, (SELECT TOP 1 Id FROM Addresses ORDER BY NEWID()), '555-2003', GETDATE(), GETDATE()),
(NEWID(), 'Charlie', 'Brown', 300, (SELECT TOP 1 Id FROM Addresses ORDER BY NEWID()), '555-2004', GETDATE(), GETDATE()),
(NEWID(), 'Diana', 'Miller', 50, (SELECT TOP 1 Id FROM Addresses ORDER BY NEWID()), '555-2005', GETDATE(), GETDATE()),
(NEWID(), 'Evan', 'Davis', 75, (SELECT TOP 1 Id FROM Addresses ORDER BY NEWID()), '555-2006', GETDATE(), GETDATE()),
(NEWID(), 'Fiona', 'Garcia', 180, (SELECT TOP 1 Id FROM Addresses ORDER BY NEWID()), '555-2007', GETDATE(), GETDATE()),
(NEWID(), 'George', 'Martinez', 220, (SELECT TOP 1 Id FROM Addresses ORDER BY NEWID()), '555-2008', GETDATE(), GETDATE()),
(NEWID(), 'Hannah', 'Lopez', 95, (SELECT TOP 1 Id FROM Addresses ORDER BY NEWID()), '555-2009', GETDATE(), GETDATE());


-- ======================
-- Salespeople (10 rows)
-- ======================
-- Use random AddressIds from Addresses
INSERT INTO Salespeople (Id, FirstName, LastName, AddressId, PhoneNumber, StartDate, CreatedDate)
VALUES
(NEWID(), 'Matt', 'Nwachukwu', (SELECT TOP 1 Id FROM Addresses ORDER BY NEWID()), '555-3000', GETDATE(), GETDATE()),
(NEWID(), 'Sarah', 'Parker', (SELECT TOP 1 Id FROM Addresses ORDER BY NEWID()), '555-3001', GETDATE(), GETDATE()),
(NEWID(), 'Mike', 'Evans', (SELECT TOP 1 Id FROM Addresses ORDER BY NEWID()), '555-3002', GETDATE(), GETDATE()),
(NEWID(), 'Laura', 'Scott', (SELECT TOP 1 Id FROM Addresses ORDER BY NEWID()), '555-3003', GETDATE(), GETDATE()),
(NEWID(), 'Kevin', 'Adams', (SELECT TOP 1 Id FROM Addresses ORDER BY NEWID()), '555-3004', GETDATE(), GETDATE()),
(NEWID(), 'Olivia', 'Clark', (SELECT TOP 1 Id FROM Addresses ORDER BY NEWID()), '555-3005', GETDATE(), GETDATE()),
(NEWID(), 'Daniel', 'Lewis', (SELECT TOP 1 Id FROM Addresses ORDER BY NEWID()), '555-3006', GETDATE(), GETDATE()),
(NEWID(), 'Sophia', 'Robinson', (SELECT TOP 1 Id FROM Addresses ORDER BY NEWID()), '555-3007', GETDATE(), GETDATE()),
(NEWID(), 'Brian', 'Walker', (SELECT TOP 1 Id FROM Addresses ORDER BY NEWID()), '555-3008', GETDATE(), GETDATE()),
(NEWID(), 'Emma', 'Hall', (SELECT TOP 1 Id FROM Addresses ORDER BY NEWID()), '555-3009', GETDATE(), GETDATE());


-- ======================
-- Products (10 rows)
-- ======================
-- Use random ManufacturerIds from Manufacturers
INSERT INTO Products (Id, Name, ManufacturerId, Style, PurchasePrice, SalePrice, QuantityOnHand, QuantityOnOrder, CommissionPercentage, CreatedDate)
VALUES
(NEWID(), 'Crimson Comet', (SELECT TOP 1 Id FROM Manufacturers ORDER BY NEWID()), 0, 500, 750, 10, 5, 10, GETDATE()),
(NEWID(), 'The Marauder', (SELECT TOP 1 Id FROM Manufacturers ORDER BY NEWID()), 1, 600, 900, 8, 4, 12, GETDATE()),
(NEWID(), 'Simply Glide', (SELECT TOP 1 Id FROM Manufacturers ORDER BY NEWID()), 2, 550, 825, 12, 6, 11, GETDATE()),
(NEWID(), 'Trail Blazer', (SELECT TOP 1 Id FROM Manufacturers ORDER BY NEWID()), 3, 300, 450, 15, 3, 10, GETDATE()),
(NEWID(), 'Silver Streak', (SELECT TOP 1 Id FROM Manufacturers ORDER BY NEWID()), 4, 400, 600, 7, 2, 9, GETDATE()),
(NEWID(), 'Pedal Phantom', (SELECT TOP 1 Id FROM Manufacturers ORDER BY NEWID()), 5, 1200, 1800, 5, 1, 15, GETDATE()),
(NEWID(), 'Twilight', (SELECT TOP 1 Id FROM Manufacturers ORDER BY NEWID()), 6, 700, 1050, 3, 1, 10, GETDATE()),
(NEWID(), 'Velocity Viper', (SELECT TOP 1 Id FROM Manufacturers ORDER BY NEWID()), 7, 650, 975, 4, 2, 12, GETDATE()),
(NEWID(), 'EcoRider', (SELECT TOP 1 Id FROM Manufacturers ORDER BY NEWID()), 8, 800, 1200, 6, 3, 10, GETDATE()),
(NEWID(), 'Iron Horse', (SELECT TOP 1 Id FROM Manufacturers ORDER BY NEWID()), 9, 450, 675, 9, 4, 11, GETDATE());


-- ======================
-- Sales (10 rows)
-- ======================
-- Use random a Salesperson and Customer from Salespeople and Customers
INSERT INTO Sales (Id, SalespersonId, CustomerId, SaleDate, CreatedDate)
VALUES
(NEWID(), (SELECT TOP 1 Id FROM Salespeople ORDER BY NEWID()), (SELECT TOP 1 Id FROM Customers ORDER BY NEWID()), GETDATE(), GETDATE()),
(NEWID(), (SELECT TOP 1 Id FROM Salespeople ORDER BY NEWID()), (SELECT TOP 1 Id FROM Customers ORDER BY NEWID()), GETDATE(), GETDATE()),
(NEWID(), (SELECT TOP 1 Id FROM Salespeople ORDER BY NEWID()), (SELECT TOP 1 Id FROM Customers ORDER BY NEWID()), GETDATE(), GETDATE()),
(NEWID(), (SELECT TOP 1 Id FROM Salespeople ORDER BY NEWID()), (SELECT TOP 1 Id FROM Customers ORDER BY NEWID()), GETDATE(), GETDATE()),
(NEWID(), (SELECT TOP 1 Id FROM Salespeople ORDER BY NEWID()), (SELECT TOP 1 Id FROM Customers ORDER BY NEWID()), GETDATE(), GETDATE()),
(NEWID(), (SELECT TOP 1 Id FROM Salespeople ORDER BY NEWID()), (SELECT TOP 1 Id FROM Customers ORDER BY NEWID()), GETDATE(), GETDATE()),
(NEWID(), (SELECT TOP 1 Id FROM Salespeople ORDER BY NEWID()), (SELECT TOP 1 Id FROM Customers ORDER BY NEWID()), GETDATE(), GETDATE()),
(NEWID(), (SELECT TOP 1 Id FROM Salespeople ORDER BY NEWID()), (SELECT TOP 1 Id FROM Customers ORDER BY NEWID()), GETDATE(), GETDATE()),
(NEWID(), (SELECT TOP 1 Id FROM Salespeople ORDER BY NEWID()), (SELECT TOP 1 Id FROM Customers ORDER BY NEWID()), GETDATE(), GETDATE()),
(NEWID(), (SELECT TOP 1 Id FROM Salespeople ORDER BY NEWID()), (SELECT TOP 1 Id FROM Customers ORDER BY NEWID()), GETDATE(), GETDATE());


-- ======================
-- SaleProduct (30 rows)
-- ======================
-- Use random a random Sale and Product from Sales and Products
INSERT INTO SaleProduct (Id, SaleId, ProductId, Quantity, CreatedDate)
VALUES
(NEWID(), (SELECT TOP 1 Id FROM Sales ORDER BY NEWID()), (SELECT TOP 1 Id FROM Products ORDER BY NEWID()), 2, GETDATE()),
(NEWID(), (SELECT TOP 1 Id FROM Sales ORDER BY NEWID()), (SELECT TOP 1 Id FROM Products ORDER BY NEWID()), 1, GETDATE()),
(NEWID(), (SELECT TOP 1 Id FROM Sales ORDER BY NEWID()), (SELECT TOP 1 Id FROM Products ORDER BY NEWID()), 3, GETDATE()),
(NEWID(), (SELECT TOP 1 Id FROM Sales ORDER BY NEWID()), (SELECT TOP 1 Id FROM Products ORDER BY NEWID()), 2, GETDATE()),
(NEWID(), (SELECT TOP 1 Id FROM Sales ORDER BY NEWID()), (SELECT TOP 1 Id FROM Products ORDER BY NEWID()), 1, GETDATE()),
(NEWID(), (SELECT TOP 1 Id FROM Sales ORDER BY NEWID()), (SELECT TOP 1 Id FROM Products ORDER BY NEWID()), 3, GETDATE()),
(NEWID(), (SELECT TOP 1 Id FROM Sales ORDER BY NEWID()), (SELECT TOP 1 Id FROM Products ORDER BY NEWID()), 2, GETDATE()),
(NEWID(), (SELECT TOP 1 Id FROM Sales ORDER BY NEWID()), (SELECT TOP 1 Id FROM Products ORDER BY NEWID()), 1, GETDATE()),
(NEWID(), (SELECT TOP 1 Id FROM Sales ORDER BY NEWID()), (SELECT TOP 1 Id FROM Products ORDER BY NEWID()), 3, GETDATE()),
(NEWID(), (SELECT TOP 1 Id FROM Sales ORDER BY NEWID()), (SELECT TOP 1 Id FROM Products ORDER BY NEWID()), 2, GETDATE()),
(NEWID(), (SELECT TOP 1 Id FROM Sales ORDER BY NEWID()), (SELECT TOP 1 Id FROM Products ORDER BY NEWID()), 1, GETDATE()),
(NEWID(), (SELECT TOP 1 Id FROM Sales ORDER BY NEWID()), (SELECT TOP 1 Id FROM Products ORDER BY NEWID()), 3, GETDATE()),
(NEWID(), (SELECT TOP 1 Id FROM Sales ORDER BY NEWID()), (SELECT TOP 1 Id FROM Products ORDER BY NEWID()), 2, GETDATE()),
(NEWID(), (SELECT TOP 1 Id FROM Sales ORDER BY NEWID()), (SELECT TOP 1 Id FROM Products ORDER BY NEWID()), 1, GETDATE()),
(NEWID(), (SELECT TOP 1 Id FROM Sales ORDER BY NEWID()), (SELECT TOP 1 Id FROM Products ORDER BY NEWID()), 3, GETDATE()),
(NEWID(), (SELECT TOP 1 Id FROM Sales ORDER BY NEWID()), (SELECT TOP 1 Id FROM Products ORDER BY NEWID()), 2, GETDATE()),
(NEWID(), (SELECT TOP 1 Id FROM Sales ORDER BY NEWID()), (SELECT TOP 1 Id FROM Products ORDER BY NEWID()), 1, GETDATE()),
(NEWID(), (SELECT TOP 1 Id FROM Sales ORDER BY NEWID()), (SELECT TOP 1 Id FROM Products ORDER BY NEWID()), 3, GETDATE()),
(NEWID(), (SELECT TOP 1 Id FROM Sales ORDER BY NEWID()), (SELECT TOP 1 Id FROM Products ORDER BY NEWID()), 2, GETDATE()),
(NEWID(), (SELECT TOP 1 Id FROM Sales ORDER BY NEWID()), (SELECT TOP 1 Id FROM Products ORDER BY NEWID()), 1, GETDATE()),
(NEWID(), (SELECT TOP 1 Id FROM Sales ORDER BY NEWID()), (SELECT TOP 1 Id FROM Products ORDER BY NEWID()), 3, GETDATE()),
(NEWID(), (SELECT TOP 1 Id FROM Sales ORDER BY NEWID()), (SELECT TOP 1 Id FROM Products ORDER BY NEWID()), 2, GETDATE()),
(NEWID(), (SELECT TOP 1 Id FROM Sales ORDER BY NEWID()), (SELECT TOP 1 Id FROM Products ORDER BY NEWID()), 1, GETDATE()),
(NEWID(), (SELECT TOP 1 Id FROM Sales ORDER BY NEWID()), (SELECT TOP 1 Id FROM Products ORDER BY NEWID()), 3, GETDATE()),
(NEWID(), (SELECT TOP 1 Id FROM Sales ORDER BY NEWID()), (SELECT TOP 1 Id FROM Products ORDER BY NEWID()), 2, GETDATE()),
(NEWID(), (SELECT TOP 1 Id FROM Sales ORDER BY NEWID()), (SELECT TOP 1 Id FROM Products ORDER BY NEWID()), 1, GETDATE()),
(NEWID(), (SELECT TOP 1 Id FROM Sales ORDER BY NEWID()), (SELECT TOP 1 Id FROM Products ORDER BY NEWID()), 3, GETDATE()),
(NEWID(), (SELECT TOP 1 Id FROM Sales ORDER BY NEWID()), (SELECT TOP 1 Id FROM Products ORDER BY NEWID()), 2, GETDATE()),
(NEWID(), (SELECT TOP 1 Id FROM Sales ORDER BY NEWID()), (SELECT TOP 1 Id FROM Products ORDER BY NEWID()), 1, GETDATE()),
(NEWID(), (SELECT TOP 1 Id FROM Sales ORDER BY NEWID()), (SELECT TOP 1 Id FROM Products ORDER BY NEWID()), 3, GETDATE());


-- ======================
-- Discounts (10 rows)
-- ======================
DECLARE @Now DATETIME2 = GETDATE();

INSERT INTO Discounts
(
    Id,
    ProductId,
    BeginDate,
    EndDate,
    DiscountPercentage,
    CreatedDate
)
SELECT
    NEWID() AS Id,
    p.Id AS ProductId,
    DATEADD(DAY, -ABS(CHECKSUM(NEWID())) % 30, @Now) AS BeginDate, -- Random assignment of date (sourced from the Internet)
    DATEADD(DAY, ABS(CHECKSUM(NEWID())) % 30 + 7, @Now) AS EndDate, -- Random assignment of date (sourced from the Internet)
    v.DiscountPercentage,
    @Now AS CreatedDate
FROM
(
    VALUES
        (0.05),
        (0.1),
        (0.15),
        (0.2),
        (0.25),
        (0.3),
        (0.35),
        (0.4),
        (0.45),
        (0.5)
) v(DiscountPercentage)
CROSS APPLY
(
    SELECT TOP 1 Id
    FROM Products
    ORDER BY NEWID()
) p;


-- ============================================
-- Assign all salespeople to a single manager
-- (except the manager themself)
-- ============================================
DECLARE @ManagerId NVARCHAR(450);

-- Assign me as the manager for everyone else
DECLARE @ManagerFirstName NVARCHAR(100) = 'Matt';
DECLARE @ManagerLastName  NVARCHAR(100) = 'Nwachukwu';

-- Get the manager's Id
SELECT @ManagerId = Id
FROM Salespeople
WHERE FirstName = @ManagerFirstName
  AND LastName = @ManagerLastName;

-- Safety check
IF @ManagerId IS NOT NULL
BEGIN
    -- Assign manager to everyone except the manager
    UPDATE Salespeople
    SET ManagerId = @ManagerId
    WHERE Id <> @ManagerId;
END;


-- ==========================================================
-- Set CreateUserId based on a specific user (by name)
-- And align Sales / SaleProduct CreateUserId with Salesperson
-- ==========================================================

DECLARE @CreateUserId NVARCHAR(450);
DECLARE @FirstName NVARCHAR(100) = 'Matt';
DECLARE @LastName  NVARCHAR(100) = 'Nwachukwu';

-- Resolve the user
SELECT @CreateUserId = Id
FROM Salespeople
WHERE FirstName = @FirstName
  AND LastName  = @LastName;

-- Safety check
IF @CreateUserId IS NOT NULL
BEGIN
    UPDATE Addresses
    SET CreateUserId = @CreateUserId;

    UPDATE Manufacturers
    SET CreateUserId = @CreateUserId;

    UPDATE Customers
    SET CreateUserId = @CreateUserId;

    UPDATE Salespeople
    SET CreateUserId = @CreateUserId;

    UPDATE Products
    SET CreateUserId = @CreateUserId;

    UPDATE Discounts
    SET CreateUserId = @CreateUserId;
END;

-- Salesperson ID Tables

UPDATE Sales
SET CreateUserId = SalespersonId
WHERE SalespersonId IS NOT NULL;

UPDATE sp
SET CreateUserId = s.SalespersonId
FROM SaleProduct sp
JOIN Sales s ON sp.SaleId = s.Id
WHERE s.SalespersonId IS NOT NULL;