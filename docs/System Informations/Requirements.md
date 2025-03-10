---
sidebar_position: 1
---

# Requirements

### Functional Requirements

1. **Generate new schedules**: The user should be able to configure/customize and perform a generating schedule task.
2. **Optmize the generated schedules**: The user must be able to optmize a previously generated schedule with specific method/algorithm that allows this base configuration.
3. **Fetch all schedules**: The user should be able to fetch and see all the generated schedules, and their metadata(info regarding the generating process, such as the algorithm used and a timestamp) as well
4. **Company restrictions management**:The user must be able to manage the restrictions used in the generation of the schedules.
5. **Real-time update of schedules generation process**: The user should be able to receive real-time notifications(in the system) of when a generating schedule task is finished
6. **Comparison between multiple schedules**: The system should have a feature of comparison between the newly generated schedule with the previouslys generated ones, the comparison is perfomed by a set of parameters (e.g. number of rules/restrictions fullfiled) 

### Non-Functional Requirements

1. **Performance and scalability in schedule generation**: When it comes to launch tasks(generate new schedules) and execute the task itselfs (the algorithsm and methods used to generate new schedules), the system must ensure effiency performance and scalability to reduce the time of execution and response to lowest as possible 
2. **System monitoring and metrics collection**: The system should have a simple but robust monitoring process, that could be achieved by logs (that are also stored in the file system for instance), and metrics collection regarding the algorithms execution should also be perfomed, since these data might be useful for some features related to schedules/algorithms comparison 
3. **Availability & reliability over the schedule generation process**: The system should be able to perform real-time (or almost) response to generating schedules process (tasks) and it should ensure reliability when it comes to the newly generated schedules and their useful info