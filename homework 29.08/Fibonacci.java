public class Fibonacci {
    public static void main(String[] args) {
        int N = 10; // Пример ввода
        for (int i = 1; i <= N; i++) {
            System.out.print(fibonacci(i) + " ");
        }
    }

    // Рекурсивно вычисляем число Фибоначчи
    public static int fibonacci(int n) {
        if (n <= 1) {
            return n;
        }
        return fibonacci(n - 1) + fibonacci(n - 2);
    }
}
