import java.util.Scanner;

public class Main {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);
        System.out.println("Ваша задача угадать число");
        int range = 10;
        int num = (int)(Math.random()*range);
        while(true){
            System.out.println("Угадайте число от 0 до "+range);
            int input_number = scanner.nextInt();
            if (input_number == num){
                System.out.println("Вы угадали число "+num);
                break;
            }else if(input_number>num){
                System.out.println("Число меньше");
            }else{
                System.out.println("Число больше");
            }
        }
        scanner.close();
    }
}