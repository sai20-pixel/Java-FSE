/*
Exercise 7: Financial Forecasting

1. Recursion:
   - Recursion is a technique in which a method calls itself
     to solve a smaller version of the same problem.
   - It simplifies problems that can be broken into smaller
     subproblems and usually consists of:
       a) Base Case - stops the recursion.
       b) Recursive Case - calls the method again.

2. Future Value Prediction:
   - The future value can be calculated using the formula:
         Future Value = Present Value × (1 + Growth Rate)^n
     where:
         Present Value = current amount
         Growth Rate = annual growth rate
         n = number of years

3. Time Complexity:
   - If the recursive method makes only one recursive call
     per step, the time complexity is O(n), where n is the
     number of years.
   - The space complexity is also O(n) because of the
     recursive stack.

4. Optimization:
   - Recursion may lead to excessive computation if the same
     subproblems are solved repeatedly.
   - This can be optimized using:
       a) Memoization (storing previously computed results)
       b) Dynamic Programming
       c) An iterative approach to avoid recursion overhead.
*/

public class FinancialForecasting {
    static double futureValue(double amount, double growthRate, int years) {

        if (years == 0)
            return amount;

        return futureValue(amount, growthRate, years - 1) * (1 + growthRate);
    }

    public static void main(String[] args) {
        double presentValue = 10000;
        double growthRate = 0.10;
        int years = 5;

        double result = futureValue(presentValue, growthRate, years);

        System.out.printf("Future Value after %d years = %.2f", years, result);
    }
}
