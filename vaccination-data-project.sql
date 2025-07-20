1. create table:
CREATE TABLE vaccination_data (
  S_No INTEGER PRIMARY KEY,
  Patient_Name TEXT,
  Age INTEGER,
  State TEXT,
  Gender TEXT,
  Injection_Type TEXT,
  Date_Taken TEXT,
  Dose_No TEXT
);

2. Show all records (check your table):
SELECT * FROM vaccination_data LIMIT 10;

3. Total number of vaccinated patients:
SELECT COUNT(*) AS total_vaccinated FROM vaccination_data;

4. Count by Injection Type (Covaxin or Covishield):
SELECT Injection_Type, COUNT(*) AS total
FROM vaccination_data
GROUP BY Injection_Type;

5. Gender-wise distribution:
SELECT Gender, COUNT(*) AS total
FROM vaccination_data
GROUP BY Gender;

 6. Dose-wise distribution (1st or 2nd):
SELECT Dose_No, COUNT(*) AS total
FROM vaccination_data
GROUP BY Dose_No;

7. Vaccinations by State:
SELECT State, COUNT(*) AS total
FROM vaccination_data
GROUP BY State
ORDER BY total DESC;

8. Age Group Analysis:
SELECT
  CASE
    WHEN Age < 30 THEN '18–29'
    WHEN Age BETWEEN 30 AND 44 THEN '30–44'
    WHEN Age BETWEEN 45 AND 59 THEN '45–59'
    ELSE '60+'
  END AS Age_Group,
  COUNT(*) AS total
FROM vaccination_data
GROUP BY Age_Group;
