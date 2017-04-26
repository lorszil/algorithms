package stack.java;

public class Main {

    public static void main(String[] args) {

        Stack <String> stack = new Stack();
        stack.putElem("3");
        stack.putElem("4");
        stack.putElem("12");
        System.out.println(stack.popElem());
        System.out.println(stack.popElem());
        System.out.println(stack.popElem());

        Stack <Integer> stackv = new Stack();
        stackv.putElem(4);
        stackv.putElem(5);
        stackv.putElem(14);
        System.out.println(stackv.popElem());
        System.out.println(stackv.popElem());
        System.out.println(stackv.popElem());

    }
}
