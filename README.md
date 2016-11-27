# Project: TO DO LIST
## App name: DONE

#### Description
This app is perfect for people who are longing for a more organized and productive life.

The users log in and are able to add tasks and give each task a priority from 1 to 5 (5 being the highest). Each task will have its deadline and the app can remind the user about it. It can also choose N (user defined) most important tasks every day that the user has to complete. The user is able to make task tags and give one or more tags to each task.

This is a web application, which means that it can be accessed by every device supporting HTML5.

#### Browser compatibility
The app was tested in Chrome, Mozilla Firefox and Opera. It works good on every browser, but if one looks very carefully, some minor differences in design can be spotted. One thing that stands out is input type date. It works only in Chrome, other browsers just show it as a normal textfield. That does not really affect the performance, but I need to be careful about it in the second part of the project.

#### Features
One of the special features is the graph on the "Productivity" site I implemented myself. Using Javascript I draw a graph on a HTML5 Canvas element. I compute the coordinates from input data so that they are equally distributed over the canvas. The function is called every time a window is resized, so the graph is responsive.
Another special feature are the modal windows, which are made without Javascript. The modal windows show up with a nice ease-in transition and darken the background content.

#### Comments
The visual part is finished and that was more or less the goal of the first part of the project. Some of the functionalities already work, others do not (some things are hardcoded). That is because it did not make sense to implement them without any proper backend. 