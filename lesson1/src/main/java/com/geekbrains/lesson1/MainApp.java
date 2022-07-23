package com.geekbrains.lesson1;

import com.geekbrains.lesson1.Animals.Cat;

public class MainApp {
    public static void main(String[] args) {
        Cat cat = new Cat("Barsik", "White", 2);
        Cat cat2 = new Cat("Mursik", "Black", 4);
        cat.info();
        cat2.info();
    }
}