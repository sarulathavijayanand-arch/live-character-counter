# Real-time Character Counter

## Description
A simple text area with live character counting functionality.

## Requirements Implemented
- Created textarea with 200 max characters info
- Added 'input' event listener for real-time tracking
- Displays typed and remaining characters (e.g., 150/200)
- Prevents typing after limit and shows warning message

## Tech Used
- HTML, CSS, JavaScript

## How it Works
Uses input event -> calculates `value.length` -> updates counter -> if length == 200, shows warning.
