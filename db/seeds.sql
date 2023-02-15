INSERT INTO department (name)
VALUES ("legal"),
       ("engineering"),
       ("management"),
       ("new hires");
       
INSERT INTO role (title, salary, department_id)
VALUES ("sales person", 10000, 1),
        ("admin", 35000, 2 ),
        ("engineer", 75000, 3),
        ("reseption", 20000, 4);

INSERT INTO employee (first_name, last_name, role_id, manager_id)
VALUES ("Melissa", "Robert", 1, NULL)
        ("Ali", "Kashani", 4, 1)
        ("Rock", "Miller", 2, 1)
        ("Nola", "Moore", 3, 1)
        ("Nikki", "White", 3, 1)
        

       