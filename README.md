# A Finnish coats of arms App

## Introduction
This was my first real ReactJS project. The purpose was to learn React by using it in a meaningful way and I would say I succeeded. The goal of this app was to have
all Finnish municipal coats of arms displayed on a page in an organized fashion. The user has the ability to look through them, click on them to open the actual .PNG
in a separate page. It's also designed to be responsive and account for many different screens. Technologies used include:

- React
- HTML/JSX
- CSS
- JavaScript

It's being deployed with Github Pages and you can visit it here: 

https://jokemon-coder.github.io/CoatsOfArms-App/

Do note that at the moment it is quite slow on first launch as it loads everything in. I am going to try and optimize it more in the future. I am publishing it now in this state so it can at least be viewed in it's intended final look and funcionality.

## Functionality and features

The initial plan was to create an app using React that showcases the Finnish coats of arms. I believe I fulfilled my vision for the finished application exactly as I had
thought it should look and function. The functionality on the page is as follows:

- Ability to view all coats of arms in a gallery
- Ability to select any of these and click on them to view them better
- Clear border on element to indicate it is hovered over or has been clicked
- Search bar to search the coats of arms by names, which automatically fills in the closest match
- Focusing on the coat of arms that has been searched and selected in the search bar
- Ability to sort them in alphabetic or reversed order
- Language features to switch between Finnish and English (Finnish being the default)
- Responsive design to accommodate different screens and their dimensions 

All of these I considered in my initial pre-development planning and all of them were implemented in a way that coincide with my initial writings from the planning phase.

### Known bugs

- The search bar button does not fire off focus to the search bar itself on first click due to "null". Gives an error into the console. Works fine after the first click however. 
