import java.util.*;

class Product {
    int productId;
    String productName;
    String category;

    Product(int productId, String productName, String category) {
        this.productId = productId;
        this.productName = productName;
        this.category = category;
    }

    public String toString() {
        return productId + " " + productName + " " + category;
    }
}

public class ECommerceSearchExample {
    static Product linearSearch(Product[] products, int id) {
        for (Product p : products) {
            if (p.productId == id) {
                return p;
            }
        }
        return null;
    }

    static Product binarySearch(Product[] products, int id) {
        int low = 0;
        int high = products.length - 1;

        while (low <= high) {
            int mid = (low + high) / 2;

            if (products[mid].productId == id)
                return products[mid];
            else if (products[mid].productId < id)
                low = mid + 1;
            else
                high = mid - 1;
        }

        return null;
    }

    public static void main(String[] args) {

        Product[] products = {
                new Product(103, "Laptop", "Electronics"),
                new Product(101, "Phone", "Electronics"),
                new Product(105, "Shoes", "Fashion"),
                new Product(102, "Book", "Education"),
                new Product(104, "Watch", "Accessories")
        };

        int searchId = 104;

        Product result1 = linearSearch(products, searchId);

        if (result1 != null)
            System.out.println("Linear Search Found: " + result1);
        else
            System.out.println("Product Not Found");

        Arrays.sort(products,
                Comparator.comparingInt(p -> p.productId));

        Product result2 = binarySearch(products, searchId);

        if (result2 != null)
            System.out.println("Binary Search Found: " + result2);
        else
            System.out.println("Product Not Found");
    }
}

/*
 * Exercise 2: E-commerce Platform Search Function
 * 
 * 1. Big O Notation:
 * Big O notation describes how the running time of an algorithm
 * grows as the input size (n) increases.
 * - It helps in comparing the efficiency of different algorithms.
 * 
 * 2. Search Cases:
 * a) Best Case:
 * - The element is found immediately.
 * - Linear Search: O(1)
 * - Binary Search: O(1)
 * 
 * b) Average Case:
 * - The element is found somewhere in the middle.
 * - Linear Search: O(n)
 * - Binary Search: O(log n)
 * 
 * c) Worst Case:
 * - The element is at the end or not present.
 * - Linear Search: O(n)
 * - Binary Search: O(log n)
 * 
 * 3. Time Complexity Comparison:
 * - Linear Search:
 * Best Case : O(1)
 * Average Case : O(n)
 * Worst Case : O(n)
 * 
 * - Binary Search:
 * Best Case : O(1)
 * Average Case : O(log n)
 * Worst Case : O(log n)
 * 
 * 4. Conclusion:
 * - Linear Search is suitable for small or unsorted data.
 * - Binary Search is suitable for large datasets because it is much faster.
 * - For an e-commerce platform with thousands of products,
 * Binary Search is the preferred choice.
 */