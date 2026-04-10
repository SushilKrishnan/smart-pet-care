# Smart Pet Care Visit Management System

## Abstract

This project presents a full-stack web application designed to manage pet care visit records with a focus on validation and rule-based updates. The system ensures data integrity by enforcing constraints on record modification based on booking status.

---

## Objectives

* To develop a system for managing pet care visit records
* To implement validation using Visit ID and Owner ID
* To enforce controlled updates based on booking status
* To demonstrate full-stack application development

---

## System Overview

The application enables users to create, search, and update pet visit records. Each record contains details such as visit ID, owner ID, pet name, service type, visit time, and booking status.

A key feature is the enforcement of business rules, where updates to certain fields are permitted only when the booking status is **confirmed**.

---

## Methodology

* **Frontend:** Developed using React.js with multiple pages for create, search, update, status management, and record viewing
* **Backend:** Implemented using Node.js and Express.js to handle API requests and validation
* **Database:** MongoDB used for persistent storage with Mongoose for schema management
* **Validation Logic:**

  * Record retrieval requires both Visit ID and Owner ID
  * Updates to service and visit time are restricted unless status = confirmed
  * Status updates are handled separately

---

## System Architecture

The system follows a client-server architecture:

* **Client Layer:** User interface for input and interaction
* **Server Layer:** Handles business logic and validation
* **Database Layer:** Stores and retrieves records

---

## Key Features

* Creation of new visit records (default status: pending)
* Record retrieval using dual identifiers
* Controlled updates based on status validation
* Status modification (pending, confirmed, cancelled)
* Display of all records

---

## Results and Discussion

The system successfully enforces rule-based updates, preventing unauthorized modifications and ensuring consistency of records. The separation of concerns between frontend and backend improves maintainability and scalability.

---

## Conclusion

The developed system demonstrates effective implementation of validation and business logic in a full-stack environment. It highlights the importance of backend-controlled operations in maintaining data integrity and simulating real-world workflows.

---

## Future Work

* Integration of authentication and role-based access
* Deployment on cloud platforms
* Enhanced user interface and analytics dashboard

---

## Technologies Used

* React.js
* Node.js
* Express.js
* MongoDB

---

## Author

Sushil Krishnan
