# COVID-19-Data-Analytics

Overview:

This project focuses on building a **COVID-19 Vaccination Dashboard** that visually represents vaccination data across different states in India. The goal is to display meaningful insights such as total vaccinations, dose-wise distributions, vaccine types, and patient demographics through an engaging and animated web frontend.

Objectives:

- Analyze vaccination trends using SQL queries
- Visualize key stats using HTML, CSS, and JavaScript
- Create an animated and medical-themed frontend
- Represent the data in a normalized database structure

Key Features:

- Colorful, animated frontend with corona virus, doctors, masks, and syringe visuals
- Patient-wise and state-wise vaccination record management
- Dashboard cards for total vaccinated, dose distribution, and vaccine type counts
- Responsive, searchable, and styled data table
- SQL database backend with normalized schema

Project Structure:

 1. **Database Design**
   **Entities:**
     - Patients
     - Vaccines
     - States
     - GenderTypes
     - Hospitals
     - Vaccination Records

 **Interrelations:**
     - Each vaccination links to a patient, hospital, and vaccine
     - States and gender types are stored in lookup tables

2. **Frontend Design**
     - Built with HTML, CSS, and JavaScript
     - Includes custom animated SVG-like visuals (doctors, injection, corona)
     - Responsive dashboard layout with real-time data display

  Methodology:

  🔹 Data Collection
  
     - Created synthetic dataset of 100 patients with:
     - Name, age, gender, state
     - Injection type (Covaxin/Covishield)
     - Dose number and date

  🔹 Database Normalization
  
     - Structured into 3NF with primary and foreign keys
     - Used dbdiagram.io to model ER diagram

  🔹 SQL Backend
  
    - SQLite used to store and query data
    - Sample queries include:
    - Total vaccinations
    - Dose-wise aggregation
    - Vaccine usage by state/gender
 
Technologies Used:

| Layer         | Tools Used                            |
|---------------|----------------------------------------|
| Frontend      | HTML5, CSS3, JavaScript (Vanilla)      |
| Animations    | CSS Keyframes, Gradients, Shadows      |
| Backend       | SQLite / DB Browser for SQLite         |
| ER Modeling   | dbdiagram.io                           |
| Data Format   | CSV (100 patient records)              |

Use Case:

 A doctor in Tamil Nadu wants to know how many patients have taken the second dose of **Covishield** in the past 30 days.    This can be visualized directly in the dashboard and queried from the database for detailed filtering.
                 

