INSERT INTO
  department(department_name)
VALUES
  ("Accounting"),
  ("Development"),
  ("HR");
INSERT INTO
  role(title, salary, department_id)
VALUES
  ("Engineer", 94000.00, 2),
  ("Accountant", 56000.00, 1),
  ("HR Representative", 45000.00, 3);
INSERT INTO
  employee(first_name, last_name, role_id, manager_id)
VALUES
  ("Bob", "Dylan", 1, null),
  ("Tony", "Stark", 2, null),
  ("Mark", "Twain", 1, 1),
  ("Molly", "Polly", 2, 1);