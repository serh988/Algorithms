public class PowerOfTwo {
    public static void main(String[] args) {
        int N = 8; // Пример ввода
        System.out.println(isPowerOfTwo(N) ? "YES" : "NO");
    }

    // Проверяем, является ли число степенью двойки
    public static boolean isPowerOfTwo(int n) {
        if (n <= 0) {
            return false;
        }
        // Число является степенью двойки, если в бинарной форме у него только один бит
        // установлен в 1
        return (n & (n - 1)) == 0;
    }
}
