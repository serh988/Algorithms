public class SumOfDigits {
    public static void main(String[] args) {
        int number = 179; // Пример ввода
        System.out.println(sumOfDigits(number));
    }

    // Рекурсивно вычисляем сумму цифр числа
    public static int sumOfDigits(int n) {
        if (n == 0) {
            return 0;
        }
        return n % 10 + sumOfDigits(n / 10);
    }
}
