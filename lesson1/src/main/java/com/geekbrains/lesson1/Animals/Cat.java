package com.geekbrains.lesson1.Animals;

public class Cat extends Animal{

    public Cat(String name, String color, int age){
        super(name, color, age);
    }

    @Override
    public void voice() {
        System.out.println(name + " meow!");
    }
}
