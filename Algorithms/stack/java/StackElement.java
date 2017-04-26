package stack.java;

public class StackElement <T> {

    T data;
    StackElement <T> prev;
    StackElement <T> next;



    public StackElement(T data){
        this.data = data;
    }

}
