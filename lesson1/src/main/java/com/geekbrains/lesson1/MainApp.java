package com.geekbrains.lesson1;

public class MainApp {
    public static void main(String[] args) {
        Cat cat = new Cat("Barsik", "White", 2);
        Cat cat2 = new Cat("Mursik", "Black", 4);
        cat.setName("A");
        System.out.println(cat.getName());
        cat.info();
        cat2.meow();
    }
}
