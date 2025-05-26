---
sidebar_position: 1
---

# 1 Algorithms Used

## 1.1 Integer Linear Programming (ILP)

Integer Linear Programming (ILP) is an optimization technique used to maximize or minimize a linear function subject to linear constraints, with decision variables restricted to integer values. It is useful for problems like resource allocation and scheduling.

In this project, the **Pulp** library was used to define variables, constraints, and the objective function programmatically.

**Main variables:**
- `x[f][d][t]`: binary, indicates whether employee *f* is scheduled on day *d*, shift *t*.
- `y[d][t][e]`: integer, number of employees from team *e* on shift *t*, day *d*.
- `penal[d][t][e]`: continuous, measures the negative difference between the required minimum and actual staffing.

**Objective function:**
Minimize penalties related to unmet minimum shift coverage per team throughout the year.

**Constraints:**
Defined to comply with rules such as workday limits, rest periods, transitions, and minimum coverage, applied individually or in groups.

**Model steps:**
1. Data initialization.
2. ILP model creation.
3. Objective function definition.
4. Solving with `PULP_CBC_CMD`.

---

## 1.2 Hill Climbing

The Hill Climbing algorithm is a local search technique that starts from a feasible initial solution and iteratively tries to improve it by minimizing penalties.

**Rules followed in the initial solution:**
- No work during vacation.
- Avoid invalid transitions (e.g., afternoon → morning).
- Respect team preferences.

**Penalty criteria:**
1. C1: More than 5 consecutive workdays.
2. C2: Excess weekends/holidays worked.
3. C3: Lack of minimum shift coverage.
4. C4: Excessive days off.
5. C5: Invalid transitions (T→M).
6. C6: Daily minimum coverage violations.

**Process:**
Performs small schedule changes and keeps those that reduce the total penalty, continuing until no further improvement is possible.

---

## 1.3 Greedy Randomized

This algorithm builds the schedule progressively by assigning shifts to employees based on strict rules and a cost function.

**Feasibility rules (f1):**
- Maximum of 5 consecutive workdays.
- No more than 22 Sundays/holidays per employee.
- Prohibit invalid transitions (T→M).

**Cost function (f2):**
Penalizes under-staffing, favors coverage near the ideal, and penalizes over-staffing.

**Controlled randomness:**
Attempts multiple iterations (`num_iter`) per day and selects among the feasible candidates to avoid poor local optima.

---

## 1.4 Greedy Randomized with Hill Climbing Refinement

A hybrid algorithm with two phases: initial construction and refinement.

**Phase 1: Greedy Randomized**
- Pseudo-random assignment of days and shifts respecting:
  - Up to 5 consecutive workdays.
  - Maximum of 22 Sundays/holidays.
  - No afternoon → morning transitions.
- Light feasibility and cost checks.

**Phase 2: Hill Climbing**
- Small changes to the schedule (day swaps).
- Evaluation based on:
  1. Excess consecutive workdays.
  2. Too many Sundays/holidays.
  3. Unmet minimum coverage.
  4. Deviation from ideal workload (223 days).
  5. Invalid transitions.
- Accepts changes that reduce total score.

---

# 2 Algorithms with Unsatisfactory Results

Some tested algorithms failed to provide satisfactory solutions for the annual schedule.

---

## 2.1 Genetic Algorithm

Uses the **DEAP** library to apply evolutionary operations to schedule generation.

**Individual:** matrix (12 x 365) with assigned shifts (0 = day off, 1 = morning, 2 = afternoon, F = vacation).

**Evaluation:**
Penalizes:
- Incorrect number of workdays.
- Excess Sundays/holidays.
- Over 5 consecutive workdays.
- Invalid transitions (T→M).

**Genetic operations:**
- **Mutation:** randomly swaps days.
- **Crossover:** exchanges schedule segments between individuals.
- **Selection:** tournament with elitism.

**Evolution:** 120 generations with CXPB = 0.7 and MUTPB = 0.3.

**Result:** Failed to produce quality annual schedules, especially under multiple simultaneous constraints.

---

## 2.2 Constraint Satisfaction Problem (CSP)

Model based on constraint satisfaction, where each variable represents an employee's shift on a given day.

**Variable domain:** morning (M_A, M_B), afternoon (T_A, T_B), off (0), vacation (F).

**Constraints:** implemented as functions checking the validity of assignments, including:
- Vacation days.
- Transition rules.
- Max consecutive days.

**Solving:** backtracking with constraint propagation using minimum domain heuristics.

**Result:** Worked well for 30-day periods, but not scalable to 365 days due to execution time and complexity.
