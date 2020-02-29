USE holidayInn_DB;

INSERT INTO department
(name, department_id)
VALUES
  ('Upper Managment', 1),
  ('Front Desk', 2),
  ('Sales', 3),
  ('Housekeeping', 4),
  ('Food & Beverage', 5),
  ('Engineering', 6),

INSERT INTO role
(title, salary, department_id)
VALUES
  ('General Manager', 200000, 1),
  ('Controller', 100000, 1),
  ('Human Resources', 100000, 1),
  ('Front Office Manager', 60000, 2),
  ('Assistant Front Office Manager', 40000, 2),
  ('Front Desk Clerk', 30000, 2),
  ('Night Auditor', 40000, 2),
  ('Director of Sales', 100000, 3),
  ('Sales Manager', 75000, 3),
  ('Banquet Manager', 65000, 3),
  ('Executive Housekeeper', 80000, 4),
  ('Assistant Executive Housekeeper', 70000, 4),
  ('Head Housekeeper', 40000, 4),
  ('Housekeeper', 30000, 4),
  ('Head Chef', 100000, 5),
  ('Sous Chef', 60000, 5),
  ('Host', 30000, 5);
  ('Bartender', 30000, 5);
  ('Head Engineer', 90000, 6);
  ('Engineer', 50000, 6);






