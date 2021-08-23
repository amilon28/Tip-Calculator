# Tip-Calculator

![tip](https://user-images.githubusercontent.com/39567999/130523995-d9b5b77c-c1bb-497f-a281-387b74313338.png)

## How it Works ?
It Calculates Bills based on 3 parameters:

- Bill Amount
- Satisfaction rate
- Number of people

### Satisfaction rate
Option | Rate
------------ | -------------
Excellent   | 30
Very Good   | 25
Good   | 20
Not Bad   |  15
Bad   | 5


Content in the first column | Content in the second column

**Formula for calculating tips based on above parameters:**
```javascript
Tip = ((bill * atisfaction rate) / 100) / numberOfPeople 
```



