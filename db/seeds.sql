INSERT INTO department (id, name)
VALUES (1, "legal"),
       (2, "engineering"),
       (3, "management"),
       (4, "new hires");
       
INSERT INTO role (id, title, salary, department_id)
VALUES (1, "sales person", 10000, 1),
        (2, "admin", 35000, 2 ),
        (3, "engineer", 75000, 3),
        (4, "reseption", 20000, 4);

INSERT INTO employee (id, first_name, last_name, role_id, manager_id)
VALUES (1, "Melissa", "Robert", 1, NULL),
        (2, "Ali", "Kashani", 4, 1),
        (3, "Rock", "Miller", 2, 1),
        (4, "Nola", "Moore", 3, 1),
        (5, "Nikki", "White", 3, 1);


       